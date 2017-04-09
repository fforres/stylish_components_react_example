'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Decorator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  'base': 'index__base___aDQuf'
};

var Decorator = exports.Decorator = function (_Component) {
  _inherits(Decorator, _Component);

  function Decorator(props) {
    _classCallCheck(this, Decorator);

    var _this = _possibleConstructorReturn(this, (Decorator.__proto__ || Object.getPrototypeOf(Decorator)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Decorator, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        mainColor: this.props.theme.mainColor,
        secondaryColor: this.props.theme.secondaryColor
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return Decorator;
}(_react.Component);

Decorator.propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element, _react.PropTypes.node]).isRequired,
  theme: _react.PropTypes.shape({
    mainColor: _react.PropTypes.string,
    secondaryColor: _react.PropTypes.string
  })
};

Decorator.childContextTypes = {
  mainColor: _react.PropTypes.string,
  secondaryColor: _react.PropTypes.string
};

Decorator.defaultProps = {
  theme: {
    mainColor: '',
    secondaryColor: ''
  }
};

exports.default = Decorator;