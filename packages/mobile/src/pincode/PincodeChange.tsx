/**
 * This is a reactnavigation SCREEN, which we use to change the user's PIN.
 */
import colors from '@celo/react-components/styles/colors.v2'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SafeAreaView, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import i18n from 'src/i18n'
import { headerWithBackButton } from 'src/navigator/Headers'
import { checkPin, isPinValid } from 'src/pincode/authentication'
import Pincode from 'src/pincode/Pincode'
import { currentAccountSelector } from 'src/web3/selectors'

function PincodeChange() {
  const [oldPin, setOldPin] = useState('')
  const [newPin, setNewPin] = useState('')
  const [newConfirmPin, setNewConfirmPin] = useState('')
  const [step, setCurrentStep] = useState(0)
  const [errorText, setErrorText] = useState()

  const { t } = useTranslation()
  const currentAccount = useSelector(currentAccountSelector)

  const requiredPins = [
    {
      title: t('pincodeChange.inputOldPin'),
      pin: oldPin,
      onChangePin: (pin: string) => {
        setOldPin(pin)
        setErrorText(undefined)
      },
      onCompletePin: async (pin: string) => {
        const oldPinIsCorrect = await checkPin(pin, currentAccount || '')
        if (oldPinIsCorrect) {
          setCurrentStep(1)
          setErrorText(undefined)
        } else {
          setOldPin('')
          setErrorText(t('pincodeChange.invalidOldPin'))
        }
      },
    },
    {
      title: t('pincodeChange.inputNewPin'),
      pin: newPin,
      onChangePin: (pin: string) => {
        setNewPin(pin)
        setErrorText(undefined)
      },
      onCompletePin: (pin: string) => {
        if (isPinValid(pin)) {
          setCurrentStep(2)
          setErrorText(undefined)
        } else {
          setNewPin('')
          setErrorText(t('pincodeChange.newPinInvalid'))
        }
      },
    },
    {
      title: t('pincodeChange.inputNewConfirmPin'),
      pin: newConfirmPin,
      onChangePin: (pin: string) => {
        setNewConfirmPin(pin)
        setErrorText(undefined)
      },
      onCompletePin: (pin: string) => {
        if (pin === newPin) {
          // TODO
        } else {
          setNewConfirmPin('')
          setErrorText(t('pincodeChange.pinsDontMatch'))
        }
      },
    },
  ]

  const currentStep = requiredPins[step]
  return (
    <SafeAreaView style={style.container}>
      <Pincode
        title={currentStep.title}
        errorText={errorText}
        pin={currentStep.pin}
        onChangePin={currentStep.onChangePin}
        onCompletePin={currentStep.onCompletePin}
      />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    justifyContent: 'space-between',
  },
})

PincodeChange.navigationOptions = () => ({
  ...headerWithBackButton,
  headerTitle: i18n.t('global:pincodeChangeTitle'),
})

export default PincodeChange
