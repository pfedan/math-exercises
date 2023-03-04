import { Td, Tr } from "@chakra-ui/react";
import { rng } from "../utils";

type AddSubtractProps = {
  numSummands: number;
  minSummandAbsValue?: number;
  maxSummandAbsValue?: number;
  forcePositiveResult?: boolean;
};

type AddSubtractExercise = {
  summands: number[];
  signs: ("+" | "-")[];
  result: number;
};

export const AddSubtract = ({
  numSummands,
  minSummandAbsValue = 1,
  maxSummandAbsValue = 10,
  forcePositiveResult = false,
}: AddSubtractProps) => {
  const generate = (): AddSubtractExercise => {
    const summands = Array.from({ length: numSummands }, () =>
      rng.int(minSummandAbsValue, maxSummandAbsValue)
    );
    const signs = Array.from({ length: numSummands - 1 }, () =>
      rng.double() > 0.5 ? "+" : "-"
    );
    const result = summands.reduce((p, c, i) => {
      const sign = signs[i - 1] ?? "+";
      return sign === "+" ? p + c : p - c;
    }, 0);

    return { summands, signs, result };
  };

  let exercise: AddSubtractExercise = generate();
  while (forcePositiveResult && exercise.result < 0) {
    exercise = generate();
  }

  const gapPosition = rng.int(0, numSummands);

  return (
    <Tr>
      {exercise.summands.map((n, i) => {
        return (
          <>
            <Td>{i === gapPosition ? "__" : n}</Td>
            {i < exercise.signs.length ? <Td>{exercise.signs[i]}</Td> : null}
          </>
        );
      })}
      <Td>=</Td>
      <Td>{gapPosition === numSummands ? "__" : exercise.result}</Td>
    </Tr>
  );
};
