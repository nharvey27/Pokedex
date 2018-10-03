import Move from './Move';
import React from 'react';

class MovesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-12">
        {this.props.moves.map(move => <div key={move.id}> <Move move={move} /> </div>)}
      </div>
    );
  }
}
export default MovesList;
