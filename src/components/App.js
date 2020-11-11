import React from 'react';
import Profile from './Profile';
import DetailList from './DetailList';
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <Profile/>
          <DetailList data={this.props.data}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.data };
};

export default connect(mapStateToProps)(App);