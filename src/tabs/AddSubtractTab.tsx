import { Flex, Center, TableContainer, Table, Tbody } from "@chakra-ui/react";
import { useState } from "react";
import { AddSubtract } from "../Components/AddSubtract";
import { Setting } from "../Components/Setting";
import { rng } from "../utils";

type AddSubtractSettings = {
  numSummands: number;
  minSummandAbsValue: number;
  maxSummandAbsValue: number;
  forcePositiveResult: boolean;
  exerciseCount: number;
};

export const AddSubtractTab = () => {
  const [settings, setSettings] = useState<AddSubtractSettings>({
    numSummands: 3,
    minSummandAbsValue: 0,
    maxSummandAbsValue: 10,
    forcePositiveResult: true,
    exerciseCount: 10,
  });

  rng.setSeed(Math.random());

  const exercises = Array.from({ length: settings.exerciseCount }, () => (
    <AddSubtract {...settings} />
  ));

  const handleCountChange = (exerciseCount: number) => {
    setSettings({
      ...settings,
      exerciseCount: exerciseCount > 100 ? 100 : exerciseCount,
    });
  };

  const handleNumSummandsChange = (numSummands: number) => {
    setSettings({ ...settings, numSummands });
  };

  const handleMinSummandAbsValueChange = (minSummandAbsValue: number) => {
    setSettings({ ...settings, minSummandAbsValue });
  };
  const handleMaxSummandAbsValueChange = (maxSummandAbsValue: number) => {
    setSettings({ ...settings, maxSummandAbsValue });
  };

  return (
    <>
      <Flex direction="column" gap={4} className="no-print">
        <Setting
          title="Count"
          max={100}
          min={1}
          val={settings.exerciseCount}
          onChange={handleCountChange}
        />
        <Setting
          title="Summands"
          max={8}
          min={2}
          val={settings.numSummands}
          onChange={handleNumSummandsChange}
        />
        <Setting
          title="min value"
          max={settings.maxSummandAbsValue - 1}
          min={0}
          val={settings.minSummandAbsValue}
          onChange={handleMinSummandAbsValueChange}
        />
        <Setting
          title="max value"
          max={100}
          min={settings.minSummandAbsValue + 1}
          val={settings.maxSummandAbsValue}
          onChange={handleMaxSummandAbsValueChange}
        />
      </Flex>

      <Center>
        <TableContainer width={"fit-content"}>
          <Table>
            <Tbody>{exercises}</Tbody>
          </Table>
        </TableContainer>
      </Center>
    </>
  );
};
