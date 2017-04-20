var React = require('react');
var createReactClass = require('create-react-class');

var SolarSystem = require('../views/SolarSystem');

var SolarSystemContainer = createReactClass({
  getInitialState: function(){
    return {
      planets: this.props.planets
    }
  },
  render: function() {
    return (
      <div>
        <h1>The Planets of the Solar System</h1>
        <div>
          <SolarSystem planets={this.state.planets} />
        </div>
      </div>
    )
  }
});

export default SolarSystemContainer;
