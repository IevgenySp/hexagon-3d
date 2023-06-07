"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var topBottomColorInit = 'linear-gradient( to top right,rgba(156,204,101 ,1) 0%, rgba(38,198,218 ,1) 50%)';
var sidesColorInit = 'linear-gradient( to top right, rgba(63,81,181,1) 0%, rgba(3,155,229 ,1) 40%)';
var shadowColorInit = '1px 1px 30px rgb(2 119 189)';
var sidesColorAlternativeInit = 'linear-gradient(to top, rgba(255,81,50,1) 0%,rgba(255,246,0,1) 100%)';
var sidesShadowAlternativeInit = '0px 10px 40px 5px #c600ff';
var hexagon3D = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 70 : _b, _c = _a.height, height = _c === void 0 ? 50 : _c, _d = _a.rotateZ, rotateZ = _d === void 0 ? 30 : _d, _e = _a.rotateX, rotateX = _e === void 0 ? 50 : _e, _f = _a.showShadow, showShadow = _f === void 0 ? false : _f, _g = _a.shadowColor, shadowColor = _g === void 0 ? shadowColorInit : _g, _h = _a.growTop, growTop = _h === void 0 ? false : _h, _j = _a.topBottomColor, topBottomColor = _j === void 0 ? topBottomColorInit : _j, _k = _a.sidesColor, sidesColor = _k === void 0 ? sidesColorInit : _k, _l = _a.opacity, opacity = _l === void 0 ? 0.8 : _l, _m = _a.showTransition, showTransition = _m === void 0 ? false : _m;
    var height2D = width * 1.1547;
    var sideLength = height2D / 2;
    var smallHeight = width;
    var hexagonStyleCommon = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: width + 'px',
        height: height2D + 'px',
        cursor: 'pointer',
        clipPath: 'polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%)',
        background: topBottomColor,
        overflow: 'hidden',
    };
    var sideStyleCommon = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: sideLength + 'px',
        height: height + 'px',
        cursor: 'pointer',
        opacity: opacity,
        boxSizing: 'border-box',
        background: sidesColor,
        boxShadow: showShadow ? shadowColor : 'unset',
        transition: showTransition ? 'height 0.5s ease-out' : 'unset',
        overflow: 'hidden',
    };
    return !growTop ? {
        container: {
            style: {
                position: 'relative',
                transformStyle: 'preserve-3d',
                transform: "rotateX(".concat(rotateX, "deg) rotateZ(").concat(rotateZ, "deg)"),
                width: 'fit-content',
            },
            top: {
                id: 'top',
                style: __assign(__assign({}, hexagonStyleCommon), { zIndex: 2 })
            },
            side1: {
                id: 'side1',
                style: __assign(__assign({}, sideStyleCommon), { left: smallHeight / 2 + 'px', transformOrigin: 'top left', transform: 'rotateZ(-30deg) rotateX(-90deg)' })
            },
            side2: {
                id: 'side2',
                style: __assign(__assign({}, sideStyleCommon), { left: (smallHeight / 2 - sideLength) + 'px', transformOrigin: 'top right', transform: 'rotateZ(30deg) rotateX(-90deg)' })
            },
            side3: {
                id: 'side3',
                style: __assign(__assign({}, sideStyleCommon), { left: -sideLength + 'px', top: (height2D - sideLength) / 2 + sideLength + 'px', transformOrigin: 'top right', transform: 'rotateZ(90deg) rotateX(-90deg)' })
            },
            side4: {
                id: 'side4',
                style: __assign(__assign({}, sideStyleCommon), { left: -sideLength + 'px', top: (height2D - sideLength) / 2 + 'px', transformOrigin: 'top right', transform: 'rotateZ(150deg) rotateX(-90deg)' })
            },
            side5: {
                id: 'side5',
                style: __assign(__assign({}, sideStyleCommon), { left: smallHeight + 'px', top: (height2D - sideLength) / 2 + 'px', transformOrigin: 'top left', transform: 'rotateZ(-150deg) rotateX(-90deg)' })
            },
            side6: {
                id: 'side6',
                style: __assign(__assign({}, sideStyleCommon), { left: smallHeight + 'px', top: (height2D - sideLength) / 2 + sideLength + 'px', transformOrigin: 'top left', transform: 'rotateZ(-90deg) rotateX(-90deg)' })
            },
            bottom: {
                id: 'bottom',
                style: __assign(__assign({}, hexagonStyleCommon), { marginTop: -height2D + 'px', zIndex: 1, transform: "translateZ(".concat(-height, "px)"), transition: 'transform 0.5s ease-out' })
            }
        }
    } : {
        container: {
            style: {
                position: 'relative',
                transformStyle: 'preserve-3d',
                transform: "rotateX(".concat(rotateX, "deg) rotateZ(").concat(rotateZ, "deg)"),
                width: 'fit-content',
            },
            top: {
                id: 'top',
                style: __assign(__assign({}, hexagonStyleCommon), { 
                    //marginBottom: height2D + 'px',
                    zIndex: 2, transform: "translateZ(".concat(height, "px)"), transition: 'transform 0.5s ease-out' })
            },
            side1: {
                id: 'side1',
                style: __assign(__assign({}, sideStyleCommon), { left: smallHeight / 2 + 'px', top: (height2D - smallHeight) + 'px', transformOrigin: 'bottom left', transform: "translateY(".concat(-height + smallHeight, "px) rotateZ(-30deg) rotateX(270deg)") })
            },
            side2: {
                id: 'side2',
                style: __assign(__assign({}, sideStyleCommon), { top: (height2D - sideLength) / 2 + sideLength - smallHeight + 'px', transformOrigin: 'bottom left', transform: "translateY(".concat(-height + smallHeight, "px) rotateZ(30deg) rotateX(-90deg)") })
            },
            side3: {
                id: 'side3',
                style: __assign(__assign({}, sideStyleCommon), { left: -sideLength + 'px', top: (height2D - sideLength) / 2 + sideLength - smallHeight + 'px', transformOrigin: 'bottom right', transform: " translateY(".concat(-height + smallHeight, "px) rotateZ(90deg) rotateX(-90deg)") })
            },
            side4: {
                id: 'side4',
                style: __assign(__assign({}, sideStyleCommon), { left: -sideLength + 'px', top: (height2D - sideLength) / 2 - smallHeight + 'px', transformOrigin: 'bottom right', transform: "translateY(".concat(-height + smallHeight, "px) rotateZ(150deg) rotateX(-90deg)") })
            },
            side5: {
                id: 'side5',
                style: __assign(__assign({}, sideStyleCommon), { left: smallHeight + 'px', top: (height2D - sideLength) / 2 - smallHeight + 'px', transformOrigin: 'bottom left', transform: "translateY(".concat(-height + smallHeight, "px) rotateZ(-150deg) rotateX(-90deg)") })
            },
            side6: {
                id: 'side6',
                style: __assign(__assign({}, sideStyleCommon), { left: smallHeight + 'px', top: (height2D - sideLength) / 2 - smallHeight + sideLength + 'px', transformOrigin: 'bottom left', transform: "translateY(".concat(-height + smallHeight, "px) rotateZ(-90deg) rotateX(-90deg)") })
            },
            bottom: {
                id: 'bottom',
                style: __assign(__assign({}, hexagonStyleCommon), { marginTop: -height2D + 'px', zIndex: 1 })
            }
        }
    };
};
exports.default = hexagon3D;
