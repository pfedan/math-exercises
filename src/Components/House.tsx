import { Box } from '@chakra-ui/react'
import { rng } from '../utils'
import { HouseSVG } from './HouseSVG'

type HouseProps = {
  minValue: number
  maxValue: number
}

House.defaultProps = { minValue: 0, maxValue: 10 }

export default function House(props: HouseProps) {
  const topValue = rng.int(props.minValue, props.maxValue)
  const fields = rng.intArrayUnique(3, 0, topValue)

  const displayFields = [topValue, ...fields]

  return (
    <Box>
      <HouseSVG fields={displayFields} />
    </Box>
  )
}
