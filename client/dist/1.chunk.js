webpackJsonp([1,11],{

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__survey_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__survey_routes__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_filterQuestionId_pipe__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_filterSurvey_pipe__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__globals__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_filterByQuestionActive_pipe__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_filterByOptionActive_pipe__ = __webpack_require__(400);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyModule", function() { return SurveyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SurveyModule = (function () {
    function SurveyModule() {
    }
    return SurveyModule;
}());
SurveyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__survey_routes__["a" /* surveyRoutes */]),
            __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__["a" /* NgxPaginationModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__survey_component__["a" /* SurveyComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_filterQuestionId_pipe__["a" /* FilterByQuestionIDPipe */],
            __WEBPACK_IMPORTED_MODULE_8__pipes_filterSurvey_pipe__["a" /* FilterBySurveyIdPipe */],
            __WEBPACK_IMPORTED_MODULE_10__pipes_filterByQuestionActive_pipe__["a" /* FilterByQuestionActivePipe */],
            __WEBPACK_IMPORTED_MODULE_11__pipes_filterByOptionActive_pipe__["a" /* FilterByOptionActivePipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__globals__["a" /* Globals */]
        ]
    })
], SurveyModule);

//# sourceMappingURL=survey.module.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = (function () {
    function Globals() {
        this.surveys = [
            {
                survey_id: 0,
                survey_name: "Lindas Survey",
                date_created: "2018-02-13",
                questions: [
                    {
                        question_id: 0,
                        question_text: "What is your favorite color?",
                        question_type: "dropdown",
                        question_active: true,
                        options: [
                            { option_id: 0, option_text: "Red", option_active: true },
                            { option_id: 1, option_text: "White", option_active: true },
                            { option_id: 2, option_text: "Pink", option_active: true },
                            { option_id: 3, option_text: "Blue", option_active: true },
                            { option_id: 4, option_text: "Yellow", option_active: false }
                        ],
                        responses: [
                            { response_id: 0, response_text: "Red", date_taken: "2018-11-02" },
                            { response_id: 1, response_text: "White", date_taken: "2018-11-02" },
                            { response_id: 2, response_text: "Pink", date_taken: "2018-11-02" },
                            { response_id: 3, response_text: "Blue", date_taken: "2018-11-02" },
                            { response_id: 4, response_text: "White", date_taken: "2018-11-02" },
                            { response_id: 5, response_text: "White", date_taken: "2018-11-02" },
                            { response_id: 6, response_text: "Yellow", date_taken: "2018-11-02" },
                            { response_id: 7, response_text: "Blue", date_taken: "2018-11-02" },
                            { response_id: 8, response_text: "Pink", date_taken: "2018-11-02" },
                        ]
                    },
                    {
                        question_id: 1,
                        question_text: "What is your favorite City?",
                        question_type: "mc",
                        question_active: true,
                        options: [
                            { option_id: 5, option_text: "New York City", option_active: true },
                            { option_id: 6, option_text: "Boston", option_active: true },
                            { option_id: 7, option_text: "Washington", option_active: false },
                            { option_id: 8, option_text: "Miami", option_active: true },
                            { option_id: 9, option_text: "Poughkeepsie", option_active: true }
                        ],
                        responses: [
                            { response_id: 9, response_text: "New York City", date_taken: "2018-11-02" },
                            { response_id: 10, response_text: "Boston", date_taken: "2018-11-02" },
                            { response_id: 11, response_text: "New York City", date_taken: "2018-11-02" },
                            { response_id: 12, response_text: "Washington", date_taken: "2018-11-02" },
                            { response_id: 13, response_text: "Poughkeepsie", date_taken: "2018-11-02" },
                            { response_id: 14, response_text: "Poughkeepsie", date_taken: "2018-11-02" },
                            { response_id: 15, response_text: "New York City", date_taken: "2018-11-02" },
                            { response_id: 16, response_text: "Miami", date_taken: "2018-11-02" },
                            { response_id: 17, response_text: "Boston", date_taken: "2018-11-02" },
                        ]
                    },
                    {
                        question_id: 2,
                        question_text: "Select the services that you need: ",
                        question_type: "checkboxes",
                        question_active: true,
                        options: [
                            { option_id: 10, option_text: "More Money", option_active: false },
                            { option_id: 11, option_text: "More Time", option_active: true },
                            { option_id: 12, option_text: "More Clothes", option_active: true },
                            { option_id: 13, option_text: "Less capping work", option_active: true },
                            { option_id: 14, option_text: "Less drinking", option_active: false }
                        ],
                        responses: [
                            { response_id: 18, response_text: "More Time", date_taken: "2018-11-02" },
                            { response_id: 19, response_text: "More Time", date_taken: "2018-11-02" },
                            { response_id: 20, response_text: "More Money", date_taken: "2018-11-02" },
                            { response_id: 21, response_text: "Less drinking", date_taken: "2018-11-02" },
                            { response_id: 22, response_text: "Less capping work", date_taken: "2018-11-02" },
                            { response_id: 23, response_text: "Less capping work", date_taken: "2018-11-02" },
                            { response_id: 24, response_text: "More Money", date_taken: "2018-11-02" },
                            { response_id: 25, response_text: "More Clothes", date_taken: "2018-11-02" },
                            { response_id: 26, response_text: "Less capping work", date_taken: "2018-11-02" },
                        ]
                    }
                ]
            },
            {
                survey_id: 1,
                survey_name: "Algozzines Survey",
                date_created: "11-02-2018",
                questions: [
                    {
                        question_id: 3,
                        question_text: "How much do you love capping? ",
                        question_type: "dropdown",
                        question_active: true,
                        options: [
                            { option_id: 15, option_text: "Its awesome", option_active: true },
                            { option_id: 16, option_text: "Its cool", option_active: true },
                            { option_id: 17, option_text: "Its miserable", option_active: true },
                        ],
                        responses: [
                            { response_id: 26, response_text: "Its awesome", date_taken: "2018-11-02" },
                            { response_id: 27, response_text: "Its cool", date_taken: "2018-10-14" },
                            { response_id: 28, response_text: "Its awesome", date_taken: "2018-10-12" },
                            { response_id: 29, response_text: "Its cool", date_taken: "2018-10-02" },
                            { response_id: 30, response_text: "Its awesome", date_taken: "2018-11-17" },
                            { response_id: 31, response_text: "Its miserable", date_taken: "2018-10-01" },
                            { response_id: 32, response_text: "Its awesome", date_taken: "2018-11-30" },
                            { response_id: 33, response_text: "Its miserable", date_taken: "2018-10-22" },
                            { response_id: 34, response_text: "Its miserable", date_taken: "2018-11-12" },
                        ]
                    },
                    {
                        question_id: 4,
                        question_text: "Please elaborate on the previous answer",
                        question_type: "text",
                        question_active: true,
                        options: [{ option_id: -1, option_text: "TEXT RESPONSE", option_active: false },],
                        responses: [
                            { response_id: 35, response_text: "I love capping so much,", date_taken: "2018-11-02" },
                            { response_id: 36, response_text: "Its ok, could be better", date_taken: "2018-11-02" },
                            { response_id: 37, response_text: "I love my capping teacher! Johnson is great!", date_taken: "2018-11-02" },
                            { response_id: 38, response_text: "Welp", date_taken: "2018-11-02" },
                            { response_id: 39, response_text: "Algozzine for the win!", date_taken: "2018-11-02" },
                            { response_id: 40, response_text: "I hate my life", date_taken: "2018-11-02" },
                            { response_id: 41, response_text: "This has been an incredible experience", date_taken: "2018-11-02" },
                            { response_id: 42, response_text: "I cry myself to sleep everyday", date_taken: "2018-11-02" },
                            { response_id: 43, response_text: "I find standing in cold windy rain to be more enjoyable than capping.", date_taken: "2018-11-02" },
                        ]
                    }
                ]
            }
        ];
    }
    return Globals;
}());
Globals = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], Globals);

