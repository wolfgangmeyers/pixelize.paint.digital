/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Color;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return brighter; });
/* harmony export (immutable) */ __webpack_exports__["e"] = color;
/* harmony export (immutable) */ __webpack_exports__["h"] = rgbConvert;
/* harmony export (immutable) */ __webpack_exports__["g"] = rgb;
/* harmony export (immutable) */ __webpack_exports__["b"] = Rgb;
/* unused harmony export hslConvert */
/* harmony export (immutable) */ __webpack_exports__["f"] = hsl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(1);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Rgb, rgb, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hsl, hsl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extend;
/* harmony default export */ __webpack_exports__["a"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var d3 = __webpack_require__(4);
var labs = {};
function hexToLab(hex) {
    var lab = labs[hex];
    if (!lab) {
        lab = d3.lab(hex);
        labs[hex] = lab;
    }
    return lab;
}
exports.hexToLab = hexToLab;
function distance(clr1, clr2) {
    var lab1 = hexToLab(clr1);
    // console.log("lab1 L:" + lab1.l);
    var lab2 = hexToLab(clr2);
    var lDiff = Math.pow(lab2.l - lab1.l, 2);
    var aDiff = Math.pow(lab2.a - lab1.a, 2);
    // console.log("lDiff: " + lDiff);
    var bDiff = Math.pow(lab2.b - lab1.b, 2);
    return Math.sqrt(lDiff + aDiff + bDiff);
    // const lab = Colour(hex).toLinearRGB().toXYZ().toCIELab();
    // return JSON.stringify(lab);
}
exports.distance = distance;
// export function rgbToHex(r: number, g: number, b: number): string {
//     if (r > 255 || g > 255 || b > 255)
//         throw "Invalid color component";
//     return "#" + ((r << 16) | (g << 8) | b).toString(16);
// }
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
exports.rgbToHex = rgbToHex;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_color__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lab__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__["a"]; });





