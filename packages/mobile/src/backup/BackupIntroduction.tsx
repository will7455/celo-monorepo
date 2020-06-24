import Button from '@celo/react-components/components/Button.v2'
import TextButton from '@celo/react-components/components/TextButton.v2'
import { default as colors, default as colorsV2 } from '@celo/react-components/styles/colors.v2'
import fontStyles from '@celo/react-components/styles/fonts.v2'
import { Spacing } from '@celo/react-components/styles/styles.v2'
import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { useDispatch, useSelector } from 'react-redux'
import { backupCompletedSelector } from 'src/account/selectors'
import CeloAnalytics from 'src/analytics/CeloAnalytics'
import { CustomEventNames } from 'src/analytics/constants'
import { enterBackupFlow, exitBackupFlow } from 'src/app/actions'
import DelayButton from 'src/backup/DelayButton'
import { useAccountKey } from 'src/backup/utils'
import { Namespaces } from 'src/i18n'
import Logo from 'src/icons/Logo.v2'
import DrawerTopBar from 'src/navigator/DrawerTopBar'
import { emptyHeader, headerWithBackButton } from 'src/navigator/Headers.v2'
import { navigate } from 'src/navigator/NavigationService'
import { Screens } from 'src/navigator/Screens'
import { StackParamList } from 'src/navigator/types'

type ScreenProps = StackScreenProps<StackParamList, Screens.BackupIntroduction>
type Props = ScreenProps

function BackupIntroduction({ route, navigation }: Props) {
  const backupCompleted = useSelector(backupCompletedSelector)
  const dispatch = useDispatch()
  const { t } = useTranslation(Namespaces.backupKeyFlow6)
  const fromAccountScreen = route.params?.fromAccountScreen
  const accountKey = useAccountKey()

  function onPressBackup() {
    CeloAnalytics.track(CustomEventNames.backup_start)
    navigate(Screens.AccountKeyEducation)
  }

  function goToAccountKeyGuide() {
    navigate(Screens.AccountKeyEducation, { nextScreen: Screens.BackupIntroduction })
  }

  React.useEffect(() => {
    dispatch(enterBackupFlow())
    return () => {
      dispatch(exitBackupFlow)
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {!fromAccountScreen && <DrawerTopBar />}
      {backupCompleted ? (
        <ScrollView contentContainerStyle={styles.postSetupContainer}>
          <View>
            <Text style={fontStyles.h2}>{t('postSetupTitle')}</Text>
            <View style={styles.keyArea}>
              <Text style={fontStyles.large}>{accountKey}</Text>
            </View>
            <Text style={styles.postSetupBody}>{t('postSetupBody')}</Text>
          </View>
          <View style={styles.postSetupCTA}>
            <TextButton onPress={goToAccountKeyGuide}>{t('postSetupCTA')}</TextButton>
          </View>
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={styles.introContainer}>
          <Logo height={32} />
          <Text style={styles.h1}>{t('introTitle')}</Text>
          <Text style={styles.body}>{t('introBody')}</Text>
          <Button text={t('introPrimaryAction')} onPress={onPressBackup} />
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

BackupIntroduction.navigationOptions = ({ route }: ScreenProps) => {
  if (route.params?.fromAccountScreen) {
    return headerWithBackButton
  }

  return {
    ...emptyHeader,
    headerTitle: '',
    headerRight: () => <DelayButton />,
  }
}

export default BackupIntroduction

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  introContainer: {
    flex: 1,
    paddingHorizontal: Spacing.Thick24,
    justifyContent: 'center',
  },
  postSetupContainer: {
    paddingTop: Spacing.Thick24,
    paddingHorizontal: Spacing.Regular16,
  },
  h1: {
    ...fontStyles.h1,
    paddingBottom: Spacing.Regular16,
    paddingTop: Spacing.Regular16,
  },
  body: {
    ...fontStyles.large,
    paddingBottom: Spacing.Regular16,
  },
  keyArea: {
    padding: Spacing.Regular16,
    backgroundColor: colorsV2.brownFaint,
    marginTop: Spacing.Regular16,
  },
  postSetupBody: {
    ...fontStyles.regular,
    marginVertical: Spacing.Regular16,
  },
  postSetupCTA: {
    alignSelf: 'center',
    paddingVertical: Spacing.Regular16,
  },
})
