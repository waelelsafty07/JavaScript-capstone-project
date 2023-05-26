"use strict";
(self["webpackChunkwebpack_pro"] = self["webpackChunkwebpack_pro"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/svg/close-bold.svg */ "./src/img/svg/close-bold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  padding: 1.5rem 0;\n  gap: 2rem;\n  position: fixed;\n  width: 100%;\n  background-color: white;\n}\n\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s infinite linear;\n  display: none;\n  margin: auto;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\nh3 {\n  margin: 1rem 1rem 0;\n}\n\nli {\n  text-decoration: none;\n  list-style-type: none;\n  padding: 0.5rem;\n}\n\n.flex-d-column {\n  flex-direction: column;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.justify-content-center {\n  justify-content: center;\n}\n\n.justify-content-space-between {\n  justify-content: space-between;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n.justify-content-end {\n  justify-content: flex-end;\n}\n\n.nav-list {\n  gap: 1rem;\n}\n\n/*\n* Movies List\n*/\n.content {\n  margin: 3rem 0;\n}\n\n.movies-item {\n  width: 90%;\n  margin-top: 2rem;\n}\n\n.movies-item .movie {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n}\n\n.movies-item .movie .image-container .image {\n  width: 100%;\n}\n\n.movies-item .movie .movies-body .movies-title .fa-heart {\n  font-size: 1.3rem;\n}\n\n.movies-item .movie .movies-body .group-btns > div {\n  margin: 1rem 0 0;\n}\n\n.d-grid {\n  display: grid;\n}\n\n.d-none {\n  display: none;\n}\n\n.popup {\n  overflow: auto;\n  position: fixed;\n  top: 0%;\n  left: 5%;\n  padding: 1rem;\n  width: 90%;\n  height: 90%;\n  border: 2px solid black;\n  background-color: #fff;\n  margin: 2rem auto;\n  z-index: 5;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.301);\n  backdrop-filter: blur(5px);\n  z-index: 2;\n}\n\n.close {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  margin-top: 1rem;\n}\n\n.show-name {\n  margin: 0 auto;\n}\n\n.details {\n  margin: 0 auto;\n}\n\n.details li {\n  padding: 0;\n  flex: 0 0 auto;\n  width: 50%;\n}\n\n.col-4 {\n  flex: 0 0 auto;\n  padding: 1rem;\n}\n\n.details-Movie {\n  width: 25%;\n}\n\n.details-Movie img {\n  width: 100%;\n}\n\n.display-comments {\n  width: 30%;\n}\n\n.form-comments {\n  width: 30%;\n}\n\nform,\ninput,\ntextarea {\n  margin: 1rem;\n  font-size: 1rem;\n  font-family: sans-serif, Arial, Helvetica;\n}\n\nbutton {\n  padding: 1rem 2rem;\n}\n\nfooter > span {\n  padding: 2rem 1.5rem;\n  display: block;\n  border: 2px solid black;\n  width: 100%;\n}\n\n.reservation-div {\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  z-index: 100;\n  background: white;\n  top: 0;\n  align-items: center;\n  width: 60%;\n  padding: 2rem;\n  height: 100%;\n}\n\n.pop-up-head {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.pop-up-head > img {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 2rem;\n  right: 0;\n  position: absolute;\n}\n\n.contient {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 5rem;\n}\n\n.contient-in-backgound {\n  position: relative;\n  z-index: -100;\n  filter: blur(4px);\n}\n\n.movie-Image {\n  padding: 2rem 0;\n  width: 45%;\n}\n\n.summary {\n  padding-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n.no-overflow {\n  overflow: hidden;\n}\n\n.movie-info {\n  display: flex;\n  gap: 2rem;\n}\n\n.movie-info-right,\n.movie-info-left {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n\n.reservation-form-div {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.reservation-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 100%;\n  margin: 0;\n}\n\n.submit-input {\n  padding: 1rem;\n  border: 1px black solid;\n  text-align: center;\n  margin: 0;\n  background-color: white;\n}\n\n.submit-input:hover {\n  border: 1px solid rgb(75, 75, 228);\n  background-color: rgb(75, 75, 228);\n  color: white;\n  font-weight: 600;\n}\n\n.name-input,\n.date-input {\n  padding: 0.5rem;\n  margin: 0;\n}\n\n.reservation-title {\n  margin-top: 2rem;\n}\n\n#comment-form,\n#comment-name,\n#comment-message {\n  padding: 1rem;\n}\n\n#comment-name:hover,\n#comment-message:hover,\n.comment-btn:hover {\n  border: 4px solid grey;\n}\n\n.counter {\n  position: fixed;\n  padding-bottom: 1rem;\n  background-color: #fff;\n  width: 100%;\n  justify-content: center;\n  display: flex;\n}\n\n@media screen and (min-width: 365px) {\n  .movie {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 768px) {\n  .movie {\n    width: 33.333333%;\n  }\n  .group-btns button {\n    padding: 1rem;\n  }\n  .movie h2 {\n    font-size: 1rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .movie {\n    width: 25%;\n  }\n  .group-btns button {\n    padding: 1rem 2rem;\n  }\n}\n@media screen and (min-width: 1400px) {\n  .movie {\n    width: 20%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AACF;;AAEA;EACE,uBAAA;EACA,aAAA;EACA,sBAAA;AACF;;AAEA;EACE,iBAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,uBAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,yBAAA;EACA,6BAAA;EACA,kBAAA;EACA,kCAAA;EACA,aAAA;EACA,YAAA;AACF;;AAEA;EACE;IACE,uBAAA;EACF;EAEA;IACE,yBAAA;EAAF;AACF;AAGA;EACE,mBAAA;AADF;;AAIA;EACE,qBAAA;EACA,qBAAA;EACA,eAAA;AADF;;AAIA;EACE,sBAAA;AADF;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,eAAA;AADF;;AAIA;EACE,uBAAA;AADF;;AAIA;EACE,8BAAA;AADF;;AAIA;EACE,mBAAA;AADF;;AAIA;EACE,yBAAA;AADF;;AAIA;EACE,SAAA;AADF;;AAIA;;CAAA;AAGA;EACE,cAAA;AADF;;AAIA;EACE,UAAA;EACA,gBAAA;AADF;;AAIA;EACE,cAAA;EACA,eAAA;AADF;;AAIA;EACE,WAAA;AADF;;AAIA;EACE,iBAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,cAAA;EACA,eAAA;EACA,OAAA;EACA,QAAA;EACA,aAAA;EACA,UAAA;EACA,WAAA;EACA,uBAAA;EACA,sBAAA;EACA,iBAAA;EACA,UAAA;AADF;;AAIA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,sCAAA;EACA,0BAAA;EACA,UAAA;AADF;;AAIA;EACE,kBAAA;EACA,UAAA;EACA,QAAA;EACA,gBAAA;AADF;;AAIA;EACE,cAAA;AADF;;AAIA;EACE,cAAA;AADF;;AAIA;EACE,UAAA;EACA,cAAA;EACA,UAAA;AADF;;AAIA;EACE,cAAA;EACA,aAAA;AADF;;AAIA;EACE,UAAA;AADF;;AAIA;EACE,WAAA;AADF;;AAIA;EACE,UAAA;AADF;;AAIA;EACE,UAAA;AADF;;AAIA;;;EAGE,YAAA;EACA,eAAA;EACA,yCAAA;AADF;;AAIA;EACE,kBAAA;AADF;;AAIA;EACE,oBAAA;EACA,cAAA;EACA,uBAAA;EACA,WAAA;AADF;;AAIA;EACE,cAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;EACA,MAAA;EACA,mBAAA;EACA,UAAA;EACA,aAAA;EACA,YAAA;AADF;;AAIA;EACE,aAAA;EACA,yBAAA;AADF;;AAIA;EACE,gDAAA;EACA,YAAA;EACA,QAAA;EACA,kBAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;AADF;;AAIA;EACE,kBAAA;EACA,aAAA;EACA,iBAAA;AADF;;AAIA;EACE,eAAA;EACA,UAAA;AADF;;AAIA;EACE,iBAAA;EACA,mBAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA;EACE,aAAA;EACA,SAAA;AADF;;AAIA;;EAEE,aAAA;EACA,sBAAA;EACA,WAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,WAAA;EACA,SAAA;AADF;;AAIA;EACE,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,SAAA;EACA,uBAAA;AADF;;AAIA;EACE,kCAAA;EACA,kCAAA;EACA,YAAA;EACA,gBAAA;AADF;;AAIA;;EAEE,eAAA;EACA,SAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA;;;EAGE,aAAA;AADF;;AAIA;;;EAGE,sBAAA;AADF;;AAIA;EACE,eAAA;EACA,oBAAA;EACA,sBAAA;EACA,WAAA;EACA,uBAAA;EACA,aAAA;AADF;;AAIA;EACE;IACE,WAAA;EADF;AACF;AAIA;EACE;IACE,iBAAA;EAFF;EAKA;IACE,aAAA;EAHF;EAMA;IACE,eAAA;EAJF;AACF;AAOA;EACE;IACE,UAAA;EALF;EAQA;IACE,kBAAA;EANF;AACF;AASA;EACE;IACE,UAAA;EAPF;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  padding: 1.5rem 0;\n  gap: 2rem;\n  position: fixed;\n  width: 100%;\n  background-color: #ffff;\n}\n\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s infinite linear;\n  display: none;\n  margin: auto;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\nh3 {\n  margin: 1rem 1rem 0;\n}\n\nli {\n  text-decoration: none;\n  list-style-type: none;\n  padding: 0.5rem;\n}\n\n.flex-d-column {\n  flex-direction: column;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.justify-content-center {\n  justify-content: center;\n}\n\n.justify-content-space-between {\n  justify-content: space-between;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n.justify-content-end {\n  justify-content: flex-end;\n}\n\n.nav-list {\n  gap: 1rem;\n}\n\n/*\n* Movies List\n*/\n.content {\n  margin: 3rem 0;\n}\n\n.movies-item {\n  width: 90%;\n  margin-top: 2rem;\n}\n\n.movies-item .movie {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n}\n\n.movies-item .movie .image-container .image {\n  width: 100%;\n}\n\n.movies-item .movie .movies-body .movies-title .fa-heart {\n  font-size: 1.3rem;\n}\n\n.movies-item .movie .movies-body .group-btns > div {\n  margin: 1rem 0 0;\n}\n\n.d-grid {\n  display: grid;\n}\n\n.d-none {\n  display: none;\n}\n\n.popup {\n  overflow: auto;\n  position: fixed;\n  top: 0%;\n  left: 5%;\n  padding: 1rem;\n  width: 90%;\n  height: 90%;\n  border: 2px solid black;\n  background-color: #fff;\n  margin: 2rem auto;\n  z-index: 5;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.301);\n  backdrop-filter: blur(5px);\n  z-index: 2;\n}\n\n.close {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  margin-top: 1rem;\n}\n\n.show-name {\n  margin: 0 auto;\n}\n\n.details {\n  margin: 0 auto;\n}\n\n.details li {\n  padding: 0;\n  flex: 0 0 auto;\n  width: 50%;\n}\n\n.col-4 {\n  flex: 0 0 auto;\n  padding: 1rem;\n}\n\n.details-Movie {\n  width: 25%;\n}\n\n.details-Movie img {\n  width: 100%;\n}\n\n.display-comments {\n  width: 30%;\n}\n\n.form-comments {\n  width: 30%;\n}\n\nform,\ninput,\ntextarea {\n  margin: 1rem;\n  font-size: 1rem;\n  font-family: sans-serif, Arial, Helvetica;\n}\n\nbutton {\n  padding: 1rem 2rem;\n}\n\nfooter > span {\n  padding: 2rem 1.5rem;\n  display: block;\n  border: 2px solid black;\n  width: 100%;\n}\n\n.reservation-div {\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  z-index: 100;\n  background: #ffff;\n  top: 0;\n  align-items: center;\n  width: 60%;\n  padding: 2rem;\n  height: 100%;\n}\n\n.pop-up-head {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.pop-up-head > img {\n  content: url('./img/svg/close-bold.svg');\n  height: 2rem;\n  right: 0;\n  position: absolute;\n}\n\n.contient {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 5rem;\n}\n\n.contient-in-backgound {\n  position: relative;\n  z-index: -100;\n  filter: blur(4px);\n}\n\n.movie-Image {\n  padding: 2rem 0;\n  width: 45%;\n}\n\n.summary {\n  padding-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n.no-overflow {\n  overflow: hidden;\n}\n\n.movie-info {\n  display: flex;\n  gap: 2rem;\n}\n\n.movie-info-right,\n.movie-info-left {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n\n.reservation-form-div {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.reservation-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 100%;\n  margin: 0;\n}\n\n.submit-input {\n  padding: 1rem;\n  border: 1px black solid;\n  text-align: center;\n  margin: 0;\n  background-color: #ffff;\n}\n\n.submit-input:hover {\n  border: 1px solid rgb(75, 75, 228);\n  background-color: rgb(75, 75, 228);\n  color: white;\n  font-weight: 600;\n}\n\n.name-input,\n.date-input {\n  padding: 0.5rem;\n  margin: 0;\n}\n\n.reservation-title {\n  margin-top: 2rem;\n}\n\n#comment-form,\n#comment-name,\n#comment-message {\n  padding: 1rem;\n}\n\n#comment-name:hover,\n#comment-message:hover,\n.comment-btn:hover {\n  border: 4px solid grey;\n}\n\n.counter {\n  position: fixed;\n  padding-bottom: 1rem;\n  background-color: #fff;\n  width: 100%;\n  justify-content: center;\n  display: flex;\n}\n\n@media screen and (min-width: 365px) {\n  .movie {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .movie {\n    width: 33.333333%;\n  }\n\n  .group-btns button {\n    padding: 1rem;\n  }\n\n  .movie h2 {\n    font-size: 1rem;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .movie {\n    width: 25%;\n  }\n\n  .group-btns button {\n    padding: 1rem 2rem;\n  }\n}\n\n@media screen and (min-width: 1400px) {\n  .movie {\n    width: 20%;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_ListMovies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ListMovies.js */ "./src/modules/ListMovies.js");
/* harmony import */ var _modules_AddLikeToMovie_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/AddLikeToMovie.js */ "./src/modules/AddLikeToMovie.js");




window.addEventListener('load', async () => {
  await (0,_modules_ListMovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_AddLikeToMovie_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
});


/***/ }),

