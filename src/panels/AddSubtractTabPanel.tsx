import { Flex, TableContainer, Table, Tbody } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AddSubtract } from '../Components/AddSubtract'
import { NumericSetting } from '../Components/Setting'
import { rng } from '../utils'
import { ExerciseTab } from './ExerciseTabPanel'

type AddSubtractSettings = {
  numSummands: number
  minSummandAbsValue: number
  maxSummandAbsValue: number
  forcePositiveResult: boolean
  exerciseCount: number
}

export const AddSubtractTabPanel = () => {
  const { t } = useTranslation()

  const [settings, setSettings] = useState<AddSubtractSettings>({
    numSummands: 3,
    minSummandAbsValue: 0,
    maxSummandAbsValue: 10,
    forcePositiveResult: true,
    exerciseCount: 10,
  })

  const [exercises, setExercises] = useState<JSX.Element[]>([])

  rng.setSeed(Math.random())

  const generateExercises = useCallback(() => {
    const exercises = Array.from({ length: settings.exerciseCount }, (_, index) => (
      <AddSubtract key={index.toString()} {...settings} />
    ))
    setExercises(exercises)
  }, [settings])

  useEffect(() => {
    generateExercises()
  }, [settings, generateExercises])

  const handleReGenerate = () => {
    generateExercises()
  }

  const handleCountChange = (exerciseCount: number) => {
    setSettings({
      ...settings,
      exerciseCount: exerciseCount > 100 ? 100 : exerciseCount,
    })
  }

  const handleNumSummandsChange = (numSummands: number) => {
    setSettings({ ...settings, numSummands })
  }

  const handleMinSummandAbsValueChange = (minSummandAbsValue: number) => {
    setSettings({ ...settings, minSummandAbsValue })
  }
  const handleMaxSummandAbsValueChange = (maxSummandAbsValue: number) => {
    setSettings({ ...settings, maxSummandAbsValue })
  }

  const settingsMenu = (
    <Flex direction="column" gap={4} mb={6} maxW="250px">
      <NumericSetting title={t`count`} max={100} min={1} val={settings.exerciseCount} onChange={handleCountChange} />
      <NumericSetting
        title={t`summandCount`}
        max={8}
        min={2}
        val={settings.numSummands}
        onChange={handleNumSummandsChange}
      />
      <NumericSetting
        title={t`minValue`}
        max={settings.maxSummandAbsValue - 1}
        min={0}
        val={settings.minSummandAbsValue}
        onChange={handleMinSummandAbsValueChange}
      />
      <NumericSetting
        title={t`maxValue`}
        max={100}
        min={settings.minSummandAbsValue + 1}
        val={settings.maxSummandAbsValue}
        onChange={handleMaxSummandAbsValueChange}
      />
    </Flex>
  )

  return (
    <ExerciseTab handleReGenerate={handleReGenerate} settings={settingsMenu}>
      <TableContainer width={'fit-content'}>
        <Table>
          <Tbody>{exercises}</Tbody>
        </Table>
      </TableContainer>
    </ExerciseTab>
  )
}
