import { put, select, takeLeading } from 'redux-saga/effects'
import {
  Actions,
  SetPincodeAction,
  setPincodeFailure,
  setPincodeSuccess,
} from 'src/account/actions'
import { PincodeType } from 'src/account/reducer'
import { pincodeTypeSelector } from 'src/account/selectors'
import { showError } from 'src/alert/actions'
import { ErrorMessages } from 'src/app/ErrorMessages'
import { navigate, navigateBack } from 'src/navigator/NavigationService'
import { Screens } from 'src/navigator/Screens'
import { getCachedPincode, setCachedPincode } from 'src/pincode/PincodeCache'
import Logger from 'src/utils/Logger'

const TAG = 'account/saga'

export function* setPincode({ pincodeType, pin }: SetPincodeAction) {
  try {
    if (pincodeType === PincodeType.CustomPin && pin) {
      Logger.debug(TAG + '@setPincode', 'Pincode set using user provided pin')
      setCachedPincode(pin)
    } else {
      throw new Error('Pincode type must be phone auth or must provide pin')
    }

    yield put(setPincodeSuccess(pincodeType))
    Logger.info(TAG + '@setPincode', 'Pincode set successfully')
  } catch (error) {
    Logger.error(TAG + '@setPincode', 'Failed to set pincode', error)
    yield put(showError(ErrorMessages.SET_PIN_FAILED))
    yield put(setPincodeFailure())
  }
}

export function* getPincode(withVerification = true) {
  const pincodeType = yield select(pincodeTypeSelector)

  if (pincodeType === PincodeType.Unset) {
    Logger.error(TAG + '@getPincode', 'Pin has never been set')
    throw Error('Pin has never been set')
  }

  if (pincodeType === PincodeType.CustomPin) {
    Logger.debug(TAG + '@getPincode', 'Getting custom pin')
    const cachedPin = getCachedPincode()
    if (cachedPin) {
      return cachedPin
    }

    const pin = yield new Promise((resolve) => {
      navigate(Screens.PincodeEnter, {
        onSuccess: resolve,
        withVerification,
      })
    })

    navigateBack()

    if (!pin) {
      throw new Error('Pincode confirmation returned empty pin')
    }
    setCachedPincode(pin)
    return pin
  }
}

export function* accountSaga() {
  yield takeLeading(Actions.SET_PINCODE, setPincode)
}
