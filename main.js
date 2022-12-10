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
___CSS_LOADER_EXPORT___.push([module.id, "/* font-family: 'Inconsolata', monospace;\nfont-family: 'Inknut Antiqua', serif;\nfont-family: 'Roboto', sans-serif; */\n\n:root {\n    --black: #164E63;\n    --grey: rgba(0, 0, 0, 0.75);\n    --deepsea: #155E75;\n    --darkblue: #0E7490;\n    --blue: #06B6D4;\n    --white: #FFFFFF;\n    --white8: rgba(255, 255, 255, 0.8);\n    --white5: rgba(255, 255, 255, 0.5); \n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--black);\n    font-family: 'Roboto', sans-serif;\n    font-size: 18px;\n}\n\n.wrapper {\n    background-color: var(--deepsea);\n    max-width: 550px;\n    min-height: 100vh;\n    margin: 0 auto;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--darkblue);\n    padding-bottom: 20px;\n}\n\nh1,\np {\n    margin: 0;\n}\n\nh2 {\n    margin: 20px;\n    color: var(--white);\n    font-family: 'Inconsolata', monospace;\n    border-bottom: 2px solid var(--white5);\n    padding-bottom: 5px;\n}\n\nheader > h1 {\n    font-family: 'Inknut Antiqua', serif;\n    font-size: 3rem;\n    color: var(--white);\n    text-align: center;\n}\n\nheader > p {\n    font-family: 'Inconsolata', monospace;\n    font-size: 0.9rem;\n    color: white;\n    text-align: left;\n    margin: 0 85px;\n}\n\nnav {\n    align-self: end;\n    position: relative;\n    bottom: -34px;\n\n    display: flex;\n    gap: 1px;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nbutton > img {\n    pointer-events: none;\n}\n\nheader button {\n    height: 34px;\n    padding: 5px 10px;\n    border: none;\n    background-color: var(--blue);\n    font-family: 'Inconsolata', monospace;\n    font-weight: bold;\n    color: var(--white8);\n}\n\nheader button:hover {\n    background-color: var(--black);\n    cursor: pointer;\n}\n\nimg {\n    height: 20px;\n    width: auto;\n}\n\n.task-header {\n    display: flex;\n    border-bottom: var(--grey);\n    font-weight: bold;\n    font-size: 0.9rem;\n    color: var(--white5);\n}\n\n\nmain {\n    margin-top: 20px;\n}\n\n.task-header {\n    display: flex;\n    align-items: baseline;\n    gap: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid var(--grey);\n    margin: 10px 200px 25px 20px;\n    color: var(--white5);\n    list-style: none;\n}\n\n.task-header .active {\n    color: var(--white);\n    font-size: 1.5rem;\n}\n\n.task-container > .task-item,\n.project-item {\n    display: flex;\n    align-items: center;\n    padding: 0 20px;\n    height: 32px;\n    color: var(--white8)\n}\n\n.task-container > .task-item:hover,\n.project-item:hover {\n    background-color: var(--blue);\n}\n\n.task-container label {\n    padding: 5px 10px;\n}\n\n.task-menu {\n    display: none;\n    margin: 0 10px 0 auto;\n}\n\n.task-menu-visible {\n    display: flex;\n    gap: 5px;\n}\n\nlabel[for=\"taskInput\"] {\n    position: relative;\n    right: 8px;\n    color: #000000a1;\n    font-size: 2rem;\n}\n\ninput#taskInput {\n    position: relative;\n    right: 37px;\n    width: 100%;\n    padding: 5px 5px 5px 30px;\n    background-color: var(--black);\n    border: none;\n    font-size: 1rem;\n    border-radius: 1rem;\n}\n\ninput#taskInput:focus-visible {\n    outline: none;\n    color: var(--white);\n    background-color: var(--black);\n    border-radius: 1rem;\n    border:none;\n}\n\n.enter-btn {\n    position: relative;\n    right: 75px;\n    border: none;\n    background-color: transparent;\n}\n\n.form {\n    display: block;\n    padding: 10px;\n    margin: 0 85px 0 20px;\n    background-color: var(--black);\n    border-radius: 1rem;\n}\n\n\n.form label {\n    padding: 0;\n    font-size: 0.9rem;\n}\n\n.form > input:first-of-type {\n    display: block;\n    margin-bottom: 15px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 1rem;\n    background: #000000a6;\n    color: white;\n    font-size: 1.5rem;\n}\n\ninput#dueDate {\n    margin-right: 20px;\n}\n\nlabel[for=\"taskDesc\"] {\n    display: block;\n    margin-top: 10px;\n}\n\ninput#taskDesc {\n    display: block;\n    background-color: transparent;\n    border: none;\n    width: 400px;\n    padding: 5px 10px;\n}\n\n#taskDesc:focus-visible {\n    outline: none;\n    color: var(--white);\n    background-color: black;\n    border-radius: 1rem;\n}\n\n.add-task {\n    font-family: 'Inconsolata', monospace;\n    font-size: 0.9rem;\n    font-weight: bold;\n    margin: 20px;\n    padding: 5px 10px;\n    background-color: var(--blue);\n    border: none;\n    color: white;\n    box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 5px;\n}\n\n.add-task:active {\n    background-color: var(--darkblue);\n}\n\n.submit-btn {\n    margin: 10px 5px;\n    background-color: var(--blue);\n    border: none;\n    border-radius: 0.2rem;\n    padding: 5px 10px;\n    color: #ffffffc4;\n    font-weight: bold;\n}\n\n.close-btn {\n    margin-left: 280px;\n    background-color: red;\n    border: none;\n    border-radius: 0.2rem;\n    padding: 5px 10px;\n    color: #ffffffc4;\n    font-weight: bold;\n}\n\n.project-item {\n    height: 32px;\n}\n\n.project-input-wrapper {\n    display: flex;\n    align-items: center;\n}\n\ninput#addProject {\n    margin: 10px 20px;\n    padding: 5px 10px;\n    background: var(--black);\n    border: none;\n    border-radius: 0.5rem;\n    outline: none;\n    color: white;\n}\n\ninput#addProject:focus-visible {\n    background-color: white;\n    color: black;\n}\n\n.project-input-wrapper > button {\n    background: white;\n    border: none;\n    border-radius: 100%;\n    margin-left: -10px;\n    width: 2rem;\n    height: 2rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;700&family=Inknut+Antiqua:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap');\n\n/* font-family: 'Inconsolata', monospace;\nfont-family: 'Inknut Antiqua', serif;\nfont-family: 'Roboto', sans-serif; */\n\n:root {\n    --black: #164E63;\n    --grey: rgba(0, 0, 0, 0.75);\n    --deepsea: #155E75;\n    --darkblue: #0E7490;\n    --blue: #06B6D4;\n    --white: #FFFFFF;\n    --white8: rgba(255, 255, 255, 0.8);\n    --white5: rgba(255, 255, 255, 0.5); \n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: var(--black);\n    font-family: 'Roboto', sans-serif;\n    font-size: 18px;\n}\n\n.wrapper {\n    background-color: var(--deepsea);\n    max-width: 550px;\n    min-height: 100vh;\n    margin: 0 auto;\n}\n\nheader {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--darkblue);\n    padding-bottom: 20px;\n}\n\nh1,\np {\n    margin: 0;\n}\n\nh2 {\n    margin: 20px;\n    color: var(--white);\n    font-family: 'Inconsolata', monospace;\n    border-bottom: 2px solid var(--white5);\n    padding-bottom: 5px;\n}\n\nheader > h1 {\n    font-family: 'Inknut Antiqua', serif;\n    font-size: 3rem;\n    color: var(--white);\n    text-align: center;\n}\n\nheader > p {\n    font-family: 'Inconsolata', monospace;\n    font-size: 0.9rem;\n    color: white;\n    text-align: left;\n    margin: 0 85px;\n}\n\nnav {\n    align-self: end;\n    position: relative;\n    bottom: -34px;\n\n    display: flex;\n    gap: 1px;\n}\n\nbutton {\n    cursor: pointer;\n}\n\nbutton > img {\n    pointer-events: none;\n}\n\nheader button {\n    height: 34px;\n    padding: 5px 10px;\n    border: none;\n    background-color: var(--blue);\n    font-family: 'Inconsolata', monospace;\n    font-weight: bold;\n    color: var(--white8);\n}\n\nheader button:hover {\n    background-color: var(--black);\n    cursor: pointer;\n}\n\nimg {\n    height: 20px;\n    width: auto;\n}\n\n.task-header {\n    display: flex;\n    border-bottom: var(--grey);\n    font-weight: bold;\n    font-size: 0.9rem;\n    color: var(--white5);\n}\n\n\nmain {\n    margin-top: 20px;\n}\n\n.task-header {\n    display: flex;\n    align-items: baseline;\n    gap: 10px;\n    padding-bottom: 10px;\n    border-bottom: 1px solid var(--grey);\n    margin: 10px 200px 25px 20px;\n    color: var(--white5);\n    list-style: none;\n}\n\n.task-header .active {\n    color: var(--white);\n    font-size: 1.5rem;\n}\n\n.task-container > .task-item,\n.project-item {\n    display: flex;\n    align-items: center;\n    padding: 0 20px;\n    height: 32px;\n    color: var(--white8)\n}\n\n.task-container > .task-item:hover,\n.project-item:hover {\n    background-color: var(--blue);\n}\n\n.task-container label {\n    padding: 5px 10px;\n}\n\n.task-menu {\n    display: none;\n    margin: 0 10px 0 auto;\n}\n\n.task-menu-visible {\n    display: flex;\n    gap: 5px;\n}\n\nlabel[for=\"taskInput\"] {\n    position: relative;\n    right: 8px;\n    color: #000000a1;\n    font-size: 2rem;\n}\n\ninput#taskInput {\n    position: relative;\n    right: 37px;\n    width: 100%;\n    padding: 5px 5px 5px 30px;\n    background-color: var(--black);\n    border: none;\n    font-size: 1rem;\n    border-radius: 1rem;\n}\n\ninput#taskInput:focus-visible {\n    outline: none;\n    color: var(--white);\n    background-color: var(--black);\n    border-radius: 1rem;\n    border:none;\n}\n\n.enter-btn {\n    position: relative;\n    right: 75px;\n    border: none;\n    background-color: transparent;\n}\n\n.form {\n    display: block;\n    padding: 10px;\n    margin: 0 85px 0 20px;\n    background-color: var(--black);\n    border-radius: 1rem;\n}\n\n\n.form label {\n    padding: 0;\n    font-size: 0.9rem;\n}\n\n.form > input:first-of-type {\n    display: block;\n    margin-bottom: 15px;\n    padding: 5px 10px;\n    border: none;\n    border-radius: 1rem;\n    background: #000000a6;\n    color: white;\n    font-size: 1.5rem;\n}\n\ninput#dueDate {\n    margin-right: 20px;\n}\n\nlabel[for=\"taskDesc\"] {\n    display: block;\n    margin-top: 10px;\n}\n\ninput#taskDesc {\n    display: block;\n    background-color: transparent;\n    border: none;\n    width: 400px;\n    padding: 5px 10px;\n}\n\n#taskDesc:focus-visible {\n    outline: none;\n    color: var(--white);\n    background-color: black;\n    border-radius: 1rem;\n}\n\n.add-task {\n    font-family: 'Inconsolata', monospace;\n    font-size: 0.9rem;\n    font-weight: bold;\n    margin: 20px;\n    padding: 5px 10px;\n    background-color: var(--blue);\n    border: none;\n    color: white;\n    box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 5px;\n}\n\n.add-task:active {\n    background-color: var(--darkblue);\n}\n\n.submit-btn {\n    margin: 10px 5px;\n    background-color: var(--blue);\n    border: none;\n    border-radius: 0.2rem;\n    padding: 5px 10px;\n    color: #ffffffc4;\n    font-weight: bold;\n}\n\n.close-btn {\n    margin-left: 280px;\n    background-color: red;\n    border: none;\n    border-radius: 0.2rem;\n    padding: 5px 10px;\n    color: #ffffffc4;\n    font-weight: bold;\n}\n\n.project-item {\n    height: 32px;\n}\n\n.project-input-wrapper {\n    display: flex;\n    align-items: center;\n}\n\ninput#addProject {\n    margin: 10px 20px;\n    padding: 5px 10px;\n    background: var(--black);\n    border: none;\n    border-radius: 0.5rem;\n    outline: none;\n    color: white;\n}\n\ninput#addProject:focus-visible {\n    background-color: white;\n    color: black;\n}\n\n.project-input-wrapper > button {\n    background: white;\n    border: none;\n    border-radius: 100%;\n    margin-left: -10px;\n    width: 2rem;\n    height: 2rem;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _public_up_arrow_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./public/up-arrow-icon.png */ "./src/public/up-arrow-icon.png");







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



// import { projects, addProject, test } from "./handler.js"

const content = document.querySelector("#content");

content.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.initializeWebsite)());

