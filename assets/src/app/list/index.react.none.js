'use strict';

import React, { Component } from 'react';
import styles from './styles';

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
    data: this.props.data || [],
    value: { type: 'noneA' }
  };

  render() {
    const { data, value } = this.state;
    return (
      <div style={styles.container}>
        <h2>ReactList</h2>
        <div style={styles.list}>
        {
          data.map((item, idx) => {
            return (
              <ListItem key={idx} styles={styles} item={item} value={value} />
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
    data: this.props.data || [],
    value: { type: 'noneB' }
  };

  render() {
    const { data, value } = this.state;
    return (
      <div style={styles.container}>
        <h2>ReactList</h2>
        <div style={styles.list}>
        {
          data.map((item, idx) => {
            return (
              <ListItem key={idx} styles={styles} item={item} value={value} />
            );
          })
        }
        </div>
      </div>
    );
  }
}
