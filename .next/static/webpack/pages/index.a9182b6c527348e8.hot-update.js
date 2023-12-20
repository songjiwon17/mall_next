/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ProductList */ \"./components/ProductList.js\");\n/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SearchForm */ \"./components/SearchForm.js\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/axios */ \"./lib/axios.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Container */ \"./components/Container.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    async function getProducts() {\n        const res = await _lib_axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/products\");\n        const nextProducts = res.data.results;\n        setProducts(nextProducts);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getProducts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Codeitmall\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tmddn\\\\OneDrive\\\\바탕 화면\\\\codeitmall_answer\\\\codeitmall\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmddn\\\\OneDrive\\\\바탕 화면\\\\codeitmall_answer\\\\codeitmall\\\\pages\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmddn\\\\OneDrive\\\\바탕 화면\\\\codeitmall_answer\\\\codeitmall\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().products),\n                products: products\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tmddn\\\\OneDrive\\\\바탕 화면\\\\codeitmall_answer\\\\codeitmall\\\\pages\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ087QUFDRjtBQUNqQjtBQUNjO0FBQ0w7QUFDTTtBQUNsQjtBQUVkLFNBQVNTLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLGVBQWVXLGNBQWM7UUFDM0IsTUFBTUMsTUFBTSxNQUFNVCxzREFBUyxDQUFDO1FBQzVCLE1BQU1XLGVBQWVGLElBQUlHLElBQUksQ0FBQ0MsT0FBTztRQUNyQ04sWUFBWUk7SUFDZDtJQUVBZixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RZO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDSixrREFBSUE7MEJBQ0gsNEVBQUNVOzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ2YsOERBQVVBOzs7OzswQkFDWCw4REFBQ0QsK0RBQVdBO2dCQUFDaUIsV0FBV2QseUVBQWU7Z0JBQUVLLFVBQVVBOzs7Ozs7OztBQUd6RCxDQUFDO0dBdEJ1QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJ0AvY29tcG9uZW50cy9Qcm9kdWN0TGlzdCc7XG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tICdAL2NvbXBvbmVudHMvU2VhcmNoRm9ybSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnQC9saWIvYXhpb3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQC9jb21wb25lbnRzL0NvbnRhaW5lcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9wcm9kdWN0cycpO1xuICAgIGNvbnN0IG5leHRQcm9kdWN0cyA9IHJlcy5kYXRhLnJlc3VsdHM7XG4gICAgc2V0UHJvZHVjdHMobmV4dFByb2R1Y3RzKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UHJvZHVjdHMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q29kZWl0bWFsbDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8U2VhcmNoRm9ybSAvPlxuICAgICAgPFByb2R1Y3RMaXN0IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1Y3RzfSBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XG4gICAgPC8+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm9kdWN0TGlzdCIsIlNlYXJjaEZvcm0iLCJheGlvcyIsInN0eWxlcyIsIkhlYWRlciIsIkNvbnRhaW5lciIsIkhlYWQiLCJIb21lIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImdldFByb2R1Y3RzIiwicmVzIiwiZ2V0IiwibmV4dFByb2R1Y3RzIiwiZGF0YSIsInJlc3VsdHMiLCJ0aXRsZSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

});