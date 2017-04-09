import React, { Component, PropTypes } from 'react';
import style from './index.css';

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busy: false,
      active: false,
    };
    this.buttonClicked = this.buttonClicked.bind(this);
    this.content = this.content.bind(this);
  }
  buttonClicked() {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(this);
    }
  }
  content(legend) {
    if (this.state.busy) {
      return <legend>...loading</legend>;
    } else if (this.state.active) {
      return <legend>{legend}</legend>;
    }
    return <legend>{legend}</legend>;
  }
  render() {
    return (
      <button
        className={style.base}
        onClick={this.buttonClicked}
      >
        {this.content(this.props.legend)}
      </button>
    );
  }
}

Button.propTypes = {
  _id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  legend: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  legend: '',
};

Button.contextTypes = {
  mainColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export default Button;
