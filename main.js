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
___CSS_LOADER_EXPORT___.push([module.id, "/* font-family: 'Inconsolata', monospace;\nfont-family: 'Inknut Antiqua', serif;\nfont-family: 'Roboto', sans-serif; */\n\n:root {\n    --black: #164E63;\n    --grey: rgba(0, 0, 0, 0.75);\n    --deepsea: #155E75;\n    --darkblue: #0E7490;\n    --blue: #06B6D4;\n    --white: #FFFFFF;\n    --white8: rgba(255, 255, 255, 0.8);\n    --white5: rgba(255, 255, 255, 0.5); \n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--black);\n    font-family: 'Roboto', sans-serif;\n    font-size: 18px;\n}\n\n.wrapper {\n    background-color: var(--deepsea);\n    max-width: 550px;\n    min-height: 100vh;\n    margin: 0 auto;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--darkblue);\n    padding-bottom: 20px;\n}\n\nh1,\np {\n    margin: 0;\n}\n\nheader > h1 {\n    font-family: 'Inknut Antiqua', serif;\n    font-size: 3rem;\n    color: var(--white);\n    text-align: center;\n}\n\nheader > p {\n    font-family: 'Inconsolata', monospace;\n    font-size: 0.9rem;\n    color: white;\n    text-align: left;\n    margin: 0 85px;\n}\n\nnav {\n    align-self: end;\n    position: relative;\n    bottom: -34px;\n\n    display: flex;\n    gap: 1px;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nbutton > img {\n    pointer-events: none;\n}\n\nheader button {\n    height: 34px;\n    padding: 5px 10px;\n    border: none;\n    background-color: var(--blue);\n    font-family: 'Inconsolata', monospace;\n    font-weight: bold;\n    color: var(--white8);\n}\n\nheader button:hover {\n    background-color: var(--black);\n    cursor: pointer;\n}\n\nimg {\n    height: 20px;\n    width: auto;\n}\n\n.task-header {\n    display: flex;\n    border-bottom: var(--grey);\n    font-weight: bold;\n    font-size: 0.9rem;\n    color: var(--white5);\n}\n\n\nmain {\n    margin-top: 20px;\n}\n\n.task-header {\n    display: flex;\n    align-items: baseline;\n    gap: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid var(--grey);\n    margin: 10px 200px 25px 20px;\n    color: var(--white5);\n    list-style: none;\n}\n\n.task-header .active {\n    color: var(--white);\n    font-size: 1.5rem;\n}\n\n.task-container > .task-item,\n.project-item {\n    display: flex;\n    align-items: center;\n    padding: 0 20px;\n    height: 32px;\n    color: var(--white8)\n}\n\n.task-container > .task-item:hover,\n.project-item:hover {\n    background-color: var(--blue);\n}\n\n.task-container label {\n    padding: 5px 10px;\n}\n\n.task-menu {\n    display: none;\n    margin: 0 10px 0 auto;\n}\n\n.task-menu-visible {\n    display: flex;\n    gap: 5px;\n}\n\nlabel[for=\"taskInput\"] {\n    position: relative;\n    right: 8px;\n    color: #000000a1;\n    font-size: 2rem;\n}\n\ninput#taskInput {\n    position: relative;\n    right: 37px;\n    width: 100%;\n    padding: 5px 5px 5px 30px;\n    background-color: var(--black);\n    border: none;\n    font-size: 1rem;\n    border-radius: 1rem;\n}\n\ninput#taskInput:focus-visible {\n    outline: none;\n    color: var(--white);\n    background-color: var(--black);\n    border-radius: 1rem;\n    border:none;\n}\n\n.enter-btn {\n    position: relative;\n    right: 75px;\n    border: none;\n    background-color: transparent;\n}\n\n.form {\n    display: block;\n    padding: 10px;\n    margin: 0 85px 0 20px;\n    background-color: var(--black);\n    border-radius: 1rem;\n}\n\n\n.form label {\n    padding: 0;\n    font-size: 0.9rem;\n}\n\n.form > input:first-of-type {\n    display: block;\n    margin-bottom: 15px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 1rem;\n    background: #000000a6;\n    color: white;\n    font-size: 1.5rem;\n}\n\ninput#dueDate {\n    margin-right: 20px;\n}\n\nlabel[for=\"taskDesc\"] {\n    display: block;\n    margin-top: 10px;\n}\n\ninput#taskDesc {\n    display: block;\n    background-color: transparent;\n    border: none;\n    width: 400px;\n    padding: 5px 10px;\n}\n\n#taskDesc:focus-visible {\n    outline: none;\n    color: var(--white);\n    background-color: black;\n    border-radius: 1rem;\n}\n\n.add-task {\n    font-family: 'Inconsolata', monospace;\n    font-size: 0.9rem;\n    font-weight: bold;\n    margin: 20px;\n    padding: 5px 10px;\n    background-color: var(--blue);\n    border: none;\n    color: white;\n    box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 5px;\n}\n\n.add-task:active {\n    background-color: var(--darkblue);\n}\n\n.submit-btn {\n    margin: 10px 5px;\n    background-color: var(--blue);\n    border: none;\n    border-radius: 0.2rem;\n    padding: 5px 10px;\n    color: #ffffffc4;\n    font-weight: bold;\n}\n\n.close-btn {\n    margin-left: 280px;\n    background-color: red;\n    border: none;\n    border-radius: 0.2rem;\n    padding: 5px 10px;\n    color: #ffffffc4;\n    font-weight: bold;\n}\n\n.project-item {\n    height: 32px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;700&family=Inknut+Antiqua:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap');\n\n/* font-family: 'Inconsolata', monospace;\nfont-family: 'Inknut Antiqua', serif;\nfont-family: 'Roboto', sans-serif; */\n\n:root {\n    --black: #164E63;\n    --grey: rgba(0, 0, 0, 0.75);\n    --deepsea: #155E75;\n    --darkblue: #0E7490;\n    --blue: #06B6D4;\n    --white: #FFFFFF;\n    --white8: rgba(255, 255, 255, 0.8);\n    --white5: rgba(255, 255, 255, 0.5); \n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--black);\n    font-family: 'Roboto', sans-serif;\n    font-size: 18px;\n}\n\n.wrapper {\n    background-color: var(--deepsea);\n    max-width: 550px;\n    min-height: 100vh;\n    margin: 0 auto;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--darkblue);\n    padding-bottom: 20px;\n}\n\nh1,\np {\n    margin: 0;\n}\n\nheader > h1 {\n    font-family: 'Inknut Antiqua', serif;\n    font-size: 3rem;\n    color: var(--white);\n    text-align: center;\n}\n\nheader > p {\n    font-family: 'Inconsolata', monospace;\n    font-size: 0.9rem;\n    color: white;\n    text-align: left;\n    margin: 0 85px;\n}\n\nnav {\n    align-self: end;\n    position: relative;\n    bottom: -34px;\n\n    display: flex;\n    gap: 1px;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nbutton > img {\n    pointer-events: none;\n}\n\nheader button {\n    height: 34px;\n    padding: 5px 10px;\n    border: none;\n    background-color: var(--blue);\n    font-family: 'Inconsolata', monospace;\n    font-weight: bold;\n    color: var(--white8);\n}\n\nheader button:hover {\n    background-color: var(--black);\n    cursor: pointer;\n}\n\nimg {\n    height: 20px;\n    width: auto;\n}\n\n.task-header {\n    display: flex;\n    border-bottom: var(--grey);\n    font-weight: bold;\n    font-size: 0.9rem;\n    color: var(--white5);\n}\n\n\nmain {\n    margin-top: 20px;\n}\n\n.task-header {\n    display: flex;\n    align-items: baseline;\n    gap: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid var(--grey);\n    margin: 10px 200px 25px 20px;\n    color: var(--white5);\n    list-style: none;\n}\n\n.task-header .active {\n    color: var(--white);\n    font-size: 1.5rem;\n}\n\n.task-container > .task-item,\n.project-item {\n    display: flex;\n    align-items: center;\n    padding: 0 20px;\n    height: 32px;\n    color: var(--white8)\n}\n\n.task-container > .task-item:hover,\n.project-item:hover {\n    background-color: var(--blue);\n}\n\n.task-container label {\n    padding: 5px 10px;\n}\n\n.task-menu {\n    display: none;\n    margin: 0 10px 0 auto;\n}\n\n.task-menu-visible {\n    display: flex;\n    gap: 5px;\n}\n\nlabel[for=\"taskInput\"] {\n    position: relative;\n    right: 8px;\n    color: #000000a1;\n    font-size: 2rem;\n}\n\ninput#taskInput {\n    position: relative;\n    right: 37px;\n    width: 100%;\n    padding: 5px 5px 5px 30px;\n    background-color: var(--black);\n    border: none;\n    font-size: 1rem;\n    border-radius: 1rem;\n}\n\ninput#taskInput:focus-visible {\n    outline: none;\n    color: var(--white);\n    background-color: var(--black);\n    border-radius: 1rem;\n    border:none;\n}\n\n.enter-btn {\n    position: relative;\n    right: 75px;\n    border: none;\n    background-color: transparent;\n}\n\n.form {\n    display: block;\n    padding: 10px;\n    margin: 0 85px 0 20px;\n    background-color: var(--black);\n    border-radius: 1rem;\n}\n\n\n.form label {\n    padding: 0;\n    font-size: 0.9rem;\n}\n\n.form > input:first-of-type {\n    display: block;\n    margin-bottom: 15px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 1rem;\n    background: #000000a6;\n    color: white;\n    font-size: 1.5rem;\n}\n\ninput#dueDate {\n    margin-right: 20px;\n}\n\nlabel[for=\"taskDesc\"] {\n    display: block;\n    margin-top: 10px;\n}\n\ninput#taskDesc {\n    display: block;\n    background-color: transparent;\n    border: none;\n    width: 400px;\n    padding: 5px 10px;\n}\n\n#taskDesc:focus-visible {\n    outline: none;\n    color: var(--white);\n    background-color: black;\n    border-radius: 1rem;\n}\n\n.add-task {\n    font-family: 'Inconsolata', monospace;\n    font-size: 0.9rem;\n    font-weight: bold;\n    margin: 20px;\n    padding: 5px 10px;\n    background-color: var(--blue);\n    border: none;\n    color: white;\n    box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 5px;\n}\n\n.add-task:active {\n    background-color: var(--darkblue);\n}\n\n.submit-btn {\n    margin: 10px 5px;\n    background-color: var(--blue);\n    border: none;\n    border-radius: 0.2rem;\n    padding: 5px 10px;\n    color: #ffffffc4;\n    font-weight: bold;\n}\n\n.close-btn {\n    margin-left: 280px;\n    background-color: red;\n    border: none;\n    border-radius: 0.2rem;\n    padding: 5px 10px;\n    color: #ffffffc4;\n    font-weight: bold;\n}\n\n.project-item {\n    height: 32px;\n}"],"sourceRoot":""}]);
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






