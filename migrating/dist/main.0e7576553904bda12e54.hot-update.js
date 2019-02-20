require("source-map-support").install();
exports.id = "main";
exports.modules = {

/***/ "./src/_redux/welcome/actions/fetchActions.js":
/*!****************************************************!*\
  !*** ./src/_redux/welcome/actions/fetchActions.js ***!
  \****************************************************/
/*! exports provided: fetch_post, receive_post, receive_error, thunk_action_creator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetch_post\", function() { return fetch_post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receive_post\", function() { return receive_post; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"receive_error\", function() { return receive_error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"thunk_action_creator\", function() { return thunk_action_creator; });\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../store'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\nvar fetch_post = function fetch_post() {\n  return {\n    type: \"FETCH_USER\"\n  };\n};\nvar receive_post = function receive_post(post) {\n  return {\n    type: \"FETCHED_USER\",\n    data: post\n  };\n};\nvar receive_error = function receive_error() {\n  return {\n    type: \"RECEIVE_ERROR\"\n  };\n};\nvar thunk_action_creator = function thunk_action_creator(username) {\n  var user = username.replace(/\\s/g, \"\");\n  !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../store'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).dispatch(fetch_post());\n  return function (dispatch, getState) {\n    return fetch(\"https://api.github.com/users/\".concat(user)).then(function (data) {\n      return data.json();\n    }).then(function (data) {\n      if (data.message === \"Not Found\") {\n        throw new Error(\"No such user found!!\");\n      } else dispatch(receive_post(data));\n    }).catch(function (err) {\n      return dispatch(receive_error());\n    });\n  };\n};\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(fetch_post, \"fetch_post\", \"/home/nakama/go/src/github.com/tre/migrating/src/_redux/welcome/actions/fetchActions.js\");\n  reactHotLoader.register(receive_post, \"receive_post\", \"/home/nakama/go/src/github.com/tre/migrating/src/_redux/welcome/actions/fetchActions.js\");\n  reactHotLoader.register(receive_error, \"receive_error\", \"/home/nakama/go/src/github.com/tre/migrating/src/_redux/welcome/actions/fetchActions.js\");\n  reactHotLoader.register(thunk_action_creator, \"thunk_action_creator\", \"/home/nakama/go/src/github.com/tre/migrating/src/_redux/welcome/actions/fetchActions.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvX3JlZHV4L3dlbGNvbWUvYWN0aW9ucy9mZXRjaEFjdGlvbnMuanMuanMiLCJzb3VyY2VzIjpbIi9ob21lL25ha2FtYS9nby9zcmMvZ2l0aHViLmNvbS90cmUvbWlncmF0aW5nL3NyYy9fcmVkdXgvd2VsY29tZS9hY3Rpb25zL2ZldGNoQWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICB2YXIgZW50ZXJNb2R1bGUgPSByZXF1aXJlKCdyZWFjdC1ob3QtbG9hZGVyJykuZW50ZXJNb2R1bGU7XG5cbiAgZW50ZXJNb2R1bGUgJiYgZW50ZXJNb2R1bGUobW9kdWxlKTtcbn0pKCk7XG5cbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc3RvcmVcIjtcbmV4cG9ydCB2YXIgZmV0Y2hfcG9zdCA9IGZ1bmN0aW9uIGZldGNoX3Bvc3QoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJGRVRDSF9VU0VSXCJcbiAgfTtcbn07XG5leHBvcnQgdmFyIHJlY2VpdmVfcG9zdCA9IGZ1bmN0aW9uIHJlY2VpdmVfcG9zdChwb3N0KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJGRVRDSEVEX1VTRVJcIixcbiAgICBkYXRhOiBwb3N0XG4gIH07XG59O1xuZXhwb3J0IHZhciByZWNlaXZlX2Vycm9yID0gZnVuY3Rpb24gcmVjZWl2ZV9lcnJvcigpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcIlJFQ0VJVkVfRVJST1JcIlxuICB9O1xufTtcbmV4cG9ydCB2YXIgdGh1bmtfYWN0aW9uX2NyZWF0b3IgPSBmdW5jdGlvbiB0aHVua19hY3Rpb25fY3JlYXRvcih1c2VybmFtZSkge1xuICB2YXIgdXNlciA9IHVzZXJuYW1lLnJlcGxhY2UoL1xccy9nLCBcIlwiKTtcbiAgc3RvcmUuZGlzcGF0Y2goZmV0Y2hfcG9zdCgpKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCwgZ2V0U3RhdGUpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL1wiLmNvbmNhdCh1c2VyKSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgcmV0dXJuIGRhdGEuanNvbigpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT09IFwiTm90IEZvdW5kXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCB1c2VyIGZvdW5kISFcIik7XG4gICAgICB9IGVsc2UgZGlzcGF0Y2gocmVjZWl2ZV9wb3N0KGRhdGEpKTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICByZXR1cm4gZGlzcGF0Y2gocmVjZWl2ZV9lcnJvcigpKTtcbiAgICB9KTtcbiAgfTtcbn07XG47XG5cbihmdW5jdGlvbiAoKSB7XG4gIHZhciByZWFjdEhvdExvYWRlciA9IHJlcXVpcmUoJ3JlYWN0LWhvdC1sb2FkZXInKS5kZWZhdWx0O1xuXG4gIHZhciBsZWF2ZU1vZHVsZSA9IHJlcXVpcmUoJ3JlYWN0LWhvdC1sb2FkZXInKS5sZWF2ZU1vZHVsZTtcblxuICBpZiAoIXJlYWN0SG90TG9hZGVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVhY3RIb3RMb2FkZXIucmVnaXN0ZXIoZmV0Y2hfcG9zdCwgXCJmZXRjaF9wb3N0XCIsIFwiL2hvbWUvbmFrYW1hL2dvL3NyYy9naXRodWIuY29tL3RyZS9taWdyYXRpbmcvc3JjL19yZWR1eC93ZWxjb21lL2FjdGlvbnMvZmV0Y2hBY3Rpb25zLmpzXCIpO1xuICByZWFjdEhvdExvYWRlci5yZWdpc3RlcihyZWNlaXZlX3Bvc3QsIFwicmVjZWl2ZV9wb3N0XCIsIFwiL2hvbWUvbmFrYW1hL2dvL3NyYy9naXRodWIuY29tL3RyZS9taWdyYXRpbmcvc3JjL19yZWR1eC93ZWxjb21lL2FjdGlvbnMvZmV0Y2hBY3Rpb25zLmpzXCIpO1xuICByZWFjdEhvdExvYWRlci5yZWdpc3RlcihyZWNlaXZlX2Vycm9yLCBcInJlY2VpdmVfZXJyb3JcIiwgXCIvaG9tZS9uYWthbWEvZ28vc3JjL2dpdGh1Yi5jb20vdHJlL21pZ3JhdGluZy9zcmMvX3JlZHV4L3dlbGNvbWUvYWN0aW9ucy9mZXRjaEFjdGlvbnMuanNcIik7XG4gIHJlYWN0SG90TG9hZGVyLnJlZ2lzdGVyKHRodW5rX2FjdGlvbl9jcmVhdG9yLCBcInRodW5rX2FjdGlvbl9jcmVhdG9yXCIsIFwiL2hvbWUvbmFrYW1hL2dvL3NyYy9naXRodWIuY29tL3RyZS9taWdyYXRpbmcvc3JjL19yZWR1eC93ZWxjb21lL2FjdGlvbnMvZmV0Y2hBY3Rpb25zLmpzXCIpO1xuICBsZWF2ZU1vZHVsZShtb2R1bGUpO1xufSkoKTtcblxuOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/_redux/welcome/actions/fetchActions.js\n");

/***/ }),

