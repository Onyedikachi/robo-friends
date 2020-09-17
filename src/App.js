import React from 'react';
import { connect } from 'react-redux';

import { CardList } from "./components/CardList";
import SearchBox  from "./components/SearchBox";
import './App.css';
import Scroll from './components/Scroll';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';

import { setSearchField, requestRobots } from './store/actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
    onRequestRobots: (e) => requestRobots(dispatch)
  } 
}

class App extends  React.Component {

  componentDidMount(){
    this.props.onRequestRobots();
  }

  render(){
    const {searchField, robots, isPending} =  this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if (isPending){
      return <h1>Loading</h1>
    }else{
      return (
        <div className='tc'>
          <Header />
          <SearchBox  searchChange = {this.props.onSearchChange}/>
          <div className="App0">
            <Scroll>
              <ErrorBoundary>
                <CardList robots = {filteredRobots} />
              </ErrorBoundary>
            </Scroll>
          </div>
        </div>
      );
    }
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
