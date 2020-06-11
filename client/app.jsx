const React = require('react');
const ReactDOM = require('react-dom');



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }


  componentDidMount() {
  }


  render() {
    return (
      <div>
        <h1>HelloWorld</h1>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));