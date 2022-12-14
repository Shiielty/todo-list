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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;700&family=Inknut+Antiqua:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* font-family: 'Inconsolata', monospace;\nfont-family: 'Inknut Antiqua', serif;\nfont-family: 'Roboto', sans-serif; */\n\n:root {\n    --black: #164E63;\n    --grey: rgba(0, 0, 0, 0.75);\n    --deepsea: #155E75;\n    --darkblue: #0E7490;\n    --blue: #06B6D4;\n    --white: #FFFFFF;\n    --white8: rgba(255, 255, 255, 0.8);\n    --white5: rgba(255, 255, 255, 0.5); \n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--black);\n    font-family: 'Roboto', sans-serif;\n    font-size: 18px;\n}\n\n.wrapper {\n    background-color: var(--deepsea);\n    max-width: 550px;\n    min-height: 100vh;\n    margin: 0 auto;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--darkblue);\n    padding-bottom: 20px;\n}\n\nh1,\np {\n    margin: 0;\n}\n\nh2 {\n    margin: 20px;\n    color: var(--white);\n    font-family: 'Inconsolata', monospace;\n    border-bottom: 2px solid var(--white5);\n    padding-bottom: 5px;\n}\n\nheader > h1 {\n    font-family: 'Inknut Antiqua', serif;\n    font-size: 3rem;\n    color: var(--white);\n    text-align: center;\n}\n\nheader > p {\n    font-family: 'Inconsolata', monospace;\n    font-size: 0.9rem;\n    color: white;\n    text-align: left;\n    margin: 0 85px;\n}\n\nnav {\n    align-self: end;\n    position: relative;\n    bottom: -34px;\n\n    display: flex;\n    gap: 1px;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nbutton > img {\n    pointer-events: none;\n}\n\nheader button {\n    height: 34px;\n    padding: 5px 10px;\n    border: none;\n    background-color: var(--blue);\n    font-family: 'Inconsolata', monospace;\n    font-weight: bold;\n    color: var(--white8);\n}\n\nheader button:hover {\n    background-color: var(--black);\n    cursor: pointer;\n}\n\nimg {\n    height: 20px;\n    width: auto;\n}\n\n.task-header {\n    display: flex;\n    border-bottom: var(--grey);\n    font-weight: bold;\n    font-size: 0.9rem;\n    color: var(--white5);\n}\n\n\nmain {\n    margin-top: 20px;\n}\n\n.task-header {\n    display: flex;\n    align-items: baseline;\n    gap: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid var(--grey);\n    margin: 10px 200px 25px 20px;\n    color: var(--white5);\n    list-style: none;\n}\n\n.task-header .active {\n    color: var(--white);\n    font-size: 1.5rem;\n}\n\n.task-container > .task-item,\n.project-item {\n    display: flex;\n    align-items: center;\n    padding: 0 20px;\n    height: 32px;\n    color: var(--white8)\n}\n\n.task-container > .task-item:hover,\n.project-item:hover {\n    background-color: var(--blue);\n}\n\n.task-container label {\n    padding: 5px 10px;\n}\n\n.task-menu {\n    display: none;\n    margin: 0 10px 0 auto;\n}\n\n.task-menu-visible {\n    display: flex;\n    gap: 5px;\n}\n\nlabel[for=\"taskInput\"] {\n    position: relative;\n    right: 8px;\n    color: #000000a1;\n    font-size: 2rem;\n}\n\ninput#taskInput {\n    position: relative;\n    right: 37px;\n    width: 100%;\n    padding: 5px 5px 5px 30px;\n    background-color: var(--black);\n    border: none;\n    font-size: 1rem;\n    border-radius: 1rem;\n}\n\ninput#taskInput:focus-visible {\n    outline: none;\n    color: var(--white);\n    background-color: var(--black);\n    border-radius: 1rem;\n    border:none;\n}\n\n.enter-btn {\n    position: relative;\n    right: 75px;\n    border: none;\n    background-color: transparent;\n}\n\n.form {\n    display: block;\n    padding: 10px;\n    margin: 0 85px 0 20px;\n    background-color: var(--black);\n    border-radius: 1rem;\n}\n\n\n.form label {\n    padding: 0;\n    font-size: 0.9rem;\n}\n\n.form > input:first-of-type {\n    display: block;\n    margin-bottom: 15px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 1rem;\n    background: #000000a6;\n    color: white;\n    font-size: 1.5rem;\n}\n\ninput#dueDate {\n    margin-right: 20px;\n}\n\nlabel[for=\"taskDesc\"] {\n    display: block;\n    margin-top: 10px;\n}\n\ninput#taskDesc {\n    display: block;\n    background-color: transparent;\n    border: none;\n    width: 400px;\n    padding: 5px 10px;\n}\n\n#taskDesc:focus-visible {\n    outline: none;\n    color: var(--white);\n    background-color: black;\n    border-radius: 1rem;\n}\n\n.add-task {\n    font-family: 'Inconsolata', monospace;\n    font-size: 0.9rem;\n    font-weight: bold;\n    margin: 20px;\n    padding: 5px 10px;\n    background-color: var(--blue);\n    border: none;\n    color: white;\n    box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 5px;\n}\n\n.add-task:active {\n    background-color: var(--darkblue);\n}\n\n.submit-btn {\n    margin: 10px 5px;\n    background-color: var(--blue);\n    border: none;\n    border-radius: 0.2rem;\n    padding: 5px 10px;\n    color: #ffffffc4;\n    font-weight: bold;\n}\n\n.close-btn {\n    margin-left: 280px;\n    background-color: red;\n    border: none;\n    border-radius: 0.2rem;\n    padding: 5px 10px;\n    color: #ffffffc4;\n    font-weight: bold;\n}\n\n.project-item {\n    height: 32px;\n}\n\n.project-input-wrapper {\n    display: flex;\n    align-items: center;\n}\n\ninput#addProject {\n    margin: 10px 20px;\n    padding: 5px 10px;\n    background: var(--black);\n    border: none;\n    border-radius: 0.5rem;\n    outline: none;\n    color: white;\n}\n\ninput#addProject:focus-visible {\n    background-color: white;\n    color: black;\n}\n\n.project-input-wrapper > button {\n    background: white;\n    border: none;\n    border-radius: 100%;\n    margin-left: -10px;\n    width: 2rem;\n    height: 2rem;\n}\n\n.project-item-edit {\n    display: flex;\n    align-items: center;\n    padding: 0 20px;\n}\n\ninput#editInput {\n    background: white;\n    border: none;\n    border-radius: 0.5rem;\n    padding: 5px 10px;\n}\n\n.project-item-edit > button {\n    background: transparent;\n    border: none;\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 2rem;\n    height: 2rem;\n}\n\n.project-item-edit > button:hover {\n    background-color: var(--black);\n}\n\n.project-item-edit > .confirm-btn {\n    margin-left: 10px;\n}\n\n.project-item-edit > .cancel-btn:hover {\n    background-color: rgb(255,0,0,0.8);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;700&family=Inknut+Antiqua:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap');\n\n/* font-family: 'Inconsolata', monospace;\nfont-family: 'Inknut Antiqua', serif;\nfont-family: 'Roboto', sans-serif; */\n\n:root {\n    --black: #164E63;\n    --grey: rgba(0, 0, 0, 0.75);\n    --deepsea: #155E75;\n    --darkblue: #0E7490;\n    --blue: #06B6D4;\n    --white: #FFFFFF;\n    --white8: rgba(255, 255, 255, 0.8);\n    --white5: rgba(255, 255, 255, 0.5); \n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--black);\n    font-family: 'Roboto', sans-serif;\n    font-size: 18px;\n}\n\n.wrapper {\n    background-color: var(--deepsea);\n    max-width: 550px;\n    min-height: 100vh;\n    margin: 0 auto;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--darkblue);\n    padding-bottom: 20px;\n}\n\nh1,\np {\n    margin: 0;\n}\n\nh2 {\n    margin: 20px;\n    color: var(--white);\n    font-family: 'Inconsolata', monospace;\n    border-bottom: 2px solid var(--white5);\n    padding-bottom: 5px;\n}\n\nheader > h1 {\n    font-family: 'Inknut Antiqua', serif;\n    font-size: 3rem;\n    color: var(--white);\n    text-align: center;\n}\n\nheader > p {\n    font-family: 'Inconsolata', monospace;\n    font-size: 0.9rem;\n    color: white;\n    text-align: left;\n    margin: 0 85px;\n}\n\nnav {\n    align-self: end;\n    position: relative;\n    bottom: -34px;\n\n    display: flex;\n    gap: 1px;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nbutton > img {\n    pointer-events: none;\n}\n\nheader button {\n    height: 34px;\n    padding: 5px 10px;\n    border: none;\n    background-color: var(--blue);\n    font-family: 'Inconsolata', monospace;\n    font-weight: bold;\n    color: var(--white8);\n}\n\nheader button:hover {\n    background-color: var(--black);\n    cursor: pointer;\n}\n\nimg {\n    height: 20px;\n    width: auto;\n}\n\n.task-header {\n    display: flex;\n    border-bottom: var(--grey);\n    font-weight: bold;\n    font-size: 0.9rem;\n    color: var(--white5);\n}\n\n\nmain {\n    margin-top: 20px;\n}\n\n.task-header {\n    display: flex;\n    align-items: baseline;\n    gap: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid var(--grey);\n    margin: 10px 200px 25px 20px;\n    color: var(--white5);\n    list-style: none;\n}\n\n.task-header .active {\n    color: var(--white);\n    font-size: 1.5rem;\n}\n\n.task-container > .task-item,\n.project-item {\n    display: flex;\n    align-items: center;\n    padding: 0 20px;\n    height: 32px;\n    color: var(--white8)\n}\n\n.task-container > .task-item:hover,\n.project-item:hover {\n    background-color: var(--blue);\n}\n\n.task-container label {\n    padding: 5px 10px;\n}\n\n.task-menu {\n    display: none;\n    margin: 0 10px 0 auto;\n}\n\n.task-menu-visible {\n    display: flex;\n    gap: 5px;\n}\n\nlabel[for=\"taskInput\"] {\n    position: relative;\n    right: 8px;\n    color: #000000a1;\n    font-size: 2rem;\n}\n\ninput#taskInput {\n    position: relative;\n    right: 37px;\n    width: 100%;\n    padding: 5px 5px 5px 30px;\n    background-color: var(--black);\n    border: none;\n    font-size: 1rem;\n    border-radius: 1rem;\n}\n\ninput#taskInput:focus-visible {\n    outline: none;\n    color: var(--white);\n    background-color: var(--black);\n    border-radius: 1rem;\n    border:none;\n}\n\n.enter-btn {\n    position: relative;\n    right: 75px;\n    border: none;\n    background-color: transparent;\n}\n\n.form {\n    display: block;\n    padding: 10px;\n    margin: 0 85px 0 20px;\n    background-color: var(--black);\n    border-radius: 1rem;\n}\n\n\n.form label {\n    padding: 0;\n    font-size: 0.9rem;\n}\n\n.form > input:first-of-type {\n    display: block;\n    margin-bottom: 15px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 1rem;\n    background: #000000a6;\n    color: white;\n    font-size: 1.5rem;\n}\n\ninput#dueDate {\n    margin-right: 20px;\n}\n\nlabel[for=\"taskDesc\"] {\n    display: block;\n    margin-top: 10px;\n}\n\ninput#taskDesc {\n    display: block;\n    background-color: transparent;\n    border: none;\n    width: 400px;\n    padding: 5px 10px;\n}\n\n#taskDesc:focus-visible {\n    outline: none;\n    color: var(--white);\n    background-color: black;\n    border-radius: 1rem;\n}\n\n.add-task {\n    font-family: 'Inconsolata', monospace;\n    font-size: 0.9rem;\n    font-weight: bold;\n    margin: 20px;\n    padding: 5px 10px;\n    background-color: var(--blue);\n    border: none;\n    color: white;\n    box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 5px;\n}\n\n.add-task:active {\n    background-color: var(--darkblue);\n}\n\n.submit-btn {\n    margin: 10px 5px;\n    background-color: var(--blue);\n    border: none;\n    border-radius: 0.2rem;\n    padding: 5px 10px;\n    color: #ffffffc4;\n    font-weight: bold;\n}\n\n.close-btn {\n    margin-left: 280px;\n    background-color: red;\n    border: none;\n    border-radius: 0.2rem;\n    padding: 5px 10px;\n    color: #ffffffc4;\n    font-weight: bold;\n}\n\n.project-item {\n    height: 32px;\n}\n\n.project-input-wrapper {\n    display: flex;\n    align-items: center;\n}\n\ninput#addProject {\n    margin: 10px 20px;\n    padding: 5px 10px;\n    background: var(--black);\n    border: none;\n    border-radius: 0.5rem;\n    outline: none;\n    color: white;\n}\n\ninput#addProject:focus-visible {\n    background-color: white;\n    color: black;\n}\n\n.project-input-wrapper > button {\n    background: white;\n    border: none;\n    border-radius: 100%;\n    margin-left: -10px;\n    width: 2rem;\n    height: 2rem;\n}\n\n.project-item-edit {\n    display: flex;\n    align-items: center;\n    padding: 0 20px;\n}\n\ninput#editInput {\n    background: white;\n    border: none;\n    border-radius: 0.5rem;\n    padding: 5px 10px;\n}\n\n.project-item-edit > button {\n    background: transparent;\n    border: none;\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 2rem;\n    height: 2rem;\n}\n\n.project-item-edit > button:hover {\n    background-color: var(--black);\n}\n\n.project-item-edit > .confirm-btn {\n    margin-left: 10px;\n}\n\n.project-item-edit > .cancel-btn:hover {\n    background-color: rgb(255,0,0,0.8);\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForm": () => (/* binding */ createForm),
/* harmony export */   "createInputEdit": () => (/* binding */ createInputEdit),
/* harmony export */   "createProjectsList": () => (/* binding */ createProjectsList),
/* harmony export */   "createTasksContainer": () => (/* binding */ createTasksContainer),
/* harmony export */   "createTasksHeader": () => (/* binding */ createTasksHeader),
/* harmony export */   "initializeWebsite": () => (/* binding */ initializeWebsite)
/* harmony export */ });
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler */ "./src/handler.js");
/* harmony import */ var _public_hamburger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/hamburger.png */ "./src/public/hamburger.png");
/* harmony import */ var _public_bin_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/bin.png */ "./src/public/bin.png");
/* harmony import */ var _public_editing_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/editing.png */ "./src/public/editing.png");
/* harmony import */ var _public_enter_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public/enter.png */ "./src/public/enter.png");
/* harmony import */ var _public_up_arrow_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./public/up-arrow-icon.png */ "./src/public/up-arrow-icon.png");
/* harmony import */ var _public_checkmark_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public/checkmark-icon.png */ "./src/public/checkmark-icon.png");
/* harmony import */ var _public_multiply_icon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public/multiply-icon.png */ "./src/public/multiply-icon.png");









