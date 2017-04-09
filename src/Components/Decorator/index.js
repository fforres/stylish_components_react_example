import React, { Component, PropTypes } from 'react';
import style from './index.css';

export class Decorator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getChildContext() {
    return {
      mainColor: this.props.theme.mainColor,
      secondaryColor: this.props.theme.secondaryColor,
    };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Decorator.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  theme: PropTypes.shape({
    mainColor: PropTypes.string,
    secondaryColor: PropTypes.string,
  }),
};

Decorator.childContextTypes = {
  mainColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

Decorator.defaultProps = {
  theme: {
    mainColor: '',
    secondaryColor: '',
  },
};

export default Decorator;
