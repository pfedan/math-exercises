import {
  Button,
  Center,
  Flex,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  TabPanel,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaPlus, FaTrash } from 'react-icons/fa'
import AddSubtractTabPanel from './AddSubtractTabPanel'
import HouseTabPanel from './HouseTabPanel'
import PyramidTabPanel from './PyramidTabPanel'
import ThereAndBackTabPanel from './ThereAndBackTabPanel'

export const ComposerTabPanel = () => {
  const { t } = useTranslation()

  const [panels, setPanels] = useState<JSX.Element[]>([])

  const handleDeleteAll = () => {
    setPanels([])
  }

  const handleAddOne = (e: JSX.Element) => {
    setPanels([...panels, { ...e, key: panels.length }])
  }

  const AddPanelMenu = () => {
    return (
      <Flex direction={'column'} gap={3}>
        <Button tabIndex={-1} onClick={() => handleAddOne(<AddSubtractTabPanel rows={4} />)}>{t`addSubtract`}</Button>
        <Button tabIndex={-1} onClick={() => handleAddOne(<PyramidTabPanel rows={1} />)}>{t`pyramids`}</Button>
        <Button tabIndex={-1} onClick={() => handleAddOne(<HouseTabPanel rows={1} />)}>{t`houses`}</Button>
        <Button tabIndex={-1} onClick={() => handleAddOne(<ThereAndBackTabPanel rows={1} />)}>{t`thereAndBack`}</Button>
      </Flex>
    )
  }

  return (
    <TabPanel>
      <Center>
        <Flex gap={8}>
          <Flex direction="column" gap={4} className="no-print">
            <IconButton
              icon={<FaTrash />}
              title={t`deleteAll` ?? ''}
              onClick={handleDeleteAll}
              aria-label="clear"
              width="fit-content"
              borderRadius={'50%'}
              size="lg"
            />

            <Popover placement="left-start">
              <PopoverTrigger>
                <IconButton
                  icon={<FaPlus />}
                  title={t`addPanelsHeader` ?? ''}
                  aria-label="add-one"
                  width="fit-content"
                  borderRadius={'50%'}
                  size="lg"
                />
              </PopoverTrigger>
              <Portal>
                <PopoverContent width={'240px'}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>
                    <Text fontWeight="bold">{t`addPanelsHeader`}</Text>
                  </PopoverHeader>
                  <PopoverBody>
                    <AddPanelMenu />
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </Flex>
          <Flex direction={'column'}>{panels}</Flex>
        </Flex>
      </Center>
    </TabPanel>
  )
}