/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
__webpack_require__(17);
module.exports = __webpack_require__(18);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var ReactDOM = __webpack_require__(8);
var App_1 = __webpack_require__(9);
ReactDOM.render(React.createElement(App_1.App, null), document.getElementById("example"));


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var fileio = __webpack_require__(10);
var colors = __webpack_require__(3);
var libraries = __webpack_require__(13);
var d3 = __webpack_require__(4);
var FileSaver = __webpack_require__(14);
var displayCanvasWidth = 4000;
/**
 * This is the wrapper application element. If this application
 * ever needs to support multiple pages, that
 * multi-page support would be configured here.
 */
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.componentWillMount = function () {
        this.setState({
            imageLoaded: false,
            imagePixelized: false,
            width: 100,
            height: 100,
            canvasWidth: 100,
            canvasHeight: 100,
            aspectRatio: 1,
            displayGrid: true,
        });
    };
    App.prototype.updateWidth = function (evt) {
        var width = parseInt(evt.target.value);
        var height = Math.floor(width / this.state.aspectRatio);
        this.setState({
            width: parseInt(evt.target.value),
            height: height,
        });
    };
    App.prototype.updateHeight = function (evt) {
        var height = parseInt(evt.target.value);
        var width = Math.floor(height * this.state.aspectRatio);
        this.setState({
            height: parseInt(evt.target.value),
            width: width,
        });
    };
    App.prototype.disableSmoothing = function (ctx) {
        ctx.imageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
    };
    App.prototype.sortCounts = function (counts) {
        var result = [];
        Object.keys(counts).forEach(function (key) {
            var color = libraries.herrschners.getColor(key);
            result.push({
                code: color.code,
                name: color.name,
                count: counts[key],
            });
        });
        result.sort(function (a, b) { return a.count - b.count; });
        // Order by highest first
        result.reverse();
        return result;
    };
    App.prototype.pixelizeImage = function () {
        var _this = this;
        var ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        setTimeout(function () {
            _this.setState({
                canvasWidth: _this.state.width,
                canvasHeight: _this.state.height,
            });
            var ctx = _this.canvas.getContext("2d");
            _this.disableSmoothing(ctx);
            ctx.drawImage(_this.img, 0, 0, _this.state.width, _this.state.height);
            var imgData = ctx.getImageData(0, 0, _this.state.width, _this.state.height);
            var counts = {};
            var pixelCodes = [];
            for (var i = 0; i < imgData.data.length; i += 4) {
                var r = imgData.data[i];
                var g = imgData.data[i + 1];
                var b = imgData.data[i + 2];
                var hex = colors.rgbToHex(r, g, b);
                var closest = libraries.herrschners.closestMatch(hex);
                pixelCodes.push(closest.code);
                // console.log(closest.name);
                if (!counts[closest.code]) {
                    counts[closest.code] = 0;
                }
                counts[closest.code]++;
                var clr = d3.rgb(closest.code);
                imgData.data[i] = clr.r;
                imgData.data[i + 1] = clr.g;
                imgData.data[i + 2] = clr.b;
            }
            ctx.putImageData(imgData, 0, 0, 0, 0, _this.state.width, _this.state.height);
            // TODO: set state for key
            // draw small image on larger canvas
            var displayCanvasHeight = displayCanvasWidth / _this.state.aspectRatio;
            ctx = _this.displayCanvas.getContext("2d");
            ctx.clearRect(0, 0, _this.displayCanvas.width, _this.displayCanvas.height);
            _this.disableSmoothing(ctx);
            ctx.drawImage(_this.canvas, 0, 0, displayCanvasWidth, displayCanvasHeight);
            // draw gridlines
            ctx.strokeStyle = "#000000";
            var cellWidth = displayCanvasWidth / _this.state.canvasWidth;
            var cellHeight = displayCanvasHeight / _this.state.canvasHeight;
            // color key
            var colorKey = _this.sortCounts(counts);
            if (_this.state.displayGrid) {
                for (var x = 0; x < _this.state.canvasWidth; x++) {
                    ctx.beginPath();
                    ctx.moveTo(x * cellWidth, 0);
                    ctx.lineTo(x * cellWidth, displayCanvasHeight);
                    ctx.stroke();
                }
                for (var y = 0; y < _this.state.canvasHeight; y++) {
                    ctx.beginPath();
                    ctx.moveTo(0, y * cellHeight);
                    ctx.lineTo(displayCanvasWidth, y * cellHeight);
                    ctx.stroke();
                }
                // quickly map hex code to key number
                var colorKeyMap_1 = {};
                colorKey.forEach(function (colorCount, i) {
                    colorKeyMap_1[colorCount.code] = "" + (i + 1);
                });
                // draw numbers on each grid cell
                ctx.font = _this.state.canvasWidth > 60 ? "24px Arial" : "36px Arial";
                for (var y = 0; y < _this.state.canvasHeight; y++) {
                    for (var x = 0; x < _this.state.canvasWidth; x++) {
                        var cellIndex = (y * _this.state.canvasWidth) + x;
                        var cellHex = pixelCodes[cellIndex];
                        var displayKey = "" + colorKeyMap_1[cellHex];
                        ctx.fillStyle = "#000000";
                        ctx.strokeStyle = "#FFFFFF";
                        ctx.beginPath();
                        ctx.strokeText(displayKey, cellWidth * x + (cellWidth / 3), cellHeight * y + (cellHeight / 1.5));
                        ctx.fillText(displayKey, cellWidth * x + (cellWidth / 3), cellHeight * y + (cellHeight / 1.5));
                        ctx.stroke();
                    }
                }
            }
            // ctx.fillText("1", cellWidth / 2, cellHeight / 2);
            // Object.keys(counts).forEach(key => {
            //     console.log(key + ": " + counts[key]);
            // });
            _this.setState({
                imagePixelized: true,
                colorKey: colorKey,
            });
        }, 100);
    };
    App.prototype.onOpenFile = function (evt) {
        var _this = this;
        this.setState({
            imageLoaded: false,
            imagePixelized: false,
            colorKey: null,
        });
        fileio.uploadFile(evt).then(function (data) {
            _this.img.src = data;
            setTimeout(function () {
                var ratio = _this.img.clientWidth / _this.img.clientHeight;
                var width = 50;
                var height = width / ratio;
                _this.setState({
                    imageLoaded: true,
                    imagePixelized: false,
                    width: width,
                    height: Math.floor(height),
                    aspectRatio: ratio,
                });
            }, 100);
        });
    };
    App.prototype.handleDisplayGridChange = function (evt) {
        var _this = this;
        this.setState({
            displayGrid: evt.target.checked,
        });
        if (this.state.imagePixelized) {
            setTimeout(function () {
                _this.pixelizeImage();
            }, 100);
        }
    };
    App.prototype.downloadImage = function () {
        this.canvas.toBlob(function (blob) {
            FileSaver.saveAs(blob, "pixelized.png");
        });
    };
    App.prototype.renderPixelizer = function () {
        var _this = this;
        if (this.state.imageLoaded) {
            return React.createElement("form", { className: "form-horizontal" },
                React.createElement("h4", null, "Pixelize:"),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { className: "col-sm-2 control-label" }, "Width:"),
                    React.createElement("div", { className: "col-sm-3" },
                        React.createElement("input", { type: "number", className: "form-control", id: "inputEmail3", placeholder: "100", value: this.state.width, onChange: this.updateWidth.bind(this) }))),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { className: "col-sm-2 control-label" }, "Height:"),
                    React.createElement("div", { className: "col-sm-3" },
                        React.createElement("input", { type: "number", className: "form-control", id: "inputEmail3", placeholder: "100", value: this.state.height, onChange: this.updateHeight.bind(this) }))),
                React.createElement("div", { className: "form-group" },
                    React.createElement("div", { className: "col-sm-offset-2 col-sm-3" },
                        React.createElement("button", { type: "button", className: "btn btn-default", onClick: function () { return _this.pixelizeImage(); } },
                            React.createElement("i", { className: "fa fa-arrow-right" }),
                            "Pixelize"),
                        "\u00A0",
                        React.createElement("button", { type: "button", className: "btn btn-default", onClick: function () { return _this.downloadImage(); }, disabled: !this.state.imagePixelized },
                            React.createElement("i", { className: "fa fa-save" }),
                            "Download"))),
                React.createElement("div", { className: "form-group" },
                    React.createElement("div", { className: "col-sm-offset-2 col-sm-3" },
                        React.createElement("input", { type: "checkbox", checked: this.state.displayGrid, onChange: function (evt) { return _this.handleDisplayGridChange(evt); } }),
                        " Display Grid")));
        }
    };
    App.prototype.renderCanvas = function () {
        var _this = this;
        if (this.state.imageLoaded) {
            var displayCanvasHeight = displayCanvasWidth / this.state.aspectRatio;
            var canvasStyle = this.state.imagePixelized ? { width: "100%" } : { display: "none" };
            return [React.createElement("canvas", { className: "pixelizer-canvas", style: { display: "none" }, ref: function (ref) { _this.canvas = ref; }, width: this.state.canvasWidth, height: this.state.canvasHeight }),
                React.createElement("canvas", { className: "pixelizer-canvas", style: canvasStyle, ref: function (ref) { return _this.displayCanvas = ref; }, width: displayCanvasWidth, height: displayCanvasHeight })];
        }
    };
    App.prototype.renderLoader = function () {
        var _this = this;
        // if (!this.state.imageLoaded) {
        return [React.createElement("input", { type: "file", onChange: function (evt) { return _this.onOpenFile(evt); } }), React.createElement("hr", null)];
        // }
    };
    App.prototype.renderColorKey = function () {
        if (this.state.colorKey) {
            return React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-lg-12" },
                    React.createElement("div", { className: "block-flat" },
                        React.createElement("div", { className: "header" },
                            React.createElement("h3", null, "Color Key")),
                        React.createElement("div", { className: "content" },
                            React.createElement("table", null,
                                React.createElement("tr", null,
                                    React.createElement("th", null, "Key"),
                                    React.createElement("th", null, "Color Name"),
                                    React.createElement("th", null, "Count")),
                                this.state.colorKey.map(function (colorInfo, i) {
                                    var style = {
                                        background: colorInfo.code,
                                        color: colorInfo.code,
                                    };
                                    return React.createElement("tr", { key: colorInfo.code },
                                        React.createElement("td", null, i + 1),
                                        React.createElement("td", null,
                                            React.createElement("span", { style: style }, "___"),
                                            "\u00A0\u00A0",
                                            colorInfo.name),
                                        React.createElement("td", null, colorInfo.count));
                                }))))));
        }
    };
    App.prototype.render = function () {
        var _this = this;
        var imageStyle = this.state.imagePixelized ? { display: "none" } : { width: "100%" };
        return React.createElement("div", { className: "cl-mcont" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-lg-12" },
                    React.createElement("div", { className: "block-flat" },
                        React.createElement("div", { className: "header" },
                            React.createElement("h3", null, "Pixelizer")),
                        React.createElement("div", { className: "content" },
                            this.renderLoader(),
                            this.renderPixelizer(),
                            React.createElement("img", { ref: function (ref) { return _this.img = ref; }, style: imageStyle }),
                            this.renderCanvas())))),
            this.renderColorKey());
    };
    return App;
}(React.Component));
exports.App = App;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function uploadFile(evt) {
    return new Promise(function (resolve) {
        console.log("Loading file");
        if (evt.target.files.length == 1) {
            var reader = new FileReader();
            reader.onload = function (e) {
                console.log("File loaded");
                var target = e.target;
                var data = target.result;
                resolve(data);
            };
            reader.readAsDataURL(evt.target.files[0]);
        }
    });
}
exports.uploadFile = uploadFile;
/**
 * Loads a recipe file from the client using an event
 * from the file upload control.
 * @param evt
 */
