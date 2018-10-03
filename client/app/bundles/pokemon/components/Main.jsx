import React from 'react';
import Navbar from './Navbar';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
