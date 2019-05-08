import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true,
      hasError: false
    }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          data: data.message,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          hasError: true,
          isLoading: false
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    if (this.state.hasError) {
      return <div>ERROR, please reload and try again</div>;
    }

    const breeds = Object.keys(this.state.data)
      .map((breed, idx) => <li key={idx}>{breed}</li>);

    return (
      <div>
        <ul>
          {breeds}
        </ul>
      </div>
    );
  }
}

export default App;
