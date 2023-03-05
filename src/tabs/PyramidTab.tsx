import { Flex, Center, Grid, Button } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { FaRandom } from 'react-icons/fa'
import Pyramid from '../Components/Pyramid'
import { Setting } from '../Components/Setting'
import { rng } from '../utils'

type PyramidSettings = {
  minValue: number
  maxValue: number
  gaps: 1 | 2 | 3
  rows: number
}

export const PyramidTab = () => {
  const [settings, setSettings] = useState<PyramidSettings>({
    minValue: 0,
    maxValue: 10,
    gaps: 3,
    rows: 6,
  })

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

  return (
    <>
      <Flex direction="column" gap={4} className="no-print" mb={6} maxW="250px">
        <Button leftIcon={<FaRandom />} onClick={handleReGenerate}>
          Re-generate
        </Button>
        <Setting title="Rows" max={100} min={1} val={settings.rows} onChange={handleCountChange} />
        <Setting
          title="min value"
          max={settings.maxValue - 1}
          min={0}
          val={settings.minValue}
          onChange={handleMinSummandAbsValueChange}
        />
        <Setting
          title="max value"
          max={100}
          min={settings.minValue + 1}
          val={settings.maxValue}
          onChange={handleMaxSummandAbsValueChange}
        />
      </Flex>

      <Center>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {exercises.map((e) => e)}
        </Grid>
      </Center>
    </>
  )
}