//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByQuestionActivePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByQuestionActivePipe = (function () {
    function FilterByQuestionActivePipe() {
    }
    FilterByQuestionActivePipe.prototype.transform = function (questions) {
        if (questions) {
            return questions.filter(function (question) { return question.question_active === true; });
        }
    };
    return FilterByQuestionActivePipe;
}());
FilterByQuestionActivePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({
        name: 'ActiveQuestions'
    })
], FilterByQuestionActivePipe);

//# sourceMappingURL=filterByQuestionActive.pipe.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* unused harmony export ɵb */
/* unused harmony export ɵa */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxPaginationModule; });
/* unused harmony export PaginationService */
/* unused harmony export PaginationControlsComponent */
/* unused harmony export PaginationControlsDirective */
/* unused harmony export PaginatePipe */



var PaginationService = (function () {
    function PaginationService() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (instance.id == null) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id != null ? config.id : this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ChangeDetectionStrategy */].OnPush,
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ViewEncapsulation */].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */] },],
        'directionLinks': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */] },],
        'autoHide': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */] },],
        'responsive': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */] },],
        'previousLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */] },],
        'nextLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */] },],
        'screenReaderPaginationLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */] },],
        'screenReaderPageLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */] },],
        'screenReaderCurrentLabel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Output */] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (this.service.getInstance(this.id).id == null) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Directive */], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ChangeDetectorRef */], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */] },],
        'maxSize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */] },],
        'pageChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Output */] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_service__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyComponent = (function () {
    function SurveyComponent(globals, surveyService) {
        this.globals = globals;
        this.surveyService = surveyService;
        // Pagination element uses this
        this.config = {
            id: 'custom',
            itemsPerPage: 1,
            currentPage: 1
        };
        // Hardcoded for now
        this.currentSurveyId = this.globals.surveys[0].survey_id;
        this.currentSurveyIndex = this.globals.surveys[0];
        this.radioChoices = [];
        this.surveyData = [];
        this.radioResponses = [];
    }
    SurveyComponent.prototype.ngOnInit = function () {
    };
    // When submit button is hit, this will post the survey data to the database
    SurveyComponent.prototype.postOnSubmit = function () {
        // For each response in surveyData, post the surveyData[index] response object
        for (var i = 0; i < this.surveyData.length; i++) {
            this.surveyService.postSurveyResponse(this.surveyData[i]);
        }
        console.log("popop");
    };
    // When next button is clicked, save the selected options to the survey data object
    SurveyComponent.prototype.updateResponses = function (event, textValue, questionIndex, page) {
        // Response object mirrors the database response table
        var response = { survey_id: 0,
            question_id: 0,
            option_id: 0,
            response_text: "" };
        // If question type is dropdown or multiple choice, only need to add 1 response
        if (this.currentSurveyIndex.questions[questionIndex].question_type == "dropdown" ||
            this.currentSurveyIndex.questions[questionIndex].question_type == "mc") {
            response.survey_id = this.currentSurveyId; // Survey ID
            response.question_id = this.currentSurveyIndex.questions[questionIndex].question_id; // Question ID
            response.option_id = this.selectedOption; // Option ID
            response.response_text = this.getResponseText(this.selectedOption, questionIndex); // Response text
            // Push to survey data array
            this.surveyData.push(response);
            // If question type is checkbox, check for multiple responses
        }
        else if (this.currentSurveyIndex.questions[questionIndex].question_type == "checkboxes") {
            // Iterate through the options that were selected
            for (var _i = 0, _a = this.radioChoices; _i < _a.length; _i++) {
                var option = _a[_i];
                response.survey_id = this.currentSurveyId; // Survey ID
                response.question_id = this.currentSurveyIndex.questions[questionIndex].question_id; // Question ID
                response.option_id = option; // Option ID
                response.response_text = this.getResponseText(option, questionIndex); // Response text
                console.log(option);
                // Push to survey data array
                this.surveyData.push(response);
            }
            // Empty the radioChoices array
            this.radioChoices = [];
            // If question type is text (open-ended), set option id to 1
        }
        else if (this.currentSurveyIndex.questions[questionIndex].question_type == "text") {
            response.survey_id = this.currentSurveyId; // Survey ID
            response.question_id = this.currentSurveyIndex.questions[questionIndex].question_id; // Question ID
            response.option_id = 1; // Option ID
            response.response_text = textValue; // Response text
            console.log(textValue);
            this.surveyData.push(response);
        }
        console.log(this.surveyData);
    };
    // This is called to find the selected options within the HTML
    SurveyComponent.prototype.setSelectedOption = function (event, value, questionType) {
        // If question type is dropdown or multiple choice, there is only 1 selected value
        if (questionType == "dd" || questionType == "mc") {
            console.log("Selected: " + value);
            this.selectedOption = value;
            // If question type is checkbox, there is 1+ options
        }
        else if (questionType == "cb") {
            console.log("Selected: " + value);
            // event is the clicked HTML element
            if (event) {
                // If checked, add it to the radioChoice array
                if (event.target.checked) {
                    this.radioChoices.push(value);
                    console.log(this.radioChoices);
                    // If unchecked, remove it from the radioChoice array
                }
                else {
                    console.log("unchecked");
                    // Iterate through the radio choices to see which matches the value
                    for (var i = 0; i < this.radioChoices.length; i++) {
                        console.log(this.radioChoices[i]);
                        // If it matches, remove it from radioChoice array
                        if (this.radioChoices[i] == value) {
                            this.radioChoices.splice(i, 1);
                        }
                    }
                    console.log(this.radioChoices);
                }
            }
        }
    };
    SurveyComponent.prototype.getResponseText = function (optionId, questionIndex) {
        // Iterate through the question's options
        for (var _i = 0, _a = this.currentSurveyIndex.questions[questionIndex].options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (this.selectedOption == option.option_id) {
                return option.option_text;
            }
            else if (optionId == option.option_id)
                return option.option_text;
        }
    };
    // Gets called
    SurveyComponent.prototype.getQuestionIndex = function (questionId) {
        for (var i = 0; i < this.currentSurveyIndex.questions.length; i++) {
            if (questionId == this.currentSurveyIndex.questions[i].question_id) {
                return i;
            }
        }
        ;
    };
    // Gets called when previous button is clicked
    SurveyComponent.prototype.removeResponse = function () {
        this.surveyData.pop();
        console.log(this.surveyData);
    };
    return SurveyComponent;
}());
SurveyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Component */])({
        selector: 'app-survey',
        template: __webpack_require__(456),
        styles: [__webpack_require__(449)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* Globals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__survey_service__["a" /* SurveyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__survey_service__["a" /* SurveyService */]) === "function" && _b || Object])
], SurveyComponent);