const createParagraph = (text) => {
    const p = document.createElement("p");
    p.textContent = text;
    return p;
}

const createImage = (image) => {
    const img = new Image();
    img.src = image;

    return img;
}

const createList = (text) => {
    const li = document.createElement("li");
    li.textContent = text;

    return li;
}

const createInput = (id, type) => {
    const input = document.createElement("input");
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    input.setAttribute("type", type);

    return input;
}

const createLabel = (id, labelText) => {
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = labelText;

    return label;
}

const createTaskItem = (id, labelText, checked) => {
    const taskItem = document.createElement("div")
    taskItem.classList.add("task-item");
    taskItem.dataset.itemId = id;
    const input = createInput(id, "checkbox");

    if (checked == "true") {
        input.checked = true;
    }

    const label = createLabel(id, labelText);

    taskItem.appendChild(input);
    taskItem.appendChild(label);

    return taskItem;
}

const createMenuButton = (id, editBtnClass, deleteBtnClass) => {
    const menuButton = document.createElement("div");
    menuButton.classList.add("task-menu");
    menuButton.dataset.itemId = id;

    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    const editIcon = createImage(_public_editing_png__WEBPACK_IMPORTED_MODULE_3__);
    const deleteIcon = createImage(_public_bin_png__WEBPACK_IMPORTED_MODULE_2__);

    editBtn.classList.add(editBtnClass);
    deleteBtn.classList.add(deleteBtnClass)

    editBtn.appendChild(editIcon);
    deleteBtn.appendChild(deleteIcon);
    menuButton.appendChild(editBtn);
    menuButton.appendChild(deleteBtn);

    return menuButton;
}

const createTextInput = (id, labelText, placeholder="") => {
    const textInput = document.createElement("div");
    const input = createInput(id, "text");
    input.setAttribute("placeholder", placeholder);
    
    const label = createLabel(id, labelText);
    
    textInput.appendChild(label);
    textInput.appendChild(input);
    
    return textInput;
} 

const createOption = (value) => {
    const option = document.createElement("option");
    option.setAttribute("value", value.toLowerCase());
    option.textContent = value;

    return option;
}

const createForm = (titleValue, dueDateValue, priorityValue, descriptionValue, id="none" ) => {
    const form = document.createElement("div");
    form.classList.add("form");
    form.dataset.itemId = id;

    const taskTitle = createInput("taskTitle", "text");
    taskTitle.setAttribute("placeholder", "Task title...");
    const dueDateLabel = createLabel("dueDate", "Due Date: ");
    const dueDate = createInput("dueDate", "date");
    const priorityLabel = createLabel("priority", "Priority: ");
    const priority = document.createElement("select");
    priority.setAttribute("name", "priority");
    priority.setAttribute("id", "task-priority");
    const descriptionLabel = createLabel("taskDesc", "Notes:");
    const description = createInput("taskDesc", "text");
    description.setAttribute("placeholder", "insert your notes here");

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.classList.add("submit-btn");
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-btn");
    closeBtn.textContent = "Close";

    const highPriority = createOption("High");
    const normalPriority = createOption("Normal");
    const lowPriority = createOption("Low");

    taskTitle.value = titleValue;
    dueDate.value = dueDateValue;
    description.value = descriptionValue;

    // selected attribute will become the value of the priority
    switch (priorityValue) {
        case "high":
            highPriority.setAttribute("selected", true);
            break;
        case "normal":
            normalPriority.setAttribute("selected", true);
            break;
        case "low":
            lowPriority.setAttribute("selected", true);
            break;
        default:
            break;
    }
    
    priority.appendChild(highPriority);
    priority.appendChild(normalPriority);
    priority.appendChild(lowPriority);
    
    form.appendChild(taskTitle);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDate);
    form.appendChild(priorityLabel);
    form.appendChild(priority);
    form.appendChild(descriptionLabel);
    form.appendChild(description);
    form.appendChild(submitBtn);
    form.appendChild(closeBtn);

    return form;
}


const createHeader = () => {
    let taskRemaining = (0,_handler__WEBPACK_IMPORTED_MODULE_0__.whichActive)(_handler__WEBPACK_IMPORTED_MODULE_0__.projects).tasks.filter((task) => task.checked == "false").length;
    const header = document.createElement("header");
    const title = document.createElement('h1');
    const subtitle1 = createParagraph("Good Morning, Shiielty!")
    const subtitle2 = createParagraph(`You have ${taskRemaining} task left to do,`)
    const subtitle3 = createParagraph("Let's do it!")
    const projectNav = document.createElement("nav");
    const projectTitle = document.createElement("button");
    const projectMenu = document.createElement("button");
    const menuIcon = createImage(_public_hamburger_png__WEBPACK_IMPORTED_MODULE_1__);
    
    title.textContent = "Just Do It List";
    projectTitle.textContent = (0,_handler__WEBPACK_IMPORTED_MODULE_0__.whichActive)(_handler__WEBPACK_IMPORTED_MODULE_0__.projects).projectTitle;
    projectMenu.classList.add("projects-menu");
    menuIcon.classList.add("projects-menu");
    
    projectMenu.appendChild(menuIcon);
    
    projectNav.appendChild(projectTitle);
    projectNav.appendChild(projectMenu);
    
    header.appendChild(title);
    header.appendChild(subtitle1);
    header.appendChild(subtitle2);
    header.appendChild(subtitle3);
    header.appendChild(projectNav);
    
    return header;
}

const createTasksHeader = () => {
    const tasksHeader = document.createElement("div");
    const today = createList("Today"); 
    const tomorrow = createList("Tomorrow"); 
    const upcoming = createList("Upcoming"); 
    const someday = createList("Someday");

    tasksHeader.classList.add("task-header");
    today.classList.add("active");
    
    tasksHeader.appendChild(today);
    tasksHeader.appendChild(tomorrow);
    tasksHeader.appendChild(upcoming);
    tasksHeader.appendChild(someday);

    return tasksHeader
}

const createTasksContainer = () =>{
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "+ Add Task";
    addTaskBtn.classList.add("add-task");
    
    (0,_handler__WEBPACK_IMPORTED_MODULE_0__.whichActive)(_handler__WEBPACK_IMPORTED_MODULE_0__.projects).tasks.forEach((task) => {
        const taskId = (0,_handler__WEBPACK_IMPORTED_MODULE_0__.whichActive)(_handler__WEBPACK_IMPORTED_MODULE_0__.projects).tasks.indexOf(task);
        const taskTitle = task.title;
        const checkbox = createTaskItem(taskId, taskTitle, task.checked);

        checkbox.appendChild(createMenuButton(taskId, "edit-task-btn", "delete-task-btn"));
        taskContainer.appendChild(checkbox);
    })
    
    taskContainer.appendChild(addTaskBtn);

    return taskContainer
}