/***/ "./src/modules/AddCommentToMovie.js":
/*!******************************************!*\
  !*** ./src/modules/AddCommentToMovie.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ "./src/modules/comments.js");
/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComments.js */ "./src/modules/displayComments.js");



const AddComment = () => {
  const commentForm = document.querySelector('#comment-form');

  if (commentForm) {
    const submit = commentForm.querySelector('button');

    submit.addEventListener('click', async (event) => {
      event.preventDefault();
      const name = commentForm.querySelector('#comment-name').value;
      const msg = commentForm.querySelector('#comment-message').value;

      const CommentAPI = new _comments_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
      const body = {
        item_id: submit.id,
        username: name,
        comment: msg,
      };
      await CommentAPI.addcomments(body);
      commentForm.reset();
      (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(submit.id);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddComment);

/***/ }),

/***/ "./src/modules/AddLikeToMovie.js":
/*!***************************************!*\
  !*** ./src/modules/AddLikeToMovie.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Likes.js */ "./src/modules/Likes.js");


const addLike = () => {
  const likeBtns = document.querySelectorAll('.btn-like');
  if (likeBtns) {
    const likeAPI = new _Likes_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    likeBtns.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const id = btn.getAttribute('id-movie');
        await likeAPI.addLikes(id);
      });
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);


/***/ }),

/***/ "./src/modules/DisplayPopup.js":
/*!*************************************!*\
  !*** ./src/modules/DisplayPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");
/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComments.js */ "./src/modules/displayComments.js");
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env.js */ "./src/modules/env.js");




const displayShow = async (itemId) => {
  const api = new _api_js__WEBPACK_IMPORTED_MODULE_0__["default"](_env_js__WEBPACK_IMPORTED_MODULE_2__.movieApi);
  const item = await api.getData(`shows/${itemId}`);
  const popupDiv = document.createElement('div');

  if (item) {
    const close = document.createElement('i');
    const popupImgDiv = document.createElement('div');
    const popupImg = document.createElement('img');
    const popupName = document.createElement('h3');
    const popupDetails = document.createElement('ul');
    const popupDet1 = document.createElement('li');
    const popupDet2 = document.createElement('li');
    const popupDet3 = document.createElement('li');
    const popupDet4 = document.createElement('li');
    const overlay = document.createElement('div');
    const comments = document.createElement('div');
    const commentsTitle = document.createElement('h3');
    const commentsSection = document.createElement('ul');
    const addCommentsTitle = document.createElement('h3');
    const commentForm = document.createElement('form');
    const commentName = document.createElement('input');
    const commentMsg = document.createElement('textarea');
    const commentBtn = document.createElement('button');
    const bodyPopup = document.createElement('div');

    document.body.appendChild(overlay);

    popupImg.src = item.image.medium;

    popupImgDiv.className = 'col-4 details-Movie';
    bodyPopup.className = 'col-4 display-comments';
    overlay.classList.add('overlay');
    popupDiv.classList.add('d-flex');
    popupDiv.classList.add('justify-content-center');

    close.classList.add('fa-solid', 'fa-xmark', 'fa-2xl', 'close');
    popupName.classList.add('show-name');
    popupDetails.classList.add('d-flex');
    popupDetails.classList.add('details');
    popupDetails.classList.add('flex-wrap');

    popupDiv.classList.add('popup');
    comments.classList.add('col-4', 'd-flex', 'flex-d-column', 'form-comments');
    commentForm.classList.add('d-flex', 'flex-d-column');
    commentBtn.className = 'comment-btn';

    commentsTitle.textContent = 'Comments';
    addCommentsTitle.textContent = 'Add Comment';
    commentBtn.textContent = 'Comment';

    commentsTitle.id = 'comments-title';
    commentsSection.id = 'comments-section';
    commentForm.id = 'comment-form';
    commentName.id = 'comment-name';
    commentMsg.id = 'comment-message';
    commentBtn.id = itemId;

    commentName.setAttribute('required', 'true');
    commentMsg.setAttribute('required', 'true');

    commentName.placeholder = 'Your Name';
    commentMsg.placeholder = 'Your Comment';
    popupName.textContent = item.name;
    popupDet1.textContent = `Genre: ${item.genres[0]}`;
    popupDet2.textContent = `Rating: ${item.rating.average}`;
    popupDet3.textContent = `Language: ${item.language}`;
    popupDet4.textContent = `Runtime: ${item.runtime} min`;

    close.addEventListener('click', () => {
      overlay.classList.remove('overlay');
      document.body.removeChild(popupDiv);
    });

    document.body.appendChild(popupDiv);

    popupDiv.appendChild(close);

    popupDiv.appendChild(popupImgDiv);

    popupDiv.appendChild(bodyPopup);

    popupImgDiv.appendChild(popupImg);
    popupImgDiv.appendChild(popupName);
    popupImgDiv.appendChild(popupDetails);
    popupDetails.appendChild(popupDet1);
    popupDetails.appendChild(popupDet2);
    popupDetails.appendChild(popupDet3);
    popupDetails.appendChild(popupDet4);
    bodyPopup.appendChild(commentsTitle);
    bodyPopup.appendChild(commentsSection);

    popupDiv.appendChild(comments);
    comments.appendChild(addCommentsTitle);
    comments.appendChild(commentForm);
    commentForm.appendChild(commentName);
    commentForm.appendChild(commentMsg);
    commentForm.appendChild(commentBtn);

    (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(itemId);
  }
  return popupDiv;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayShow);


/***/ }),

/***/ "./src/modules/Likes.js":
/*!******************************!*\
  !*** ./src/modules/Likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env.js */ "./src/modules/env.js");



class LIKES {
  constructor() {
    this.likesAPI = new _api_js__WEBPACK_IMPORTED_MODULE_0__["default"](_env_js__WEBPACK_IMPORTED_MODULE_1__.invo);
  }

  async addLikes(id) {
    const body = {
      item_id: `${id}`,
    };
    const res = await this.likesAPI.postData('likes', body);
    return res;
  }

  async getlikes() {
    const likes = await this.likesAPI.getData('likes');
    const likesArray = Array.isArray(likes) ? likes : [];
    return likesArray;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LIKES);


/***/ }),

/***/ "./src/modules/ListMovies.js":
/*!***********************************!*\
  !*** ./src/modules/ListMovies.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddCommentToMovie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddCommentToMovie.js */ "./src/modules/AddCommentToMovie.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");
/* harmony import */ var _displayLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayLike.js */ "./src/modules/displayLike.js");
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env.js */ "./src/modules/env.js");
/* harmony import */ var _lazyLoadImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazyLoadImage.js */ "./src/modules/lazyLoadImage.js");
/* harmony import */ var _reservation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reservation.js */ "./src/modules/reservation.js");
/* harmony import */ var _Likes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Likes.js */ "./src/modules/Likes.js");
/* harmony import */ var _totalItems_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./totalItems.js */ "./src/modules/totalItems.js");
/* harmony import */ var _DisplayPopup_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DisplayPopup.js */ "./src/modules/DisplayPopup.js");










const createElement = (obj) => {
  const el = document.createElement(obj.tag);
  if (obj.className) el.className = obj.className;
  if (obj.tag === 'img') {
    el.classList.add('lazy');
    el.setAttribute('data-src', obj.src);
    el.alt = 'Lazy-loaded image';
  }
  return el;
};

const createTextNode = (tag, text) => {
  const textNode = document.createTextNode(text);
  tag.appendChild(textNode);
  return tag;
};

const createMovies = (movieDetails, likesArray) => {
  const movie = createElement({ tag: 'div', className: 'movie' });
  movie.setAttribute('id-movie', movieDetails.id);
  // Create Div with class image-container
  const imageContainer = createElement({
    tag: 'div',
    className: 'image-container',
  });
  const img = createElement({
    tag: 'img',
    className: 'image',
    src: movieDetails.image.medium,
  });
  imageContainer.appendChild(img);
  movie.appendChild(imageContainer);

  // create Div with Movie Body
  const movieBody = createElement({
    tag: 'div',
    className: 'd-flex flex-d-column movies-body',
  });
  // create div with Movie-title
  const movieTitle = createElement({
    tag: 'div',
    className:
      'd-flex align-items-center justify-content-space-between movies-title',
  });
  const h2 = createElement({ tag: 'h2' });
  createTextNode(h2, movieDetails.name);
  const iconbutton = createElement({
    tag: 'a',
    className: 'btn btn-like',
  });
  iconbutton.setAttribute('id-movie', movieDetails.id);

  const iconHeart = createElement({
    tag: 'i',
    className: 'fa-regular fa-heart',
  });
  movieTitle.appendChild(h2);
  iconbutton.appendChild(iconHeart);
  movieTitle.appendChild(iconbutton);
  movieBody.appendChild(movieTitle);

  // create div with class likes
  const likes = createElement({
    tag: 'div',
    className: 'd-flex justify-content-end likes',
  });
  const spanLikes = createElement({
    tag: 'span',
  });
  const likeText = (0,_displayLike_js__WEBPACK_IMPORTED_MODULE_2__["default"])(likesArray, movieDetails.id);
  const likeCount = likeText.length !== 0 ? likeText : 0;
  createTextNode(spanLikes, `${likeCount} likes`);
  likes.appendChild(spanLikes);
  movieBody.appendChild(likes);
  // create div with class Group buttons
  const groupBtns = createElement({
    tag: 'div',
    className: 'd-flex justify-content-space-between group-btns',
  });
  const commentDiv = createElement({
    tag: 'div',
    className: 'comment',
  });
  const commentButton = createElement({
    tag: 'button',
    className: 'btn btn-comment',
  });
  createTextNode(commentButton, 'comment');
  commentDiv.appendChild(commentButton);
  groupBtns.appendChild(commentDiv);

  const reservationDiv = createElement({
    tag: 'div',
    className: 'reservation',
  });
  const reservationButton = createElement({
    tag: 'button',
    className: 'btn btn-reservation',
  });
  createTextNode(reservationButton, 'reservation');
  reservationButton.setAttribute('value', movieDetails.id);

  reservationDiv.appendChild(reservationButton);
  groupBtns.appendChild(reservationDiv);

  movieBody.appendChild(groupBtns);
  movie.appendChild(movieBody);

  return movie;
};

