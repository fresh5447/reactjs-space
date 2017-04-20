var React = require('react');
var createReactClass = require('create-react-class');

var Home = require('../views/Home');

var HomeContainer = createReactClass({
  getInitialState: function(){
    return {
      homePlanet: "Earth"
    }
  },
  render: function() {
    return (
      <div>
        <h1>Welcome to Space</h1>
        <div>
          { this.state.homePlanet ?  <Home homePlanet={this.state.homePlanet} /> : null }
        </div>
      </div>
    )
  }
});

export default HomeContainer;
