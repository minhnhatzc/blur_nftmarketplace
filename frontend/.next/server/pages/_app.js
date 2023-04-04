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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__, wagmi_chains__WEBPACK_IMPORTED_MODULE_7__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__, wagmi_chains__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.goerli,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.polygon,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.polygonMumbai,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.optimism,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.optimismGoerli,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.arbitrum,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.arbitrumGoerli\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_5__.alchemyProvider)({\n        apiKey: process.env.ALCHEMY_ID\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_6__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"NFT Marketplace\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            modalSize: \"compact\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Blockchain\\\\Project\\\\blur_marketplace\\\\frontend\\\\pages\\\\_app.js\",\n                lineNumber: 52,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Blockchain\\\\Project\\\\blur_marketplace\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Blockchain\\\\Project\\\\blur_marketplace\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDYTtBQUNvQztBQUNMO0FBQ2hCO0FBQ0Y7QUFVbEM7QUFFdEIsTUFBTWdCLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0Msc0JBQXNCO0FBRXBELE1BQU0sRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR2xCLHNEQUFlQSxDQUMxQztJQUNBSyxpREFBT0E7SUFDUEksZ0RBQU1BO0lBQ05ILGlEQUFPQTtJQUNQSSx1REFBYUE7SUFDYkgsa0RBQVFBO0lBQ1JJLHdEQUFjQTtJQUNkSCxrREFBUUE7SUFDUkksd0RBQWNBO0NBQ2QsRUFDQTtJQUNFVCx3RUFBZUEsQ0FBQztRQUFFZ0IsUUFBUUwsUUFBUUMsR0FBRyxDQUFDSyxVQUFVO0lBQUM7SUFDakRoQixzRUFBY0E7Q0FDZjtBQUdILE1BQU0sRUFBRWlCLFdBQVUsRUFBRSxHQUFHeEIseUVBQWlCQSxDQUFDO0lBQ3ZDeUIsU0FBUztJQUNUTDtBQUNGO0FBRUEsTUFBTU0sY0FBY3RCLG1EQUFZQSxDQUFDO0lBQy9CdUIsYUFBYSxJQUFJO0lBQ2pCSDtJQUNBSDtBQUNGO0FBRWUsU0FBU08sTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3RELHFCQUNFLDhEQUFDekIsOENBQVdBO1FBQUMwQixRQUFRTDtrQkFDbkIsNEVBQUN6QixzRUFBa0JBO1lBQUNtQixRQUFRQTtZQUFRWSxXQUFVO3NCQUMxQyw0RUFBQ0g7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGdldERlZmF1bHRXYWxsZXRzLCBSYWluYm93S2l0UHJvdmlkZXIgfSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xuaW1wb3J0IHsgY2hhaW4sIGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgYWxjaGVteVByb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9hbGNoZW15XCI7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvcHVibGljXCI7XG5pbXBvcnQge1xuXHRtYWlubmV0LFxuXHRwb2x5Z29uLFxuXHRvcHRpbWlzbSxcblx0YXJiaXRydW0sXG5cdGdvZXJsaSxcblx0cG9seWdvbk11bWJhaSxcblx0b3B0aW1pc21Hb2VybGksXG5cdGFyYml0cnVtR29lcmxpLFxufSBmcm9tIFwid2FnbWkvY2hhaW5zXCI7XG5cbmNvbnN0IGFsY2hlbXlJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FMQ0hFTVlfSUQ7XG5cbmNvbnN0IHsgY2hhaW5zLCBwcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbXG5cdFx0bWFpbm5ldCxcblx0XHRnb2VybGksXG5cdFx0cG9seWdvbixcblx0XHRwb2x5Z29uTXVtYmFpLFxuXHRcdG9wdGltaXNtLFxuXHRcdG9wdGltaXNtR29lcmxpLFxuXHRcdGFyYml0cnVtLFxuXHRcdGFyYml0cnVtR29lcmxpLFxuXHRdLFxuICBbXG4gICAgYWxjaGVteVByb3ZpZGVyKHsgYXBpS2V5OiBwcm9jZXNzLmVudi5BTENIRU1ZX0lEIH0pLFxuICAgIHB1YmxpY1Byb3ZpZGVyKClcbiAgXVxuKTtcblxuY29uc3QgeyBjb25uZWN0b3JzIH0gPSBnZXREZWZhdWx0V2FsbGV0cyh7XG4gIGFwcE5hbWU6IFwiTkZUIE1hcmtldHBsYWNlXCIsXG4gIGNoYWlucyxcbn0pO1xuXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzLFxuICBwcm92aWRlcixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG4gICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfSBtb2RhbFNpemU9XCJjb21wYWN0XCI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJnZXREZWZhdWx0V2FsbGV0cyIsIlJhaW5ib3dLaXRQcm92aWRlciIsImNoYWluIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJhbGNoZW15UHJvdmlkZXIiLCJwdWJsaWNQcm92aWRlciIsIm1haW5uZXQiLCJwb2x5Z29uIiwib3B0aW1pc20iLCJhcmJpdHJ1bSIsImdvZXJsaSIsInBvbHlnb25NdW1iYWkiLCJvcHRpbWlzbUdvZXJsaSIsImFyYml0cnVtR29lcmxpIiwiYWxjaGVteUlkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FMQ0hFTVlfSUQiLCJjaGFpbnMiLCJwcm92aWRlciIsImFwaUtleSIsIkFMQ0hFTVlfSUQiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCIsIm1vZGFsU2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/@rainbow-me/rainbowkit/dist/index.css":
/*!************************************************************!*\
  !*** ./node_modules/@rainbow-me/rainbowkit/dist/index.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/alchemy");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();