import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

function Hold(props) {
    return (
        <Line
          x={props.x}
          y={props.y}
          points={[0, 0, 100, 0, 100, 100]}
          tension={0.5}
          closed
          stroke={props.colour}
          fillLinearGradientStartPoint={{ x: -50, y: -50 }}
          fillLinearGradientEndPoint={{ x: 50, y: 50 }}
          fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
        />
    );
  }
  
  export default Hold;
  