import { Box } from "@chakra-ui/react";
import { rng } from "../utils";
import { PyramidSVG } from "./PyramidSVG";

type PyramidProps = {
  gaps: 1 | 2 | 3;
  minValue: number;
  maxValue: number;
};

Pyramid.defaultProps = { gaps: 3, minValue: 0, maxValue: 10 };

export default function Pyramid(props: PyramidProps) {
  const fields = Array.from({ length: 3 }, () =>
    rng.int(props.minValue, props.maxValue)
  );
  fields.push(fields[0] + fields[1]);
  fields.push(fields[1] + fields[2]);
  fields.push(fields[3] + fields[4]);

  const gaps = rng.intArrayUnique(props.gaps, 0, 5);

  const displayFields = fields.map((v, i) => (gaps.includes(i) ? "" : v));

  return (
    <Box>
      <PyramidSVG fields={displayFields} />
    </Box>
  );
}
