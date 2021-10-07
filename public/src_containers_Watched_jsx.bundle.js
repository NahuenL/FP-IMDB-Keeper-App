(self["webpackChunkfp_imdb_keeper_app"] = self["webpackChunkfp_imdb_keeper_app"] || []).push([["src_containers_Watched_jsx"],{

/***/ "./src/components/Empty.jsx":
/*!**********************************!*\
  !*** ./src/components/Empty.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message */ "./src/components/Message.jsx");
/* harmony import */ var _assets_static_images_empty_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/static/images/empty.png */ "./src/assets/static/images/empty.png");




var Empty = function Empty() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "full-img-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "full-img",
    src: _assets_static_images_empty_png__WEBPACK_IMPORTED_MODULE_2__.default,
    alt: "Empty"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Message__WEBPACK_IMPORTED_MODULE_1__.default, {
    infoText: "You haven't watched any movies."
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Empty);

/***/ }),

/***/ "./src/components/WatchedList.jsx":
/*!****************************************!*\
  !*** ./src/components/WatchedList.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Movie */ "./src/components/Movie.jsx");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Message */ "./src/components/Message.jsx");
/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Empty */ "./src/components/Empty.jsx");








var WatchedList = function WatchedList(props) {
  var watchedMovies = props.watchedMovies;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Message__WEBPACK_IMPORTED_MODULE_4__.default, {
    infoText: "Movies Watched"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__.default, {
    container: true,
    spacing: 3,
    justify: "center"
  }, !watchedMovies.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Empty__WEBPACK_IMPORTED_MODULE_5__.default, null) : watchedMovies.map(function (movie) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Movie__WEBPACK_IMPORTED_MODULE_3__.default, {
      key: movie.data.id,
      data: movie.data
    });
  }))));
};

WatchedList.propTypes = {
  watchedMovies: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};

var mapStateToPros = function mapStateToPros(state) {
  return {
    watchedMovies: state.watchedMovies
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToPros, null)(WatchedList));

/***/ }),

/***/ "./src/containers/Watched.jsx":
/*!************************************!*\
  !*** ./src/containers/Watched.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_WatchedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/WatchedList */ "./src/components/WatchedList.jsx");



var Watched = function Watched() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_WatchedList__WEBPACK_IMPORTED_MODULE_1__.default, null);
};

/* harmony default export */ __webpack_exports__["default"] = (Watched);

/***/ }),

/***/ "./src/assets/static/images/empty.png":
/*!********************************************!*\
  !*** ./src/assets/static/images/empty.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "69369d52c7202baa658190e6fd712f85.png");

/***/ })

}]);
//# sourceMappingURL=src_containers_Watched_jsx.bundle.js.map