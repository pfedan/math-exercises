import {
  Center,
  Flex,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Text,
  PopoverHeader,
  PopoverBody,
  TabPanel,
} from '@chakra-ui/react'
import { FaRandom, FaWrench } from 'react-icons/fa'

type ExerciseTabProps = {
  settings: JSX.Element
  handleReGenerate: () => void
  children: string | JSX.Element | JSX.Element[]
}
export const ExerciseTab = (props: ExerciseTabProps) => {
  return (
    <TabPanel>
      <Center>
        <Flex gap={8}>
          <Flex direction="column" gap={4} className="no-print">
            <IconButton
              icon={<FaRandom />}
              onClick={props.handleReGenerate}
              aria-label="re-generate"
              width="fit-content"
              borderRadius={'50%'}
              size="lg"
            />
            <Popover placement="left-start">
              <PopoverTrigger>
                <IconButton
                  icon={<FaWrench />}
                  aria-label="settings"
                  width="fit-content"
                  borderRadius={'50%'}
                  size="lg"
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>
                  <Text fontWeight="bold">Settings</Text>
                </PopoverHeader>
                <PopoverBody>{props.settings}</PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
          {props.children}
        </Flex>
      </Center>
    </TabPanel>
  )
}
