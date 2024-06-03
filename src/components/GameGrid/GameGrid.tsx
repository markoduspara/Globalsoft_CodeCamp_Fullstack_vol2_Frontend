function Square() {
  return (
    <>
      <button></button>
    </>
  );
}

function Row(content: any) {
  return <div>{content}</div>;
}
const gridCount = 3;
//let gridCount : number = Number(prompt("Grid Size?"));
function GameGrid() {
  let RowSquares = Array.from({ length: gridCount }, () => <Square />);
  let Rows = Array.from({ length: gridCount }, () => (
    <Row content={RowSquares} />
  ));

  console.log(Rows);
  return (
    <div>
      {Rows.map(() => (
        <div>
          {RowSquares.map(() => (
            <Square />
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameGrid;