function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

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

const createTaskItem = (id, labelText) => {
    const taskItem = document.createElement("div")
    taskItem.classList.add("task-item");
    taskItem.dataset.itemId = id;
    const input = createInput(id, "checkbox");

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
    const header = document.createElement("header");
    const title = document.createElement('h1');
    const subtitle1 = createParagraph("Good Morning, Shiielty!")
    const subtitle2 = createParagraph("You have 3 task left to do,")
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
        const checkbox = createTaskItem(taskId, taskTitle);

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

    _handler__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
        const projectId = _handler__WEBPACK_IMPORTED_MODULE_0__.projects.indexOf(project);
        const item = document.createElement("div");
        item.classList.add("project-item");
        item.textContent = project.projectTitle;
        item.dataset.itemId = projectId;

        item.appendChild(createMenuButton(projectId, "edit-project-btn", "delete-project-btn"));
        listWrapper.appendChild(item);
    })

    return listWrapper;
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
                "description": "This is description of task 1"
            },
            {
                "title": "Task 2",
                "dueDate": "2022-01-02",
                "priority": "high",
                "description": "This is description of task 2"
            },
            {
                "title": "Task 3",
                "dueDate": "2022-03-01",
                "priority": "low",
                "description": "This is description of task 3"
            },
            {
                "title": "It works yay!!",
                "dueDate": "2022-04-01",
                "priority": "low",
                "description": "This is description of task 4"
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
                "description": "This is description of task 99"
            },
            {
                "title": "Task 100",
                "dueDate": "2032-04-02",
                "priority": "low",
                "description": "This is description of task 100"
            },
            {
                "title": "Task 101",
                "dueDate": "2032-04-03",
                "priority": "high",
                "description": "This is description of task 101"
            },
            {
                "title": "Something isn't right",
                "dueDate": "2022-04-10",
                "priority": "high",
                "description": "This is description of task 1000"
            }, ],
        "status": "active",
    }
]; 

