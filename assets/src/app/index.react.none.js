
import React from 'react';
import { ListA, ListB } from './list/index.react.none';
import Banner from './banner/index.react.none';

export default class App extends React.Component {
  state = {};

  componentDidMount() {
    // console.log('react render in client');
    this.setState({
      onClick: function(){

      }
    });
  }

  render() {

    const props = this.props || {};

    return (
      <div onClick={this.state.onClick}>
        <Banner cacheKey={"banner"} data={props.bannerData} />
        <ListA cacheKey={"lista"} data={props.listData} />
        <ListB cacheKey={"listb"} data={props.listData} />
      </div>
    );

  }
};
