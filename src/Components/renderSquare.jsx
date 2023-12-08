import Knight from "./Knight";
import Square from "./Square";

function renderSquare(x, y, [KnightX, KnightY]) {
  const black = (x + y) % 2 === 1;
  const isKnightHere = KnightX === x && KnightY === y;
  const piece = isKnightHere ? <Knight /> : null;
  return <Square black={black}>{piece}</Square>;
}
