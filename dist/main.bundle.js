/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n  color: inherit;\n}\n\nbody {\n  font-family: 'Roboto', sans-serif;\n}\n\n.footer {\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.4);\n  text-align: center;\n  padding: 1.5rem;\n  font-size: 1.2rem;\n}\n\n#menu {\n  background: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 97;\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  gap: 10%;\n  align-items: center;\n  padding: 1rem;\n  font-size: 1.1rem;\n}\n\n#logo {\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  font-size: 2rem;\n  cursor: pointer;\n}\n\n.nav-items {\n  display: flex;\n  gap: 30%;\n  align-items: center;\n  padding: 1rem;\n  font-size: 1.1rem;\n}\n\n.food-logo {\n  width: 50px;\n  height: 50px;\n  display: block;\n}\n\n.chicken-image {\n  width: 18rem;\n  border-radius: 6px;\n}\n\n#cards {\n  display: flex;\n  gap: 1.5rem;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 7rem 0 3rem;\n}\n\n.dish-name {\n  margin-top: 10px;\n}\n\n.name-and-like {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 5px;\n  font-size: 1.2rem;\n  margin-top: 0.5rem;\n}\n\n.like-icon {\n  fill: #f00;\n  padding-top: 10px;\n  transform: scale(0.8);\n  cursor: pointer;\n}\n\n.btn {\n  padding: 3px;\n  font-size: 1.1rem;\n  cursor: pointer;\n}\n\n.comments-and-reservations {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  margin-top: 30px;\n}\n\np {\n  text-align: right;\n  margin-top: 5px;\n}\n\n.chicken-image:hover {\n  transform: scale(0.99);\n  transition: transform 0.3s;\n}\n\nbutton[type=submit] {\n  padding: 0.8rem 2rem;\n  cursor: pointer;\n  border-radius: 6px;\n  border: none;\n}\n\n.dish-element {\n  padding: 1rem;\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.dish-element:hover {\n  transform: scale(0.95);\n  transition: transform 0.6s;\n}\n\n.like-icon:hover {\n  transform: scale(1.05);\n  transition: transform 0.6s;\n  color: #cd1818;\n  cursor: pointer;\n}\n\n.btn-comments {\n  background: #a0d8b3;\n}\n\n.btn-comments:hover {\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.4);\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  font-size: 1rem;\n  transform: scale(0.95);\n  transition: transform 0.6s;\n}\n\n.btn-reservations {\n  background: #f7d060;\n}\n\n.btn-reservations:hover {\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.4);\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  font-size: 1rem;\n  transform: scale(0.95);\n  transition: transform 0.6s;\n}\n\n.dish-name:hover {\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  font-size: 1.5rem;\n  transform: scale(1.05);\n  transition: transform 0.6s;\n}\n\n#popup-bg {\n  position: fixed;\n  background: linear-gradient(to right top, rgba(160, 216, 179, 0.5), rgba(247, 208, 96, 0.5));\n  backdrop-filter: blur(6px);\n  display: none;\n  flex-direction: column;\n  justify-content: start;\n  align-items: flex-start;\n  text-align: start;\n  top: 0;\n  z-index: 9999;\n  left: 0;\n  padding: 2rem;\n  height: 100vh;\n  width: 100%;\n  overflow: auto;\n}\n\n#popup {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.2rem;\n  background: white;\n  width: 80%;\n  border-radius: 1rem;\n  margin: auto;\n}\n\n.dish-element-popup {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.chicken-image-popup {\n  border-radius: 6px;\n  width: 90%;\n}\n\n.dish-name-popup {\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  font-size: 1.8rem;\n  padding: 1.5rem;\n}\n\n.close {\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  font-size: 1.5rem;\n  padding: 0.5rem 1.5rem 0.5rem;\n  align-self: flex-end;\n  cursor: pointer;\n}\n\n#comments {\n  font-size: 0.9rem;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#comments li {\n  padding: 0.5rem;\n  background: rgba(0, 0, 0, 0.09);\n  border-radius: 6px;\n}\n\n#comment {\n  margin-top: 1rem;\n  width: 90%;\n}\n\n#name,\n#message {\n  width: 100%;\n  padding: 0.5rem;\n  border-style: solid;\n  border-image: linear-gradient(to right top, rgba(160, 216, 179, 0.5), rgba(247, 208, 96, 0.5)) 1;\n  border-image-slice: 1;\n  resize: none;\n  outline: none;\n}\n\n#message {\n  margin-top: 0.5rem;\n}\n\n.btn-comment {\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  margin: 0.5rem 0 1rem;\n  background: linear-gradient(to right top, rgba(160, 216, 179, 0.5), rgba(247, 208, 96, 0.5));\n}\n\n.btn-comment:hover {\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.2);\n}\n\n.like-number {\n  width: 30px;\n  border: none;\n  margin-top: 6px;\n}\n\n.like-section {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n}\n\n.like-icon:active {\n  color: white;\n}\n\n#comments-counter {\n  align-self: flex-start;\n  padding-left: 1.2rem;\n  padding-bottom: 0.8rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  list-style: none;\n  text-decoration: none;\n  color: inherit;\n}\n\nbody {\n  font-family: 'Roboto', sans-serif;\n}\n\n.footer {\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.4);\n  text-align: center;\n  padding: 1.5rem;\n  font-size: 1.2rem;\n}\n\n#menu {\n  background: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 97;\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  gap: 10%;\n  align-items: center;\n  padding: 1rem;\n  font-size: 1.1rem;\n}\n\n#logo {\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  font-size: 2rem;\n  cursor: pointer;\n}\n\n.nav-items {\n  display: flex;\n  gap: 30%;\n  align-items: center;\n  padding: 1rem;\n  font-size: 1.1rem;\n}\n\n.food-logo {\n  width: 50px;\n  height: 50px;\n  display: block;\n}\n\n.chicken-image {\n  width: 18rem;\n  border-radius: 6px;\n}\n\n#cards {\n  display: flex;\n  gap: 1.5rem;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 7rem 0 3rem;\n}\n\n.dish-name {\n  margin-top: 10px;\n}\n\n.name-and-like {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 5px;\n  font-size: 1.2rem;\n  margin-top: 0.5rem;\n}\n\n.like-icon {\n  fill: #f00;\n  padding-top: 10px;\n  transform: scale(0.8);\n  cursor: pointer;\n}\n\n.btn {\n  padding: 3px;\n  font-size: 1.1rem;\n  cursor: pointer;\n}\n\n.comments-and-reservations {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  margin-top: 30px;\n}\n\np {\n  text-align: right;\n  margin-top: 5px;\n}\n\n.chicken-image:hover {\n  transform: scale(0.99);\n  transition: transform 0.3s;\n}\n\nbutton[type=submit] {\n  padding: 0.8rem 2rem;\n  cursor: pointer;\n  border-radius: 6px;\n  border: none;\n}\n\n.dish-element {\n  padding: 1rem;\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.dish-element:hover {\n  transform: scale(0.95);\n  transition: transform 0.6s;\n}\n\n.like-icon:hover {\n  transform: scale(1.05);\n  transition: transform 0.6s;\n  color: #cd1818;\n  cursor: pointer;\n}\n\n.btn-comments {\n  background: #a0d8b3;\n}\n\n.btn-comments:hover {\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.4);\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  font-size: 1rem;\n  transform: scale(0.95);\n  transition: transform 0.6s;\n}\n\n.btn-reservations {\n  background: #f7d060;\n}\n\n.btn-reservations:hover {\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.4);\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  font-size: 1rem;\n  transform: scale(0.95);\n  transition: transform 0.6s;\n}\n\n.dish-name:hover {\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  font-size: 1.5rem;\n  transform: scale(1.05);\n  transition: transform 0.6s;\n}\n\n#popup-bg {\n  position: fixed;\n  background: linear-gradient(to right top, rgba(160, 216, 179, 0.5), rgba(247, 208, 96, 0.5));\n  backdrop-filter: blur(6px);\n  display: none;\n  flex-direction: column;\n  justify-content: start;\n  align-items: flex-start;\n  text-align: start;\n  top: 0;\n  z-index: 9999;\n  left: 0;\n  padding: 2rem;\n  height: 100vh;\n  width: 100%;\n  overflow: auto;\n}\n\n#popup {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.2rem;\n  background: white;\n  width: 80%;\n  border-radius: 1rem;\n  margin: auto;\n}\n\n.dish-element-popup {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.chicken-image-popup {\n  border-radius: 6px;\n  width: 90%;\n}\n\n.dish-name-popup {\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  font-size: 1.8rem;\n  padding: 1.5rem;\n}\n\n.close {\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  font-size: 1.5rem;\n  padding: 0.5rem 1.5rem 0.5rem;\n  align-self: flex-end;\n  cursor: pointer;\n}\n\n#comments {\n  font-size: 0.9rem;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#comments li {\n  padding: 0.5rem;\n  background: rgba(0, 0, 0, 0.09);\n  border-radius: 6px;\n}\n\n#comment {\n  margin-top: 1rem;\n  width: 90%;\n}\n\n#name,\n#message {\n  width: 100%;\n  padding: 0.5rem;\n  border-style: solid;\n  border-image: linear-gradient(to right top, rgba(160, 216, 179, 0.5), rgba(247, 208, 96, 0.5)) 1;\n  border-image-slice: 1;\n  resize: none;\n  outline: none;\n}\n\n#message {\n  margin-top: 0.5rem;\n}\n\n.btn-comment {\n  font-family: 'Kaushan Script', cursive, sans-serif;\n  margin: 0.5rem 0 1rem;\n  background: linear-gradient(to right top, rgba(160, 216, 179, 0.5), rgba(247, 208, 96, 0.5));\n}\n\n.btn-comment:hover {\n  box-shadow: 0 1px 9px rgba(0, 0, 0, 0.2);\n}\n\n.like-number {\n  width: 30px;\n  border: none;\n  margin-top: 6px;\n}\n\n.like-section {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 10px;\n}\n\n.like-icon:active {\n  color: white;\n}\n\n#comments-counter {\n  align-self: flex-start;\n  padding-left: 1.2rem;\n  padding-bottom: 0.8rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/Comments.js":
/*!************************************!*\
  !*** ./src/components/Comments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComments: () => (/* binding */ getComments),
