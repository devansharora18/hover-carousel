"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _jquery = _interopRequireDefault(require("jquery"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var HoverCarousel = function HoverCarousel(_ref) {
  var images = _ref.images;
  (0, _react.useEffect)(function () {
    var scope = (0, _jquery["default"])(".carousel");
    var wrap = scope.find("ul").parent();
    var containerWidth = 0;
    var scrollWidth = 0;
    var posFromLeft = 0;
    var scrollPos = 0;
    var animated = null;
    var onMouseEnter = function onMouseEnter(e) {
      containerWidth = wrap.width();
      scrollWidth = wrap[0].scrollWidth;
      posFromLeft = wrap.offset().left;
      var stripePos = e.pageX - posFromLeft;
      var pos = stripePos / containerWidth;
      scrollPos = (scrollWidth - containerWidth) * pos;
      wrap.css("scroll-behavior", "smooth");
      if (scrollPos < 0) scrollPos = 0;
      if (scrollPos > scrollWidth - containerWidth) scrollPos = scrollWidth - containerWidth;
      wrap.scrollLeft(scrollPos);
      scope.css("--scrollWidth", containerWidth / scrollWidth * 100 + "%");
      scope.css("--scrollLeft", scrollPos / scrollWidth * 100 + "%");
      clearTimeout(animated);
      animated = setTimeout(function () {
        wrap.css("scroll-behavior", "auto");
        animated = null;
      }, 500);
    };
    var onMouseMove = function onMouseMove(e) {
      if (animated) return;
      var stripePos = e.pageX - posFromLeft;
      var pos = stripePos / containerWidth;
      scrollPos = (scrollWidth - containerWidth) * pos;
      wrap.scrollLeft(scrollPos);
      if (scrollPos < scrollWidth - containerWidth) {
        scope.css("--scrollLeft", scrollPos / scrollWidth * 100 + "%");
      }
      scope.attr("data-at", (scrollPos > 5 ? "left " : " ") + (scrollWidth - containerWidth - scrollPos > 5 ? "right" : ""));
    };
    var bind = function bind() {
      scope.on("mouseenter", onMouseEnter);
      scope.on("mousemove", onMouseMove);
    };
    var unbind = function unbind() {
      scope.off("mouseenter", onMouseEnter);
      scope.off("mousemove", onMouseMove);
    };
    bind();
    return function () {
      unbind();
    };
  }, [images]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "carousel",
    style: {
      overflow: "hidden",
      position: "relative",
      width: "100%",
      cursor: "grab"
    }
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    style: {
      listStyle: "none",
      display: "flex",
      padding: 0,
      margin: 0,
      whiteSpace: "nowrap",
      transition: "transform 0.2s ease"
    }
  }, images.map(function (src, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index,
      style: {
        display: "inline-block",
        width: "33.33%",
        flexShrink: 0
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: src,
      alt: "Carousel Item ".concat(index + 1),
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }));
  })));
};
var _default = HoverCarousel;
exports["default"] = _default;
