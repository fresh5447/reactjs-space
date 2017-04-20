var React = require('react');
var createReactClass = require('create-react-class');

var Planet = require('../views/Planet');

var PlanetContainer = createReactClass({
  getInitialState: function(){
    var planet = this.props.planets[this.props.params.planetIndex];
    return {
      planet: planet,
      stardate: this.props.stardate
    }
  },
  render: function() {
    return (
      <div>
        <h1>The Planets of the Solar System</h1>
        <div>
          <Planet planet={this.state.planet} stardate={this.state.stardate} />
        </div>
      </div>
    )
  }
});

export default PlanetContainer;
