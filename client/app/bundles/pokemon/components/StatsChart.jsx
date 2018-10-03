import React from 'react';

class StatsChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, pokemon } = this.props;
    const chartData = data.map((data, i) => ({ x: data.name, y: data.base_stat }));

    const statBarContainerStyle = {
      width: 200,
      height: 24,
      display: 'inline-block',
      position: 'absolute',
      marginLeft: 10,
    };

    return (
      <div className="pokemon-chart">
        <ul className="pokemon-chart-list">
          {chartData.reverse().map(data =>
            (<div key={data.x} className="chart-item">
              <div className="stat-name-container">
                <span className="stat-name">{data.x}</span>
              </div>
              <span
                className="stat-bar-container"
                style={statBarContainerStyle}
              >
                <div
                  className={`stat-bar-color ${pokemon.types[0].name}`}
                  style={{ width: data.y }}
                />
                <div className="stat-number">{data.y}</div>
              </span>
             </div>))}
        </ul>
      </div>
    );
  }
}

export default StatsChart;
