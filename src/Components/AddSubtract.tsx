import { Td, Tr } from '@chakra-ui/react'
import React from 'react'
import { rng } from '../utils'

type AddSubtractProps = {
  numSummands: number
  minSummandAbsValue?: number
  maxSummandAbsValue?: number
  forcePositiveResult?: boolean
}

export type AddSubtractExercise = {
  summands: number[]
  signs: ('+' | '-')[]
  result: number
  gapPosition: number
}

export const AddSubtract = ({
  numSummands,
  minSummandAbsValue = 1,
  maxSummandAbsValue = 10,
  forcePositiveResult = false,
}: AddSubtractProps) => {
  const generate = (): AddSubtractExercise => {
    const summands = Array.from({ length: numSummands }, () => rng.int(minSummandAbsValue, maxSummandAbsValue))
    const signs = Array.from({ length: numSummands - 1 }, () => (rng.double() > 0.5 ? '+' : '-'))
    const result = summands.reduce((p, c, i) => {
      const sign = signs[i - 1] ?? '+'
      return sign === '+' ? p + c : p - c
    }, 0)

    const gapPosition = rng.int(0, numSummands)

    return { summands, signs, result, gapPosition }
  }

  let exercise: AddSubtractExercise = generate()
  while (forcePositiveResult && exercise.result < 0) {
    exercise = generate()
  }

  return (
    <Tr>
      {exercise.summands.map((n, i) => {
        return (
          <React.Fragment key={i.toString()}>
            <Td>{i === exercise.gapPosition ? '__' : n}</Td>
            {i < exercise.signs.length ? <Td>{exercise.signs[i]}</Td> : undefined}
          </React.Fragment>
        )
      })}
      <Td>=</Td>
      <Td>{exercise.gapPosition === numSummands ? '__' : exercise.result}</Td>
    </Tr>
  )
}
