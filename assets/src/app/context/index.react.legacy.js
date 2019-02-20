'use strict';

import React from 'react';
import PropTypes from 'prop-types';

class ContextAProvider extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.value = props.value
  }

  getChildContext() {
    return { valueA: this.value }
  }

  render() {
    return React.Children.only(this.props.children)
  }
}
ContextAProvider.childContextTypes = {
  valueA: PropTypes.any.isRequired
}
ContextAProvider.propTypes = {
  value: PropTypes.any.isRequired
}

class ContextAConsumer extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.value = context.valueA
  }
  render() {
    return this.props.children(this.value);
  }
}
ContextAConsumer.contextTypes = {
  valueA: PropTypes.any
}

class ContextBProvider extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.value = props.value
  }

  getChildContext() {
    return { valueB: this.value }
  }

  render() {
    return React.Children.only(this.props.children)
  }
}
ContextBProvider.childContextTypes = {
  valueB: PropTypes.any.isRequired
}
ContextBProvider.propTypes = {
  value: PropTypes.any.isRequired
}

class ContextBConsumer extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.value = context.valueB
  }
  render() {
    return this.props.children(this.value);
  }
}
ContextBConsumer.contextTypes = {
  valueB: PropTypes.any
}

export const ContextA = {
  Provider: ContextAProvider,
  Consumer: ContextAConsumer
}
export const ContextB = {
  Provider: ContextBProvider,
  Consumer: ContextBConsumer
}