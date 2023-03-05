import { ChakraProvider, Box, theme, Flex, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { AddSubtractTab } from './tabs/AddSubtractTab'
import { HouseTab } from './tabs/HouseTab'
import { PyramidTab } from './tabs/PyramidTab'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex direction="column" p={3}>
          <Flex alignItems={'end'} className="no-print">
            <Spacer />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
          <Tabs>
            <TabList className="no-print">
              <Tab>Calc-a-gap</Tab>
              <Tab>Pyramids</Tab>
              <Tab>House</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <AddSubtractTab />
              </TabPanel>
              <TabPanel>
                <PyramidTab />
              </TabPanel>
              <TabPanel>
                <HouseTab />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </ChakraProvider>
  )
}