const createMain = () => {    
    const main = document.createElement("main");

    main.appendChild(createTasksHeader());
    main.appendChild(createTasksContainer());

    return main;
}

const createProjectsList = () => {
    const listWrapper = document.createElement("div");

    const projectListHeading = document.createElement("h2")
    projectListHeading.textContent = `Project (${_handler__WEBPACK_IMPORTED_MODULE_0__.projects.length}):`;
    listWrapper.appendChild(projectListHeading);

    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("project-input-wrapper");
    const projectInput = createInput("addProject", "text");
    const arrowIcon = createImage(_public_up_arrow_icon_png__WEBPACK_IMPORTED_MODULE_5__);
    const inputBtn = document.createElement("button");
    
    projectInput.setAttribute("placeholder", "+ Create new project");
    inputBtn.classList.add("add-project-btn");
    
    _handler__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
        const projectId = _handler__WEBPACK_IMPORTED_MODULE_0__.projects.indexOf(project);
        const item = document.createElement("div");
        item.classList.add("project-item");
        item.textContent = project.projectTitle;
        item.dataset.itemId = projectId;
        
        item.appendChild(createMenuButton(projectId, "edit-project-btn", "delete-project-btn"));
        listWrapper.appendChild(item);
    })

    inputBtn.appendChild(arrowIcon);
    inputWrapper.appendChild(projectInput);
    inputWrapper.appendChild(inputBtn);
    listWrapper.appendChild(inputWrapper);

    return listWrapper;
}

const createInputEdit = (id, inputValue) => {
    const inputEdit = document.createElement("div");
    const input = createInput("editInput", "text");
    const confirmBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    const checkIcon = createImage(_public_checkmark_icon_png__WEBPACK_IMPORTED_MODULE_6__);
    const multiplyIcon = createImage(_public_multiply_icon_png__WEBPACK_IMPORTED_MODULE_7__);

    inputEdit.classList.add("project-item-edit");
    confirmBtn.classList.add("confirm-btn");
    cancelBtn.classList.add("cancel-btn");

    inputEdit.dataset.itemId = id;
    input.value = inputValue;

    confirmBtn.appendChild(checkIcon);
    cancelBtn.appendChild(multiplyIcon);
    inputEdit.appendChild(input);
    inputEdit.appendChild(confirmBtn);
    inputEdit.appendChild(cancelBtn);

    return inputEdit;
}

const initializeWebsite = () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.appendChild(createHeader());
    wrapper.appendChild(createMain());

    return wrapper;
}



/***/ }),

/***/ "./src/handler.js":
/*!************************!*\
  !*** ./src/handler.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "changeProject": () => (/* binding */ changeProject),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "removeTask": () => (/* binding */ removeTask),
/* harmony export */   "test": () => (/* binding */ test),
/* harmony export */   "whichActive": () => (/* binding */ whichActive)
/* harmony export */ });
// Todos and Projects
const projects = [
    {
        "projectTitle": "Project 1",
        "tasks": [
            {
                "title": "Task 1",
                "dueDate": "2022-01-01",
                "priority": "high",
                "description": "This is description of task 1",
                "checked": "false"
            },
            {
                "title": "Task 2",
                "dueDate": "2022-01-02",
                "priority": "high",
                "description": "This is description of task 2",
                "checked": "false"
            },
            {
                "title": "Task 3",
                "dueDate": "2022-03-01",
                "priority": "low",
                "description": "This is description of task 3",
                "checked": "false"
            },
            {
                "title": "It works yay!!",
                "dueDate": "2022-04-01",
                "priority": "low",
                "description": "This is description of task 4",
                "checked": "false"
            }, ],
        "status": "inactive",
    },
    {
        "projectTitle": "Project 2",
        "tasks": [
            {
                "title": "Task 99",
                "dueDate": "2032-04-01",
                "priority": "low",
                "description": "This is description of task 99",
                "checked": "true"
            },
            {
                "title": "Task 100",
                "dueDate": "2032-04-02",
                "priority": "low",
                "description": "This is description of task 100",
                "checked": "false"
            },
            {
                "title": "Task 101",
                "dueDate": "2032-04-03",
                "priority": "high",
                "description": "This is description of task 101",
                "checked": "true"
            },
            {
                "title": "Something isn't right",
                "dueDate": "2022-04-10",
                "priority": "high",
                "description": "This is description of task 1000",
                "checked": "false"
            }, ],
        "status": "active",
    }
]; 

// Todos function factory
const Task = (title, dueDate, priority, description, checked) => {
    return { title, dueDate, priority, description, checked }
}

// Project function factory
const Project = (projectTitle) => {
    const tasks = [];
    const status = "inactive";

    return {projectTitle, tasks, status}
}

const addTask = (title, dueDate, priority, description) => {
    const currentProject = whichActive(projects);
    const task = Task(title, dueDate, priority, description, "false");
    currentProject.tasks.push(task);
}

const editTask = (title, dueDate, priority, description, id) => {
    const currentProject = whichActive(projects);
    currentProject.tasks[id].title = title;
    currentProject.tasks[id].dueDate = dueDate;
    currentProject.tasks[id].priority = priority;
    currentProject.tasks[id].description = description;
}

const removeTask = (id) => {
    const currentProject = whichActive(projects);
    currentProject.tasks.splice(id, 1);
}

const addProject = (title, arr) => {
    const project = Project(title);
    arr.push(project);
    if (arr.length === 1) arr[0].status = "active";
}

const whichActive = (projects) => {
    let activeProject = projects.find(project => project.status == "active");
    if (activeProject != undefined) {
        return activeProject;
    } else {
        projects[0].status = "active";
        activeProject = projects.find(project => project.status == "active");
        return activeProject;
    }
}

const changeProject = (targetProject) => {
    const currentProject = whichActive(projects);
    currentProject.status = "inactive";
    targetProject.status = "active";
}

const removeProject = (index) => {
    projects.splice(index, 1);
}


const test = () => console.log("Hello friend.");



/***/ }),

/***/ "./src/public/bin.png":
/*!****************************!*\
  !*** ./src/public/bin.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6fd29509719f079bfd7.png";

/***/ }),

/***/ "./src/public/checkmark-icon.png":
/*!***************************************!*\
  !*** ./src/public/checkmark-icon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a302a11767ccb3f212db.png";

/***/ }),

/***/ "./src/public/editing.png":
/*!********************************!*\
  !*** ./src/public/editing.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e42c3c63c6b97a10746d.png";

/***/ }),

/***/ "./src/public/enter.png":
/*!******************************!*\
  !*** ./src/public/enter.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "980bff6e9c097594b70c.png";

/***/ }),

/***/ "./src/public/hamburger.png":
/*!**********************************!*\
  !*** ./src/public/hamburger.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25fed70b111094dad80c.png";

/***/ }),

/***/ "./src/public/multiply-icon.png":
/*!**************************************!*\
  !*** ./src/public/multiply-icon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bb670bc69146c9434cf.png";

/***/ }),

/***/ "./src/public/up-arrow-icon.png":
/*!**************************************!*\
  !*** ./src/public/up-arrow-icon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c0cf42e4e511be0384b.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handler */ "./src/handler.js");




const content = document.querySelector("#content");
let isInputActive = false;

content.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.initializeWebsite)());

const renderAll = () => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.remove();
    content.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.initializeWebsite)());
    isInputActive = false;
}

const renderProjectList = () => {
    const main = document.querySelector("main");
    main.replaceChildren((0,_dom__WEBPACK_IMPORTED_MODULE_1__.createProjectsList)());
    changeProjectTitleDisplay();
    isInputActive = false;
}

const cursorFocus = (element) => {
    const target = element;
    target.focus();
    target.select();
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const displayOnHover = (items) => {
    items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            if (!isInputActive) {
                const elementId = item.dataset.itemId;
                const element = document.querySelector(`.task-menu[data-item-id="${elementId}"]`);
                element.classList.add("task-menu-visible");
            }
        })
        item.addEventListener("mouseleave", () => {
            const elementId = item.dataset.itemId;
            const element = document.querySelector(`.task-menu[data-item-id="${elementId}"]`);
            element.classList.remove("task-menu-visible");
        })
    })
}

const changeProjectTitleDisplay = () => {
    const projectName = document.querySelector("nav>button:first-of-type")
    projectName.textContent = (0,_handler__WEBPACK_IMPORTED_MODULE_2__.whichActive)(_handler__WEBPACK_IMPORTED_MODULE_2__.projects).projectTitle;
}

const todayDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = `${yyyy}-${mm}-${dd}`;

    return today;
}

