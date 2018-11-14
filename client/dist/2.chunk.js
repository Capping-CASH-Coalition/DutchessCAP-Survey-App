webpackJsonp([2,11],{

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exportRaw_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exportRaw_routes__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globals__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_filterByDate_pipe__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_filter_pipe__ = __webpack_require__(398);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportRawModule", function() { return ExportRawModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ExportRawModule = (function () {
    function ExportRawModule() {
    }
    return ExportRawModule;
}());
ExportRawModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__exportRaw_routes__["a" /* exportRawRoutes */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__exportRaw_component__["a" /* ExportRawComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_filterByDate_pipe__["a" /* FilterByDatePipe */],
            __WEBPACK_IMPORTED_MODULE_8__pipes_filter_pipe__["a" /* FilterPipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__globals__["a" /* Globals */]
        ]
    })
], ExportRawModule);

//# sourceMappingURL=exportRaw.module.js.map

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

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(256);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportRawComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExportRawComponent = (function () {
    function ExportRawComponent(globals) {
        this.globals = globals;
    }
    ExportRawComponent.prototype.ngOnInit = function () {
        this.currSurvey = this.globals.surveys[0];
        this.updateDate(this.currSurvey.date_created);
        this.updateDataFeed(-1);
    };
    ExportRawComponent.prototype.updateDate = function (date) {
        this.dateFilter = date;
    };
    ExportRawComponent.prototype.updateSurvey = function (id) {
        this.currSurvey = this.globals.surveys[id];
        this.getQuestions();
        this.updateDataFeed(-1);
    };
    ExportRawComponent.prototype.getQuestions = function () {
        return this.currSurvey.questions.filter(function (question) {
            return question.question_active === true;
        });
    };
    ExportRawComponent.prototype.updateDataFeed = function (question_id) {
        var _this = this;
        this.dataFeed = [];
        if (question_id == -1) {
            this.currSurvey.questions.forEach(function (question) {
                if (question.question_active) {
                    question.responses.forEach(function (response) {
                        _this.dataFeed.push({
                            question: question.question_text,
                            question_id: question.question_id,
                            response: response.response_text,
                            date: response.date_taken
                        });
                    });
                }
            });
        }
        else {
            this.currSurvey.questions.forEach(function (question) {
                if (question.question_id == question_id) {
                    question.responses.forEach(function (response) {
                        _this.dataFeed.push({
                            question: question.question_text,
                            question_id: question.question_id,
                            response: response.response_text,
                            date: response.date_taken
                        });
                    });
                }
            });
        }
    };
    ExportRawComponent.prototype.downloadCSV = function (csv) {
        var csvFile;
        var downloadLink;
        // CSV file
        csvFile = new Blob([csv], { type: "text/csv" });
        // Download link
        downloadLink = document.createElement("a");
        // File name
        downloadLink.download = this.currSurvey.survey_name;
        // Create a link to the file
        downloadLink.href = window.URL.createObjectURL(csvFile);
        // Hide download link
        downloadLink.style.display = "none";
        // Add the link to DOM
        document.body.appendChild(downloadLink);
        // Click download link
        downloadLink.click();
    };
    ExportRawComponent.prototype.exportTableToCSV = function () {
        var csv = [];
        var rows = document.querySelectorAll("table tr");
        for (var i = 0; i < rows.length; i++) {
            var row = [], cols = rows[i].querySelectorAll("td, th");
            for (var j = 0; j < cols.length; j++)
                row.push(cols[j].innerHTML);
            csv.push(row.join(","));
        }
        // Download CSV file
        this.downloadCSV(csv.join("\n"));
    };
    return ExportRawComponent;
}());
ExportRawComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-exportRaw',
        styles: [__webpack_require__(446)],
        template: __webpack_require__(453),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */]) === "function" && _a || Object])
], ExportRawComponent);

var _a;
//# sourceMappingURL=exportRaw.component.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exportRaw_component__ = __webpack_require__(260);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return exportRawRoutes; });

var exportRawRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__exportRaw_component__["a" /* ExportRawComponent */]
    },
];
//# sourceMappingURL=exportRaw.routes.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        console.log(searchText);
        return items.filter(function (it) {
            return it.response.toLowerCase().includes(searchText);
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByDatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByDatePipe = (function () {
    function FilterByDatePipe() {
    }
    FilterByDatePipe.prototype.transform = function (responses, date) {
        if (responses) {
            return responses.filter(function (response) { return response.date >= date; });
        }
    };
    return FilterByDatePipe;
}());
FilterByDatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Pipe */])({
        name: 'filterByDate'
    })
], FilterByDatePipe);

//# sourceMappingURL=filterByDate.pipe.js.map

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".colQuestions{\n   width: 35%\n}\n\n.colResponses{\n   width: 53%\n}\n\n.colDates{\n   width: 12%;\n   text-align: right;\n}\n\n.btnExport{\n   margin-top: 23px;\n}\n\n.divSearchRow {\n   margin-bottom: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 453:
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n  <div class=\"row\" style=\"margin-top:30px\">\n\n    <div class=\"col-lg-2\">\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlSelect1\">Survey</label>\n        <select class=\"form-control\" id=\"exampleFormControlSelect1\" (change)=\"updateSurvey($event.target.value)\">\n          <option *ngFor=\"let survey of globals.surveys\" value=\"{{survey.survey_id}}\">\n            {{ survey.survey_name }}\n          </option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"col-lg-5\">\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlSelect1\">Survey Question</label>\n        <select class=\"form-control\" id=\"exampleFormControlSelect1\" (change)=\"updateDataFeed($event.target.value)\">\n          <option value=\"-1\">All Questions</option>\n          <option *ngFor=\"let question of getQuestions()\" value=\"{{ question.question_id }}\">\n            {{ question.question_text}}\n          </option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3\">\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlSelect1\">As of Date</label>\n        <input class=\"form-control\" type=\"date\" value=\"{{ dateFilter }}\" (change)=\"updateDate($event.target.value)\">\n      </div>\n    </div>\n\n    <div class=\"col-lg-2\">\n      <button type=\"button\" class=\"btn btn-primary btn-block btn-sm btnExport\" (click)=\"exportTableToCSV('table.csv')\"><i\n          class=\"fas fa-download\"></i> Export Table</button>\n    </div>\n\n  </div>\n\n  <div class=\"row divSearchRow\">\n\n    <div class=\"col-lg-12\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" placeholder=\"Filter Responses By Keyword\">\n        <div class=\"input-group-btn\">\n          <button class=\"btn btn-default\" type=\"submit\">\n            <i class=\"glyphicon glyphicon-search\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n\n  <div class=\"row \">\n\n    <div class=\"col-lg-12\">\n      <table id=\"tableResponses\" class=\"table table-hover table-sm\">\n        <thead>\n          <tr>\n            <th class=\"colQuestions\">Question</th>\n            <th class=\"colResponses\">Response</th>\n            <th class=\"colDates\">Date Submitted</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let response of dataFeed | filter: searchText | filterByDate: dateFilter\">\n            <th> {{ response.question }} </th>\n            <td> {{ response.response }}</td>\n            <td class=\"colDates\"> {{ response.date }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n</div>"

/***/ })

});
//# sourceMappingURL=2.chunk.js.map