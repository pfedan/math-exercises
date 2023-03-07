import { Flex, Grid } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Pyramid from '../Components/Pyramid'
import { NumericSetting } from '../Components/Setting'
import { rng } from '../utils'
import { ExerciseTabPanel } from './ExerciseTabPanel'

type PyramidSettings = {
  minValue: number
  maxValue: number
  gaps: 1 | 2 | 3
  rows: number
}

PyramidTabPanel.defaultProps = {
  minValue: 0,
  maxValue: 10,
  gaps: 3,
  rows: 6,
}

export default function PyramidTabPanel(props: PyramidSettings) {
  const { t } = useTranslation()

  const [settings, setSettings] = useState<PyramidSettings>(props)

  const [exercises, setExercises] = useState<JSX.Element[]>([])

  rng.setSeed(Math.random())

  const generateExercises = useCallback(() => {
    const exercises = Array.from({ length: settings.rows * 3 }, (_, index) => (
      <Pyramid key={index.toString()} {...settings} />
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
    setSettings({ ...settings, minValue })
  }
  const handleMaxSummandAbsValueChange = (maxValue: number) => {
    setSettings({ ...settings, maxValue })
  }

  const settingsMenu = (
    <Flex direction="column" gap={4} className="no-print" mb={6} maxW="250px">
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
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {exercises.map((e) => e)}
      </Grid>
    </ExerciseTabPanel>
  )
}
