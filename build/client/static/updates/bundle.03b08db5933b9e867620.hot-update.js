webpackHotUpdate("bundle",{

/***/ "./src/shared/pages/Home/Home.js":
/*!***************************************!*\
  !*** ./src/shared/pages/Home/Home.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__(/*! @/store/actions */ "./src/shared/store/actions/index.js");

__webpack_require__(/*! ./Home.scss */ "./src/shared/pages/Home/Home.scss");

var Home =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Home, _Component);

  function Home() {
    (0, _classCallCheck2["default"])(this, Home);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Home).apply(this, arguments));
  }

  (0, _createClass2["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          products = _this$props.products,
          getProducts = _this$props.getProducts;

      if (!products.length) {
        getProducts("/products");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var products = this.props.products;
      return _react["default"].createElement("div", {
        className: "Home d-flex flex-column align-items-center justify-content-center"
      }, _react["default"].createElement("h1", null, "Shop"), _react["default"].createElement("form", {
        className: "text-center col-md-4"
      }, _react["default"].createElement("div", {
        className: "form-group"
      }, _react["default"].createElement("pre", null, " ", JSON.stringify(), " "))));
    }
  }]);
  return Home;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getProducts: function getProducts(url) {
      dispatch((0, _actions.getProducts)(url));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

exports["default"] = _default;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9idW5kbGUuMDNiMDhkYjU5MzNiOWU4Njc2MjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcGFnZXMvSG9tZS9Ib21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRQcm9kdWN0cyBhcyBnZXRQcm9kdWN0c0FjdGlvbiB9IGZyb20gJ0Avc3RvcmUvYWN0aW9ucyc7XG5cbmltcG9ydCAnLi9Ib21lLnNjc3MnO1xuXG50eXBlIFByb3BzVHlwZSA9IHtcbiAgc2V0U2VsZWN0ZWRQcm9kdWN0OiBzdHJpbmcsXG4gIGdldFByb2R1Y3RzOiAoc3RyaW5nKSA9PiBBcnJheTxPYmplY3Q+LFxufTtcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudDx7fT4ge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcHJvZHVjdHMsIGdldFByb2R1Y3RzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghcHJvZHVjdHMubGVuZ3RoKSB7XG4gICAgICBnZXRQcm9kdWN0cyhgL3Byb2R1Y3RzYCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcblxuICAgIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J0hvbWUgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgPGgxPlNob3A8L2gxPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPHByZT4geyBKU09OLnN0cmluZ2lmeSgpIH0gPC9wcmU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgey8qIDxMaW5rIHRvPVwicHJvZHVjdHNcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgIEFsbCBwcm9kdWN0c1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+ICovfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBnZXRQcm9kdWN0cyh1cmwpIHtcbiAgICBkaXNwYXRjaChnZXRQcm9kdWN0c0FjdGlvbih1cmwpKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWUpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFXQTs7O0FBNUJBO0FBQ0E7QUErQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=