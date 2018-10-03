import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Single from './Single';
import Spinner from './Spinner';

class SingleContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleData(`/pokemons/${this.props.params.pokemonId}.json`);
  }


  render() {
    if (this.props.single == 0) {
      return <Spinner />;
    }
    return (
      <div>
        <CSSTransitionGroup
          transitionName="fade-in"
          transitionAppear
          transitionAppearTimeout={2500}
          transitionEnterTimeout={false}
          transitionLeaveTimeout={false}
        >
          <Single  single={this.props.single.pokemon} />
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default SingleContainer;
