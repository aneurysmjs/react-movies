exports.id = "server";
exports.modules = {

/***/ "./src/shared/pages/Home/Home.js":
/*!***************************************!*\
  !*** ./src/shared/pages/Home/Home.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"@babel/runtime/helpers/interopRequireWildcard\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! @/store/actions */ \"./src/shared/store/actions/index.js\");\n\n__webpack_require__(/*! ./Home.scss */ \"./src/shared/pages/Home/Home.scss\");\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  (0, _inherits2[\"default\"])(Home, _Component);\n\n  function Home() {\n    (0, _classCallCheck2[\"default\"])(this, Home);\n    return (0, _possibleConstructorReturn2[\"default\"])(this, (0, _getPrototypeOf2[\"default\"])(Home).apply(this, arguments));\n  }\n\n  (0, _createClass2[\"default\"])(Home, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this$props = this.props,\n          products = _this$props.products,\n          getProducts = _this$props.getProducts;\n\n      if (!products.length) {\n        getProducts(\"/products\");\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var products = this.props.products;\n      return _react[\"default\"].createElement(\"div\", {\n        className: \"Home d-flex flex-column align-items-center justify-content-center\"\n      }, _react[\"default\"].createElement(\"h1\", null, \"Shop\"), _react[\"default\"].createElement(\"form\", {\n        className: \"text-center col-md-4\"\n      }, _react[\"default\"].createElement(\"div\", {\n        className: \"form-group\"\n      }, _react[\"default\"].createElement(\"pre\", null, \" \", products, \" \"))));\n    }\n  }]);\n  return Home;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    products: state.products\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getProducts: function getProducts(url) {\n      dispatch((0, _actions.getProducts)(url));\n    }\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\n\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/shared/pages/Home/Home.js?");

/***/ })

};