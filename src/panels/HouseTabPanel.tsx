import { Flex, Grid } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import House from '../Components/House'
import { NumericSetting } from '../Components/Setting'
import { rng } from '../utils'
import { ExerciseTabPanel } from './ExerciseTabPanel'

type HouseSettings = {
  minValue: number
  maxValue: number
  rows: number
}

HouseTabPanel.defaultProps = {
  minValue: 3,
  maxValue: 30,
  rows: 5,
}

export default function HouseTabPanel(props: HouseSettings) {
  const { t } = useTranslation()

  const [settings, setSettings] = useState<HouseSettings>(props)

  const [exercises, setExercises] = useState<JSX.Element[]>([])

  rng.setSeed(Math.random())

  const generateExercises = useCallback(() => {
    const exercises = Array.from({ length: settings.rows * 4 }, (_, index) => (
      <House key={index.toString()} {...settings} />
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

  const handleMinSummandAbsValueChange = (minValue: number) => {
    setSettings({ ...settings, minValue: minValue < 3 ? 3 : minValue })
  }
  const handleMaxSummandAbsValueChange = (maxValue: number) => {
    setSettings({ ...settings, maxValue })
  }

  const settingsMenu = (
    <Flex direction="column" gap={4} mb={6} maxW="250px">
      <NumericSetting title={t`rows`} max={100} min={1} val={settings.rows} onChange={handleCountChange} />
      <NumericSetting
        title={t`minValue`}
        max={settings.maxValue - 1}
        min={3}
        val={settings.minValue}
        onChange={handleMinSummandAbsValueChange}
      />
      <NumericSetting
        title={t`maxValue`}
        max={100}
        min={settings.minValue + 1}
        val={settings.maxValue}
        onChange={handleMaxSummandAbsValueChange}
      />
    </Flex>
  )

  return (
    <ExerciseTabPanel handleReGenerate={handleReGenerate} settings={settingsMenu}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {exercises.map((e) => e)}
      </Grid>
    </ExerciseTabPanel>
  )
}