// Todos function factory
const Task = (title, dueDate, priority, description) => {
    return { title, dueDate, priority, description }
}

// Project function factory
const Project = (projectTitle) => {
    const tasks = [];
    const status = "inactive";

    return {projectTitle, tasks, status}
}

const addTask = (title, dueDate, priority, description) => {
    const currentProject = whichActive(projects);
    const task = Task(title, dueDate, priority, description);
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



// import { projects, addProject, test } from "./handler.js"

const content = document.querySelector("#content");

content.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.initializeWebsite)());

const render = () => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.remove();
    content.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.initializeWebsite)());
}

const cursorFocus = (elementSelector) => {
    const target = document.querySelector(elementSelector);
    target.focus();
    target.select();
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

const displayOnHover = (items) => {
    items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            const elementId = item.dataset.itemId;
            const element = document.querySelector(`.task-menu[data-item-id="${elementId}"]`);
            element.classList.add("task-menu-visible");
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

content.addEventListener("click", (e) => {
    if (e.target.className === "projects-menu") {
        const main = document.querySelector("main");
        if (main.childNodes.length == 2){
            main.replaceChildren((0,_dom__WEBPACK_IMPORTED_MODULE_1__.createProjectsList)());
        } else {
            main.replaceChildren((0,_dom__WEBPACK_IMPORTED_MODULE_1__.createTasksHeader)(), (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createTasksContainer)());
            changeProjectTitleDisplay();
        }
    }

    if (e.target.className == "edit-task-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        const checklist = e.target.parentNode.parentNode;
        const activeProject = (0,_handler__WEBPACK_IMPORTED_MODULE_2__.whichActive)(_handler__WEBPACK_IMPORTED_MODULE_2__.projects);
        insertAfter((0,_dom__WEBPACK_IMPORTED_MODULE_1__.createForm)(activeProject.tasks[targetId].title, activeProject.tasks[targetId].dueDate, activeProject.tasks[targetId].priority, activeProject.tasks[targetId].description, targetId), checklist);
        checklist.style.display = "none";
        console.log(e.target.parentNode.parentNode);
    }
    
    if (e.target.className === "delete-task-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        (0,_handler__WEBPACK_IMPORTED_MODULE_2__.removeTask)(targetId);
        render();
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
            // console.table(projects)
            render();
        }
    }

    if (e.target.className === "add-task") {
        insertAfter((0,_dom__WEBPACK_IMPORTED_MODULE_1__.createForm)("", "2022-01-01", "normal", ""), e.originalTarget.parentNode);
        e.originalTarget.style.display = "none";
    }

    if (e.target.className === "close-btn") {
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

    // if (e.target.className === "edit-project-btn") {

    // }

    if (e.target.className === "delete-project-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        (0,_handler__WEBPACK_IMPORTED_MODULE_2__.removeProject)(targetId);
        const main = document.querySelector("main");
        main.replaceChildren((0,_dom__WEBPACK_IMPORTED_MODULE_1__.createProjectsList)());
        changeProjectTitleDisplay();
    }
})

content.addEventListener("mouseover", (e) => {
    if (e.target.className === "task-item" || e.target.className === "project-item") {
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

content.addEventListener("keypress", (e) => {    
    if (e.target.id === "taskInput" || e.target.id === "taskDesc") {
        if (e.key === "Enter") {
            e.preventDefault();
            document.querySelector(".enter-btn").click();
            cursorFocus("#taskInput");
            const form = document.querySelector(".task-container > div.form");
            form.classList.add("form-active");
        }
    }
})

content.addEventListener("input", (e) => {
    if (e.target.id === "taskInput") {
        const form = document.querySelector(".task-container > div.form");
        form.classList.add("form-active");
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUss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O0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLHVEQUFhO0FBQ3JCO0FBQ0EsNkJBQTZCLHdEQUFrQjtBQUMvQztBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluY29uc29sYXRhOndnaHRAMzAwOzQwMDs3MDAmZmFtaWx5PUlua251dCtBbnRpcXVhOndnaHRAMzAwOzQwMDs3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxuZm9udC1mYW1pbHk6ICdJbmtudXQgQW50aXF1YScsIHNlcmlmO1xcbmZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tYmxhY2s6ICMxNjRFNjM7XFxuICAgIC0tZ3JleTogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgLS1kZWVwc2VhOiAjMTU1RTc1O1xcbiAgICAtLWRhcmtibHVlOiAjMEU3NDkwO1xcbiAgICAtLWJsdWU6ICMwNkI2RDQ7XFxuICAgIC0td2hpdGU6ICNGRkZGRkY7XFxuICAgIC0td2hpdGU4OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIC0td2hpdGU1OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IFxcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBzZWEpO1xcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbmgxLFxcbnAge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmhlYWRlciA+IGgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmtudXQgQW50aXF1YScsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyID4gcCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA4NXB4O1xcbn1cXG5cXG5uYXYge1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAtMzRweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uID4gaW1nIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlOCk7XFxufVxcblxcbmhlYWRlciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW1nIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tZ3JleSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlNSk7XFxufVxcblxcblxcbm1haW4ge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgbWFyZ2luOiAxMHB4IDIwMHB4IDI1cHggMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlNSk7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50YXNrLWhlYWRlciAuYWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciA+IC50YXNrLWl0ZW0sXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGU4KVxcbn1cXG5cXG4udGFzay1jb250YWluZXIgPiAudGFzay1pdGVtOmhvdmVyLFxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGxhYmVsIHtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi50YXNrLW1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW46IDAgMTBweCAwIGF1dG87XFxufVxcblxcbi50YXNrLW1lbnUtdmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcInRhc2tJbnB1dFxcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogOHB4O1xcbiAgICBjb2xvcjogIzAwMDAwMGExO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmlucHV0I3Rhc2tJbnB1dCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDM3cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG5pbnB1dCN0YXNrSW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyOm5vbmU7XFxufVxcblxcbi5lbnRlci1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiA3NXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDAgODVweCAwIDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuXFxuLmZvcm0gbGFiZWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmZvcm0gPiBpbnB1dDpmaXJzdC1vZi10eXBlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDBhNjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuaW5wdXQjZHVlRGF0ZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJ0YXNrRGVzY1xcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbmlucHV0I3Rhc2tEZXNjIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbiN0YXNrRGVzYzpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgMXB4IDFweCA1cHg7XFxufVxcblxcbi5hZGQtdGFzazphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gICAgbWFyZ2luOiAxMHB4IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgY29sb3I6ICNmZmZmZmZjNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZS1idG4ge1xcbiAgICBtYXJnaW4tbGVmdDogMjgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZmM0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIGhlaWdodDogMzJweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7b0NBRW9DOztBQUVwQztJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksU0FBUztBQUNiOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7O0lBRWIsYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOzs7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsU0FBUztJQUNULG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWjtBQUNKOztBQUVBOztJQUVJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFlBQVk7SUFDWiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluY29uc29sYXRhOndnaHRAMzAwOzQwMDs3MDAmZmFtaWx5PUlua251dCtBbnRpcXVhOndnaHRAMzAwOzQwMDs3MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxuZm9udC1mYW1pbHk6ICdJbmtudXQgQW50aXF1YScsIHNlcmlmO1xcbmZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tYmxhY2s6ICMxNjRFNjM7XFxuICAgIC0tZ3JleTogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgLS1kZWVwc2VhOiAjMTU1RTc1O1xcbiAgICAtLWRhcmtibHVlOiAjMEU3NDkwO1xcbiAgICAtLWJsdWU6ICMwNkI2RDQ7XFxuICAgIC0td2hpdGU6ICNGRkZGRkY7XFxuICAgIC0td2hpdGU4OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIC0td2hpdGU1OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IFxcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRlZXBzZWEpO1xcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtibHVlKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbmgxLFxcbnAge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmhlYWRlciA+IGgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmtudXQgQW50aXF1YScsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyID4gcCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA4NXB4O1xcbn1cXG5cXG5uYXYge1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAtMzRweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uID4gaW1nIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlOCk7XFxufVxcblxcbmhlYWRlciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW1nIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tZ3JleSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlNSk7XFxufVxcblxcblxcbm1haW4ge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgbWFyZ2luOiAxMHB4IDIwMHB4IDI1cHggMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlNSk7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50YXNrLWhlYWRlciAuYWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciA+IC50YXNrLWl0ZW0sXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGU4KVxcbn1cXG5cXG4udGFzay1jb250YWluZXIgPiAudGFzay1pdGVtOmhvdmVyLFxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGxhYmVsIHtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi50YXNrLW1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW46IDAgMTBweCAwIGF1dG87XFxufVxcblxcbi50YXNrLW1lbnUtdmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcInRhc2tJbnB1dFxcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogOHB4O1xcbiAgICBjb2xvcjogIzAwMDAwMGExO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmlucHV0I3Rhc2tJbnB1dCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDM3cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG5pbnB1dCN0YXNrSW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyOm5vbmU7XFxufVxcblxcbi5lbnRlci1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiA3NXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDAgODVweCAwIDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuXFxuLmZvcm0gbGFiZWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmZvcm0gPiBpbnB1dDpmaXJzdC1vZi10eXBlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDBhNjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuaW5wdXQjZHVlRGF0ZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJ0YXNrRGVzY1xcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbmlucHV0I3Rhc2tEZXNjIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbiN0YXNrRGVzYzpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgMXB4IDFweCA1cHg7XFxufVxcblxcbi5hZGQtdGFzazphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gICAgbWFyZ2luOiAxMHB4IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgY29sb3I6ICNmZmZmZmZjNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZS1idG4ge1xcbiAgICBtYXJnaW4tbGVmdDogMjgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZmM0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIGhlaWdodDogMzJweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0cywgd2hpY2hBY3RpdmUsIHRlc3QsIGFkZFRhc2sgfSBmcm9tICcuL2hhbmRsZXInO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9wdWJsaWMvaGFtYnVyZ2VyLnBuZyc7XG5pbXBvcnQgQmluIGZyb20gJy4vcHVibGljL2Jpbi5wbmcnO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9wdWJsaWMvZWRpdGluZy5wbmcnO1xuaW1wb3J0IEVudGVyIGZyb20gJy4vcHVibGljL2VudGVyLnBuZydcblxuZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xuICAgIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZyk7XG59XG5cbmNvbnN0IGNyZWF0ZVBhcmFncmFwaCA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBwO1xufVxuXG5jb25zdCBjcmVhdGVJbWFnZSA9IChpbWFnZSkgPT4ge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBpbWFnZTtcblxuICAgIHJldHVybiBpbWc7XG59XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpLnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgIHJldHVybiBsaTtcbn1cblxuY29uc3QgY3JlYXRlSW5wdXQgPSAoaWQsIHR5cGUpID0+IHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBpZCk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcblxuICAgIHJldHVybiBpbnB1dDtcbn1cblxuY29uc3QgY3JlYXRlTGFiZWwgPSAoaWQsIGxhYmVsVGV4dCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpZCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG5cbiAgICByZXR1cm4gbGFiZWw7XG59XG5cbmNvbnN0IGNyZWF0ZVRhc2tJdGVtID0gKGlkLCBsYWJlbFRleHQpID0+IHtcbiAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKFwidGFzay1pdGVtXCIpO1xuICAgIHRhc2tJdGVtLmRhdGFzZXQuaXRlbUlkID0gaWQ7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVJbnB1dChpZCwgXCJjaGVja2JveFwiKTtcblxuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwoaWQsIGxhYmVsVGV4dCk7XG5cbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgcmV0dXJuIHRhc2tJdGVtO1xufVxuXG5jb25zdCBjcmVhdGVNZW51QnV0dG9uID0gKGlkLCBlZGl0QnRuQ2xhc3MsIGRlbGV0ZUJ0bkNsYXNzKSA9PiB7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1tZW51XCIpO1xuICAgIG1lbnVCdXR0b24uZGF0YXNldC5pdGVtSWQgPSBpZDtcblxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBjb25zdCBlZGl0SWNvbiA9IGNyZWF0ZUltYWdlKEVkaXQpO1xuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBjcmVhdGVJbWFnZShCaW4pO1xuXG4gICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKGVkaXRCdG5DbGFzcyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoZGVsZXRlQnRuQ2xhc3MpXG5cbiAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgbWVudUJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICBtZW51QnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICByZXR1cm4gbWVudUJ1dHRvbjtcbn1cblxuY29uc3QgY3JlYXRlVGV4dElucHV0ID0gKGlkLCBsYWJlbFRleHQsIHBsYWNlaG9sZGVyPVwiXCIpID0+IHtcbiAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlSW5wdXQoaWQsIFwidGV4dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBwbGFjZWhvbGRlcik7XG4gICAgXG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChpZCwgbGFiZWxUZXh0KTtcbiAgICBcbiAgICB0ZXh0SW5wdXQuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIHRleHRJbnB1dC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgXG4gICAgcmV0dXJuIHRleHRJbnB1dDtcbn0gXG5cbmNvbnN0IGNyZWF0ZU9wdGlvbiA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHZhbHVlO1xuXG4gICAgcmV0dXJuIG9wdGlvbjtcbn1cblxuY29uc3QgY3JlYXRlRm9ybSA9ICh0aXRsZVZhbHVlLCBkdWVEYXRlVmFsdWUsIHByaW9yaXR5VmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIGlkPVwibm9uZVwiICkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XG4gICAgZm9ybS5kYXRhc2V0Lml0ZW1JZCA9IGlkO1xuXG4gICAgY29uc3QgdGFza1RpdGxlID0gY3JlYXRlSW5wdXQoXCJ0YXNrVGl0bGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlRhc2sgdGl0bGUuLi5cIik7XG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gY3JlYXRlTGFiZWwoXCJkdWVEYXRlXCIsIFwiRHVlIERhdGU6IFwiKTtcbiAgICBjb25zdCBkdWVEYXRlID0gY3JlYXRlSW5wdXQoXCJkdWVEYXRlXCIsIFwiZGF0ZVwiKTtcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gY3JlYXRlTGFiZWwoXCJwcmlvcml0eVwiLCBcIlByaW9yaXR5OiBcIik7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stcHJpb3JpdHlcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGNyZWF0ZUxhYmVsKFwidGFza0Rlc2NcIiwgXCJOb3RlczpcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVJbnB1dChcInRhc2tEZXNjXCIsIFwidGV4dFwiKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcImluc2VydCB5b3VyIG5vdGVzIGhlcmVcIik7XG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtYnRuXCIpO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtYnRuXCIpO1xuICAgIGNsb3NlQnRuLnRleHRDb250ZW50ID0gXCJDbG9zZVwiO1xuXG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gY3JlYXRlT3B0aW9uKFwiSGlnaFwiKTtcbiAgICBjb25zdCBub3JtYWxQcmlvcml0eSA9IGNyZWF0ZU9wdGlvbihcIk5vcm1hbFwiKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eSA9IGNyZWF0ZU9wdGlvbihcIkxvd1wiKTtcblxuICAgIHRhc2tUaXRsZS52YWx1ZSA9IHRpdGxlVmFsdWU7XG4gICAgZHVlRGF0ZS52YWx1ZSA9IGR1ZURhdGVWYWx1ZTtcbiAgICBkZXNjcmlwdGlvbi52YWx1ZSA9IGRlc2NyaXB0aW9uVmFsdWU7XG5cbiAgICAvLyBzZWxlY3RlZCBhdHRyaWJ1dGUgd2lsbCBiZWNvbWUgdGhlIHZhbHVlIG9mIHRoZSBwcmlvcml0eVxuICAgIHN3aXRjaCAocHJpb3JpdHlWYWx1ZSkge1xuICAgICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICAgICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJub3JtYWxcIjpcbiAgICAgICAgICAgIG5vcm1hbFByaW9yaXR5LnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgICAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChub3JtYWxQcmlvcml0eSk7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4gICAgcmV0dXJuIGZvcm07XG59XG5cblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHN1YnRpdGxlMSA9IGNyZWF0ZVBhcmFncmFwaChcIkdvb2QgTW9ybmluZywgU2hpaWVsdHkhXCIpXG4gICAgY29uc3Qgc3VidGl0bGUyID0gY3JlYXRlUGFyYWdyYXBoKFwiWW91IGhhdmUgMyB0YXNrIGxlZnQgdG8gZG8sXCIpXG4gICAgY29uc3Qgc3VidGl0bGUzID0gY3JlYXRlUGFyYWdyYXBoKFwiTGV0J3MgZG8gaXQhXCIpXG4gICAgY29uc3QgcHJvamVjdE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBwcm9qZWN0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgbWVudUljb24gPSBjcmVhdGVJbWFnZShNZW51KTtcbiAgICBcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiSnVzdCBEbyBJdCBMaXN0XCI7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gd2hpY2hBY3RpdmUocHJvamVjdHMpLnByb2plY3RUaXRsZTtcbiAgICBwcm9qZWN0TWVudS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtbWVudVwiKTtcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtbWVudVwiKTtcbiAgICBcbiAgICBwcm9qZWN0TWVudS5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gICAgXG4gICAgcHJvamVjdE5hdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIHByb2plY3ROYXYuYXBwZW5kQ2hpbGQocHJvamVjdE1lbnUpO1xuICAgIFxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHN1YnRpdGxlMSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHN1YnRpdGxlMik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHN1YnRpdGxlMyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3ROYXYpO1xuICAgIFxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmNvbnN0IGNyZWF0ZVRhc2tzSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0b2RheSA9IGNyZWF0ZUxpc3QoXCJUb2RheVwiKTsgXG4gICAgY29uc3QgdG9tb3Jyb3cgPSBjcmVhdGVMaXN0KFwiVG9tb3Jyb3dcIik7IFxuICAgIGNvbnN0IHVwY29taW5nID0gY3JlYXRlTGlzdChcIlVwY29taW5nXCIpOyBcbiAgICBjb25zdCBzb21lZGF5ID0gY3JlYXRlTGlzdChcIlNvbWVkYXlcIik7XG5cbiAgICB0YXNrc0hlYWRlci5jbGFzc0xpc3QuYWRkKFwidGFzay1oZWFkZXJcIik7XG4gICAgdG9kYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBcbiAgICB0YXNrc0hlYWRlci5hcHBlbmRDaGlsZCh0b2RheSk7XG4gICAgdGFza3NIZWFkZXIuYXBwZW5kQ2hpbGQodG9tb3Jyb3cpO1xuICAgIHRhc2tzSGVhZGVyLmFwcGVuZENoaWxkKHVwY29taW5nKTtcbiAgICB0YXNrc0hlYWRlci5hcHBlbmRDaGlsZChzb21lZGF5KTtcblxuICAgIHJldHVybiB0YXNrc0hlYWRlclxufVxuXG5jb25zdCBjcmVhdGVUYXNrc0NvbnRhaW5lciA9ICgpID0+e1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiKyBBZGQgVGFza1wiO1xuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrXCIpO1xuICAgIFxuICAgIHdoaWNoQWN0aXZlKHByb2plY3RzKS50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IHdoaWNoQWN0aXZlKHByb2plY3RzKS50YXNrcy5pbmRleE9mKHRhc2spO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSB0YXNrLnRpdGxlO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZVRhc2tJdGVtKHRhc2tJZCwgdGFza1RpdGxlKTtcblxuICAgICAgICBjaGVja2JveC5hcHBlbmRDaGlsZChjcmVhdGVNZW51QnV0dG9uKHRhc2tJZCwgXCJlZGl0LXRhc2stYnRuXCIsIFwiZGVsZXRlLXRhc2stYnRuXCIpKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgfSlcbiAgICBcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG4gICAgcmV0dXJuIHRhc2tDb250YWluZXJcbn1cblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHsgICAgXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrc0hlYWRlcigpKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tzQ29udGFpbmVyKCkpO1xuXG4gICAgcmV0dXJuIG1haW47XG59XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RzTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3RUaXRsZTtcbiAgICAgICAgaXRlbS5kYXRhc2V0Lml0ZW1JZCA9IHByb2plY3RJZDtcblxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVCdXR0b24ocHJvamVjdElkLCBcImVkaXQtcHJvamVjdC1idG5cIiwgXCJkZWxldGUtcHJvamVjdC1idG5cIikpO1xuICAgICAgICBsaXN0V3JhcHBlci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIGxpc3RXcmFwcGVyO1xufVxuXG5jb25zdCBpbml0aWFsaXplV2Vic2l0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcblxuICAgIHJldHVybiB3cmFwcGVyO1xufVxuXG5leHBvcnQgeyBpbml0aWFsaXplV2Vic2l0ZSwgY3JlYXRlVGFza3NIZWFkZXIsIGNyZWF0ZVRhc2tzQ29udGFpbmVyLCBjcmVhdGVGb3JtLCBjcmVhdGVQcm9qZWN0c0xpc3QgfSIsIi8vIFRvZG9zIGFuZCBQcm9qZWN0c1xuY29uc3QgcHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgICBcInByb2plY3RUaXRsZVwiOiBcIlByb2plY3QgMVwiLFxuICAgICAgICBcInRhc2tzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiVGFzayAxXCIsXG4gICAgICAgICAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAyMi0wMS0wMVwiLFxuICAgICAgICAgICAgICAgIFwicHJpb3JpdHlcIjogXCJoaWdoXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgaXMgZGVzY3JpcHRpb24gb2YgdGFzayAxXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRhc2sgMlwiLFxuICAgICAgICAgICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMjItMDEtMDJcIixcbiAgICAgICAgICAgICAgICBcInByaW9yaXR5XCI6IFwiaGlnaFwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGRlc2NyaXB0aW9uIG9mIHRhc2sgMlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJUYXNrIDNcIixcbiAgICAgICAgICAgICAgICBcImR1ZURhdGVcIjogXCIyMDIyLTAzLTAxXCIsXG4gICAgICAgICAgICAgICAgXCJwcmlvcml0eVwiOiBcImxvd1wiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGRlc2NyaXB0aW9uIG9mIHRhc2sgM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJJdCB3b3JrcyB5YXkhIVwiLFxuICAgICAgICAgICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMjItMDQtMDFcIixcbiAgICAgICAgICAgICAgICBcInByaW9yaXR5XCI6IFwibG93XCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgaXMgZGVzY3JpcHRpb24gb2YgdGFzayA0XCJcbiAgICAgICAgICAgIH0sIF0sXG4gICAgICAgIFwic3RhdHVzXCI6IFwiaW5hY3RpdmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJwcm9qZWN0VGl0bGVcIjogXCJQcm9qZWN0IDJcIixcbiAgICAgICAgXCJ0YXNrc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRhc2sgOTlcIixcbiAgICAgICAgICAgICAgICBcImR1ZURhdGVcIjogXCIyMDMyLTA0LTAxXCIsXG4gICAgICAgICAgICAgICAgXCJwcmlvcml0eVwiOiBcImxvd1wiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGRlc2NyaXB0aW9uIG9mIHRhc2sgOTlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiVGFzayAxMDBcIixcbiAgICAgICAgICAgICAgICBcImR1ZURhdGVcIjogXCIyMDMyLTA0LTAyXCIsXG4gICAgICAgICAgICAgICAgXCJwcmlvcml0eVwiOiBcImxvd1wiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGRlc2NyaXB0aW9uIG9mIHRhc2sgMTAwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRhc2sgMTAxXCIsXG4gICAgICAgICAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAzMi0wNC0wM1wiLFxuICAgICAgICAgICAgICAgIFwicHJpb3JpdHlcIjogXCJoaWdoXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgaXMgZGVzY3JpcHRpb24gb2YgdGFzayAxMDFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiU29tZXRoaW5nIGlzbid0IHJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAyMi0wNC0xMFwiLFxuICAgICAgICAgICAgICAgIFwicHJpb3JpdHlcIjogXCJoaWdoXCIsXG4gICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgaXMgZGVzY3JpcHRpb24gb2YgdGFzayAxMDAwXCJcbiAgICAgICAgICAgIH0sIF0sXG4gICAgICAgIFwic3RhdHVzXCI6IFwiYWN0aXZlXCIsXG4gICAgfVxuXTsgXG5cbi8vIFRvZG9zIGZ1bmN0aW9uIGZhY3RvcnlcbmNvbnN0IFRhc2sgPSAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIHJldHVybiB7IHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24gfVxufVxuXG4vLyBQcm9qZWN0IGZ1bmN0aW9uIGZhY3RvcnlcbmNvbnN0IFByb2plY3QgPSAocHJvamVjdFRpdGxlKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBbXTtcbiAgICBjb25zdCBzdGF0dXMgPSBcImluYWN0aXZlXCI7XG5cbiAgICByZXR1cm4ge3Byb2plY3RUaXRsZSwgdGFza3MsIHN0YXR1c31cbn1cblxuY29uc3QgYWRkVGFzayA9ICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSB3aGljaEFjdGl2ZShwcm9qZWN0cyk7XG4gICAgY29uc3QgdGFzayA9IFRhc2sodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbik7XG4gICAgY3VycmVudFByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbn1cblxuY29uc3QgZWRpdFRhc2sgPSAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgaWQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHdoaWNoQWN0aXZlKHByb2plY3RzKTtcbiAgICBjdXJyZW50UHJvamVjdC50YXNrc1tpZF0udGl0bGUgPSB0aXRsZTtcbiAgICBjdXJyZW50UHJvamVjdC50YXNrc1tpZF0uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgY3VycmVudFByb2plY3QudGFza3NbaWRdLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgY3VycmVudFByb2plY3QudGFza3NbaWRdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG59XG5cbmNvbnN0IHJlbW92ZVRhc2sgPSAoaWQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHdoaWNoQWN0aXZlKHByb2plY3RzKTtcbiAgICBjdXJyZW50UHJvamVjdC50YXNrcy5zcGxpY2UoaWQsIDEpO1xufVxuXG5jb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlLCBhcnIpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdCh0aXRsZSk7XG4gICAgYXJyLnB1c2gocHJvamVjdCk7XG4gICAgaWYgKGFyci5sZW5ndGggPT09IDEpIGFyclswXS5zdGF0dXMgPSBcImFjdGl2ZVwiO1xufVxuXG5jb25zdCB3aGljaEFjdGl2ZSA9IChwcm9qZWN0cykgPT4ge1xuICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3Quc3RhdHVzID09IFwiYWN0aXZlXCIpO1xuICAgIGlmIChhY3RpdmVQcm9qZWN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gYWN0aXZlUHJvamVjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0c1swXS5zdGF0dXMgPSBcImFjdGl2ZVwiO1xuICAgICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3Quc3RhdHVzID09IFwiYWN0aXZlXCIpO1xuICAgICAgICByZXR1cm4gYWN0aXZlUHJvamVjdDtcbiAgICB9XG59XG5cbmNvbnN0IGNoYW5nZVByb2plY3QgPSAodGFyZ2V0UHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gd2hpY2hBY3RpdmUocHJvamVjdHMpO1xuICAgIGN1cnJlbnRQcm9qZWN0LnN0YXR1cyA9IFwiaW5hY3RpdmVcIjtcbiAgICB0YXJnZXRQcm9qZWN0LnN0YXR1cyA9IFwiYWN0aXZlXCI7XG59XG5cbmNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcbiAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xufVxuXG5cbmNvbnN0IHRlc3QgPSAoKSA9PiBjb25zb2xlLmxvZyhcIkhlbGxvIGZyaWVuZC5cIik7XG5cbmV4cG9ydCB7IHByb2plY3RzLCBhZGRUYXNrLCBlZGl0VGFzayAscmVtb3ZlVGFzaywgYWRkUHJvamVjdCwgY2hhbmdlUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgd2hpY2hBY3RpdmUsIHRlc3QgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVdlYnNpdGUsIGNyZWF0ZVRhc2tzSGVhZGVyLCBjcmVhdGVUYXNrc0NvbnRhaW5lciwgY3JlYXRlRm9ybSwgY3JlYXRlUHJvamVjdHNMaXN0IH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBwcm9qZWN0cywgYWRkUHJvamVjdCwgYWRkVGFzaywgZWRpdFRhc2ssIHJlbW92ZVRhc2ssIGNoYW5nZVByb2plY3QsIHJlbW92ZVByb2plY3QsIHdoaWNoQWN0aXZlIH0gZnJvbSBcIi4vaGFuZGxlclwiXG4vLyBpbXBvcnQgeyBwcm9qZWN0cywgYWRkUHJvamVjdCwgdGVzdCB9IGZyb20gXCIuL2hhbmRsZXIuanNcIlxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGluaXRpYWxpemVXZWJzaXRlKCkpO1xuXG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKTtcbiAgICB3cmFwcGVyLnJlbW92ZSgpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5pdGlhbGl6ZVdlYnNpdGUoKSk7XG59XG5cbmNvbnN0IGN1cnNvckZvY3VzID0gKGVsZW1lbnRTZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudFNlbGVjdG9yKTtcbiAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICB0YXJnZXQuc2VsZWN0KCk7XG59XG5cbmZ1bmN0aW9uIGluc2VydEFmdGVyKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpIHtcbiAgICByZWZlcmVuY2VOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZmVyZW5jZU5vZGUubmV4dFNpYmxpbmcpO1xufVxuXG5jb25zdCBkaXNwbGF5T25Ib3ZlciA9IChpdGVtcykgPT4ge1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50SWQgPSBpdGVtLmRhdGFzZXQuaXRlbUlkO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrLW1lbnVbZGF0YS1pdGVtLWlkPVwiJHtlbGVtZW50SWR9XCJdYCk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW1lbnUtdmlzaWJsZVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50SWQgPSBpdGVtLmRhdGFzZXQuaXRlbUlkO1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrLW1lbnVbZGF0YS1pdGVtLWlkPVwiJHtlbGVtZW50SWR9XCJdYCk7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLW1lbnUtdmlzaWJsZVwiKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5jb25zdCBjaGFuZ2VQcm9qZWN0VGl0bGVEaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdj5idXR0b246Zmlyc3Qtb2YtdHlwZVwiKVxuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gd2hpY2hBY3RpdmUocHJvamVjdHMpLnByb2plY3RUaXRsZTtcbn1cblxuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInByb2plY3RzLW1lbnVcIikge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICAgIGlmIChtYWluLmNoaWxkTm9kZXMubGVuZ3RoID09IDIpe1xuICAgICAgICAgICAgbWFpbi5yZXBsYWNlQ2hpbGRyZW4oY3JlYXRlUHJvamVjdHNMaXN0KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFpbi5yZXBsYWNlQ2hpbGRyZW4oY3JlYXRlVGFza3NIZWFkZXIoKSwgY3JlYXRlVGFza3NDb250YWluZXIoKSk7XG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0VGl0bGVEaXNwbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwiZWRpdC10YXNrLWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gZS50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0Lml0ZW1JZDtcbiAgICAgICAgY29uc3QgY2hlY2tsaXN0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gd2hpY2hBY3RpdmUocHJvamVjdHMpO1xuICAgICAgICBpbnNlcnRBZnRlcihjcmVhdGVGb3JtKGFjdGl2ZVByb2plY3QudGFza3NbdGFyZ2V0SWRdLnRpdGxlLCBhY3RpdmVQcm9qZWN0LnRhc2tzW3RhcmdldElkXS5kdWVEYXRlLCBhY3RpdmVQcm9qZWN0LnRhc2tzW3RhcmdldElkXS5wcmlvcml0eSwgYWN0aXZlUHJvamVjdC50YXNrc1t0YXJnZXRJZF0uZGVzY3JpcHRpb24sIHRhcmdldElkKSwgY2hlY2tsaXN0KTtcbiAgICAgICAgY2hlY2tsaXN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJkZWxldGUtdGFzay1idG5cIikge1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pdGVtSWQ7XG4gICAgICAgIHJlbW92ZVRhc2sodGFyZ2V0SWQpO1xuICAgICAgICByZW5kZXIoKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzdWJtaXQtYnRuXCIpIHtcbiAgICAgICAgY29uc3QgZm9ybUlkID0gZS50YXJnZXQucGFyZW50Tm9kZS5hdHRyaWJ1dGVzWzFdLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjdGFza1RpdGxlXCIpO1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNkdWVEYXRlXCIpO1xuICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0I3Rhc2stcHJpb3JpdHlcIik7XG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCN0YXNrRGVzY1wiKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0YXNrVGl0bGUudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSB0YXNrRHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICBjb25zdCB0YXNrVGl0bGVUcmltID0gdGl0bGUudHJpbSgpO1xuICAgICAgICBpZiAodGl0bGUgIT0gXCJcIiAmJiB0YXNrVGl0bGVUcmltICE9IFwiXCIpIHtcbiAgICAgICAgICAgIGlmIChmb3JtSWQgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgYWRkVGFzayh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWRpdFRhc2sodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbiwgZm9ybUlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUudGFibGUocHJvamVjdHMpXG4gICAgICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYWRkLXRhc2tcIikge1xuICAgICAgICBpbnNlcnRBZnRlcihjcmVhdGVGb3JtKFwiXCIsIFwiMjAyMi0wMS0wMVwiLCBcIm5vcm1hbFwiLCBcIlwiKSwgZS5vcmlnaW5hbFRhcmdldC5wYXJlbnROb2RlKTtcbiAgICAgICAgZS5vcmlnaW5hbFRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJjbG9zZS1idG5cIikge1xuICAgICAgICBjb25zdCBmb3JtSWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmF0dHJpYnV0ZXNbMV0udmFsdWU7XG5cbiAgICAgICAgaWYgKGZvcm1JZCA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xuICAgICAgICAgICAgYWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrbGlzdCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgY2hlY2tsaXN0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImVkaXQtcHJvamVjdC1idG5cIikge1xuXG4gICAgLy8gfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJkZWxldGUtcHJvamVjdC1idG5cIikge1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pdGVtSWQ7XG4gICAgICAgIHJlbW92ZVByb2plY3QodGFyZ2V0SWQpO1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICAgIG1haW4ucmVwbGFjZUNoaWxkcmVuKGNyZWF0ZVByb2plY3RzTGlzdCgpKTtcbiAgICAgICAgY2hhbmdlUHJvamVjdFRpdGxlRGlzcGxheSgpO1xuICAgIH1cbn0pXG5cbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwidGFzay1pdGVtXCIgfHwgZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInByb2plY3QtaXRlbVwiKSB7XG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwidGFzay1pdGVtXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWl0ZW1cIik7XG4gICAgICAgICAgICAgICAgZGlzcGxheU9uSG92ZXIodGFza0l0ZW1zKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwcm9qZWN0LWl0ZW1cIjpcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtaXRlbVwiKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5T25Ib3Zlcihwcm9qZWN0SXRlbXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufSlcblxuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHsgICAgXG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSBcInRhc2tJbnB1dFwiIHx8IGUudGFyZ2V0LmlkID09PSBcInRhc2tEZXNjXCIpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW50ZXItYnRuXCIpLmNsaWNrKCk7XG4gICAgICAgICAgICBjdXJzb3JGb2N1cyhcIiN0YXNrSW5wdXRcIik7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lciA+IGRpdi5mb3JtXCIpO1xuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1hY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJ0YXNrSW5wdXRcIikge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lciA+IGRpdi5mb3JtXCIpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWFjdGl2ZVwiKTtcbiAgICB9XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==