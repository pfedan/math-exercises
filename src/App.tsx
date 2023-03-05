import { ChakraProvider, Box, theme, Flex, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { AddSubtractTab } from './tabs/AddSubtractTab'
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
              <Tab>Surprise</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <AddSubtractTab />
              </TabPanel>
              <TabPanel>
                <PyramidTab />
              </TabPanel>
              <TabPanel>
                <p>Can't wait to see it!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </ChakraProvider>
  )
}
