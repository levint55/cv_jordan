import React from 'react';
import Header from './Header';
import DetailList from './DetailList';
import './css/main.css';

class App extends React.Component {
  render() {
    return (
      <div className="ui container main">
        <div className="ui grid">
          <Header/>
          <DetailList/>
        </div>
      </div>
    );
  }
}

export default App;