webpackJsonp([5,11],{

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_routes__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globals__ = __webpack_require__(256);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModule", function() { return EditModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EditModule = (function () {
    function EditModule() {
    }
    return EditModule;
}());
EditModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__edit_routes__["a" /* editRoutes */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__edit_component__["a" /* EditComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__globals__["a" /* Globals */]
        ]
    })
], EditModule);

//# sourceMappingURL=edit.module.js.map

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

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(256);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //path relative
var EditComponent = (function () {
    function EditComponent(_fb, globals) {
        this._fb = _fb;
        this.globals = globals;
    }
    ;
    EditComponent.prototype.ngOnInit = function () {
        this.newSurveyForm();
    };
    EditComponent.prototype.setReadOnly = function () {
        return this.nameReadOnly;
    };
    EditComponent.prototype.newSurveyForm = function () {
        this.survey = this._fb.group({
            surveyName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](''),
            questions: this._fb.array([
                this.initQuestion(),
            ])
        });
        this.nameReadOnly = false;
    };
    EditComponent.prototype.updateSurveyFormData = function (survey_id) {
        var currSurvey;
        this.nameReadOnly = true;
        this.globals.surveys.forEach(function (s) {
            currSurvey = s.survey_id == survey_id ? s : currSurvey;
        });
        this.survey = this._fb.group({
            surveyName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](currSurvey.survey_name),
            questions: this._fb.array([])
        });
        this.patchFormQuestions(currSurvey.questions);
    };
    EditComponent.prototype.patchFormQuestions = function (questions) {
        var _this = this;
        var control = this.survey.controls['questions'];
        questions.forEach(function (q) {
            if (q.question_active) {
                control.push(_this._fb.group({
                    questionText: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](q.question_text),
                    questionType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](q.question_type),
                    questionOptions: _this.patchFormOptions(q.options)
                }));
            }
        });
    };
    EditComponent.prototype.patchFormOptions = function (options) {
        var _this = this;
        var ops = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormArray */]([]);
        options.forEach(function (o) {
            ops.push(_this._fb.group({
                option: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](o.option_text)
            }));
        });
        return ops;
    };
    EditComponent.prototype.initQuestion = function () {
        return this._fb.group({
            questionText: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](''),
            questionType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](''),
            questionOptions: this._fb.array([
                this.initOption(),
            ])
        });
    };
    EditComponent.prototype.initOption = function () {
        return this._fb.group({
            option: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('')
        });
    };
    EditComponent.prototype.addQuestion = function (idx) {
        var control = this.survey.controls['questions'];
        control.insert(idx + 1, this.initQuestion());
    };
    EditComponent.prototype.removeQuestion = function (idx) {
        var control = this.survey.controls['questions'];
        control.removeAt(idx);
    };
    EditComponent.prototype.addOption = function (question) {
        var control = question.controls.questionOptions;
        control.push(this.initOption());
    };
    EditComponent.prototype.removeOption = function (question, j) {
        var control = question.controls.questionOptions;
        control.removeAt(j);
    };
    EditComponent.prototype.showOptionsDiv = function (question) {
        var questionType = question.controls.questionType.value;
        var ret;
        switch (questionType.toString()) {
            case "dropdown":
                ret = true;
                break;
            case "checkboxes":
                ret = true;
                break;
            case "mc":
                ret = true;
                break;
            case "text":
                ret = false;
                break;
            default:
                ret = true;
        }
        return ret;
    };
    EditComponent.prototype.save = function (formData) {
        console.log(formData.value);
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-edit',
        template: __webpack_require__(452),
        styles: [__webpack_require__(445)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* Globals */]) === "function" && _b || Object])
], EditComponent);

var _a, _b;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_component__ = __webpack_require__(259);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editRoutes; });

var editRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__edit_component__["a" /* EditComponent */]
    },
];
//# sourceMappingURL=edit.routes.js.map

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "#btnQuestionAdd {\n   color: green;\n}\n\n#btnQuestionRemove {\n   color: #eb494e\n}\n\na:hover { \n   background-color: yellow;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 452:
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n   \n   <div class=\"row\" style=\"margin-top:10px; margin-bottom:10px\">\n   \n      <div class=\"col-lg-1\">\n      </div>\n\n      <div class=\"col-lg-5\">\n         <select class=\"form-control\" id=\"exampleFormControlSelect\" (change)=\"updateSurveyFormData($event.target.value)\">\n               <option value=\"-1\" disabled selected>Select survey to edit or create a new one!</option>\n               <option *ngFor=\"let s of globals.surveys\" [value]=\"s.survey_id\">\n                  {{ s.survey_name }}\n               </option>\n         </select>         \n      </div>\n\n      <div class=\"col-lg-5\">\n         <button type=\"button\" (click)=\"newSurveyForm()\" class=\"btn btn-warning btn-sm pull-right\">Create New Survey</button>\n      </div>\n\n      <div class=\"col-lg-1\">\n      </div>\n\n   </div>\n\n   <div class=\"row\">\n\n      <div class=\"col-lg-1\">\n      </div>\n\n      <div class=\"col-lg-10\">\n         <div class=\"ibox-content\">\n            <div class=\"feed-activity-list\">\n               \n               <form [formGroup]=\"survey\" novalidate (ngSubmit)=\"save(survey)\">\n\n                  <div class=\"form-group\">\n                     <h2 style=\"font-weight:bold\">Survey Name</h2>\n                     <input [readonly]=\"setReadOnly()\" type=\"text\" class=\"form-control\" formControlName=\"surveyName\" placeholder=\"Enter Survey Name\">\n                  </div>\n\n                  <!-- QUESTIONS -->\n                  <div formArrayName=\"questions\">\n                     <div *ngFor=\"let question of survey.controls.questions.controls; let i=index\">\n                           \n                        <div [formGroupName]=\"i\" class=\"feed-element\" style=\"margin-bottom:10px\">\n\n                           <h3> Question {{ i+1}}</h3>\n\n                           <div class=\"row\">\n                              <div class=\"col-lg-3\">\n                                 <div class=\"row\">\n                                    <div class=\"col-lg-12\">\n                                       <small class=\"text-muted\">Question Type</small>\n                                    </div>\n                                 </div>\n                                 <div class=\"row\">\n                                    <div class=\"col-lg-12\">\n                                       <!--TYPE GO HERE-->\n                                       <select formControlName=\"questionType\" class=\"form-control form-control-sm\" required>\n                                          <option value=\"\" disabled selected>Select a question type:</option>\n                                          <option value=\"dropdown\">Dropdown</option>\n                                          <option value=\"checkboxes\">Checkboxes</option>\n                                          <option value=\"mc\">Multiple Choice</option>\n                                          <option value=\"text\">Textbox</option>\n                                       </select>\n                                    </div>\n                                 </div>\n                              </div>\n                              <div class=\"col-lg-9\">\n                                 <button *ngIf=\"survey.controls.questions.length > 1\"  class='pull-right btn btn-lg' (click)='removeQuestion(i)' style='background-color:transparent;'> \n                                    <div>\n                                       <i id=\"btnQuestionRemove\" class=\"fas fa-minus-circle\"></i>\n                                    </div>\n                                 </button>\n                              </div>\n                           </div>\n\n                           <div class=\"row\" style=\"margin-top:10px\">\n                              <div class=\"col-lg-12\">\n                                 <small class=\"text-muted\">Question Prompt</small>\n                                 <!--TEXT BOX GOES HERE-->      \n                                 <div class=\"form-group\">\n                                    <textarea formControlName=\"questionText\" class=\"form-control\" id=\"exampleTextarea\" rows=\"2\" placeholder=\"Enter Question Prompt Here...\"></textarea>\n                                 </div>\n                              </div>\n                           </div>\n\n                           <div class=\"row\" *ngIf=\"showOptionsDiv(question)\"> \n                              <div class=\"col-lg-1\">\n                              </div>\n                              <div class=\"col-lg-5\" > \n                                 <!--OPTIONS GO HERE--> \n                                 <div> <!-- SHOWING OPTIONS-->\n                                    <small class=\"text-muted\">Add Options</small>\n                                    <div formArrayName=\"questionOptions\" *ngFor=\"let option of survey.controls.questions.controls[i].controls.questionOptions.controls; let j=index\">\n                                       <div class=\"row\">\n                                          <div class=\"col-lg-10\">\n                                             <div [formGroupName]=\"j\">\n                                                <div class=\"form-group\">\n                                                   <input type=\"text\" class=\"form-control\" placeholder=\"Enter Option\" formControlName=\"option\">\n                                                </div>   \n                                             </div>\n                                          </div>\n                                          <div class=\"col-lg-2\">\n                                             <span *ngIf=\"question.controls.questionOptions.length > 1\" (click)=\"removeOption(question, j)\"><i class=\"fas fa-trash-alt\"></i></span>\n                                          </div>\n                                       </div>\n                                       <button type=\"button\" class=\"btn btn-success btn-sm pull-right\" *ngIf=\"j == question.controls.questionOptions.length-1\" (click)=\"addOption(question)\" style=\"float: right\"><i class=\"fa fa-plus-circle\"></i> Add Option</button>\n                                    </div>\n                                 </div>\n                              </div>\n                           </div>\n\n                           <div class=\"row\">\n                              <div class=\"col-lg-12\">\n                                 <button  class='pull-right btn btn-lg' (click)='addQuestion(i)' style='background-color:transparent;'>\n                                    <div>\n                                       <i id=\"btnQuestionAdd\" class=\"fa fa-plus-circle\"></i>\n                                    </div>\n                                 </button>\n                              </div>\n                           </div>\n                        \n                        \n                        </div> <!--END OF FEED ELEMENT DIV-  -->\n\n\n                     </div> <!--END OF nfFor DIV-->\n\n                  </div> <!--END OF Form Array for Questions Div-->\n               \n               </form>\n\n            </div>\n            <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">Save Survey</button>\n         </div>\n\n       \n\n      </div>\n\n      <div class=\"col-lg-1\">\n      </div>\n\n   </div>\n\n</div>"

/***/ })

});
//# sourceMappingURL=5.chunk.js.map