const CommentPopup = async (event) => {
  const commentButton = event.target;
  const movie = commentButton.closest('.movie');
  const movieId = movie.getAttribute('id-movie');
  // Perform the desired action when the comment button is clicked
  await (0,_DisplayPopup_js__WEBPACK_IMPORTED_MODULE_8__["default"])(parseInt(movieId, 10));
  (0,_AddCommentToMovie_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

const diplayCountItem = (moviesList, likesArray) => {
  const countItem = (0,_totalItems_js__WEBPACK_IMPORTED_MODULE_7__["default"])(likesArray);
  const counterDiv = createElement({ tag: 'div', className: 'counter' });
  createTextNode(counterDiv, `${countItem} movie`);

  moviesList.insertBefore(counterDiv, moviesList.firstChild);
};

const displayMovies = async () => {
  const moviesList = document.querySelector('.movies-item');

  if (moviesList) {
    const spinner = document.querySelector('.movies-contient .spinner');

    spinner.style.display = 'block';
    const api = new _api_js__WEBPACK_IMPORTED_MODULE_1__["default"](_env_js__WEBPACK_IMPORTED_MODULE_3__.movieApi);
    const movies = await api.getData('shows');
    moviesList.style.display = 'none';
    const Likes = new _Likes_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
    const likesArray = await Likes.getlikes();
    diplayCountItem(moviesList.parentNode, movies);
    movies.forEach(async (movie) => {
      _reservation_js__WEBPACK_IMPORTED_MODULE_5__["default"].reservationButtonEventListner();
      const movieElement = createMovies(movie, likesArray);
      const commentButton = movieElement.querySelector('.btn-comment');
      commentButton.addEventListener('click', CommentPopup);
      moviesList.appendChild(movieElement);
    });

    (0,_lazyLoadImage_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    spinner.style.display = 'none';
    moviesList.style.display = 'flex';
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMovies);


/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable import/no-cycle */
class API {
  constructor(link) {
    this.url = link;
  }

  fetchData = async (url, method, body) => {
    const options = {};
    if (method === 'GET') {
      options.method = 'GET';
    } else if (method === 'POST') {
      options.method = 'POST';
      options.headers = {
        'Content-Type': 'application/json',
      };
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    return response;
  };

  postData = async (endPoint, body) => {
    const url = this.url + endPoint;
    const responseJson = await this.fetchData(url, 'POST', body);
    return responseJson;
  };

  getData = async (endPoint) => {
    const url = this.url + endPoint;
    const responseJson = await this.fetchData(url, 'GET');
    const data = await responseJson.json();
    return data;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);


/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env.js */ "./src/modules/env.js");
/* eslint-disable import/no-cycle */



class Comments {
  constructor() {
    this.commentsAPI = new _api_js__WEBPACK_IMPORTED_MODULE_0__["default"](_env_js__WEBPACK_IMPORTED_MODULE_1__.invo);
  }

  async addcomments(body) {
    const res = await this.commentsAPI.postData('comments', body);
    return res;
  }

  async getComments(itemId) {
    const comments = await this.commentsAPI.getData(`comments?item_id=${itemId}`);
    const commentsArray = Array.isArray(comments) ? comments : [];
    return commentsArray;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);

/***/ }),

/***/ "./src/modules/components.js":
/*!***********************************!*\
  !*** ./src/modules/components.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/modules/api.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./src/modules/env.js");
/* harmony import */ var _reservationCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservationCounter */ "./src/modules/reservationCounter.js");




class Components {
  reservationPopUp = (movie) => {
    const app = document.querySelector('.contient');
    const mainContent = document.querySelector('.movies-contient');
    const popUpDiv = document.createElement('div');
    popUpDiv.className = 'reservation-div';
    popUpDiv.setAttribute('movieId', movie.id);

    const popUpHead = document.createElement('div');
    popUpHead.className = 'pop-up-head';

    const img = document.createElement('img');
    img.className = 'close-model';

    const headSpan = document.createElement('spa');

    const reservationImage = document.createElement('img');
    reservationImage.className = 'movie-Image';
    reservationImage.src = movie.image.original;

    const title = document.createElement('h1');
    title.textContent = movie.name;

    const summary = document.createElement('p');
    summary.className = 'summary';
    summary.innerHTML = movie.summary;

    const movieInfo = document.createElement('div');
    movieInfo.className = 'movie-info';

    const movieInfoLeft = document.createElement('div');
    movieInfoLeft.className = 'movie-info-right';

    const lang = document.createElement('span');
    lang.textContent = `Language: ${movie.language}`;

    const country = document.createElement('span');
    country.textContent = `Country: ${movie.network.country.name}`;

    const duration = document.createElement('span');
    duration.textContent = `Duration: ${movie.runtime}`;

    const network = document.createElement('span');
    network.textContent = `Network: ${movie.network.name}`;

    const movieInfoRight = document.createElement('div');
    movieInfoRight.className = 'movie-info-left';

    movieInfoLeft.appendChild(lang);
    movieInfoLeft.appendChild(country);

    movieInfoRight.appendChild(network);
    movieInfoRight.appendChild(duration);

    movieInfo.appendChild(movieInfoLeft);
    movieInfo.appendChild(movieInfoRight);

    popUpHead.appendChild(headSpan);
    popUpHead.appendChild(img);
    popUpDiv.appendChild(popUpHead);
    popUpDiv.appendChild(reservationImage);
    popUpDiv.appendChild(title);
    popUpDiv.appendChild(summary);
    popUpDiv.appendChild(movieInfo);
    popUpDiv.appendChild(this.createReservarionFrom());
    app.appendChild(popUpDiv);
    this.paintReservations(movie.id);

    mainContent.classList.toggle('contient-in-backgound');
    return app;
  };

  createReservarionFrom = () => {
    const reservationFormDiv = document.createElement('div');
    reservationFormDiv.className = 'reservation-form-div';

    const formTitle = document.createElement('h1');
    formTitle.textContent = 'Add a reservation';

    const form = document.createElement('form');
    form.className = 'reservation-form';

    const nameInput = document.createElement('input');
    nameInput.className = 'name-input';
    nameInput.placeholder = 'Your name';
    nameInput.type = 'text';
    nameInput.setAttribute('required', true);

    const dateInput = document.createElement('input');
    dateInput.className = 'date-input start-date';
    dateInput.placeholder = 'Start Date';
    dateInput.type = 'date';
    dateInput.setAttribute('required', true);

    const dateInputEnd = document.createElement('input');
    dateInputEnd.className = 'date-input end-date';
    dateInputEnd.placeholder = 'End Date';
    dateInputEnd.type = 'date';
    dateInputEnd.setAttribute('required', true);

    const submitButton = document.createElement('button');
    submitButton.className = 'submit-input';
    submitButton.textContent = 'Reserve';

    form.appendChild(nameInput);
    form.appendChild(dateInput);
    form.appendChild(dateInputEnd);
    form.appendChild(submitButton);
    reservationFormDiv.appendChild(formTitle);
    reservationFormDiv.appendChild(form);
    return reservationFormDiv;
  };

  closeReservationPopUp = () => {
    const mainContent = document.querySelector('.movies-contient');
    const popUpDiv = document.querySelector('.reservation-div');

    mainContent.classList.toggle('contient-in-backgound');
    popUpDiv.remove();
  };

  reservations = (reservationArray = null) => {
    const div = document.createElement('div');
    div.className = 'reservations-div';
    const title = document.createElement('h2');
    title.className = 'reservation-title';
    title.innerHTML = `Reservations (${_reservationCounter__WEBPACK_IMPORTED_MODULE_2__["default"].getReservationCount(reservationArray)})`;

    div.appendChild(title);
    if (reservationArray.error) {
      return div;
    }

    if (document.querySelector('.reservations-div')) {
      document.querySelector('.reservations-div').remove();
    }

    const ul = document.createElement('ul');
    reservationArray.reverse().forEach((reservation) => {
      const li = document.createElement('li');
      li.className = 'reservation-item';

      const startDate = new Date(reservation.date_start);
      const endDate = new Date(reservation.date_end);

      li.textContent = `${startDate.getMonth() + 1}/${startDate.getDate()}/${startDate.getFullYear()} 
        - ${endDate.getMonth() + 1}/${endDate.getDate()}/${endDate.getFullYear()} by ${reservation.username}`;
      ul.appendChild(li);
    });
    div.appendChild(ul);

    return div;
  };

  paintReservations = (id) => {
    const popUpDiv = document.querySelector('.reservation-div');
    const api = new _api__WEBPACK_IMPORTED_MODULE_0__["default"](`${_env__WEBPACK_IMPORTED_MODULE_1__.invo}reservations`);

    api.getData(`?item_id=${id}`)
      .then((results) => {
        popUpDiv.appendChild(this.reservations(results));
      })
      .catch((error) => {
        throw error;
      });
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Components());


/***/ }),

/***/ "./src/modules/displayComments.js":
/*!****************************************!*\
  !*** ./src/modules/displayComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ "./src/modules/comments.js");
/* harmony import */ var _totalComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./totalComments.js */ "./src/modules/totalComments.js");
/* eslint-disable import/no-cycle */



const displayComments = (itemId) => {
  const commentsSection = document.querySelector('#comments-section');
  commentsSection.textContent = '';
  const commentsTitle = document.querySelector('#comments-title');
  if (commentsSection) {
    const CommentAPI = new _comments_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

    CommentAPI.getComments(itemId).then((data) => {
      const commentsNumber = (0,_totalComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
      commentsTitle.textContent = `Comments: ${commentsNumber}`;
      data.forEach((d) => {
        const commentLi = document.createElement('li');
        commentLi.textContent = `${d.creation_date} ${d.username}: ${d.comment}`;
        commentsSection.appendChild(commentLi);
      });
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);

/***/ }),

/***/ "./src/modules/displayLike.js":
/*!************************************!*\
  !*** ./src/modules/displayLike.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayLikes = (likesArray, targetId) => {
  const like = likesArray
    .filter((item) => Number(item.item_id) === Number(targetId))
    .map((item) => item.likes);
  return like;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayLikes);


/***/ }),

/***/ "./src/modules/env.js":
/*!****************************!*\
  !*** ./src/modules/env.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invo: () => (/* binding */ invo),
/* harmony export */   movieApi: () => (/* binding */ movieApi)
/* harmony export */ });
const movieApi = 'https://api.tvmaze.com/';
const invo = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ElVEaIKZrRGXf09GE8cT/';



/***/ }),

