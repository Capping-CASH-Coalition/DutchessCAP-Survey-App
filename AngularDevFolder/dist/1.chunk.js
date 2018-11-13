webpackJsonp([1,11],{

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__openEndedData_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__openEndedData_routes__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter_pipe__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filterQuestionType_pipe__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__globals__ = __webpack_require__(257);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenEndedDataModule", function() { return OpenEndedDataModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var OpenEndedDataModule = (function () {
    function OpenEndedDataModule() {
    }
    return OpenEndedDataModule;
}());
OpenEndedDataModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__openEndedData_routes__["a" /* openEndedDataRoutes */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__openEndedData_component__["a" /* OpenEndedDataComponent */],
            __WEBPACK_IMPORTED_MODULE_6__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_7__filterQuestionType_pipe__["a" /* FilterByQuestionTypePipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__globals__["a" /* Globals */]
        ]
    })
], OpenEndedDataModule);

//# sourceMappingURL=openEndedData.module.js.map

/***/ }),

/***/ 257:
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
        this.version = 1;
        this.yearCreated = new Date(2018);
        this.name = "Questionnaire_Test";
        this.questions = [{ question_id: 1, question_num: 1, question_text: "What services do you need?", question_type: "checkbox" },
            { question_id: 2, question_num: 2, question_text: "What city are you from?", question_type: "select" },
            { question_id: 3, question_num: 3, question_text: "Additional comments:", question_type: "text" },
            { question_id: 4, question_num: 4, question_text: "How can this survey be better?", question_type: "text" },
            { question_id: 5, question_num: 5, question_text: "In a few words, describe capping:", question_type: "text" }];
        this.options = [{ question_id: 1, option_num: 1, option_text: "CASH", option_id: 1 },
            { question_id: 1, option_num: 2, option_text: "Dress for success", option_id: 2 },
            { question_id: 1, option_num: 3, option_text: "Food Pantry", option_id: 3 },
            { question_id: 2, option_num: 1, option_text: "Hyde Park", option_id: 4 },
            { question_id: 2, option_num: 2, option_text: "Poughkeepsie", option_id: 5 },
            { question_id: 2, option_num: 3, option_text: "Wappingers", option_id: 6 },
            { question_id: 3, option_num: 1, option_text: "Response:", option_id: 7 }];
        this.responses = [{ question_id: 1, question_num: 1, question_text: "What services do you need?", question_is_active: "true", question_type: "checkbox", option_id: 1, option_num: 1, option_text: "money", option_is_active: "true" },
            { question_id: 2, question_num: 2, question_text: "What city are you from?", question_type: "select", option_id: 2, option_num: 1, option_text: "Beacon", option_is_active: "true" },
            { question_id: 3, question_num: 3, question_text: "Additional comments:", question_type: "text", option_id: 3, option_num: 1, option_text: "nope", option_is_active: "true" },
            { question_id: 4, question_num: 4, question_text: "How can this survey be better?", question_type: "text", option_id: 4, option_num: 1, option_text: "by being over", option_is_active: "true" },
            { question_id: 5, question_num: 5, question_text: "In a few words, describe capping:", question_type: "text", option_id: 5, option_num: 1, option_text: "a class you must take to graduate and gain experience", option_is_active: "true" }];
        this.questionResponseData = this.getQuestionResponseData();
        /*
        ~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~
    
        constructor(private surveyService: SurveyService) {
    
    
            this.surveyService.getQuestions().subscribe((response)=>{
                this.questions = [];
                console.log('response is ', response);
                for (let i = 0; i < response.length; i++) {
                if (response[i].survey_version == 1) {
                    this.version = 1;
                    let qArray =
                    {"question_num": response[i].question_num,
                    "question_id": response[i].question_id,
                    "question_text": response[i].question_text,
                    "question_type": response[i].question_type}
                    ;
                    this.questions.push(qArray);
                }
                }
                console.log(this.questions);
                this.surveyService.getOptions().subscribe((response)=>{
                this.options = [];
                console.log('response is ', response);
                for (let i = 0; i < this.questions.length; i++) {
                    console.log(response[i]);
                    for (let j = 0; j < response.length; j++) {
                    if (response[j].question_id == this.questions[i].question_id) {
                        let rArray = [
                        {"option_id": response[i].option_id,
                        "option_num": response[i].option_num,
                        "option_text": response[i].option_text}
                        ];
                        this.options.push(rArray);
                    }
                    }
                }
                //console.log(this.options);
                },(error) => {
                    console.log('error is ', error)
                })
            },(error) => {
                console.log('error is ', error)
            })
         }
         ~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~~DONT DELETE~~~~~~~~~
         */
    }
    Globals.prototype.getQuestionResponseData = function () {
        var _this = this;
        var questionResponseDataReturn = [];
        this.questions.forEach(function (question) {
            var data = { question_id: 0, question_type: '', question_text: '', responses: [] };
            data.question_id = question.question_id;
            data.question_text = question.question_text;
            data.question_type = question.question_type;
            _this.responses.forEach(function (response) {
                if (question.question_id === response.question_id) {
                    data.responses.push(response.response_text);
                }
                ;
            });
            questionResponseDataReturn.push(data);
        });
        return questionResponseDataReturn;
    };
    return Globals;
}());
Globals = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], Globals);

