/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Contact/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Contact/style.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ContactWrapper {
	--content-to-icon-gap: 1.5rem;
	--content-gap: calc(var(--content-to-icon-gap) * 4);
	--content-header-gap: calc(var(--content-gap) * 2);
	--content-wrapper-gap: calc(var(--content-header-gap));
	--icon-width: 4rem;

	display: grid;
	gap: var(--content-header-gap);
	place-content: stretch center;
	padding: var(--content-wrapper-gap) 0;
}

.ContactWrapper h2 {
	font-size: 3rem;
	justify-self: center;
}

.Contact {
	width: min(100ch, 60vw);
	display: flex;
	flex-flow: column;
	justify-content: space-evenly;
	gap: var(--content-gap);
	list-style-type: none;
}

.ContactWrapper .Detail {
	display: flex;
	align-items: center;
	gap: var(--content-to-icon-gap);
	text-align: left;
}

.Contact img {
	width: var(--icon-width);
	aspect-ratio: 1;
}

.Contact .Detail:nth-child(2n) {
	text-align: right;
	flex-direction: row-reverse;
}

.ContactFooter {
	min-height: 5rem;
	min-width: 100ch;
	display: flex;
	justify-content: space-evenly;
	gap: 5rem;
	background: lightblue;
}

.ContactFooter h2,
.ContactFooter p {
	display: grid;
	place-content: center;
}
`, "",{"version":3,"sources":["webpack://./src/Contact/style.css"],"names":[],"mappings":"AAAA;CACC,6BAA6B;CAC7B,mDAAmD;CACnD,kDAAkD;CAClD,sDAAsD;CACtD,kBAAkB;;CAElB,aAAa;CACb,8BAA8B;CAC9B,6BAA6B;CAC7B,qCAAqC;AACtC;;AAEA;CACC,eAAe;CACf,oBAAoB;AACrB;;AAEA;CACC,uBAAuB;CACvB,aAAa;CACb,iBAAiB;CACjB,6BAA6B;CAC7B,uBAAuB;CACvB,qBAAqB;AACtB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,+BAA+B;CAC/B,gBAAgB;AACjB;;AAEA;CACC,wBAAwB;CACxB,eAAe;AAChB;;AAEA;CACC,iBAAiB;CACjB,2BAA2B;AAC5B;;AAEA;CACC,gBAAgB;CAChB,gBAAgB;CAChB,aAAa;CACb,6BAA6B;CAC7B,SAAS;CACT,qBAAqB;AACtB;;AAEA;;CAEC,aAAa;CACb,qBAAqB;AACtB","sourcesContent":[".ContactWrapper {\n\t--content-to-icon-gap: 1.5rem;\n\t--content-gap: calc(var(--content-to-icon-gap) * 4);\n\t--content-header-gap: calc(var(--content-gap) * 2);\n\t--content-wrapper-gap: calc(var(--content-header-gap));\n\t--icon-width: 4rem;\n\n\tdisplay: grid;\n\tgap: var(--content-header-gap);\n\tplace-content: stretch center;\n\tpadding: var(--content-wrapper-gap) 0;\n}\n\n.ContactWrapper h2 {\n\tfont-size: 3rem;\n\tjustify-self: center;\n}\n\n.Contact {\n\twidth: min(100ch, 60vw);\n\tdisplay: flex;\n\tflex-flow: column;\n\tjustify-content: space-evenly;\n\tgap: var(--content-gap);\n\tlist-style-type: none;\n}\n\n.ContactWrapper .Detail {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: var(--content-to-icon-gap);\n\ttext-align: left;\n}\n\n.Contact img {\n\twidth: var(--icon-width);\n\taspect-ratio: 1;\n}\n\n.Contact .Detail:nth-child(2n) {\n\ttext-align: right;\n\tflex-direction: row-reverse;\n}\n\n.ContactFooter {\n\tmin-height: 5rem;\n\tmin-width: 100ch;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\tgap: 5rem;\n\tbackground: lightblue;\n}\n\n.ContactFooter h2,\n.ContactFooter p {\n\tdisplay: grid;\n\tplace-content: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Footer/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Footer/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.Footer {
	min-height: 5rem;
	min-width: 150ch;
	display: flex;
	gap: 1rem;
	padding: 0.5rem;
	align-items: center;
	background-color: lightblue;
}

.Footer>div,
.Footer .Detail {
	padding: 0 3rem;
}

.Footer ul {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	list-style-type: none;
}

.Footer .Detail {
	display: grid;
	place-content: center;
	text-align: center;
}

.Footer .Detail div {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1ch;
}

.Footer .Detail img {
	width: 1rem;
	aspect-ratio: 1;
}
`, "",{"version":3,"sources":["webpack://./src/Footer/style.css"],"names":[],"mappings":"AAAA;CACC,gBAAgB;CAChB,gBAAgB;CAChB,aAAa;CACb,SAAS;CACT,eAAe;CACf,mBAAmB;CACnB,2BAA2B;AAC5B;;AAEA;;CAEC,eAAe;AAChB;;AAEA;CACC,OAAO;CACP,aAAa;CACb,mBAAmB;CACnB,6BAA6B;CAC7B,qBAAqB;AACtB;;AAEA;CACC,aAAa;CACb,qBAAqB;CACrB,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,QAAQ;AACT;;AAEA;CACC,WAAW;CACX,eAAe;AAChB","sourcesContent":[".Footer {\n\tmin-height: 5rem;\n\tmin-width: 150ch;\n\tdisplay: flex;\n\tgap: 1rem;\n\tpadding: 0.5rem;\n\talign-items: center;\n\tbackground-color: lightblue;\n}\n\n.Footer>div,\n.Footer .Detail {\n\tpadding: 0 3rem;\n}\n\n.Footer ul {\n\tflex: 1;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-evenly;\n\tlist-style-type: none;\n}\n\n.Footer .Detail {\n\tdisplay: grid;\n\tplace-content: center;\n\ttext-align: center;\n}\n\n.Footer .Detail div {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1ch;\n}\n\n.Footer .Detail img {\n\twidth: 1rem;\n\taspect-ratio: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Home/style.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Home/style.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#home {
	--home-content-gap: 0.5rem;
	--content-to-image-gap: calc(var(--home-content-gap) * 4);

	display: flex;
	justify-content: center;
	align-items: center;
	gap: var(--content-to-image-gap);
}

#home .content {
	width: 30vw;
	display: grid;
	gap: var(--home-content-gap);
}

#home .content h1 {
	font-size: var(--heading-font-size);
}

