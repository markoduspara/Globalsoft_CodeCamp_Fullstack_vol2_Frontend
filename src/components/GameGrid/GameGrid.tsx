import { useEffect, useState } from 'react';
import Row from '../UI/Row/Row';
import Square from '../UI/Square/Square';
import { cloneDeep } from 'lodash';

const gridCount = 3;
const mockGridMatrix = [
  [
    { index: 1, value: '' },
    { index: 2, value: '' },
    { index: 3, value: '' },
  ],
  [
    { index: 4, value: '' },
    { index: 5, value: '' },
    { index: 6, value: '' },
  ],
  [
    { index: 7, value: '' },
    { index: 8, value: '' },
    { index: 9, value: '' },
  ],
];
//let gridCount : number = Number(prompt("Grid Size?"));
function GameGrid() {
  const [gridMatrix, setGridMatrix] = useState(mockGridMatrix);

  useEffect(() => {
    console.log();
  }, []);

  /*   const buttonClick = ({ squareIndex, rowIndex }) => {
    console.log(squareIndex, rowIndex);
    let newGridMatrix = gridMatrix;
    newGridMatrix[rowIndex][squareIndex].value = 'X';
    setGridMatrix([...newGridMatrix]);
  }; */
  const buttonClick = ({ squareIndex, rowIndex }) => {
    console.log(squareIndex, rowIndex);
    setGridMatrix((currentState) => {
      let newGridMatrix = [...currentState];
      newGridMatrix[rowIndex][squareIndex].value = 'X';
      return newGridMatrix;
    });
  };
  console.log(gridMatrix);
  return (
    <div>
      {gridMatrix.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((square, squareIndex) => (
            <Square
              key={square.index}
              value={square.value}
              disabled={!!square.value}
              onClick={() => buttonClick({ squareIndex, rowIndex })}
            />
          ))}
        </Row>
      ))}
    </div>
  );
}

export default GameGrid;
