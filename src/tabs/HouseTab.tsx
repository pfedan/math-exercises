import { Flex, Center, Grid, Button } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { FaRandom } from 'react-icons/fa'
import House from '../Components/House'
import { Setting } from '../Components/Setting'
import { rng } from '../utils'

type HouseSettings = {
  minValue: number
  maxValue: number
  rows: number
}

export const HouseTab = () => {
  const [settings, setSettings] = useState<HouseSettings>({
    minValue: 3,
    maxValue: 30,
    rows: 5,
  })

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
          min={3}
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
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {exercises.map((e) => e)}
        </Grid>
      </Center>
    </>
  )
}
