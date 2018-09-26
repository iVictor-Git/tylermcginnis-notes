var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Home = require('./Home');

class App extends React.Component {
  render() {
    return (
      <Router>
        <main className="container">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/popular" component={Popular} />
        </main>
      </Router>
    );
  }
}

module.exports = App;
