
import React from 'react';
import { ListA, ListB } from './list/index.react.new';
import Banner from './banner/index.react.new';
import { ContextA, ContextB } from './context/index.react.new';

const valueA = { type: 'newA' };
const valueB = { type: 'newB' };

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
      <ContextA.Provider value={valueA}>
        <ContextB.Provider value={valueB}>
          <div onClick={this.state.onClick}>
            <Banner cacheKey={"banner"} data={props.bannerData} />
            <ListA cacheKey={"lista"} data={props.listData} />
            <ListB cacheKey={"listb"} data={props.listData} />
          </div>
        </ContextB.Provider>
      </ContextA.Provider>
    );

  }
};
