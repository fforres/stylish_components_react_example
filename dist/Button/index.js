'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  'colors': '"../colors.css"',
  'primaryColor': '#0c77f8',
  'secondaryColor': '#1e79f9',
  'invertedFontColor': 'white',
  'base': 'index__base___3pBHa'
};

var Button = exports.Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.state = {
      busy: false,
      active: false
    };
    _this.buttonClicked = _this.buttonClicked.bind(_this);
    _this.content = _this.content.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'buttonClicked',
    value: function buttonClicked() {
      if (typeof this.props.onClick === 'function') {
        this.props.onClick(this);
      }
    }
  }, {
    key: 'content',
    value: function content(legend) {
      if (this.state.busy) {
        return _react2.default.createElement(
          'legend',
          null,
          '...loading'
        );
      } else if (this.state.active) {
        return _react2.default.createElement(
          'legend',
          null,
          legend
        );
      }
      return _react2.default.createElement(
        'legend',
        null,
        legend
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        {
          className: style.base,
          onClick: this.buttonClicked
        },
        this.content(this.props.legend)
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  _id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  legend: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.element]),
  isSelected: _react.PropTypes.bool,
  onClick: _react.PropTypes.func
};

Button.defaultProps = {
  legend: ''
};

Button.contextTypes = {
  mainColor: _react.PropTypes.string,
  secondaryColor: _react.PropTypes.string
};

exports.default = Button;