// crafting.RecipeCtrl.prototype.uploadCraftingFile = function(evt) {
//     var ctrl = this;
//     var files = evt.target.files;
//     if (files.length == 1) {
//         var reader = new FileReader();
//         reader.onload = function(e) {
//             var unparsed = e.target.result;
//             var parsed = ctrl.recipeService.parseRecipes(unparsed);
//             ctrl.recipes = ctrl.recipeService.buildRecipes(parsed);
//             // for good measure, add a dummy and remove it. Possible that
//             // the uploaded file has just as many objects as the current
//             // model, which would not cause the table to refresh
//             ctrl.recipes.push({});
//             ctrl.$timeout(function() {
//                 ctrl.recipes.pop();
//             });
//         };
//         reader.readAsText(files[0]);
//         evt.target.value = "";
//     }
// };
// crafting.RecipeCtrl.prototype.saveCraftingFile = function() {
//     var craftingFile = this.recipeService.serializeRecipes(this.recipes);
//     var blob = new Blob([craftingFile], {type: "text/plain;charset=utf-8"});
//     saveAs(blob, "Core_Crafting.txt");
// }; 


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lab;
/* unused harmony export Lab */
/* harmony export (immutable) */ __webpack_exports__["b"] = hcl;
/* unused harmony export Hcl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(5);




var Kn = 18,
    Xn = 0.950470, // D65 standard referent
    Yn = 1,
    Zn = 1.088830,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var b = rgb2xyz(o.r),
      a = rgb2xyz(o.g),
      l = rgb2xyz(o.b),
      x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
      y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
      z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Lab, lab, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
      xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
      xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function xyz2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2xyz(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hcl, hcl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubehelix;
/* unused harmony export Cubehelix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(5);




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Cubehelix, cubehelix, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var colors = __webpack_require__(3);
var ColorLibrary = (function () {
    function ColorLibrary(colorMap) {
        this.colorMap = colorMap;
    }
    ColorLibrary.prototype.closestMatch = function (hexColor) {
        var bestCode = "#FFFFFF";
        var bestDiff = colors.distance(hexColor, bestCode);
        // console.log("Best diff: " + bestDiff);
        Object.keys(this.colorMap).forEach(function (libCode) {
            var diff = colors.distance(hexColor, libCode);
            if (diff < bestDiff) {
                bestDiff = diff;
                bestCode = libCode;
            }
        });
        return {
            code: bestCode,
            name: this.colorMap[bestCode],
        };
    };
    ColorLibrary.prototype.getColor = function (hexColor) {
        return {
            code: hexColor,
            name: this.colorMap[hexColor],
        };
    };
    return ColorLibrary;
}());
exports.ColorLibrary = ColorLibrary;
exports.herrschners = new ColorLibrary({
    "#FFFFFF": "White",
    "#F3DDBA": "Ecru",
    "#F3D48F": "Pale Yellow",
    "#EAEAE0": "Sunny Yellow",
    "#E1E1E1": "Bright Yellow",
    "#E8B946": "Yellow",
    "#F2973B": "Straw Yellow",
    "#D18F59": "Light Straw",
    "#DA853B": "Medium Gold",
    "#AC6B2A": "Pale Gold",
    "#A6784E": "Dark Beige",
    "#C2775C": "Dark Tan",
    "#A05129": "Bronze",
    "#5F2517": "Mahogany",
    "#491C12": "Brown",
    "#38130D": "Coffee",
    "#EF7834": "Light Orange",
    "#EA542D": "Orange",
    "#C64722": "Burnt Orange",
    "#A8362C": "Dark Coral",
    "#F8C5AF": "Pale Peach",
    "#F7BABE": "Pale Pink",
    "#F39EB5": "Pink",
    "#AF6874": "Light Rose",
    "#BF5F6C": "Rose",
    "#DB4976": "Dark Pink",
    "#B71E4A": "Dark Rose",
    "#C81A27": "Bright Red",
    "#AD1D1E": "Red",
    "#801626": "Dark Red",
    "#631028": "Burgundy",
    "#CAAECB": "Light Lavender",
    "#AA7CA9": "Lavender",
    "#875A92": "Dark Lavender",
    "#572160": "Dark Purple",
    "#DFE8EC": "Very Light Blue",
    "#A4CBE9": "Light Blue",
    "#449CB9": "Light Teal",
    "#5B7CAD": "Cornflower",
    "#1E4577": "Dark Cornflower",
    "#2D2B63": "Blue Violet",
    "#DCE2B3": "Pale Green",
    "#AAA869": "Pale Sage",
    "#C0BA46": "Lime",
    "#9AB457": "Spring Green",
    "#3D5827": "Rainforest",
    "#535025": "Moss Green",
    "#4C8E54": "Green",
    "#36533E": "Kelly Green",
    "#13552A": "Paddy Green",
    "#252F1A": "Dark Green",
    "#265E4E": "Sea Green",
    "#116982": "Medium Teal",
    "#0D5159": "Dark Teal",
    "#BFC3CC": "Grey",
    "#595D69": "Dark Grey",
    "#70563F": "Brass",
    "#494231": "Antique Brass",
    "#2B2E32": "Pewter",
    "#000000": "Black",
    "#3A593B": "Medium Forest Green",
    "#7C3321": "Terra Cotta",
    "#E37F67": "Salmon",
    "#6C3933": "Rosewood",
    "#0B2027": "Navy Blue",
    "#855236": "Medium Brown",
    "#7F7F7F": "Medium Grey",
    "#E8D299": "Vanilla",
    "#7EC6BA": "Light Aqua",
    "#1A9188": "Medium Aqua",
    "#14777E": "Turquoise",
    "#10193B": "Dark Royal Blue",
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__(15) !== null) && (__webpack_require__(16) !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    return saveAs;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.png";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle-90c57d.js.map