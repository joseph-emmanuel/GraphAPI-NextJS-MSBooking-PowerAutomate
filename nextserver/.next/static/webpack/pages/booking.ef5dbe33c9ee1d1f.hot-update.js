"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/booking",{

/***/ "./pages/booking.js":
/*!**************************!*\
  !*** ./pages/booking.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _public_testFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/testFile */ \"./public/testFile.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// import getBookedSlots from \"../public/getSlots\";\nfunction Booking(param) {\n    let { slots , email , startDate , endDate , staffMembersArray  } = param;\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const [selectedStaff, setSelectedStaff] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const staffArray = [];\n    // console.log(\"Selected Staff\", selectedStaff);\n    slots.value.map((item)=>{\n        staffArray.includes(item.staffMemberIds[0]) || item.staffMemberIds[0] !== undefined ? staffArray.push(item.staffMemberIds[0]) : null;\n    });\n    // staffMembersArray.value.map((item) => {\n    //   console.log(\"Staff members :\", item);\n    // });\n    const bookedSlots = slots.value.map((item)=>moment__WEBPACK_IMPORTED_MODULE_3___default()(item.start.dateTime, \"YYYY-MM-DDTHH:mm\").format(\"hh:mmA\"));\n    const totalSlots = arrayCreator(bookedSlots);\n    //   console.log(\"totalSlots\", totalSlots);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center mt-24\",\n                children: \" Form \"\n            }, void 0, false, {\n                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        action: \"\",\n                        onSubmit: submitContact,\n                        className: \"m-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"email\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"!w-[200px]\",\n                                type: \"email\",\n                                value: email,\n                                id: \"email\",\n                                disabled: true\n                            }, void 0, false, {\n                                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                lineNumber: 48,\n                                columnNumber: 18\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"text\",\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"!w-[200px]\",\n                                type: \"text\",\n                                onChange: (param)=>{\n                                    let { target  } = param;\n                                    return setName(target === null || target === void 0 ? void 0 : target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"\",\n                                id: \"\",\n                                onChange: (e)=>setSelectedStaff(e.target.value),\n                                children: staffMembersArray.value.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: item.id,\n                                        children: item.displayName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"\",\n                                id: \"\",\n                                onChange: (e)=>setSelectedOption(e.target.value),\n                                children: totalSlots.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: item,\n                                        children: item\n                                    }, void 0, false, {\n                                        fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                        lineNumber: 89,\n                        columnNumber: 16\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>submitContact(startDate, endDate, email, name, selectedOption, selectedStaff),\n                        children: \"Submit data\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joseph.emmanuel/Sites/automate/GraphAPI-NextJS-MSBooking-PowerAutomate/nextserver/pages/booking.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Booking, \"ru11U3czz/qXQV2z5RqZ81Hs7lE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c = Booking;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Booking);\nfunction arrayCreator(slots) {\n    //   slots = moment(slots).add(6, \"hours\").format(\"hh:mmA\");\n    slots = slots.map((item)=>moment__WEBPACK_IMPORTED_MODULE_3___default()(item, \"hh:mmA\").add(6, \"hours\").format(\"hh:mmA\"));\n    //   console.log(\"slots\", slots);\n    // console.log(\"slots\", slots);\n    const locale = \"en\";\n    const hours = [];\n    moment__WEBPACK_IMPORTED_MODULE_3___default().locale(locale);\n    for(let hour = 9; hour < 18; hour++){\n        hours.push(moment__WEBPACK_IMPORTED_MODULE_3___default()({\n            hour\n        }).format(\"hh:mmA\"));\n        hours.push(moment__WEBPACK_IMPORTED_MODULE_3___default()({\n            hour,\n            minute: 30\n        }).format(\"hh:mmA\"));\n    }\n    return hours.filter((item)=>!slots.includes(item));\n}\nBooking.getInitialProps = async (ctx)=>{\n    const startDate = ctx.query.startDate + \":00Z\";\n    const endDate = ctx.query.endDate + \":00Z\";\n    const email = ctx.query.email;\n    //   console.log(\"startDate\", startDate);\n    //   console.log(\"endDate\", endDate);\n    //   console.log(\"email\", email);\n    //   console.log(\n    //     `Query string: https://graph.microsoft.com/beta/bookingBusinesses/bookingBusiness@sashat.onmicrosoft.com/calendarView?start=${startDate}&end=${endDate}`\n    //   );\n    const config = {\n        headers: {\n            Authorization: \"Bearer \".concat(\"eyJ0eXAiOiJKV1QiLCJub25jZSI6Im5SSVlMV3dTZGxwLVljVlptVnRfSlMxR1hvZnVsYkZvWTdMNWo4TWVjUmsiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83YmM5NGVkOC0xNTllLTQyZTYtOWRjMi0xYzY3MjUyZDJhYzcvIiwiaWF0IjoxNjY5NjU4MjAzLCJuYmYiOjE2Njk2NTgyMDMsImV4cCI6MTY2OTY2MjgxNCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhUQUFBQUxpcXBPcnVtSi9sRzk0bnR1UUE4OW01ZkoxMjRKQllSejR1OFhPak5kaEZtbFZ1Njh4clRKcnprTDdPRlprd1RDVi93NFJmVkN3dmIyalhFZ3JTWlRvUnFMWGx5bWNVNWZlZ2dNVDNHN0ZBPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggRXhwbG9yZXIiLCJhcHBpZCI6ImRlOGJjOGI1LWQ5ZjktNDhiMS1hOGFkLWI3NDhkYTcyNTA2NCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiRW1tYW51ZWwiLCJnaXZlbl9uYW1lIjoiSm9zZXBoIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiOTkuMjM3LjIyLjEwNyIsIm5hbWUiOiJKb3NlcGggRW1tYW51ZWwiLCJvaWQiOiIyODljMjhjNS1iNzk3LTRiOGYtYjgwMC01MGRiODViNDk5ZjQiLCJwbGF0ZiI6IjUiLCJwdWlkIjoiMTAwMzIwMDI0OTM5MUI3QiIsInJoIjoiMC5BWDBBMkU3SmU1NFY1a0tkd2h4bkpTMHF4d01BQUFBQUFBQUF3QUFBQUFBQUFBQ2NBQ0EuIiwic2NwIjoiQm9va2luZ3MuTWFuYWdlLkFsbCBCb29raW5ncy5SZWFkLkFsbCBCb29raW5ncy5SZWFkV3JpdGUuQWxsIEJvb2tpbmdzQXBwb2ludG1lbnQuUmVhZFdyaXRlLkFsbCBvcGVuaWQgcHJvZmlsZSBVc2VyLlJlYWQgVXNlci5SZWFkV3JpdGUgZW1haWwiLCJzdWIiOiJWOHZmeERyQXJKWktKVlBMVXE3ZzRfWVJhRHE3aVlLOWMteUpScUZhdV84IiwidGVuYW50X3JlZ2lvbl9zY29wZSI6Ik5BIiwidGlkIjoiN2JjOTRlZDgtMTU5ZS00MmU2LTlkYzItMWM2NzI1MmQyYWM3IiwidW5pcXVlX25hbWUiOiJKb3NlcGhFbW1hbnVlbEBzYXNoYXQub25taWNyb3NvZnQuY29tIiwidXBuIjoiSm9zZXBoRW1tYW51ZWxAc2FzaGF0Lm9ubWljcm9zb2Z0LmNvbSIsInV0aSI6IkN3S3FjYldRa0VTZWFnODA1NXVLQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfc3QiOnsic3ViIjoiUkdGcFF0NGVoQm1VRW53WHIyZWcyMzVhWHVuS1NLS2ZHOWk5VUtUWk04TSJ9LCJ4bXNfdGNkdCI6MTY2ODAxODQyOH0.pyeVy4ay06wYvKImS-DNkERVbGLZz54XfBmhS5ktVvn4s2HPgG6JHnuOI4wKm_qYmzkyhBn37WfhxnrbCfTVUmHCPjl-7vFrHS-_pYXWWt41MPFUTOuzqk3Elf2f9mX0_TfeARhZQbdao4UsTyO4xWtf5CjfChYkugACJPBg2EM3ldioLqK2exUpBWWf_6S6OumbE45S1532HudtSfLvXT6Ux2XwMEjDqbKRDvjbA9O6eeOpi8Mc03aEExefL2N2CyCs9BL571dtAui8JWB5IRYZeAJMJcN7pf18efEZYZ7JQJ9hVo81-j9VdpfKFxLIXTTOLjTYa0STvcXX5gogjQ\"),\n            \"Content-Type\": \"application/json\"\n        }\n    };\n    const org = \"https://graph.microsoft.com/beta/bookingBusinesses/bookingBusiness@sashat.onmicrosoft.com/calendarView?start=\".concat(startDate, \"&end=\").concat(endDate);\n    const dmy = \"https://catfact.ninja/fact\";\n    const res = await fetch(org, config);\n    const json = await res.json();\n    const staffMembers = await fetch(\"https://graph.microsoft.com/beta/bookingBusinesses/bookingBusiness@sashat.onmicrosoft.com/staffMembers\", config);\n    const staffMembersArray = await staffMembers.json();\n    console.log(\"json\", json);\n    return {\n        slots: json,\n        email: email,\n        startDate: startDate,\n        endDate: endDate,\n        staffMembersArray: staffMembersArray\n    };\n};\nfunction submitContact(startDate, endDate, email, name, selectedOption, selectedStaff) {\n    startDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(moment__WEBPACK_IMPORTED_MODULE_3___default()(startDate, \"YYYY-MM-DDTHH:mm:ss:00.0000000+00:00\").format(\"YYYY-MM-DDT\") + selectedOption, \"YYYY-MM-DDThh:mmA\").format(\"YYYY-MM-DDTHH:mm\");\n    endDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(startDate).add(30, \"minutes\").format(\"YYYY-MM-DDTHH:mm\");\n    (0,_public_testFile__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(moment__WEBPACK_IMPORTED_MODULE_3___default()(startDate).format(\"YYYY-MM-DDTHH:mm\"), endDate, email, selectedStaff);\n}\nvar _c;\n$RefreshReg$(_c, \"Booking\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsK0pBQStKO0lBQy9KLE9BQU87SUFFUCxNQUFNd0QsU0FBUztRQUNiQyxTQUFTO1lBQ1BDLGVBQWUsVUFBOEMsT0FBcENDLDZzRUFBbUM7WUFDNUQsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFDQSxNQUFNRyxNQUFNLGdIQUFpSTVELE9BQWpCRCxXQUFVLFNBQWUsT0FBUkM7SUFDN0ksTUFBTTZELE1BQU87SUFDYixNQUFNQyxNQUFNLE1BQU1DLE1BQU1ILEtBQUtOO0lBQzdCLE1BQU1VLE9BQU8sTUFBTUYsSUFBSUUsSUFBSTtJQUMzQixNQUFNQyxlQUFlLE1BQU1GLE1BQ3hCLDBHQUNEVDtJQUVGLE1BQU1yRCxvQkFBb0IsTUFBTWdFLGFBQWFELElBQUk7SUFDakRFLFFBQVFDLEdBQUcsQ0FBQyxRQUFRSDtJQUNwQixPQUFPO1FBQ0xuRSxPQUFPbUU7UUFDUGxFLE9BQU9BO1FBQ1BDLFdBQVdBO1FBQ1hDLFNBQVNBO1FBQ1RDLG1CQUFtQkE7SUFDckI7QUFDRjtBQUNBLFNBQVM0QixjQUNQOUIsU0FBUyxFQUNUQyxPQUFPLEVBQ1BGLEtBQUssRUFDTEksSUFBSSxFQUNKRSxjQUFjLEVBQ2RFLGFBQWEsRUFDYjtJQUNBUCxZQUFZWiw2Q0FBTUEsQ0FDaEJBLDZDQUFNQSxDQUFDWSxXQUFXLHdDQUF3Q3FCLE1BQU0sQ0FDOUQsaUJBQ0VoQixnQkFDSixxQkFDQWdCLE1BQU0sQ0FBQztJQUNUcEIsVUFBVWIsNkNBQU1BLENBQUNZLFdBQVc4QyxHQUFHLENBQUMsSUFBSSxXQUFXekIsTUFBTSxDQUFDO0lBRXREL0IsNERBQU9BLENBQ0xGLDZDQUFNQSxDQUFDWSxXQUFXcUIsTUFBTSxDQUFDLHFCQUN6QnBCLFNBQ0FGLE9BQ0FRO0FBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYm9va2luZy5qcz81NTQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgZ2V0RGF0YSBmcm9tIFwiLi4vcHVibGljL3Rlc3RGaWxlXCI7XG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xuaW1wb3J0IHsgdXNlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuLy8gaW1wb3J0IGdldEJvb2tlZFNsb3RzIGZyb20gXCIuLi9wdWJsaWMvZ2V0U2xvdHNcIjtcblxuZnVuY3Rpb24gQm9va2luZyh7IHNsb3RzLCBlbWFpbCwgc3RhcnREYXRlLCBlbmREYXRlLCBzdGFmZk1lbWJlcnNBcnJheSB9KSB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNldFNlbGVjdGVkT3B0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2VsZWN0ZWRTdGFmZiwgc2V0U2VsZWN0ZWRTdGFmZl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHN0YWZmQXJyYXkgPSBbXTtcbiAgLy8gY29uc29sZS5sb2coXCJTZWxlY3RlZCBTdGFmZlwiLCBzZWxlY3RlZFN0YWZmKTtcbiAgc2xvdHMudmFsdWUubWFwKChpdGVtKSA9PiB7XG4gICAgc3RhZmZBcnJheS5pbmNsdWRlcyhpdGVtLnN0YWZmTWVtYmVySWRzWzBdKSB8fFxuICAgIGl0ZW0uc3RhZmZNZW1iZXJJZHNbMF0gIT09IHVuZGVmaW5lZFxuICAgICAgPyBzdGFmZkFycmF5LnB1c2goaXRlbS5zdGFmZk1lbWJlcklkc1swXSlcbiAgICAgIDogbnVsbDtcbiAgfSk7XG4gIC8vIHN0YWZmTWVtYmVyc0FycmF5LnZhbHVlLm1hcCgoaXRlbSkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiU3RhZmYgbWVtYmVycyA6XCIsIGl0ZW0pO1xuICAvLyB9KTtcbiAgY29uc3QgYm9va2VkU2xvdHMgPSBzbG90cy52YWx1ZS5tYXAoKGl0ZW0pID0+XG4gICAgbW9tZW50KGl0ZW0uc3RhcnQuZGF0ZVRpbWUsIFwiWVlZWS1NTS1ERFRISDptbVwiKS5mb3JtYXQoXCJoaDptbUFcIilcbiAgKTtcbiAgY29uc3QgdG90YWxTbG90cyA9IGFycmF5Q3JlYXRvcihib29rZWRTbG90cyk7XG4gIC8vICAgY29uc29sZS5sb2coXCJ0b3RhbFNsb3RzXCIsIHRvdGFsU2xvdHMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0yNFwiPiBGb3JtIDwvaDE+XG4gICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXtzdWJtaXRDb250YWN0fT5DbGljayBmb3IgRGF0YTwvYnV0dG9uPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvXCI+XG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIG9uU3VibWl0PXtzdWJtaXRDb250YWN0fSBjbGFzc05hbWU9XCJtLWF1dG9cIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIXctWzIwMHB4XVwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgIDxiciAvPiA8YnIgLz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRleHRcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiF3LVsyMDBweF1cIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXROYW1lKHRhcmdldD8udmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgey8qIDxzZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJcIlxuICAgICAgICAgICAgaWQ9XCJcIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZFN0YWZmKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Wy4uLm5ldyBTZXQoc3RhZmZBcnJheSldLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpdGVtfT57aXRlbX08L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PntcIiBcIn0gKi99XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cIlwiXG4gICAgICAgICAgICBpZD1cIlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkU3RhZmYoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzdGFmZk1lbWJlcnNBcnJheS52YWx1ZS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aXRlbS5pZH0+e2l0ZW0uZGlzcGxheU5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD57XCIgXCJ9XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cIlwiXG4gICAgICAgICAgICBpZD1cIlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkT3B0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dG90YWxTbG90cy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aXRlbX0+e2l0ZW19PC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9mb3JtPntcIiBcIn1cbiAgICAgICAgPGJyIC8+IDxiciAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgIHN1Ym1pdENvbnRhY3QoXG4gICAgICAgICAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uLFxuICAgICAgICAgICAgICBzZWxlY3RlZFN0YWZmXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgU3VibWl0IGRhdGFcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmc7XG5mdW5jdGlvbiBhcnJheUNyZWF0b3Ioc2xvdHMpIHtcbiAgLy8gICBzbG90cyA9IG1vbWVudChzbG90cykuYWRkKDYsIFwiaG91cnNcIikuZm9ybWF0KFwiaGg6bW1BXCIpO1xuICBzbG90cyA9IHNsb3RzLm1hcCgoaXRlbSkgPT5cbiAgICBtb21lbnQoaXRlbSwgXCJoaDptbUFcIikuYWRkKDYsIFwiaG91cnNcIikuZm9ybWF0KFwiaGg6bW1BXCIpXG4gICk7XG4gIC8vICAgY29uc29sZS5sb2coXCJzbG90c1wiLCBzbG90cyk7XG5cbiAgLy8gY29uc29sZS5sb2coXCJzbG90c1wiLCBzbG90cyk7XG4gIGNvbnN0IGxvY2FsZSA9IFwiZW5cIjtcbiAgY29uc3QgaG91cnMgPSBbXTtcbiAgbW9tZW50LmxvY2FsZShsb2NhbGUpO1xuICBmb3IgKGxldCBob3VyID0gOTsgaG91ciA8IDE4OyBob3VyKyspIHtcbiAgICBob3Vycy5wdXNoKG1vbWVudCh7IGhvdXIgfSkuZm9ybWF0KFwiaGg6bW1BXCIpKTtcbiAgICBob3Vycy5wdXNoKFxuICAgICAgbW9tZW50KHtcbiAgICAgICAgaG91cixcbiAgICAgICAgbWludXRlOiAzMCxcbiAgICAgIH0pLmZvcm1hdChcImhoOm1tQVwiKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGhvdXJzLmZpbHRlcigoaXRlbSkgPT4gIXNsb3RzLmluY2x1ZGVzKGl0ZW0pKTtcbn1cbkJvb2tpbmcuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCBzdGFydERhdGUgPSBjdHgucXVlcnkuc3RhcnREYXRlICsgXCI6MDBaXCI7XG4gIGNvbnN0IGVuZERhdGUgPSBjdHgucXVlcnkuZW5kRGF0ZSArIFwiOjAwWlwiO1xuICBjb25zdCBlbWFpbCA9IGN0eC5xdWVyeS5lbWFpbDtcbiAgLy8gICBjb25zb2xlLmxvZyhcInN0YXJ0RGF0ZVwiLCBzdGFydERhdGUpO1xuICAvLyAgIGNvbnNvbGUubG9nKFwiZW5kRGF0ZVwiLCBlbmREYXRlKTtcbiAgLy8gICBjb25zb2xlLmxvZyhcImVtYWlsXCIsIGVtYWlsKTtcbiAgLy8gICBjb25zb2xlLmxvZyhcbiAgLy8gICAgIGBRdWVyeSBzdHJpbmc6IGh0dHBzOi8vZ3JhcGgubWljcm9zb2Z0LmNvbS9iZXRhL2Jvb2tpbmdCdXNpbmVzc2VzL2Jvb2tpbmdCdXNpbmVzc0BzYXNoYXQub25taWNyb3NvZnQuY29tL2NhbGVuZGFyVmlldz9zdGFydD0ke3N0YXJ0RGF0ZX0mZW5kPSR7ZW5kRGF0ZX1gXG4gIC8vICAgKTtcblxuICBjb25zdCBjb25maWcgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FDQ0VTX1RPS0VOfWAsXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9O1xuICBjb25zdCBvcmcgPSBgaHR0cHM6Ly9ncmFwaC5taWNyb3NvZnQuY29tL2JldGEvYm9va2luZ0J1c2luZXNzZXMvYm9va2luZ0J1c2luZXNzQHNhc2hhdC5vbm1pY3Jvc29mdC5jb20vY2FsZW5kYXJWaWV3P3N0YXJ0PSR7c3RhcnREYXRlfSZlbmQ9JHtlbmREYXRlfWA7XG4gIGNvbnN0IGRteSA9IGBodHRwczovL2NhdGZhY3QubmluamEvZmFjdGA7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKG9yZywgY29uZmlnKTtcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnN0IHN0YWZmTWVtYmVycyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20vYmV0YS9ib29raW5nQnVzaW5lc3Nlcy9ib29raW5nQnVzaW5lc3NAc2FzaGF0Lm9ubWljcm9zb2Z0LmNvbS9zdGFmZk1lbWJlcnNgLFxuICAgIGNvbmZpZ1xuICApO1xuICBjb25zdCBzdGFmZk1lbWJlcnNBcnJheSA9IGF3YWl0IHN0YWZmTWVtYmVycy5qc29uKCk7XG4gIGNvbnNvbGUubG9nKFwianNvblwiLCBqc29uKTtcbiAgcmV0dXJuIHtcbiAgICBzbG90czoganNvbixcbiAgICBlbWFpbDogZW1haWwsXG4gICAgc3RhcnREYXRlOiBzdGFydERhdGUsXG4gICAgZW5kRGF0ZTogZW5kRGF0ZSxcbiAgICBzdGFmZk1lbWJlcnNBcnJheTogc3RhZmZNZW1iZXJzQXJyYXksXG4gIH07XG59O1xuZnVuY3Rpb24gc3VibWl0Q29udGFjdChcbiAgc3RhcnREYXRlLFxuICBlbmREYXRlLFxuICBlbWFpbCxcbiAgbmFtZSxcbiAgc2VsZWN0ZWRPcHRpb24sXG4gIHNlbGVjdGVkU3RhZmZcbikge1xuICBzdGFydERhdGUgPSBtb21lbnQoXG4gICAgbW9tZW50KHN0YXJ0RGF0ZSwgXCJZWVlZLU1NLUREVEhIOm1tOnNzOjAwLjAwMDAwMDArMDA6MDBcIikuZm9ybWF0KFxuICAgICAgXCJZWVlZLU1NLUREVFwiXG4gICAgKSArIHNlbGVjdGVkT3B0aW9uLFxuICAgIFwiWVlZWS1NTS1ERFRoaDptbUFcIlxuICApLmZvcm1hdChcIllZWVktTU0tRERUSEg6bW1cIik7XG4gIGVuZERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5hZGQoMzAsIFwibWludXRlc1wiKS5mb3JtYXQoXCJZWVlZLU1NLUREVEhIOm1tXCIpO1xuXG4gIGdldERhdGEoXG4gICAgbW9tZW50KHN0YXJ0RGF0ZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFRISDptbVwiKSxcbiAgICBlbmREYXRlLFxuICAgIGVtYWlsLFxuICAgIHNlbGVjdGVkU3RhZmZcbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJtb21lbnQiLCJheGlvcyIsImdldERhdGEiLCJTY3JpcHQiLCJ1c2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsInVzZVJvdXRlciIsIkJvb2tpbmciLCJzbG90cyIsImVtYWlsIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsInN0YWZmTWVtYmVyc0FycmF5IiwibmFtZSIsInNldE5hbWUiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwic2VsZWN0ZWRTdGFmZiIsInNldFNlbGVjdGVkU3RhZmYiLCJyb3V0ZXIiLCJzdGFmZkFycmF5IiwidmFsdWUiLCJtYXAiLCJpdGVtIiwiaW5jbHVkZXMiLCJzdGFmZk1lbWJlcklkcyIsInVuZGVmaW5lZCIsInB1c2giLCJib29rZWRTbG90cyIsInN0YXJ0IiwiZGF0ZVRpbWUiLCJmb3JtYXQiLCJ0b3RhbFNsb3RzIiwiYXJyYXlDcmVhdG9yIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJmb3JtIiwiYWN0aW9uIiwib25TdWJtaXQiLCJzdWJtaXRDb250YWN0IiwibGFiZWwiLCJodG1sRm9yIiwiYnIiLCJpbnB1dCIsInR5cGUiLCJpZCIsImRpc2FibGVkIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJzZWxlY3QiLCJlIiwib3B0aW9uIiwiZGlzcGxheU5hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiYWRkIiwibG9jYWxlIiwiaG91cnMiLCJob3VyIiwibWludXRlIiwiZmlsdGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJjb25maWciLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BQ0NFU19UT0tFTiIsIm9yZyIsImRteSIsInJlcyIsImZldGNoIiwianNvbiIsInN0YWZmTWVtYmVycyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/booking.js\n"));

/***/ })

});