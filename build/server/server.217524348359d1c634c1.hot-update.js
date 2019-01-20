exports.id = "server";
exports.modules = {

/***/ "./src/shared/components/MovieCard/MovieCard.js":
/*!******************************************************!*\
  !*** ./src/shared/components/MovieCard/MovieCard.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ \"@babel/runtime/helpers/interopRequireWildcard\");\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\"));\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\n__webpack_require__(/*! ./MovieCard.scss */ \"./src/shared/components/MovieCard/MovieCard.scss\");\n\nvar MovieCard =\n/*#__PURE__*/\nfunction (_Component) {\n  (0, _inherits2.default)(MovieCard, _Component);\n\n  function MovieCard(props) {\n    (0, _classCallCheck2.default)(this, MovieCard);\n    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MovieCard).call(this, props));\n  }\n\n  (0, _createClass2.default)(MovieCard, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          title = _this$props.title,\n          movieGenre = _this$props.movieGenre,\n          release_date = _this$props.release_date,\n          overview = _this$props.overview,\n          id = _this$props.id;\n      return _react.default.createElement(\"article\", {\n        className: \"movieCard\"\n      }, _react.default.createElement(\"div\", {\n        className: \"card\"\n      }, _react.default.createElement(\"div\", {\n        className: \"card-body\"\n      }, _react.default.createElement(\"h4\", {\n        className: \"card-title\"\n      }, title), _react.default.createElement(\"p\", {\n        className: \"card-text text-clamp\"\n      }, overview)), _react.default.createElement(\"ul\", {\n        className: \"list-group list-group-flush\"\n      }, _react.default.createElement(\"li\", {\n        className: \"list-group-item\"\n      }, release_date), _react.default.createElement(\"li\", {\n        className: \"list-group-item\"\n      }, movieGenre))), _react.default.createElement(_reactRouterDom.NavLink, {\n        to: \"details/\".concat(id)\n      }, \"See Details\"));\n    }\n  }]);\n  return MovieCard;\n}(_react.Component);\n\nexports.default = MovieCard;\n\n//# sourceURL=webpack:///./src/shared/components/MovieCard/MovieCard.js?");

/***/ }),

/***/ "./src/shared/components/MovieCard/MovieCard.scss":
/*!********************************************************!*\
  !*** ./src/shared/components/MovieCard/MovieCard.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".movieCard {\\n  margin-bottom: 1.5em;\\n  width: 20rem; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/shared/components/MovieCard/MovieCard.scss?");

/***/ })

};