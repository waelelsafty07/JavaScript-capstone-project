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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  padding: 1.5rem 0;\n  gap: 2rem;\n  position: fixed;\n  width: 100%;\n  background-color: white;\n}\n\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s infinite linear;\n  display: none;\n  margin: auto;\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\nh3 {\n  margin: 1rem 1rem 0;\n}\n\nli {\n  text-decoration: none;\n  list-style-type: none;\n  padding: 0.5rem;\n}\n\n.flex-d-column {\n  flex-direction: column;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.justify-content-center {\n  justify-content: center;\n}\n\n.justify-content-space-between {\n  justify-content: space-between;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n.justify-content-end {\n  justify-content: flex-end;\n}\n\n.nav-list {\n  gap: 1rem;\n}\n\n/*\n* Movies List\n*/\n.content {\n  margin: 3rem 0;\n}\n\n.movies-item {\n  width: 90%;\n  margin-top: 2rem;\n}\n\n.movies-item .movie {\n  flex: 0 0 auto;\n  padding: 0.5rem;\n}\n\n.movies-item .movie .image-container .image {\n  width: 100%;\n}\n\n.movies-item .movie .movies-body .movies-title .fa-heart {\n  font-size: 1.3rem;\n}\n\n.movies-item .movie .movies-body .group-btns > div {\n  margin: 1rem 0 0;\n}\n\n.d-grid {\n  display: grid;\n}\n\n.d-none {\n  display: none;\n}\n\n.popup {\n  overflow: auto;\n  position: fixed;\n  top: 0%;\n  left: 5%;\n  padding: 1rem;\n  width: 90%;\n  height: 90%;\n  border: 2px solid black;\n  background-color: #fff;\n  margin: 2rem auto;\n  z-index: 5;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.301);\n  backdrop-filter: blur(5px);\n  z-index: 2;\n}\n\n.close {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  margin-top: 1rem;\n}\n\n.show-name {\n  margin: 0 auto;\n}\n\n.details {\n  margin: 0 auto;\n}\n\n.details li {\n  padding: 0;\n  flex: 0 0 auto;\n  width: 50%;\n}\n\n.col-4 {\n  flex: 0 0 auto;\n  padding: 1rem;\n}\n\n.details-Movie {\n  width: 25%;\n}\n\n.details-Movie img {\n  width: 100%;\n}\n\n.display-comments {\n  width: 30%;\n}\n\n.form-comments {\n  width: 30%;\n}\n\nform,\ninput,\ntextarea {\n  margin: 1rem;\n  font-size: 1rem;\n  font-family: sans-serif, Arial, Helvetica;\n}\n\nbutton {\n  padding: 1rem 2rem;\n}\n\nfooter > span {\n  padding: 2rem 1.5rem;\n  display: block;\n  border: 2px solid black;\n  width: 100%;\n}\n\n.reservation-div {\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  z-index: 100;\n  background: white;\n  top: 0;\n  align-items: center;\n  width: 60%;\n  padding: 2rem;\n  height: 100%;\n}\n\n.pop-up-head {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.pop-up-head > img {\n  content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 2rem;\n  right: 0;\n  position: absolute;\n}\n\n.contient {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 5rem;\n}\n\n.contient-in-backgound {\n  position: relative;\n  z-index: -100;\n  filter: blur(4px);\n}\n\n.movie-Image {\n  padding: 2rem 0;\n  width: 45%;\n}\n\n.summary {\n  padding-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n.no-overflow {\n  overflow: hidden;\n}\n\n.movie-info {\n  display: flex;\n  gap: 2rem;\n}\n\n.movie-info-right,\n.movie-info-left {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n\n.reservation-form-div {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.reservation-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 100%;\n  margin: 0;\n}\n\n.submit-input {\n  padding: 1rem;\n  border: 1px black solid;\n  text-align: center;\n  margin: 0;\n  background-color: white;\n}\n\n.submit-input:hover {\n  border: 1px solid rgb(75, 75, 228);\n  background-color: rgb(75, 75, 228);\n  color: white;\n  font-weight: 600;\n}\n\n.name-input,\n.date-input {\n  padding: 0.5rem;\n  margin: 0;\n}\n\n.reservation-title {\n  margin-top: 2rem;\n}\n\n#comment-form,\n#comment-name,\n#comment-message {\n  padding: 1rem;\n}\n\n#comment-name:hover,\n#comment-message:hover,\n.comment-btn:hover {\n  border: 4px solid grey;\n}\n\n.counter {\n  position: fixed;\n  padding-bottom: 1rem;\n  background-color: #fff;\n  width: 100%;\n  justify-content: center;\n  display: flex;\n}\n\n@media screen and (min-width: 365px) {\n  .movie {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 768px) {\n  .movie {\n    width: 33.333333%;\n  }\n  .group-btns button {\n    padding: 1rem;\n  }\n  .movie h2 {\n    font-size: 1rem;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .movie {\n    width: 25%;\n  }\n  .group-btns button {\n    padding: 1rem 2rem;\n  }\n}\n@media screen and (min-width: 1400px) {\n  .movie {\n    width: 20%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AACF;;AAEA;EACE,uBAAA;EACA,aAAA;EACA,sBAAA;AACF;;AAEA;EACE,iBAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,uBAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,yBAAA;EACA,6BAAA;EACA,kBAAA;EACA,kCAAA;EACA,aAAA;EACA,YAAA;AACF;;AAEA;EACE;IACE,uBAAA;EACF;EAEA;IACE,yBAAA;EAAF;AACF;AAGA;EACE,mBAAA;AADF;;AAIA;EACE,qBAAA;EACA,qBAAA;EACA,eAAA;AADF;;AAIA;EACE,sBAAA;AADF;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,eAAA;AADF;;AAIA;EACE,uBAAA;AADF;;AAIA;EACE,8BAAA;AADF;;AAIA;EACE,mBAAA;AADF;;AAIA;EACE,yBAAA;AADF;;AAIA;EACE,SAAA;AADF;;AAIA;;CAAA;AAGA;EACE,cAAA;AADF;;AAIA;EACE,UAAA;EACA,gBAAA;AADF;;AAIA;EACE,cAAA;EACA,eAAA;AADF;;AAIA;EACE,WAAA;AADF;;AAIA;EACE,iBAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,cAAA;EACA,eAAA;EACA,OAAA;EACA,QAAA;EACA,aAAA;EACA,UAAA;EACA,WAAA;EACA,uBAAA;EACA,sBAAA;EACA,iBAAA;EACA,UAAA;AADF;;AAIA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,sCAAA;EACA,0BAAA;EACA,UAAA;AADF;;AAIA;EACE,kBAAA;EACA,UAAA;EACA,QAAA;EACA,gBAAA;AADF;;AAIA;EACE,cAAA;AADF;;AAIA;EACE,cAAA;AADF;;AAIA;EACE,UAAA;EACA,cAAA;EACA,UAAA;AADF;;AAIA;EACE,cAAA;EACA,aAAA;AADF;;AAIA;EACE,UAAA;AADF;;AAIA;EACE,WAAA;AADF;;AAIA;EACE,UAAA;AADF;;AAIA;EACE,UAAA;AADF;;AAIA;;;EAGE,YAAA;EACA,eAAA;EACA,yCAAA;AADF;;AAIA;EACE,kBAAA;AADF;;AAIA;EACE,oBAAA;EACA,cAAA;EACA,uBAAA;EACA,WAAA;AADF;;AAIA;EACE,cAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EACA,YAAA;EACA,iBAAA;EACA,MAAA;EACA,mBAAA;EACA,UAAA;EACA,aAAA;EACA,YAAA;AADF;;AAIA;EACE,aAAA;EACA,yBAAA;AADF;;AAIA;EACE,gDAAA;EACA,YAAA;EACA,QAAA;EACA,kBAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;AADF;;AAIA;EACE,kBAAA;EACA,aAAA;EACA,iBAAA;AADF;;AAIA;EACE,eAAA;EACA,UAAA;AADF;;AAIA;EACE,iBAAA;EACA,mBAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA;EACE,aAAA;EACA,SAAA;AADF;;AAIA;;EAEE,aAAA;EACA,sBAAA;EACA,WAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,WAAA;EACA,SAAA;AADF;;AAIA;EACE,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,SAAA;EACA,uBAAA;AADF;;AAIA;EACE,kCAAA;EACA,kCAAA;EACA,YAAA;EACA,gBAAA;AADF;;AAIA;;EAEE,eAAA;EACA,SAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA;;;EAGE,aAAA;AADF;;AAIA;;;EAGE,sBAAA;AADF;;AAIA;EACE,eAAA;EACA,oBAAA;EACA,sBAAA;EACA,WAAA;EACA,uBAAA;EACA,aAAA;AADF;;AAIA;EACE;IACE,WAAA;EADF;AACF;AAIA;EACE;IACE,iBAAA;EAFF;EAKA;IACE,aAAA;EAHF;EAMA;IACE,eAAA;EAJF;AACF;AAOA;EACE;IACE,UAAA;EALF;EAQA;IACE,kBAAA;EANF;AACF;AASA;EACE;IACE,UAAA;EAPF;AACF","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nheader {\r\n  padding: 1.5rem 0;\r\n  gap: 2rem;\r\n  position: fixed;\r\n  width: 100%;\r\n  background-color: #ffff;\r\n}\r\n\r\n.spinner {\r\n  width: 40px;\r\n  height: 40px;\r\n  border: 4px solid #f3f3f3;\r\n  border-top: 4px solid #3498db;\r\n  border-radius: 50%;\r\n  animation: spin 1s infinite linear;\r\n  display: none;\r\n  margin: auto;\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\nh3 {\r\n  margin: 1rem 1rem 0;\r\n}\r\n\r\nli {\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.flex-d-column {\r\n  flex-direction: column;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.flex-wrap {\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.justify-content-center {\r\n  justify-content: center;\r\n}\r\n\r\n.justify-content-space-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.align-items-center {\r\n  align-items: center;\r\n}\r\n\r\n.justify-content-end {\r\n  justify-content: flex-end;\r\n}\r\n\r\n.nav-list {\r\n  gap: 1rem;\r\n}\r\n\r\n/*\r\n* Movies List\r\n*/\r\n.content {\r\n  margin: 3rem 0;\r\n}\r\n\r\n.movies-item {\r\n  width: 90%;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.movies-item .movie {\r\n  flex: 0 0 auto;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.movies-item .movie .image-container .image {\r\n  width: 100%;\r\n}\r\n\r\n.movies-item .movie .movies-body .movies-title .fa-heart {\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.movies-item .movie .movies-body .group-btns > div {\r\n  margin: 1rem 0 0;\r\n}\r\n\r\n.d-grid {\r\n  display: grid;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n\r\n.popup {\r\n  overflow: auto;\r\n  position: fixed;\r\n  top: 0%;\r\n  left: 5%;\r\n  padding: 1rem;\r\n  width: 90%;\r\n  height: 90%;\r\n  border: 2px solid black;\r\n  background-color: #fff;\r\n  margin: 2rem auto;\r\n  z-index: 5;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background-color: rgba(0, 0, 0, 0.301);\r\n  backdrop-filter: blur(5px);\r\n  z-index: 2;\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n  right: 5px;\r\n  top: 5px;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.show-name {\r\n  margin: 0 auto;\r\n}\r\n\r\n.details {\r\n  margin: 0 auto;\r\n}\r\n\r\n.details li {\r\n  padding: 0;\r\n  flex: 0 0 auto;\r\n  width: 50%;\r\n}\r\n\r\n.col-4 {\r\n  flex: 0 0 auto;\r\n  padding: 1rem;\r\n}\r\n\r\n.details-Movie {\r\n  width: 25%;\r\n}\r\n\r\n.details-Movie img {\r\n  width: 100%;\r\n}\r\n\r\n.display-comments {\r\n  width: 30%;\r\n}\r\n\r\n.form-comments {\r\n  width: 30%;\r\n}\r\n\r\nform,\r\ninput,\r\ntextarea {\r\n  margin: 1rem;\r\n  font-size: 1rem;\r\n  font-family: sans-serif, Arial, Helvetica;\r\n}\r\n\r\nbutton {\r\n  padding: 1rem 2rem;\r\n}\r\n\r\nfooter > span {\r\n  padding: 2rem 1.5rem;\r\n  display: block;\r\n  border: 2px solid black;\r\n  width: 100%;\r\n}\r\n\r\n.reservation-div {\r\n  overflow: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  z-index: 100;\r\n  background: #ffff;\r\n  top: 0;\r\n  align-items: center;\r\n  width: 60%;\r\n  padding: 2rem;\r\n  height: 100%;\r\n}\r\n\r\n.pop-up-head {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.pop-up-head > img {\r\n  content: url('./img/svg/close-bold.svg');\r\n  height: 2rem;\r\n  right: 0;\r\n  position: absolute;\r\n}\r\n\r\n.contient {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.contient-in-backgound {\r\n  position: relative;\r\n  z-index: -100;\r\n  filter: blur(4px);\r\n}\r\n\r\n.movie-Image {\r\n  padding: 2rem 0;\r\n  width: 45%;\r\n}\r\n\r\n.summary {\r\n  padding-top: 2rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.no-overflow {\r\n  overflow: hidden;\r\n}\r\n\r\n.movie-info {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.movie-info-right,\r\n.movie-info-left {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.6rem;\r\n}\r\n\r\n.reservation-form-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.reservation-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.submit-input {\r\n  padding: 1rem;\r\n  border: 1px black solid;\r\n  text-align: center;\r\n  margin: 0;\r\n  background-color: #ffff;\r\n}\r\n\r\n.submit-input:hover {\r\n  border: 1px solid rgb(75, 75, 228);\r\n  background-color: rgb(75, 75, 228);\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n\r\n.name-input,\r\n.date-input {\r\n  padding: 0.5rem;\r\n  margin: 0;\r\n}\r\n\r\n.reservation-title {\r\n  margin-top: 2rem;\r\n}\r\n\r\n#comment-form,\r\n#comment-name,\r\n#comment-message {\r\n  padding: 1rem;\r\n}\r\n\r\n#comment-name:hover,\r\n#comment-message:hover,\r\n.comment-btn:hover {\r\n  border: 4px solid grey;\r\n}\r\n\r\n.counter {\r\n  position: fixed;\r\n  padding-bottom: 1rem;\r\n  background-color: #fff;\r\n  width: 100%;\r\n  justify-content: center;\r\n  display: flex;\r\n}\r\n\r\n@media screen and (min-width: 365px) {\r\n  .movie {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .movie {\r\n    width: 33.333333%;\r\n  }\r\n\r\n  .group-btns button {\r\n    padding: 1rem;\r\n  }\r\n\r\n  .movie h2 {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .movie {\r\n    width: 25%;\r\n  }\r\n\r\n  .group-btns button {\r\n    padding: 1rem 2rem;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1400px) {\r\n  .movie {\r\n    width: 20%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsd0JBQXdCOzs7Ozs7Ozs7Ozs7OztBQ1B2Qzs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0Y3Qjs7QUFFQSxpRUFBZSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL3N0eWxlLmNzcz9lZmJmIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvbW9kdWxlcy9BZGRDb21tZW50VG9Nb3ZpZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByby8uL3NyYy9tb2R1bGVzL0FkZExpa2VUb01vdmllLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL21vZHVsZXMvRGlzcGxheVBvcHVwLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL21vZHVsZXMvTGlrZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvbW9kdWxlcy9MaXN0TW92aWVzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL21vZHVsZXMvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvbW9kdWxlcy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL21vZHVsZXMvZGlzcGxheUNvbW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL21vZHVsZXMvZGlzcGxheUxpa2UuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvbW9kdWxlcy9lbnYuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvbW9kdWxlcy9sYXp5TG9hZEltYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL21vZHVsZXMvcmVzZXJ2YXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbkNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm8vLi9zcmMvbW9kdWxlcy90b3RhbENvbW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvLy4vc3JjL21vZHVsZXMvdG90YWxJdGVtcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvc3ZnL2Nsb3NlLWJvbGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogMS41cmVtIDA7XFxuICBnYXA6IDJyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3Bpbm5lciB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmM2YzZjM7XFxuICBib3JkZXItdG9wOiA0cHggc29saWQgIzM0OThkYjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5oMyB7XFxuICBtYXJnaW46IDFyZW0gMXJlbSAwO1xcbn1cXG5cXG5saSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5mbGV4LWQtY29sdW1uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5kLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtd3JhcCB7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uanVzdGlmeS1jb250ZW50LXNwYWNlLWJldHdlZW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi8qXFxuKiBNb3ZpZXMgTGlzdFxcbiovXFxuLmNvbnRlbnQge1xcbiAgbWFyZ2luOiAzcmVtIDA7XFxufVxcblxcbi5tb3ZpZXMtaXRlbSB7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLm1vdmllcy1pdGVtIC5tb3ZpZSB7XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLm1vdmllcy1pdGVtIC5tb3ZpZSAuaW1hZ2UtY29udGFpbmVyIC5pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vdmllcy1pdGVtIC5tb3ZpZSAubW92aWVzLWJvZHkgLm1vdmllcy10aXRsZSAuZmEtaGVhcnQge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5tb3ZpZXMtaXRlbSAubW92aWUgLm1vdmllcy1ib2R5IC5ncm91cC1idG5zID4gZGl2IHtcXG4gIG1hcmdpbjogMXJlbSAwIDA7XFxufVxcblxcbi5kLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmQtbm9uZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucG9wdXAge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDAlO1xcbiAgbGVmdDogNSU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxuICB6LWluZGV4OiA1O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzAxKTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1cHg7XFxuICB0b3A6IDVweDtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5zaG93LW5hbWUge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZGV0YWlscyBsaSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgZmxleDogMCAwIGF1dG87XFxuICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uY29sLTQge1xcbiAgZmxleDogMCAwIGF1dG87XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlscy1Nb3ZpZSB7XFxuICB3aWR0aDogMjUlO1xcbn1cXG5cXG4uZGV0YWlscy1Nb3ZpZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kaXNwbGF5LWNvbW1lbnRzIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbi5mb3JtLWNvbW1lbnRzIHtcXG4gIHdpZHRoOiAzMCU7XFxufVxcblxcbmZvcm0sXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIEFyaWFsLCBIZWx2ZXRpY2E7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxufVxcblxcbmZvb3RlciA+IHNwYW4ge1xcbiAgcGFkZGluZzogMnJlbSAxLjVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZXNlcnZhdGlvbi1kaXYge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgdG9wOiAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA2MCU7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucG9wLXVwLWhlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5wb3AtdXAtaGVhZCA+IGltZyB7XFxuICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgcmlnaHQ6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5jb250aWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbn1cXG5cXG4uY29udGllbnQtaW4tYmFja2dvdW5kIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IC0xMDA7XFxuICBmaWx0ZXI6IGJsdXIoNHB4KTtcXG59XFxuXFxuLm1vdmllLUltYWdlIHtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG4gIHdpZHRoOiA0NSU7XFxufVxcblxcbi5zdW1tYXJ5IHtcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLm5vLW92ZXJmbG93IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5tb3ZpZS1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5tb3ZpZS1pbmZvLXJpZ2h0LFxcbi5tb3ZpZS1pbmZvLWxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNnJlbTtcXG59XFxuXFxuLnJlc2VydmF0aW9uLWZvcm0tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnJlc2VydmF0aW9uLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnN1Ym1pdC1pbnB1dCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN1Ym1pdC1pbnB1dDpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNzUsIDc1LCAyMjgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA3NSwgMjI4KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5uYW1lLWlucHV0LFxcbi5kYXRlLWlucHV0IHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnJlc2VydmF0aW9uLXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbiNjb21tZW50LWZvcm0sXFxuI2NvbW1lbnQtbmFtZSxcXG4jY29tbWVudC1tZXNzYWdlIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNjb21tZW50LW5hbWU6aG92ZXIsXFxuI2NvbW1lbnQtbWVzc2FnZTpob3ZlcixcXG4uY29tbWVudC1idG46aG92ZXIge1xcbiAgYm9yZGVyOiA0cHggc29saWQgZ3JleTtcXG59XFxuXFxuLmNvdW50ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM2NXB4KSB7XFxuICAubW92aWUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5tb3ZpZSB7XFxuICAgIHdpZHRoOiAzMy4zMzMzMzMlO1xcbiAgfVxcbiAgLmdyb3VwLWJ0bnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG4gIC5tb3ZpZSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAubW92aWUge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgfVxcbiAgLmdyb3VwLWJ0bnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4gIC5tb3ZpZSB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNB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Z0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTs7RUFFRSxlQUFBO0VBQ0EsU0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTs7O0VBR0UsYUFBQTtBQURGOztBQUlBOzs7RUFHRSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLFdBQUE7RUFERjtBQUNGO0FBSUE7RUFDRTtJQUNFLGlCQUFBO0VBRkY7RUFLQTtJQUNFLGFBQUE7RUFIRjtFQU1BO0lBQ0UsZUFBQTtFQUpGO0FBQ0Y7QUFPQTtFQUNFO0lBQ0UsVUFBQTtFQUxGO0VBUUE7SUFDRSxrQkFBQTtFQU5GO0FBQ0Y7QUFTQTtFQUNFO0lBQ0UsVUFBQTtFQVBGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMS41cmVtIDA7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uc3Bpbm5lciB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmM2YzZjM7XFxyXFxuICBib3JkZXItdG9wOiA0cHggc29saWQgIzM0OThkYjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBtYXJnaW46IDFyZW0gMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mbGV4LWQtY29sdW1uIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5kLWZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtd3JhcCB7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uanVzdGlmeS1jb250ZW50LXNwYWNlLWJldHdlZW4ge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuKiBNb3ZpZXMgTGlzdFxcclxcbiovXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgbWFyZ2luOiAzcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZXMtaXRlbSB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllcy1pdGVtIC5tb3ZpZSB7XFxyXFxuICBmbGV4OiAwIDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllcy1pdGVtIC5tb3ZpZSAuaW1hZ2UtY29udGFpbmVyIC5pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllcy1pdGVtIC5tb3ZpZSAubW92aWVzLWJvZHkgLm1vdmllcy10aXRsZSAuZmEtaGVhcnQge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZXMtaXRlbSAubW92aWUgLm1vdmllcy1ib2R5IC5ncm91cC1idG5zID4gZGl2IHtcXHJcXG4gIG1hcmdpbjogMXJlbSAwIDA7XFxyXFxufVxcclxcblxcclxcbi5kLWdyaWQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtbm9uZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDAlO1xcclxcbiAgbGVmdDogNSU7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxuICB6LWluZGV4OiA1O1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzAxKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiA1cHg7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zaG93LW5hbWUge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscyBsaSB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZmxleDogMCAwIGF1dG87XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29sLTQge1xcclxcbiAgZmxleDogMCAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1Nb3ZpZSB7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1Nb3ZpZSBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWNvbW1lbnRzIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbW1lbnRzIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxufVxcclxcblxcclxcbmZvcm0sXFxyXFxuaW5wdXQsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgbWFyZ2luOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYsIEFyaWFsLCBIZWx2ZXRpY2E7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciA+IHNwYW4ge1xcclxcbiAgcGFkZGluZzogMnJlbSAxLjVyZW07XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1kaXYge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmZmO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXVwLWhlYWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5wb3AtdXAtaGVhZCA+IGltZyB7XFxyXFxuICBjb250ZW50OiB1cmwoJy4vaW1nL3N2Zy9jbG9zZS1ib2xkLnN2ZycpO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5jb250aWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGllbnQtaW4tYmFja2dvdW5kIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IC0xMDA7XFxyXFxuICBmaWx0ZXI6IGJsdXIoNHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLUltYWdlIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXHJcXG4gIHdpZHRoOiA0NSU7XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5vLW92ZXJmbG93IHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1pbmZvLXJpZ2h0LFxcclxcbi5tb3ZpZS1pbmZvLWxlZnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWZvcm0tZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1pbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1pbnB1dDpob3ZlciB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNzUsIDc1LCAyMjgpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc1LCA3NSwgMjI4KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWlucHV0LFxcclxcbi5kYXRlLWlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWZvcm0sXFxyXFxuI2NvbW1lbnQtbmFtZSxcXHJcXG4jY29tbWVudC1tZXNzYWdlIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LW5hbWU6aG92ZXIsXFxyXFxuI2NvbW1lbnQtbWVzc2FnZTpob3ZlcixcXHJcXG4uY29tbWVudC1idG46aG92ZXIge1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50ZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM2NXB4KSB7XFxyXFxuICAubW92aWUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tb3ZpZSB7XFxyXFxuICAgIHdpZHRoOiAzMy4zMzMzMzMlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdyb3VwLWJ0bnMgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZSBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAubW92aWUge1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmdyb3VwLWJ0bnMgYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcXHJcXG4gIC5tb3ZpZSB7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkaXNwbGF5TW92aWVzIGZyb20gJy4vbW9kdWxlcy9MaXN0TW92aWVzLmpzJztcbmltcG9ydCBhZGRMaWtlIGZyb20gJy4vbW9kdWxlcy9BZGRMaWtlVG9Nb3ZpZS5qcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBkaXNwbGF5TW92aWVzKCk7XG4gIGFkZExpa2UoKTtcbn0pO1xuIiwiaW1wb3J0IENvbW1lbnRzIGZyb20gJy4vY29tbWVudHMuanMnO1xuaW1wb3J0IGRpc3BsYXlDb21tZW50cyBmcm9tICcuL2Rpc3BsYXlDb21tZW50cy5qcyc7XG5cbmNvbnN0IEFkZENvbW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnQtZm9ybScpO1xuXG4gIGlmIChjb21tZW50Rm9ybSkge1xuICAgIGNvbnN0IHN1Ym1pdCA9IGNvbW1lbnRGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgbmFtZSA9IGNvbW1lbnRGb3JtLnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50LW5hbWUnKS52YWx1ZTtcbiAgICAgIGNvbnN0IG1zZyA9IGNvbW1lbnRGb3JtLnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50LW1lc3NhZ2UnKS52YWx1ZTtcblxuICAgICAgY29uc3QgQ29tbWVudEFQSSA9IG5ldyBDb21tZW50cygpO1xuICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgaXRlbV9pZDogc3VibWl0LmlkLFxuICAgICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgICAgY29tbWVudDogbXNnLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IENvbW1lbnRBUEkuYWRkY29tbWVudHMoYm9keSk7XG4gICAgICBjb21tZW50Rm9ybS5yZXNldCgpO1xuICAgICAgZGlzcGxheUNvbW1lbnRzKHN1Ym1pdC5pZCk7XG4gICAgfSk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBBZGRDb21tZW50OyIsImltcG9ydCBMSUtFUyBmcm9tICcuL0xpa2VzLmpzJztcblxuY29uc3QgYWRkTGlrZSA9ICgpID0+IHtcbiAgY29uc3QgbGlrZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWxpa2UnKTtcbiAgaWYgKGxpa2VCdG5zKSB7XG4gICAgY29uc3QgbGlrZUFQSSA9IG5ldyBMSUtFUygpO1xuICAgIGxpa2VCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpZCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2lkLW1vdmllJyk7XG4gICAgICAgIGF3YWl0IGxpa2VBUEkuYWRkTGlrZXMoaWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZExpa2U7XG4iLCJpbXBvcnQgQVBJIGZyb20gJy4vYXBpLmpzJztcclxuaW1wb3J0IGRpc3BsYXlDb21tZW50cyBmcm9tICcuL2Rpc3BsYXlDb21tZW50cy5qcyc7XHJcbmltcG9ydCB7IG1vdmllQXBpIH0gZnJvbSAnLi9lbnYuanMnO1xyXG5cclxuY29uc3QgZGlzcGxheVNob3cgPSBhc3luYyAoaXRlbUlkKSA9PiB7XHJcbiAgY29uc3QgYXBpID0gbmV3IEFQSShtb3ZpZUFwaSk7XHJcbiAgY29uc3QgaXRlbSA9IGF3YWl0IGFwaS5nZXREYXRhKGBzaG93cy8ke2l0ZW1JZH1gKTtcclxuICBjb25zdCBwb3B1cERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBpZiAoaXRlbSkge1xyXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBjb25zdCBwb3B1cEltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgcG9wdXBJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNvbnN0IHBvcHVwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb25zdCBwb3B1cERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3QgcG9wdXBEZXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IHBvcHVwRGV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBwb3B1cERldDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgcG9wdXBEZXQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjb21tZW50c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGNvbnN0IGNvbW1lbnRzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCBhZGRDb21tZW50c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgY29uc3QgY29tbWVudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3QgY29tbWVudE1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBjb25zdCBjb21tZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBib2R5UG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG5cclxuICAgIHBvcHVwSW1nLnNyYyA9IGl0ZW0uaW1hZ2UubWVkaXVtO1xyXG5cclxuICAgIHBvcHVwSW1nRGl2LmNsYXNzTmFtZSA9ICdjb2wtNCBkZXRhaWxzLU1vdmllJztcclxuICAgIGJvZHlQb3B1cC5jbGFzc05hbWUgPSAnY29sLTQgZGlzcGxheS1jb21tZW50cyc7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcclxuICAgIHBvcHVwRGl2LmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpO1xyXG4gICAgcG9wdXBEaXYuY2xhc3NMaXN0LmFkZCgnanVzdGlmeS1jb250ZW50LWNlbnRlcicpO1xyXG5cclxuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXhtYXJrJywgJ2ZhLTJ4bCcsICdjbG9zZScpO1xyXG4gICAgcG9wdXBOYW1lLmNsYXNzTGlzdC5hZGQoJ3Nob3ctbmFtZScpO1xyXG4gICAgcG9wdXBEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2QtZmxleCcpO1xyXG4gICAgcG9wdXBEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcclxuICAgIHBvcHVwRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdmbGV4LXdyYXAnKTtcclxuXHJcbiAgICBwb3B1cERpdi5jbGFzc0xpc3QuYWRkKCdwb3B1cCcpO1xyXG4gICAgY29tbWVudHMuY2xhc3NMaXN0LmFkZCgnY29sLTQnLCAnZC1mbGV4JywgJ2ZsZXgtZC1jb2x1bW4nLCAnZm9ybS1jb21tZW50cycpO1xyXG4gICAgY29tbWVudEZvcm0uY2xhc3NMaXN0LmFkZCgnZC1mbGV4JywgJ2ZsZXgtZC1jb2x1bW4nKTtcclxuICAgIGNvbW1lbnRCdG4uY2xhc3NOYW1lID0gJ2NvbW1lbnQtYnRuJztcclxuXHJcbiAgICBjb21tZW50c1RpdGxlLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzJztcclxuICAgIGFkZENvbW1lbnRzVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIENvbW1lbnQnO1xyXG4gICAgY29tbWVudEJ0bi50ZXh0Q29udGVudCA9ICdDb21tZW50JztcclxuXHJcbiAgICBjb21tZW50c1RpdGxlLmlkID0gJ2NvbW1lbnRzLXRpdGxlJztcclxuICAgIGNvbW1lbnRzU2VjdGlvbi5pZCA9ICdjb21tZW50cy1zZWN0aW9uJztcclxuICAgIGNvbW1lbnRGb3JtLmlkID0gJ2NvbW1lbnQtZm9ybSc7XHJcbiAgICBjb21tZW50TmFtZS5pZCA9ICdjb21tZW50LW5hbWUnO1xyXG4gICAgY29tbWVudE1zZy5pZCA9ICdjb21tZW50LW1lc3NhZ2UnO1xyXG4gICAgY29tbWVudEJ0bi5pZCA9IGl0ZW1JZDtcclxuXHJcbiAgICBjb21tZW50TmFtZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3RydWUnKTtcclxuICAgIGNvbW1lbnRNc2cuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJyk7XHJcblxyXG4gICAgY29tbWVudE5hbWUucGxhY2Vob2xkZXIgPSAnWW91ciBOYW1lJztcclxuICAgIGNvbW1lbnRNc2cucGxhY2Vob2xkZXIgPSAnWW91ciBDb21tZW50JztcclxuICAgIHBvcHVwTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICAgIHBvcHVwRGV0MS50ZXh0Q29udGVudCA9IGBHZW5yZTogJHtpdGVtLmdlbnJlc1swXX1gO1xyXG4gICAgcG9wdXBEZXQyLnRleHRDb250ZW50ID0gYFJhdGluZzogJHtpdGVtLnJhdGluZy5hdmVyYWdlfWA7XHJcbiAgICBwb3B1cERldDMudGV4dENvbnRlbnQgPSBgTGFuZ3VhZ2U6ICR7aXRlbS5sYW5ndWFnZX1gO1xyXG4gICAgcG9wdXBEZXQ0LnRleHRDb250ZW50ID0gYFJ1bnRpbWU6ICR7aXRlbS5ydW50aW1lfSBtaW5gO1xyXG5cclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJsYXknKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChwb3B1cERpdik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwRGl2KTtcclxuXHJcbiAgICBwb3B1cERpdi5hcHBlbmRDaGlsZChjbG9zZSk7XHJcblxyXG4gICAgcG9wdXBEaXYuYXBwZW5kQ2hpbGQocG9wdXBJbWdEaXYpO1xyXG5cclxuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKGJvZHlQb3B1cCk7XHJcblxyXG4gICAgcG9wdXBJbWdEaXYuYXBwZW5kQ2hpbGQocG9wdXBJbWcpO1xyXG4gICAgcG9wdXBJbWdEaXYuYXBwZW5kQ2hpbGQocG9wdXBOYW1lKTtcclxuICAgIHBvcHVwSW1nRGl2LmFwcGVuZENoaWxkKHBvcHVwRGV0YWlscyk7XHJcbiAgICBwb3B1cERldGFpbHMuYXBwZW5kQ2hpbGQocG9wdXBEZXQxKTtcclxuICAgIHBvcHVwRGV0YWlscy5hcHBlbmRDaGlsZChwb3B1cERldDIpO1xyXG4gICAgcG9wdXBEZXRhaWxzLmFwcGVuZENoaWxkKHBvcHVwRGV0Myk7XHJcbiAgICBwb3B1cERldGFpbHMuYXBwZW5kQ2hpbGQocG9wdXBEZXQ0KTtcclxuICAgIGJvZHlQb3B1cC5hcHBlbmRDaGlsZChjb21tZW50c1RpdGxlKTtcclxuICAgIGJvZHlQb3B1cC5hcHBlbmRDaGlsZChjb21tZW50c1NlY3Rpb24pO1xyXG5cclxuICAgIHBvcHVwRGl2LmFwcGVuZENoaWxkKGNvbW1lbnRzKTtcclxuICAgIGNvbW1lbnRzLmFwcGVuZENoaWxkKGFkZENvbW1lbnRzVGl0bGUpO1xyXG4gICAgY29tbWVudHMuYXBwZW5kQ2hpbGQoY29tbWVudEZvcm0pO1xyXG4gICAgY29tbWVudEZvcm0uYXBwZW5kQ2hpbGQoY29tbWVudE5hbWUpO1xyXG4gICAgY29tbWVudEZvcm0uYXBwZW5kQ2hpbGQoY29tbWVudE1zZyk7XHJcbiAgICBjb21tZW50Rm9ybS5hcHBlbmRDaGlsZChjb21tZW50QnRuKTtcclxuXHJcbiAgICBkaXNwbGF5Q29tbWVudHMoaXRlbUlkKTtcclxuICB9XHJcbiAgcmV0dXJuIHBvcHVwRGl2O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVNob3c7XHJcbiIsImltcG9ydCBBUEkgZnJvbSAnLi9hcGkuanMnO1xuaW1wb3J0IHsgaW52byB9IGZyb20gJy4vZW52LmpzJztcblxuY2xhc3MgTElLRVMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpa2VzQVBJID0gbmV3IEFQSShpbnZvKTtcbiAgfVxuXG4gIGFzeW5jIGFkZExpa2VzKGlkKSB7XG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgIGl0ZW1faWQ6IGAke2lkfWAsXG4gICAgfTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmxpa2VzQVBJLnBvc3REYXRhKCdsaWtlcycsIGJvZHkpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBhc3luYyBnZXRsaWtlcygpIHtcbiAgICBjb25zdCBsaWtlcyA9IGF3YWl0IHRoaXMubGlrZXNBUEkuZ2V0RGF0YSgnbGlrZXMnKTtcbiAgICBjb25zdCBsaWtlc0FycmF5ID0gQXJyYXkuaXNBcnJheShsaWtlcykgPyBsaWtlcyA6IFtdO1xuICAgIHJldHVybiBsaWtlc0FycmF5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExJS0VTO1xuIiwiaW1wb3J0IEFkZENvbW1lbnQgZnJvbSAnLi9BZGRDb21tZW50VG9Nb3ZpZS5qcyc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi9hcGkuanMnO1xyXG5pbXBvcnQgZGlzcGxheUxpa2VzIGZyb20gJy4vZGlzcGxheUxpa2UuanMnO1xyXG5pbXBvcnQgeyBtb3ZpZUFwaSB9IGZyb20gJy4vZW52LmpzJztcclxuaW1wb3J0IGxhenlMb2FkSW1hZ2VzIGZyb20gJy4vbGF6eUxvYWRJbWFnZS5qcyc7XHJcbmltcG9ydCByZXNlcnZhdGlvbiBmcm9tICcuL3Jlc2VydmF0aW9uLmpzJztcclxuaW1wb3J0IExJS0VTIGZyb20gJy4vTGlrZXMuanMnO1xyXG5pbXBvcnQgVG90YWxJdGVtcyBmcm9tICcuL3RvdGFsSXRlbXMuanMnO1xyXG5pbXBvcnQgZGlzcGxheVNob3cgZnJvbSAnLi9EaXNwbGF5UG9wdXAuanMnO1xyXG5cclxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChvYmopID0+IHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQob2JqLnRhZyk7XHJcbiAgaWYgKG9iai5jbGFzc05hbWUpIGVsLmNsYXNzTmFtZSA9IG9iai5jbGFzc05hbWU7XHJcbiAgaWYgKG9iai50YWcgPT09ICdpbWcnKSB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdsYXp5Jyk7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJywgb2JqLnNyYyk7XHJcbiAgICBlbC5hbHQgPSAnTGF6eS1sb2FkZWQgaW1hZ2UnO1xyXG4gIH1cclxuICByZXR1cm4gZWw7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVUZXh0Tm9kZSA9ICh0YWcsIHRleHQpID0+IHtcclxuICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xyXG4gIHRhZy5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XHJcbiAgcmV0dXJuIHRhZztcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZU1vdmllcyA9IChtb3ZpZURldGFpbHMsIGxpa2VzQXJyYXkpID0+IHtcclxuICBjb25zdCBtb3ZpZSA9IGNyZWF0ZUVsZW1lbnQoeyB0YWc6ICdkaXYnLCBjbGFzc05hbWU6ICdtb3ZpZScgfSk7XHJcbiAgbW92aWUuc2V0QXR0cmlidXRlKCdpZC1tb3ZpZScsIG1vdmllRGV0YWlscy5pZCk7XHJcbiAgLy8gQ3JlYXRlIERpdiB3aXRoIGNsYXNzIGltYWdlLWNvbnRhaW5lclxyXG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdkaXYnLFxyXG4gICAgY2xhc3NOYW1lOiAnaW1hZ2UtY29udGFpbmVyJyxcclxuICB9KTtcclxuICBjb25zdCBpbWcgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2ltZycsXHJcbiAgICBjbGFzc05hbWU6ICdpbWFnZScsXHJcbiAgICBzcmM6IG1vdmllRGV0YWlscy5pbWFnZS5tZWRpdW0sXHJcbiAgfSk7XHJcbiAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICBtb3ZpZS5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XHJcblxyXG4gIC8vIGNyZWF0ZSBEaXYgd2l0aCBNb3ZpZSBCb2R5XHJcbiAgY29uc3QgbW92aWVCb2R5ID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdkaXYnLFxyXG4gICAgY2xhc3NOYW1lOiAnZC1mbGV4IGZsZXgtZC1jb2x1bW4gbW92aWVzLWJvZHknLFxyXG4gIH0pO1xyXG4gIC8vIGNyZWF0ZSBkaXYgd2l0aCBNb3ZpZS10aXRsZVxyXG4gIGNvbnN0IG1vdmllVGl0bGUgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2RpdicsXHJcbiAgICBjbGFzc05hbWU6XHJcbiAgICAgICdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1zcGFjZS1iZXR3ZWVuIG1vdmllcy10aXRsZScsXHJcbiAgfSk7XHJcbiAgY29uc3QgaDIgPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnaDInIH0pO1xyXG4gIGNyZWF0ZVRleHROb2RlKGgyLCBtb3ZpZURldGFpbHMubmFtZSk7XHJcbiAgY29uc3QgaWNvbmJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnYScsXHJcbiAgICBjbGFzc05hbWU6ICdidG4gYnRuLWxpa2UnLFxyXG4gIH0pO1xyXG4gIGljb25idXR0b24uc2V0QXR0cmlidXRlKCdpZC1tb3ZpZScsIG1vdmllRGV0YWlscy5pZCk7XHJcblxyXG4gIGNvbnN0IGljb25IZWFydCA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnaScsXHJcbiAgICBjbGFzc05hbWU6ICdmYS1yZWd1bGFyIGZhLWhlYXJ0JyxcclxuICB9KTtcclxuICBtb3ZpZVRpdGxlLmFwcGVuZENoaWxkKGgyKTtcclxuICBpY29uYnV0dG9uLmFwcGVuZENoaWxkKGljb25IZWFydCk7XHJcbiAgbW92aWVUaXRsZS5hcHBlbmRDaGlsZChpY29uYnV0dG9uKTtcclxuICBtb3ZpZUJvZHkuYXBwZW5kQ2hpbGQobW92aWVUaXRsZSk7XHJcblxyXG4gIC8vIGNyZWF0ZSBkaXYgd2l0aCBjbGFzcyBsaWtlc1xyXG4gIGNvbnN0IGxpa2VzID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdkaXYnLFxyXG4gICAgY2xhc3NOYW1lOiAnZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbGlrZXMnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHNwYW5MaWtlcyA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnc3BhbicsXHJcbiAgfSk7XHJcbiAgY29uc3QgbGlrZVRleHQgPSBkaXNwbGF5TGlrZXMobGlrZXNBcnJheSwgbW92aWVEZXRhaWxzLmlkKTtcclxuICBjb25zdCBsaWtlQ291bnQgPSBsaWtlVGV4dC5sZW5ndGggIT09IDAgPyBsaWtlVGV4dCA6IDA7XHJcbiAgY3JlYXRlVGV4dE5vZGUoc3Bhbkxpa2VzLCBgJHtsaWtlQ291bnR9IGxpa2VzYCk7XHJcbiAgbGlrZXMuYXBwZW5kQ2hpbGQoc3Bhbkxpa2VzKTtcclxuICBtb3ZpZUJvZHkuYXBwZW5kQ2hpbGQobGlrZXMpO1xyXG4gIC8vIGNyZWF0ZSBkaXYgd2l0aCBjbGFzcyBHcm91cCBidXR0b25zXHJcbiAgY29uc3QgZ3JvdXBCdG5zID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdkaXYnLFxyXG4gICAgY2xhc3NOYW1lOiAnZC1mbGV4IGp1c3RpZnktY29udGVudC1zcGFjZS1iZXR3ZWVuIGdyb3VwLWJ0bnMnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNvbW1lbnREaXYgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgIHRhZzogJ2RpdicsXHJcbiAgICBjbGFzc05hbWU6ICdjb21tZW50JyxcclxuICB9KTtcclxuICBjb25zdCBjb21tZW50QnV0dG9uID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICB0YWc6ICdidXR0b24nLFxyXG4gICAgY2xhc3NOYW1lOiAnYnRuIGJ0bi1jb21tZW50JyxcclxuICB9KTtcclxuICBjcmVhdGVUZXh0Tm9kZShjb21tZW50QnV0dG9uLCAnY29tbWVudCcpO1xyXG4gIGNvbW1lbnREaXYuYXBwZW5kQ2hpbGQoY29tbWVudEJ1dHRvbik7XHJcbiAgZ3JvdXBCdG5zLmFwcGVuZENoaWxkKGNvbW1lbnREaXYpO1xyXG5cclxuICBjb25zdCByZXNlcnZhdGlvbkRpdiA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnZGl2JyxcclxuICAgIGNsYXNzTmFtZTogJ3Jlc2VydmF0aW9uJyxcclxuICB9KTtcclxuICBjb25zdCByZXNlcnZhdGlvbkJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgdGFnOiAnYnV0dG9uJyxcclxuICAgIGNsYXNzTmFtZTogJ2J0biBidG4tcmVzZXJ2YXRpb24nLFxyXG4gIH0pO1xyXG4gIGNyZWF0ZVRleHROb2RlKHJlc2VydmF0aW9uQnV0dG9uLCAncmVzZXJ2YXRpb24nKTtcclxuICByZXNlcnZhdGlvbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbW92aWVEZXRhaWxzLmlkKTtcclxuXHJcbiAgcmVzZXJ2YXRpb25EaXYuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25CdXR0b24pO1xyXG4gIGdyb3VwQnRucy5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkRpdik7XHJcblxyXG4gIG1vdmllQm9keS5hcHBlbmRDaGlsZChncm91cEJ0bnMpO1xyXG4gIG1vdmllLmFwcGVuZENoaWxkKG1vdmllQm9keSk7XHJcblxyXG4gIHJldHVybiBtb3ZpZTtcclxufTtcclxuXHJcbmNvbnN0IENvbW1lbnRQb3B1cCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBldmVudC50YXJnZXQ7XHJcbiAgY29uc3QgbW92aWUgPSBjb21tZW50QnV0dG9uLmNsb3Nlc3QoJy5tb3ZpZScpO1xyXG4gIGNvbnN0IG1vdmllSWQgPSBtb3ZpZS5nZXRBdHRyaWJ1dGUoJ2lkLW1vdmllJyk7XHJcbiAgLy8gUGVyZm9ybSB0aGUgZGVzaXJlZCBhY3Rpb24gd2hlbiB0aGUgY29tbWVudCBidXR0b24gaXMgY2xpY2tlZFxyXG4gIGF3YWl0IGRpc3BsYXlTaG93KHBhcnNlSW50KG1vdmllSWQsIDEwKSk7XHJcbiAgQWRkQ29tbWVudCgpO1xyXG59O1xyXG5cclxuY29uc3QgZGlwbGF5Q291bnRJdGVtID0gKG1vdmllc0xpc3QsIGxpa2VzQXJyYXkpID0+IHtcclxuICBjb25zdCBjb3VudEl0ZW0gPSBUb3RhbEl0ZW1zKGxpa2VzQXJyYXkpO1xyXG4gIGNvbnN0IGNvdW50ZXJEaXYgPSBjcmVhdGVFbGVtZW50KHsgdGFnOiAnZGl2JywgY2xhc3NOYW1lOiAnY291bnRlcicgfSk7XHJcbiAgY3JlYXRlVGV4dE5vZGUoY291bnRlckRpdiwgYCR7Y291bnRJdGVtfSBtb3ZpZWApO1xyXG5cclxuICBtb3ZpZXNMaXN0Lmluc2VydEJlZm9yZShjb3VudGVyRGl2LCBtb3ZpZXNMaXN0LmZpcnN0Q2hpbGQpO1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheU1vdmllcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBtb3ZpZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllcy1pdGVtJyk7XHJcblxyXG4gIGlmIChtb3ZpZXNMaXN0KSB7XHJcbiAgICBjb25zdCBzcGlubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllcy1jb250aWVudCAuc3Bpbm5lcicpO1xyXG5cclxuICAgIHNwaW5uZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBjb25zdCBhcGkgPSBuZXcgQVBJKG1vdmllQXBpKTtcclxuICAgIGNvbnN0IG1vdmllcyA9IGF3YWl0IGFwaS5nZXREYXRhKCdzaG93cycpO1xyXG4gICAgbW92aWVzTGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgY29uc3QgTGlrZXMgPSBuZXcgTElLRVMoKTtcclxuICAgIGNvbnN0IGxpa2VzQXJyYXkgPSBhd2FpdCBMaWtlcy5nZXRsaWtlcygpO1xyXG4gICAgZGlwbGF5Q291bnRJdGVtKG1vdmllc0xpc3QucGFyZW50Tm9kZSwgbW92aWVzKTtcclxuICAgIG1vdmllcy5mb3JFYWNoKGFzeW5jIChtb3ZpZSkgPT4ge1xyXG4gICAgICByZXNlcnZhdGlvbi5yZXNlcnZhdGlvbkJ1dHRvbkV2ZW50TGlzdG5lcigpO1xyXG4gICAgICBjb25zdCBtb3ZpZUVsZW1lbnQgPSBjcmVhdGVNb3ZpZXMobW92aWUsIGxpa2VzQXJyYXkpO1xyXG4gICAgICBjb25zdCBjb21tZW50QnV0dG9uID0gbW92aWVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY29tbWVudCcpO1xyXG4gICAgICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ29tbWVudFBvcHVwKTtcclxuICAgICAgbW92aWVzTGlzdC5hcHBlbmRDaGlsZChtb3ZpZUVsZW1lbnQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGF6eUxvYWRJbWFnZXMoKTtcclxuICAgIHNwaW5uZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIG1vdmllc0xpc3Quc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5TW92aWVzO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmNsYXNzIEFQSSB7XG4gIGNvbnN0cnVjdG9yKGxpbmspIHtcbiAgICB0aGlzLnVybCA9IGxpbms7XG4gIH1cblxuICBmZXRjaERhdGEgPSBhc3luYyAodXJsLCBtZXRob2QsIGJvZHkpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0ge307XG4gICAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICAgIG9wdGlvbnMubWV0aG9kID0gJ0dFVCc7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgb3B0aW9ucy5tZXRob2QgPSAnUE9TVCc7XG4gICAgICBvcHRpb25zLmhlYWRlcnMgPSB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9O1xuICAgICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH07XG5cbiAgcG9zdERhdGEgPSBhc3luYyAoZW5kUG9pbnQsIGJvZHkpID0+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnVybCArIGVuZFBvaW50O1xuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHRoaXMuZmV0Y2hEYXRhKHVybCwgJ1BPU1QnLCBib2R5KTtcbiAgICByZXR1cm4gcmVzcG9uc2VKc29uO1xuICB9O1xuXG4gIGdldERhdGEgPSBhc3luYyAoZW5kUG9pbnQpID0+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLnVybCArIGVuZFBvaW50O1xuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHRoaXMuZmV0Y2hEYXRhKHVybCwgJ0dFVCcpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZUpzb24uanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBBUEkgZnJvbSAnLi9hcGkuanMnO1xuaW1wb3J0IHsgaW52byB9IGZyb20gJy4vZW52LmpzJztcblxuY2xhc3MgQ29tbWVudHMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbW1lbnRzQVBJID0gbmV3IEFQSShpbnZvKTtcbiAgfVxuXG4gIGFzeW5jIGFkZGNvbW1lbnRzKGJvZHkpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmNvbW1lbnRzQVBJLnBvc3REYXRhKCdjb21tZW50cycsIGJvZHkpO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBhc3luYyBnZXRDb21tZW50cyhpdGVtSWQpIHtcbiAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHRoaXMuY29tbWVudHNBUEkuZ2V0RGF0YShgY29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gKTtcbiAgICBjb25zdCBjb21tZW50c0FycmF5ID0gQXJyYXkuaXNBcnJheShjb21tZW50cykgPyBjb21tZW50cyA6IFtdO1xuICAgIHJldHVybiBjb21tZW50c0FycmF5O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb21tZW50czsiLCJpbXBvcnQgQVBJIGZyb20gJy4vYXBpJztcclxuaW1wb3J0IHsgaW52byB9IGZyb20gJy4vZW52JztcclxuaW1wb3J0IHJlc2VydmF0aW9uQ291bnRlciBmcm9tICcuL3Jlc2VydmF0aW9uQ291bnRlcic7XHJcblxyXG5jbGFzcyBDb21wb25lbnRzIHtcclxuICByZXNlcnZhdGlvblBvcFVwID0gKG1vdmllKSA9PiB7XHJcbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGllbnQnKTtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllcy1jb250aWVudCcpO1xyXG4gICAgY29uc3QgcG9wVXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBvcFVwRGl2LmNsYXNzTmFtZSA9ICdyZXNlcnZhdGlvbi1kaXYnO1xyXG4gICAgcG9wVXBEaXYuc2V0QXR0cmlidXRlKCdtb3ZpZUlkJywgbW92aWUuaWQpO1xyXG5cclxuICAgIGNvbnN0IHBvcFVwSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcG9wVXBIZWFkLmNsYXNzTmFtZSA9ICdwb3AtdXAtaGVhZCc7XHJcblxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuY2xhc3NOYW1lID0gJ2Nsb3NlLW1vZGVsJztcclxuXHJcbiAgICBjb25zdCBoZWFkU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYScpO1xyXG5cclxuICAgIGNvbnN0IHJlc2VydmF0aW9uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHJlc2VydmF0aW9uSW1hZ2UuY2xhc3NOYW1lID0gJ21vdmllLUltYWdlJztcclxuICAgIHJlc2VydmF0aW9uSW1hZ2Uuc3JjID0gbW92aWUuaW1hZ2Uub3JpZ2luYWw7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBtb3ZpZS5uYW1lO1xyXG5cclxuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzdW1tYXJ5LmNsYXNzTmFtZSA9ICdzdW1tYXJ5JztcclxuICAgIHN1bW1hcnkuaW5uZXJIVE1MID0gbW92aWUuc3VtbWFyeTtcclxuXHJcbiAgICBjb25zdCBtb3ZpZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vdmllSW5mby5jbGFzc05hbWUgPSAnbW92aWUtaW5mbyc7XHJcblxyXG4gICAgY29uc3QgbW92aWVJbmZvTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW92aWVJbmZvTGVmdC5jbGFzc05hbWUgPSAnbW92aWUtaW5mby1yaWdodCc7XHJcblxyXG4gICAgY29uc3QgbGFuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGxhbmcudGV4dENvbnRlbnQgPSBgTGFuZ3VhZ2U6ICR7bW92aWUubGFuZ3VhZ2V9YDtcclxuXHJcbiAgICBjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY291bnRyeS50ZXh0Q29udGVudCA9IGBDb3VudHJ5OiAke21vdmllLm5ldHdvcmsuY291bnRyeS5uYW1lfWA7XHJcblxyXG4gICAgY29uc3QgZHVyYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkdXJhdGlvbi50ZXh0Q29udGVudCA9IGBEdXJhdGlvbjogJHttb3ZpZS5ydW50aW1lfWA7XHJcblxyXG4gICAgY29uc3QgbmV0d29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG5ldHdvcmsudGV4dENvbnRlbnQgPSBgTmV0d29yazogJHttb3ZpZS5uZXR3b3JrLm5hbWV9YDtcclxuXHJcbiAgICBjb25zdCBtb3ZpZUluZm9SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW92aWVJbmZvUmlnaHQuY2xhc3NOYW1lID0gJ21vdmllLWluZm8tbGVmdCc7XHJcblxyXG4gICAgbW92aWVJbmZvTGVmdC5hcHBlbmRDaGlsZChsYW5nKTtcclxuICAgIG1vdmllSW5mb0xlZnQuYXBwZW5kQ2hpbGQoY291bnRyeSk7XHJcblxyXG4gICAgbW92aWVJbmZvUmlnaHQuYXBwZW5kQ2hpbGQobmV0d29yayk7XHJcbiAgICBtb3ZpZUluZm9SaWdodC5hcHBlbmRDaGlsZChkdXJhdGlvbik7XHJcblxyXG4gICAgbW92aWVJbmZvLmFwcGVuZENoaWxkKG1vdmllSW5mb0xlZnQpO1xyXG4gICAgbW92aWVJbmZvLmFwcGVuZENoaWxkKG1vdmllSW5mb1JpZ2h0KTtcclxuXHJcbiAgICBwb3BVcEhlYWQuYXBwZW5kQ2hpbGQoaGVhZFNwYW4pO1xyXG4gICAgcG9wVXBIZWFkLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBwb3BVcERpdi5hcHBlbmRDaGlsZChwb3BVcEhlYWQpO1xyXG4gICAgcG9wVXBEaXYuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25JbWFnZSk7XHJcbiAgICBwb3BVcERpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBwb3BVcERpdi5hcHBlbmRDaGlsZChzdW1tYXJ5KTtcclxuICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKG1vdmllSW5mbyk7XHJcbiAgICBwb3BVcERpdi5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVJlc2VydmFyaW9uRnJvbSgpKTtcclxuICAgIGFwcC5hcHBlbmRDaGlsZChwb3BVcERpdik7XHJcbiAgICB0aGlzLnBhaW50UmVzZXJ2YXRpb25zKG1vdmllLmlkKTtcclxuXHJcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb250aWVudC1pbi1iYWNrZ291bmQnKTtcclxuICAgIHJldHVybiBhcHA7XHJcbiAgfTtcclxuXHJcbiAgY3JlYXRlUmVzZXJ2YXJpb25Gcm9tID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzZXJ2YXRpb25Gb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZXNlcnZhdGlvbkZvcm1EaXYuY2xhc3NOYW1lID0gJ3Jlc2VydmF0aW9uLWZvcm0tZGl2JztcclxuXHJcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBhIHJlc2VydmF0aW9uJztcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5jbGFzc05hbWUgPSAncmVzZXJ2YXRpb24tZm9ybSc7XHJcblxyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5hbWVJbnB1dC5jbGFzc05hbWUgPSAnbmFtZS1pbnB1dCc7XHJcbiAgICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnWW91ciBuYW1lJztcclxuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcclxuXHJcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZGF0ZUlucHV0LmNsYXNzTmFtZSA9ICdkYXRlLWlucHV0IHN0YXJ0LWRhdGUnO1xyXG4gICAgZGF0ZUlucHV0LnBsYWNlaG9sZGVyID0gJ1N0YXJ0IERhdGUnO1xyXG4gICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGRhdGVJbnB1dEVuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkYXRlSW5wdXRFbmQuY2xhc3NOYW1lID0gJ2RhdGUtaW5wdXQgZW5kLWRhdGUnO1xyXG4gICAgZGF0ZUlucHV0RW5kLnBsYWNlaG9sZGVyID0gJ0VuZCBEYXRlJztcclxuICAgIGRhdGVJbnB1dEVuZC50eXBlID0gJ2RhdGUnO1xyXG4gICAgZGF0ZUlucHV0RW5kLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc05hbWUgPSAnc3VibWl0LWlucHV0JztcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZXNlcnZlJztcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dEVuZCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcbiAgICByZXNlcnZhdGlvbkZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcclxuICAgIHJlc2VydmF0aW9uRm9ybURpdi5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIHJldHVybiByZXNlcnZhdGlvbkZvcm1EaXY7XHJcbiAgfTtcclxuXHJcbiAgY2xvc2VSZXNlcnZhdGlvblBvcFVwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVzLWNvbnRpZW50Jyk7XHJcbiAgICBjb25zdCBwb3BVcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbi1kaXYnKTtcclxuXHJcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb250aWVudC1pbi1iYWNrZ291bmQnKTtcclxuICAgIHBvcFVwRGl2LnJlbW92ZSgpO1xyXG4gIH07XHJcblxyXG4gIHJlc2VydmF0aW9ucyA9IChyZXNlcnZhdGlvbkFycmF5ID0gbnVsbCkgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NOYW1lID0gJ3Jlc2VydmF0aW9ucy1kaXYnO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ3Jlc2VydmF0aW9uLXRpdGxlJztcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IGBSZXNlcnZhdGlvbnMgKCR7cmVzZXJ2YXRpb25Db3VudGVyLmdldFJlc2VydmF0aW9uQ291bnQocmVzZXJ2YXRpb25BcnJheSl9KWA7XHJcblxyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIGlmIChyZXNlcnZhdGlvbkFycmF5LmVycm9yKSB7XHJcbiAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbnMtZGl2JykpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9ucy1kaXYnKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICByZXNlcnZhdGlvbkFycmF5LnJldmVyc2UoKS5mb3JFYWNoKChyZXNlcnZhdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpLmNsYXNzTmFtZSA9ICdyZXNlcnZhdGlvbi1pdGVtJztcclxuXHJcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHJlc2VydmF0aW9uLmRhdGVfc3RhcnQpO1xyXG4gICAgICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUocmVzZXJ2YXRpb24uZGF0ZV9lbmQpO1xyXG5cclxuICAgICAgbGkudGV4dENvbnRlbnQgPSBgJHtzdGFydERhdGUuZ2V0TW9udGgoKSArIDF9LyR7c3RhcnREYXRlLmdldERhdGUoKX0vJHtzdGFydERhdGUuZ2V0RnVsbFllYXIoKX0gXHJcbiAgICAgICAgLSAke2VuZERhdGUuZ2V0TW9udGgoKSArIDF9LyR7ZW5kRGF0ZS5nZXREYXRlKCl9LyR7ZW5kRGF0ZS5nZXRGdWxsWWVhcigpfSBieSAke3Jlc2VydmF0aW9uLnVzZXJuYW1lfWA7XHJcbiAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH0pO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgICByZXR1cm4gZGl2O1xyXG4gIH07XHJcblxyXG4gIHBhaW50UmVzZXJ2YXRpb25zID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCBwb3BVcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbi1kaXYnKTtcclxuICAgIGNvbnN0IGFwaSA9IG5ldyBBUEkoYCR7aW52b31yZXNlcnZhdGlvbnNgKTtcclxuXHJcbiAgICBhcGkuZ2V0RGF0YShgP2l0ZW1faWQ9JHtpZH1gKVxyXG4gICAgICAudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICAgIHBvcFVwRGl2LmFwcGVuZENoaWxkKHRoaXMucmVzZXJ2YXRpb25zKHJlc3VsdHMpKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29tcG9uZW50cygpO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbmltcG9ydCBDb21tZW50cyBmcm9tICcuL2NvbW1lbnRzLmpzJztcbmltcG9ydCB0b3RhbENvbW1lbnRzIGZyb20gJy4vdG90YWxDb21tZW50cy5qcyc7XG5cbmNvbnN0IGRpc3BsYXlDb21tZW50cyA9IChpdGVtSWQpID0+IHtcbiAgY29uc3QgY29tbWVudHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbW1lbnRzLXNlY3Rpb24nKTtcbiAgY29tbWVudHNTZWN0aW9uLnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnN0IGNvbW1lbnRzVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29tbWVudHMtdGl0bGUnKTtcbiAgaWYgKGNvbW1lbnRzU2VjdGlvbikge1xuICAgIGNvbnN0IENvbW1lbnRBUEkgPSBuZXcgQ29tbWVudHMoKTtcblxuICAgIENvbW1lbnRBUEkuZ2V0Q29tbWVudHMoaXRlbUlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBjb21tZW50c051bWJlciA9IHRvdGFsQ29tbWVudHMoZGF0YSk7XG4gICAgICBjb21tZW50c1RpdGxlLnRleHRDb250ZW50ID0gYENvbW1lbnRzOiAke2NvbW1lbnRzTnVtYmVyfWA7XG4gICAgICBkYXRhLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgY29uc3QgY29tbWVudExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29tbWVudExpLnRleHRDb250ZW50ID0gYCR7ZC5jcmVhdGlvbl9kYXRlfSAke2QudXNlcm5hbWV9OiAke2QuY29tbWVudH1gO1xuICAgICAgICBjb21tZW50c1NlY3Rpb24uYXBwZW5kQ2hpbGQoY29tbWVudExpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29tbWVudHM7IiwiY29uc3QgZGlzcGxheUxpa2VzID0gKGxpa2VzQXJyYXksIHRhcmdldElkKSA9PiB7XG4gIGNvbnN0IGxpa2UgPSBsaWtlc0FycmF5XG4gICAgLmZpbHRlcigoaXRlbSkgPT4gTnVtYmVyKGl0ZW0uaXRlbV9pZCkgPT09IE51bWJlcih0YXJnZXRJZCkpXG4gICAgLm1hcCgoaXRlbSkgPT4gaXRlbS5saWtlcyk7XG4gIHJldHVybiBsaWtlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUxpa2VzO1xuIiwiY29uc3QgbW92aWVBcGkgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS8nO1xuY29uc3QgaW52byA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9FbFZFYUlLWnJSR1hmMDlHRThjVC8nO1xuZXhwb3J0IHsgbW92aWVBcGksIGludm8gfTtcbiIsImNvbnN0IGxhenlMb2FkSW1hZ2VzID0gKCkgPT4ge1xuICBjb25zdCBsYXp5SW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhenknKTtcblxuICBjb25zdCBpbWFnZU9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIGNvbnN0IGltZyA9IGVudHJ5LnRhcmdldDtcbiAgICAgICAgY29uc3Qgc3JjID0gaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcbiAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgaW1hZ2VPYnNlcnZlci51bm9ic2VydmUoaW1nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgbGF6eUltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgIGltYWdlT2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbGF6eUxvYWRJbWFnZXM7XG4iLCJpbXBvcnQgY29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnO1xyXG5pbXBvcnQgQVBJIGZyb20gJy4vYXBpJztcclxuaW1wb3J0IHsgaW52byB9IGZyb20gJy4vZW52JztcclxuXHJcbmNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8nO1xyXG5cclxuY2xhc3MgUmVzZXJ2YXRpb24ge1xyXG4gIGxvYWRSZXNlcnZhdGlvbiA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgYXBpID0gbmV3IEFQSShBUElfVVJMKTtcclxuICAgIGNvbnN0IG1vdmllID0gYXdhaXQgYXBpLmdldERhdGEoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIGNvbXBvbmVudHMucmVzZXJ2YXRpb25Qb3BVcChtb3ZpZSk7XHJcbiAgICB0aGlzLmNsb3NlTW9kZWxFdmVudExpc3RuZXIoKTtcclxuICAgIHRoaXMucmVzZXJ2YXRpb25Gb3JtRXZlbnRMaXN0bmVyKCk7XHJcbiAgfTtcclxuXHJcbiAgdW5sb2FkUmVzZXJ2YXRpb24gPSAoKSA9PiB7XHJcbiAgICBjb21wb25lbnRzLmNsb3NlUmVzZXJ2YXRpb25Qb3BVcCgpO1xyXG4gIH07XHJcblxyXG4gIGNyZWF0ZVJlc2VydmF0aW9uID0gKCkgPT4ge1xyXG4gIH07XHJcblxyXG4gIHJlc2VydmF0aW9uQnV0dG9uRXZlbnRMaXN0bmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzZXJ2YXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1yZXNlcnZhdGlvbicpO1xyXG5cclxuICAgIHJlc2VydmF0aW9ucy5mb3JFYWNoKChyZXNlcnZhdGlvbkJ1dHRvbikgPT4ge1xyXG4gICAgICByZXNlcnZhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubG9hZFJlc2VydmF0aW9uKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNsb3NlTW9kZWxFdmVudExpc3RuZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RlbCcpO1xyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVubG9hZFJlc2VydmF0aW9uKTtcclxuICB9O1xyXG5cclxuICByZXNlcnZhdGlvbkZvcm1FdmVudExpc3RuZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtb3ZpZUlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uLWRpdicpO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbi1mb3JtJyk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0WzBdLnZhbHVlO1xyXG4gICAgICBjb25zdCBzdGFydERhdGUgPSBldmVudC50YXJnZXRbMV0udmFsdWU7XHJcbiAgICAgIGNvbnN0IGVuZHREYXRlID0gZXZlbnQudGFyZ2V0WzJdLnZhbHVlO1xyXG4gICAgICB0aGlzLnNhdmVSZXNlcnZhdGlvbihtb3ZpZUlkLmdldEF0dHJpYnV0ZSgnbW92aWVpZCcpLCBuYW1lLCBzdGFydERhdGUsIGVuZHREYXRlKTtcclxuICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc2F2ZVJlc2VydmF0aW9uID0gKGlkLCBuYW1lLCBzdGFydERhdGUsIGVuZHREYXRlKSA9PiB7XHJcbiAgICBjb25zdCBhcGkgPSBuZXcgQVBJKGAke2ludm99cmVzZXJ2YXRpb25zYCk7XHJcbiAgICBjb25zdCBib2R5ID0ge1xyXG4gICAgICBpdGVtX2lkOiBpZCxcclxuICAgICAgdXNlcm5hbWU6IG5hbWUsXHJcbiAgICAgIGRhdGVfc3RhcnQ6IHN0YXJ0RGF0ZSxcclxuICAgICAgZGF0ZV9lbmQ6IGVuZHREYXRlLFxyXG4gICAgfTtcclxuICAgIGFwaS5mZXRjaERhdGEoYCR7aW52b31yZXNlcnZhdGlvbnNgLCAnUE9TVCcsIGJvZHkpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnJlbG9hZFJlc2VydmFyaW9ucyhpZCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVsb2FkUmVzZXJ2YXJpb25zID0gKGlkKSA9PiB7XHJcbiAgICBjb21wb25lbnRzLnBhaW50UmVzZXJ2YXRpb25zKGlkKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgUmVzZXJ2YXRpb24oKTsiLCJjbGFzcyBSZXNlcnZhdGlvbkNvdW50ZXIge1xyXG4gIGdldFJlc2VydmF0aW9uQ291bnQgPSAocmVzdWx2YXRpb25zKSA9PiB7XHJcbiAgICBjb25zdCByZXNlcnZhdGlvbnNDb3VudCA9IChBcnJheS5pc0FycmF5KHJlc3VsdmF0aW9ucykgPyByZXN1bHZhdGlvbnMubGVuZ3RoIDogJzAnKTtcclxuICAgIHJldHVybiByZXNlcnZhdGlvbnNDb3VudDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBSZXNlcnZhdGlvbkNvdW50ZXIoKTsiLCJjb25zdCB0b3RhbENvbW1lbnRzID0gKGFycikgPT4gKEFycmF5LmlzQXJyYXkoYXJyKSA/IGFyci5sZW5ndGggOiAnVGhpcyBpcyBub3QgQXJyYXknKTtcblxuZXhwb3J0IGRlZmF1bHQgdG90YWxDb21tZW50cztcbiIsImNvbnN0IFRvdGFsSXRlbXMgPSAoYXJyKSA9PiAoQXJyYXkuaXNBcnJheShhcnIpID8gYXJyLmxlbmd0aCA6ICdUaGlzIGlzIG5vdCBBcnJheScpO1xuXG5leHBvcnQgZGVmYXVsdCBUb3RhbEl0ZW1zO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9