/* harmony export */   postComments: () => (/* binding */ postComments)
/* harmony export */ });
const endpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appId = 'bEFSYipxuLqO077Krx8x';

const postComments = async (itemId, username, comment) => {
  try {
    const res = await fetch(`${endpoint}/${appId}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error('Failed to post comment');
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error posting comment:', error);
    throw error;
  }
};

const getComments = async (itemId) => {
  try {
    const res = await fetch(`${endpoint}/${appId}/comments?item_id=${itemId}`);

    if (res.ok) {
      const comments = await res.json();
      const commentsContainer = document.querySelector('#comments');
      commentsContainer.innerHTML = '';

      if (comments.length > 0) {
        comments.forEach((comment) => {
          const li = document.createElement('li');
          li.textContent = comment.comment;
          commentsContainer.appendChild(li);
        });
      } else {
        const li = document.createElement('li');
        li.textContent = 'No comments yet.';
        commentsContainer.appendChild(li);
      }
    } else {
      throw new Error(`Failed to get comments. Response status: ${res.status}`);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error getting comments:', error);
    throw error;
  }
};




/***/ }),

/***/ "./src/components/Counters.js":
/*!************************************!*\
  !*** ./src/components/Counters.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countComments = () => {
  const commentsContainer = document.getElementById('comments');
  const comments = commentsContainer.getElementsByTagName('li');
  return comments.length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);


/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comments */ "./src/components/Comments.js");
/* harmony import */ var _Counters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counters */ "./src/components/Counters.js");
// eslint-disable-next-line import/extensions

// eslint-disable-next-line import/extensions


const displayPopup = async (recipeId) => {
  const popupContainer = document.getElementById('popup-bg');

  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
    const data = await res.json();
    const recipe = data.meals[0];

    if (recipe) {
      popupContainer.innerHTML = `
        <div id="popup"> 
          <span class="close">X</span>
          <div class="dish-element-popup" data-id="${recipe.idMeal}">
            <img class="chicken-image-popup" src="${recipe.strMealThumb}" alt="">
            <ul class="name-and-like-popup">
              <li class="dish-name-popup">${recipe.strMeal}</li>
            </ul>
            <p id="comments-counter">Comments (loading...)</p>
            <ul id="comments"></ul>
            <form id="comment">
              <input type="text" id="name" name="name" placeholder="Your Name" required>
              <br>
              <textarea id="message" name="message" placeholder="Your thoughts" maxlength="300" required=""></textarea>
              <button class="btn-comment" type="submit" tabindex="0" aria-label="Get in touch" title="Submit comment">Comment</button>
            </form>
          </div>
        </div>
      `;

      document.querySelector('body').style.overflow = 'hidden';
      popupContainer.style.display = 'flex';

      const close = popupContainer.querySelector('.close');
      close.addEventListener('click', () => {
        popupContainer.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
      });

      const form = document.getElementById('comment');
      const commentsCounter = document.getElementById('comments-counter');

      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const { name, message } = form.elements;
        try {
          await (0,_Comments__WEBPACK_IMPORTED_MODULE_0__.postComments)(recipe.idMeal, name.value, message.value);
          await (0,_Comments__WEBPACK_IMPORTED_MODULE_0__.getComments)(recipe.idMeal);
          form.reset();

          const commentCount = await (0,_Counters__WEBPACK_IMPORTED_MODULE_1__["default"])();
          commentsCounter.textContent = `Comments (${commentCount})`;
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error posting comment:', error);
        }
      });

      await (0,_Comments__WEBPACK_IMPORTED_MODULE_0__.getComments)(recipe.idMeal);
      const commentCount = await (0,_Counters__WEBPACK_IMPORTED_MODULE_1__["default"])();
      commentsCounter.textContent = `Comments (${commentCount})`;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error retrieving recipe:', error);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPopup);


/***/ }),

/***/ "./src/components/Recipes.js":
/*!***********************************!*\
  !*** ./src/components/Recipes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayCards: () => (/* binding */ displayCards),
/* harmony export */   fetchRecipes: () => (/* binding */ fetchRecipes)
/* harmony export */ });
const render = document.getElementById('cards');
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken';
const recipes = [];

const fetchRecipes = async () => {
  const res = await fetch(url);
  const data = await res.json();
  const chickenMeal = data.meals;

  for (let i = 0; i < 6; i += 1) {
    const recipe = {
      id: chickenMeal[i].idMeal,
      image: chickenMeal[i].strMealThumb,
      name: chickenMeal[i].strMeal,
    };
    recipes.push(recipe);
  }
};

const displayCards = async () => {
  recipes.forEach((meal) => {
    const card = document.createElement('div');
    card.classList.add('dish-element');
    card.dataset.id = meal.id;
    window.likeFunction(meal.id);

    card.innerHTML = `
          <img class="chicken-image" src="${meal.image}" alt="">
          <ul class="name-and-like">
            <li class="dish-name">${meal.name}</li>
            <li class="material-icons like-icon" id="${meal.id}" onclick="likeFunction(${meal.id})">favorite</li>
          </ul>
          <div class='like-section'>
            <p>likes</p>
            <input type="text" value="0" class='like-number' id="counts-${meal.id}" disabled>
          </div>
          <div class="comments-and-reservations">
            <a href="#"><button type="submit" class="btn-comments">Comments</button></a>
            <a href="#"><button type="submit" class="btn-reservations">Reservations</button></a>
          </div>
        `;

    render.appendChild(card);
  });
};




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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_Recipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Recipes */ "./src/components/Recipes.js");
/* harmony import */ var _components_Popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Popup */ "./src/components/Popup.js");

// eslint-disable-next-line import/extensions

// eslint-disable-next-line import/extensions


document.addEventListener('DOMContentLoaded', () => {
  (0,_components_Recipes__WEBPACK_IMPORTED_MODULE_1__.fetchRecipes)().then(() => {
    (0,_components_Recipes__WEBPACK_IMPORTED_MODULE_1__.displayCards)();
  });
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-comments')) {
    const dishElement = event.target.closest('.dish-element');
    const recipeId = dishElement.dataset.id;
    (0,_components_Popup__WEBPACK_IMPORTED_MODULE_2__["default"])(recipeId);
  }
});

const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MgbGOFTaDhTVdgSX8BJW/likes';

window.getLikesCount = async (likeId) => {
  await fetch(likesUrl).then((response) => response.json())
    .then((responseData) => {
      responseData.forEach((element) => {
        if (element.item_id === likeId) {
          const getLikeCount = document.getElementById(`counts-${likeId}`);
          getLikeCount.value = element.likes;
        }
      });
    });
};

window.likeFunction = async (mealId) => {
  const likeObject = { item_id: `${mealId}` };
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(likeObject),
  };
  await fetch(likesUrl, options);
  window.getLikesCount(`${mealId}`);
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxh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UUFBUTtBQUNqRztBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsUUFBUTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRXNDOzs7Ozs7O1VDOUN0QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDckI7QUFDa0U7QUFDbEU7QUFDOEM7O0FBRTlDO0FBQ0EsRUFBRSxpRUFBWTtBQUNkLElBQUksaUVBQVk7QUFDaEIsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFZO0FBQ2hCO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLE9BQU87QUFDeEU7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx1QkFBdUIsWUFBWSxPQUFPO0FBQzFDO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyb3VwLWNhcHN0b25lLTEvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS0xLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS0xLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS0xLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtMS8uL3NyYy9jb21wb25lbnRzL0NvbW1lbnRzLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLTEvLi9zcmMvY29tcG9uZW50cy9Db3VudGVycy5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS0xLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtMS8uL3NyYy9jb21wb25lbnRzL1JlY2lwZXMuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS0xL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLTEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLTEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS0xL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtMS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtMS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xcbiAgYm94LXNoYWRvdzogMCAxcHggOXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4jbWVudSB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDk3O1xcbiAgYm94LXNoYWRvdzogMCAxcHggOXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuI2xvZ28ge1xcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXYtaXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmZvb2QtbG9nbyB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY2hpY2tlbi1pbWFnZSB7XFxuICB3aWR0aDogMThyZW07XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbiNjYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbjogN3JlbSAwIDNyZW07XFxufVxcblxcbi5kaXNoLW5hbWUge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLm5hbWUtYW5kLWxpa2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4ubGlrZS1pY29uIHtcXG4gIGZpbGw6ICNmMDA7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0biB7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbW1lbnRzLWFuZC1yZXNlcnZhdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG5wIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uY2hpY2tlbi1pbWFnZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbmJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xcbiAgcGFkZGluZzogMC44cmVtIDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kaXNoLWVsZW1lbnQge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDlweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kaXNoLWVsZW1lbnQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xcbn1cXG5cXG4ubGlrZS1pY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcXG4gIGNvbG9yOiAjY2QxODE4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLWNvbW1lbnRzIHtcXG4gIGJhY2tncm91bmQ6ICNhMGQ4YjM7XFxufVxcblxcbi5idG4tY29tbWVudHM6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAxcHggOXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xcbn1cXG5cXG4uYnRuLXJlc2VydmF0aW9ucyB7XFxuICBiYWNrZ3JvdW5kOiAjZjdkMDYwO1xcbn1cXG5cXG4uYnRuLXJlc2VydmF0aW9uczpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDFweCA5cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnM7XFxufVxcblxcbi5kaXNoLW5hbWU6aG92ZXIge1xcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcXG59XFxuXFxuI3BvcHVwLWJnIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsIHJnYmEoMTYwLCAyMTYsIDE3OSwgMC41KSwgcmdiYSgyNDcsIDIwOCwgOTYsIDAuNSkpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNwb3B1cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5kaXNoLWVsZW1lbnQtcG9wdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hpY2tlbi1pbWFnZS1wb3B1cCB7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uZGlzaC1uYW1lLXBvcHVwIHtcXG4gIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5jbG9zZSB7XFxuICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbSAwLjVyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbW1lbnRzIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNjb21tZW50cyBsaSB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDkpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4jY29tbWVudCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuI25hbWUsXFxuI21lc3NhZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCByZ2JhKDE2MCwgMjE2LCAxNzksIDAuNSksIHJnYmEoMjQ3LCAyMDgsIDk2LCAwLjUpKSAxO1xcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xcbiAgcmVzaXplOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI21lc3NhZ2Uge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4uYnRuLWNvbW1lbnQge1xcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDAuNXJlbSAwIDFyZW07XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCByZ2JhKDE2MCwgMjE2LCAxNzksIDAuNSksIHJnYmEoMjQ3LCAyMDgsIDk2LCAwLjUpKTtcXG59XFxuXFxuLmJ0bi1jb21tZW50OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDlweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5saWtlLW51bWJlciB7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDZweDtcXG59XFxuXFxuLmxpa2Utc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5saWtlLWljb246YWN0aXZlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2NvbW1lbnRzLWNvdW50ZXIge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIHBhZGRpbmctbGVmdDogMS4ycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJt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QUFFQTtFQUNFLGtEQUFrRDtFQUNsRCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtEQUFrRDtFQUNsRCxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnR0FBZ0c7RUFDaEcscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrREFBa0Q7RUFDbEQscUJBQXFCO0VBQ3JCLDRGQUE0RjtBQUM5Rjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xcbiAgYm94LXNoYWRvdzogMCAxcHggOXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4jbWVudSB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDk3O1xcbiAgYm94LXNoYWRvdzogMCAxcHggOXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuI2xvZ28ge1xcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXYtaXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmZvb2QtbG9nbyB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY2hpY2tlbi1pbWFnZSB7XFxuICB3aWR0aDogMThyZW07XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbiNjYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbjogN3JlbSAwIDNyZW07XFxufVxcblxcbi5kaXNoLW5hbWUge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLm5hbWUtYW5kLWxpa2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4ubGlrZS1pY29uIHtcXG4gIGZpbGw6ICNmMDA7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ0biB7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbW1lbnRzLWFuZC1yZXNlcnZhdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG5wIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uY2hpY2tlbi1pbWFnZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxufVxcblxcbmJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xcbiAgcGFkZGluZzogMC44cmVtIDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kaXNoLWVsZW1lbnQge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDlweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kaXNoLWVsZW1lbnQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xcbn1cXG5cXG4ubGlrZS1pY29uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcXG4gIGNvbG9yOiAjY2QxODE4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLWNvbW1lbnRzIHtcXG4gIGJhY2tncm91bmQ6ICNhMGQ4YjM7XFxufVxcblxcbi5idG4tY29tbWVudHM6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAxcHggOXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xcbn1cXG5cXG4uYnRuLXJlc2VydmF0aW9ucyB7XFxuICBiYWNrZ3JvdW5kOiAjZjdkMDYwO1xcbn1cXG5cXG4uYnRuLXJlc2VydmF0aW9uczpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDFweCA5cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnM7XFxufVxcblxcbi5kaXNoLW5hbWU6aG92ZXIge1xcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcXG59XFxuXFxuI3BvcHVwLWJnIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsIHJnYmEoMTYwLCAyMTYsIDE3OSwgMC41KSwgcmdiYSgyNDcsIDIwOCwgOTYsIDAuNSkpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogOTk5OTtcXG4gIGxlZnQ6IDA7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbiNwb3B1cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5kaXNoLWVsZW1lbnQtcG9wdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hpY2tlbi1pbWFnZS1wb3B1cCB7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uZGlzaC1uYW1lLXBvcHVwIHtcXG4gIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcblxcbi5jbG9zZSB7XFxuICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbSAwLjVyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2NvbW1lbnRzIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbiNjb21tZW50cyBsaSB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDkpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4jY29tbWVudCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuXFxuI25hbWUsXFxuI21lc3NhZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCByZ2JhKDE2MCwgMjE2LCAxNzksIDAuNSksIHJnYmEoMjQ3LCAyMDgsIDk2LCAwLjUpKSAxO1xcbiAgYm9yZGVyLWltYWdlLXNsaWNlOiAxO1xcbiAgcmVzaXplOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI21lc3NhZ2Uge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4uYnRuLWNvbW1lbnQge1xcbiAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDAuNXJlbSAwIDFyZW07XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgdG9wLCByZ2JhKDE2MCwgMjE2LCAxNzksIDAuNSksIHJnYmEoMjQ3LCAyMDgsIDk2LCAwLjUpKTtcXG59XFxuXFxuLmJ0bi1jb21tZW50OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDlweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5saWtlLW51bWJlciB7XFxuICB3aWR0aDogMzBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDZweDtcXG59XFxuXFxuLmxpa2Utc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5saWtlLWljb246YWN0aXZlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2NvbW1lbnRzLWNvdW50ZXIge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIHBhZGRpbmctbGVmdDogMS4ycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGVuZHBvaW50ID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzJztcbmNvbnN0IGFwcElkID0gJ2JFRlNZaXB4dUxxTzA3N0tyeDh4JztcblxuY29uc3QgcG9zdENvbW1lbnRzID0gYXN5bmMgKGl0ZW1JZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtlbmRwb2ludH0vJHthcHBJZH0vY29tbWVudHNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgY29tbWVudCxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBwb3N0IGNvbW1lbnQnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwb3N0aW5nIGNvbW1lbnQ6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtlbmRwb2ludH0vJHthcHBJZH0vY29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gKTtcblxuICAgIGlmIChyZXMub2spIHtcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIGNvbnN0IGNvbW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRzJyk7XG4gICAgICBjb21tZW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgaWYgKGNvbW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICBsaS50ZXh0Q29udGVudCA9IGNvbW1lbnQuY29tbWVudDtcbiAgICAgICAgICBjb21tZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9ICdObyBjb21tZW50cyB5ZXQuJztcbiAgICAgICAgY29tbWVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBnZXQgY29tbWVudHMuIFJlc3BvbnNlIHN0YXR1czogJHtyZXMuc3RhdHVzfWApO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgY29tbWVudHM6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgeyBwb3N0Q29tbWVudHMsIGdldENvbW1lbnRzIH07XG4iLCJjb25zdCBjb3VudENvbW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50cycpO1xuICBjb25zdCBjb21tZW50cyA9IGNvbW1lbnRzQ29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xuICByZXR1cm4gY29tbWVudHMubGVuZ3RoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY291bnRDb21tZW50cztcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvZXh0ZW5zaW9uc1xuaW1wb3J0IHsgcG9zdENvbW1lbnRzLCBnZXRDb21tZW50cyB9IGZyb20gJy4vQ29tbWVudHMnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9leHRlbnNpb25zXG5pbXBvcnQgY291bnRDb21tZW50cyBmcm9tICcuL0NvdW50ZXJzJztcblxuY29uc3QgZGlzcGxheVBvcHVwID0gYXN5bmMgKHJlY2lwZUlkKSA9PiB7XG4gIGNvbnN0IHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWJnJyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2xvb2t1cC5waHA/aT0ke3JlY2lwZUlkfWApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnN0IHJlY2lwZSA9IGRhdGEubWVhbHNbMF07XG5cbiAgICBpZiAocmVjaXBlKSB7XG4gICAgICBwb3B1cENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgaWQ9XCJwb3B1cFwiPiBcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+WDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzaC1lbGVtZW50LXBvcHVwXCIgZGF0YS1pZD1cIiR7cmVjaXBlLmlkTWVhbH1cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjaGlja2VuLWltYWdlLXBvcHVwXCIgc3JjPVwiJHtyZWNpcGUuc3RyTWVhbFRodW1ifVwiIGFsdD1cIlwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmFtZS1hbmQtbGlrZS1wb3B1cFwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkaXNoLW5hbWUtcG9wdXBcIj4ke3JlY2lwZS5zdHJNZWFsfTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHAgaWQ9XCJjb21tZW50cy1jb3VudGVyXCI+Q29tbWVudHMgKGxvYWRpbmcuLi4pPC9wPlxuICAgICAgICAgICAgPHVsIGlkPVwiY29tbWVudHNcIj48L3VsPlxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJjb21tZW50XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJtZXNzYWdlXCIgbmFtZT1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIllvdXIgdGhvdWdodHNcIiBtYXhsZW5ndGg9XCIzMDBcIiByZXF1aXJlZD1cIlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4tY29tbWVudFwiIHR5cGU9XCJzdWJtaXRcIiB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsPVwiR2V0IGluIHRvdWNoXCIgdGl0bGU9XCJTdWJtaXQgY29tbWVudFwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAgIGNvbnN0IGNsb3NlID0gcG9wdXBDb250YWluZXIucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG4gICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcG9wdXBDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudCcpO1xuICAgICAgY29uc3QgY29tbWVudHNDb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnRzLWNvdW50ZXInKTtcblxuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB7IG5hbWUsIG1lc3NhZ2UgfSA9IGZvcm0uZWxlbWVudHM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgcG9zdENvbW1lbnRzKHJlY2lwZS5pZE1lYWwsIG5hbWUudmFsdWUsIG1lc3NhZ2UudmFsdWUpO1xuICAgICAgICAgIGF3YWl0IGdldENvbW1lbnRzKHJlY2lwZS5pZE1lYWwpO1xuICAgICAgICAgIGZvcm0ucmVzZXQoKTtcblxuICAgICAgICAgIGNvbnN0IGNvbW1lbnRDb3VudCA9IGF3YWl0IGNvdW50Q29tbWVudHMoKTtcbiAgICAgICAgICBjb21tZW50c0NvdW50ZXIudGV4dENvbnRlbnQgPSBgQ29tbWVudHMgKCR7Y29tbWVudENvdW50fSlgO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcG9zdGluZyBjb21tZW50OicsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGF3YWl0IGdldENvbW1lbnRzKHJlY2lwZS5pZE1lYWwpO1xuICAgICAgY29uc3QgY29tbWVudENvdW50ID0gYXdhaXQgY291bnRDb21tZW50cygpO1xuICAgICAgY29tbWVudHNDb3VudGVyLnRleHRDb250ZW50ID0gYENvbW1lbnRzICgke2NvbW1lbnRDb3VudH0pYDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZXRyaWV2aW5nIHJlY2lwZTonLCBlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlQb3B1cDtcbiIsImNvbnN0IHJlbmRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkcycpO1xuY29uc3QgdXJsID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9zZWFyY2gucGhwP3M9Y2hpY2tlbic7XG5jb25zdCByZWNpcGVzID0gW107XG5cbmNvbnN0IGZldGNoUmVjaXBlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGNvbnN0IGNoaWNrZW5NZWFsID0gZGF0YS5tZWFscztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJlY2lwZSA9IHtcbiAgICAgIGlkOiBjaGlja2VuTWVhbFtpXS5pZE1lYWwsXG4gICAgICBpbWFnZTogY2hpY2tlbk1lYWxbaV0uc3RyTWVhbFRodW1iLFxuICAgICAgbmFtZTogY2hpY2tlbk1lYWxbaV0uc3RyTWVhbCxcbiAgICB9O1xuICAgIHJlY2lwZXMucHVzaChyZWNpcGUpO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5Q2FyZHMgPSBhc3luYyAoKSA9PiB7XG4gIHJlY2lwZXMuZm9yRWFjaCgobWVhbCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2Rpc2gtZWxlbWVudCcpO1xuICAgIGNhcmQuZGF0YXNldC5pZCA9IG1lYWwuaWQ7XG4gICAgd2luZG93Lmxpa2VGdW5jdGlvbihtZWFsLmlkKTtcblxuICAgIGNhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJjaGlja2VuLWltYWdlXCIgc3JjPVwiJHttZWFsLmltYWdlfVwiIGFsdD1cIlwiPlxuICAgICAgICAgIDx1bCBjbGFzcz1cIm5hbWUtYW5kLWxpa2VcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImRpc2gtbmFtZVwiPiR7bWVhbC5uYW1lfTwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBsaWtlLWljb25cIiBpZD1cIiR7bWVhbC5pZH1cIiBvbmNsaWNrPVwibGlrZUZ1bmN0aW9uKCR7bWVhbC5pZH0pXCI+ZmF2b3JpdGU8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nbGlrZS1zZWN0aW9uJz5cbiAgICAgICAgICAgIDxwPmxpa2VzPC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIwXCIgY2xhc3M9J2xpa2UtbnVtYmVyJyBpZD1cImNvdW50cy0ke21lYWwuaWR9XCIgZGlzYWJsZWQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRzLWFuZC1yZXNlcnZhdGlvbnNcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4tY29tbWVudHNcIj5Db21tZW50czwvYnV0dG9uPjwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4tcmVzZXJ2YXRpb25zXCI+UmVzZXJ2YXRpb25zPC9idXR0b24+PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgcmVuZGVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGZldGNoUmVjaXBlcywgZGlzcGxheUNhcmRzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvZXh0ZW5zaW9uc1xuaW1wb3J0IHsgZGlzcGxheUNhcmRzLCBmZXRjaFJlY2lwZXMgfSBmcm9tICcuL2NvbXBvbmVudHMvUmVjaXBlcyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCBkaXNwbGF5UG9wdXAgZnJvbSAnLi9jb21wb25lbnRzL1BvcHVwJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgZmV0Y2hSZWNpcGVzKCkudGhlbigoKSA9PiB7XG4gICAgZGlzcGxheUNhcmRzKCk7XG4gIH0pO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidG4tY29tbWVudHMnKSkge1xuICAgIGNvbnN0IGRpc2hFbGVtZW50ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kaXNoLWVsZW1lbnQnKTtcbiAgICBjb25zdCByZWNpcGVJZCA9IGRpc2hFbGVtZW50LmRhdGFzZXQuaWQ7XG4gICAgZGlzcGxheVBvcHVwKHJlY2lwZUlkKTtcbiAgfVxufSk7XG5cbmNvbnN0IGxpa2VzVXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL01nYkdPRlRhRGhUVmRnU1g4QkpXL2xpa2VzJztcblxud2luZG93LmdldExpa2VzQ291bnQgPSBhc3luYyAobGlrZUlkKSA9PiB7XG4gIGF3YWl0IGZldGNoKGxpa2VzVXJsKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgIHJlc3BvbnNlRGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50Lml0ZW1faWQgPT09IGxpa2VJZCkge1xuICAgICAgICAgIGNvbnN0IGdldExpa2VDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb3VudHMtJHtsaWtlSWR9YCk7XG4gICAgICAgICAgZ2V0TGlrZUNvdW50LnZhbHVlID0gZWxlbWVudC5saWtlcztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG53aW5kb3cubGlrZUZ1bmN0aW9uID0gYXN5bmMgKG1lYWxJZCkgPT4ge1xuICBjb25zdCBsaWtlT2JqZWN0ID0geyBpdGVtX2lkOiBgJHttZWFsSWR9YCB9O1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxpa2VPYmplY3QpLFxuICB9O1xuICBhd2FpdCBmZXRjaChsaWtlc1VybCwgb3B0aW9ucyk7XG4gIHdpbmRvdy5nZXRMaWtlc0NvdW50KGAke21lYWxJZH1gKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=