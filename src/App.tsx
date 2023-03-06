import { ChakraProvider, Box, theme, Flex, Spacer, Tab, TabList, TabPanels, Tabs } from '@chakra-ui/react'
import { ColorModeSwitcher } from './Components/ColorModeSwitcher'
import { AddSubtractTabPanel } from './panels/AddSubtractTabPanel'
import { HouseTabPanel } from './panels/HouseTabPanel'
import { PyramidTabPanel } from './panels/PyramidTabPanel'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex direction="column" p={3}>
          <Flex alignItems={'end'} className="no-print">
            <Spacer />
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
          <Tabs align="center">
            <TabList className="no-print">
              <Tab>Calc-a-gap</Tab>
              <Tab>Pyramids</Tab>
              <Tab>House</Tab>
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
