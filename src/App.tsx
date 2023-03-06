import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Spacer,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Text,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { ColorModeSwitcher } from './Components/ColorModeSwitcher'
import { AddSubtractTabPanel } from './panels/AddSubtractTabPanel'
import { HouseTabPanel } from './panels/HouseTabPanel'
import { PyramidTabPanel } from './panels/PyramidTabPanel'
import ReactCountryFlag from 'react-country-flag'

export const App = () => {
  const { t, i18n } = useTranslation()
  const flagCode = i18n.language.split('-')[0] === 'de' ? 'DE' : 'GB'

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Flex direction="column" p={3}>
          <Flex alignItems={'end'} className="no-print">
            <Spacer />
            <Menu>
              <MenuButton as={IconButton} icon={<ReactCountryFlag countryCode={flagCode} />} />
              <MenuList>
                <MenuItem onClick={() => i18n.changeLanguage('en')}>
                  <Flex width="70%">
                    <ReactCountryFlag countryCode={'GB'} /> <Text ml={4}>English</Text>
                  </Flex>
                </MenuItem>
                <MenuItem onClick={() => i18n.changeLanguage('de')}>
                  <Flex>
                    <ReactCountryFlag countryCode={'DE'} /> <Text ml={4}>Deutsch</Text>
                  </Flex>
                </MenuItem>
              </MenuList>
            </Menu>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
          <Tabs align="center">
            <TabList className="no-print">
              <Tab>{t`addSubtract`}</Tab>
              <Tab>{t`pyramids`}</Tab>
              <Tab>{t`houses`}</Tab>
            </TabList>

            <TabPanels>
              <AddSubtractTabPanel />
              <PyramidTabPanel />
              <HouseTabPanel />
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </ChakraProvider>
  )
}