var _a, _b;
//# sourceMappingURL=survey.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__survey_component__ = __webpack_require__(263);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return surveyRoutes; });

var surveyRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__survey_component__["a" /* SurveyComponent */]
    },
];
//# sourceMappingURL=survey.routes.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByOptionActivePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByOptionActivePipe = (function () {
    function FilterByOptionActivePipe() {
    }
    FilterByOptionActivePipe.prototype.transform = function (options) {
        if (options) {
            return options.filter(function (option) { return option.option_active === true; });
        }
    };
    return FilterByOptionActivePipe;
}());
FilterByOptionActivePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({
        name: 'ActiveOptions'
    })
], FilterByOptionActivePipe);

//# sourceMappingURL=filterByOptionActive.pipe.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByQuestionIDPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByQuestionIDPipe = (function () {
    function FilterByQuestionIDPipe() {
    }
    FilterByQuestionIDPipe.prototype.transform = function (options, questionID) {
        if (options) {
            return options.filter(function (option) { return option.question_id == questionID; });
        }
    };
    return FilterByQuestionIDPipe;
}());
FilterByQuestionIDPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({
        name: 'filterByQuestionID'
    })
], FilterByQuestionIDPipe);

//# sourceMappingURL=filterQuestionId.pipe.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterBySurveyIdPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterBySurveyIdPipe = (function () {
    function FilterBySurveyIdPipe() {
    }
    FilterBySurveyIdPipe.prototype.transform = function (surveys, surveyID) {
        if (surveys) {
            return surveys.filter(function (survey) { return survey.survey_id == surveyID; });
        }
    };
    return FilterBySurveyIdPipe;
}());
FilterBySurveyIdPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({
        name: 'filterBySurveyID'
    })
], FilterBySurveyIdPipe);

