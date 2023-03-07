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
import { useTranslation } from 'react-i18next'
import { FaRandom, FaWrench } from 'react-icons/fa'

type ExerciseTabProps = {
  settings: JSX.Element
  handleReGenerate: () => void
  children: string | JSX.Element | JSX.Element[]
}
export const ExerciseTabPanel = (props: ExerciseTabProps) => {
  const { t } = useTranslation()

  return (
    <TabPanel>
      <Center>
        <Flex gap={8}>
          <Flex direction="column" gap={4} className="no-print">
            <Popover placement="left-start" closeOnBlur>
              <PopoverTrigger>
                <IconButton
                  icon={<FaWrench />}
                  title={t('settings') ?? ''}
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
                  <Text fontWeight="bold">{t`settings`}</Text>
                </PopoverHeader>
                <PopoverBody>{props.settings}</PopoverBody>
              </PopoverContent>
            </Popover>
            <IconButton
              icon={<FaRandom />}
              title={t('reCalculate') ?? ''}
              onClick={props.handleReGenerate}
              aria-label="re-generate"
              width="fit-content"
              borderRadius={'50%'}
              size="lg"
            />
          </Flex>
          {props.children}
        </Flex>
      </Center>
    </TabPanel>
  )
}
