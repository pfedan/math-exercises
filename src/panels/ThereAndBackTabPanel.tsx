import { Flex, Grid, Radio, RadioGroup, Spacer, Stack, Text } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NumericSetting } from '../Components/Setting'
import ThereAndBack from '../Components/ThereAndBack'
import { rng } from '../utils'
import { ExerciseTabPanel } from './ExerciseTabPanel'

type ThereAndBackSettings = {
  minValue: number
  maxValue: number
  type: 'add' | 'mul'
  rows: number
}

ThereAndBackTabPanel.defaultProps = {
  minValue: 0,
  maxValue: 10,
  type: 'add',
  rows: 6,
}

export default function ThereAndBackTabPanel(props: ThereAndBackSettings) {
  const { t } = useTranslation()

  const [settings, setSettings] = useState<ThereAndBackSettings>(props)

  const [exercises, setExercises] = useState<JSX.Element[]>([])

  rng.setSeed(Math.random())

  const generateExercises = useCallback(() => {
    const exercises = Array.from({ length: settings.rows * 4 }, (_, index) => (
      <ThereAndBack key={index.toString()} {...settings} />
    ))
    setExercises(exercises)
  }, [settings])

  useEffect(() => {
    generateExercises()
  }, [settings, generateExercises])

  const handleReGenerate = () => {
    generateExercises()
  }

  const handleCountChange = (rows: number) => {
    setSettings({
      ...settings,
      rows: rows > 100 ? 100 : rows,
    })
  }

  const handleTypeChange = (type: 'add' | 'mul') => {
    setSettings({ ...settings, type })
  }

  const handleMinSummandAbsValueChange = (minValue: number) => {
    setSettings({ ...settings, minValue })
  }
  const handleMaxSummandAbsValueChange = (maxValue: number) => {
    setSettings({ ...settings, maxValue })
  }

  const settingsMenu = (
    <Flex direction="column" gap={4} className="no-print" mb={6} maxW="250px">
      <Flex width="fit-content" gap={4} alignItems="center" minWidth="250px">
        <Text>{t`type`}:</Text>
        <Spacer />
        <RadioGroup onChange={handleTypeChange} value={settings.type}>
          <Stack direction="row">
            <Radio value="add">{t`sum`}</Radio>
            <Radio value="mul">{t`product`}</Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <NumericSetting title={t`rows`} max={100} min={1} val={settings.rows} onChange={handleCountChange} />
      <NumericSetting
        title={t`minValue`}
        max={settings.maxValue - 1}
        min={0}
        val={settings.minValue}
        onChange={handleMinSummandAbsValueChange}
      />
      <NumericSetting
        title={t`minValue`}
        max={100}
        min={settings.minValue + 1}
        val={settings.maxValue}
        onChange={handleMaxSummandAbsValueChange}
      />
    </Flex>
  )

  return (
    <ExerciseTabPanel handleReGenerate={handleReGenerate} settings={settingsMenu}>
      <Grid templateColumns="repeat(4, 1fr)" gap={12}>
        {exercises.map((e) => e)}
      </Grid>
    </ExerciseTabPanel>
  )
}
