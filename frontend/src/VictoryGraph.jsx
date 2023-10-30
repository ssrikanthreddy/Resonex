import React, { Component } from 'react';
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';

var number = 0;

const getColorByPercentage = (percentage) => {
  const hue = ((100 - percentage) * 1.2) / 360;
  return `hsl(${hue * 360}, 100%, 50%)`;
};

class VictoryCircle extends Component {
  
  constructor() {
    super();
    this.state = {
      percent: 25, data: this.getData(0)
    };
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  updateData = (percent) => { 
    number = Math.round(percent);
    console.log(number)
    console.log("Update called");
    this.setState({
      percent,
      data: this.getData(percent)
    });
  }

  render() {

    return (
      <div>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400} height={400}
            data={this.state.data}
            innerRadius={120}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: { fill: ({ datum }) => {
                const color = getColorByPercentage(datum.y);
                return datum.x === 1 ? color : "transparent";
              }
              },
              
            }}
          />
          <VictoryAnimation duration={1000} data={this.state}>
            {(newProps) => {
              return (
                <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={200} y={200}
                  text={`${number}%`}
                  style={{ fontSize: 45 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
      </div>
    );
  }
}

export default VictoryCircle;
