webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, HomePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\victor\\Documents\\PROJETOS-EM-DESENVOLVIMENTO\\next-onwards\\pages\\index.js",
    _s = $RefreshSig$();



var DUMMY_MEETUPS = [{
  id: "m1",
  title: "A First Meetup",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
  address: "Some address 5, 12345 Some city",
  description: "This is a first meet up!"
}, {
  id: "m2",
  title: "A Second Meetup",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
  address: "Some address 12, 4444 Some city",
  description: "This is a Second meet up!"
}];
var __N_SSG = true;
function HomePage(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      loadedMeetups = _useState[0],
      setLoadedMeetups = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    //send a http request and fetch data;
    //Next js returns the resolve of the first component render cicle 
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: loadedMeetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
} //Static site generation SSG

_s(HomePage, "lt95aOlOC9RW+nrRzHOiZRPQygU=");

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvYWRlZE1lZXR1cHMiLCJzZXRMb2FkZWRNZWV0dXBzIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDckI7QUFDQ0MsSUFBRSxFQUFFLElBREw7QUFFQ0MsT0FBSyxFQUFFLGdCQUZSO0FBR0NDLE9BQUssRUFBRSxnRkFIUjtBQUlDQyxTQUFPLEVBQUUsaUNBSlY7QUFLQ0MsYUFBVyxFQUFFO0FBTGQsQ0FEcUIsRUFRckI7QUFDQ0osSUFBRSxFQUFFLElBREw7QUFFQ0MsT0FBSyxFQUFFLGlCQUZSO0FBR0NDLE9BQUssRUFBRSxnRkFIUjtBQUlDQyxTQUFPLEVBQUUsaUNBSlY7QUFLQ0MsYUFBVyxFQUFFO0FBTGQsQ0FScUIsQ0FBdEI7O0FBaUJPLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUMsRUFBRCxDQURuQjtBQUFBLE1BQ3hCQyxhQUR3QjtBQUFBLE1BQ1RDLGdCQURTOztBQUcvQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2Y7QUFDQTtBQUNBRCxvQkFBZ0IsQ0FBQ1YsYUFBRCxDQUFoQjtBQUNBLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxzQkFBTyxxRUFBQyxzRUFBRDtBQUFZLFdBQU8sRUFBRVM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0EsQyxDQUVEOztHQVpnQkgsUTs7S0FBQUEsUTtBQXlCREEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmY5ZjRlZGJmMjlhYTY4Yjg0NjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuXHR7XHJcblx0XHRpZDogXCJtMVwiLFxyXG5cdFx0dGl0bGU6IFwiQSBGaXJzdCBNZWV0dXBcIixcclxuXHRcdGltYWdlOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZ1wiLFxyXG5cdFx0YWRkcmVzczogXCJTb21lIGFkZHJlc3MgNSwgMTIzNDUgU29tZSBjaXR5XCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgZmlyc3QgbWVldCB1cCFcIixcclxuXHR9LFxyXG5cdHtcclxuXHRcdGlkOiBcIm0yXCIsXHJcblx0XHR0aXRsZTogXCJBIFNlY29uZCBNZWV0dXBcIixcclxuXHRcdGltYWdlOiBcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZ1wiLFxyXG5cdFx0YWRkcmVzczogXCJTb21lIGFkZHJlc3MgMTIsIDQ0NDQgU29tZSBjaXR5XCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgU2Vjb25kIG1lZXQgdXAhXCIsXHJcblx0fSxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG5cdGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Ly9zZW5kIGEgaHR0cCByZXF1ZXN0IGFuZCBmZXRjaCBkYXRhO1xyXG5cdFx0Ly9OZXh0IGpzIHJldHVybnMgdGhlIHJlc29sdmUgb2YgdGhlIGZpcnN0IGNvbXBvbmVudCByZW5kZXIgY2ljbGUgXHJcblx0XHRzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpXHJcblx0fSwgW10pXHJcblxyXG5cdHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtsb2FkZWRNZWV0dXBzfSAvPlxyXG59XHJcblxyXG4vL1N0YXRpYyBzaXRlIGdlbmVyYXRpb24gU1NHXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG5cdC8vTmV4dCBqcyB3aWxsIHdhaXQgZm9yIHRoaXMgcHJvbWlzc2UgdG8gcmVzb2x2ZVxyXG5cdC8vZ2V0U3RhdGljUHJvcHMgaXMgcmVzZXJ2ZWQgbmFtZVxyXG5cdC8vdGhpcyBmdW5jdGlvbiBvbmx5IHdvcmtzIGluIHBhZ2VzIGZpbGVzXHJcblx0Ly9hbHdheXMgcmV0dW4gdGhpIG9iamVjdFxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRtZWV0dXBzOiBEVU1NWV9NRUVUVVBTXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==