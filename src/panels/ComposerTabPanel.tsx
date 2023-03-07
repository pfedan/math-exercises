import { Center, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, TabPanel } from '@chakra-ui/react'
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

  return (
    <TabPanel>
      <Center>
        <Flex gap={8}>
          <Flex direction="column" gap={4} className="no-print">
            <Menu placement="left-start">
              <MenuButton as={IconButton} size="lg" width="fit-content" borderRadius={'50%'} icon={<FaPlus />} />
              <MenuList>
                <MenuItem onClick={() => handleAddOne(<AddSubtractTabPanel rows={4} />)}>{t`addSubtract`}</MenuItem>
                <MenuItem onClick={() => handleAddOne(<PyramidTabPanel rows={1} />)}>{t`pyramids`}</MenuItem>
                <MenuItem onClick={() => handleAddOne(<HouseTabPanel rows={1} />)}>{t`houses`}</MenuItem>
                <MenuItem onClick={() => handleAddOne(<ThereAndBackTabPanel rows={1} />)}>{t`thereAndBack`}</MenuItem>
              </MenuList>
            </Menu>
            <IconButton
              icon={<FaTrash />}
              title={t`deleteAll` ?? ''}
              onClick={handleDeleteAll}
              aria-label="clear"
              width="fit-content"
              borderRadius={'50%'}
              size="lg"
            />
          </Flex>
          <Flex direction={'column'}>{panels}</Flex>
        </Flex>
      </Center>
    </TabPanel>
  )
}
