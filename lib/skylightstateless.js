'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SkyLightStateless = function (_React$Component) {
  _inherits(SkyLightStateless, _React$Component);

  function SkyLightStateless() {
    _classCallCheck(this, SkyLightStateless);

    return _possibleConstructorReturn(this, (SkyLightStateless.__proto__ || Object.getPrototypeOf(SkyLightStateless)).apply(this, arguments));
  }

  _createClass(SkyLightStateless, [{
    key: 'onOverlayClicked',
    value: function onOverlayClicked() {
      if (this.props.onOverlayClicked) {
        this.props.onOverlayClicked();
      }
    }
  }, {
    key: 'onCloseClicked',
    value: function onCloseClicked() {
      if (this.props.onCloseClicked) {
        this.props.onCloseClicked();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isVisible = _props.isVisible,
          isClosable = _props.isClosable,
          className = _props.className;


      var overlay = void 0;
      if (this.props.showOverlay) {
        overlay = _react2.default.createElement('div', {
          className: 'skylight-overlay',
          onClick: function onClick() {
            return _this2.onOverlayClicked();
          }
        });
      }

      return isVisible ? _react2.default.createElement(
        'section',
        { className: 'skylight-wrapper' },
        overlay,
        _react2.default.createElement(
          'div',
          { className: 'skylight-dialog ' + className },
          _react2.default.createElement(
            'div',
            { className: 'skylight-dialog-header' },
            isClosable && _react2.default.createElement(
              'a',
              {
                role: 'button',
                className: 'skylight-close-button',
                onClick: function onClick() {
                  return _this2.onCloseClicked();
                }
              },
              '\xD7'
            ),
            _react2.default.createElement(
              'h2',
              { className: 'skylight-title' },
              this.props.title
            )
          ),
          this.props.children
        )
      ) : _react2.default.createElement('div', null);
    }
  }]);

  return SkyLightStateless;
}(_react2.default.Component);

exports.default = SkyLightStateless;


SkyLightStateless.displayName = 'SkyLightStateless';

SkyLightStateless.sharedPropTypes = {
  className: _propTypes2.default.string,
  isClosable: _propTypes2.default.bool,
  onCloseClicked: _propTypes2.default.func,
  onOverlayClicked: _propTypes2.default.func,
  showOverlay: _propTypes2.default.bool,
  title: _propTypes2.default.string
};

SkyLightStateless.propTypes = _extends({}, SkyLightStateless.sharedPropTypes, {
  isVisible: _propTypes2.default.bool
});

SkyLightStateless.defaultProps = {
  className: '',
  isClosable: true,
  showOverlay: true,
  title: ''
};