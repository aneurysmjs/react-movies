exports.id = "server";
exports.modules = {

/***/ "./src/shared/reducers/movies.js":
/*!***************************************!*\
  !*** ./src/shared/reducers/movies.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\"));\n\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"@babel/runtime/helpers/toConsumableArray\"));\n\nvar _createReducer2 = _interopRequireDefault(__webpack_require__(/*! ./createReducer */ \"./src/shared/reducers/createReducer.js\"));\n\nvar _ActionTypes = __webpack_require__(/*! ../constants/ActionTypes */ \"./src/shared/constants/ActionTypes.js\");\n\n/**\n * @module reducers/movies\n */\n\n/**\n *\n * @param state\n * @param action\n * @return {*}\n */\nvar _default = (0, _createReducer2.default)([], (0, _defineProperty2.default)({}, _ActionTypes.MOVIES_SUCCESS, function (state, action) {\n  var results = action.response.data.results;\n  return (0, _toConsumableArray2.default)(results);\n}));\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/shared/reducers/movies.js?");

/***/ })

};