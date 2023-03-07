import { Box } from '@chakra-ui/react'
import { rng } from '../utils'
import { ThereAndBackSVG } from './ThereAndBackSVG'

type ThereAndBackProps = {
  minValue: number
  maxValue: number
  type: 'add' | 'mul'
}

ThereAndBack.defaultProps = { type: 'add', minValue: 0, maxValue: 10 }

export default function ThereAndBack(props: ThereAndBackProps) {
  const fields: (number | null)[] = Array.from({ length: 2 }, () => rng.int(props.minValue, props.maxValue))
  switch (props.type) {
    case 'add':
      fields.push((fields[0] as number) + (fields[1] as number))
      break
    case 'mul':
      fields.push((fields[0] as number) * (fields[1] as number))
      break

    default:
      fields.push((fields[0] as number) + (fields[1] as number))
      break
  }

  fields[rng.int(0, 2)] = null

  return (
    <Box>
      <ThereAndBackSVG fields={fields} type={props.type} />
    </Box>
  )
}