/***/ "./src/page/welcome/welcome2.js":
/*!**************************************!*\
  !*** ./src/page/welcome/welcome2.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _userinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userinfo */ \"./src/page/welcome/userinfo.js\");\n/* harmony import */ var _welcome_actions_fetchActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../welcome/actions/fetchActions */ \"./src/page/welcome/actions/fetchActions.js\");\n/* harmony import */ var _redux_welcome_actions_fetchActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_redux/welcome/actions/fetchActions */ \"./src/_redux/welcome/actions/fetchActions.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar welcome2 =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(welcome2, _Component);\n\n  function welcome2() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, welcome2);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(welcome2)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"handleSubmit\", function (e) {\n      e.preventDefault();\n      var username = _this.getUsername.value;\n\n      _this.props.dispatch(Object(_welcome_actions_fetchActions__WEBPACK_IMPORTED_MODULE_3__[\"thunk_action_creator\"])(username));\n\n      _this.getUsername.value = \"\";\n    });\n\n    return _this;\n  }\n\n  _createClass(welcome2, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      console.log(this.props.data);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        onSubmit: this.handleSubmit,\n        className: \"form\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n        className: \"title\"\n      }, \"Enter the Github Username\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        placeholder: \"Enter Github Username\",\n        required: true,\n        ref: function ref(input) {\n          return _this2.getUsername = input;\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"button\"\n      }, \"Submit\")), this.props.data.isFetching ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Loading...\") : null, this.props.data.isError ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n        className: \"error\"\n      }, \"No such User exists.\") : null, Object.keys(this.props.data.userData).length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_userinfo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        user: this.props.data.userData\n      }) : null);\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    // @ts-ignore\n    value: function __reactstandin__regenerateByEval(key, code) {\n      // @ts-ignore\n      this[key] = eval(code);\n    }\n  }]);\n\n  return welcome2;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    data: state\n  };\n};\n\nvar _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(welcome2);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(welcome2, \"welcome2\", \"/home/nakama/go/src/github.com/tre/migrating/src/page/welcome/welcome2.js\");\n  reactHotLoader.register(mapStateToProps, \"mapStateToProps\", \"/home/nakama/go/src/github.com/tre/migrating/src/page/welcome/welcome2.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/nakama/go/src/github.com/tre/migrating/src/page/welcome/welcome2.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZS93ZWxjb21lL3dlbGNvbWUyLmpzLmpzIiwic291cmNlcyI6WyIvaG9tZS9uYWthbWEvZ28vc3JjL2dpdGh1Yi5jb20vdHJlL21pZ3JhdGluZy9zcmMvcGFnZS93ZWxjb21lL3dlbGNvbWUyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gIHZhciBlbnRlck1vZHVsZSA9IHJlcXVpcmUoJ3JlYWN0LWhvdC1sb2FkZXInKS5lbnRlck1vZHVsZTtcblxuICBlbnRlck1vZHVsZSAmJiBlbnRlck1vZHVsZShtb2R1bGUpO1xufSkoKTtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi91c2VyaW5mb1wiO1xuaW1wb3J0IHsgdGh1bmtfYWN0aW9uX2NyZWF0b3IgfSBmcm9tIFwiLi4vd2VsY29tZS9hY3Rpb25zL2ZldGNoQWN0aW9uc1wiO1xuaW1wb3J0IHsgdGh1bmtfYWN0aW9uX2NyZWF0bzJyIH0gZnJvbSBcIi4uLy4uL19yZWR1eC93ZWxjb21lL2FjdGlvbnMvZmV0Y2hBY3Rpb25zXCI7XG5cbnZhciB3ZWxjb21lMiA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMod2VsY29tZTIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIHdlbGNvbWUyKCkge1xuICAgIHZhciBfZ2V0UHJvdG90eXBlT2YyO1xuXG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIHdlbGNvbWUyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKHdlbGNvbWUyKSkuY2FsbC5hcHBseShfZ2V0UHJvdG90eXBlT2YyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaGFuZGxlU3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBfdGhpcy5nZXRVc2VybmFtZS52YWx1ZTtcblxuICAgICAgX3RoaXMucHJvcHMuZGlzcGF0Y2godGh1bmtfYWN0aW9uX2NyZWF0b3IodXNlcm5hbWUpKTtcblxuICAgICAgX3RoaXMuZ2V0VXNlcm5hbWUudmFsdWUgPSBcIlwiO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKHdlbGNvbWUyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZGF0YSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJjb250YWluZXJcIlxuICAgICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwge1xuICAgICAgICBvblN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXQsXG4gICAgICAgIGNsYXNzTmFtZTogXCJmb3JtXCJcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJ0aXRsZVwiXG4gICAgICB9LCBcIkVudGVyIHRoZSBHaXRodWIgVXNlcm5hbWVcIiksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogXCJFbnRlciBHaXRodWIgVXNlcm5hbWVcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGlucHV0KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5nZXRVc2VybmFtZSA9IGlucHV0O1xuICAgICAgICB9XG4gICAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJidXR0b25cIlxuICAgICAgfSwgXCJTdWJtaXRcIikpLCB0aGlzLnByb3BzLmRhdGEuaXNGZXRjaGluZyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCBudWxsLCBcIkxvYWRpbmcuLi5cIikgOiBudWxsLCB0aGlzLnByb3BzLmRhdGEuaXNFcnJvciA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJlcnJvclwiXG4gICAgICB9LCBcIk5vIHN1Y2ggVXNlciBleGlzdHMuXCIpIDogbnVsbCwgT2JqZWN0LmtleXModGhpcy5wcm9wcy5kYXRhLnVzZXJEYXRhKS5sZW5ndGggPiAwID8gUmVhY3QuY3JlYXRlRWxlbWVudChVc2VySW5mbywge1xuICAgICAgICB1c2VyOiB0aGlzLnByb3BzLmRhdGEudXNlckRhdGFcbiAgICAgIH0pIDogbnVsbCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9fcmVhY3RzdGFuZGluX19yZWdlbmVyYXRlQnlFdmFsXCIsXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHZhbHVlOiBmdW5jdGlvbiBfX3JlYWN0c3RhbmRpbl9fcmVnZW5lcmF0ZUJ5RXZhbChrZXksIGNvZGUpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXNba2V5XSA9IGV2YWwoY29kZSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIHdlbGNvbWUyO1xufShDb21wb25lbnQpO1xuXG52YXIgbWFwU3RhdGVUb1Byb3BzID0gZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgZGF0YTogc3RhdGVcbiAgfTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSh3ZWxjb21lMik7XG5cbmV4cG9ydCBkZWZhdWx0IF9kZWZhdWx0O1xuO1xuXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgcmVhY3RIb3RMb2FkZXIgPSByZXF1aXJlKCdyZWFjdC1ob3QtbG9hZGVyJykuZGVmYXVsdDtcblxuICB2YXIgbGVhdmVNb2R1bGUgPSByZXF1aXJlKCdyZWFjdC1ob3QtbG9hZGVyJykubGVhdmVNb2R1bGU7XG5cbiAgaWYgKCFyZWFjdEhvdExvYWRlcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHJlYWN0SG90TG9hZGVyLnJlZ2lzdGVyKHdlbGNvbWUyLCBcIndlbGNvbWUyXCIsIFwiL2hvbWUvbmFrYW1hL2dvL3NyYy9naXRodWIuY29tL3RyZS9taWdyYXRpbmcvc3JjL3BhZ2Uvd2VsY29tZS93ZWxjb21lMi5qc1wiKTtcbiAgcmVhY3RIb3RMb2FkZXIucmVnaXN0ZXIobWFwU3RhdGVUb1Byb3BzLCBcIm1hcFN0YXRlVG9Qcm9wc1wiLCBcIi9ob21lL25ha2FtYS9nby9zcmMvZ2l0aHViLmNvbS90cmUvbWlncmF0aW5nL3NyYy9wYWdlL3dlbGNvbWUvd2VsY29tZTIuanNcIik7XG4gIHJlYWN0SG90TG9hZGVyLnJlZ2lzdGVyKF9kZWZhdWx0LCBcImRlZmF1bHRcIiwgXCIvaG9tZS9uYWthbWEvZ28vc3JjL2dpdGh1Yi5jb20vdHJlL21pZ3JhdGluZy9zcmMvcGFnZS93ZWxjb21lL3dlbGNvbWUyLmpzXCIpO1xuICBsZWF2ZU1vZHVsZShtb2R1bGUpO1xufSkoKTtcblxuOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/page/welcome/welcome2.js\n");

/***/ })

};