const render = () => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.remove();
    content.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_1__.initializeWebsite)());
}

const renderProjectList = () => {
    const main = document.querySelector("main");
    main.replaceChildren((0,_dom__WEBPACK_IMPORTED_MODULE_1__.createProjectsList)());
    changeProjectTitleDisplay();
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

    if (e.target.className === "project-item") {
        const targetId = e.target.dataset.itemId;
        (0,_handler__WEBPACK_IMPORTED_MODULE_2__.changeProject)(_handler__WEBPACK_IMPORTED_MODULE_2__.projects[targetId]);
        render();
    }

    if (e.target.className === "add-project-btn") {
        const addProjectInput = document.querySelector("#addProject");
        const projectTitle = addProjectInput.value;
        const projectTitleTrim = projectTitle.trim();

        if (projectTitle != "" && projectTitleTrim != "") {
            console.log(_handler__WEBPACK_IMPORTED_MODULE_2__.projects)
            ;(0,_handler__WEBPACK_IMPORTED_MODULE_2__.addProject)(projectTitle, _handler__WEBPACK_IMPORTED_MODULE_2__.projects);
            console.log(_handler__WEBPACK_IMPORTED_MODULE_2__.projects)
            renderProjectList();
        }
    }

    // if (e.target.className === "edit-project-btn") {

    // }

    if (e.target.className === "delete-project-btn") {
        const targetId = e.target.parentNode.dataset.itemId;
        (0,_handler__WEBPACK_IMPORTED_MODULE_2__.removeProject)(targetId);
        renderProjectList();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmaUU7QUFDdkI7QUFDUDtBQUNLO0FBQ0Q7QUFDVTs7QUFFakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQ0FBaUMsZ0RBQUk7QUFDckMsbUNBQW1DLDRDQUFHOztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsa0RBQUk7QUFDckM7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QUFDaEMsWUFBWSxxREFBVSxlQUFlLDhDQUFRO0FBQzdDLHdCQUF3Qiw4Q0FBUTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQVEsdURBQWE7QUFDckI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbmNvbnNvbGF0YTp3Z2h0QDMwMDs0MDA7NzAwJmZhbWlseT1JbmtudXQrQW50aXF1YTp3Z2h0QDMwMDs0MDA7NzAwJmZhbWlseT1Sb2JvdG86d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbmZvbnQtZmFtaWx5OiAnSW5rbnV0IEFudGlxdWEnLCBzZXJpZjtcXG5mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7ICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLWJsYWNrOiAjMTY0RTYzO1xcbiAgICAtLWdyZXk6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAgIC0tZGVlcHNlYTogIzE1NUU3NTtcXG4gICAgLS1kYXJrYmx1ZTogIzBFNzQ5MDtcXG4gICAgLS1ibHVlOiAjMDZCNkQ0O1xcbiAgICAtLXdoaXRlOiAjRkZGRkZGO1xcbiAgICAtLXdoaXRlODogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICAtLXdoaXRlNTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyBcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kZWVwc2VhKTtcXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5oMSxcXG5wIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMiB7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXdoaXRlNSk7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbmhlYWRlciA+IGgxIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmtudXQgQW50aXF1YScsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyID4gcCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbjogMCA4NXB4O1xcbn1cXG5cXG5uYXYge1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAtMzRweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uID4gaW1nIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlOCk7XFxufVxcblxcbmhlYWRlciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW1nIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tZ3JleSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlNSk7XFxufVxcblxcblxcbm1haW4ge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gICAgbWFyZ2luOiAxMHB4IDIwMHB4IDI1cHggMjBweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlNSk7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi50YXNrLWhlYWRlciAuYWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciA+IC50YXNrLWl0ZW0sXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGU4KVxcbn1cXG5cXG4udGFzay1jb250YWluZXIgPiAudGFzay1pdGVtOmhvdmVyLFxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGxhYmVsIHtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbi50YXNrLW1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW46IDAgMTBweCAwIGF1dG87XFxufVxcblxcbi50YXNrLW1lbnUtdmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5sYWJlbFtmb3I9XFxcInRhc2tJbnB1dFxcXCJdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogOHB4O1xcbiAgICBjb2xvcjogIzAwMDAwMGExO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmlucHV0I3Rhc2tJbnB1dCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDM3cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG5pbnB1dCN0YXNrSW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgYm9yZGVyOm5vbmU7XFxufVxcblxcbi5lbnRlci1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiA3NXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDAgODVweCAwIDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuXFxuLmZvcm0gbGFiZWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLmZvcm0gPiBpbnB1dDpmaXJzdC1vZi10eXBlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDBhNjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuaW5wdXQjZHVlRGF0ZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJ0YXNrRGVzY1xcXCJdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbmlucHV0I3Rhc2tEZXNjIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcblxcbiN0YXNrRGVzYzpmb2N1cy12aXNpYmxlIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5hZGQtdGFzayB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNSkgMXB4IDFweCA1cHg7XFxufVxcblxcbi5hZGQtdGFzazphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrYmx1ZSk7XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gICAgbWFyZ2luOiAxMHB4IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgY29sb3I6ICNmZmZmZmZjNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZS1idG4ge1xcbiAgICBtYXJnaW4tbGVmdDogMjgwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZmM0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuICAgIGhlaWdodDogMzJweDtcXG59XFxuXFxuLnByb2plY3QtaW5wdXQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0I2FkZFByb2plY3Qge1xcbiAgICBtYXJnaW46IDEwcHggMjBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaW5wdXQjYWRkUHJvamVjdDpmb2N1cy12aXNpYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnByb2plY3QtaW5wdXQtd3JhcHBlciA+IGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wi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O0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixZQUFZO0lBQ1osMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW5jb25zb2xhdGE6d2dodEAzMDA7NDAwOzcwMCZmYW1pbHk9SW5rbnV0K0FudGlxdWE6d2dodEAzMDA7NDAwOzcwMCZmYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXG5mb250LWZhbWlseTogJ0lua251dCBBbnRpcXVhJywgc2VyaWY7XFxuZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1ibGFjazogIzE2NEU2MztcXG4gICAgLS1ncmV5OiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICAtLWRlZXBzZWE6ICMxNTVFNzU7XFxuICAgIC0tZGFya2JsdWU6ICMwRTc0OTA7XFxuICAgIC0tYmx1ZTogIzA2QjZENDtcXG4gICAgLS13aGl0ZTogI0ZGRkZGRjtcXG4gICAgLS13aGl0ZTg6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgLS13aGl0ZTU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgXFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGVlcHNlYSk7XFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuaDEsXFxucCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaDIge1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBtb25vc3BhY2U7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13aGl0ZTUpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG5oZWFkZXIgPiBoMSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5rbnV0IEFudGlxdWEnLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciA+IHAge1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBtYXJnaW46IDAgODVweDtcXG59XFxuXFxubmF2IHtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogLTM0cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbiA+IGltZyB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIG1vbm9zcGFjZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZTgpO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmltZyB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWdyZXkpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZTUpO1xcbn1cXG5cXG5cXG5tYWluIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JleSk7XFxuICAgIG1hcmdpbjogMTBweCAyMDBweCAyNXB4IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZTUpO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFzay1oZWFkZXIgLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgPiAudGFzay1pdGVtLFxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlOClcXG59XFxuXFxuLnRhc2stY29udGFpbmVyID4gLnRhc2staXRlbTpob3ZlcixcXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBsYWJlbCB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG4udGFzay1tZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWFyZ2luOiAwIDEwcHggMCBhdXRvO1xcbn1cXG5cXG4udGFzay1tZW51LXZpc2libGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJ0YXNrSW5wdXRcXFwiXSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcmlnaHQ6IDhweDtcXG4gICAgY29sb3I6ICMwMDAwMDBhMTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5pbnB1dCN0YXNrSW5wdXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiAzN3B4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuaW5wdXQjdGFza0lucHV0OmZvY3VzLXZpc2libGUge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGJvcmRlcjpub25lO1xcbn1cXG5cXG4uZW50ZXItYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICByaWdodDogNzVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwIDg1cHggMCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcblxcbi5mb3JtIGxhYmVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5mb3JtID4gaW5wdXQ6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwYTY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmlucHV0I2R1ZURhdGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwidGFza0Rlc2NcXFwiXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5pbnB1dCN0YXNrRGVzYyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG4jdGFza0Rlc2M6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgbW9ub3NwYWNlO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUpIDFweCAxcHggNXB4O1xcbn1cXG5cXG4uYWRkLXRhc2s6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2JsdWUpO1xcbn1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICAgIG1hcmdpbjogMTBweCA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmYzQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI4MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgY29sb3I6ICNmZmZmZmZjNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbnB1dCNhZGRQcm9qZWN0IHtcXG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmlucHV0I2FkZFByb2plY3Q6Zm9jdXMtdmlzaWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0LWlucHV0LXdyYXBwZXIgPiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdHMsIHdoaWNoQWN0aXZlLCB0ZXN0LCBhZGRUYXNrIH0gZnJvbSAnLi9oYW5kbGVyJztcbmltcG9ydCBNZW51IGZyb20gJy4vcHVibGljL2hhbWJ1cmdlci5wbmcnO1xuaW1wb3J0IEJpbiBmcm9tICcuL3B1YmxpYy9iaW4ucG5nJztcbmltcG9ydCBFZGl0IGZyb20gJy4vcHVibGljL2VkaXRpbmcucG5nJztcbmltcG9ydCBFbnRlciBmcm9tICcuL3B1YmxpYy9lbnRlci5wbmcnO1xuaW1wb3J0IFVwQXJyb3cgZnJvbSAnLi9wdWJsaWMvdXAtYXJyb3ctaWNvbi5wbmcnO1xuXG5mdW5jdGlvbiBpbnNlcnRBZnRlcihuZXdOb2RlLCByZWZlcmVuY2VOb2RlKSB7XG4gICAgcmVmZXJlbmNlTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZlcmVuY2VOb2RlLm5leHRTaWJsaW5nKTtcbn1cblxuY29uc3QgY3JlYXRlUGFyYWdyYXBoID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIHA7XG59XG5cbmNvbnN0IGNyZWF0ZUltYWdlID0gKGltYWdlKSA9PiB7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IGltYWdlO1xuXG4gICAgcmV0dXJuIGltZztcbn1cblxuY29uc3QgY3JlYXRlTGlzdCA9ICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkudGV4dENvbnRlbnQgPSB0ZXh0O1xuXG4gICAgcmV0dXJuIGxpO1xufVxuXG5jb25zdCBjcmVhdGVJbnB1dCA9IChpZCwgdHlwZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGlkKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xuXG4gICAgcmV0dXJuIGlucHV0O1xufVxuXG5jb25zdCBjcmVhdGVMYWJlbCA9IChpZCwgbGFiZWxUZXh0KSA9PiB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlkKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcblxuICAgIHJldHVybiBsYWJlbDtcbn1cblxuY29uc3QgY3JlYXRlVGFza0l0ZW0gPSAoaWQsIGxhYmVsVGV4dCkgPT4ge1xuICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWl0ZW1cIik7XG4gICAgdGFza0l0ZW0uZGF0YXNldC5pdGVtSWQgPSBpZDtcbiAgICBjb25zdCBpbnB1dCA9IGNyZWF0ZUlucHV0KGlkLCBcImNoZWNrYm94XCIpO1xuXG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChpZCwgbGFiZWxUZXh0KTtcblxuICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICByZXR1cm4gdGFza0l0ZW07XG59XG5cbmNvbnN0IGNyZWF0ZU1lbnVCdXR0b24gPSAoaWQsIGVkaXRCdG5DbGFzcywgZGVsZXRlQnRuQ2xhc3MpID0+IHtcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW1lbnVcIik7XG4gICAgbWVudUJ1dHRvbi5kYXRhc2V0Lml0ZW1JZCA9IGlkO1xuXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGNvbnN0IGVkaXRJY29uID0gY3JlYXRlSW1hZ2UoRWRpdCk7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGNyZWF0ZUltYWdlKEJpbik7XG5cbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoZWRpdEJ0bkNsYXNzKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChkZWxldGVCdG5DbGFzcylcblxuICAgIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICBtZW51QnV0dG9uLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgIG1lbnVCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgIHJldHVybiBtZW51QnV0dG9uO1xufVxuXG5jb25zdCBjcmVhdGVUZXh0SW5wdXQgPSAoaWQsIGxhYmVsVGV4dCwgcGxhY2Vob2xkZXI9XCJcIikgPT4ge1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGVJbnB1dChpZCwgXCJ0ZXh0XCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHBsYWNlaG9sZGVyKTtcbiAgICBcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUxhYmVsKGlkLCBsYWJlbFRleHQpO1xuICAgIFxuICAgIHRleHRJbnB1dC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgdGV4dElucHV0LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBcbiAgICByZXR1cm4gdGV4dElucHV0O1xufSBcblxuY29uc3QgY3JlYXRlT3B0aW9uID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gdmFsdWU7XG5cbiAgICByZXR1cm4gb3B0aW9uO1xufVxuXG5jb25zdCBjcmVhdGVGb3JtID0gKHRpdGxlVmFsdWUsIGR1ZURhdGVWYWx1ZSwgcHJpb3JpdHlWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgaWQ9XCJub25lXCIgKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybVwiKTtcbiAgICBmb3JtLmRhdGFzZXQuaXRlbUlkID0gaWQ7XG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSBjcmVhdGVJbnB1dChcInRhc2tUaXRsZVwiLCBcInRleHRcIik7XG4gICAgdGFza1RpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGFzayB0aXRsZS4uLlwiKTtcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBjcmVhdGVMYWJlbChcImR1ZURhdGVcIiwgXCJEdWUgRGF0ZTogXCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBjcmVhdGVJbnB1dChcImR1ZURhdGVcIiwgXCJkYXRlXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBjcmVhdGVMYWJlbChcInByaW9yaXR5XCIsIFwiUHJpb3JpdHk6IFwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1wcmlvcml0eVwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gY3JlYXRlTGFiZWwoXCJ0YXNrRGVzY1wiLCBcIk5vdGVzOlwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUlucHV0KFwidGFza0Rlc2NcIiwgXCJ0ZXh0XCIpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiaW5zZXJ0IHlvdXIgbm90ZXMgaGVyZVwiKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idG5cIik7XG4gICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1idG5cIik7XG4gICAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIkNsb3NlXCI7XG5cbiAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBjcmVhdGVPcHRpb24oXCJIaWdoXCIpO1xuICAgIGNvbnN0IG5vcm1hbFByaW9yaXR5ID0gY3JlYXRlT3B0aW9uKFwiTm9ybWFsXCIpO1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gY3JlYXRlT3B0aW9uKFwiTG93XCIpO1xuXG4gICAgdGFza1RpdGxlLnZhbHVlID0gdGl0bGVWYWx1ZTtcbiAgICBkdWVEYXRlLnZhbHVlID0gZHVlRGF0ZVZhbHVlO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gZGVzY3JpcHRpb25WYWx1ZTtcblxuICAgIC8vIHNlbGVjdGVkIGF0dHJpYnV0ZSB3aWxsIGJlY29tZSB0aGUgdmFsdWUgb2YgdGhlIHByaW9yaXR5XG4gICAgc3dpdGNoIChwcmlvcml0eVZhbHVlKSB7XG4gICAgICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICAgICAgICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm5vcm1hbFwiOlxuICAgICAgICAgICAgbm9ybWFsUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImxvd1wiOlxuICAgICAgICAgICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuICAgIHByaW9yaXR5LmFwcGVuZENoaWxkKG5vcm1hbFByaW9yaXR5KTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG4gICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgICByZXR1cm4gZm9ybTtcbn1cblxuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3Qgc3VidGl0bGUxID0gY3JlYXRlUGFyYWdyYXBoKFwiR29vZCBNb3JuaW5nLCBTaGlpZWx0eSFcIilcbiAgICBjb25zdCBzdWJ0aXRsZTIgPSBjcmVhdGVQYXJhZ3JhcGgoXCJZb3UgaGF2ZSAzIHRhc2sgbGVmdCB0byBkbyxcIilcbiAgICBjb25zdCBzdWJ0aXRsZTMgPSBjcmVhdGVQYXJhZ3JhcGgoXCJMZXQncyBkbyBpdCFcIilcbiAgICBjb25zdCBwcm9qZWN0TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHByb2plY3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBtZW51SWNvbiA9IGNyZWF0ZUltYWdlKE1lbnUpO1xuICAgIFxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJKdXN0IERvIEl0IExpc3RcIjtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB3aGljaEFjdGl2ZShwcm9qZWN0cykucHJvamVjdFRpdGxlO1xuICAgIHByb2plY3RNZW51LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1tZW51XCIpO1xuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1tZW51XCIpO1xuICAgIFxuICAgIHByb2plY3RNZW51LmFwcGVuZENoaWxkKG1lbnVJY29uKTtcbiAgICBcbiAgICBwcm9qZWN0TmF2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdE5hdi5hcHBlbmRDaGlsZChwcm9qZWN0TWVudSk7XG4gICAgXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUxKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3VidGl0bGUzKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hdik7XG4gICAgXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuY29uc3QgY3JlYXRlVGFza3NIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvZGF5ID0gY3JlYXRlTGlzdChcIlRvZGF5XCIpOyBcbiAgICBjb25zdCB0b21vcnJvdyA9IGNyZWF0ZUxpc3QoXCJUb21vcnJvd1wiKTsgXG4gICAgY29uc3QgdXBjb21pbmcgPSBjcmVhdGVMaXN0KFwiVXBjb21pbmdcIik7IFxuICAgIGNvbnN0IHNvbWVkYXkgPSBjcmVhdGVMaXN0KFwiU29tZWRheVwiKTtcblxuICAgIHRhc2tzSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWhlYWRlclwiKTtcbiAgICB0b2RheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIFxuICAgIHRhc2tzSGVhZGVyLmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgICB0YXNrc0hlYWRlci5hcHBlbmRDaGlsZCh0b21vcnJvdyk7XG4gICAgdGFza3NIZWFkZXIuYXBwZW5kQ2hpbGQodXBjb21pbmcpO1xuICAgIHRhc2tzSGVhZGVyLmFwcGVuZENoaWxkKHNvbWVkYXkpO1xuXG4gICAgcmV0dXJuIHRhc2tzSGVhZGVyXG59XG5cbmNvbnN0IGNyZWF0ZVRhc2tzQ29udGFpbmVyID0gKCkgPT57XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCIrIEFkZCBUYXNrXCI7XG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2tcIik7XG4gICAgXG4gICAgd2hpY2hBY3RpdmUocHJvamVjdHMpLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgdGFza0lkID0gd2hpY2hBY3RpdmUocHJvamVjdHMpLnRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IHRhc2sudGl0bGU7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlVGFza0l0ZW0odGFza0lkLCB0YXNrVGl0bGUpO1xuXG4gICAgICAgIGNoZWNrYm94LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVCdXR0b24odGFza0lkLCBcImVkaXQtdGFzay1idG5cIiwgXCJkZWxldGUtdGFzay1idG5cIikpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICB9KVxuICAgIFxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5cbiAgICByZXR1cm4gdGFza0NvbnRhaW5lclxufVxuXG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT4geyAgICBcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tzSGVhZGVyKCkpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlVGFza3NDb250YWluZXIoKSk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn1cblxuY29uc3QgY3JlYXRlUHJvamVjdHNMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHByb2plY3RMaXN0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxuICAgIHByb2plY3RMaXN0SGVhZGluZy50ZXh0Q29udGVudCA9IGBQcm9qZWN0ICgke3Byb2plY3RzLmxlbmd0aH0pOmA7XG4gICAgbGlzdFdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RIZWFkaW5nKTtcblxuICAgIGNvbnN0IGlucHV0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5wdXRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWlucHV0LXdyYXBwZXJcIik7XG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gY3JlYXRlSW5wdXQoXCJhZGRQcm9qZWN0XCIsIFwidGV4dFwiKTtcbiAgICBjb25zdCBhcnJvd0ljb24gPSBjcmVhdGVJbWFnZShVcEFycm93KTtcbiAgICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgXG4gICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiKyBDcmVhdGUgbmV3IHByb2plY3RcIik7XG4gICAgaW5wdXRCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcbiAgICBcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XG4gICAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3RUaXRsZTtcbiAgICAgICAgaXRlbS5kYXRhc2V0Lml0ZW1JZCA9IHByb2plY3RJZDtcbiAgICAgICAgXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUJ1dHRvbihwcm9qZWN0SWQsIFwiZWRpdC1wcm9qZWN0LWJ0blwiLCBcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKSk7XG4gICAgICAgIGxpc3RXcmFwcGVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH0pXG5cbiAgICBpbnB1dEJ0bi5hcHBlbmRDaGlsZChhcnJvd0ljb24pO1xuICAgIGlucHV0V3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuICAgIGlucHV0V3JhcHBlci5hcHBlbmRDaGlsZChpbnB1dEJ0bik7XG4gICAgbGlzdFdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXRXcmFwcGVyKTtcblxuICAgIHJldHVybiBsaXN0V3JhcHBlcjtcbn1cblxuY29uc3QgaW5pdGlhbGl6ZVdlYnNpdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwid3JhcHBlclwiKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG5cbiAgICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZXhwb3J0IHsgaW5pdGlhbGl6ZVdlYnNpdGUsIGNyZWF0ZVRhc2tzSGVhZGVyLCBjcmVhdGVUYXNrc0NvbnRhaW5lciwgY3JlYXRlRm9ybSwgY3JlYXRlUHJvamVjdHNMaXN0IH0iLCIvLyBUb2RvcyBhbmQgUHJvamVjdHNcbmNvbnN0IHByb2plY3RzID0gW1xuICAgIHtcbiAgICAgICAgXCJwcm9qZWN0VGl0bGVcIjogXCJQcm9qZWN0IDFcIixcbiAgICAgICAgXCJ0YXNrc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRhc2sgMVwiLFxuICAgICAgICAgICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMjItMDEtMDFcIixcbiAgICAgICAgICAgICAgICBcInByaW9yaXR5XCI6IFwiaGlnaFwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGRlc2NyaXB0aW9uIG9mIHRhc2sgMVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJUYXNrIDJcIixcbiAgICAgICAgICAgICAgICBcImR1ZURhdGVcIjogXCIyMDIyLTAxLTAyXCIsXG4gICAgICAgICAgICAgICAgXCJwcmlvcml0eVwiOiBcImhpZ2hcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBpcyBkZXNjcmlwdGlvbiBvZiB0YXNrIDJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiVGFzayAzXCIsXG4gICAgICAgICAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAyMi0wMy0wMVwiLFxuICAgICAgICAgICAgICAgIFwicHJpb3JpdHlcIjogXCJsb3dcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBpcyBkZXNjcmlwdGlvbiBvZiB0YXNrIDNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiSXQgd29ya3MgeWF5ISFcIixcbiAgICAgICAgICAgICAgICBcImR1ZURhdGVcIjogXCIyMDIyLTA0LTAxXCIsXG4gICAgICAgICAgICAgICAgXCJwcmlvcml0eVwiOiBcImxvd1wiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGRlc2NyaXB0aW9uIG9mIHRhc2sgNFwiXG4gICAgICAgICAgICB9LCBdLFxuICAgICAgICBcInN0YXR1c1wiOiBcImluYWN0aXZlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwicHJvamVjdFRpdGxlXCI6IFwiUHJvamVjdCAyXCIsXG4gICAgICAgIFwidGFza3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJUYXNrIDk5XCIsXG4gICAgICAgICAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAzMi0wNC0wMVwiLFxuICAgICAgICAgICAgICAgIFwicHJpb3JpdHlcIjogXCJsb3dcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBpcyBkZXNjcmlwdGlvbiBvZiB0YXNrIDk5XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlRhc2sgMTAwXCIsXG4gICAgICAgICAgICAgICAgXCJkdWVEYXRlXCI6IFwiMjAzMi0wNC0wMlwiLFxuICAgICAgICAgICAgICAgIFwicHJpb3JpdHlcIjogXCJsb3dcIixcbiAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBpcyBkZXNjcmlwdGlvbiBvZiB0YXNrIDEwMFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJUYXNrIDEwMVwiLFxuICAgICAgICAgICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMzItMDQtMDNcIixcbiAgICAgICAgICAgICAgICBcInByaW9yaXR5XCI6IFwiaGlnaFwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGRlc2NyaXB0aW9uIG9mIHRhc2sgMTAxXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlNvbWV0aGluZyBpc24ndCByaWdodFwiLFxuICAgICAgICAgICAgICAgIFwiZHVlRGF0ZVwiOiBcIjIwMjItMDQtMTBcIixcbiAgICAgICAgICAgICAgICBcInByaW9yaXR5XCI6IFwiaGlnaFwiLFxuICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGlzIGRlc2NyaXB0aW9uIG9mIHRhc2sgMTAwMFwiXG4gICAgICAgICAgICB9LCBdLFxuICAgICAgICBcInN0YXR1c1wiOiBcImFjdGl2ZVwiLFxuICAgIH1cbl07IFxuXG4vLyBUb2RvcyBmdW5jdGlvbiBmYWN0b3J5XG5jb25zdCBUYXNrID0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uIH1cbn1cblxuLy8gUHJvamVjdCBmdW5jdGlvbiBmYWN0b3J5XG5jb25zdCBQcm9qZWN0ID0gKHByb2plY3RUaXRsZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gW107XG4gICAgY29uc3Qgc3RhdHVzID0gXCJpbmFjdGl2ZVwiO1xuXG4gICAgcmV0dXJuIHtwcm9qZWN0VGl0bGUsIHRhc2tzLCBzdGF0dXN9XG59XG5cbmNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gd2hpY2hBY3RpdmUocHJvamVjdHMpO1xuICAgIGNvbnN0IHRhc2sgPSBUYXNrKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pO1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG59XG5cbmNvbnN0IGVkaXRUYXNrID0gKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24sIGlkKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSB3aGljaEFjdGl2ZShwcm9qZWN0cyk7XG4gICAgY3VycmVudFByb2plY3QudGFza3NbaWRdLnRpdGxlID0gdGl0bGU7XG4gICAgY3VycmVudFByb2plY3QudGFza3NbaWRdLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzW2lkXS5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIGN1cnJlbnRQcm9qZWN0LnRhc2tzW2lkXS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xufVxuXG5jb25zdCByZW1vdmVUYXNrID0gKGlkKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSB3aGljaEFjdGl2ZShwcm9qZWN0cyk7XG4gICAgY3VycmVudFByb2plY3QudGFza3Muc3BsaWNlKGlkLCAxKTtcbn1cblxuY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSwgYXJyKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QodGl0bGUpO1xuICAgIGFyci5wdXNoKHByb2plY3QpO1xuICAgIGlmIChhcnIubGVuZ3RoID09PSAxKSBhcnJbMF0uc3RhdHVzID0gXCJhY3RpdmVcIjtcbn1cblxuY29uc3Qgd2hpY2hBY3RpdmUgPSAocHJvamVjdHMpID0+IHtcbiAgICBsZXQgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LnN0YXR1cyA9PSBcImFjdGl2ZVwiKTtcbiAgICBpZiAoYWN0aXZlUHJvamVjdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZVByb2plY3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdHNbMF0uc3RhdHVzID0gXCJhY3RpdmVcIjtcbiAgICAgICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LnN0YXR1cyA9PSBcImFjdGl2ZVwiKTtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZVByb2plY3Q7XG4gICAgfVxufVxuXG5jb25zdCBjaGFuZ2VQcm9qZWN0ID0gKHRhcmdldFByb2plY3QpID0+IHtcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHdoaWNoQWN0aXZlKHByb2plY3RzKTtcbiAgICBjdXJyZW50UHJvamVjdC5zdGF0dXMgPSBcImluYWN0aXZlXCI7XG4gICAgdGFyZ2V0UHJvamVjdC5zdGF0dXMgPSBcImFjdGl2ZVwiO1xufVxuXG5jb25zdCByZW1vdmVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuXG5jb25zdCB0ZXN0ID0gKCkgPT4gY29uc29sZS5sb2coXCJIZWxsbyBmcmllbmQuXCIpO1xuXG5leHBvcnQgeyBwcm9qZWN0cywgYWRkVGFzaywgZWRpdFRhc2sgLHJlbW92ZVRhc2ssIGFkZFByb2plY3QsIGNoYW5nZVByb2plY3QsIHJlbW92ZVByb2plY3QsIHdoaWNoQWN0aXZlLCB0ZXN0IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGluaXRpYWxpemVXZWJzaXRlLCBjcmVhdGVUYXNrc0hlYWRlciwgY3JlYXRlVGFza3NDb250YWluZXIsIGNyZWF0ZUZvcm0sIGNyZWF0ZVByb2plY3RzTGlzdCB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgcHJvamVjdHMsIGFkZFByb2plY3QsIGFkZFRhc2ssIGVkaXRUYXNrLCByZW1vdmVUYXNrLCBjaGFuZ2VQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCB3aGljaEFjdGl2ZSB9IGZyb20gXCIuL2hhbmRsZXJcIlxuLy8gaW1wb3J0IHsgcHJvamVjdHMsIGFkZFByb2plY3QsIHRlc3QgfSBmcm9tIFwiLi9oYW5kbGVyLmpzXCJcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChpbml0aWFsaXplV2Vic2l0ZSgpKTtcblxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG4gICAgd3JhcHBlci5yZW1vdmUoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGluaXRpYWxpemVXZWJzaXRlKCkpO1xufVxuXG5jb25zdCByZW5kZXJQcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgbWFpbi5yZXBsYWNlQ2hpbGRyZW4oY3JlYXRlUHJvamVjdHNMaXN0KCkpO1xuICAgIGNoYW5nZVByb2plY3RUaXRsZURpc3BsYXkoKTtcbn1cblxuY29uc3QgY3Vyc29yRm9jdXMgPSAoZWxlbWVudFNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50U2VsZWN0b3IpO1xuICAgIHRhcmdldC5mb2N1cygpO1xuICAgIHRhcmdldC5zZWxlY3QoKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0QWZ0ZXIobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSkge1xuICAgIHJlZmVyZW5jZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZS5uZXh0U2libGluZyk7XG59XG5cbmNvbnN0IGRpc3BsYXlPbkhvdmVyID0gKGl0ZW1zKSA9PiB7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRJZCA9IGl0ZW0uZGF0YXNldC5pdGVtSWQ7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2stbWVudVtkYXRhLWl0ZW0taWQ9XCIke2VsZW1lbnRJZH1cIl1gKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2stbWVudS12aXNpYmxlXCIpO1xuICAgICAgICB9KVxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRJZCA9IGl0ZW0uZGF0YXNldC5pdGVtSWQ7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2stbWVudVtkYXRhLWl0ZW0taWQ9XCIke2VsZW1lbnRJZH1cIl1gKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInRhc2stbWVudS12aXNpYmxlXCIpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmNvbnN0IGNoYW5nZVByb2plY3RUaXRsZURpc3BsYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2PmJ1dHRvbjpmaXJzdC1vZi10eXBlXCIpXG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSB3aGljaEFjdGl2ZShwcm9qZWN0cykucHJvamVjdFRpdGxlO1xufVxuXG5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwicHJvamVjdHMtbWVudVwiKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICAgICAgaWYgKG1haW4uY2hpbGROb2Rlcy5sZW5ndGggPT0gMil7XG4gICAgICAgICAgICBtYWluLnJlcGxhY2VDaGlsZHJlbihjcmVhdGVQcm9qZWN0c0xpc3QoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYWluLnJlcGxhY2VDaGlsZHJlbihjcmVhdGVUYXNrc0hlYWRlcigpLCBjcmVhdGVUYXNrc0NvbnRhaW5lcigpKTtcbiAgICAgICAgICAgIGNoYW5nZVByb2plY3RUaXRsZURpc3BsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJlZGl0LXRhc2stYnRuXCIpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaXRlbUlkO1xuICAgICAgICBjb25zdCBjaGVja2xpc3QgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSB3aGljaEFjdGl2ZShwcm9qZWN0cyk7XG4gICAgICAgIGluc2VydEFmdGVyKGNyZWF0ZUZvcm0oYWN0aXZlUHJvamVjdC50YXNrc1t0YXJnZXRJZF0udGl0bGUsIGFjdGl2ZVByb2plY3QudGFza3NbdGFyZ2V0SWRdLmR1ZURhdGUsIGFjdGl2ZVByb2plY3QudGFza3NbdGFyZ2V0SWRdLnByaW9yaXR5LCBhY3RpdmVQcm9qZWN0LnRhc2tzW3RhcmdldElkXS5kZXNjcmlwdGlvbiwgdGFyZ2V0SWQpLCBjaGVja2xpc3QpO1xuICAgICAgICBjaGVja2xpc3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAgIH1cbiAgICBcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImRlbGV0ZS10YXNrLWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gZS50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0Lml0ZW1JZDtcbiAgICAgICAgcmVtb3ZlVGFzayh0YXJnZXRJZCk7XG4gICAgICAgIHJlbmRlcigpO1xuICAgIH1cbiAgICBcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInN1Ym1pdC1idG5cIikge1xuICAgICAgICBjb25zdCBmb3JtSWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmF0dHJpYnV0ZXNbMV0udmFsdWU7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCN0YXNrVGl0bGVcIik7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I2R1ZURhdGVcIik7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3QjdGFzay1wcmlvcml0eVwiKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3Rhc2tEZXNjXCIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRhc2tUaXRsZS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHRhc2tEdWVEYXRlLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHRhc2tQcmlvcml0eS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZVRyaW0gPSB0aXRsZS50cmltKCk7XG4gICAgICAgIGlmICh0aXRsZSAhPSBcIlwiICYmIHRhc2tUaXRsZVRyaW0gIT0gXCJcIikge1xuICAgICAgICAgICAgaWYgKGZvcm1JZCA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgICAgICBhZGRUYXNrKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlZGl0VGFzayh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBmb3JtSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS50YWJsZShwcm9qZWN0cylcbiAgICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJhZGQtdGFza1wiKSB7XG4gICAgICAgIGluc2VydEFmdGVyKGNyZWF0ZUZvcm0oXCJcIiwgXCIyMDIyLTAxLTAxXCIsIFwibm9ybWFsXCIsIFwiXCIpLCBlLm9yaWdpbmFsVGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgICBlLm9yaWdpbmFsVGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImNsb3NlLWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGZvcm1JZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuYXR0cmlidXRlc1sxXS52YWx1ZTtcblxuICAgICAgICBpZiAoZm9ybUlkID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG4gICAgICAgICAgICBhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tsaXN0ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICBjaGVja2xpc3Quc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwicHJvamVjdC1pdGVtXCIpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBlLnRhcmdldC5kYXRhc2V0Lml0ZW1JZDtcbiAgICAgICAgY2hhbmdlUHJvamVjdChwcm9qZWN0c1t0YXJnZXRJZF0pO1xuICAgICAgICByZW5kZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImFkZC1wcm9qZWN0LWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFwiKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gYWRkUHJvamVjdElucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGVUcmltID0gcHJvamVjdFRpdGxlLnRyaW0oKTtcblxuICAgICAgICBpZiAocHJvamVjdFRpdGxlICE9IFwiXCIgJiYgcHJvamVjdFRpdGxlVHJpbSAhPSBcIlwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgICAgICAgIGFkZFByb2plY3QocHJvamVjdFRpdGxlLCBwcm9qZWN0cyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RMaXN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImVkaXQtcHJvamVjdC1idG5cIikge1xuXG4gICAgLy8gfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJkZWxldGUtcHJvamVjdC1idG5cIikge1xuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pdGVtSWQ7XG4gICAgICAgIHJlbW92ZVByb2plY3QodGFyZ2V0SWQpO1xuICAgICAgICByZW5kZXJQcm9qZWN0TGlzdCgpO1xuICAgIH1cbn0pXG5cbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwidGFzay1pdGVtXCIgfHwgZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInByb2plY3QtaXRlbVwiKSB7XG4gICAgICAgIHN3aXRjaCAoZS50YXJnZXQuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwidGFzay1pdGVtXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWl0ZW1cIik7XG4gICAgICAgICAgICAgICAgZGlzcGxheU9uSG92ZXIodGFza0l0ZW1zKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwcm9qZWN0LWl0ZW1cIjpcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtaXRlbVwiKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5T25Ib3Zlcihwcm9qZWN0SXRlbXMpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufSlcblxuY29udGVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHsgICAgXG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSBcInRhc2tJbnB1dFwiIHx8IGUudGFyZ2V0LmlkID09PSBcInRhc2tEZXNjXCIpIHtcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW50ZXItYnRuXCIpLmNsaWNrKCk7XG4gICAgICAgICAgICBjdXJzb3JGb2N1cyhcIiN0YXNrSW5wdXRcIik7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lciA+IGRpdi5mb3JtXCIpO1xuICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1hY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJ0YXNrSW5wdXRcIikge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lciA+IGRpdi5mb3JtXCIpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWFjdGl2ZVwiKTtcbiAgICB9XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==