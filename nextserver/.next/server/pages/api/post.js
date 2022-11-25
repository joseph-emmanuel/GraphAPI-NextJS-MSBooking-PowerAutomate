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
exports.id = "pages/api/post";
exports.ids = ["pages/api/post"];
exports.modules = {

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/post.js":
/*!***************************!*\
  !*** ./pages/api/post.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function handler(req, res) {\n    // const { CustomerName, CustomerPhone } = JSON.parse(req.body);\n    // console.log(\"CustomerName: \", req.body);\n    //   console.log(\"CustomerPhone: \", req.body.CustomerPhone);\n    // console.log(\n    //   \"CustomerName: \",\n    //   moment(req.body.EndTime, \"MM/DD/YYYY HH:mm:ss A\").format(\n    //     \"YYYY-MM-DDTHH:mm:ss\"\n    //   )\n    // );\n    console.log(\"Date: \", req.body.StartTime);\n    await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`http://localhost:1337/api/bookings`, {\n        data: {\n            CustomerName: req.body.CustomerName,\n            CustomerEmail: req.body.CustomerEmail,\n            BookingDate: moment__WEBPACK_IMPORTED_MODULE_1___default()(req.body.StartTime, \"MM/DD/YYYY HH:mm:ss A\").format(\"YYYY-MM-DDTHH:mm:ss\"),\n            AppointmentId: req.body.Id\n        }\n    });\n    res.status(200).json({\n        message: \"Success\"\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ0U7QUFDYixlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxnRUFBZ0U7SUFDaEUsMkNBQTJDO0lBQzNDLDREQUE0RDtJQUM1RCxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDhEQUE4RDtJQUM5RCw0QkFBNEI7SUFDNUIsTUFBTTtJQUNOLEtBQUs7SUFDTEMsUUFBUUMsR0FBRyxDQUFDLFVBQVVILElBQUlJLElBQUksQ0FBQ0MsU0FBUztJQUN4QyxNQUFNUixrREFBVSxDQUFDLENBQUMsa0NBQWtDLENBQUMsRUFBRTtRQUNyRFUsTUFBTTtZQUNKQyxjQUFjUixJQUFJSSxJQUFJLENBQUNJLFlBQVk7WUFDbkNDLGVBQWVULElBQUlJLElBQUksQ0FBQ0ssYUFBYTtZQUNyQ0MsYUFBYVosNkNBQU1BLENBQUNFLElBQUlJLElBQUksQ0FBQ0MsU0FBUyxFQUFFLHlCQUF5Qk0sTUFBTSxDQUNyRTtZQUVGQyxlQUFlWixJQUFJSSxJQUFJLENBQUNTLEVBQUU7UUFDNUI7SUFDRjtJQUNBWixJQUFJYSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLFNBQVM7SUFBVTtBQUM1QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHNlcnZlci8uL3BhZ2VzL2FwaS9wb3N0LmpzP2VmMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIC8vIGNvbnN0IHsgQ3VzdG9tZXJOYW1lLCBDdXN0b21lclBob25lIH0gPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcbiAgLy8gY29uc29sZS5sb2coXCJDdXN0b21lck5hbWU6IFwiLCByZXEuYm9keSk7XG4gIC8vICAgY29uc29sZS5sb2coXCJDdXN0b21lclBob25lOiBcIiwgcmVxLmJvZHkuQ3VzdG9tZXJQaG9uZSk7XG4gIC8vIGNvbnNvbGUubG9nKFxuICAvLyAgIFwiQ3VzdG9tZXJOYW1lOiBcIixcbiAgLy8gICBtb21lbnQocmVxLmJvZHkuRW5kVGltZSwgXCJNTS9ERC9ZWVlZIEhIOm1tOnNzIEFcIikuZm9ybWF0KFxuICAvLyAgICAgXCJZWVlZLU1NLUREVEhIOm1tOnNzXCJcbiAgLy8gICApXG4gIC8vICk7XG4gIGNvbnNvbGUubG9nKFwiRGF0ZTogXCIsIHJlcS5ib2R5LlN0YXJ0VGltZSk7XG4gIGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvYm9va2luZ3NgLCB7XG4gICAgZGF0YToge1xuICAgICAgQ3VzdG9tZXJOYW1lOiByZXEuYm9keS5DdXN0b21lck5hbWUsXG4gICAgICBDdXN0b21lckVtYWlsOiByZXEuYm9keS5DdXN0b21lckVtYWlsLFxuICAgICAgQm9va2luZ0RhdGU6IG1vbWVudChyZXEuYm9keS5TdGFydFRpbWUsIFwiTU0vREQvWVlZWSBISDptbTpzcyBBXCIpLmZvcm1hdChcbiAgICAgICAgXCJZWVlZLU1NLUREVEhIOm1tOnNzXCJcbiAgICAgICksXG4gICAgICBBcHBvaW50bWVudElkOiByZXEuYm9keS5JZCxcbiAgICB9LFxuICB9KTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIlN1Y2Nlc3NcIiB9KTtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsIm1vbWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIlN0YXJ0VGltZSIsInBvc3QiLCJkYXRhIiwiQ3VzdG9tZXJOYW1lIiwiQ3VzdG9tZXJFbWFpbCIsIkJvb2tpbmdEYXRlIiwiZm9ybWF0IiwiQXBwb2ludG1lbnRJZCIsIklkIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/post.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/post.js"));
module.exports = __webpack_exports__;

})();