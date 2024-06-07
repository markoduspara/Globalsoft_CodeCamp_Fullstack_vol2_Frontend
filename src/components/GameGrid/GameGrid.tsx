import { useEffect, useState } from 'react';
import Row from '../UI/Row/Row';
import Square from '../UI/Square/Square';
import { cloneDeep } from 'lodash';

const mockGridCount = 4;
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
const createGridMatrix = (gridCount) => {
  let tempGridMatrix: Array<Array<{ index: number; value: string }>> = [];
  for (let i = 0; i < gridCount; i++) {
    let tempArray: Array<{ index: number; value: string }> = [];
    for (let j = 0; j < gridCount; j++) {
      tempArray.push({ index: i * gridCount + j + 1, value: '' });
    }
    console.log('tempArray', tempArray);
    tempGridMatrix.push(tempArray);
  }
  return tempGridMatrix;
};
//let gridCount : number = Number(prompt("Grid Size?"));
function GameGrid() {
  const [backendArray, setBackendArray] = useState([]);

  const [gridMatrix, setGridMatrix] = useState(createGridMatrix(mockGridCount));

  const [gridValue, setGridValue] = useState('X');

  const buttonClick = ({ squareIndex, rowIndex }) => {
    console.log(squareIndex, rowIndex);
    setGridMatrix((currentState) => {
      let newGridMatrix = [...currentState];
      newGridMatrix[rowIndex][squareIndex].value = gridValue;
      return newGridMatrix;
    });
  };

  useEffect(() => {
    setGridValue((currentValue) => (currentValue === 'X' ? 'O' : 'X'));
  }, [gridMatrix]);

  console.log('gridMatrix', gridMatrix);
  console.log('gridValue', gridValue);
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