/***/ "./src/modules/lazyLoadImage.js":
/*!**************************************!*\
  !*** ./src/modules/lazyLoadImage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const lazyLoadImages = () => {
  const lazyImages = document.querySelectorAll('.lazy');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        img.src = src;
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lazyLoadImages);


/***/ }),

/***/ "./src/modules/reservation.js":
/*!************************************!*\
  !*** ./src/modules/reservation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/modules/components.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/modules/api.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env */ "./src/modules/env.js");




const API_URL = 'https://api.tvmaze.com/shows/';

class Reservation {
  loadReservation = async (event) => {
    const api = new _api__WEBPACK_IMPORTED_MODULE_1__["default"](API_URL);
    const movie = await api.getData(event.target.value);
    _components__WEBPACK_IMPORTED_MODULE_0__["default"].reservationPopUp(movie);
    this.closeModelEventListner();
    this.reservationFormEventListner();
  };

  unloadReservation = () => {
    _components__WEBPACK_IMPORTED_MODULE_0__["default"].closeReservationPopUp();
  };

  createReservation = () => {
  };

  reservationButtonEventListner = () => {
    const reservations = document.querySelectorAll('.btn-reservation');

    reservations.forEach((reservationButton) => {
      reservationButton.addEventListener('click', this.loadReservation);
    });
  };

  closeModelEventListner = () => {
    const closeBtn = document.querySelector('.close-model');
    closeBtn.addEventListener('click', this.unloadReservation);
  };

  reservationFormEventListner = () => {
    const movieId = document.querySelector('.reservation-div');
    const form = document.querySelector('.reservation-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = event.target[0].value;
      const startDate = event.target[1].value;
      const endtDate = event.target[2].value;
      this.saveReservation(movieId.getAttribute('movieid'), name, startDate, endtDate);
      form.reset();
    });
  };

  saveReservation = (id, name, startDate, endtDate) => {
    const api = new _api__WEBPACK_IMPORTED_MODULE_1__["default"](`${_env__WEBPACK_IMPORTED_MODULE_2__.invo}reservations`);
    const body = {
      item_id: id,
      username: name,
      date_start: startDate,
      date_end: endtDate,
    };
    api.fetchData(`${_env__WEBPACK_IMPORTED_MODULE_2__.invo}reservations`, 'POST', body)
      .then(() => {
        this.reloadReservarions(id);
      })
      .catch((error) => {
        throw error;
      });
  };

  reloadReservarions = (id) => {
    _components__WEBPACK_IMPORTED_MODULE_0__["default"].paintReservations(id);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Reservation());

/***/ }),

/***/ "./src/modules/reservationCounter.js":
/*!*******************************************!*\
  !*** ./src/modules/reservationCounter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ReservationCounter {
  getReservationCount = (resulvations) => {
    const reservationsCount = (Array.isArray(resulvations) ? resulvations.length : '0');
    return reservationsCount;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ReservationCounter());

/***/ }),

/***/ "./src/modules/totalComments.js":
/*!**************************************!*\
  !*** ./src/modules/totalComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const totalComments = (arr) => (Array.isArray(arr) ? arr.length : 'This is not Array');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (totalComments);


/***/ }),

/***/ "./src/modules/totalItems.js":
/*!***********************************!*\
  !*** ./src/modules/totalItems.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const TotalItems = (arr) => (Array.isArray(arr) ? arr.length : 'This is not Array');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TotalItems);


/***/ }),

