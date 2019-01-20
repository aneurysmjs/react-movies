exports.id = "server";
exports.modules = {

/***/ "./src/shared/pages/Landing/Landing.js":
/*!*********************************************!*\
  !*** ./src/shared/pages/Landing/Landing.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"@babel/runtime/helpers/interopRequireWildcard\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\"));\n\nvar _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\"));\n\nvar _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"@babel/runtime/helpers/assertThisInitialized\"));\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Urls = __webpack_require__(/*! ../../constants/Urls */ \"./src/shared/constants/Urls.js\");\n\nvar _actions = __webpack_require__(/*! ../../actions */ \"./src/shared/actions/index.js\");\n\n__webpack_require__(/*! ./Landing.scss */ \"./src/shared/pages/Landing/Landing.scss\");\n\nvar Landing =\n/*#__PURE__*/\nfunction (_Component) {\n  (0, _inherits2.default)(Landing, _Component);\n\n  function Landing() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    (0, _classCallCheck2.default)(this, Landing);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Landing)).call.apply(_getPrototypeOf2, [this].concat(args)));\n    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), \"handleChange\", function (evt) {\n      var selectedCountry = evt.target.value;\n\n      _this.props.dispatch((0, _actions.setSelectedCountry)(selectedCountry));\n    });\n    return _this;\n  }\n\n  (0, _createClass2.default)(Landing, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var countries = this.props.countries;\n\n      if (!countries.length) {\n        getCountries(\"\".concat(_Urls.COUNTRIES, \"/all\"));\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          selectedCountry = _this$props.selectedCountry,\n          countries = _this$props.countries;\n      return _react.default.createElement(\"div\", {\n        className: \"Landing d-flex flex-column align-items-center justify-content-center\"\n      }, _react.default.createElement(\"h1\", null, \"Movie Search\"), _react.default.createElement(\"form\", {\n        className: \"text-center col-md-4\"\n      }, _react.default.createElement(\"div\", {\n        className: \"form-group\"\n      }, _react.default.createElement(\"label\", {\n        htmlFor: \"countries\"\n      }, \"Select a Country\"), _react.default.createElement(\"select\", {\n        value: selectedCountry,\n        className: \"form-control\",\n        onChange: this.handleChange\n      }, countries.map(function (_ref) {\n        var name = _ref.name;\n        return _react.default.createElement(\"option\", {\n          id: \"countries\",\n          key: name,\n          value: name\n        }, name);\n      })))), _react.default.createElement(_reactRouterDom.Link, {\n        to: \"movies\"\n      }, _react.default.createElement(\"button\", {\n        type: \"button\",\n        className: \"btn btn-primary\"\n      }, \"See all movies\")));\n    }\n  }]);\n  return Landing;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    selectedCountry: state.selectedCountry,\n    countries: state.countries\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getCountries: function getCountries(url) {\n      dispatch((0, _actions.getCountries)(url));\n    }\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(Landing);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/shared/pages/Landing/Landing.js?");

/***/ })

};