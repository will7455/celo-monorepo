import TextInput from '@celo/react-components/components/TextInput.v2'
import colors from '@celo/react-components/styles/colors'
import { componentStyles } from '@celo/react-components/styles/styles'
import * as React from 'react'
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native'

export interface SingleDigitInputProps {
  inputValue: string
  inputPlaceholder: string
  onInputChange: (value: string) => void
  forwardedRef?:
    | ((instance: RNTextInput | null) => void)
    | React.MutableRefObject<RNTextInput | null>
    | null
}

type Props = Omit<RNTextInputProps, 'style'> & SingleDigitInputProps

function SingleDigitTextInput({
  inputValue,
  inputPlaceholder,
  onInputChange,
  forwardedRef,
}: Props) {
  return (
    <TextInput
      value={inputValue}
      placeholder={inputPlaceholder}
      onChangeText={onInputChange}
      maxLength={1}
      showClearButton={false}
      style={styles.codeInput}
      inputStyle={styles.inputText}
      ref={forwardedRef}
    />
  )
}

const SingleDigitInput = React.forwardRef<RNTextInput, Props>((props, ref) => {
  return <SingleDigitTextInput {...props} forwardedRef={ref} />
})

export default SingleDigitInput

const styles = StyleSheet.create({
  codeInput: {
    ...componentStyles.roundedBorder,
    flex: 0,
    backgroundColor: '#FFF',
    borderColor: colors.inputBorder,
    height: 50,
    width: 50,
    marginVertical: 5,
  },
  inputText: {
    textAlign: 'center',
  },
})