/***/ "./src/img/svg/close-bold.svg":
/*!************************************!*\
  !*** ./src/img/svg/close-bold.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc760e9cf1ad05bca2d8.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUNuQlE7QUFDZDtBQUNLOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLDRDQUFHO0FBQ3ZCO0FBQ0EsSUFBSSxvRUFBMkI7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSx5RUFBZ0M7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxvQkFBb0IsNENBQUcsSUFBSSxzQ0FBSSxDQUFDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQ0FBSSxDQUFDO0FBQzFCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLElBQUkscUVBQTRCO0FBQ2hDO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7OztBQ3RFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLHdCQUF3Qjs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7O0FBRUEsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNGN0I7O0FBRUEsaUVBQWUsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9zdHlsZS5jc3M/ZWZiZiIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL21vZHVsZXMvQWRkQ29tbWVudFRvTW92aWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvbW9kdWxlcy9BZGRMaWtlVG9Nb3ZpZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9tb2R1bGVzL0Rpc3BsYXlQb3B1cC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9tb2R1bGVzL0xpa2VzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL21vZHVsZXMvTGlzdE1vdmllcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9tb2R1bGVzL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL21vZHVsZXMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb21tZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlMaWtlLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL21vZHVsZXMvZW52LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL21vZHVsZXMvbGF6eUxvYWRJbWFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9tb2R1bGVzL3Jlc2VydmF0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL21vZHVsZXMvcmVzZXJ2YXRpb25Db3VudGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL21vZHVsZXMvdG90YWxDb21tZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9tb2R1bGVzL3RvdGFsSXRlbXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL3N2Zy9jbG9zZS1ib2xkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDEuNXJlbSAwO1xcbiAgZ2FwOiAycmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNwaW5uZXIge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMzNDk4ZGI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbmltYXRpb246IHNwaW4gMXMgaW5maW5pdGUgbGluZWFyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuaDMge1xcbiAgbWFyZ2luOiAxcmVtIDFyZW0gMDtcXG59XFxuXFxubGkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZmxleC1kLWNvbHVtbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LXdyYXAge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktY29udGVudC1zcGFjZS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKlxcbiogTW92aWVzIExpc3RcXG4qL1xcbi5jb250ZW50IHtcXG4gIG1hcmdpbjogM3JlbSAwO1xcbn1cXG5cXG4ubW92aWVzLWl0ZW0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5tb3ZpZXMtaXRlbSAubW92aWUge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5tb3ZpZXMtaXRlbSAubW92aWUgLmltYWdlLWNvbnRhaW5lciAuaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb3ZpZXMtaXRlbSAubW92aWUgLm1vdmllcy1ib2R5IC5tb3ZpZXMtdGl0bGUgLmZhLWhlYXJ0IHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubW92aWVzLWl0ZW0gLm1vdmllIC5tb3ZpZXMtYm9keSAuZ3JvdXAtYnRucyA+IGRpdiB7XFxuICBtYXJnaW46IDFyZW0gMCAwO1xcbn1cXG5cXG4uZC1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwJTtcXG4gIGxlZnQ6IDUlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgei1pbmRleDogNTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMwMSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uc2hvdy1uYW1lIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmRldGFpbHMgbGkge1xcbiAgcGFkZGluZzogMDtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNvbC00IHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmRldGFpbHMtTW92aWUge1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuXFxuLmRldGFpbHMtTW92aWUgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGlzcGxheS1jb21tZW50cyB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4uZm9ybS1jb21tZW50cyB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG5mb3JtLFxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCBBcmlhbCwgSGVsdmV0aWNhO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbn1cXG5cXG5mb290ZXIgPiBzcGFuIHtcXG4gIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24tZGl2IHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHRvcDogMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNjAlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnBvcC11cC1oZWFkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucG9wLXVwLWhlYWQgPiBpbWcge1xcbiAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHJpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uY29udGllbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuXFxuLmNvbnRpZW50LWluLWJhY2tnb3VuZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAtMTAwO1xcbiAgZmlsdGVyOiBibHVyKDRweCk7XFxufVxcblxcbi5tb3ZpZS1JbWFnZSB7XFxuICBwYWRkaW5nOiAycmVtIDA7XFxuICB3aWR0aDogNDUlO1xcbn1cXG5cXG4uc3VtbWFyeSB7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5uby1vdmVyZmxvdyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubW92aWUtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4ubW92aWUtaW5mby1yaWdodCxcXG4ubW92aWUtaW5mby1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjZyZW07XFxufVxcblxcbi5yZXNlcnZhdGlvbi1mb3JtLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5yZXNlcnZhdGlvbi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zdWJtaXQtaW5wdXQge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdWJtaXQtaW5wdXQ6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDc1LCA3NSwgMjI4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDIyOCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubmFtZS1pbnB1dCxcXG4uZGF0ZS1pbnB1dCB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5yZXNlcnZhdGlvbi10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4jY29tbWVudC1mb3JtLFxcbiNjb21tZW50LW5hbWUsXFxuI2NvbW1lbnQtbWVzc2FnZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jY29tbWVudC1uYW1lOmhvdmVyLFxcbiNjb21tZW50LW1lc3NhZ2U6aG92ZXIsXFxuLmNvbW1lbnQtYnRuOmhvdmVyIHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi5jb3VudGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNjVweCkge1xcbiAgLm1vdmllIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubW92aWUge1xcbiAgICB3aWR0aDogMzMuMzMzMzMzJTtcXG4gIH1cXG4gIC5ncm91cC1idG5zIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuICAubW92aWUgaDIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLm1vdmllIHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gIH1cXG4gIC5ncm91cC1idG5zIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxuICAubW92aWUge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBQTtFQUNGO0VBRUE7SUFDRSx5QkFBQTtFQUFGO0FBQ0Y7QUFHQTtFQUNFLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxTQUFBO0FBREY7O0FBSUE7O0NBQUE7QUFHQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUlBOzs7RUFHRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxnREFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7O0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7O0VBRUUsZUFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7OztFQUdFLGFBQUE7QUFERjs7QUFJQTs7O0VBR0Usc0JBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0U7SUFDRSxXQUFBO0VBREY7QUFDRjtBQUlBO0VBQ0U7SUFDRSxpQkFBQTtFQUZGO0VBS0E7SUFDRSxhQUFBO0VBSEY7RUFNQTtJQUNFLGVBQUE7RUFKRjtBQUNGO0FBT0E7RUFDRTtJQUNFLFVBQUE7RUFMRjtFQVFBO0lBQ0Usa0JBQUE7RUFORjtBQUNGO0FBU0E7RUFDRTtJQUNFLFVBQUE7RUFQRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDEuNXJlbSAwO1xcbiAgZ2FwOiAycmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcXG59XFxuXFxuLnNwaW5uZXIge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMzNDk4ZGI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbmltYXRpb246IHNwaW4gMXMgaW5maW5pdGUgbGluZWFyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAxcmVtIDFyZW0gMDtcXG59XFxuXFxubGkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZmxleC1kLWNvbHVtbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LXdyYXAge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmp1c3RpZnktY29udGVudC1zcGFjZS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LWVuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKlxcbiogTW92aWVzIExpc3RcXG4qL1xcbi5jb250ZW50IHtcXG4gIG1hcmdpbjogM3JlbSAwO1xcbn1cXG5cXG4ubW92aWVzLWl0ZW0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5tb3ZpZXMtaXRlbSAubW92aWUge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5tb3ZpZXMtaXRlbSAubW92aWUgLmltYWdlLWNvbnRhaW5lciAuaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb3ZpZXMtaXRlbSAubW92aWUgLm1vdmllcy1ib2R5IC5tb3ZpZXMtdGl0bGUgLmZhLWhlYXJ0IHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubW92aWVzLWl0ZW0gLm1vdmllIC5tb3ZpZXMtYm9keSAuZ3JvdXAtYnRucyA+IGRpdiB7XFxuICBtYXJnaW46IDFyZW0gMCAwO1xcbn1cXG5cXG4uZC1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnBvcHVwIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwJTtcXG4gIGxlZnQ6IDUlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgei1pbmRleDogNTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMwMSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uc2hvdy1uYW1lIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmRldGFpbHMgbGkge1xcbiAgcGFkZGluZzogMDtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNvbC00IHtcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmRldGFpbHMtTW92aWUge1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuXFxuLmRldGFpbHMtTW92aWUgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGlzcGxheS1jb21tZW50cyB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG4uZm9ybS1jb21tZW50cyB7XFxuICB3aWR0aDogMzAlO1xcbn1cXG5cXG5mb3JtLFxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmLCBBcmlhbCwgSGVsdmV0aWNhO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbn1cXG5cXG5mb290ZXIgPiBzcGFuIHtcXG4gIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24tZGl2IHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZjtcXG4gIHRvcDogMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNjAlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnBvcC11cC1oZWFkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucG9wLXVwLWhlYWQgPiBpbWcge1xcbiAgY29udGVudDogdXJsKCcuL2ltZy9zdmcvY2xvc2UtYm9sZC5zdmcnKTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHJpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uY29udGllbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG59XFxuXFxuLmNvbnRpZW50LWluLWJhY2tnb3VuZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAtMTAwO1xcbiAgZmlsdGVyOiBibHVyKDRweCk7XFxufVxcblxcbi5tb3ZpZS1JbWFnZSB7XFxuICBwYWRkaW5nOiAycmVtIDA7XFxuICB3aWR0aDogNDUlO1xcbn1cXG5cXG4uc3VtbWFyeSB7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbi5uby1vdmVyZmxvdyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubW92aWUtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4ubW92aWUtaW5mby1yaWdodCxcXG4ubW92aWUtaW5mby1sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjZyZW07XFxufVxcblxcbi5yZXNlcnZhdGlvbi1mb3JtLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5yZXNlcnZhdGlvbi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5zdWJtaXQtaW5wdXQge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XFxufVxcblxcbi5zdWJtaXQtaW5wdXQ6aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDc1LCA3NSwgMjI4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNzUsIDIyOCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubmFtZS1pbnB1dCxcXG4uZGF0ZS1pbnB1dCB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5yZXNlcnZhdGlvbi10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4jY29tbWVudC1mb3JtLFxcbiNjb21tZW50LW5hbWUsXFxuI2NvbW1lbnQtbWVzc2FnZSB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jY29tbWVudC1uYW1lOmhvdmVyLFxcbiNjb21tZW50LW1lc3NhZ2U6aG92ZXIsXFxuLmNvbW1lbnQtYnRuOmhvdmVyIHtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGdyZXk7XFxufVxcblxcbi5jb3VudGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNjVweCkge1xcbiAgLm1vdmllIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubW92aWUge1xcbiAgICB3aWR0aDogMzMuMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5ncm91cC1idG5zIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICAubW92aWUgaDIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLm1vdmllIHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gIH1cXG5cXG4gIC5ncm91cC1idG5zIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxuICAubW92aWUge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZGlzcGxheU1vdmllcyBmcm9tICcuL21vZHVsZXMvTGlzdE1vdmllcy5qcyc7XG5pbXBvcnQgYWRkTGlrZSBmcm9tICcuL21vZHVsZXMvQWRkTGlrZVRvTW92aWUuanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFzeW5jICgpID0+IHtcbiAgYXdhaXQgZGlzcGxheU1vdmllcygpO1xuICBhZGRMaWtlKCk7XG59KTtcbiIsImltcG9ydCBDb21tZW50cyBmcm9tICcuL2NvbW1lbnRzLmpzJztcbmltcG9ydCBkaXNwbGF5Q29tbWVudHMgZnJvbSAnLi9kaXNwbGF5Q29tbWVudHMuanMnO1xuXG5jb25zdCBBZGRDb21tZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb21tZW50Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50LWZvcm0nKTtcblxuICBpZiAoY29tbWVudEZvcm0pIHtcbiAgICBjb25zdCBzdWJtaXQgPSBjb21tZW50Rm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcblxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBjb21tZW50Rm9ybS5xdWVyeVNlbGVjdG9yKCcjY29tbWVudC1uYW1lJykudmFsdWU7XG4gICAgICBjb25zdCBtc2cgPSBjb21tZW50Rm9ybS5xdWVyeVNlbGVjdG9yKCcjY29tbWVudC1tZXNzYWdlJykudmFsdWU7XG5cbiAgICAgIGNvbnN0IENvbW1lbnRBUEkgPSBuZXcgQ29tbWVudHMoKTtcbiAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgIGl0ZW1faWQ6IHN1Ym1pdC5pZCxcbiAgICAgICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgICAgIGNvbW1lbnQ6IG1zZyxcbiAgICAgIH07XG4gICAgICBhd2FpdCBDb21tZW50QVBJLmFkZGNvbW1lbnRzKGJvZHkpO1xuICAgICAgY29tbWVudEZvcm0ucmVzZXQoKTtcbiAgICAgIGRpc3BsYXlDb21tZW50cyhzdWJtaXQuaWQpO1xuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgQWRkQ29tbWVudDsiLCJpbXBvcnQgTElLRVMgZnJvbSAnLi9MaWtlcy5qcyc7XG5cbmNvbnN0IGFkZExpa2UgPSAoKSA9PiB7XG4gIGNvbnN0IGxpa2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1saWtlJyk7XG4gIGlmIChsaWtlQnRucykge1xuICAgIGNvbnN0IGxpa2VBUEkgPSBuZXcgTElLRVMoKTtcbiAgICBsaWtlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaWQgPSBidG4uZ2V0QXR0cmlidXRlKCdpZC1tb3ZpZScpO1xuICAgICAgICBhd2FpdCBsaWtlQVBJLmFkZExpa2VzKGlkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRMaWtlO1xuIiwiaW1wb3J0IEFQSSBmcm9tICcuL2FwaS5qcyc7XG5pbXBvcnQgZGlzcGxheUNvbW1lbnRzIGZyb20gJy4vZGlzcGxheUNvbW1lbnRzLmpzJztcbmltcG9ydCB7IG1vdmllQXBpIH0gZnJvbSAnLi9lbnYuanMnO1xuXG5jb25zdCBkaXNwbGF5U2hvdyA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgY29uc3QgYXBpID0gbmV3IEFQSShtb3ZpZUFwaSk7XG4gIGNvbnN0IGl0ZW0gPSBhd2FpdCBhcGkuZ2V0RGF0YShgc2hvd3MvJHtpdGVtSWR9YCk7XG4gIGNvbnN0IHBvcHVwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgaWYgKGl0ZW0pIHtcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjb25zdCBwb3B1cEltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBvcHVwSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgcG9wdXBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBwb3B1cERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IHBvcHVwRGV0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgcG9wdXBEZXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBwb3B1cERldDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHBvcHVwRGV0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29tbWVudHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgY29tbWVudHNTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBhZGRDb21tZW50c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBjb21tZW50Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBjb21tZW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgY29tbWVudE1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJvZHlQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICAgIHBvcHVwSW1nLnNyYyA9IGl0ZW0uaW1hZ2UubWVkaXVtO1xuXG4gICAgcG9wdXBJbWdEaXYuY2xhc3NOYW1lID0gJ2NvbC00IGRldGFpbHMtTW92aWUnO1xuICAgIGJvZHlQb3B1cC5jbGFzc05hbWUgPSAnY29sLTQgZGlzcGxheS1jb21tZW50cyc7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG4gICAgcG9wdXBEaXYuY2xhc3NMaXN0LmFkZCgnZC1mbGV4Jyk7XG4gICAgcG9wdXBEaXYuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWNlbnRlcicpO1xuXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEteG1hcmsnLCAnZmEtMnhsJywgJ2Nsb3NlJyk7XG4gICAgcG9wdXBOYW1lLmNsYXNzTGlzdC5hZGQoJ3Nob3ctbmFtZScpO1xuICAgIHBvcHVwRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdkLWZsZXgnKTtcbiAgICBwb3B1cERldGFpbHMuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpO1xuICAgIHBvcHVwRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdmbGV4LXdyYXAnKTtcblxuICAgIHBvcHVwRGl2LmNsYXNzTGlzdC5hZGQoJ3BvcHVwJyk7XG4gICAgY29tbWVudHMuY2xhc3NMaXN0LmFkZCgnY29sLTQnLCAnZC1mbGV4JywgJ2ZsZXgtZC1jb2x1bW4nLCAnZm9ybS1jb21tZW50cycpO1xuICAgIGNvbW1lbnRGb3JtLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcsICdmbGV4LWQtY29sdW1uJyk7XG4gICAgY29tbWVudEJ0bi5jbGFzc05hbWUgPSAnY29tbWVudC1idG4nO1xuXG4gICAgY29tbWVudHNUaXRsZS50ZXh0Q29udGVudCA9ICdDb21tZW50cyc7XG4gICAgYWRkQ29tbWVudHNUaXRsZS50ZXh0Q29udGVudCA9ICdBZGQgQ29tbWVudCc7XG4gICAgY29tbWVudEJ0bi50ZXh0Q29udGVudCA9ICdDb21tZW50JztcblxuICAgIGNvbW1lbnRzVGl0bGUuaWQgPSAnY29tbWVudHMtdGl0bGUnO1xuICAgIGNvbW1lbnRzU2VjdGlvbi5pZCA9ICdjb21tZW50cy1zZWN0aW9uJztcbiAgICBjb21tZW50Rm9ybS5pZCA9ICdjb21tZW50LWZvcm0nO1xuICAgIGNvbW1lbnROYW1lLmlkID0gJ2NvbW1lbnQtbmFtZSc7XG4gICAgY29tbWVudE1zZy5pZCA9ICdjb21tZW50LW1lc3NhZ2UnO1xuICAgIGNvbW1lbnRCdG4uaWQgPSBpdGVtSWQ7XG5cbiAgICBjb21tZW50TmFtZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3RydWUnKTtcbiAgICBjb21tZW50TXNnLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xuXG4gICAgY29tbWVudE5hbWUucGxhY2Vob2xkZXIgPSAnWW91ciBOYW1lJztcbiAgICBjb21tZW50TXNnLnBsYWNlaG9sZGVyID0gJ1lvdXIgQ29tbWVudCc7XG4gICAgcG9wdXBOYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgIHBvcHVwRGV0MS50ZXh0Q29udGVudCA9IGBHZW5yZTogJHtpdGVtLmdlbnJlc1swXX1gO1xuICAgIHBvcHVwRGV0Mi50ZXh0Q29udGVudCA9IGBSYXRpbmc6ICR7aXRlbS5yYXRpbmcuYXZlcmFnZX1gO1xuICAgIHBvcHVwRGV0My50ZXh0Q29udGVudCA9IGBMYW5ndWFnZTogJHtpdGVtLmxhbmd1YWdlfWA7XG4gICAgcG9wdXBEZXQ0LnRleHRDb250ZW50ID0gYFJ1bnRpbWU6ICR7aXRlbS5ydW50aW1lfSBtaW5gO1xuXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXknKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocG9wdXBEaXYpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cERpdik7XG5cbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChjbG9zZSk7XG5cbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChwb3B1cEltZ0Rpdik7XG5cbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChib2R5UG9wdXApO1xuXG4gICAgcG9wdXBJbWdEaXYuYXBwZW5kQ2hpbGQocG9wdXBJbWcpO1xuICAgIHBvcHVwSW1nRGl2LmFwcGVuZENoaWxkKHBvcHVwTmFtZSk7XG4gICAgcG9wdXBJbWdEaXYuYXBwZW5kQ2hpbGQocG9wdXBEZXRhaWxzKTtcbiAgICBwb3B1cERldGFpbHMuYXBwZW5kQ2hpbGQocG9wdXBEZXQxKTtcbiAgICBwb3B1cERldGFpbHMuYXBwZW5kQ2hpbGQocG9wdXBEZXQyKTtcbiAgICBwb3B1cERldGFpbHMuYXBwZW5kQ2hpbGQocG9wdXBEZXQzKTtcbiAgICBwb3B1cERldGFpbHMuYXBwZW5kQ2hpbGQocG9wdXBEZXQ0KTtcbiAgICBib2R5UG9wdXAuYXBwZW5kQ2hpbGQoY29tbWVudHNUaXRsZSk7XG4gICAgYm9keVBvcHVwLmFwcGVuZENoaWxkKGNvbW1lbnRzU2VjdGlvbik7XG5cbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChjb21tZW50cyk7XG4gICAgY29tbWVudHMuYXBwZW5kQ2hpbGQoYWRkQ29tbWVudHNUaXRsZSk7XG4gICAgY29tbWVudHMuYXBwZW5kQ2hpbGQoY29tbWVudEZvcm0pO1xuICAgIGNvbW1lbnRGb3JtLmFwcGVuZENoaWxkKGNvbW1lbnROYW1lKTtcbiAgICBjb21tZW50Rm9ybS5hcHBlbmRDaGlsZChjb21tZW50TXNnKTtcbiAgICBjb21tZW50Rm9ybS5hcHBlbmRDaGlsZChjb21tZW50QnRuKTtcblxuICAgIGRpc3BsYXlDb21tZW50cyhpdGVtSWQpO1xuICB9XG4gIHJldHVybiBwb3B1cERpdjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlTaG93O1xuIiwiaW1wb3J0IEFQSSBmcm9tICcuL2FwaS5qcyc7XG5pbXBvcnQgeyBpbnZvIH0gZnJvbSAnLi9lbnYuanMnO1xuXG5jbGFzcyBMSUtFUyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlrZXNBUEkgPSBuZXcgQVBJKGludm8pO1xuICB9XG5cbiAgYXN5bmMgYWRkTGlrZXMoaWQpIHtcbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgaXRlbV9pZDogYCR7aWR9YCxcbiAgICB9O1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMubGlrZXNBUEkucG9zdERhdGEoJ2xpa2VzJywgYm9keSk7XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIGFzeW5jIGdldGxpa2VzKCkge1xuICAgIGNvbnN0IGxpa2VzID0gYXdhaXQgdGhpcy5saWtlc0FQSS5nZXREYXRhKCdsaWtlcycpO1xuICAgIGNvbnN0IGxpa2VzQXJyYXkgPSBBcnJheS5pc0FycmF5KGxpa2VzKSA/IGxpa2VzIDogW107XG4gICAgcmV0dXJuIGxpa2VzQXJyYXk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTElLRVM7XG4iLCJpbXBvcnQgQWRkQ29tbWVudCBmcm9tICcuL0FkZENvbW1lbnRUb01vdmllLmpzJztcbmltcG9ydCBBUEkgZnJvbSAnLi9hcGkuanMnO1xuaW1wb3J0IGRpc3BsYXlMaWtlcyBmcm9tICcuL2Rpc3BsYXlMaWtlLmpzJztcbmltcG9ydCB7IG1vdmllQXBpIH0gZnJvbSAnLi9lbnYuanMnO1xuaW1wb3J0IGxhenlMb2FkSW1hZ2VzIGZyb20gJy4vbGF6eUxvYWRJbWFnZS5qcyc7XG5pbXBvcnQgcmVzZXJ2YXRpb24gZnJvbSAnLi9yZXNlcnZhdGlvbi5qcyc7XG5pbXBvcnQgTElLRVMgZnJvbSAnLi9MaWtlcy5qcyc7XG5pbXBvcnQgVG90YWxJdGVtcyBmcm9tICcuL3RvdGFsSXRlbXMuanMnO1xuaW1wb3J0IGRpc3BsYXlTaG93IGZyb20gJy4vRGlzcGxheVBvcHVwLmpzJztcblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChvYmopID0+IHtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG9iai50YWcpO1xuICBpZiAob2JqLmNsYXNzTmFtZSkgZWwuY2xhc3NOYW1lID0gb2JqLmNsYXNzTmFtZTtcbiAgaWYgKG9iai50YWcgPT09ICdpbWcnKSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnbGF6eScpO1xuICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zcmMnLCBvYmouc3JjKTtcbiAgICBlbC5hbHQgPSAnTGF6eS1sb2FkZWQgaW1hZ2UnO1xuICB9XG4gIHJldHVybiBlbDtcbn07XG5cbmNvbnN0IGNyZWF0ZVRleHROb2RlID0gKHRhZywgdGV4dCkgPT4ge1xuICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xuICB0YWcuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICByZXR1cm4gdGFnO1xufTtcblxuY29uc3QgY3JlYXRlTW92aWVzID0gKG1vdmllRGV0YWlscywgbGlrZXNBcnJheSkgPT4ge1xuICBjb25zdCBtb3ZpZSA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBjbGFzc05hbWU6ICdtb3ZpZScgfSk7XG4gIG1vdmllLnNldEF0dHJpYnV0ZSgnaWQtbW92aWUnLCBtb3ZpZURldGFpbHMuaWQpO1xuICAvLyBDcmVhdGUgRGl2IHdpdGggY2xhc3MgaW1hZ2UtY29udGFpbmVyXG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBjbGFzc05hbWU6ICdpbWFnZS1jb250YWluZXInLFxuICB9KTtcbiAgY29uc3QgaW1nID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnOiAnaW1nJyxcbiAgICBjbGFzc05hbWU6ICdpbWFnZScsXG4gICAgc3JjOiBtb3ZpZURldGFpbHMuaW1hZ2UubWVkaXVtLFxuICB9KTtcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgbW92aWUuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuXG4gIC8vIGNyZWF0ZSBEaXYgd2l0aCBNb3ZpZSBCb2R5XG4gIGNvbnN0IG1vdmllQm9keSA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZzogJ2RpdicsXG4gICAgY2xhc3NOYW1lOiAnZC1mbGV4IGZsZXgtZC1jb2x1bW4gbW92aWVzLWJvZHknLFxuICB9KTtcbiAgLy8gY3JlYXRlIGRpdiB3aXRoIE1vdmllLXRpdGxlXG4gIGNvbnN0IG1vdmllVGl0bGUgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzTmFtZTpcbiAgICAgICdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1zcGFjZS1iZXR3ZWVuIG1vdmllcy10aXRsZScsXG4gIH0pO1xuICBjb25zdCBoMiA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdoMicgfSk7XG4gIGNyZWF0ZVRleHROb2RlKGgyLCBtb3ZpZURldGFpbHMubmFtZSk7XG4gIGNvbnN0IGljb25idXR0b24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWc6ICdhJyxcbiAgICBjbGFzc05hbWU6ICdidG4gYnRuLWxpa2UnLFxuICB9KTtcbiAgaWNvbmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkLW1vdmllJywgbW92aWVEZXRhaWxzLmlkKTtcblxuICBjb25zdCBpY29uSGVhcnQgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWc6ICdpJyxcbiAgICBjbGFzc05hbWU6ICdmYS1yZWd1bGFyIGZhLWhlYXJ0JyxcbiAgfSk7XG4gIG1vdmllVGl0bGUuYXBwZW5kQ2hpbGQoaDIpO1xuICBpY29uYnV0dG9uLmFwcGVuZENoaWxkKGljb25IZWFydCk7XG4gIG1vdmllVGl0bGUuYXBwZW5kQ2hpbGQoaWNvbmJ1dHRvbik7XG4gIG1vdmllQm9keS5hcHBlbmRDaGlsZChtb3ZpZVRpdGxlKTtcblxuICAvLyBjcmVhdGUgZGl2IHdpdGggY2xhc3MgbGlrZXNcbiAgY29uc3QgbGlrZXMgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzTmFtZTogJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGxpa2VzJyxcbiAgfSk7XG4gIGNvbnN0IHNwYW5MaWtlcyA9IGNyZWF0ZUVsZW1lbnQoe1xuICAgIHRhZzogJ3NwYW4nLFxuICB9KTtcbiAgY29uc3QgbGlrZVRleHQgPSBkaXNwbGF5TGlrZXMobGlrZXNBcnJheSwgbW92aWVEZXRhaWxzLmlkKTtcbiAgY29uc3QgbGlrZUNvdW50ID0gbGlrZVRleHQubGVuZ3RoICE9PSAwID8gbGlrZVRleHQgOiAwO1xuICBjcmVhdGVUZXh0Tm9kZShzcGFuTGlrZXMsIGAke2xpa2VDb3VudH0gbGlrZXNgKTtcbiAgbGlrZXMuYXBwZW5kQ2hpbGQoc3Bhbkxpa2VzKTtcbiAgbW92aWVCb2R5LmFwcGVuZENoaWxkKGxpa2VzKTtcbiAgLy8gY3JlYXRlIGRpdiB3aXRoIGNsYXNzIEdyb3VwIGJ1dHRvbnNcbiAgY29uc3QgZ3JvdXBCdG5zID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBjbGFzc05hbWU6ICdkLWZsZXgganVzdGlmeS1jb250ZW50LXNwYWNlLWJldHdlZW4gZ3JvdXAtYnRucycsXG4gIH0pO1xuICBjb25zdCBjb21tZW50RGl2ID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnOiAnZGl2JyxcbiAgICBjbGFzc05hbWU6ICdjb21tZW50JyxcbiAgfSk7XG4gIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWc6ICdidXR0b24nLFxuICAgIGNsYXNzTmFtZTogJ2J0biBidG4tY29tbWVudCcsXG4gIH0pO1xuICBjcmVhdGVUZXh0Tm9kZShjb21tZW50QnV0dG9uLCAnY29tbWVudCcpO1xuICBjb21tZW50RGl2LmFwcGVuZENoaWxkKGNvbW1lbnRCdXR0b24pO1xuICBncm91cEJ0bnMuYXBwZW5kQ2hpbGQoY29tbWVudERpdik7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25EaXYgPSBjcmVhdGVFbGVtZW50KHtcbiAgICB0YWc6ICdkaXYnLFxuICAgIGNsYXNzTmFtZTogJ3Jlc2VydmF0aW9uJyxcbiAgfSk7XG4gIGNvbnN0IHJlc2VydmF0aW9uQnV0dG9uID0gY3JlYXRlRWxlbWVudCh7XG4gICAgdGFnOiAnYnV0dG9uJyxcbiAgICBjbGFzc05hbWU6ICdidG4gYnRuLXJlc2VydmF0aW9uJyxcbiAgfSk7XG4gIGNyZWF0ZVRleHROb2RlKHJlc2VydmF0aW9uQnV0dG9uLCAncmVzZXJ2YXRpb24nKTtcbiAgcmVzZXJ2YXRpb25CdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG1vdmllRGV0YWlscy5pZCk7XG5cbiAgcmVzZXJ2YXRpb25EaXYuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25CdXR0b24pO1xuICBncm91cEJ0bnMuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25EaXYpO1xuXG4gIG1vdmllQm9keS5hcHBlbmRDaGlsZChncm91cEJ0bnMpO1xuICBtb3ZpZS5hcHBlbmRDaGlsZChtb3ZpZUJvZHkpO1xuXG4gIHJldHVybiBtb3ZpZTtcbn07XG5cbmNvbnN0IENvbW1lbnRQb3B1cCA9IGFzeW5jIChldmVudCkgPT4ge1xuICBjb25zdCBjb21tZW50QnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICBjb25zdCBtb3ZpZSA9IGNvbW1lbnRCdXR0b24uY2xvc2VzdCgnLm1vdmllJyk7XG4gIGNvbnN0IG1vdmllSWQgPSBtb3ZpZS5nZXRBdHRyaWJ1dGUoJ2lkLW1vdmllJyk7XG4gIC8vIFBlcmZvcm0gdGhlIGRlc2lyZWQgYWN0aW9uIHdoZW4gdGhlIGNvbW1lbnQgYnV0dG9uIGlzIGNsaWNrZWRcbiAgYXdhaXQgZGlzcGxheVNob3cocGFyc2VJbnQobW92aWVJZCwgMTApKTtcbiAgQWRkQ29tbWVudCgpO1xufTtcblxuY29uc3QgZGlwbGF5Q291bnRJdGVtID0gKG1vdmllc0xpc3QsIGxpa2VzQXJyYXkpID0+IHtcbiAgY29uc3QgY291bnRJdGVtID0gVG90YWxJdGVtcyhsaWtlc0FycmF5KTtcbiAgY29uc3QgY291bnRlckRpdiA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBjbGFzc05hbWU6ICdjb3VudGVyJyB9KTtcbiAgY3JlYXRlVGV4dE5vZGUoY291bnRlckRpdiwgYCR7Y291bnRJdGVtfSBtb3ZpZWApO1xuXG4gIG1vdmllc0xpc3QuaW5zZXJ0QmVmb3JlKGNvdW50ZXJEaXYsIG1vdmllc0xpc3QuZmlyc3RDaGlsZCk7XG59O1xuXG5jb25zdCBkaXNwbGF5TW92aWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBtb3ZpZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllcy1pdGVtJyk7XG5cbiAgaWYgKG1vdmllc0xpc3QpIHtcbiAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllcy1jb250aWVudCAuc3Bpbm5lcicpO1xuXG4gICAgc3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjb25zdCBhcGkgPSBuZXcgQVBJKG1vdmllQXBpKTtcbiAgICBjb25zdCBtb3ZpZXMgPSBhd2FpdCBhcGkuZ2V0RGF0YSgnc2hvd3MnKTtcbiAgICBtb3ZpZXNMaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3QgTGlrZXMgPSBuZXcgTElLRVMoKTtcbiAgICBjb25zdCBsaWtlc0FycmF5ID0gYXdhaXQgTGlrZXMuZ2V0bGlrZXMoKTtcbiAgICBkaXBsYXlDb3VudEl0ZW0obW92aWVzTGlzdC5wYXJlbnROb2RlLCBtb3ZpZXMpO1xuICAgIG1vdmllcy5mb3JFYWNoKGFzeW5jIChtb3ZpZSkgPT4ge1xuICAgICAgcmVzZXJ2YXRpb24ucmVzZXJ2YXRpb25CdXR0b25FdmVudExpc3RuZXIoKTtcbiAgICAgIGNvbnN0IG1vdmllRWxlbWVudCA9IGNyZWF0ZU1vdmllcyhtb3ZpZSwgbGlrZXNBcnJheSk7XG4gICAgICBjb25zdCBjb21tZW50QnV0dG9uID0gbW92aWVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY29tbWVudCcpO1xuICAgICAgY29tbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENvbW1lbnRQb3B1cCk7XG4gICAgICBtb3ZpZXNMaXN0LmFwcGVuZENoaWxkKG1vdmllRWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICBsYXp5TG9hZEltYWdlcygpO1xuICAgIHNwaW5uZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtb3ZpZXNMaXN0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNb3ZpZXM7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmNsYXNzIEFQSSB7XG4gIGNvbnN0cnVjdG9yKGxpbmspIHtcbiAgICB0aGlzLnVybCA9IGxpbms7XG4gIH1cblxuICBmZXRjaERhdGEgPSBhc3luYyAodXJsLCBtZXRob2QsIGJvZHkpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0ge307XG4gICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgb3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9O1xuICAgICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH07XG5cbiAgcG9zdERhdGEgPSBhc3luYyAoZW5kUG9pbnQsIGJvZHkpID0+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnVybCArIGVuZFBvaW50O1xuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHRoaXMuZmV0Y2hEYXRhKHVybCwgJ1BPU1QnLCBib2R5KTtcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uO1xuICB9O1xuXG4gIGdldERhdGEgPSBhc3luYyAoZW5kUG9pbnQpID0+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnVybCArIGVuZFBvaW50O1xuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHRoaXMuZmV0Y2hEYXRhKHVybCwgJ0dFVCcpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZUpzb24uanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBBUEkgZnJvbSAnLi9hcGkuanMnO1xuaW1wb3J0IHsgaW52byB9IGZyb20gJy4vZW52LmpzJztcblxuY2xhc3MgQ29tbWVudHMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbW1lbnRzQVBJID0gbmV3IEFQSShpbnZvKTtcbiAgfVxuXG4gIGFzeW5jIGFkZGNvbW1lbnRzKGJvZHkpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmNvbW1lbnRzQVBJLnBvc3REYXRhKCdjb21tZW50cycsIGJvZHkpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBhc3luYyBnZXRDb21tZW50cyhpdGVtSWQpIHtcbiAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHRoaXMuY29tbWVudHNBUEkuZ2V0RGF0YShgY29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gKTtcbiAgICBjb25zdCBjb21tZW50c0FycmF5ID0gQXJyYXkuaXNBcnJheShjb21tZW50cykgPyBjb21tZW50cyA6IFtdO1xuICAgIHJldHVybiBjb21tZW50c0FycmF5O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb21tZW50czsiLCJpbXBvcnQgQVBJIGZyb20gJy4vYXBpJztcbmltcG9ydCB7IGludm8gfSBmcm9tICcuL2Vudic7XG5pbXBvcnQgcmVzZXJ2YXRpb25Db3VudGVyIGZyb20gJy4vcmVzZXJ2YXRpb25Db3VudGVyJztcblxuY2xhc3MgQ29tcG9uZW50cyB7XG4gIHJlc2VydmF0aW9uUG9wVXAgPSAobW92aWUpID0+IHtcbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGllbnQnKTtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZXMtY29udGllbnQnKTtcbiAgICBjb25zdCBwb3BVcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcFVwRGl2LmNsYXNzTmFtZSA9ICdyZXNlcnZhdGlvbi1kaXYnO1xuICAgIHBvcFVwRGl2LnNldEF0dHJpYnV0ZSgnbW92aWVJZCcsIG1vdmllLmlkKTtcblxuICAgIGNvbnN0IHBvcFVwSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcFVwSGVhZC5jbGFzc05hbWUgPSAncG9wLXVwLWhlYWQnO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLmNsYXNzTmFtZSA9ICdjbG9zZS1tb2RlbCc7XG5cbiAgICBjb25zdCBoZWFkU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYScpO1xuXG4gICAgY29uc3QgcmVzZXJ2YXRpb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHJlc2VydmF0aW9uSW1hZ2UuY2xhc3NOYW1lID0gJ21vdmllLUltYWdlJztcbiAgICByZXNlcnZhdGlvbkltYWdlLnNyYyA9IG1vdmllLmltYWdlLm9yaWdpbmFsO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gbW92aWUubmFtZTtcblxuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3VtbWFyeS5jbGFzc05hbWUgPSAnc3VtbWFyeSc7XG4gICAgc3VtbWFyeS5pbm5lckhUTUwgPSBtb3ZpZS5zdW1tYXJ5O1xuXG4gICAgY29uc3QgbW92aWVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW92aWVJbmZvLmNsYXNzTmFtZSA9ICdtb3ZpZS1pbmZvJztcblxuICAgIGNvbnN0IG1vdmllSW5mb0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb3ZpZUluZm9MZWZ0LmNsYXNzTmFtZSA9ICdtb3ZpZS1pbmZvLXJpZ2h0JztcblxuICAgIGNvbnN0IGxhbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGFuZy50ZXh0Q29udGVudCA9IGBMYW5ndWFnZTogJHttb3ZpZS5sYW5ndWFnZX1gO1xuXG4gICAgY29uc3QgY291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb3VudHJ5LnRleHRDb250ZW50ID0gYENvdW50cnk6ICR7bW92aWUubmV0d29yay5jb3VudHJ5Lm5hbWV9YDtcblxuICAgIGNvbnN0IGR1cmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGR1cmF0aW9uLnRleHRDb250ZW50ID0gYER1cmF0aW9uOiAke21vdmllLnJ1bnRpbWV9YDtcblxuICAgIGNvbnN0IG5ldHdvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmV0d29yay50ZXh0Q29udGVudCA9IGBOZXR3b3JrOiAke21vdmllLm5ldHdvcmsubmFtZX1gO1xuXG4gICAgY29uc3QgbW92aWVJbmZvUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb3ZpZUluZm9SaWdodC5jbGFzc05hbWUgPSAnbW92aWUtaW5mby1sZWZ0JztcblxuICAgIG1vdmllSW5mb0xlZnQuYXBwZW5kQ2hpbGQobGFuZyk7XG4gICAgbW92aWVJbmZvTGVmdC5hcHBlbmRDaGlsZChjb3VudHJ5KTtcblxuICAgIG1vdmllSW5mb1JpZ2h0LmFwcGVuZENoaWxkKG5ldHdvcmspO1xuICAgIG1vdmllSW5mb1JpZ2h0LmFwcGVuZENoaWxkKGR1cmF0aW9uKTtcblxuICAgIG1vdmllSW5mby5hcHBlbmRDaGlsZChtb3ZpZUluZm9MZWZ0KTtcbiAgICBtb3ZpZUluZm8uYXBwZW5kQ2hpbGQobW92aWVJbmZvUmlnaHQpO1xuXG4gICAgcG9wVXBIZWFkLmFwcGVuZENoaWxkKGhlYWRTcGFuKTtcbiAgICBwb3BVcEhlYWQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBwb3BVcERpdi5hcHBlbmRDaGlsZChwb3BVcEhlYWQpO1xuICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKHJlc2VydmF0aW9uSW1hZ2UpO1xuICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBwb3BVcERpdi5hcHBlbmRDaGlsZChzdW1tYXJ5KTtcbiAgICBwb3BVcERpdi5hcHBlbmRDaGlsZChtb3ZpZUluZm8pO1xuICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlUmVzZXJ2YXJpb25Gcm9tKCkpO1xuICAgIGFwcC5hcHBlbmRDaGlsZChwb3BVcERpdik7XG4gICAgdGhpcy5wYWludFJlc2VydmF0aW9ucyhtb3ZpZS5pZCk7XG5cbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb250aWVudC1pbi1iYWNrZ291bmQnKTtcbiAgICByZXR1cm4gYXBwO1xuICB9O1xuXG4gIGNyZWF0ZVJlc2VydmFyaW9uRnJvbSA9ICgpID0+IHtcbiAgICBjb25zdCByZXNlcnZhdGlvbkZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXNlcnZhdGlvbkZvcm1EaXYuY2xhc3NOYW1lID0gJ3Jlc2VydmF0aW9uLWZvcm0tZGl2JztcblxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBhIHJlc2VydmF0aW9uJztcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc05hbWUgPSAncmVzZXJ2YXRpb24tZm9ybSc7XG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5hbWVJbnB1dC5jbGFzc05hbWUgPSAnbmFtZS1pbnB1dCc7XG4gICAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ1lvdXIgbmFtZSc7XG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZUlucHV0LmNsYXNzTmFtZSA9ICdkYXRlLWlucHV0IHN0YXJ0LWRhdGUnO1xuICAgIGRhdGVJbnB1dC5wbGFjZWhvbGRlciA9ICdTdGFydCBEYXRlJztcbiAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0RW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXRFbmQuY2xhc3NOYW1lID0gJ2RhdGUtaW5wdXQgZW5kLWRhdGUnO1xuICAgIGRhdGVJbnB1dEVuZC5wbGFjZWhvbGRlciA9ICdFbmQgRGF0ZSc7XG4gICAgZGF0ZUlucHV0RW5kLnR5cGUgPSAnZGF0ZSc7XG4gICAgZGF0ZUlucHV0RW5kLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc05hbWUgPSAnc3VibWl0LWlucHV0JztcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnUmVzZXJ2ZSc7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0RW5kKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgcmVzZXJ2YXRpb25Gb3JtRGl2LmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG4gICAgcmVzZXJ2YXRpb25Gb3JtRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIHJldHVybiByZXNlcnZhdGlvbkZvcm1EaXY7XG4gIH07XG5cbiAgY2xvc2VSZXNlcnZhdGlvblBvcFVwID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllcy1jb250aWVudCcpO1xuICAgIGNvbnN0IHBvcFVwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uLWRpdicpO1xuXG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGllbnQtaW4tYmFja2dvdW5kJyk7XG4gICAgcG9wVXBEaXYucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmVzZXJ2YXRpb25zID0gKHJlc2VydmF0aW9uQXJyYXkgPSBudWxsKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9ICdyZXNlcnZhdGlvbnMtZGl2JztcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ3Jlc2VydmF0aW9uLXRpdGxlJztcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBgUmVzZXJ2YXRpb25zICgke3Jlc2VydmF0aW9uQ291bnRlci5nZXRSZXNlcnZhdGlvbkNvdW50KHJlc2VydmF0aW9uQXJyYXkpfSlgO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBpZiAocmVzZXJ2YXRpb25BcnJheS5lcnJvcikge1xuICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9ucy1kaXYnKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9ucy1kaXYnKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgcmVzZXJ2YXRpb25BcnJheS5yZXZlcnNlKCkuZm9yRWFjaCgocmVzZXJ2YXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpLmNsYXNzTmFtZSA9ICdyZXNlcnZhdGlvbi1pdGVtJztcblxuICAgICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUocmVzZXJ2YXRpb24uZGF0ZV9zdGFydCk7XG4gICAgICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUocmVzZXJ2YXRpb24uZGF0ZV9lbmQpO1xuXG4gICAgICBsaS50ZXh0Q29udGVudCA9IGAke3N0YXJ0RGF0ZS5nZXRNb250aCgpICsgMX0vJHtzdGFydERhdGUuZ2V0RGF0ZSgpfS8ke3N0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpfSBcbiAgICAgICAgLSAke2VuZERhdGUuZ2V0TW9udGgoKSArIDF9LyR7ZW5kRGF0ZS5nZXREYXRlKCl9LyR7ZW5kRGF0ZS5nZXRGdWxsWWVhcigpfSBieSAke3Jlc2VydmF0aW9uLnVzZXJuYW1lfWA7XG4gICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHVsKTtcblxuICAgIHJldHVybiBkaXY7XG4gIH07XG5cbiAgcGFpbnRSZXNlcnZhdGlvbnMgPSAoaWQpID0+IHtcbiAgICBjb25zdCBwb3BVcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbi1kaXYnKTtcbiAgICBjb25zdCBhcGkgPSBuZXcgQVBJKGAke2ludm99cmVzZXJ2YXRpb25zYCk7XG5cbiAgICBhcGkuZ2V0RGF0YShgP2l0ZW1faWQ9JHtpZH1gKVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgcG9wVXBEaXYuYXBwZW5kQ2hpbGQodGhpcy5yZXNlcnZhdGlvbnMocmVzdWx0cykpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbXBvbmVudHMoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4vY29tbWVudHMuanMnO1xuaW1wb3J0IHRvdGFsQ29tbWVudHMgZnJvbSAnLi90b3RhbENvbW1lbnRzLmpzJztcblxuY29uc3QgZGlzcGxheUNvbW1lbnRzID0gKGl0ZW1JZCkgPT4ge1xuICBjb25zdCBjb21tZW50c1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHMtc2VjdGlvbicpO1xuICBjb21tZW50c1NlY3Rpb24udGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3QgY29tbWVudHNUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50cy10aXRsZScpO1xuICBpZiAoY29tbWVudHNTZWN0aW9uKSB7XG4gICAgY29uc3QgQ29tbWVudEFQSSA9IG5ldyBDb21tZW50cygpO1xuXG4gICAgQ29tbWVudEFQSS5nZXRDb21tZW50cyhpdGVtSWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGNvbW1lbnRzTnVtYmVyID0gdG90YWxDb21tZW50cyhkYXRhKTtcbiAgICAgIGNvbW1lbnRzVGl0bGUudGV4dENvbnRlbnQgPSBgQ29tbWVudHM6ICR7Y29tbWVudHNOdW1iZXJ9YDtcbiAgICAgIGRhdGEuZm9yRWFjaCgoZCkgPT4ge1xuICAgICAgICBjb25zdCBjb21tZW50TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb21tZW50TGkudGV4dENvbnRlbnQgPSBgJHtkLmNyZWF0aW9uX2RhdGV9ICR7ZC51c2VybmFtZX06ICR7ZC5jb21tZW50fWA7XG4gICAgICAgIGNvbW1lbnRzU2VjdGlvbi5hcHBlbmRDaGlsZChjb21tZW50TGkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb21tZW50czsiLCJjb25zdCBkaXNwbGF5TGlrZXMgPSAobGlrZXNBcnJheSwgdGFyZ2V0SWQpID0+IHtcbiAgY29uc3QgbGlrZSA9IGxpa2VzQXJyYXlcbiAgICAuZmlsdGVyKChpdGVtKSA9PiBOdW1iZXIoaXRlbS5pdGVtX2lkKSA9PT0gTnVtYmVyKHRhcmdldElkKSlcbiAgICAubWFwKChpdGVtKSA9PiBpdGVtLmxpa2VzKTtcbiAgcmV0dXJuIGxpa2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TGlrZXM7XG4iLCJjb25zdCBtb3ZpZUFwaSA9ICdodHRwczovL2FwaS50dm1hemUuY29tLyc7XG5jb25zdCBpbnZvID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0VsVkVhSUtaclJHWGYwOUdFOGNULyc7XG5leHBvcnQgeyBtb3ZpZUFwaSwgaW52byB9O1xuIiwiY29uc3QgbGF6eUxvYWRJbWFnZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGxhenlJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGF6eScpO1xuXG4gIGNvbnN0IGltYWdlT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgY29uc3QgaW1nID0gZW50cnkudGFyZ2V0O1xuICAgICAgICBjb25zdCBzcmMgPSBpbWcuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xuICAgICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgICBpbWFnZU9ic2VydmVyLnVub2JzZXJ2ZShpbWcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBsYXp5SW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgaW1hZ2VPYnNlcnZlci5vYnNlcnZlKGltYWdlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsYXp5TG9hZEltYWdlcztcbiIsImltcG9ydCBjb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgQVBJIGZyb20gJy4vYXBpJztcbmltcG9ydCB7IGludm8gfSBmcm9tICcuL2Vudic7XG5cbmNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8nO1xuXG5jbGFzcyBSZXNlcnZhdGlvbiB7XG4gIGxvYWRSZXNlcnZhdGlvbiA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGFwaSA9IG5ldyBBUEkoQVBJX1VSTCk7XG4gICAgY29uc3QgbW92aWUgPSBhd2FpdCBhcGkuZ2V0RGF0YShldmVudC50YXJnZXQudmFsdWUpO1xuICAgIGNvbXBvbmVudHMucmVzZXJ2YXRpb25Qb3BVcChtb3ZpZSk7XG4gICAgdGhpcy5jbG9zZU1vZGVsRXZlbnRMaXN0bmVyKCk7XG4gICAgdGhpcy5yZXNlcnZhdGlvbkZvcm1FdmVudExpc3RuZXIoKTtcbiAgfTtcblxuICB1bmxvYWRSZXNlcnZhdGlvbiA9ICgpID0+IHtcbiAgICBjb21wb25lbnRzLmNsb3NlUmVzZXJ2YXRpb25Qb3BVcCgpO1xuICB9O1xuXG4gIGNyZWF0ZVJlc2VydmF0aW9uID0gKCkgPT4ge1xuICB9O1xuXG4gIHJlc2VydmF0aW9uQnV0dG9uRXZlbnRMaXN0bmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlc2VydmF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tcmVzZXJ2YXRpb24nKTtcblxuICAgIHJlc2VydmF0aW9ucy5mb3JFYWNoKChyZXNlcnZhdGlvbkJ1dHRvbikgPT4ge1xuICAgICAgcmVzZXJ2YXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmxvYWRSZXNlcnZhdGlvbik7XG4gICAgfSk7XG4gIH07XG5cbiAgY2xvc2VNb2RlbEV2ZW50TGlzdG5lciA9ICgpID0+IHtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RlbCcpO1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51bmxvYWRSZXNlcnZhdGlvbik7XG4gIH07XG5cbiAgcmVzZXJ2YXRpb25Gb3JtRXZlbnRMaXN0bmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vdmllSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb24tZGl2Jyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbi1mb3JtJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0WzBdLnZhbHVlO1xuICAgICAgY29uc3Qgc3RhcnREYXRlID0gZXZlbnQudGFyZ2V0WzFdLnZhbHVlO1xuICAgICAgY29uc3QgZW5kdERhdGUgPSBldmVudC50YXJnZXRbMl0udmFsdWU7XG4gICAgICB0aGlzLnNhdmVSZXNlcnZhdGlvbihtb3ZpZUlkLmdldEF0dHJpYnV0ZSgnbW92aWVpZCcpLCBuYW1lLCBzdGFydERhdGUsIGVuZHREYXRlKTtcbiAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBzYXZlUmVzZXJ2YXRpb24gPSAoaWQsIG5hbWUsIHN0YXJ0RGF0ZSwgZW5kdERhdGUpID0+IHtcbiAgICBjb25zdCBhcGkgPSBuZXcgQVBJKGAke2ludm99cmVzZXJ2YXRpb25zYCk7XG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgICBkYXRlX3N0YXJ0OiBzdGFydERhdGUsXG4gICAgICBkYXRlX2VuZDogZW5kdERhdGUsXG4gICAgfTtcbiAgICBhcGkuZmV0Y2hEYXRhKGAke2ludm99cmVzZXJ2YXRpb25zYCwgJ1BPU1QnLCBib2R5KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbG9hZFJlc2VydmFyaW9ucyhpZCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJlbG9hZFJlc2VydmFyaW9ucyA9IChpZCkgPT4ge1xuICAgIGNvbXBvbmVudHMucGFpbnRSZXNlcnZhdGlvbnMoaWQpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUmVzZXJ2YXRpb24oKTsiLCJjbGFzcyBSZXNlcnZhdGlvbkNvdW50ZXIge1xuICBnZXRSZXNlcnZhdGlvbkNvdW50ID0gKHJlc3VsdmF0aW9ucykgPT4ge1xuICAgIGNvbnN0IHJlc2VydmF0aW9uc0NvdW50ID0gKEFycmF5LmlzQXJyYXkocmVzdWx2YXRpb25zKSA/IHJlc3VsdmF0aW9ucy5sZW5ndGggOiAnMCcpO1xuICAgIHJldHVybiByZXNlcnZhdGlvbnNDb3VudDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgUmVzZXJ2YXRpb25Db3VudGVyKCk7IiwiY29uc3QgdG90YWxDb21tZW50cyA9IChhcnIpID0+IChBcnJheS5pc0FycmF5KGFycikgPyBhcnIubGVuZ3RoIDogJ1RoaXMgaXMgbm90IEFycmF5Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvdGFsQ29tbWVudHM7XG4iLCJjb25zdCBUb3RhbEl0ZW1zID0gKGFycikgPT4gKEFycmF5LmlzQXJyYXkoYXJyKSA/IGFyci5sZW5ndGggOiAnVGhpcyBpcyBub3QgQXJyYXknKTtcblxuZXhwb3J0IGRlZmF1bHQgVG90YWxJdGVtcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