.restaurant-image {
	aspect-ratio: 16 / 9;
	width: 30vw;
	display: grid;
	background-color: lightblue;
	place-content: center;
}
`, "",{"version":3,"sources":["webpack://./src/Home/style.css"],"names":[],"mappings":"AAAA;CACC,0BAA0B;CAC1B,yDAAyD;;CAEzD,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,gCAAgC;AACjC;;AAEA;CACC,WAAW;CACX,aAAa;CACb,4BAA4B;AAC7B;;AAEA;CACC,mCAAmC;AACpC;;AAEA;CACC,oBAAoB;CACpB,WAAW;CACX,aAAa;CACb,2BAA2B;CAC3B,qBAAqB;AACtB","sourcesContent":["#home {\n\t--home-content-gap: 0.5rem;\n\t--content-to-image-gap: calc(var(--home-content-gap) * 4);\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: var(--content-to-image-gap);\n}\n\n#home .content {\n\twidth: 30vw;\n\tdisplay: grid;\n\tgap: var(--home-content-gap);\n}\n\n#home .content h1 {\n\tfont-size: var(--heading-font-size);\n}\n\n.restaurant-image {\n\taspect-ratio: 16 / 9;\n\twidth: 30vw;\n\tdisplay: grid;\n\tbackground-color: lightblue;\n\tplace-content: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Menu/style.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Menu/style.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.wrapper {
	--menu-desc-to-img-gap: 1rem;
	--menu-item-to-heading-gap: calc(var(--menu-desc-to-img-gap) * 2.5);
	--menu-gap: calc(var(--menu-item-to-heading-gap) * 5);
	--menu-content-padding-vertical: calc(var(--menu-gap) / 2);

	display: grid;
	place-content: stretch center;
	gap: var(--menu-gap);
	padding: var(--menu-content-padding-vertical) 0;
	padding-bottom: calc(var(--menu-content-padding-vertical) * 2);
}

.wrapper h2 {
	display: grid;
	place-content: center;
	font-size: 3rem;
}

.Menu {
	display: flex;
	flex-flow: column;
	gap: var(--menu-gap);
	width: 60vw;
	list-style-type: none;
	margin: 0;
}

.Menu img {
	width: 30vw;
}

.MenuItem {
	display: grid;
	gap: var(--menu-item-to-heading-gap);
}

.MenuItem h3 {
	font-size: 2rem;
	text-align: center;
}

.MenuItem div {
	display: flex;
	gap: var(--menu-desc-to-img-gap);
	align-items: center;
}

.MenuItem div p {
	text-align: center;
	font-size: 1rem;
}
`, "",{"version":3,"sources":["webpack://./src/Menu/style.css"],"names":[],"mappings":"AAAA;CACC,4BAA4B;CAC5B,mEAAmE;CACnE,qDAAqD;CACrD,0DAA0D;;CAE1D,aAAa;CACb,6BAA6B;CAC7B,oBAAoB;CACpB,+CAA+C;CAC/C,8DAA8D;AAC/D;;AAEA;CACC,aAAa;CACb,qBAAqB;CACrB,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,iBAAiB;CACjB,oBAAoB;CACpB,WAAW;CACX,qBAAqB;CACrB,SAAS;AACV;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,oCAAoC;AACrC;;AAEA;CACC,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,gCAAgC;CAChC,mBAAmB;AACpB;;AAEA;CACC,kBAAkB;CAClB,eAAe;AAChB","sourcesContent":[".wrapper {\n\t--menu-desc-to-img-gap: 1rem;\n\t--menu-item-to-heading-gap: calc(var(--menu-desc-to-img-gap) * 2.5);\n\t--menu-gap: calc(var(--menu-item-to-heading-gap) * 5);\n\t--menu-content-padding-vertical: calc(var(--menu-gap) / 2);\n\n\tdisplay: grid;\n\tplace-content: stretch center;\n\tgap: var(--menu-gap);\n\tpadding: var(--menu-content-padding-vertical) 0;\n\tpadding-bottom: calc(var(--menu-content-padding-vertical) * 2);\n}\n\n.wrapper h2 {\n\tdisplay: grid;\n\tplace-content: center;\n\tfont-size: 3rem;\n}\n\n.Menu {\n\tdisplay: flex;\n\tflex-flow: column;\n\tgap: var(--menu-gap);\n\twidth: 60vw;\n\tlist-style-type: none;\n\tmargin: 0;\n}\n\n.Menu img {\n\twidth: 30vw;\n}\n\n.MenuItem {\n\tdisplay: grid;\n\tgap: var(--menu-item-to-heading-gap);\n}\n\n.MenuItem h3 {\n\tfont-size: 2rem;\n\ttext-align: center;\n}\n\n.MenuItem div {\n\tdisplay: flex;\n\tgap: var(--menu-desc-to-img-gap);\n\talign-items: center;\n}\n\n.MenuItem div p {\n\ttext-align: center;\n\tfont-size: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/theme.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/theme.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
	--stone-100: #f5f5f4;
	--stone-200: #e7e5e4;
	--stone-800: #292524;
	--amber-200: #fde68a;

	--heading-font-size: 2rem;
}

/* TODO: Brand name letter spacing  */

* {
	margin: 0;
	padding: 0;
	color: var(--stone-800);
	box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	line-height: 1.3;
	font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

span,
p {
	line-height: 1.5;
	font-family: Arial, Helvetica, sans-serif;
}
`, "",{"version":3,"sources":["webpack://./src/assets/theme.css"],"names":[],"mappings":"AAAA;CACC,oBAAoB;CACpB,oBAAoB;CACpB,oBAAoB;CACpB,oBAAoB;;CAEpB,yBAAyB;AAC1B;;AAEA,qCAAqC;;AAErC;CACC,SAAS;CACT,UAAU;CACV,uBAAuB;CACvB,sBAAsB;AACvB;;AAEA;;;;;;CAMC,gBAAgB;CAChB,sEAAsE;AACvE;;AAEA;;CAEC,gBAAgB;CAChB,yCAAyC;AAC1C","sourcesContent":[":root {\n\t--stone-100: #f5f5f4;\n\t--stone-200: #e7e5e4;\n\t--stone-800: #292524;\n\t--amber-200: #fde68a;\n\n\t--heading-font-size: 2rem;\n}\n\n/* TODO: Brand name letter spacing  */\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tcolor: var(--stone-800);\n\tbox-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\tline-height: 1.3;\n\tfont-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\nspan,\np {\n\tline-height: 1.5;\n\tfont-family: Arial, Helvetica, sans-serif;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/Contact/style.css":
/*!*******************************!*\
  !*** ./src/Contact/style.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/Contact/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Footer/style.css":
/*!******************************!*\
  !*** ./src/Footer/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/Footer/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Home/style.css":
/*!****************************!*\
  !*** ./src/Home/style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/Home/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Menu/style.css":
/*!****************************!*\
  !*** ./src/Menu/style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/Menu/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/theme.css":
/*!******************************!*\
  !*** ./src/assets/theme.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./theme.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/theme.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Contact/render.js":
/*!*******************************!*\
  !*** ./src/Contact/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Contact: () => (/* binding */ Contact),
/* harmony export */   ContactFooter: () => (/* binding */ ContactFooter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dsl_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dsl-utils */ "./src/dsl-utils.js");
/* harmony import */ var _assets_map_pin_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/map-pin.svg */ "./src/assets/map-pin.svg");
/* harmony import */ var _assets_phone_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/phone.svg */ "./src/assets/phone.svg");
/* harmony import */ var _assets_twitter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/twitter.svg */ "./src/assets/twitter.svg");
/* harmony import */ var _assets_award_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/award.svg */ "./src/assets/award.svg");
/* harmony import */ var _assets_image_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/image.svg */ "./src/assets/image.svg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/Contact/style.css");








function init_contact_element() {
	const dummy_image_element = "replace-me";
	const Contact = (0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('div'),
		document.createElement('h2'),

		(0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('ul'),
			[
				"Twitter",
				"Contact Number",
				"Location",
				"Images credited to",
				"Icons credited to",
			].map((detail_name,	i) => {
				const Detail = (0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('li'),
					document.createElement(dummy_image_element),

					(0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('div'),
						document.createElement('p'),
						document.createElement('p'),
					),
				);

				Detail.classList.add('Detail');
				Detail.setAttribute('data-index', i);

				Detail.querySelector('p:nth-child(1)').classList.add('DetailName');
				Detail.querySelector('p:nth-child(1)').innerText = `${detail_name}: `;

				Detail.querySelector('p:nth-child(2)').classList.add('Details');

				return Detail;
			}),
		),
	);

	Contact.classList.add('ContactWrapper');
	Contact.querySelector('h2').innerText = "Restaurant Odin";
	Contact.querySelector('ul').classList.add('Contact');
	
	{
		const temp = Contact.querySelector(`.Detail[data-index="0"]`);
		temp.querySelector('.Details').innerText = "@resto-odin-unofficial";

		const image = new Image();
		image.setAttribute('src', _assets_twitter_svg__WEBPACK_IMPORTED_MODULE_3__);
		image.setAttribute('alt', "A brand icon from the website formerly called Twitter.");

		const dummy_element = temp.querySelector(`${dummy_image_element}`);
		(0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.replace_node)(dummy_element, image);
	}
	{
		const temp = Contact.querySelector(`.Detail[data-index="1"]`);
		temp.querySelector('.Details').innerText = "(+00)973 786 6346 (09-RESTO-ODIN)";

		const image = new Image();
		image.setAttribute('src', _assets_phone_svg__WEBPACK_IMPORTED_MODULE_2__);
		image.setAttribute('alt', "A phone icon.");

		const dummy_element = temp.querySelector(`${dummy_image_element}`);
		(0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.replace_node)(dummy_element, image);
	}
	{
		const temp = Contact.querySelector(`.Detail[data-index="2"]`);
		temp.querySelector('.Details').innerText = "Olympus, Land of the Demigods";
		
		const image = new Image();
		image.setAttribute('src', _assets_map_pin_svg__WEBPACK_IMPORTED_MODULE_1__);
		image.setAttribute('alt', "An icon signifying a pinned location in a map.");

		const dummy_element = temp.querySelector(`${dummy_image_element}`);
		(0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.replace_node)(dummy_element, image);
	}
	{
		const temp = Contact.querySelector(`.Detail[data-index="3"]`);
		temp.querySelector('.Details').innerText = "Pixabay (https://pixabay.com/)";
		
		const image = new Image();
		image.setAttribute('src', _assets_image_svg__WEBPACK_IMPORTED_MODULE_5__);
		image.setAttribute('alt', "An icon signifying an image.");

		const dummy_element = temp.querySelector(`${dummy_image_element}`);
		(0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.replace_node)(dummy_element, image);
	}
	{
		const temp = Contact.querySelector(`.Detail[data-index="4"]`);
		temp.querySelector('.Details').innerText = "FeatherIcons (https://feathericons.com/)";
		
		const image = new Image();
		image.setAttribute('src', _assets_award_svg__WEBPACK_IMPORTED_MODULE_4__);
		image.setAttribute('alt', "An icon signifying a medal.");

		const dummy_element = temp.querySelector(`${dummy_image_element}`);
		(0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.replace_node)(dummy_element, image);
	}

	return Contact;
}

function init_contact_footer_element() {
	const ContactFooter = (0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('footer'),
		document.createElement('h2'),
		document.createElement('p'),
		document.createElement('p'),
	);
	ContactFooter.classList.add('ContactFooter');

	ContactFooter.querySelector('h2').innerText = "Restaurant Odin";
	ContactFooter.querySelector(':nth-child(1 of p)').innerText = "We're not Hiring...";
	ContactFooter.querySelector(':nth-child(2 of p)').innerText = "But come join us!";

	return ContactFooter;
}


const Contact = init_contact_element();
const ContactFooter = init_contact_footer_element();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	Contact,
	ContactFooter,
});


/***/ }),

/***/ "./src/Footer/render.js":
/*!******************************!*\
  !*** ./src/Footer/render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dsl_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dsl-utils */ "./src/dsl-utils.js");
/* harmony import */ var _assets_map_pin_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/map-pin.svg */ "./src/assets/map-pin.svg");
/* harmony import */ var _assets_phone_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/phone.svg */ "./src/assets/phone.svg");
/* harmony import */ var _assets_twitter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/twitter.svg */ "./src/assets/twitter.svg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/Footer/style.css");






function init_footer_element() {
	const dummy_image_element = "replace-me";
	const Footer = (0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('footer'),
		(0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('div'),
			document.createElement(dummy_image_element),
			document.createElement('h2'),
		),

		(0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('ul'),
			[
				"Twitter",
				"Contact Number",
				"Location",
			].map((detail_name,	i) => {
				const Detail = (0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('li'),
					(0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('div'),
						document.createElement(dummy_image_element),
						document.createElement('span'),
					),

					document.createElement('p'),
				);

				Detail.classList.add('Detail');
				Detail.setAttribute('data-index', i);

				Detail.querySelector('div > span').classList.add('DetailName');
				Detail.querySelector('div > span').innerText = `${detail_name}: `;

				Detail.querySelector('p').classList.add('Details');

				return Detail;
			}),
		),
	);

	Footer.classList.add('Footer');
	Footer.querySelector('h2').innerText = "Restaurant Odin";
	
	{
		const temp = Footer.querySelector(`.Detail[data-index="0"]`);
		temp.querySelector('.Details').innerText = "@resto-odin-unofficial";

		const image = new Image();
		image.setAttribute('src', _assets_twitter_svg__WEBPACK_IMPORTED_MODULE_3__);
		image.setAttribute('alt', "A brand icon from the website formerly called Twitter.");

		const dummy_element = temp.querySelector(`${dummy_image_element}`);
		(0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.replace_node)(dummy_element, image);
	}
	{
		const temp = Footer.querySelector(`.Detail[data-index="1"]`);
		temp.querySelector('.Details').innerText = "(+00)973 786 6346 (09-RESTO-ODIN)";

		const image = new Image();
		image.setAttribute('src', _assets_phone_svg__WEBPACK_IMPORTED_MODULE_2__);
		image.setAttribute('alt', "A phone icon.");

		const dummy_element = temp.querySelector(`${dummy_image_element}`);
		(0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.replace_node)(dummy_element, image);
	}
	{
		const temp = Footer.querySelector(`.Detail[data-index="2"]`);
		temp.querySelector('.Details').innerText = "Olympus, Land of the Demigods";

		const image = new Image();
		image.setAttribute('src', _assets_map_pin_svg__WEBPACK_IMPORTED_MODULE_1__);
		image.setAttribute('alt', "An icon signifying a pinned location in a map.");

		const dummy_element = temp.querySelector(`${dummy_image_element}`);
		(0,_dsl_utils__WEBPACK_IMPORTED_MODULE_0__.replace_node)(dummy_element, image);
	}

	return Footer;
}


const Footer = init_footer_element();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	Footer,
});


/***/ }),

/***/ "./src/Home/render.js":
/*!****************************!*\
  !*** ./src/Home/render.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Home: () => (/* binding */ Home),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dsl_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dsl-utils.js */ "./src/dsl-utils.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/Home/style.css");
/* harmony import */ var _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/restaurant.jpg */ "./src/assets/restaurant.jpg");
// Original html:
//
// <div class="hook" style="
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	gap: 3rem;
// ">
// 	<img src="../src/assets/restaurant.jpg" alt="An image of an italian restaurant" style="
// 		aspect-ratio: 16 / 9;
// 		width: 30vw;
// 	" />
//
// 	<div class="content" style="
// 		width: 30vw;
// 	">
// 		<h1>Restaurant Odin</h1>
//
// 		<p>Has the finest cuisine on the land. Farm fresh ingredients, good quality service, hospitable crew. Overall, a
// 			good time.</p>
// 	</div>
// </div>
//





function init_home_element() {
	const dummy_image_element = 'replace-me';

	const Home =
		(0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('div'),
			document.createElement(dummy_image_element),

			(0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('div'),
				document.createElement('h1'),
				document.createElement('p'),
			),
		);

	Home.setAttribute('id', 'home');
	Home.querySelector('div').classList.add('content');
	{
		const image = new Image();
		image.classList.add('restaurant-image');
		image.setAttribute('src', _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_2__);
		image.setAttribute('alt',  "An image of an italian restaurant");

		(0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_0__.replace_node)(Home.querySelector(`${dummy_image_element}`), image);
	}
	Home.querySelector('div h1').innerText = "Restaurant Odin";
	Home.querySelector('div p').innerText = "Has the finest cuisine on the land. Farm fresh ingredients, good quality service, hospitable crew. Overall, a good time.";

	return Home;
}

const Home = init_home_element();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	Home,
});


/***/ }),

/***/ "./src/Menu/render.js":
/*!****************************!*\
  !*** ./src/Menu/render.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menu: () => (/* binding */ Menu),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dsl_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dsl-utils.js */ "./src/dsl-utils.js");
/* harmony import */ var _assets_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/tiramisu.jpg */ "./src/assets/tiramisu.jpg");
/* harmony import */ var _assets_lasagna_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/lasagna.jpg */ "./src/assets/lasagna.jpg");
/* harmony import */ var _assets_lobster_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/lobster.jpg */ "./src/assets/lobster.jpg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/Menu/style.css");









function init_menu_element() {
	const dummy_image_element = "replace-me";
	const MenuWrapper = (0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('div'),
		document.createElement('h2'),

		(0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('ul'),
			[
				"Stylish Tiramisu",
				"Marked up Lasagna",
				"Java Baked Lobster",
			].map((dish_title, i) => {
				const MenuItem = (0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('li'),
					document.createElement('h3'),

					(0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_0__.children)(document.createElement('div'),
						document.createElement(dummy_image_element),
						document.createElement('p'),
					),
				);

				MenuItem.querySelector("h3").innerText = dish_title;
				MenuItem.setAttribute('data-index', i);
				return MenuItem;
			}),
		),
	);

	MenuWrapper.classList.add("wrapper");

	MenuWrapper.querySelector('h2').innerText = "Menu";
	MenuWrapper.querySelector('ul').classList.add("Menu");
	MenuWrapper.querySelectorAll('li').forEach(element => {
		element.classList.add("MenuItem");
	});
	{
		const image = new Image();
		image.setAttribute('src', _assets_tiramisu_jpg__WEBPACK_IMPORTED_MODULE_1__);
		image.setAttribute('alt', "A serving of tiramisu, topped with mint, presented in a white table in a brick wall background, with wine on the side.");

		const temp = MenuWrapper.querySelector(`li[data-index="0"]`);
		(0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_0__.replace_node)(temp.querySelector(`${dummy_image_element}`), image);

		const p_tag = temp.querySelector('p');
		p_tag.innerText = "Mint flavoured tiramisu for the daring. Balances the richness of the cream. So much cascading flavours, so much style.";
	}
	{
		const image = new Image();
		image.setAttribute('src', _assets_lasagna_jpg__WEBPACK_IMPORTED_MODULE_2__);
		image.setAttribute('alt', "Delectable lasagna, topped with basil, presented in a wooden table with bread on the side.");

		const temp = MenuWrapper.querySelector(`li[data-index="1"]`);
		(0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_0__.replace_node)(temp.querySelector(`${dummy_image_element}`), image);

		const p_tag = temp.querySelector('p');
		p_tag.innerText = "Lasagna with layers of pasta complimenting each other. Pasta lined up with pasta, marked up for your pleasure.";
	}
	{
		const image = new Image();
		image.setAttribute('src', _assets_lobster_jpg__WEBPACK_IMPORTED_MODULE_3__);
		image.setAttribute('alt', "Lobster served with corn, cucumbers, tomatoes, on a illustrated plate, then placed on a wooden table.");

		const temp = MenuWrapper.querySelector(`li[data-index="2"]`);
		(0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_0__.replace_node)(temp.querySelector(`${dummy_image_element}`), image);

		const p_tag = temp.querySelector('p');
		p_tag.innerText = "Inspired by the Java, the lobster is baked with various mix-ins and delectable soup things. Very tasty and dangerous.";
	}
	return MenuWrapper;
}

const Menu = init_menu_element();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	Menu,
});


/***/ }),

/***/ "./src/dsl-utils.js":
/*!**************************!*\
  !*** ./src/dsl-utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   children: () => (/* binding */ children),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   replace_inside: () => (/* binding */ replace_inside),
/* harmony export */   replace_node: () => (/* binding */ replace_node)
/* harmony export */ });
function children(root, ...children) {
	if (children.length === 0 || children == null) return root;

	return children.flat().reduce((acc, el) => {
		acc.appendChild(el);
		return acc;
	}, root);
}

function replace_inside(root, replacement_element) {
	root.innerHTML = "";
	root.appendChild(replacement_element);
}

function replace_node(dummy_element, replacement_element) {
	const parent = dummy_element.parentNode;

	parent.insertBefore(replacement_element, dummy_element);
	parent.removeChild(dummy_element);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	children,
	replace_node,
});


/***/ }),

/***/ "./src/assets/award.svg":
/*!******************************!*\
  !*** ./src/assets/award.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ca6c258ab69c5aa417a.svg";

/***/ }),

/***/ "./src/assets/image.svg":
/*!******************************!*\
  !*** ./src/assets/image.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5cc00966ad4fe5f0b25.svg";

/***/ }),

/***/ "./src/assets/lasagna.jpg":
/*!********************************!*\
  !*** ./src/assets/lasagna.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f03d49cb34b86d50d499.jpg";

/***/ }),

/***/ "./src/assets/lobster.jpg":
/*!********************************!*\
  !*** ./src/assets/lobster.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6882b5c4062664b8235.jpg";

/***/ }),

/***/ "./src/assets/map-pin.svg":
/*!********************************!*\
  !*** ./src/assets/map-pin.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c41fcd32a6421026061.svg";

/***/ }),

/***/ "./src/assets/phone.svg":
/*!******************************!*\
  !*** ./src/assets/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22904118b466d50710a6.svg";

/***/ }),

/***/ "./src/assets/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/assets/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c53afbef04b7c6bf0980.jpg";

/***/ }),

/***/ "./src/assets/tiramisu.jpg":
/*!*********************************!*\
  !*** ./src/assets/tiramisu.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc9321f39f428ec6a96c.jpg";

/***/ }),

/***/ "./src/assets/twitter.svg":
/*!********************************!*\
  !*** ./src/assets/twitter.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "410a9d14144a81054233.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home/render.js */ "./src/Home/render.js");
/* harmony import */ var _Menu_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu/render.js */ "./src/Menu/render.js");
/* harmony import */ var _Footer_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer/render.js */ "./src/Footer/render.js");
/* harmony import */ var _Contact_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact/render.js */ "./src/Contact/render.js");
/* harmony import */ var _dsl_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dsl-utils.js */ "./src/dsl-utils.js");
/* harmony import */ var _assets_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/theme.css */ "./src/assets/theme.css");




 


const Content = document.querySelector('#content');


function bind_dom_elements({ home_btn, menu_btn, contact_btn, dummy_footer }) {
    const clear_all_selected = () => {
	for (const btn of [home_btn, menu_btn, contact_btn]) {
	    btn.classList.remove('selected');
	}
    }

    home_btn.addEventListener("click", () => {
	;(0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_4__.replace_inside)(Content, _Home_render_js__WEBPACK_IMPORTED_MODULE_0__.Home);

	clear_all_selected();
	home_btn.classList.add('selected');

	if (dummy_footer.querySelector('.Footer') === null) {
	    (0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_4__.replace_inside)(dummy_footer, _Footer_render_js__WEBPACK_IMPORTED_MODULE_2__.Footer);
	}
    });

    menu_btn.addEventListener("click", () => {
	(0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_4__.replace_inside)(Content, _Menu_render_js__WEBPACK_IMPORTED_MODULE_1__.Menu);

	clear_all_selected();
	menu_btn.classList.add('selected');

	if (dummy_footer.querySelector('.Footer') === null) {
	    (0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_4__.replace_inside)(dummy_footer, _Footer_render_js__WEBPACK_IMPORTED_MODULE_2__.Footer);
	}
    });

    contact_btn.addEventListener("click", () => {
	(0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_4__.replace_inside)(Content, _Contact_render_js__WEBPACK_IMPORTED_MODULE_3__.Contact);

	clear_all_selected();
	contact_btn.classList.add('selected');

	if (dummy_footer.querySelector('.Footer') !== null) {
	    (0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_4__.replace_inside)(dummy_footer, _Contact_render_js__WEBPACK_IMPORTED_MODULE_3__.ContactFooter);
	}
    });

    Content.appendChild(_Home_render_js__WEBPACK_IMPORTED_MODULE_0__.Home);
    home_btn.classList.add('selected');
    (0,_dsl_utils_js__WEBPACK_IMPORTED_MODULE_4__.replace_inside)(dummy_footer, _Footer_render_js__WEBPACK_IMPORTED_MODULE_2__.Footer);
}

window.addEventListener('DOMContentLoaded', () => {
    console.log("hello world");

    bind_dom_elements({
	home_btn: document.querySelector('#home_btn'),
	menu_btn: document.querySelector('#menu_btn'),
	contact_btn: document.querySelector('#contact_btn'),
	dummy_footer: document.querySelector('#dummy_footer'),
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vc3JjL0Zvb3Rlci9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vc3JjL0hvbWUvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL3NyYy9NZW51L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vLi9zcmMvYXNzZXRzL3RoZW1lLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL3NyYy9Db250YWN0L3N0eWxlLmNzcz8xYzQ0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL3NyYy9Gb290ZXIvc3R5bGUuY3NzPzk3YTQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vc3JjL0hvbWUvc3R5bGUuY3NzP2Y5NmMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vc3JjL01lbnUvc3R5bGUuY3NzP2EwZDYiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vc3JjL2Fzc2V0cy90aGVtZS5jc3M/OGNlZiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL3NyYy9Db250YWN0L3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vLi9zcmMvRm9vdGVyL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vLi9zcmMvSG9tZS9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluLy4vc3JjL01lbnUvcmVuZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL3NyYy9kc2wtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1vZGluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LW9kaW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtb2Rpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkNvbnRhY3RXcmFwcGVyIHtcblx0LS1jb250ZW50LXRvLWljb24tZ2FwOiAxLjVyZW07XG5cdC0tY29udGVudC1nYXA6IGNhbGModmFyKC0tY29udGVudC10by1pY29uLWdhcCkgKiA0KTtcblx0LS1jb250ZW50LWhlYWRlci1nYXA6IGNhbGModmFyKC0tY29udGVudC1nYXApICogMik7XG5cdC0tY29udGVudC13cmFwcGVyLWdhcDogY2FsYyh2YXIoLS1jb250ZW50LWhlYWRlci1nYXApKTtcblx0LS1pY29uLXdpZHRoOiA0cmVtO1xuXG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdhcDogdmFyKC0tY29udGVudC1oZWFkZXItZ2FwKTtcblx0cGxhY2UtY29udGVudDogc3RyZXRjaCBjZW50ZXI7XG5cdHBhZGRpbmc6IHZhcigtLWNvbnRlbnQtd3JhcHBlci1nYXApIDA7XG59XG5cbi5Db250YWN0V3JhcHBlciBoMiB7XG5cdGZvbnQtc2l6ZTogM3JlbTtcblx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi5Db250YWN0IHtcblx0d2lkdGg6IG1pbigxMDBjaCwgNjB2dyk7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZmxvdzogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblx0Z2FwOiB2YXIoLS1jb250ZW50LWdhcCk7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLkNvbnRhY3RXcmFwcGVyIC5EZXRhaWwge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IHZhcigtLWNvbnRlbnQtdG8taWNvbi1nYXApO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uQ29udGFjdCBpbWcge1xuXHR3aWR0aDogdmFyKC0taWNvbi13aWR0aCk7XG5cdGFzcGVjdC1yYXRpbzogMTtcbn1cblxuLkNvbnRhY3QgLkRldGFpbDpudGgtY2hpbGQoMm4pIHtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLkNvbnRhY3RGb290ZXIge1xuXHRtaW4taGVpZ2h0OiA1cmVtO1xuXHRtaW4td2lkdGg6IDEwMGNoO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblx0Z2FwOiA1cmVtO1xuXHRiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG59XG5cbi5Db250YWN0Rm9vdGVyIGgyLFxuLkNvbnRhY3RGb290ZXIgcCB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0NvbnRhY3Qvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsNkJBQTZCO0NBQzdCLG1EQUFtRDtDQUNuRCxrREFBa0Q7Q0FDbEQsc0RBQXNEO0NBQ3RELGtCQUFrQjs7Q0FFbEIsYUFBYTtDQUNiLDhCQUE4QjtDQUM5Qiw2QkFBNkI7Q0FDN0IscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsZUFBZTtDQUNmLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsaUJBQWlCO0NBQ2pCLDZCQUE2QjtDQUM3Qix1QkFBdUI7Q0FDdkIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiwrQkFBK0I7Q0FDL0IsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLFNBQVM7Q0FDVCxxQkFBcUI7QUFDdEI7O0FBRUE7O0NBRUMsYUFBYTtDQUNiLHFCQUFxQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuQ29udGFjdFdyYXBwZXIge1xcblxcdC0tY29udGVudC10by1pY29uLWdhcDogMS41cmVtO1xcblxcdC0tY29udGVudC1nYXA6IGNhbGModmFyKC0tY29udGVudC10by1pY29uLWdhcCkgKiA0KTtcXG5cXHQtLWNvbnRlbnQtaGVhZGVyLWdhcDogY2FsYyh2YXIoLS1jb250ZW50LWdhcCkgKiAyKTtcXG5cXHQtLWNvbnRlbnQtd3JhcHBlci1nYXA6IGNhbGModmFyKC0tY29udGVudC1oZWFkZXItZ2FwKSk7XFxuXFx0LS1pY29uLXdpZHRoOiA0cmVtO1xcblxcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z2FwOiB2YXIoLS1jb250ZW50LWhlYWRlci1nYXApO1xcblxcdHBsYWNlLWNvbnRlbnQ6IHN0cmV0Y2ggY2VudGVyO1xcblxcdHBhZGRpbmc6IHZhcigtLWNvbnRlbnQtd3JhcHBlci1nYXApIDA7XFxufVxcblxcbi5Db250YWN0V3JhcHBlciBoMiB7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uQ29udGFjdCB7XFxuXFx0d2lkdGg6IG1pbigxMDBjaCwgNjB2dyk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXHRnYXA6IHZhcigtLWNvbnRlbnQtZ2FwKTtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5Db250YWN0V3JhcHBlciAuRGV0YWlsIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiB2YXIoLS1jb250ZW50LXRvLWljb24tZ2FwKTtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uQ29udGFjdCBpbWcge1xcblxcdHdpZHRoOiB2YXIoLS1pY29uLXdpZHRoKTtcXG5cXHRhc3BlY3QtcmF0aW86IDE7XFxufVxcblxcbi5Db250YWN0IC5EZXRhaWw6bnRoLWNoaWxkKDJuKSB7XFxuXFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG4uQ29udGFjdEZvb3RlciB7XFxuXFx0bWluLWhlaWdodDogNXJlbTtcXG5cXHRtaW4td2lkdGg6IDEwMGNoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuXFx0Z2FwOiA1cmVtO1xcblxcdGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLkNvbnRhY3RGb290ZXIgaDIsXFxuLkNvbnRhY3RGb290ZXIgcCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkZvb3RlciB7XG5cdG1pbi1oZWlnaHQ6IDVyZW07XG5cdG1pbi13aWR0aDogMTUwY2g7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMXJlbTtcblx0cGFkZGluZzogMC41cmVtO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG5cbi5Gb290ZXI+ZGl2LFxuLkZvb3RlciAuRGV0YWlsIHtcblx0cGFkZGluZzogMCAzcmVtO1xufVxuXG4uRm9vdGVyIHVsIHtcblx0ZmxleDogMTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLkZvb3RlciAuRGV0YWlsIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0cGxhY2UtY29udGVudDogY2VudGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5Gb290ZXIgLkRldGFpbCBkaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAxY2g7XG59XG5cbi5Gb290ZXIgLkRldGFpbCBpbWcge1xuXHR3aWR0aDogMXJlbTtcblx0YXNwZWN0LXJhdGlvOiAxO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvRm9vdGVyL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLDJCQUEyQjtBQUM1Qjs7QUFFQTs7Q0FFQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsNkJBQTZCO0NBQzdCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsUUFBUTtBQUNUOztBQUVBO0NBQ0MsV0FBVztDQUNYLGVBQWU7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLkZvb3RlciB7XFxuXFx0bWluLWhlaWdodDogNXJlbTtcXG5cXHRtaW4td2lkdGg6IDE1MGNoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLkZvb3Rlcj5kaXYsXFxuLkZvb3RlciAuRGV0YWlsIHtcXG5cXHRwYWRkaW5nOiAwIDNyZW07XFxufVxcblxcbi5Gb290ZXIgdWwge1xcblxcdGZsZXg6IDE7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLkZvb3RlciAuRGV0YWlsIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5Gb290ZXIgLkRldGFpbCBkaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFjaDtcXG59XFxuXFxuLkZvb3RlciAuRGV0YWlsIGltZyB7XFxuXFx0d2lkdGg6IDFyZW07XFxuXFx0YXNwZWN0LXJhdGlvOiAxO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNob21lIHtcblx0LS1ob21lLWNvbnRlbnQtZ2FwOiAwLjVyZW07XG5cdC0tY29udGVudC10by1pbWFnZS1nYXA6IGNhbGModmFyKC0taG9tZS1jb250ZW50LWdhcCkgKiA0KTtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiB2YXIoLS1jb250ZW50LXRvLWltYWdlLWdhcCk7XG59XG5cbiNob21lIC5jb250ZW50IHtcblx0d2lkdGg6IDMwdnc7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdhcDogdmFyKC0taG9tZS1jb250ZW50LWdhcCk7XG59XG5cbiNob21lIC5jb250ZW50IGgxIHtcblx0Zm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSk7XG59XG5cbi5yZXN0YXVyYW50LWltYWdlIHtcblx0YXNwZWN0LXJhdGlvOiAxNiAvIDk7XG5cdHdpZHRoOiAzMHZ3O1xuXHRkaXNwbGF5OiBncmlkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG5cdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL0hvbWUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsMEJBQTBCO0NBQzFCLHlEQUF5RDs7Q0FFekQsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYiw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyxtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsV0FBVztDQUNYLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IscUJBQXFCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNob21lIHtcXG5cXHQtLWhvbWUtY29udGVudC1nYXA6IDAuNXJlbTtcXG5cXHQtLWNvbnRlbnQtdG8taW1hZ2UtZ2FwOiBjYWxjKHZhcigtLWhvbWUtY29udGVudC1nYXApICogNCk7XFxuXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogdmFyKC0tY29udGVudC10by1pbWFnZS1nYXApO1xcbn1cXG5cXG4jaG9tZSAuY29udGVudCB7XFxuXFx0d2lkdGg6IDMwdnc7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IHZhcigtLWhvbWUtY29udGVudC1nYXApO1xcbn1cXG5cXG4jaG9tZSAuY29udGVudCBoMSB7XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1oZWFkaW5nLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5yZXN0YXVyYW50LWltYWdlIHtcXG5cXHRhc3BlY3QtcmF0aW86IDE2IC8gOTtcXG5cXHR3aWR0aDogMzB2dztcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG5cXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLndyYXBwZXIge1xuXHQtLW1lbnUtZGVzYy10by1pbWctZ2FwOiAxcmVtO1xuXHQtLW1lbnUtaXRlbS10by1oZWFkaW5nLWdhcDogY2FsYyh2YXIoLS1tZW51LWRlc2MtdG8taW1nLWdhcCkgKiAyLjUpO1xuXHQtLW1lbnUtZ2FwOiBjYWxjKHZhcigtLW1lbnUtaXRlbS10by1oZWFkaW5nLWdhcCkgKiA1KTtcblx0LS1tZW51LWNvbnRlbnQtcGFkZGluZy12ZXJ0aWNhbDogY2FsYyh2YXIoLS1tZW51LWdhcCkgLyAyKTtcblxuXHRkaXNwbGF5OiBncmlkO1xuXHRwbGFjZS1jb250ZW50OiBzdHJldGNoIGNlbnRlcjtcblx0Z2FwOiB2YXIoLS1tZW51LWdhcCk7XG5cdHBhZGRpbmc6IHZhcigtLW1lbnUtY29udGVudC1wYWRkaW5nLXZlcnRpY2FsKSAwO1xuXHRwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1tZW51LWNvbnRlbnQtcGFkZGluZy12ZXJ0aWNhbCkgKiAyKTtcbn1cblxuLndyYXBwZXIgaDIge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLk1lbnUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWZsb3c6IGNvbHVtbjtcblx0Z2FwOiB2YXIoLS1tZW51LWdhcCk7XG5cdHdpZHRoOiA2MHZ3O1xuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdG1hcmdpbjogMDtcbn1cblxuLk1lbnUgaW1nIHtcblx0d2lkdGg6IDMwdnc7XG59XG5cbi5NZW51SXRlbSB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdhcDogdmFyKC0tbWVudS1pdGVtLXRvLWhlYWRpbmctZ2FwKTtcbn1cblxuLk1lbnVJdGVtIGgzIHtcblx0Zm9udC1zaXplOiAycmVtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5NZW51SXRlbSBkaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IHZhcigtLW1lbnUtZGVzYy10by1pbWctZ2FwKTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLk1lbnVJdGVtIGRpdiBwIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDFyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9NZW51L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLDRCQUE0QjtDQUM1QixtRUFBbUU7Q0FDbkUscURBQXFEO0NBQ3JELDBEQUEwRDs7Q0FFMUQsYUFBYTtDQUNiLDZCQUE2QjtDQUM3QixvQkFBb0I7Q0FDcEIsK0NBQStDO0NBQy9DLDhEQUE4RDtBQUMvRDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsU0FBUztBQUNWOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZ0NBQWdDO0NBQ2hDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53cmFwcGVyIHtcXG5cXHQtLW1lbnUtZGVzYy10by1pbWctZ2FwOiAxcmVtO1xcblxcdC0tbWVudS1pdGVtLXRvLWhlYWRpbmctZ2FwOiBjYWxjKHZhcigtLW1lbnUtZGVzYy10by1pbWctZ2FwKSAqIDIuNSk7XFxuXFx0LS1tZW51LWdhcDogY2FsYyh2YXIoLS1tZW51LWl0ZW0tdG8taGVhZGluZy1nYXApICogNSk7XFxuXFx0LS1tZW51LWNvbnRlbnQtcGFkZGluZy12ZXJ0aWNhbDogY2FsYyh2YXIoLS1tZW51LWdhcCkgLyAyKTtcXG5cXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdHBsYWNlLWNvbnRlbnQ6IHN0cmV0Y2ggY2VudGVyO1xcblxcdGdhcDogdmFyKC0tbWVudS1nYXApO1xcblxcdHBhZGRpbmc6IHZhcigtLW1lbnUtY29udGVudC1wYWRkaW5nLXZlcnRpY2FsKSAwO1xcblxcdHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLW1lbnUtY29udGVudC1wYWRkaW5nLXZlcnRpY2FsKSAqIDIpO1xcbn1cXG5cXG4ud3JhcHBlciBoMiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uTWVudSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWZsb3c6IGNvbHVtbjtcXG5cXHRnYXA6IHZhcigtLW1lbnUtZ2FwKTtcXG5cXHR3aWR0aDogNjB2dztcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uTWVudSBpbWcge1xcblxcdHdpZHRoOiAzMHZ3O1xcbn1cXG5cXG4uTWVudUl0ZW0ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z2FwOiB2YXIoLS1tZW51LWl0ZW0tdG8taGVhZGluZy1nYXApO1xcbn1cXG5cXG4uTWVudUl0ZW0gaDMge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5NZW51SXRlbSBkaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiB2YXIoLS1tZW51LWRlc2MtdG8taW1nLWdhcCk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLk1lbnVJdGVtIGRpdiBwIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcblx0LS1zdG9uZS0xMDA6ICNmNWY1ZjQ7XG5cdC0tc3RvbmUtMjAwOiAjZTdlNWU0O1xuXHQtLXN0b25lLTgwMDogIzI5MjUyNDtcblx0LS1hbWJlci0yMDA6ICNmZGU2OGE7XG5cblx0LS1oZWFkaW5nLWZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLyogVE9ETzogQnJhbmQgbmFtZSBsZXR0ZXIgc3BhY2luZyAgKi9cblxuKiB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Y29sb3I6IHZhcigtLXN0b25lLTgwMCk7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG5cdGxpbmUtaGVpZ2h0OiAxLjM7XG5cdGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG59XG5cbnNwYW4sXG5wIHtcblx0bGluZS1oZWlnaHQ6IDEuNTtcblx0Zm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvdGhlbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0Msb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQixvQkFBb0I7Q0FDcEIsb0JBQW9COztDQUVwQix5QkFBeUI7QUFDMUI7O0FBRUEscUNBQXFDOztBQUVyQztDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtBQUN2Qjs7QUFFQTs7Ozs7O0NBTUMsZ0JBQWdCO0NBQ2hCLHNFQUFzRTtBQUN2RTs7QUFFQTs7Q0FFQyxnQkFBZ0I7Q0FDaEIseUNBQXlDO0FBQzFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG5cXHQtLXN0b25lLTEwMDogI2Y1ZjVmNDtcXG5cXHQtLXN0b25lLTIwMDogI2U3ZTVlNDtcXG5cXHQtLXN0b25lLTgwMDogIzI5MjUyNDtcXG5cXHQtLWFtYmVyLTIwMDogI2ZkZTY4YTtcXG5cXG5cXHQtLWhlYWRpbmctZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4vKiBUT0RPOiBCcmFuZCBuYW1lIGxldHRlciBzcGFjaW5nICAqL1xcblxcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGNvbG9yOiB2YXIoLS1zdG9uZS04MDApO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG5cXHRsaW5lLWhlaWdodDogMS4zO1xcblxcdGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxufVxcblxcbnNwYW4sXFxucCB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG5cXHRmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGhlbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90aGVtZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNoaWxkcmVuLCByZXBsYWNlX25vZGUgfSBmcm9tIFwiLi4vZHNsLXV0aWxzXCI7XG5pbXBvcnQgTWFwUGluIGZyb20gJy4uL2Fzc2V0cy9tYXAtcGluLnN2Zyc7XG5pbXBvcnQgUGhvbmUgZnJvbSAnLi4vYXNzZXRzL3Bob25lLnN2Zyc7XG5pbXBvcnQgVHdpdHRlciBmcm9tICcuLi9hc3NldHMvdHdpdHRlci5zdmcnO1xuaW1wb3J0IEF3YXJkIGZyb20gJy4uL2Fzc2V0cy9hd2FyZC5zdmcnO1xuaW1wb3J0IEltYWdlSWNvbiBmcm9tICcuLi9hc3NldHMvaW1hZ2Uuc3ZnJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBpbml0X2NvbnRhY3RfZWxlbWVudCgpIHtcblx0Y29uc3QgZHVtbXlfaW1hZ2VfZWxlbWVudCA9IFwicmVwbGFjZS1tZVwiO1xuXHRjb25zdCBDb250YWN0ID0gY2hpbGRyZW4oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKSxcblxuXHRcdGNoaWxkcmVuKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyksXG5cdFx0XHRbXG5cdFx0XHRcdFwiVHdpdHRlclwiLFxuXHRcdFx0XHRcIkNvbnRhY3QgTnVtYmVyXCIsXG5cdFx0XHRcdFwiTG9jYXRpb25cIixcblx0XHRcdFx0XCJJbWFnZXMgY3JlZGl0ZWQgdG9cIixcblx0XHRcdFx0XCJJY29ucyBjcmVkaXRlZCB0b1wiLFxuXHRcdFx0XS5tYXAoKGRldGFpbF9uYW1lLFx0aSkgPT4ge1xuXHRcdFx0XHRjb25zdCBEZXRhaWwgPSBjaGlsZHJlbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpLFxuXHRcdFx0XHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZHVtbXlfaW1hZ2VfZWxlbWVudCksXG5cblx0XHRcdFx0XHRjaGlsZHJlbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRcdFx0XHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcblx0XHRcdFx0XHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdERldGFpbC5jbGFzc0xpc3QuYWRkKCdEZXRhaWwnKTtcblx0XHRcdFx0RGV0YWlsLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuXG5cdFx0XHRcdERldGFpbC5xdWVyeVNlbGVjdG9yKCdwOm50aC1jaGlsZCgxKScpLmNsYXNzTGlzdC5hZGQoJ0RldGFpbE5hbWUnKTtcblx0XHRcdFx0RGV0YWlsLnF1ZXJ5U2VsZWN0b3IoJ3A6bnRoLWNoaWxkKDEpJykuaW5uZXJUZXh0ID0gYCR7ZGV0YWlsX25hbWV9OiBgO1xuXG5cdFx0XHRcdERldGFpbC5xdWVyeVNlbGVjdG9yKCdwOm50aC1jaGlsZCgyKScpLmNsYXNzTGlzdC5hZGQoJ0RldGFpbHMnKTtcblxuXHRcdFx0XHRyZXR1cm4gRGV0YWlsO1xuXHRcdFx0fSksXG5cdFx0KSxcblx0KTtcblxuXHRDb250YWN0LmNsYXNzTGlzdC5hZGQoJ0NvbnRhY3RXcmFwcGVyJyk7XG5cdENvbnRhY3QucXVlcnlTZWxlY3RvcignaDInKS5pbm5lclRleHQgPSBcIlJlc3RhdXJhbnQgT2RpblwiO1xuXHRDb250YWN0LnF1ZXJ5U2VsZWN0b3IoJ3VsJykuY2xhc3NMaXN0LmFkZCgnQ29udGFjdCcpO1xuXHRcblx0e1xuXHRcdGNvbnN0IHRlbXAgPSBDb250YWN0LnF1ZXJ5U2VsZWN0b3IoYC5EZXRhaWxbZGF0YS1pbmRleD1cIjBcIl1gKTtcblx0XHR0ZW1wLnF1ZXJ5U2VsZWN0b3IoJy5EZXRhaWxzJykuaW5uZXJUZXh0ID0gXCJAcmVzdG8tb2Rpbi11bm9mZmljaWFsXCI7XG5cblx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgVHdpdHRlcik7XG5cdFx0aW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBcIkEgYnJhbmQgaWNvbiBmcm9tIHRoZSB3ZWJzaXRlIGZvcm1lcmx5IGNhbGxlZCBUd2l0dGVyLlwiKTtcblxuXHRcdGNvbnN0IGR1bW15X2VsZW1lbnQgPSB0ZW1wLnF1ZXJ5U2VsZWN0b3IoYCR7ZHVtbXlfaW1hZ2VfZWxlbWVudH1gKTtcblx0XHRyZXBsYWNlX25vZGUoZHVtbXlfZWxlbWVudCwgaW1hZ2UpO1xuXHR9XG5cdHtcblx0XHRjb25zdCB0ZW1wID0gQ29udGFjdC5xdWVyeVNlbGVjdG9yKGAuRGV0YWlsW2RhdGEtaW5kZXg9XCIxXCJdYCk7XG5cdFx0dGVtcC5xdWVyeVNlbGVjdG9yKCcuRGV0YWlscycpLmlubmVyVGV4dCA9IFwiKCswMCk5NzMgNzg2IDYzNDYgKDA5LVJFU1RPLU9ESU4pXCI7XG5cblx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgUGhvbmUpO1xuXHRcdGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgXCJBIHBob25lIGljb24uXCIpO1xuXG5cdFx0Y29uc3QgZHVtbXlfZWxlbWVudCA9IHRlbXAucXVlcnlTZWxlY3RvcihgJHtkdW1teV9pbWFnZV9lbGVtZW50fWApO1xuXHRcdHJlcGxhY2Vfbm9kZShkdW1teV9lbGVtZW50LCBpbWFnZSk7XG5cdH1cblx0e1xuXHRcdGNvbnN0IHRlbXAgPSBDb250YWN0LnF1ZXJ5U2VsZWN0b3IoYC5EZXRhaWxbZGF0YS1pbmRleD1cIjJcIl1gKTtcblx0XHR0ZW1wLnF1ZXJ5U2VsZWN0b3IoJy5EZXRhaWxzJykuaW5uZXJUZXh0ID0gXCJPbHltcHVzLCBMYW5kIG9mIHRoZSBEZW1pZ29kc1wiO1xuXHRcdFxuXHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cdFx0aW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBNYXBQaW4pO1xuXHRcdGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgXCJBbiBpY29uIHNpZ25pZnlpbmcgYSBwaW5uZWQgbG9jYXRpb24gaW4gYSBtYXAuXCIpO1xuXG5cdFx0Y29uc3QgZHVtbXlfZWxlbWVudCA9IHRlbXAucXVlcnlTZWxlY3RvcihgJHtkdW1teV9pbWFnZV9lbGVtZW50fWApO1xuXHRcdHJlcGxhY2Vfbm9kZShkdW1teV9lbGVtZW50LCBpbWFnZSk7XG5cdH1cblx0e1xuXHRcdGNvbnN0IHRlbXAgPSBDb250YWN0LnF1ZXJ5U2VsZWN0b3IoYC5EZXRhaWxbZGF0YS1pbmRleD1cIjNcIl1gKTtcblx0XHR0ZW1wLnF1ZXJ5U2VsZWN0b3IoJy5EZXRhaWxzJykuaW5uZXJUZXh0ID0gXCJQaXhhYmF5IChodHRwczovL3BpeGFiYXkuY29tLylcIjtcblx0XHRcblx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgSW1hZ2VJY29uKTtcblx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIFwiQW4gaWNvbiBzaWduaWZ5aW5nIGFuIGltYWdlLlwiKTtcblxuXHRcdGNvbnN0IGR1bW15X2VsZW1lbnQgPSB0ZW1wLnF1ZXJ5U2VsZWN0b3IoYCR7ZHVtbXlfaW1hZ2VfZWxlbWVudH1gKTtcblx0XHRyZXBsYWNlX25vZGUoZHVtbXlfZWxlbWVudCwgaW1hZ2UpO1xuXHR9XG5cdHtcblx0XHRjb25zdCB0ZW1wID0gQ29udGFjdC5xdWVyeVNlbGVjdG9yKGAuRGV0YWlsW2RhdGEtaW5kZXg9XCI0XCJdYCk7XG5cdFx0dGVtcC5xdWVyeVNlbGVjdG9yKCcuRGV0YWlscycpLmlubmVyVGV4dCA9IFwiRmVhdGhlckljb25zIChodHRwczovL2ZlYXRoZXJpY29ucy5jb20vKVwiO1xuXHRcdFxuXHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cdFx0aW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBBd2FyZCk7XG5cdFx0aW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBcIkFuIGljb24gc2lnbmlmeWluZyBhIG1lZGFsLlwiKTtcblxuXHRcdGNvbnN0IGR1bW15X2VsZW1lbnQgPSB0ZW1wLnF1ZXJ5U2VsZWN0b3IoYCR7ZHVtbXlfaW1hZ2VfZWxlbWVudH1gKTtcblx0XHRyZXBsYWNlX25vZGUoZHVtbXlfZWxlbWVudCwgaW1hZ2UpO1xuXHR9XG5cblx0cmV0dXJuIENvbnRhY3Q7XG59XG5cbmZ1bmN0aW9uIGluaXRfY29udGFjdF9mb290ZXJfZWxlbWVudCgpIHtcblx0Y29uc3QgQ29udGFjdEZvb3RlciA9IGNoaWxkcmVuKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpLFxuXHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyksXG5cdFx0ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuXHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcblx0KTtcblx0Q29udGFjdEZvb3Rlci5jbGFzc0xpc3QuYWRkKCdDb250YWN0Rm9vdGVyJyk7XG5cblx0Q29udGFjdEZvb3Rlci5xdWVyeVNlbGVjdG9yKCdoMicpLmlubmVyVGV4dCA9IFwiUmVzdGF1cmFudCBPZGluXCI7XG5cdENvbnRhY3RGb290ZXIucXVlcnlTZWxlY3RvcignOm50aC1jaGlsZCgxIG9mIHApJykuaW5uZXJUZXh0ID0gXCJXZSdyZSBub3QgSGlyaW5nLi4uXCI7XG5cdENvbnRhY3RGb290ZXIucXVlcnlTZWxlY3RvcignOm50aC1jaGlsZCgyIG9mIHApJykuaW5uZXJUZXh0ID0gXCJCdXQgY29tZSBqb2luIHVzIVwiO1xuXG5cdHJldHVybiBDb250YWN0Rm9vdGVyO1xufVxuXG5cbmV4cG9ydCBjb25zdCBDb250YWN0ID0gaW5pdF9jb250YWN0X2VsZW1lbnQoKTtcbmV4cG9ydCBjb25zdCBDb250YWN0Rm9vdGVyID0gaW5pdF9jb250YWN0X2Zvb3Rlcl9lbGVtZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Q29udGFjdCxcblx0Q29udGFjdEZvb3Rlcixcbn07XG4iLCJpbXBvcnQgeyBjaGlsZHJlbiwgcmVwbGFjZV9ub2RlIH0gZnJvbSBcIi4uL2RzbC11dGlsc1wiO1xuaW1wb3J0IE1hcFBpbiBmcm9tICcuLi9hc3NldHMvbWFwLXBpbi5zdmcnO1xuaW1wb3J0IFBob25lIGZyb20gJy4uL2Fzc2V0cy9waG9uZS5zdmcnO1xuaW1wb3J0IFR3aXR0ZXIgZnJvbSAnLi4vYXNzZXRzL3R3aXR0ZXIuc3ZnJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBpbml0X2Zvb3Rlcl9lbGVtZW50KCkge1xuXHRjb25zdCBkdW1teV9pbWFnZV9lbGVtZW50ID0gXCJyZXBsYWNlLW1lXCI7XG5cdGNvbnN0IEZvb3RlciA9IGNoaWxkcmVuKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpLFxuXHRcdGNoaWxkcmVuKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuXHRcdFx0ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkdW1teV9pbWFnZV9lbGVtZW50KSxcblx0XHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyksXG5cdFx0KSxcblxuXHRcdGNoaWxkcmVuKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyksXG5cdFx0XHRbXG5cdFx0XHRcdFwiVHdpdHRlclwiLFxuXHRcdFx0XHRcIkNvbnRhY3QgTnVtYmVyXCIsXG5cdFx0XHRcdFwiTG9jYXRpb25cIixcblx0XHRcdF0ubWFwKChkZXRhaWxfbmFtZSxcdGkpID0+IHtcblx0XHRcdFx0Y29uc3QgRGV0YWlsID0gY2hpbGRyZW4oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSxcblx0XHRcdFx0XHRjaGlsZHJlbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRcdFx0XHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZHVtbXlfaW1hZ2VfZWxlbWVudCksXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXG5cdFx0XHRcdFx0KSxcblxuXHRcdFx0XHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSxcblx0XHRcdFx0KTtcblxuXHRcdFx0XHREZXRhaWwuY2xhc3NMaXN0LmFkZCgnRGV0YWlsJyk7XG5cdFx0XHRcdERldGFpbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpKTtcblxuXHRcdFx0XHREZXRhaWwucXVlcnlTZWxlY3RvcignZGl2ID4gc3BhbicpLmNsYXNzTGlzdC5hZGQoJ0RldGFpbE5hbWUnKTtcblx0XHRcdFx0RGV0YWlsLnF1ZXJ5U2VsZWN0b3IoJ2RpdiA+IHNwYW4nKS5pbm5lclRleHQgPSBgJHtkZXRhaWxfbmFtZX06IGA7XG5cblx0XHRcdFx0RGV0YWlsLnF1ZXJ5U2VsZWN0b3IoJ3AnKS5jbGFzc0xpc3QuYWRkKCdEZXRhaWxzJyk7XG5cblx0XHRcdFx0cmV0dXJuIERldGFpbDtcblx0XHRcdH0pLFxuXHRcdCksXG5cdCk7XG5cblx0Rm9vdGVyLmNsYXNzTGlzdC5hZGQoJ0Zvb3RlcicpO1xuXHRGb290ZXIucXVlcnlTZWxlY3RvcignaDInKS5pbm5lclRleHQgPSBcIlJlc3RhdXJhbnQgT2RpblwiO1xuXHRcblx0e1xuXHRcdGNvbnN0IHRlbXAgPSBGb290ZXIucXVlcnlTZWxlY3RvcihgLkRldGFpbFtkYXRhLWluZGV4PVwiMFwiXWApO1xuXHRcdHRlbXAucXVlcnlTZWxlY3RvcignLkRldGFpbHMnKS5pbm5lclRleHQgPSBcIkByZXN0by1vZGluLXVub2ZmaWNpYWxcIjtcblxuXHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cdFx0aW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBUd2l0dGVyKTtcblx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIFwiQSBicmFuZCBpY29uIGZyb20gdGhlIHdlYnNpdGUgZm9ybWVybHkgY2FsbGVkIFR3aXR0ZXIuXCIpO1xuXG5cdFx0Y29uc3QgZHVtbXlfZWxlbWVudCA9IHRlbXAucXVlcnlTZWxlY3RvcihgJHtkdW1teV9pbWFnZV9lbGVtZW50fWApO1xuXHRcdHJlcGxhY2Vfbm9kZShkdW1teV9lbGVtZW50LCBpbWFnZSk7XG5cdH1cblx0e1xuXHRcdGNvbnN0IHRlbXAgPSBGb290ZXIucXVlcnlTZWxlY3RvcihgLkRldGFpbFtkYXRhLWluZGV4PVwiMVwiXWApO1xuXHRcdHRlbXAucXVlcnlTZWxlY3RvcignLkRldGFpbHMnKS5pbm5lclRleHQgPSBcIigrMDApOTczIDc4NiA2MzQ2ICgwOS1SRVNUTy1PRElOKVwiO1xuXG5cdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIFBob25lKTtcblx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIFwiQSBwaG9uZSBpY29uLlwiKTtcblxuXHRcdGNvbnN0IGR1bW15X2VsZW1lbnQgPSB0ZW1wLnF1ZXJ5U2VsZWN0b3IoYCR7ZHVtbXlfaW1hZ2VfZWxlbWVudH1gKTtcblx0XHRyZXBsYWNlX25vZGUoZHVtbXlfZWxlbWVudCwgaW1hZ2UpO1xuXHR9XG5cdHtcblx0XHRjb25zdCB0ZW1wID0gRm9vdGVyLnF1ZXJ5U2VsZWN0b3IoYC5EZXRhaWxbZGF0YS1pbmRleD1cIjJcIl1gKTtcblx0XHR0ZW1wLnF1ZXJ5U2VsZWN0b3IoJy5EZXRhaWxzJykuaW5uZXJUZXh0ID0gXCJPbHltcHVzLCBMYW5kIG9mIHRoZSBEZW1pZ29kc1wiO1xuXG5cdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIE1hcFBpbik7XG5cdFx0aW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBcIkFuIGljb24gc2lnbmlmeWluZyBhIHBpbm5lZCBsb2NhdGlvbiBpbiBhIG1hcC5cIik7XG5cblx0XHRjb25zdCBkdW1teV9lbGVtZW50ID0gdGVtcC5xdWVyeVNlbGVjdG9yKGAke2R1bW15X2ltYWdlX2VsZW1lbnR9YCk7XG5cdFx0cmVwbGFjZV9ub2RlKGR1bW15X2VsZW1lbnQsIGltYWdlKTtcblx0fVxuXG5cdHJldHVybiBGb290ZXI7XG59XG5cblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IGluaXRfZm9vdGVyX2VsZW1lbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRGb290ZXIsXG59O1xuIiwiLy8gT3JpZ2luYWwgaHRtbDpcbi8vXG4vLyA8ZGl2IGNsYXNzPVwiaG9va1wiIHN0eWxlPVwiXG4vLyBcdGRpc3BsYXk6IGZsZXg7XG4vLyBcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gXHRhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gXHRnYXA6IDNyZW07XG4vLyBcIj5cbi8vIFx0PGltZyBzcmM9XCIuLi9zcmMvYXNzZXRzL3Jlc3RhdXJhbnQuanBnXCIgYWx0PVwiQW4gaW1hZ2Ugb2YgYW4gaXRhbGlhbiByZXN0YXVyYW50XCIgc3R5bGU9XCJcbi8vIFx0XHRhc3BlY3QtcmF0aW86IDE2IC8gOTtcbi8vIFx0XHR3aWR0aDogMzB2dztcbi8vIFx0XCIgLz5cbi8vXG4vLyBcdDxkaXYgY2xhc3M9XCJjb250ZW50XCIgc3R5bGU9XCJcbi8vIFx0XHR3aWR0aDogMzB2dztcbi8vIFx0XCI+XG4vLyBcdFx0PGgxPlJlc3RhdXJhbnQgT2RpbjwvaDE+XG4vL1xuLy8gXHRcdDxwPkhhcyB0aGUgZmluZXN0IGN1aXNpbmUgb24gdGhlIGxhbmQuIEZhcm0gZnJlc2ggaW5ncmVkaWVudHMsIGdvb2QgcXVhbGl0eSBzZXJ2aWNlLCBob3NwaXRhYmxlIGNyZXcuIE92ZXJhbGwsIGFcbi8vIFx0XHRcdGdvb2QgdGltZS48L3A+XG4vLyBcdDwvZGl2PlxuLy8gPC9kaXY+XG4vL1xuXG5pbXBvcnQgeyBjaGlsZHJlbiwgcmVwbGFjZV9ub2RlIH0gZnJvbSBcIi4uL2RzbC11dGlscy5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBSZXN0YXVyYW50IGZyb20gXCIuLi9hc3NldHMvcmVzdGF1cmFudC5qcGdcIjtcblxuZnVuY3Rpb24gaW5pdF9ob21lX2VsZW1lbnQoKSB7XG5cdGNvbnN0IGR1bW15X2ltYWdlX2VsZW1lbnQgPSAncmVwbGFjZS1tZSc7XG5cblx0Y29uc3QgSG9tZSA9XG5cdFx0Y2hpbGRyZW4oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0XHRkb2N1bWVudC5jcmVhdGVFbGVtZW50KGR1bW15X2ltYWdlX2VsZW1lbnQpLFxuXG5cdFx0XHRjaGlsZHJlbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRcdFx0ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKSxcblx0XHRcdFx0ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuXHRcdFx0KSxcblx0XHQpO1xuXG5cdEhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG5cdEhvbWUucXVlcnlTZWxlY3RvcignZGl2JykuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuXHR7XG5cdFx0Y29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0XHRpbWFnZS5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LWltYWdlJyk7XG5cdFx0aW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBSZXN0YXVyYW50KTtcblx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICBcIkFuIGltYWdlIG9mIGFuIGl0YWxpYW4gcmVzdGF1cmFudFwiKTtcblxuXHRcdHJlcGxhY2Vfbm9kZShIb21lLnF1ZXJ5U2VsZWN0b3IoYCR7ZHVtbXlfaW1hZ2VfZWxlbWVudH1gKSwgaW1hZ2UpO1xuXHR9XG5cdEhvbWUucXVlcnlTZWxlY3RvcignZGl2IGgxJykuaW5uZXJUZXh0ID0gXCJSZXN0YXVyYW50IE9kaW5cIjtcblx0SG9tZS5xdWVyeVNlbGVjdG9yKCdkaXYgcCcpLmlubmVyVGV4dCA9IFwiSGFzIHRoZSBmaW5lc3QgY3Vpc2luZSBvbiB0aGUgbGFuZC4gRmFybSBmcmVzaCBpbmdyZWRpZW50cywgZ29vZCBxdWFsaXR5IHNlcnZpY2UsIGhvc3BpdGFibGUgY3Jldy4gT3ZlcmFsbCwgYSBnb29kIHRpbWUuXCI7XG5cblx0cmV0dXJuIEhvbWU7XG59XG5cbmV4cG9ydCBjb25zdCBIb21lID0gaW5pdF9ob21lX2VsZW1lbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRIb21lLFxufTtcbiIsImltcG9ydCB7IGNoaWxkcmVuLCByZXBsYWNlX25vZGUgfSBmcm9tICcuLi9kc2wtdXRpbHMuanMnO1xuXG5pbXBvcnQgVGlyYW1pc3UgZnJvbSAnLi4vYXNzZXRzL3RpcmFtaXN1LmpwZyc7XG5pbXBvcnQgTGFzYWduYSBmcm9tICcuLi9hc3NldHMvbGFzYWduYS5qcGcnO1xuaW1wb3J0IExvYnN0ZXIgZnJvbSAnLi4vYXNzZXRzL2xvYnN0ZXIuanBnJztcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuZnVuY3Rpb24gaW5pdF9tZW51X2VsZW1lbnQoKSB7XG5cdGNvbnN0IGR1bW15X2ltYWdlX2VsZW1lbnQgPSBcInJlcGxhY2UtbWVcIjtcblx0Y29uc3QgTWVudVdyYXBwZXIgPSBjaGlsZHJlbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcblx0XHRkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpLFxuXG5cdFx0Y2hpbGRyZW4oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSxcblx0XHRcdFtcblx0XHRcdFx0XCJTdHlsaXNoIFRpcmFtaXN1XCIsXG5cdFx0XHRcdFwiTWFya2VkIHVwIExhc2FnbmFcIixcblx0XHRcdFx0XCJKYXZhIEJha2VkIExvYnN0ZXJcIixcblx0XHRcdF0ubWFwKChkaXNoX3RpdGxlLCBpKSA9PiB7XG5cdFx0XHRcdGNvbnN0IE1lbnVJdGVtID0gY2hpbGRyZW4oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSxcblx0XHRcdFx0XHRkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpLFxuXG5cdFx0XHRcdFx0Y2hpbGRyZW4oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5jcmVhdGVFbGVtZW50KGR1bW15X2ltYWdlX2VsZW1lbnQpLFxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLFxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0TWVudUl0ZW0ucXVlcnlTZWxlY3RvcihcImgzXCIpLmlubmVyVGV4dCA9IGRpc2hfdGl0bGU7XG5cdFx0XHRcdE1lbnVJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGkpO1xuXHRcdFx0XHRyZXR1cm4gTWVudUl0ZW07XG5cdFx0XHR9KSxcblx0XHQpLFxuXHQpO1xuXG5cdE1lbnVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuXG5cdE1lbnVXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ2gyJykuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG5cdE1lbnVXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ3VsJykuY2xhc3NMaXN0LmFkZChcIk1lbnVcIik7XG5cdE1lbnVXcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJykuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJNZW51SXRlbVwiKTtcblx0fSk7XG5cdHtcblx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgVGlyYW1pc3UpO1xuXHRcdGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgXCJBIHNlcnZpbmcgb2YgdGlyYW1pc3UsIHRvcHBlZCB3aXRoIG1pbnQsIHByZXNlbnRlZCBpbiBhIHdoaXRlIHRhYmxlIGluIGEgYnJpY2sgd2FsbCBiYWNrZ3JvdW5kLCB3aXRoIHdpbmUgb24gdGhlIHNpZGUuXCIpO1xuXG5cdFx0Y29uc3QgdGVtcCA9IE1lbnVXcmFwcGVyLnF1ZXJ5U2VsZWN0b3IoYGxpW2RhdGEtaW5kZXg9XCIwXCJdYCk7XG5cdFx0cmVwbGFjZV9ub2RlKHRlbXAucXVlcnlTZWxlY3RvcihgJHtkdW1teV9pbWFnZV9lbGVtZW50fWApLCBpbWFnZSk7XG5cblx0XHRjb25zdCBwX3RhZyA9IHRlbXAucXVlcnlTZWxlY3RvcigncCcpO1xuXHRcdHBfdGFnLmlubmVyVGV4dCA9IFwiTWludCBmbGF2b3VyZWQgdGlyYW1pc3UgZm9yIHRoZSBkYXJpbmcuIEJhbGFuY2VzIHRoZSByaWNobmVzcyBvZiB0aGUgY3JlYW0uIFNvIG11Y2ggY2FzY2FkaW5nIGZsYXZvdXJzLCBzbyBtdWNoIHN0eWxlLlwiO1xuXHR9XG5cdHtcblx0XHRjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXHRcdGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgTGFzYWduYSk7XG5cdFx0aW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBcIkRlbGVjdGFibGUgbGFzYWduYSwgdG9wcGVkIHdpdGggYmFzaWwsIHByZXNlbnRlZCBpbiBhIHdvb2RlbiB0YWJsZSB3aXRoIGJyZWFkIG9uIHRoZSBzaWRlLlwiKTtcblxuXHRcdGNvbnN0IHRlbXAgPSBNZW51V3JhcHBlci5xdWVyeVNlbGVjdG9yKGBsaVtkYXRhLWluZGV4PVwiMVwiXWApO1xuXHRcdHJlcGxhY2Vfbm9kZSh0ZW1wLnF1ZXJ5U2VsZWN0b3IoYCR7ZHVtbXlfaW1hZ2VfZWxlbWVudH1gKSwgaW1hZ2UpO1xuXG5cdFx0Y29uc3QgcF90YWcgPSB0ZW1wLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcblx0XHRwX3RhZy5pbm5lclRleHQgPSBcIkxhc2FnbmEgd2l0aCBsYXllcnMgb2YgcGFzdGEgY29tcGxpbWVudGluZyBlYWNoIG90aGVyLiBQYXN0YSBsaW5lZCB1cCB3aXRoIHBhc3RhLCBtYXJrZWQgdXAgZm9yIHlvdXIgcGxlYXN1cmUuXCI7XG5cdH1cblx0e1xuXHRcdGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cdFx0aW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBMb2JzdGVyKTtcblx0XHRpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIFwiTG9ic3RlciBzZXJ2ZWQgd2l0aCBjb3JuLCBjdWN1bWJlcnMsIHRvbWF0b2VzLCBvbiBhIGlsbHVzdHJhdGVkIHBsYXRlLCB0aGVuIHBsYWNlZCBvbiBhIHdvb2RlbiB0YWJsZS5cIik7XG5cblx0XHRjb25zdCB0ZW1wID0gTWVudVdyYXBwZXIucXVlcnlTZWxlY3RvcihgbGlbZGF0YS1pbmRleD1cIjJcIl1gKTtcblx0XHRyZXBsYWNlX25vZGUodGVtcC5xdWVyeVNlbGVjdG9yKGAke2R1bW15X2ltYWdlX2VsZW1lbnR9YCksIGltYWdlKTtcblxuXHRcdGNvbnN0IHBfdGFnID0gdGVtcC5xdWVyeVNlbGVjdG9yKCdwJyk7XG5cdFx0cF90YWcuaW5uZXJUZXh0ID0gXCJJbnNwaXJlZCBieSB0aGUgSmF2YSwgdGhlIGxvYnN0ZXIgaXMgYmFrZWQgd2l0aCB2YXJpb3VzIG1peC1pbnMgYW5kIGRlbGVjdGFibGUgc291cCB0aGluZ3MuIFZlcnkgdGFzdHkgYW5kIGRhbmdlcm91cy5cIjtcblx0fVxuXHRyZXR1cm4gTWVudVdyYXBwZXI7XG59XG5cbmV4cG9ydCBjb25zdCBNZW51ID0gaW5pdF9tZW51X2VsZW1lbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRNZW51LFxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjaGlsZHJlbihyb290LCAuLi5jaGlsZHJlbikge1xuXHRpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAwIHx8IGNoaWxkcmVuID09IG51bGwpIHJldHVybiByb290O1xuXG5cdHJldHVybiBjaGlsZHJlbi5mbGF0KCkucmVkdWNlKChhY2MsIGVsKSA9PiB7XG5cdFx0YWNjLmFwcGVuZENoaWxkKGVsKTtcblx0XHRyZXR1cm4gYWNjO1xuXHR9LCByb290KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VfaW5zaWRlKHJvb3QsIHJlcGxhY2VtZW50X2VsZW1lbnQpIHtcblx0cm9vdC5pbm5lckhUTUwgPSBcIlwiO1xuXHRyb290LmFwcGVuZENoaWxkKHJlcGxhY2VtZW50X2VsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZV9ub2RlKGR1bW15X2VsZW1lbnQsIHJlcGxhY2VtZW50X2VsZW1lbnQpIHtcblx0Y29uc3QgcGFyZW50ID0gZHVtbXlfZWxlbWVudC5wYXJlbnROb2RlO1xuXG5cdHBhcmVudC5pbnNlcnRCZWZvcmUocmVwbGFjZW1lbnRfZWxlbWVudCwgZHVtbXlfZWxlbWVudCk7XG5cdHBhcmVudC5yZW1vdmVDaGlsZChkdW1teV9lbGVtZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjaGlsZHJlbixcblx0cmVwbGFjZV9ub2RlLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBIb21lIH0gZnJvbSBcIi4vSG9tZS9yZW5kZXIuanNcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi9NZW51L3JlbmRlci5qc1wiO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyL3JlbmRlci5qc1wiO1xuaW1wb3J0IHsgQ29udGFjdCwgQ29udGFjdEZvb3RlciB9IGZyb20gXCIuL0NvbnRhY3QvcmVuZGVyLmpzXCI7XG5pbXBvcnQgeyByZXBsYWNlX2luc2lkZSB9IGZyb20gXCIuL2RzbC11dGlscy5qc1wiOyBcbmltcG9ydCBcIi4vYXNzZXRzL3RoZW1lLmNzc1wiO1xuXG5jb25zdCBDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuXG5mdW5jdGlvbiBiaW5kX2RvbV9lbGVtZW50cyh7IGhvbWVfYnRuLCBtZW51X2J0biwgY29udGFjdF9idG4sIGR1bW15X2Zvb3RlciB9KSB7XG4gICAgY29uc3QgY2xlYXJfYWxsX3NlbGVjdGVkID0gKCkgPT4ge1xuXHRmb3IgKGNvbnN0IGJ0biBvZiBbaG9tZV9idG4sIG1lbnVfYnRuLCBjb250YWN0X2J0bl0pIHtcblx0ICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuXHR9XG4gICAgfVxuXG4gICAgaG9tZV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0cmVwbGFjZV9pbnNpZGUoQ29udGVudCwgSG9tZSk7XG5cblx0Y2xlYXJfYWxsX3NlbGVjdGVkKCk7XG5cdGhvbWVfYnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cblx0aWYgKGR1bW15X2Zvb3Rlci5xdWVyeVNlbGVjdG9yKCcuRm9vdGVyJykgPT09IG51bGwpIHtcblx0ICAgIHJlcGxhY2VfaW5zaWRlKGR1bW15X2Zvb3RlciwgRm9vdGVyKTtcblx0fVxuICAgIH0pO1xuXG4gICAgbWVudV9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0cmVwbGFjZV9pbnNpZGUoQ29udGVudCwgTWVudSk7XG5cblx0Y2xlYXJfYWxsX3NlbGVjdGVkKCk7XG5cdG1lbnVfYnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cblx0aWYgKGR1bW15X2Zvb3Rlci5xdWVyeVNlbGVjdG9yKCcuRm9vdGVyJykgPT09IG51bGwpIHtcblx0ICAgIHJlcGxhY2VfaW5zaWRlKGR1bW15X2Zvb3RlciwgRm9vdGVyKTtcblx0fVxuICAgIH0pO1xuXG4gICAgY29udGFjdF9idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0cmVwbGFjZV9pbnNpZGUoQ29udGVudCwgQ29udGFjdCk7XG5cblx0Y2xlYXJfYWxsX3NlbGVjdGVkKCk7XG5cdGNvbnRhY3RfYnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cblx0aWYgKGR1bW15X2Zvb3Rlci5xdWVyeVNlbGVjdG9yKCcuRm9vdGVyJykgIT09IG51bGwpIHtcblx0ICAgIHJlcGxhY2VfaW5zaWRlKGR1bW15X2Zvb3RlciwgQ29udGFjdEZvb3Rlcik7XG5cdH1cbiAgICB9KTtcblxuICAgIENvbnRlbnQuYXBwZW5kQ2hpbGQoSG9tZSk7XG4gICAgaG9tZV9idG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICByZXBsYWNlX2luc2lkZShkdW1teV9mb290ZXIsIEZvb3Rlcik7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIik7XG5cbiAgICBiaW5kX2RvbV9lbGVtZW50cyh7XG5cdGhvbWVfYnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZV9idG4nKSxcblx0bWVudV9idG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51X2J0bicpLFxuXHRjb250YWN0X2J0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RfYnRuJyksXG5cdGR1bW15X2Zvb3RlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1bW15X2Zvb3RlcicpLFxuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=