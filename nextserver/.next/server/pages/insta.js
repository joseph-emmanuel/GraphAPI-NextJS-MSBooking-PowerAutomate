"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/insta";
exports.ids = ["pages/insta"];
exports.modules = {

/***/ "./pages/insta.jsx":
/*!*************************!*\
  !*** ./pages/insta.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var instagram_web_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! instagram-web-api */ \"instagram-web-api\");\n/* harmony import */ var instagram_web_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(instagram_web_api__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction insta() {\n    //   const { username, password } = process.env;\n    const username = \"joedev.gta\";\n    const password = \"co4vinus\";\n    console.log(\"username\", username);\n    console.log(\"password\", password);\n    const client = new (instagram_web_api__WEBPACK_IMPORTED_MODULE_2___default())({\n        username,\n        password\n    });\n    (async ()=>{\n        await client.login();\n        const profile = await client.getProfile();\n        console.log(profile);\n    })();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"insta\"\n    }, void 0, false, {\n        fileName: \"/Users/joseph.emmanuel/Sites/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/insta.jsx\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (insta);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnN0YS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2dCO0FBRTFDLFNBQVNFLFFBQVE7SUFDZixnREFBZ0Q7SUFDaEQsTUFBTUMsV0FBV0MsWUFBc0M7SUFDdkQsTUFBTUcsV0FBV0gsVUFBc0M7SUFDdkRLLFFBQVFDLEdBQUcsQ0FBQyxZQUFZUDtJQUN4Qk0sUUFBUUMsR0FBRyxDQUFDLFlBQVlIO0lBQ3hCLE1BQU1JLFNBQVMsSUFBSVYsMERBQVNBLENBQUM7UUFBRUU7UUFBVUk7SUFBUztJQUNqRCxXQUFZO1FBQ1gsTUFBTUksT0FBT0MsS0FBSztRQUNsQixNQUFNQyxVQUFVLE1BQU1GLE9BQU9HLFVBQVU7UUFDdkNMLFFBQVFDLEdBQUcsQ0FBQ0c7SUFDZDtJQUNBLHFCQUFPLDhEQUFDRTtrQkFBSTs7Ozs7O0FBQ2Q7QUFFQSxpRUFBZWIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRzZXJ2ZXIvLi9wYWdlcy9pbnN0YS5qc3g/YmE4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5zdGFncmFtIGZyb20gXCJpbnN0YWdyYW0td2ViLWFwaVwiO1xuXG5mdW5jdGlvbiBpbnN0YSgpIHtcbiAgLy8gICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gcHJvY2Vzcy5lbnY7XG4gIGNvbnN0IHVzZXJuYW1lID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU5TVEFfVVNFUk5BTUU7XG4gIGNvbnN0IHBhc3N3b3JkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSU5TVEFfUEFTU1dPUkQ7XG4gIGNvbnNvbGUubG9nKFwidXNlcm5hbWVcIiwgdXNlcm5hbWUpO1xuICBjb25zb2xlLmxvZyhcInBhc3N3b3JkXCIsIHBhc3N3b3JkKTtcbiAgY29uc3QgY2xpZW50ID0gbmV3IEluc3RhZ3JhbSh7IHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcbiAgKGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBjbGllbnQubG9naW4oKTtcbiAgICBjb25zdCBwcm9maWxlID0gYXdhaXQgY2xpZW50LmdldFByb2ZpbGUoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9maWxlKTtcbiAgfSkoKTtcbiAgcmV0dXJuIDxkaXY+aW5zdGE8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW5zdGFncmFtIiwiaW5zdGEiLCJ1c2VybmFtZSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19JTlNUQV9VU0VSTkFNRSIsInBhc3N3b3JkIiwiTkVYVF9QVUJMSUNfSU5TVEFfUEFTU1dPUkQiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwibG9naW4iLCJwcm9maWxlIiwiZ2V0UHJvZmlsZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/insta.jsx\n");

/***/ }),

/***/ "instagram-web-api":
/*!************************************!*\
  !*** external "instagram-web-api" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("instagram-web-api");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/insta.jsx"));
module.exports = __webpack_exports__;

})();