//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(257);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenEndedDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OpenEndedDataComponent = (function () {
    function OpenEndedDataComponent(globals) {
        this.globals = globals;
    }
    OpenEndedDataComponent.prototype.ngOnInit = function () {
        this.dataFeed = this.globals.questionResponseData[0].responses;
    };
    OpenEndedDataComponent.prototype.updateDataFeed = function (currQuestion) {
        var _this = this;
        this.globals.questionResponseData.forEach(function (question) {
            if (question.question_text === currQuestion) {
                _this.dataFeed = question.responses;
            }
        });
    };
    return OpenEndedDataComponent;
}());
OpenEndedDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'app-openEndedData',
        styles: [__webpack_require__(443)],
        template: __webpack_require__(450),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */]) === "function" && _a || Object])
], OpenEndedDataComponent);

var _a;
//# sourceMappingURL=openEndedData.component.js.map

/***/ }),

/***/ 395:
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
        return items.filter(function (it) {
            return it.toLowerCase().includes(searchText);
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterByQuestionTypePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByQuestionTypePipe = (function () {
    function FilterByQuestionTypePipe() {
    }
    FilterByQuestionTypePipe.prototype.transform = function (questions, type) {
        if (questions) {
            return questions.filter(function (question) { return question.question_type === type; });
        }
    };
    return FilterByQuestionTypePipe;
}());
FilterByQuestionTypePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Pipe */])({
        name: 'filterByQuestionType'
    })
], FilterByQuestionTypePipe);

//# sourceMappingURL=filterQuestionType.pipe.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__openEndedData_component__ = __webpack_require__(262);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return openEndedDataRoutes; });

var openEndedDataRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__openEndedData_component__["a" /* OpenEndedDataComponent */]
    },
];
//# sourceMappingURL=openEndedData.routes.js.map

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".divVisuals {\n   margin-top: 30px;\n}\n\n.divSearchRow {\n   margin-top: 10px;\n}\n\n.stylish-input-group .input-group-addon{\n   background: white !important; \n}\n.stylish-input-group .form-control{\n  border-right:0; \n  box-shadow:0 0 0; \n  border-color:#ccc;\n}\n.stylish-input-group button{\n   border:0;\n   background:transparent;\n}\n\n.divTableResponses {\n   display: block;\n   height: 480px;\n   overflow-y: scroll;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n   <div class=\"row\">\n      <div class=\"col-lg-12\">\n         <div class=\"form-group\">\n            <label for=\"exampleFormControlSelect1\">Select Question to Get Responses From</label>\n            <select class=\"form-control\" id=\"exampleFormControlSelect1\" (change)=\"updateDataFeed($event.target.value)\">\n               <option *ngFor=\"let data of globals.questionResponseData | filterByQuestionType: 'text' \">\n                  {{ data.question_text }}   \n               </option>\n                  \n            </select>\n         </div>\n      </div>\n   </div>\n   <div class=\"row divSearchRow\">\n      <div class=\"col-lg-6\">\n         <div class=\"input-group\">\n            <input   type=\"text\" \n                     class=\"form-control\"\n                     [(ngModel)]=\"searchText\" \n                     placeholder=\"Filter Data Feed\">\n            <div class=\"input-group-btn\">\n               <button class=\"btn btn-default\" type=\"submit\">\n                  <i class=\"glyphicon glyphicon-search\"></i>\n               </button>\n            </div>\n         </div>\n      </div>\n      <div class=\"col-lg-3\">\n         <button type=\"button\" class=\"btn btn-primary\">Export Current Data Feed</button>\n      </div>\n      <div class=\"col-lg-3\">\n         <button type=\"button\" class=\"btn btn-info\">Export Word Cloud</button>\n      </div>\n   </div>\n\n   <div class=\"row divVisuals\">\n      <div class=\"col-lg-6 divTableResponses\"> \n\n         <table id=\"tableResponses\" class=\"table table-hover\">\n            <thead>\n               <tr>\n                  <th>Responses</th>\n               </tr>\n            </thead>\n            <tbody>\n               <tr *ngFor=\"let response of dataFeed | filter : searchText\">\n                  <td>{{ response }}</td>\n               </tr>\n            </tbody>\n         </table>\n      </div>\n      <div class=\"col-lg-6\">\n            <canvas id=\"wordcloudCanvas\" width=\"480\" height=\"480\"></canvas>\n      </div>\n   </div>\n</div>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map