import { Stage, Layer, Rect } from "react-konva";

function App() {
  return (
  <>
    <h1>Howdy</h1>
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
           <Rect x={100} y={100} width={100} height={100} fill='red' />
        </Layer>
    </Stage>
  </>
  )
}

export default App