content.addEventListener("click", (e) => {
    if (e.target.className === "projects-menu") {
        isInputActive = false;
        const main = document.querySelector("main");
        if (main.childNodes.length > 1){
            main.replaceChildren((0,_dom__WEBPACK_IMPORTED_MODULE_1__.createProjectsList)());
        } else {
            main.replaceChildren((0,_dom__WEBPACK_IMPORTED_MODULE_1__.createTasksHeader)(), (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createTasksContainer)());
            changeProjectTitleDisplay();
        }
    }

    if (e.target.className == "edit-task-btn") {
        isInputActive = true;
        const targetId = e.target.parentNode.dataset.itemId;
        const checklist = e.target.parentNode.parentNode;
        const activeProject = (0,_handler__WEBPACK_IMPORTED_MODULE_2__.whichActive)(_handler__WEBPACK_IMPORTED_MODULE_2__.projects);
        insertAfter((0,_dom__WEBPACK_IMPORTED_MODULE_1__.createForm)(activeProject.tasks[targetId].title, activeProject.tasks[targetId].dueDate, activeProject.tasks[targetId].priority, activeProject.tasks[targetId].description, targetId), checklist);
        checklist.style.display = "none";
    }
    
    if (e.target.className === "delete-task-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        (0,_handler__WEBPACK_IMPORTED_MODULE_2__.removeTask)(targetId);
        renderAll();
    }
    
    if (e.target.className === "submit-btn") {
        const formId = e.target.parentNode.attributes[1].value;
        const taskTitle = document.querySelector("input#taskTitle");
        const taskDueDate = document.querySelector("input#dueDate");
        const taskPriority = document.querySelector("select#task-priority");
        const taskDescription = document.querySelector("input#taskDesc");
        const title = taskTitle.value;
        const dueDate = taskDueDate.value;
        const priority = taskPriority.value;
        const description = taskDescription.value;
        const taskTitleTrim = title.trim();
        if (title != "" && taskTitleTrim != "") {
            if (formId === "none") {
                (0,_handler__WEBPACK_IMPORTED_MODULE_2__.addTask)(title, dueDate, priority, description);
            } else {
                (0,_handler__WEBPACK_IMPORTED_MODULE_2__.editTask)(title, dueDate, priority, description, formId);
            }
            renderAll();
        }
    }

    if (e.target.className === "add-task") {
        isInputActive = true;
        insertAfter((0,_dom__WEBPACK_IMPORTED_MODULE_1__.createForm)("", todayDate(), "normal", ""), e.originalTarget.parentNode);
        e.originalTarget.style.display = "none";
    }

    if (e.target.className === "close-btn") {
        isInputActive = false;
        const formId = e.target.parentNode.attributes[1].value;

        if (formId === "none") {
            const addTaskBtn = document.querySelector(".add-task");
            addTaskBtn.style.display = "block";
            e.target.parentNode.remove();
        } else {
            const checklist = e.target.parentNode.previousSibling;
            checklist.style.display = "flex";
            e.target.parentNode.remove();
        }
    }

    if (e.target.className === "project-item") {
        const targetId = e.target.dataset.itemId;
        (0,_handler__WEBPACK_IMPORTED_MODULE_2__.changeProject)(_handler__WEBPACK_IMPORTED_MODULE_2__.projects[targetId]);
        renderAll();
    }

    if (e.target.className === "add-project-btn") {
        const addProjectInput = document.querySelector("#addProject");
        const projectTitle = addProjectInput.value;
        const projectTitleTrim = projectTitle.trim();

        if (projectTitle != "" && projectTitleTrim != "") {
            (0,_handler__WEBPACK_IMPORTED_MODULE_2__.addProject)(projectTitle, _handler__WEBPACK_IMPORTED_MODULE_2__.projects);
            renderProjectList();
        }
    }
    
    if (e.target.className === "delete-project-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        (0,_handler__WEBPACK_IMPORTED_MODULE_2__.removeProject)(targetId);
        renderProjectList();
    }

    if (e.target.className === "edit-project-btn") {
        isInputActive = true;
        const targetList = e.target.parentNode.parentNode;
        const targetId = e.target.parentNode.dataset.itemId;
        targetList.style.display = "none";
        insertAfter((0,_dom__WEBPACK_IMPORTED_MODULE_1__.createInputEdit)(targetId, _handler__WEBPACK_IMPORTED_MODULE_2__.projects[targetId].projectTitle), targetList);
        cursorFocus(targetList.nextSibling.firstChild);
    }

    if (e.target.className === "confirm-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        const editInput = e.target.parentNode.firstChild;
        const projectTitle = editInput.value;
        const projectTitleTrim = projectTitle.trim();

        if (projectTitle != "" && projectTitleTrim != "") {
            _handler__WEBPACK_IMPORTED_MODULE_2__.projects[targetId].projectTitle = projectTitle;
            console.log(_handler__WEBPACK_IMPORTED_MODULE_2__.projects)
            renderProjectList();
        }
    }

    if (e.target.className === "cancel-btn") {
        renderProjectList();
    }
})

content.addEventListener("mouseover", (e) => {
    if ((e.target.className === "task-item" || e.target.className === "project-item") && isInputActive == false) {
        switch (e.target.className) {
            case "task-item":
                const taskItems = document.querySelectorAll(".task-item");
                displayOnHover(taskItems);
                break;
            case "project-item":
                const projectItems = document.querySelectorAll(".project-item");
                displayOnHover(projectItems);
                break
            default:
                break;
        }
    }
})