//# sourceMappingURL=filterSurvey.pipe.js.map

/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".header {\n    color: #36A0FF;\n    font-size: 27px;\n    padding: 10px;\n}\n.pages{\n    margin-left:290px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n      <div class=\"well well-sm\">\n\n        <div *ngFor=\"let survey of globals.surveys | filterBySurveyID: currentSurveyId; let j = index\">\n\n          <div *ngFor=\"let question of survey.questions | paginate: config\">\n\n            <form action=\"surveyEnd.component.html\">\n              <fieldset>\n                <div class=\"row\">\n\n                  <legend class=\"text-center header\">Dutchess CAP Survey</legend>\n                  <div class=\"col-lg-6\" style=\"text-align: center; margin-left: 220px;\">\n                    <!--<div *ngFor=\"let survey of globals.surveys | filterBySurveyID: currentSurveyId\">-->\n\n                    <h3> {{ question.question_id + 1 }}. {{ question.question_text}} </h3>\n\n                    <div [ngSwitch]=\"question.question_type\" style=\"height:100px\">\n\n                      <div *ngSwitchCase=\"'dropdown'\">\n                        <select class=\"form-control\" id=\"select\" [(ngModel)]=\"selectedOptionId\" name=\"selectedOption\"\n                          (change)=\"setSelectedOption($event, $event.target.value, 'dd')\">\n                          <option disabled selected>-Please Select an Option-</option>\n                          <option *ngFor=\"let option of question.options\" value=\"{{option.option_id}}\">\n                            {{ option.option_text }}\n                          </option>\n                        </select>\n                      </div>\n\n                      <div *ngSwitchCase=\"'checkboxes'\">\n                        <div *ngFor=\"let option of question.options\" id=\"divCheckboxOptionText\" (change)=\"setSelectedOption($event, $event.target.value, 'cb')\">\n                          <input class=\"form-check-input\" type=\"checkbox\" value=\"{{option.option_id}}\">\n                          {{ option.option_text }}\n                        </div>\n                      </div>\n\n                      <div *ngSwitchCase=\"'text'\">\n                        <div class=\"form-check-label\">\n                          <textarea class=\"form-control\" name=\"text\" rows=\"2\" [(ngModel)]=\"textAreaValue\"></textarea>\n                        </div>\n                      </div>\n\n                      <div *ngSwitchCase=\"'mc'\">\n                        <div *ngFor=\"let option of question.options\" id=\"radioBoxOptionText\" (change)=\"setSelectedOption($event, $event.target.value, 'mc')\">\n                          <input type=\"radio\" class=\"form-check-input\" name=\"question.question_id\" value=\"{{option.option_id}}\">\n                          {{ option.option_text }}\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n                <pagination-template #p=\"paginationApi\" [id]=\"config.id\" (pageChange)=\"config.currentPage = $event\">\n                  <div class=\"custom-pagination\">\n                    <div class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\">\n                      <a *ngIf=\"!p.isFirstPage()\" (click)=\"removeResponse(); p.previous();\"> Previous </a>\n                    </div>\n\n                    <div *ngFor=\"let page of p.pages\" [class.current]=\"p.getCurrent() === page.value\">\n                      <a (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                        <span>{{ page.label }}</span>\n                      </a>\n                      <div *ngIf=\"p.getCurrent() === page.value\">\n                        <span>{{ page.label }}</span>\n                      </div>\n                    </div>\n\n                    <div class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\">\n                      <a *ngIf=\"!p.isLastPage()\" (click)=\"updateResponses($event, textAreaValue, getQuestionIndex(question.question_id), p); p.next()\"> Next </a>\n                      <a *ngIf=\"p.isLastPage()\" (click)=\"updateResponses($event, textAreaValue, getQuestionIndex(question.question_id), p); postOnSubmit();\"> Submit </a>\n                    </div>\n                  </div>\n                </pagination-template>\n\n              </fieldset>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map