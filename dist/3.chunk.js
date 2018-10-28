webpackJsonp([3,10],{

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_component__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input_routes__ = __webpack_require__(384);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputModule", function() { return InputModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var InputModule = (function () {
    function InputModule() {
    }
    return InputModule;
}());
InputModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__input_routes__["a" /* inputRoutes */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__input_component__["a" /* InputComponent */]
        ],
    })
], InputModule);

//# sourceMappingURL=input.module.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputComponent = (function () {
    function InputComponent() {
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    return InputComponent;
}());
InputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'app-input',
        template: __webpack_require__(436),
    }),
    __metadata("design:paramtypes", [])
], InputComponent);

//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_component__ = __webpack_require__(252);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inputRoutes; });

var inputRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__input_component__["a" /* InputComponent */]
    },
];
//# sourceMappingURL=input.routes.js.map

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n    <div class=\"col-lg-10\">\n        <h2>Purpose</h2>\n        <h4>Give CA$H Coalition admins ability to maually import paper forms</h4>\n    </div>\n    <div class=\"col-lg-10\">\n        <h2>Design Proposal</h2>\n        <ol>\n            <li><h4> Use number keys as hot keys to coordinate with answers for qustions. Incorporate auto jumping to next entry and submission.</h4></li>\n            <li><h4> Use rapid clickable presentation.</h4></li>\n            <li><h4> Consult with her?</h4></li>\n        </ol>\n    </div>\n    <div class=\"col-lg-2\">\n    </div>\n</div>"

/***/ })

});
//# sourceMappingURL=3.chunk.js.map