content.addEventListener("change", (e) => {
    if (e.target.type == "checkbox") {
        if (e.target.checked) {
            (0,_handler__WEBPACK_IMPORTED_MODULE_2__.whichActive)(_handler__WEBPACK_IMPORTED_MODULE_2__.projects).tasks[e.target.id].checked = "true";
            
        } else {
            (0,_handler__WEBPACK_IMPORTED_MODULE_2__.whichActive)(_handler__WEBPACK_IMPORTED_MODULE_2__.projects).tasks[e.target.id].checked = "false";
        }
        
        const headerSubtitle2 = document.querySelector("header>p:nth-of-type(2)");
        let taskRemaining = (0,_handler__WEBPACK_IMPORTED_MODULE_2__.whichActive)(_handler__WEBPACK_IMPORTED_MODULE_2__.projects).tasks.filter((task) => task.checked == "false").length;
        headerSubtitle2.textContent = `You have ${taskRemaining} task left to do,`;
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxxR0FBcUcsSUFBSSxtQ0FBbUMsSUFBSSwyQkFBMkIsSUFBSSxtQkFBbUIsNkNBQTZDLHVDQUF1QyxxQ0FBcUMsYUFBYSx1QkFBdUIsa0NBQWtDLHlCQUF5QiwwQkFBMEIsc0JBQXNCLHVCQUF1Qix5Q0FBeUMsMENBQTBDLEdBQUcsVUFBVSxnQkFBZ0IsaUJBQWlCLHFDQUFxQyx3Q0FBd0Msc0JBQXNCLEdBQUcsY0FBYyx1Q0FBdUMsdUJBQXVCLHdCQUF3QixxQkFBcUIsR0FBRyxZQUFZLG9CQUFvQiw2QkFBNkIsd0NBQXdDLDJCQUEyQixHQUFHLFlBQVksZ0JBQWdCLEdBQUcsUUFBUSxtQkFBbUIsMEJBQTBCLDRDQUE0Qyw2Q0FBNkMsMEJBQTBCLEdBQUcsaUJBQWlCLDJDQUEyQyxzQkFBc0IsMEJBQTBCLHlCQUF5QixHQUFHLGdCQUFnQiw0Q0FBNEMsd0JBQXdCLG1CQUFtQix1QkFBdUIscUJBQXFCLEdBQUcsU0FBUyxzQkFBc0IseUJBQXlCLG9CQUFvQixzQkFBc0IsZUFBZSxHQUFHLFlBQVksc0JBQXNCLEdBQUcsa0JBQWtCLDJCQUEyQixHQUFHLG1CQUFtQixtQkFBbUIsd0JBQXdCLG1CQUFtQixvQ0FBb0MsNENBQTRDLHdCQUF3QiwyQkFBMkIsR0FBRyx5QkFBeUIscUNBQXFDLHNCQUFzQixHQUFHLFNBQVMsbUJBQW1CLGtCQUFrQixHQUFHLGtCQUFrQixvQkFBb0IsaUNBQWlDLHdCQUF3Qix3QkFBd0IsMkJBQTJCLEdBQUcsWUFBWSx1QkFBdUIsR0FBRyxrQkFBa0Isb0JBQW9CLDRCQUE0QixnQkFBZ0IsMkJBQTJCLDJDQUEyQyxtQ0FBbUMsMkJBQTJCLHVCQUF1QixHQUFHLDBCQUEwQiwwQkFBMEIsd0JBQXdCLEdBQUcsa0RBQWtELG9CQUFvQiwwQkFBMEIsc0JBQXNCLG1CQUFtQiw2QkFBNkIsOERBQThELG9DQUFvQyxHQUFHLDJCQUEyQix3QkFBd0IsR0FBRyxnQkFBZ0Isb0JBQW9CLDRCQUE0QixHQUFHLHdCQUF3QixvQkFBb0IsZUFBZSxHQUFHLDhCQUE4Qix5QkFBeUIsaUJBQWlCLHVCQUF1QixzQkFBc0IsR0FBRyxxQkFBcUIseUJBQXlCLGtCQUFrQixrQkFBa0IsZ0NBQWdDLHFDQUFxQyxtQkFBbUIsc0JBQXNCLDBCQUEwQixHQUFHLG1DQUFtQyxvQkFBb0IsMEJBQTBCLHFDQUFxQywwQkFBMEIsa0JBQWtCLEdBQUcsZ0JBQWdCLHlCQUF5QixrQkFBa0IsbUJBQW1CLG9DQUFvQyxHQUFHLFdBQVcscUJBQXFCLG9CQUFvQiw0QkFBNEIscUNBQXFDLDBCQUEwQixHQUFHLG1CQUFtQixpQkFBaUIsd0JBQXdCLEdBQUcsaUNBQWlDLHFCQUFxQiwwQkFBMEIsd0JBQXdCLG1CQUFtQiwwQkFBMEIsNEJBQTRCLG1CQUFtQix3QkFBd0IsR0FBRyxtQkFBbUIseUJBQXlCLEdBQUcsNkJBQTZCLHFCQUFxQix1QkFBdUIsR0FBRyxvQkFBb0IscUJBQXFCLG9DQUFvQyxtQkFBbUIsbUJBQW1CLHdCQUF3QixHQUFHLDZCQUE2QixvQkFBb0IsMEJBQTBCLDhCQUE4QiwwQkFBMEIsR0FBRyxlQUFlLDRDQUE0Qyx3QkFBd0Isd0JBQXdCLG1CQUFtQix3QkFBd0Isb0NBQW9DLG1CQUFtQixtQkFBbUIsaURBQWlELEdBQUcsc0JBQXNCLHdDQUF3QyxHQUFHLGlCQUFpQix1QkFBdUIsb0NBQW9DLG1CQUFtQiw0QkFBNEIsd0JBQXdCLHVCQUF1Qix3QkFBd0IsR0FBRyxnQkFBZ0IseUJBQXlCLDRCQUE0QixtQkFBbUIsNEJBQTRCLHdCQUF3Qix1QkFBdUIsd0JBQXdCLEdBQUcsbUJBQW1CLG1CQUFtQixHQUFHLDRCQUE0QixvQkFBb0IsMEJBQTBCLEdBQUcsc0JBQXNCLHdCQUF3Qix3QkFBd0IsK0JBQStCLG1CQUFtQiw0QkFBNEIsb0JBQW9CLG1CQUFtQixHQUFHLG9DQUFvQyw4QkFBOEIsbUJBQW1CLEdBQUcscUNBQXFDLHdCQUF3QixtQkFBbUIsMEJBQTBCLHlCQUF5QixrQkFBa0IsbUJBQW1CLEdBQUcsd0JBQXdCLG9CQUFvQiwwQkFBMEIsc0JBQXNCLEdBQUcscUJBQXFCLHdCQUF3QixtQkFBbUIsNEJBQTRCLHdCQUF3QixHQUFHLGlDQUFpQyw4QkFBOEIsbUJBQW1CLDBCQUEwQixvQkFBb0IsMEJBQTBCLDhCQUE4QixrQkFBa0IsbUJBQW1CLEdBQUcsdUNBQXVDLHFDQUFxQyxHQUFHLHVDQUF1Qyx3QkFBd0IsR0FBRyw0Q0FBNEMseUNBQXlDLEdBQUcscUJBQXFCO0FBQ3pwZTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmaUU7QUFDdkI7QUFDUDtBQUNLO0FBQ0Q7QUFDVTtBQUNHO0FBQ0Y7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUNBQWlDLGdEQUFJO0FBQ3JDLG1DQUFtQyw0Q0FBRzs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQSx3QkFBd0IscURBQVcsQ0FBQyw4Q0FBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZUFBZTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxrREFBSTtBQUNyQztBQUNBO0FBQ0EsK0JBQStCLHFEQUFXLENBQUMsOENBQVE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBVyxDQUFDLDhDQUFRO0FBQ3hCLHVCQUF1QixxREFBVyxDQUFDLDhDQUFRO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxxREFBZSxDQUFDO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxzREFBTztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBZ0I7QUFDcEIsMEJBQTBCLHNEQUFnQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHVEQUFTO0FBQzNDLHFDQUFxQyxzREFBUTs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDOEc7QUFDVDs7QUFFMUg7QUFDQTs7QUFFQSxvQkFBb0IsdURBQWlCOztBQUVyQztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQWlCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qix3REFBa0I7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsVUFBVTtBQUM3RjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwrRUFBK0UsVUFBVTtBQUN6RjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixxREFBVyxDQUFDLDhDQUFRO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDs7QUFFQSxlQUFlLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHdEQUFrQjtBQUNuRCxVQUFVO0FBQ1YsaUNBQWlDLHVEQUFpQixJQUFJLDBEQUFvQjtBQUMxRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscURBQVcsQ0FBQyw4Q0FBUTtBQUNsRCxvQkFBb0IsZ0RBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaURBQU87QUFDdkIsY0FBYztBQUNkLGdCQUFnQixrREFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGdEQUFVO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsdURBQWEsQ0FBQyw4Q0FBUTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxvREFBVSxlQUFlLDhDQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWE7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFlLFdBQVcsOENBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSw4Q0FBUTtBQUNwQix3QkFBd0IsOENBQVE7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFXLENBQUMsOENBQVE7QUFDaEM7QUFDQSxVQUFVO0FBQ1YsWUFBWSxxREFBVyxDQUFDLDhDQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixxREFBVyxDQUFDLDhDQUFRO0FBQ2hELGtEQUFrRCxlQUFlO0FBQ2pFO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluY29uc29sYXRhOndnaHRAMzAwOzQwMDs3MDAmZmFtaWx5PUlua251dCtBbnRpcXVhOndnaHRAMzAwOzQwMDs3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxuZm9udC1mYW1pbHk6ICdJbmtudXQgQW50aXF1YScsIHNlcmlmO1xcbmZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tYmxhY2s6ICMxNjRFNjM7XFxuICAgIC0tZ3JleTogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgLS1kZWVwc2VhOiAjMTU1RTc1O1xcbiAgICAtLWRhcmtibHVlOiAjMEU3NDkwO1xcbiAgICAtLWJsdWU6ICMwNkI2RDQ7XFxuICAgIC0td2hpdGU6ICNGRkZGRkY7XFxuICAgIC0td2hpdGU4OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIC0td2hpdGU1OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IFxcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBzZWEpO1xcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbmgxLFxcbnAge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmgyIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td2hpdGU1KTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuaGVhZGVyID4gaDEge1xcbiAgICBmb250LWZhbWlseTogJ0lua251dCBBbnRpcXVhJywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgPiBwIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiAwIDg1cHg7XFxufVxcblxcbm5hdiB7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IC0zNHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24gPiBpbWcge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICAgIGhlaWdodDogMzRweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGU4KTtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbWcge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ncmV5KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGU1KTtcXG59XFxuXFxuXFxubWFpbiB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgICBtYXJnaW46IDEwcHggMjAwcHggMjVweCAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGU1KTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnRhc2staGVhZGVyIC5hY3RpdmUge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyID4gLnRhc2staXRlbSxcXG4ucHJvamVjdC1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZTgpXFxufVxcblxcbi50YXNrLWNvbnRhaW5lciA+IC50YXNrLWl0ZW06aG92ZXIsXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgbGFiZWwge1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuLnRhc2stbWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1hcmdpbjogMCAxMHB4IDAgYXV0bztcXG59XFxuXFxuLnRhc2stbWVudS12aXNpYmxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwidGFza0lucHV0XFxcIl0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiA4cHg7XFxuICAgIGNvbG9yOiAjMDAwMDAwYTE7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuaW5wdXQjdGFza0lucHV0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogMzdweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbmlucHV0I3Rhc2tJbnB1dDpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBib3JkZXI6bm9uZTtcXG59XFxuXFxuLmVudGVyLWJ0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDc1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMCA4NXB4IDAgMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG5cXG4uZm9ybSBsYWJlbCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uZm9ybSA+IGlucHV0OmZpcnN0LW9mLXR5cGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMGE2O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5pbnB1dCNkdWVEYXRlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcInRhc2tEZXNjXFxcIl0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuaW5wdXQjdGFza0Rlc2Mge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuI3Rhc2tEZXNjOmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41KSAxcHggMXB4IDVweDtcXG59XFxuXFxuLmFkZC10YXNrOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgICBtYXJnaW46IDEwcHggNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZmM0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyODBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmYzQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQjYWRkUHJvamVjdCB7XFxuICAgIG1hcmdpbjogMTBweCAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5pbnB1dCNhZGRQcm9qZWN0OmZvY3VzLXZpc2libGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1pbnB1dC13cmFwcGVyID4gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLWVkaXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbmlucHV0I2VkaXRJbnB1dCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0tZWRpdCA+IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLWVkaXQgPiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0tZWRpdCA+IC5jb25maXJtLWJ0biB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLWVkaXQgPiAuY2FuY2VsLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMCwwLDAuOCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltd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LG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW5jb25zb2xhdGE6d2dodEAzMDA7NDAwOzcwMCZmYW1pbHk9SW5rbnV0K0FudGlxdWE6d2dodEAzMDA7NDAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXG5mb250LWZhbWlseTogJ0lua251dCBBbnRpcXVhJywgc2VyaWY7XFxuZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1ibGFjazogIzE2NEU2MztcXG4gICAgLS1ncmV5OiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICAtLWRlZXBzZWE6ICMxNTVFNzU7XFxuICAgIC0tZGFya2JsdWU6ICMwRTc0OTA7XFxuICAgIC0tYmx1ZTogIzA2QjZENDtcXG4gICAgLS13aGl0ZTogI0ZGRkZGRjtcXG4gICAgLS13aGl0ZTg6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgLS13aGl0ZTU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgXFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcHNlYSk7XFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuaDEsXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDIge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13aGl0ZTUpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG5oZWFkZXIgPiBoMSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5rbnV0IEFudGlxdWEnLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciA+IHAge1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgODVweDtcXG59XFxuXFxubmF2IHtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogLTM0cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbiA+IGltZyB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZTgpO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmltZyB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWdyZXkpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZTUpO1xcbn1cXG5cXG5cXG5tYWluIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIG1hcmdpbjogMTBweCAyMDBweCAyNXB4IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZTUpO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFzay1oZWFkZXIgLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgPiAudGFzay1pdGVtLFxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlOClcXG59XFxuXFxuLnRhc2stY29udGFpbmVyID4gLnRhc2staXRlbTpob3ZlcixcXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBsYWJlbCB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG4udGFzay1tZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWFyZ2luOiAwIDEwcHggMCBhdXRvO1xcbn1cXG5cXG4udGFzay1tZW51LXZpc2libGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJ0YXNrSW5wdXRcXFwiXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDhweDtcXG4gICAgY29sb3I6ICMwMDAwMDBhMTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5pbnB1dCN0YXNrSW5wdXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiAzN3B4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuaW5wdXQjdGFza0lucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlcjpub25lO1xcbn1cXG5cXG4uZW50ZXItYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogNzVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwIDg1cHggMCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcblxcbi5mb3JtIGxhYmVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5mb3JtID4gaW5wdXQ6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmlucHV0I2R1ZURhdGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwidGFza0Rlc2NcXFwiXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5pbnB1dCN0YXNrRGVzYyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG4jdGFza0Rlc2M6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUpIDFweCAxcHggNXB4O1xcbn1cXG5cXG4uYWRkLXRhc2s6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbn1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICAgIG1hcmdpbjogMTBweCA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmYzQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgY29sb3I6ICNmZmZmZmZjNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbnB1dCNhZGRQcm9qZWN0IHtcXG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmlucHV0I2FkZFByb2plY3Q6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0LXdyYXBwZXIgPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0tZWRpdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuaW5wdXQjZWRpdElucHV0IHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbS1lZGl0ID4gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0tZWRpdCA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG59XFxuXFxuLnByb2plY3QtaXRlbS1lZGl0ID4gLmNvbmZpcm0tYnRuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0tZWRpdCA+IC5jYW5jZWwtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwwLDAsMC44KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0cywgd2hpY2hBY3RpdmUsIHRlc3QsIGFkZFRhc2sgfSBmcm9tICcuL2hhbmRsZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9wdWJsaWMvaGFtYnVyZ2VyLnBuZyc7XG5pbXBvcnQgQmluIGZyb20gJy4vcHVibGljL2Jpbi5wbmcnO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9wdWJsaWMvZWRpdGluZy5wbmcnO1xuaW1wb3J0IEVudGVyIGZyb20gJy4vcHVibGljL2VudGVyLnBuZyc7XG5pbXBvcnQgVXBBcnJvdyBmcm9tICcuL3B1YmxpYy91cC1hcnJvdy1pY29uLnBuZyc7XG5pbXBvcnQgQ2hlY2ttYXJrIGZyb20gJy4vcHVibGljL2NoZWNrbWFyay1pY29uLnBuZyc7XG5pbXBvcnQgTXVsdGlwbHkgZnJvbSAnLi9wdWJsaWMvbXVsdGlwbHktaWNvbi5wbmcnO1xuXG5jb25zdCBjcmVhdGVQYXJhZ3JhcGggPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gcDtcbn1cblxuY29uc3QgY3JlYXRlSW1hZ2UgPSAoaW1hZ2UpID0+IHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gaW1hZ2U7XG5cbiAgICByZXR1cm4gaW1nO1xufVxuXG5jb25zdCBjcmVhdGVMaXN0ID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgICByZXR1cm4gbGk7XG59XG5cbmNvbnN0IGNyZWF0ZUlucHV0ID0gKGlkLCB0eXBlKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgaWQpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XG5cbiAgICByZXR1cm4gaW5wdXQ7XG59XG5cbmNvbnN0IGNyZWF0ZUxhYmVsID0gKGlkLCBsYWJlbFRleHQpID0+IHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaWQpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuXG4gICAgcmV0dXJuIGxhYmVsO1xufVxuXG5jb25zdCBjcmVhdGVUYXNrSXRlbSA9IChpZCwgbGFiZWxUZXh0LCBjaGVja2VkKSA9PiB7XG4gICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2staXRlbVwiKTtcbiAgICB0YXNrSXRlbS5kYXRhc2V0Lml0ZW1JZCA9IGlkO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoaWQsIFwiY2hlY2tib3hcIik7XG5cbiAgICBpZiAoY2hlY2tlZCA9PSBcInRydWVcIikge1xuICAgICAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUxhYmVsKGlkLCBsYWJlbFRleHQpO1xuXG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgIHJldHVybiB0YXNrSXRlbTtcbn1cblxuY29uc3QgY3JlYXRlTWVudUJ1dHRvbiA9IChpZCwgZWRpdEJ0bkNsYXNzLCBkZWxldGVCdG5DbGFzcykgPT4ge1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stbWVudVwiKTtcbiAgICBtZW51QnV0dG9uLmRhdGFzZXQuaXRlbUlkID0gaWQ7XG5cbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgY29uc3QgZWRpdEljb24gPSBjcmVhdGVJbWFnZShFZGl0KTtcbiAgICBjb25zdCBkZWxldGVJY29uID0gY3JlYXRlSW1hZ2UoQmluKTtcblxuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChlZGl0QnRuQ2xhc3MpO1xuICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKGRlbGV0ZUJ0bkNsYXNzKVxuXG4gICAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgIG1lbnVCdXR0b24uYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgbWVudUJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgcmV0dXJuIG1lbnVCdXR0b247XG59XG5cbmNvbnN0IGNyZWF0ZVRleHRJbnB1dCA9IChpZCwgbGFiZWxUZXh0LCBwbGFjZWhvbGRlcj1cIlwiKSA9PiB7XG4gICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KGlkLCBcInRleHRcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgcGxhY2Vob2xkZXIpO1xuICAgIFxuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwoaWQsIGxhYmVsVGV4dCk7XG4gICAgXG4gICAgdGV4dElucHV0LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICB0ZXh0SW5wdXQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0SW5wdXQ7XG59IFxuXG5jb25zdCBjcmVhdGVPcHRpb24gPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB2YWx1ZS50b0xvd2VyQ2FzZSgpKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSB2YWx1ZTtcblxuICAgIHJldHVybiBvcHRpb247XG59XG5cbmNvbnN0IGNyZWF0ZUZvcm0gPSAodGl0bGVWYWx1ZSwgZHVlRGF0ZVZhbHVlLCBwcmlvcml0eVZhbHVlLCBkZXNjcmlwdGlvblZhbHVlLCBpZD1cIm5vbmVcIiApID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtXCIpO1xuICAgIGZvcm0uZGF0YXNldC5pdGVtSWQgPSBpZDtcblxuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGNyZWF0ZUlucHV0KFwidGFza1RpdGxlXCIsIFwidGV4dFwiKTtcbiAgICB0YXNrVGl0bGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJUYXNrIHRpdGxlLi4uXCIpO1xuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGNyZWF0ZUxhYmVsKFwiZHVlRGF0ZVwiLCBcIkR1ZSBEYXRlOiBcIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGNyZWF0ZUlucHV0KFwiZHVlRGF0ZVwiLCBcImRhdGVcIik7XG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGNyZWF0ZUxhYmVsKFwicHJpb3JpdHlcIiwgXCJQcmlvcml0eTogXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXByaW9yaXR5XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBjcmVhdGVMYWJlbChcInRhc2tEZXNjXCIsIFwiTm90ZXM6XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gY3JlYXRlSW5wdXQoXCJ0YXNrRGVzY1wiLCBcInRleHRcIik7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJpbnNlcnQgeW91ciBub3RlcyBoZXJlXCIpO1xuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWJ0blwiKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ0blwiKTtcbiAgICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwiQ2xvc2VcIjtcblxuICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGNyZWF0ZU9wdGlvbihcIkhpZ2hcIik7XG4gICAgY29uc3Qgbm9ybWFsUHJpb3JpdHkgPSBjcmVhdGVPcHRpb24oXCJOb3JtYWxcIik7XG4gICAgY29uc3QgbG93UHJpb3JpdHkgPSBjcmVhdGVPcHRpb24oXCJMb3dcIik7XG5cbiAgICB0YXNrVGl0bGUudmFsdWUgPSB0aXRsZVZhbHVlO1xuICAgIGR1ZURhdGUudmFsdWUgPSBkdWVEYXRlVmFsdWU7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSBkZXNjcmlwdGlvblZhbHVlO1xuXG4gICAgLy8gc2VsZWN0ZWQgYXR0cmlidXRlIHdpbGwgYmVjb21lIHRoZSB2YWx1ZSBvZiB0aGUgcHJpb3JpdHlcbiAgICBzd2l0Y2ggKHByaW9yaXR5VmFsdWUpIHtcbiAgICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgICAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibm9ybWFsXCI6XG4gICAgICAgICAgICBub3JtYWxQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibG93XCI6XG4gICAgICAgICAgICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIFxuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobm9ybWFsUHJpb3JpdHkpO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcbiAgICBcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuICAgIHJldHVybiBmb3JtO1xufVxuXG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBsZXQgdGFza1JlbWFpbmluZyA9IHdoaWNoQWN0aXZlKHByb2plY3RzKS50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY2hlY2tlZCA9PSBcImZhbHNlXCIpLmxlbmd0aDtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBzdWJ0aXRsZTEgPSBjcmVhdGVQYXJhZ3JhcGgoXCJHb29kIE1vcm5pbmcsIFNoaWllbHR5IVwiKVxuICAgIGNvbnN0IHN1YnRpdGxlMiA9IGNyZWF0ZVBhcmFncmFwaChgWW91IGhhdmUgJHt0YXNrUmVtYWluaW5nfSB0YXNrIGxlZnQgdG8gZG8sYClcbiAgICBjb25zdCBzdWJ0aXRsZTMgPSBjcmVhdGVQYXJhZ3JhcGgoXCJMZXQncyBkbyBpdCFcIilcbiAgICBjb25zdCBwcm9qZWN0TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHByb2plY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBtZW51SWNvbiA9IGNyZWF0ZUltYWdlKE1lbnUpO1xuICAgIFxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJKdXN0IERvIEl0IExpc3RcIjtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB3aGljaEFjdGl2ZShwcm9qZWN0cykucHJvamVjdFRpdGxlO1xuICAgIHByb2plY3RNZW51LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1tZW51XCIpO1xuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1tZW51XCIpO1xuICAgIFxuICAgIHByb2plY3RNZW51LmFwcGVuZENoaWxkKG1lbnVJY29uKTtcbiAgICBcbiAgICBwcm9qZWN0TmF2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdE5hdi5hcHBlbmRDaGlsZChwcm9qZWN0TWVudSk7XG4gICAgXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUxKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUzKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hdik7XG4gICAgXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuY29uc3QgY3JlYXRlVGFza3NIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZGF5ID0gY3JlYXRlTGlzdChcIlRvZGF5XCIpOyBcbiAgICBjb25zdCB0b21vcnJvdyA9IGNyZWF0ZUxpc3QoXCJUb21vcnJvd1wiKTsgXG4gICAgY29uc3QgdXBjb21pbmcgPSBjcmVhdGVMaXN0KFwiVXBjb21pbmdcIik7IFxuICAgIGNvbnN0IHNvbWVkYXkgPSBjcmVhdGVMaXN0KFwiU29tZWRheVwiKTtcblxuICAgIHRhc2tzSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWhlYWRlclwiKTtcbiAgICB0b2RheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIFxuICAgIHRhc2tzSGVhZGVyLmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgICB0YXNrc0hlYWRlci5hcHBlbmRDaGlsZCh0b21vcnJvdyk7XG4gICAgdGFza3NIZWFkZXIuYXBwZW5kQ2hpbGQodXBjb21pbmcpO1xuICAgIHRhc2tzSGVhZGVyLmFwcGVuZENoaWxkKHNvbWVkYXkpO1xuXG4gICAgcmV0dXJuIHRhc2tzSGVhZGVyXG59XG5cbmNvbnN0IGNyZWF0ZVRhc2tzQ29udGFpbmVyID0gKCkgPT57XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCIrIEFkZCBUYXNrXCI7XG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2tcIik7XG4gICAgXG4gICAgd2hpY2hBY3RpdmUocHJvamVjdHMpLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgdGFza0lkID0gd2hpY2hBY3RpdmUocHJvamVjdHMpLnRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2sudGl0bGU7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlVGFza0l0ZW0odGFza0lkLCB0YXNrVGl0bGUsIHRhc2suY2hlY2tlZCk7XG5cbiAgICAgICAgY2hlY2tib3guYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUJ1dHRvbih0YXNrSWQsIFwiZWRpdC10YXNrLWJ0blwiLCBcImRlbGV0ZS10YXNrLWJ0blwiKSk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIH0pXG4gICAgXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcblxuICAgIHJldHVybiB0YXNrQ29udGFpbmVyXG59XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PiB7ICAgIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGFza3NIZWFkZXIoKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrc0NvbnRhaW5lcigpKTtcblxuICAgIHJldHVybiBtYWluO1xufVxuXG5jb25zdCBjcmVhdGVQcm9qZWN0c0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgcHJvamVjdExpc3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG4gICAgcHJvamVjdExpc3RIZWFkaW5nLnRleHRDb250ZW50ID0gYFByb2plY3QgKCR7cHJvamVjdHMubGVuZ3RofSk6YDtcbiAgICBsaXN0V3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEhlYWRpbmcpO1xuXG4gICAgY29uc3QgaW5wdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnB1dFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5wdXQtd3JhcHBlclwiKTtcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBjcmVhdGVJbnB1dChcImFkZFByb2plY3RcIiwgXCJ0ZXh0XCIpO1xuICAgIGNvbnN0IGFycm93SWNvbiA9IGNyZWF0ZUltYWdlKFVwQXJyb3cpO1xuICAgIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBcbiAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIrIENyZWF0ZSBuZXcgcHJvamVjdFwiKTtcbiAgICBpbnB1dEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuICAgIFxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcbiAgICAgICAgaXRlbS50ZXh0Q29udGVudCA9IHByb2plY3QucHJvamVjdFRpdGxlO1xuICAgICAgICBpdGVtLmRhdGFzZXQuaXRlbUlkID0gcHJvamVjdElkO1xuICAgICAgICBcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChjcmVhdGVNZW51QnV0dG9uKHByb2plY3RJZCwgXCJlZGl0LXByb2plY3QtYnRuXCIsIFwiZGVsZXRlLXByb2plY3QtYnRuXCIpKTtcbiAgICAgICAgbGlzdFdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSlcblxuICAgIGlucHV0QnRuLmFwcGVuZENoaWxkKGFycm93SWNvbik7XG4gICAgaW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG4gICAgaW5wdXRXcmFwcGVyLmFwcGVuZENoaWxkKGlucHV0QnRuKTtcbiAgICBsaXN0V3JhcHBlci5hcHBlbmRDaGlsZChpbnB1dFdyYXBwZXIpO1xuXG4gICAgcmV0dXJuIGxpc3RXcmFwcGVyO1xufVxuXG5jb25zdCBjcmVhdGVJbnB1dEVkaXQgPSAoaWQsIGlucHV0VmFsdWUpID0+IHtcbiAgICBjb25zdCBpbnB1dEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoXCJlZGl0SW5wdXRcIiwgXCJ0ZXh0XCIpO1xuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgY2hlY2tJY29uID0gY3JlYXRlSW1hZ2UoQ2hlY2ttYXJrKTtcbiAgICBjb25zdCBtdWx0aXBseUljb24gPSBjcmVhdGVJbWFnZShNdWx0aXBseSk7XG5cbiAgICBpbnB1dEVkaXQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbS1lZGl0XCIpO1xuICAgIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZChcImNvbmZpcm0tYnRuXCIpO1xuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWJ0blwiKTtcblxuICAgIGlucHV0RWRpdC5kYXRhc2V0Lml0ZW1JZCA9IGlkO1xuICAgIGlucHV0LnZhbHVlID0gaW5wdXRWYWx1ZTtcblxuICAgIGNvbmZpcm1CdG4uYXBwZW5kQ2hpbGQoY2hlY2tJY29uKTtcbiAgICBjYW5jZWxCdG4uYXBwZW5kQ2hpbGQobXVsdGlwbHlJY29uKTtcbiAgICBpbnB1dEVkaXQuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGlucHV0RWRpdC5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcbiAgICBpbnB1dEVkaXQuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICAgIHJldHVybiBpbnB1dEVkaXQ7XG59XG5cbmNvbnN0IGluaXRpYWxpemVXZWJzaXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuXG4gICAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbmV4cG9ydCB7IGluaXRpYWxpemVXZWJzaXRlLCBjcmVhdGVUYXNrc0hlYWRlciwgY3JlYXRlVGFza3NDb250YWluZXIsIGNyZWF0ZUZvcm0sIGNyZWF0ZVByb2plY3RzTGlzdCwgY3JlYXRlSW5wdXRFZGl0IH0iLCIvLyBUb2RvcyBhbmQgUHJvamVjdHNcbmNvbnN0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgXCJwcm9qZWN0VGl0bGVcIjogXCJQcm9qZWN0IDFcIixcbiAgICAgICAgXCJ0YXNrc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRhc2sgMVwiLFxuICAgICAgICAgICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMjItMDEtMDFcIixcbiAgICAgICAgICAgICAgICBcInByaW9yaXR5XCI6IFwiaGlnaFwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGRlc2NyaXB0aW9uIG9mIHRhc2sgMVwiLFxuICAgICAgICAgICAgICAgIFwiY2hlY2tlZFwiOiBcImZhbHNlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRhc2sgMlwiLFxuICAgICAgICAgICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMjItMDEtMDJcIixcbiAgICAgICAgICAgICAgICBcInByaW9yaXR5XCI6IFwiaGlnaFwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGRlc2NyaXB0aW9uIG9mIHRhc2sgMlwiLFxuICAgICAgICAgICAgICAgIFwiY2hlY2tlZFwiOiBcImZhbHNlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRhc2sgM1wiLFxuICAgICAgICAgICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMjItMDMtMDFcIixcbiAgICAgICAgICAgICAgICBcInByaW9yaXR5XCI6IFwibG93XCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgaXMgZGVzY3JpcHRpb24gb2YgdGFzayAzXCIsXG4gICAgICAgICAgICAgICAgXCJjaGVja2VkXCI6IFwiZmFsc2VcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiSXQgd29ya3MgeWF5ISFcIixcbiAgICAgICAgICAgICAgICBcImR1ZURhdGVcIjogXCIyMDIyLTA0LTAxXCIsXG4gICAgICAgICAgICAgICAgXCJwcmlvcml0eVwiOiBcImxvd1wiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGRlc2NyaXB0aW9uIG9mIHRhc2sgNFwiLFxuICAgICAgICAgICAgICAgIFwiY2hlY2tlZFwiOiBcImZhbHNlXCJcbiAgICAgICAgICAgIH0sIF0sXG4gICAgICAgIFwic3RhdHVzXCI6IFwiaW5hY3RpdmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwcm9qZWN0VGl0bGVcIjogXCJQcm9qZWN0IDJcIixcbiAgICAgICAgXCJ0YXNrc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRhc2sgOTlcIixcbiAgICAgICAgICAgICAgICBcImR1ZURhdGVcIjogXCIyMDMyLTA0LTAxXCIsXG4gICAgICAgICAgICAgICAgXCJwcmlvcml0eVwiOiBcImxvd1wiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGRlc2NyaXB0aW9uIG9mIHRhc2sgOTlcIixcbiAgICAgICAgICAgICAgICBcImNoZWNrZWRcIjogXCJ0cnVlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRhc2sgMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAzMi0wNC0wMlwiLFxuICAgICAgICAgICAgICAgIFwicHJpb3JpdHlcIjogXCJsb3dcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBpcyBkZXNjcmlwdGlvbiBvZiB0YXNrIDEwMFwiLFxuICAgICAgICAgICAgICAgIFwiY2hlY2tlZFwiOiBcImZhbHNlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRhc2sgMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAzMi0wNC0wM1wiLFxuICAgICAgICAgICAgICAgIFwicHJpb3JpdHlcIjogXCJoaWdoXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgaXMgZGVzY3JpcHRpb24gb2YgdGFzayAxMDFcIixcbiAgICAgICAgICAgICAgICBcImNoZWNrZWRcIjogXCJ0cnVlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNvbWV0aGluZyBpc24ndCByaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMjItMDQtMTBcIixcbiAgICAgICAgICAgICAgICBcInByaW9yaXR5XCI6IFwiaGlnaFwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGRlc2NyaXB0aW9uIG9mIHRhc2sgMTAwMFwiLFxuICAgICAgICAgICAgICAgIFwiY2hlY2tlZFwiOiBcImZhbHNlXCJcbiAgICAgICAgICAgIH0sIF0sXG4gICAgICAgIFwic3RhdHVzXCI6IFwiYWN0aXZlXCIsXG4gICAgfVxuXTsgXG5cbi8vIFRvZG9zIGZ1bmN0aW9uIGZhY3RvcnlcbmNvbnN0IFRhc2sgPSAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgY2hlY2tlZCkgPT4ge1xuICAgIHJldHVybiB7IHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGNoZWNrZWQgfVxufVxuXG4vLyBQcm9qZWN0IGZ1bmN0aW9uIGZhY3RvcnlcbmNvbnN0IFByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBbXTtcbiAgICBjb25zdCBzdGF0dXMgPSBcImluYWN0aXZlXCI7XG5cbiAgICByZXR1cm4ge3Byb2plY3RUaXRsZSwgdGFza3MsIHN0YXR1c31cbn1cblxuY29uc3QgYWRkVGFzayA9ICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSB3aGljaEFjdGl2ZShwcm9qZWN0cyk7XG4gICAgY29uc3QgdGFzayA9IFRhc2sodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgXCJmYWxzZVwiKTtcbiAgICBjdXJyZW50UHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xufVxuXG5jb25zdCBlZGl0VGFzayA9ICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBpZCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gd2hpY2hBY3RpdmUocHJvamVjdHMpO1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzW2lkXS50aXRsZSA9IHRpdGxlO1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzW2lkXS5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICBjdXJyZW50UHJvamVjdC50YXNrc1tpZF0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICBjdXJyZW50UHJvamVjdC50YXNrc1tpZF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbn1cblxuY29uc3QgcmVtb3ZlVGFzayA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gd2hpY2hBY3RpdmUocHJvamVjdHMpO1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnNwbGljZShpZCwgMSk7XG59XG5cbmNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIGFycikgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KHRpdGxlKTtcbiAgICBhcnIucHVzaChwcm9qZWN0KTtcbiAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMSkgYXJyWzBdLnN0YXR1cyA9IFwiYWN0aXZlXCI7XG59XG5cbmNvbnN0IHdoaWNoQWN0aXZlID0gKHByb2plY3RzKSA9PiB7XG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5zdGF0dXMgPT0gXCJhY3RpdmVcIik7XG4gICAgaWYgKGFjdGl2ZVByb2plY3QgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmVQcm9qZWN0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RzWzBdLnN0YXR1cyA9IFwiYWN0aXZlXCI7XG4gICAgICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5zdGF0dXMgPT0gXCJhY3RpdmVcIik7XG4gICAgICAgIHJldHVybiBhY3RpdmVQcm9qZWN0O1xuICAgIH1cbn1cblxuY29uc3QgY2hhbmdlUHJvamVjdCA9ICh0YXJnZXRQcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSB3aGljaEFjdGl2ZShwcm9qZWN0cyk7XG4gICAgY3VycmVudFByb2plY3Quc3RhdHVzID0gXCJpbmFjdGl2ZVwiO1xuICAgIHRhcmdldFByb2plY3Quc3RhdHVzID0gXCJhY3RpdmVcIjtcbn1cblxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG59XG5cblxuY29uc3QgdGVzdCA9ICgpID0+IGNvbnNvbGUubG9nKFwiSGVsbG8gZnJpZW5kLlwiKTtcblxuZXhwb3J0IHsgcHJvamVjdHMsIGFkZFRhc2ssIGVkaXRUYXNrICxyZW1vdmVUYXNrLCBhZGRQcm9qZWN0LCBjaGFuZ2VQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCB3aGljaEFjdGl2ZSwgdGVzdCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplV2Vic2l0ZSwgY3JlYXRlVGFza3NIZWFkZXIsIGNyZWF0ZVRhc2tzQ29udGFpbmVyLCBjcmVhdGVGb3JtLCBjcmVhdGVQcm9qZWN0c0xpc3QsIGNyZWF0ZUlucHV0RWRpdH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBwcm9qZWN0cywgYWRkUHJvamVjdCwgYWRkVGFzaywgZWRpdFRhc2ssIHJlbW92ZVRhc2ssIGNoYW5nZVByb2plY3QsIHJlbW92ZVByb2plY3QsIHdoaWNoQWN0aXZlIH0gZnJvbSBcIi4vaGFuZGxlclwiXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5sZXQgaXNJbnB1dEFjdGl2ZSA9IGZhbHNlO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGluaXRpYWxpemVXZWJzaXRlKCkpO1xuXG5jb25zdCByZW5kZXJBbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKTtcbiAgICB3cmFwcGVyLnJlbW92ZSgpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5pdGlhbGl6ZVdlYnNpdGUoKSk7XG4gICAgaXNJbnB1dEFjdGl2ZSA9IGZhbHNlO1xufVxuXG5jb25zdCByZW5kZXJQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgbWFpbi5yZXBsYWNlQ2hpbGRyZW4oY3JlYXRlUHJvamVjdHNMaXN0KCkpO1xuICAgIGNoYW5nZVByb2plY3RUaXRsZURpc3BsYXkoKTtcbiAgICBpc0lucHV0QWN0aXZlID0gZmFsc2U7XG59XG5cbmNvbnN0IGN1cnNvckZvY3VzID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlbGVtZW50O1xuICAgIHRhcmdldC5mb2N1cygpO1xuICAgIHRhcmdldC5zZWxlY3QoKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xuICAgIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZyk7XG59XG5cbmNvbnN0IGRpc3BsYXlPbkhvdmVyID0gKGl0ZW1zKSA9PiB7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNJbnB1dEFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRJZCA9IGl0ZW0uZGF0YXNldC5pdGVtSWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrLW1lbnVbZGF0YS1pdGVtLWlkPVwiJHtlbGVtZW50SWR9XCJdYCk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1tZW51LXZpc2libGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudElkID0gaXRlbS5kYXRhc2V0Lml0ZW1JZDtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFzay1tZW51W2RhdGEtaXRlbS1pZD1cIiR7ZWxlbWVudElkfVwiXWApO1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1tZW51LXZpc2libGVcIik7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuY29uc3QgY2hhbmdlUHJvamVjdFRpdGxlRGlzcGxheSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXY+YnV0dG9uOmZpcnN0LW9mLXR5cGVcIilcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHdoaWNoQWN0aXZlKHByb2plY3RzKS5wcm9qZWN0VGl0bGU7XG59XG5cbmNvbnN0IHRvZGF5RGF0ZSA9ICgpID0+IHtcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBkZCA9IFN0cmluZyh0b2RheS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgbGV0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpOyAvL0phbnVhcnkgaXMgMCFcbiAgICBsZXQgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICB0b2RheSA9IGAke3l5eXl9LSR7bW19LSR7ZGR9YDtcblxuICAgIHJldHVybiB0b2RheTtcbn1cblxuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInByb2plY3RzLW1lbnVcIikge1xuICAgICAgICBpc0lucHV0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICAgICAgaWYgKG1haW4uY2hpbGROb2Rlcy5sZW5ndGggPiAxKXtcbiAgICAgICAgICAgIG1haW4ucmVwbGFjZUNoaWxkcmVuKGNyZWF0ZVByb2plY3RzTGlzdCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1haW4ucmVwbGFjZUNoaWxkcmVuKGNyZWF0ZVRhc2tzSGVhZGVyKCksIGNyZWF0ZVRhc2tzQ29udGFpbmVyKCkpO1xuICAgICAgICAgICAgY2hhbmdlUHJvamVjdFRpdGxlRGlzcGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcImVkaXQtdGFzay1idG5cIikge1xuICAgICAgICBpc0lucHV0QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaXRlbUlkO1xuICAgICAgICBjb25zdCBjaGVja2xpc3QgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSB3aGljaEFjdGl2ZShwcm9qZWN0cyk7XG4gICAgICAgIGluc2VydEFmdGVyKGNyZWF0ZUZvcm0oYWN0aXZlUHJvamVjdC50YXNrc1t0YXJnZXRJZF0udGl0bGUsIGFjdGl2ZVByb2plY3QudGFza3NbdGFyZ2V0SWRdLmR1ZURhdGUsIGFjdGl2ZVByb2plY3QudGFza3NbdGFyZ2V0SWRdLnByaW9yaXR5LCBhY3RpdmVQcm9qZWN0LnRhc2tzW3RhcmdldElkXS5kZXNjcmlwdGlvbiwgdGFyZ2V0SWQpLCBjaGVja2xpc3QpO1xuICAgICAgICBjaGVja2xpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICBcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImRlbGV0ZS10YXNrLWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gZS50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0Lml0ZW1JZDtcbiAgICAgICAgcmVtb3ZlVGFzayh0YXJnZXRJZCk7XG4gICAgICAgIHJlbmRlckFsbCgpO1xuICAgIH1cbiAgICBcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInN1Ym1pdC1idG5cIikge1xuICAgICAgICBjb25zdCBmb3JtSWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmF0dHJpYnV0ZXNbMV0udmFsdWU7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCN0YXNrVGl0bGVcIik7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2R1ZURhdGVcIik7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QjdGFzay1wcmlvcml0eVwiKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3Rhc2tEZXNjXCIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRhc2tUaXRsZS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHRhc2tEdWVEYXRlLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHRhc2tQcmlvcml0eS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZVRyaW0gPSB0aXRsZS50cmltKCk7XG4gICAgICAgIGlmICh0aXRsZSAhPSBcIlwiICYmIHRhc2tUaXRsZVRyaW0gIT0gXCJcIikge1xuICAgICAgICAgICAgaWYgKGZvcm1JZCA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICBhZGRUYXNrKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlZGl0VGFzayh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBmb3JtSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyQWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImFkZC10YXNrXCIpIHtcbiAgICAgICAgaXNJbnB1dEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGluc2VydEFmdGVyKGNyZWF0ZUZvcm0oXCJcIiwgdG9kYXlEYXRlKCksIFwibm9ybWFsXCIsIFwiXCIpLCBlLm9yaWdpbmFsVGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgICBlLm9yaWdpbmFsVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImNsb3NlLWJ0blwiKSB7XG4gICAgICAgIGlzSW5wdXRBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZm9ybUlkID0gZS50YXJnZXQucGFyZW50Tm9kZS5hdHRyaWJ1dGVzWzFdLnZhbHVlO1xuXG4gICAgICAgIGlmIChmb3JtSWQgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbiAgICAgICAgICAgIGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBjaGVja2xpc3QgPSBlLnRhcmdldC5wYXJlbnROb2RlLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIGNoZWNrbGlzdC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJwcm9qZWN0LWl0ZW1cIikge1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGUudGFyZ2V0LmRhdGFzZXQuaXRlbUlkO1xuICAgICAgICBjaGFuZ2VQcm9qZWN0KHByb2plY3RzW3RhcmdldElkXSk7XG4gICAgICAgIHJlbmRlckFsbCgpO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYWRkLXByb2plY3QtYnRuXCIpIHtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBhZGRQcm9qZWN0SW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZVRyaW0gPSBwcm9qZWN0VGl0bGUudHJpbSgpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0VGl0bGUgIT0gXCJcIiAmJiBwcm9qZWN0VGl0bGVUcmltICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGFkZFByb2plY3QocHJvamVjdFRpdGxlLCBwcm9qZWN0cyk7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0TGlzdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZGVsZXRlLXByb2plY3QtYnRuXCIpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaXRlbUlkO1xuICAgICAgICByZW1vdmVQcm9qZWN0KHRhcmdldElkKTtcbiAgICAgICAgcmVuZGVyUHJvamVjdExpc3QoKTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImVkaXQtcHJvamVjdC1idG5cIikge1xuICAgICAgICBpc0lucHV0QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdGFyZ2V0TGlzdCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaXRlbUlkO1xuICAgICAgICB0YXJnZXRMaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgaW5zZXJ0QWZ0ZXIoY3JlYXRlSW5wdXRFZGl0KHRhcmdldElkLCBwcm9qZWN0c1t0YXJnZXRJZF0ucHJvamVjdFRpdGxlKSwgdGFyZ2V0TGlzdCk7XG4gICAgICAgIGN1cnNvckZvY3VzKHRhcmdldExpc3QubmV4dFNpYmxpbmcuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJjb25maXJtLWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gZS50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0Lml0ZW1JZDtcbiAgICAgICAgY29uc3QgZWRpdElucHV0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5maXJzdENoaWxkO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlZGl0SW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZVRyaW0gPSBwcm9qZWN0VGl0bGUudHJpbSgpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0VGl0bGUgIT0gXCJcIiAmJiBwcm9qZWN0VGl0bGVUcmltICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHByb2plY3RzW3RhcmdldElkXS5wcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RMaXN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImNhbmNlbC1idG5cIikge1xuICAgICAgICByZW5kZXJQcm9qZWN0TGlzdCgpO1xuICAgIH1cbn0pXG5cbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgIGlmICgoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInRhc2staXRlbVwiIHx8IGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJwcm9qZWN0LWl0ZW1cIikgJiYgaXNJbnB1dEFjdGl2ZSA9PSBmYWxzZSkge1xuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0LmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcInRhc2staXRlbVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1pdGVtXCIpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlPbkhvdmVyKHRhc2tJdGVtcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicHJvamVjdC1pdGVtXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWl0ZW1cIik7XG4gICAgICAgICAgICAgICAgZGlzcGxheU9uSG92ZXIocHJvamVjdEl0ZW1zKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC50eXBlID09IFwiY2hlY2tib3hcIikge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgd2hpY2hBY3RpdmUocHJvamVjdHMpLnRhc2tzW2UudGFyZ2V0LmlkXS5jaGVja2VkID0gXCJ0cnVlXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdoaWNoQWN0aXZlKHByb2plY3RzKS50YXNrc1tlLnRhcmdldC5pZF0uY2hlY2tlZCA9IFwiZmFsc2VcIjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgaGVhZGVyU3VidGl0bGUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlcj5wOm50aC1vZi10eXBlKDIpXCIpO1xuICAgICAgICBsZXQgdGFza1JlbWFpbmluZyA9IHdoaWNoQWN0aXZlKHByb2plY3RzKS50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suY2hlY2tlZCA9PSBcImZhbHNlXCIpLmxlbmd0aDtcbiAgICAgICAgaGVhZGVyU3VidGl0bGUyLnRleHRDb250ZW50ID0gYFlvdSBoYXZlICR7dGFza1JlbWFpbmluZ30gdGFzayBsZWZ0IHRvIGRvLGA7XG4gICAgfVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=