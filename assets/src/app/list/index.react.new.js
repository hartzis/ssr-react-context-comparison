'use strict';

import React, { Component } from 'react';
import styles from './styles';
import { ContextA, ContextB } from '../context/index.react.new';

function ListItem ({styles, item, value}) {
  return (
    <a style={styles.item} href={item.url}>
      <img src={item.img} style={styles.itemImg} />
      <p style={styles.itemTitle}>{item.title}</p>
      <p style={styles.itemPrice}>
        <span>price: {item.price}</span>
        <span>type: {value.type}</span>
      </p>
    </a>
  );
};

export class ListA extends Component {

  state = {
    data: this.props.data || []
  };

  render() {
    const { data } = this.state;
    return (
      <div style={styles.container}>
        <h2>ReactList</h2>
        <div style={styles.list}>
        {
          data.map((item, idx) => {
            return (
              <ContextA.Consumer>
                {value => (
                  <ListItem key={idx} styles={styles} item={item} value={value} />
                )}
              </ContextA.Consumer>
            );
          })
        }
        </div>
      </div>
    );
  }
}

export class ListB extends Component {

  state = {
    data: this.props.data || []
  };

  render() {
    const { data } = this.state;
    return (
      <div style={styles.container}>
        <h2>ReactList</h2>
        <div style={styles.list}>
        {
          data.map((item, idx) => {
            return (
              <ContextB.Consumer>
                {value => (
                  <ListItem key={idx} styles={styles} item={item} value={value} />
                )}
              </ContextB.Consumer>
            );
          })
        }
        </div>
      </div>
    );
  }
}
