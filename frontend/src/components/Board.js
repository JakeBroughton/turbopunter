import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import Hold from './Hold';

function Board() {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={20}
            y={50}
            width={1000}
            height={1000}
            fill="grey"
            shadowBlur={10}
          />
          <Hold colour="blue" x="40" y="100"/>
          <Hold colour="red" x="240" y="100"/>
        </Layer>
      </Stage>
    );
  }
  
  export default Board;
  