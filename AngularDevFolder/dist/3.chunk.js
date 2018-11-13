webpackJsonp([3,11],{

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_component__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_routes__ = __webpack_require__(389);
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
    })
], EditModule);

//# sourceMappingURL=edit.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(107);
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


var EditComponent = (function () {
    function EditComponent(_fb) {
        this._fb = _fb;
    }
    EditComponent.prototype.ngOnInit = function () {
        this.survey = this._fb.group({
            surveyName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](''),
            questions: this._fb.array([
                this.initQuestion(),
            ])
        });
    };
    EditComponent.prototype.initQuestion = function () {
        return this._fb.group({
            questionText: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](''),
            questionType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](''),
            questionOptions: this._fb.array([
                this.initOption()
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
            case "Dropdown":
                ret = true;
                break;
            case "Checkboxes":
                ret = true;
                break;
            case "Multiple Choice":
                ret = true;
                break;
            case "Short Answer":
                ret = false;
                break;
            case "Paragraph":
                ret = false;
                break;
            case "5 Star Rating":
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'app-edit',
        template: __webpack_require__(446),
        styles: [__webpack_require__(441)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object])
], EditComponent);

var _a;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_component__ = __webpack_require__(258);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editRoutes; });

var editRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__edit_component__["a" /* EditComponent */]
    },
];
//# sourceMappingURL=edit.routes.js.map

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "#btnQuestionAdd {\n   color: green;\n}\n\n#btnQuestionRemove {\n   color: #eb494e\n}\n\na:hover { \n   background-color: yellow;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\n   <div class=\"col-lg-1\">\n   </div>\n\n   <div class=\"col-lg-10\">\n      <div class=\"ibox-content\">\n         <div class=\"feed-activity-list\">\n            \n            <form [formGroup]=\"survey\" novalidate (ngSubmit)=\"save(survey)\">\n            \n               <div class=\"form-group\">\n                  <label>Survey Name</label>\n                  <input type=\"text\" class=\"form-control\" formControlName=\"surveyName\">\n               </div>\n\n               <!-- QUESTIONS -->\n               <div formArrayName=\"questions\">\n                  <div *ngFor=\"let question of survey.controls.questions.controls; let i=index\">\n                        \n                     <div [formGroupName]=\"i\" class=\"feed-element\" style=\"margin-bottom:10px\">\n\n                        <h3>Question {{ i+1}}</h3>\n\n                        <div class=\"row\">\n                           <div class=\"col-lg-3\">\n                              <div class=\"row\">\n                                 <div class=\"col-lg-12\">\n                                    <small class=\"text-muted\">Answer Type</small>\n                                 </div>\n                              </div>\n                              <div class=\"row\">\n                                 <div class=\"col-lg-12\">\n                                    <!--TYPE GO HERE-->\n                                    <select formControlName=\"questionType\" class=\"form-control form-control-sm\" required>\n                                       <option>Dropdown</option>\n                                       <option>Checkboxes</option>\n                                       <option>Multiple Choice</option>\n                                       <option>Short Answer</option>\n                                       <option>Paragraph</option>\n                                       <option>5 Star Rating</option>\n                                    </select>\n                                 </div>\n                              </div>\n                           </div>\n                           <div class=\"col-lg-9\">\n                              <button *ngIf=\"survey.controls.questions.length > 1\"  class='pull-right btn btn-lg' (click)='removeQuestion(i)' style='background-color:transparent;'> \n                                 <div>\n                                    <i id=\"btnQuestionRemove\" class=\"fas fa-minus-circle\"></i>\n                                 </div>\n                              </button>\n                           </div>\n                        </div>\n\n                        <div class=\"row\" style=\"margin-top:10px\">\n                           <div class=\"col-lg-12\">\n                              <small class=\"text-muted\">Question Prompt</small>\n                              <!--TEXT BOX GOES HERE-->      \n                              <div class=\"form-group\">\n                                 <textarea formControlName=\"questionText\" class=\"form-control\" id=\"exampleTextarea\" rows=\"2\" placeholder=\"Enter Question Prompt Here...\"></textarea>\n                              </div>\n                           </div>\n                        </div>\n\n                        <div class=\"row\" *ngIf=\"showOptionsDiv(question)\"> \n                           <div class=\"col-lg-1\">\n                           </div>\n                           <div class=\"col-lg-5\" > \n                              <!--OPTIONS GO HERE--> \n                              <div> <!-- SHOWING OPTIONS-->\n                                 <label>Options</label>\n                                 <div formArrayName=\"questionOptions\" *ngFor=\"let option of survey.controls.questions.controls[i].controls.questionOptions.controls; let j=index\">\n                                    <div class=\"row\">\n                                       <div class=\"col-lg-10\">\n                                          <div [formGroupName]=\"j\">\n                                             <div class=\"form-group\">\n                                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Option\" formControlName=\"option\">\n                                             </div>   \n                                          </div>\n                                       </div>\n                                       <div class=\"col-lg-2\">\n                                          <span *ngIf=\"question.controls.questionOptions.length > 1\" (click)=\"removeOption(question, j)\"><i class=\"fas fa-trash-alt\"></i></span>\n                                       </div>\n                                    </div>\n                                    <button type=\"button\" class=\"btn btn-success btn-sm pull-right\" *ngIf=\"j == question.controls.questionOptions.length-1\" (click)=\"addOption(question)\" style=\"float: right\"><i class=\"fa fa-plus-circle\"></i> Add Option</button>\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n\n                        <div class=\"row\">\n                           <div class=\"col-lg-12\">\n                              <button  class='pull-right btn btn-lg' \n                                       (click)='addQuestion(i)' \n                                       style='background-color:transparent;'>\n                                 <div>\n                                    <i id=\"btnQuestionAdd\" class=\"fa fa-plus-circle\"></i>\n                                 </div>\n                              </button>\n                           </div>\n                        </div>\n                     \n                     \n                     </div> <!--END OF FEED ELEMENT DIV-  -->\n\n\n                  </div> <!--END OF nfFor DIV-->\n\n               </div> <!--END OF Form Array for Questions Div-->\n            \n            </form>\n\n         </div>\n         <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">Save Survey</button>\n      </div>\n\n      <pre>Form Value: <br>{{survey.value | json}}</pre> \n\n   </div>\n\n   <div class=\"col-lg-1\">\n   </div>\n\n</div>"

/***/ })

});
//# sourceMappingURL=3.chunk.js.map