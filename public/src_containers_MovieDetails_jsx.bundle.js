(self["webpackChunkfp_imdb_keeper_app"] = self["webpackChunkfp_imdb_keeper_app"] || []).push([["src_containers_MovieDetails_jsx"],{

/***/ "./src/components/MovieDetail.jsx":
/*!****************************************!*\
  !*** ./src/components/MovieDetail.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _custom_hooks_useGetMovies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom-hooks/useGetMovies */ "./src/custom-hooks/useGetMovies.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_icons_BeenhereTwoTone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/BeenhereTwoTone */ "./node_modules/@material-ui/icons/BeenhereTwoTone.js");
/* harmony import */ var _assets_styles_components_MovieDetail_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/styles/components/MovieDetail.scss */ "./src/assets/styles/components/MovieDetail.scss");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var MovieDetail = function MovieDetail(props) {
  var URLid = window.location.pathname.split("/")[3];

  var _useGetMovies = (0,_custom_hooks_useGetMovies__WEBPACK_IMPORTED_MODULE_4__.default)(),
      titleText = _useGetMovies.titleText,
      movies = _useGetMovies.movies,
      getMovieDetail = _useGetMovies.getMovieDetail;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      watched = _useState2[0],
      setWatched = _useState2[1];

  var watchedMovies = props.watchedMovies;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getMovieDetail(URLid);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    wasWatched();
  }, []);

  var handleSetWatched = function handleSetWatched() {
    var data = movies;
    props.setWatched({
      data: data
    });
    setWatched(true);
  };

  var handleDeleteWatched = function handleDeleteWatched(itemId) {
    props.deleteWatched(itemId);
    setWatched(false);
  };

  var wasWatched = function wasWatched() {
    var result = watchedMovies.filter(function (watchedMovie) {
      return watchedMovie.data.id === URLid;
    });

    if (result.length) {
      setWatched(true);
    }
  };

  var id = movies.id,
      title = movies.title,
      originalTitle = movies.originalTitle,
      year = movies.year,
      image = movies.image,
      releaseDate = movies.releaseDate,
      plot = movies.plot,
      directorList = movies.directorList,
      writerList = movies.writerList,
      actorList = movies.actorList;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: "paper front-paper"
  }, movies.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", {
    className: "title"
  }, titleText)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", {
    className: "title"
  }, "".concat(title, " - ").concat(year)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: image,
    alt: originalTitle,
    className: "movie-detail---img-full"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), watched ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_BeenhereTwoTone__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: "movie-detail--grid-icon icon-item watched",
    title: "Watched",
    onClick: function onClick() {
      return handleDeleteWatched(id);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", {
    className: "movie-detail--grid-icon-text"
  }, " Watched")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_BeenhereTwoTone__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: "movie-detail--grid-icon icon-item nonwatched",
    title: "Un Watched",
    onClick: handleSetWatched
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", {
    className: "movie-detail--grid-icon-text"
  }, " ", "Non Watched")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: "movie_title_".concat(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Original Title: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, originalTitle ? originalTitle : title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: "movie_year_".concat(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Year: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, year)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: "movie_releaseDate_".concat(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Release Date: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, releaseDate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Plot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, plot), directorList.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Director List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, directorList.map(function (director) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: director.id
    }, director.name);
  }))), writerList.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Writer List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, writerList.map(function (writer) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: writer.id
    }, writer.name);
  }))), actorList.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Actor List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, {
    container: true,
    spacing: 2
  }, actorList.map(function (actor) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__.default, {
      item: true,
      xs: 12,
      sm: 2,
      key: actor.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: actor.image,
      alt: "actor",
      className: "actor-img"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, actor.name));
  })))));
};

MovieDetail.propTypes = {
  movies: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    watchedMovies: state.watchedMovies
  };
};

var mapDispatchToProps = {
  setWatched: _actions__WEBPACK_IMPORTED_MODULE_3__.setWatched,
  deleteWatched: _actions__WEBPACK_IMPORTED_MODULE_3__.deleteWatched
};
/* harmony default export */ __webpack_exports__["default"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(MovieDetail));

/***/ }),

/***/ "./src/containers/MovieDetails.jsx":
/*!*****************************************!*\
  !*** ./src/containers/MovieDetails.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_MovieDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MovieDetail */ "./src/components/MovieDetail.jsx");



var MovieDetails = function MovieDetails() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MovieDetail__WEBPACK_IMPORTED_MODULE_1__.default, null));
};

