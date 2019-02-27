import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { VictoryGroup, VictoryScatter, VictoryLegend, VictoryLabel, VictoryZoomContainer, VictoryTooltip } from 'victory'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <VictoryGroup
          containerComponent={<VictoryZoomContainer zoomDomain={{ x: [0, 75], y: [0, 75] }} />}
        >
          <VictoryScatter />
        </VictoryGroup>
      </React.Fragment>
    );
  }
}

export default App;
