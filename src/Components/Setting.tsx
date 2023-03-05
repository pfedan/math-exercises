import {
  Flex,
  Spacer,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from '@chakra-ui/react'

export const Setting = (props: {
  title: string
  val: number
  onChange: (n: number) => void
  min: number
  max: number
}) => (
  <Flex width="fit-content" gap={4} alignItems="center" minWidth="250px">
    <Text>{props.title}:</Text>
    <Spacer />
    <NumberInput
      defaultValue={props.val}
      min={props.min}
      max={props.max}
      onChange={(_, n) => props.onChange(n)}
      step={1}
      width="100px"
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </Flex>
)