/* harmony default export */ __webpack_exports__["default"] = (MovieDetails);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/MovieDetail.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/MovieDetail.scss ***!
  \************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media (max-width: 323px) {\n  h1 {\n    display: none; } }\n\nhtml {\n  overflow-x: hidden; }\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\r \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\r sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nheader {\n  align-items: center;\n  background-color: #7e76c2 !important; }\n\nul {\n  list-style-type: none;\n  padding: 0; }\n\nli {\n  margin-top: 15px; }\n\na {\n  text-decoration: none; }\n\n.bg-color {\n  background-color: #7e76c2; }\n\n.root {\n  margin: 3vw;\n  padding-top: 25px; }\n\n.title {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.54) !important;\n  font-size: 25px; }\n\n.front-paper {\n  text-align: center;\n  color: rgba(0, 0, 0, 0.54) !important;\n  padding: 15px; }\n\n.paper {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 600px; }\n\n.default-paper {\n  padding: 15px; }\n\n.circular-progress {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.circular-progress {\n  margin: 10px; }\n\n.circular-progress-color {\n  color: #7e76c2; }\n\n.full-img-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 15px; }\n\n.full-img {\n  height: 350px; }\n\n.not-found {\n  padding-top: 150px; }\n\n.movie-detail---img-full {\n  width: 380px; }\n\n.movie-detail--grid-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  left: -60px; }\n\n.movie-detail--grid-icon-text {\n  left: -60px; }\n\n.icon-item.watched {\n  fill: #62c241; }\n\n.icon-item.nonwatched {\n  fill: #000000; }\n\n.actor-img {\n  width: 100px; }\n", "",{"version":3,"sources":["webpack://./src/assets/styles/App.scss","webpack://./src/assets/styles/Vars.scss","webpack://./src/assets/styles/components/MovieDetail.scss"],"names":[],"mappings":"AA0BA;EACE;IACE,aAAa,EAAA,EACd;;AAGH;EACE,kBAAkB,EAAA;;AAGpB;EACE,SAAS;EACT,gKAEY;EACZ,mCAAmC;EACnC,kCAAkC,EAAA;;AAGpC;EACE,mBAAmB;EACnB,oCAAuC,EAAA;;AAGzC;EACE,qBAAqB;EACrB,UAAU,EAAA;;AAGZ;EACE,gBAAgB,EAAA;;AAGlB;EACE,qBAAqB,EAAA;;AAGvB;EACE,yBC3DkB,EAAA;;AD8DpB;EACE,WAAW;EACX,iBAAiB,EAAA;;AAGnB;EACE,kBAAkB;EAClB,qCAAqC;EACrC,eAAe,EAAA;;AAEjB;EACE,kBAAkB;EAClB,qCAAqC;EACrC,aAAa,EAAA;;AAGf;EACE,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB,EAAA;;AAGlB;EACE,aAAa,EAAA;;AAGf;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB,EAAA;;AAGrB;EACE,YAAY,EAAA;;AAGd;EACE,cCrGkB,EAAA;;ADwGpB;EA1GE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EAyGvB,iBAAiB,EAAA;;AAGnB;EACE,aAAa,EAAA;;AAGf;EACE,kBAAkB,EAAA;;AErHpB;EACE,YAAY,EAAA;;AAGd;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,WAAW,EAAA;;AAGb;EACE,WAAW,EAAA;;AAGb;EACE,aDlBuB,EAAA;;ACqBzB;EACE,aDrBkB,EAAA;;ACwBpB;EACE,YAAY,EAAA","sourcesContent":["@import \"./Vars.scss\";\r\n\r\n@mixin colCenCen {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@mixin flexBetCen {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexCenCen {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin flexStaSta {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n@media (max-width: 323px) {\r\n  h1 {\r\n    display: none;\r\n  }\r\n}\r\n\r\nhtml {\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\r\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\r\n    sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nheader {\r\n  align-items: center;\r\n  background-color: $app-color !important;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  margin-top: 15px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.bg-color{\r\n  background-color: $app-color;\r\n}\r\n\r\n.root {\r\n  margin: 3vw;\r\n  padding-top: 25px;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  color: rgba(0, 0, 0, 0.54) !important;\r\n  font-size: 25px;\r\n}\r\n.front-paper {\r\n  text-align: center;\r\n  color: rgba(0, 0, 0, 0.54) !important;\r\n  padding: 15px;\r\n}\r\n\r\n.paper {\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  max-width: 600px;\r\n}\r\n\r\n.default-paper {\r\n  padding: 15px;\r\n}\r\n\r\n.circular-progress {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.circular-progress {\r\n  margin: 10px;\r\n}\r\n\r\n.circular-progress-color {\r\n  color: $app-color;\r\n}\r\n\r\n.full-img-container {\r\n  @include colCenCen;\r\n  padding-top: 15px;\r\n}\r\n\r\n.full-img {\r\n  height: 350px;\r\n}\r\n\r\n.not-found{\r\n  padding-top: 150px;\r\n}","$secondary-color: #62c241;\r\n$dark-color: #000000;\r\n$app-color-light: #7e76c2b9;\r\n$fg-color: #000;\r\n$fg-color-hover: #fff;\r\n$app-color : #7e76c2;","@import \"../App.scss\";\r\n\r\n.movie-detail---img-full {\r\n  width: 380px;\r\n}\r\n\r\n.movie-detail--grid-icon {\r\n  cursor: pointer;\r\n  width: 20px;\r\n  height: 20px;\r\n  left: -60px;\r\n}\r\n\r\n.movie-detail--grid-icon-text {\r\n  left: -60px;\r\n}\r\n\r\n.icon-item.watched {\r\n  fill: $secondary-color;\r\n}\r\n\r\n.icon-item.nonwatched {\r\n  fill: $dark-color;\r\n}\r\n\r\n.actor-img {\r\n  width: 100px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/styles/components/MovieDetail.scss":
/*!*******************************************************!*\
  !*** ./src/assets/styles/components/MovieDetail.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieDetail_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./MovieDetail.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/components/MovieDetail.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieDetail_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MovieDetail_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_containers_MovieDetails_jsx.bundle.js.map