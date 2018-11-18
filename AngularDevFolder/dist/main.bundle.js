webpackJsonp([1,5],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]({
        'Content-Type': 'application/json',
    })
};
var SurveyService = (function () {
    /*httpOptions: any = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };*/
    function SurveyService(http) {
        this.http = http;
    }
    SurveyService.prototype.getSurveys = function () {
        return this.http.get('http://localhost:3000/api/surveys');
    };
    SurveyService.prototype.getSurveyQuestions = function (survey_id) {
        return this.http.get('http://localhost:3000/api/surveyQuestions/' + survey_id);
    };
    SurveyService.prototype.getSurveyOptions = function (survey_name) {
        return this.http.get('http://localhost:3000/api/surveyOptions/' + survey_name);
    };
    SurveyService.prototype.getSurveyResponses = function (survey_name) {
        return this.http.get('http://localhost:3000/api/surveyResponses/' + survey_name);
    };
    SurveyService.prototype.postSurveyResponse = function (response) {
        return this.http.post('http://localhost:3000/api/postSurveyResponse', JSON.stringify(response), httpOptions);
    };
    SurveyService.prototype.postNewSurvey = function (surveys) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
            .set('surveys', surveys);
        return this.http.post('http://localhost:3000/api/newSurvey', surveys);
    };
    SurveyService.prototype.updateSurveyQuestions = function (updates) {
        return this.http.post('http://localhost:3000/api/updateSurveyQuestions', updates);
    };
    SurveyService.prototype.updateSurveyOptions = function (updates) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
            .set('updates', updates);
        return this.http.post('http://localhost:3000/api/newSurveyOptions', { params: params });
    };
    SurveyService.prototype.insertSurveyQuestions = function (updates) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]()
            .set('updates', updates);
        return this.http.post('http://localhost:3000/api/insertSurveyQuestion', { params: params });
    };
    SurveyService.prototype.postSurveyID = function (survey_name) {
        return this.http.post('http://localhost:3000/api/postSurveyID', survey_name, httpOptions);
    };
    SurveyService.prototype.getSurveyID = function () {
        return this.http.get('http://localhost:3000/api/getSurveyID');
    };
    SurveyService.prototype.postQuestionID = function (question) {
        return this.http.post('http://localhost:3000/api/postQuestionID', question, httpOptions);
    };
    SurveyService.prototype.getQuestionLength = function () {
        return this.http.get('http://localhost:3000/api/getQuestionLength');
    };
    SurveyService.prototype.getOptionLength = function () {
        return this.http.get('http://localhost:3000/api/getOptionLength');
    };
    SurveyService.prototype.getSurveyLength = function () {
        return this.http.get('http://localhost:3000/api/getSurveyLength');
    };
    SurveyService.prototype.postOptionID = function (option) {
        return this.http.post('http://localhost:3000/api/postOptionID', option, httpOptions);
    };
    SurveyService.prototype.getOptionID = function () {
        return this.http.get('http://localhost:3000/api/getOptionID');
    };
    SurveyService.prototype.postArchitectures = function (surveyComponent) {
        return this.http.post('http://localhost:3000/api/postArchitectures', surveyComponent, httpOptions);
    };
    SurveyService.prototype.updateSurveyQuestion = function (question) {
        return this.http.put('http://localhost:3000/api/updateSurveyQuestion', question, httpOptions);
    };
    SurveyService.prototype.updateSurveyOption = function (option) {
        return this.http.put('http://localhost:3000/api/updateSurveyOption', option, httpOptions);
    };
    return SurveyService;
}());
SurveyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpClient */]) === "function" && _a || Object])
], SurveyService);

var _a;
//# sourceMappingURL=survey.service.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.data = [];
    }
    ContactComponent.prototype.onSubmit = function (end) {
        this.data.push(end.value);
        console.log(this.data[0]);
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(635),
        styles: [__webpack_require__(590)],
    })
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(35);
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
    function EditComponent(_fb, globals) {
        this._fb = _fb;
        this.globals = globals;
    }
    ;
    // initilaize a new blank survey form
    EditComponent.prototype.ngOnInit = function () {
        this.newSurveyForm();
    };
    // sets the survey name to readonly based on the edit global
    EditComponent.prototype.setReadOnly = function () {
        return this.nameReadOnly;
    };
    // sets the survey form to a blank survey
    EditComponent.prototype.newSurveyForm = function () {
        this.survey = this._fb.group({
            surveyName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            questions: this._fb.array([
                this.initQuestion(),
            ])
        });
        this.nameReadOnly = false;
        jQuery("#surveySelect").val(-1);
    };
    // Used to update the formgroup from a given survey id
    EditComponent.prototype.updateSurveyFormData = function (survey_id) {
        var currSurvey;
        this.nameReadOnly = true;
        // loop through the surveys and set the current one to the one that mathches the id
        this.globals.surveys.forEach(function (s) {
            currSurvey = s.survey_id == survey_id ? s : currSurvey;
        });
        // populate the survey form with proper data
        this.survey = this._fb.group({
            surveyName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](currSurvey.survey_name),
            questions: this._fb.array([])
        });
        // patch the questions nested array value with the new questions
        this.patchFormQuestions(currSurvey.questions);
    };
    // used to update the questions of the form group qustions array
    EditComponent.prototype.patchFormQuestions = function (questions) {
        var _this = this;
        var control = this.survey.controls['questions'];
        questions.forEach(function (q) {
            if (q.question_active) {
                control.push(_this._fb.group({
                    questionText: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](q.question_text),
                    questionType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](q.question_type),
                    questionOptions: _this.patchFormOptions(q.options)
                }));
            }
        });
    };
    // used to update the options of the nested form group options array
    EditComponent.prototype.patchFormOptions = function (options) {
        var _this = this;
        var ops = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormArray */]([]);
        options.forEach(function (o) {
            ops.push(_this._fb.group({
                option: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](o.option_text)
            }));
        });
        return ops;
    };
    // create a new blank question
    EditComponent.prototype.initQuestion = function () {
        return this._fb.group({
            questionText: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            questionType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            questionOptions: this._fb.array([
                this.initOption(),
            ])
        });
    };
    // create a new blank option
    EditComponent.prototype.initOption = function () {
        return this._fb.group({
            option: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('')
        });
    };
    // add question to the form group array at the given index
    EditComponent.prototype.addQuestion = function (idx) {
        var control = this.survey.controls['questions'];
        control.insert(idx + 1, this.initQuestion());
    };
    // remove question from the form group array at the given index
    EditComponent.prototype.removeQuestion = function (idx) {
        var control = this.survey.controls['questions'];
        control.removeAt(idx);
    };
    // add option to the form group array at the given index
    EditComponent.prototype.addOption = function (question) {
        var control = question.controls.questionOptions;
        control.push(this.initOption());
    };
    // remove option from the form group array at the given index
    EditComponent.prototype.removeOption = function (question, j) {
        var control = question.controls.questionOptions;
        control.removeAt(j);
    };
    // checks the question type and returns boolean to display the options div
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(636),
        styles: [__webpack_require__(591)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* Globals */]) === "function" && _b || Object])
], EditComponent);

var _a, _b;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(35);
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
        // set the current survey to the first survey in the  globals
        this.currSurvey = this.globals.surveys[0];
        // update the date value select to be the date created of the survey
        this.updateDate(this.currSurvey.date_created);
        // set the data feed to -1 which is all questions
        this.updateDataFeed(-1);
    };
    // set the date filter global from the survey
    ExportRawComponent.prototype.updateDate = function (date) {
        this.dateFilter = date;
    };
    // set the current survey from the given id 
    ExportRawComponent.prototype.updateSurvey = function (id) {
        this.currSurvey = this.globals.surveys[id];
        // get questions from the current survey
        this.getQuestions();
        // update feed to -1 which is all questions
        this.updateDataFeed(-1);
    };
    // get all the questions of th current survey, filtering out the inactive ones
    ExportRawComponent.prototype.getQuestions = function () {
        return this.currSurvey.questions.filter(function (question) {
            return question.question_active === true;
        });
    };
    // updates the datafeed from a given question
    ExportRawComponent.prototype.updateDataFeed = function (question_id) {
        var _this = this;
        // clear the datafeed.
        this.dataFeed = [];
        // if the question = -1 then get all questions from the survey
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
    // download the feed table as a CSV
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
    // export the table to format for download
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-exportRaw',
        styles: [__webpack_require__(592)],
        template: __webpack_require__(637),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */]) === "function" && _a || Object])
], ExportRawComponent);

var _a;
//# sourceMappingURL=exportRaw.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_graph_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GraphsComponent = (function () {
    function GraphsComponent(graphService, globals, fb) {
        this.graphService = graphService;
        this.globals = globals;
        this.fb = fb;
        // global to track which switch for the dataset
        this.currentDatasetType = 'single';
        // chart object
        this.chart = null;
    }
    ;
    GraphsComponent.prototype.ngOnInit = function () {
        // init the chart form
        this.initChartForm();
        // init the options form
        this.initOptionsForm();
        // grab the updated selected options
        this.updateSelectedOptions();
    };
    // after the HTML has loaded, init graph elements
    GraphsComponent.prototype.ngAfterViewInit = function () {
        this.canvas = document.getElementById('graphCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.updateChart();
    };
    ;
    // init chart form
    GraphsComponent.prototype.initChartForm = function () {
        this.chartForm = this.fb.group({
            chartType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('pie'),
            surveyId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('0'),
            questionId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('0'),
            subQuestionId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('1')
        });
    };
    // set the single state button to disabled or not disabled
    GraphsComponent.prototype.buttonStateSingle = function () {
        return this.currentDatasetType == 'single' ? true : false;
    };
    // set the multiple state button to disabled or not disabled
    GraphsComponent.prototype.buttonStateMultiple = function () {
        return this.currentDatasetType == 'multiple' ? true : false;
    };
    // init the options with the subquestion id appropiately 
    GraphsComponent.prototype.initOptionsForm = function () {
        var controls = this.getSubQuestionOptions().map(function (o) { return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](false); });
        controls[0].setValue(true); // Set the first checkbox to true (checked)
        this.optionsForm = this.fb.group({
            options: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormArray */](controls)
        });
    };
    // map the dataset for an individual dataset graph
    GraphsComponent.prototype.mapSingleData = function () {
        var _this = this;
        var map = new Map();
        var survey = this.globals.surveys[this.chartForm.controls.surveyId.value];
        survey.questions.forEach(function (question) {
            // for each question, if the question id equals the one in the select value
            if (question.question_id == _this.chartForm.controls.questionId.value) {
                // for each response of the question
                question.responses.forEach(function (r) {
                    // if the dataset has the response text/answer: get the count and increase and set back
                    if (map.has(r.response_text)) {
                        var count = map.get(r.response_text);
                        // increment count by 1
                        count += 1;
                        map.set(r.response_text, count);
                    }
                    else {
                        map.set(r.response_text, 1);
                    }
                });
            }
        });
        return map;
    };
    // used when a change happens to update the chart
    GraphsComponent.prototype.updateChart = function () {
        // if the switch is on single, destroy the chart, get the new data, build it using graph service
        if (this.currentDatasetType === 'single') {
            var map = void 0;
            this.destroyChart();
            map = this.mapSingleData();
            this.buildChart(this.graphService.createSingleChart(this.ctx, this.chartForm.controls.chartType.value, map));
        }
        else {
            this.updateSelectedOptions();
            console.log("Matrix selected");
            this.destroyChart();
            var c = this.graphService.createMatrixChart(this.ctx, this.chartForm.controls.chartType.value, this.matrixGraphData());
            this.buildChart(c);
        }
    };
    GraphsComponent.prototype.mapTopLevelFilter = function () {
        var _this = this;
        var responseMap = new Map();
        this.globals.surveys[this.chartForm.controls.surveyId.value].questions.forEach(function (q) {
            if (q.question_id == _this.chartForm.controls.questionId.value) {
                q.responses.map(function (r) { return responseMap.set(r.hash_id, r.response_text); });
            }
        });
        return responseMap;
    };
    /** Matrix label map */
    GraphsComponent.prototype.initMatrixLabelsMap = function () {
        var _this = this;
        var labelMap = new Map();
        this.globals.surveys[this.chartForm.controls.surveyId.value].questions.forEach(function (q) {
            if (q.question_id == _this.chartForm.controls.questionId.value) {
                // on every option, if the option is active, add to the label map, if not active then nothing happens
                q.options.map(function (o) { return o.option_active ? labelMap.set(o.option_text, 0) : null; });
            }
        });
        return labelMap;
    };
    GraphsComponent.prototype.mapMatrixDataSets = function () {
        var _this = this;
        var questionMap = this.mapTopLevelFilter();
        var datasets = new Array();
        // go through the checkboxes that are selected
        this.selectedOptions.forEach(function (o, index) {
            // dsMap contains all the top question options labels with values 0
            var dsMap = _this.initMatrixLabelsMap();
            // Sub question responses loop
            _this.globals.surveys[_this.chartForm.controls.surveyId.value].questions.forEach(function (sq) {
                if (sq.question_id == _this.chartForm.controls.subQuestionId.value) {
                    // loop through all the sub question responses
                    sq.responses.forEach(function (r) {
                        // question map has hash id key of this response
                        if (questionMap.has(r.hash_id)) {
                            // key for new 'map'
                            var k = questionMap.get(r.hash_id);
                            // if the resonse text equals the option then it coorelates
                            if (r.response_text == o) {
                                // make sure that the dataset map has the key
                                if (dsMap.has(k)) {
                                    // get count in dataset map
                                    var count = dsMap.get(k);
                                    // increment count of coorelated data by 1
                                    count += 1;
                                    // set new count
                                    dsMap.set(k, count);
                                }
                            }
                        }
                    });
                }
            });
            // push the dataset values
            datasets.push({
                label: o,
                data: Array.from(dsMap.values()),
                backgroundColor: _this.graphService.getColorByIndex(index)
            });
        });
        return datasets;
    };
    // pulls together the above functions to set the labels and datasets for the matrix graph
    GraphsComponent.prototype.matrixGraphData = function () {
        return {
            labels: Array.from(this.initMatrixLabelsMap().keys()),
            datasets: this.mapMatrixDataSets()
        };
    };
    // update the dataset switch to single or multiple
    GraphsComponent.prototype.updateMultipleDataSetForm = function (val) {
        this.currentDatasetType = val;
    };
    // get the options of the sub questions with active options
    GraphsComponent.prototype.getSubQuestionOptions = function () {
        var sid = this.chartForm.controls.surveyId.value;
        var qid = this.chartForm.controls.subQuestionId.value;
        var opsReturn;
        this.globals.surveys[sid].questions.forEach(function (q) {
            if (q.question_id == qid) {
                opsReturn = q.options
                    .filter(function (option) { return option.option_active === true; });
            }
        });
        return opsReturn;
    };
    // build the chart from the Chart data and update it on the canvas
    GraphsComponent.prototype.buildChart = function (chartData) {
        this.chart = chartData;
        this.chart.update();
    };
    // destroy the chart if it is not null
    GraphsComponent.prototype.destroyChart = function () {
        if (this.chart != null) {
            this.chart.destroy();
        }
    };
    // use graph service to download the chart given an event
    GraphsComponent.prototype.download = function (event) {
        this.graphService.downloadChart(event, 'canvas');
    };
    // update the selected options to only be the checked ones
    GraphsComponent.prototype.updateSelectedOptions = function () {
        var options = this.getSubQuestionOptions();
        this.selectedOptions = this.optionsForm.value.options
            .map(function (v, i) { return v ? options[i].option_text : null; })
            .filter(function (v) { return v !== null; });
    };
    GraphsComponent.prototype.graphOptionsModal = function () {
        jQuery('#myModal').on('shown.bs.modal', function () {
            jQuery('#myInput').trigger('focus');
        });
    };
    return GraphsComponent;
}());
GraphsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-graphs',
        template: __webpack_require__(638),
        styles: [__webpack_require__(593)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_graph_service__["a" /* GraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_graph_service__["a" /* GraphService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* Globals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _c || Object])
], GraphsComponent);

var _a, _b, _c;
//# sourceMappingURL=graphs.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(globals) {
        this.globals = globals;
    }
    ;
    HomeComponent.prototype.ngOnInit = function () {
    };
    // go through the surveys and get the info for the survey details card
    HomeComponent.prototype.getSurveyInfo = function () {
        var surveyDetails = [];
        this.globals.surveys.forEach(function (survey) {
            var submissionCount = 0;
            // get the number of responses on each question of the survey
            survey.questions.map(function (q) { submissionCount += q.responses.length; });
            // push details to array
            surveyDetails.push({
                name: survey.survey_name,
                date: survey.date_created,
                status: survey.is_active,
                // round down the operation of the the total submissions divided by the number of questions, parse to string for formatting
                submissions: Math.round(submissionCount / survey.questions.length).toLocaleString(),
            });
        });
        return surveyDetails;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__(639),
        styles: [__webpack_require__(594)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(35);
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
    function InputComponent(globals) {
        this.globals = globals;
    }
    ;
    InputComponent.prototype.ngOnInit = function () {
        this.survey = this.globals.surveys[0];
    };
    InputComponent.prototype.updateSurvey = function (sid) {
        this.survey = this.globals.surveys[sid];
        console.log(this.survey);
    };
    return InputComponent;
}());
InputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input',
        template: __webpack_require__(640),
        styles: [__webpack_require__(595)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */]) === "function" && _a || Object])
], InputComponent);

var _a;
//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(641),
        styles: [__webpack_require__(596)]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyLandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveyLandingComponent = (function () {
    function SurveyLandingComponent(globals) {
        this.globals = globals;
        this.test = [];
    }
    /*onStart(start: NgForm){
      this.test.push(start.value);
      console.log(this.test[0]);
    }
  */
    SurveyLandingComponent.prototype.surveySelect = function ($event, value) {
        this.selectedVersion = value;
        console.log(this.selectedVersion);
    };
    return SurveyLandingComponent;
}());
SurveyLandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-surveyLanding',
        template: __webpack_require__(642),
        styles: [__webpack_require__(597)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* Globals */]) === "function" && _a || Object])
], SurveyLandingComponent);

var _a;
//# sourceMappingURL=survey-landing.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globals__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_survey_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__survey_landing_survey_landing_component__ = __webpack_require__(176);
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
    // Declare the imports to be used within the component
    function SurveyComponent(globals, surveyService, auth, router, surveyLanding) {
        this.globals = globals;
        this.surveyService = surveyService;
        this.auth = auth;
        this.router = router;
        this.surveyLanding = surveyLanding;
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
    }
    // This constantly checks if the user is authenticated
    SurveyComponent.prototype.ngDoCheck = function () {
        // If authenticated, redirect to the home dashboard
        if (!this.auth.isAuthenticated) {
            this.router.navigate(['home']);
        }
    };
    // When submit button is hit, this will post the survey data to the database
    SurveyComponent.prototype.postOnSubmit = function () {
        // For each response in surveyData, post the surveyData[index] response object
        for (var i = 0; i < this.surveyData.length; i++) {
            this.surveyService.postSurveyResponse(this.surveyData[i]);
        }
        this.router.navigate(['contact']);
    };
    // When next button is clicked, save the selected options to the survey data object
    SurveyComponent.prototype.updateResponses = function (textValue, questionIndex) {
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
            for (var i = 0; i < this.radioChoices.length; i++) {
                response = { survey_id: 0,
                    question_id: 0,
                    option_id: 0,
                    response_text: "" };
                response.survey_id = this.currentSurveyId; // Survey ID
                response.question_id = this.currentSurveyIndex.questions[questionIndex].question_id; // Question ID
                response.option_id = this.radioChoices[i]; // Option ID
                response.response_text = this.getResponseText(this.radioChoices[i], questionIndex); // Response text
                console.log("pushing to surveyData: " + this.radioChoices[i]);
                // Push to survey data array
                this.surveyData.push(response);
                console.log("survey data after push: " + this.surveyData[i]);
            }
            // Empty/initialize the radioChoices array
            //this.radioChoices = [];
            // If question type is text (open-ended), set option id to 1
        }
        else if (this.currentSurveyIndex.questions[questionIndex].question_type == "text") {
            response.survey_id = this.currentSurveyId; // Survey ID
            response.question_id = this.currentSurveyIndex.questions[questionIndex].question_id; // Question ID
            response.option_id = 1; // Option ID
            response.response_text = textValue; // Response text
            //console.log(textValue);
            this.surveyData.push(response);
        }
        console.log(this.surveyData);
    };
    // This is called to find the selected options within the HTML
    SurveyComponent.prototype.setSelectedOption = function (event, value, questionType) {
        // If question type is dropdown or multiple choice, there is only 1 selected value
        if (questionType == "dd" || questionType == "mc") {
            this.selectedOption = value;
            // If question type is checkbox, there is 1+ options
        }
        else if (questionType == "cb") {
            // event is the clicked HTML element
            if (event) {
                // If checked, add it to the radioChoice array
                if (event.target.checked) {
                    this.radioChoices.push(value);
                    // If unchecked, remove it from the radioChoice array
                }
                else {
                    // Iterate through the radio choices to see which matches the value
                    for (var i = 0; i < this.radioChoices.length; i++) {
                        // If it matches, remove it from radioChoice array
                        if (this.radioChoices[i] == value) {
                            this.radioChoices.splice(i, 1);
                        }
                    }
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
    SurveyComponent.prototype.removeResponse = function (questionIndex, currentPage) {
        if (this.currentSurveyIndex.questions[questionIndex].question_type == "checkboxes") {
            // Pop 1 for each response in surveyData that matches the current question ID
            for (var i = this.surveyData.length - 1; i > 0; i--) {
                if (this.surveyData[i].question_id == this.currentSurveyIndex.questions[questionIndex].question_id) {
                    this.surveyData.pop();
                }
            }
            console.log(this.surveyData);
            // If question type is text (open-ended), multiple choice, or dropdown/select, pop 1
        }
        else {
            this.surveyData.pop();
        }
    };
    return SurveyComponent;
}());
SurveyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-survey',
        template: __webpack_require__(643),
        styles: [__webpack_require__(598)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
        providers: [__WEBPACK_IMPORTED_MODULE_5__survey_landing_survey_landing_component__["a" /* SurveyLandingComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__globals__["a" /* Globals */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_survey_service__["a" /* SurveyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_survey_service__["a" /* SurveyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__survey_landing_survey_landing_component__["a" /* SurveyLandingComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__survey_landing_survey_landing_component__["a" /* SurveyLandingComponent */]) === "function" && _e || Object])
], SurveyComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=survey.component.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GraphService = (function () {
    function GraphService() {
        this.graphTypes = [
            { val: 'pie', view: 'Pie' },
            { val: 'bar', view: 'Bar' },
            { val: 'doughnut', view: 'Doughnut' },
            { val: 'polarArea', view: 'Polar Area' },
            { val: 'line', view: 'Line' },
            { val: 'radar', view: 'Radar' },
        ];
        this.colors = [
            'rgba(054, 162, 235, 1)',
            'rgba(255, 099, 132, 1)',
            'rgba(255, 206, 086, 1)',
            'rgba(075, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 064, 1)',
            'rgba(046, 139, 087, 1)',
            'rgba(082, 139, 139, 1)',
            'rgba(070, 130, 180, 1)',
            'rgba(147, 112, 219, 1)',
            'rgba(205, 092, 092, 1)',
            'rgba(219, 112, 219, 1)',
            'rgba(255, 231, 186, 1)',
            'rgba(178, 223, 238, 1)',
            'rgba(072, 209, 204, 1)',
            'rgba(238, 180, 180, 1)',
            'rgba(153, 050, 204, 1)',
            'rgba(102, 205, 170, 1)',
            'rgba(230, 238, 000, 1)',
            'rgba(255, 193, 037, 1)',
            'rgba(000, 178, 238, 1)',
            'rgba(255, 159, 064, 1)',
            'rgba(230, 207, 161, 1)',
            'rgba(205, 197, 191, 1)',
            'rgba(202, 255, 112, 1)',
            'rgba(255, 127, 080, 1)',
            'rgba(205, 051, 051, 1)',
            'rgba(255, 127, 000, 1)',
            'rgba(255, 174, 185, 1)'
        ];
        this.linearChartOptions = {
            responsive: false,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.radialChartOptions = {
            responsive: false,
        };
    }
    GraphService.prototype.createSingleChart = function (context, chartType, map) {
        return new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](context, {
            type: chartType,
            data: {
                labels: Array.from(map.keys()),
                datasets: [{
                        label: 'Total',
                        data: Array.from(map.values()),
                        backgroundColor: this.getColors()
                    }]
            },
            options: this.getOptions(chartType)
        });
    };
    GraphService.prototype.createMatrixChart = function (context, chartType, matrixData) {
        return new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](context, {
            type: chartType,
            data: matrixData,
            options: this.getOptions(chartType)
        });
    };
    GraphService.prototype.getGraphTypes = function () {
        return this.graphTypes;
    };
    GraphService.prototype.getColors = function () {
        return this.colors;
    };
    GraphService.prototype.getColorByIndex = function (i) {
        if (i > this.colors.length) {
            console.log("color out of bounds");
            return null;
        }
        else {
            return this.colors[i];
        }
    };
    GraphService.prototype.getOptions = function (chartType) {
        if (chartType == 'bar' || chartType == 'line')
            return this.linearChartOptions;
        else
            return this.radialChartOptions;
    };
    GraphService.prototype.downloadChart = function (event, canvas) {
        var anchor = event.target;
        var can = document.getElementsByTagName(canvas)[0];
        anchor.href = can.toDataURL("image/png");
        anchor.download = "Graph.png";
    };
    return GraphService;
}());
GraphService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], GraphService);

//# sourceMappingURL=graph.service.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Globals);

//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 391;


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(418);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); }); // Added by Survey builder. be cautious
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_survey_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Responses = [{ survey_id: 1, question_id: 1, option_id: 1, response_text: "OMFG DUDE" },
    { survey_id: 1, question_id: 1, option_id: 2, response_text: "Support clients/assist in identifying and accessing services" },
    { survey_id: 1, question_id: 1, option_id: 2, response_text: "Support clients/assist in identifying and accessing services" },
    { survey_id: 1, question_id: 1, option_id: 2, response_text: "Support clients/assist in identifying and accessing services" },
    { survey_id: 1, question_id: 1, option_id: 2, response_text: "Support clients/assist in identifying and accessing services" }];
var Surveys = [{ survey_id: 2, question_id: 1, question_num: 1, question_text: "What services do you need?", question_is_active: "true", question_type: "checkbox", option_id: 1, option_num: 1, option_text: "money", option_is_active: "true" },
    { survey_id: 2, question_id: 2, question_num: 2, question_text: "What city are you from?", question_type: "select", option_id: 2, option_num: 1, option_text: "Beacon", option_is_active: "true" },
    { survey_id: 2, question_id: 3, question_num: 3, question_text: "Additional comments:", question_type: "text", option_id: 3, option_num: 1, option_text: "nope", option_is_active: "true" },
    { survey_id: 2, question_id: 4, question_num: 4, question_text: "How can this survey be better?", question_type: "text", option_id: 4, option_num: 1, option_text: "by being over", option_is_active: "true" },
    { survey_id: 2, question_id: 5, question_num: 5, question_text: "In a few words, describe capping:", question_type: "text", option_id: 5, option_num: 1, option_text: "a class you must take to graduate and gain experience", option_is_active: "true" }];
var Updates = [{ survey_id: 2, question_id: 1, question_num: 1, question_text: "What services do you need?", question_is_active: "true", question_type: "checkbox", option_id: 1, option_num: 1, option_text: "money", option_is_active: "true" },
    { survey_id: 2, question_id: 2, question_num: 2, question_text: "What city are you from?", question_type: "select", option_id: 2, option_num: 1, option_text: "Beacon", option_is_active: "true" },
    { survey_id: 2, question_id: 3, question_num: 3, question_text: "Additional comments:", question_type: "text", option_id: 3, option_num: 1, option_text: "nope", option_is_active: "true" },
    { survey_id: 2, question_id: 4, question_num: 4, question_text: "How can this survey be better?", question_type: "text", option_id: 4, option_num: 1, option_text: "by being over", option_is_active: "true" },
    { survey_id: 2, question_id: 5, question_num: 5, question_text: "In a few words, describe capping:", question_type: "text", option_id: 5, option_num: 1, option_text: "a class you must take to graduate and gain experience", option_is_active: "true" }];
var FormValues = {
    SurveyName: "Lindas Survey",
    questions: [
        {
            questionText: "What is your favorite City?",
            questionType: "mc",
            questionOptions: [
                {
                    option: "New York City"
                },
                {
                    option: "Boston"
                },
                {
                    option: "Washington"
                },
                {
                    option: "Miami"
                },
                {
                    option: "Poughkeepsie"
                }
            ]
        },
        {
            questionText: "Select the services that ou need: ",
            questionType: "checkboxes",
            questionOptions: [
                {
                    option: "More Money"
                },
                {
                    option: "More Time"
                },
                {
                    option: "More Clothes"
                },
                {
                    option: "Less Capping Work"
                }
            ]
        }
    ]
};
var FormValues1 = {
    SurveyID: 1,
    SurveyName: "Lindas Survey",
    questions: [
        {
            questionID: 5,
            questionText: "What is your favorite City?",
            questionIsActive: true,
            questionType: "mc",
            questionOptions: [
                {
                    optionID: 5,
                    option: "New York City",
                    option_is_active: true
                },
                {
                    optionID: 7,
                    option: "Boston",
                    option_is_active: true
                },
                {
                    optionID: 8,
                    option: "Washington",
                    option_is_active: true
                },
                {
                    optionID: "",
                    option: "Miami",
                    option_is_active: true
                },
                {
                    optionID: 10,
                    option: "Poughkeepsie",
                    option_is_active: true
                }
            ]
        },
        {
            questionID: "",
            questionText: "Select the services that ou need: ",
            questionIsActive: true,
            questionType: "checkboxes",
            questionOptions: [
                {
                    optionID: 1,
                    option: "More Money",
                    option_is_active: true
                },
                {
                    optionID: 2,
                    option: "More Time",
                    option_is_active: false
                },
                {
                    optionID: 3,
                    option: "More Clothes",
                    option_is_active: true
                },
                {
                    optionID: "",
                    option: "Less Capping Work",
                    option_is_active: true
                }
            ]
        }
    ]
};
function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}
var AppComponent = (function () {
    function AppComponent(surveyService, globals) {
        this.surveyService = surveyService;
        this.globals = globals;
    }
    AppComponent.prototype.ngOnInit = function () {
        /* this.surveyService.getSurveys().subscribe((response) => {
           for (let i = 0; i < response.length; i++) {
             let survey = {
               "survey_id": response[i].survey_id,
               "survey_name": response[i].survey_name,
               "date_taken": response[i].date_taken
             };
     
             this.globals.surveys.push(survey);
             console.log(this.globals.surveys);
           }
         }, (error) => {
           console.log('error is ', error)
           })*/
        var _this = this;
        this.surveyService.getSurveyQuestions('1').subscribe(function (response) {
            for (var j = 0; j < _this.globals.surveys.length; j++) {
                for (var i = 0; i < response.length; i++) {
                    var qArray = {
                        "question_id": response[i].question_id,
                        "question_text": response[i].question_text,
                        "question_type": response[i].question_type,
                        "question_is_active": response[i].question_is_active
                    };
                    if (_this.globals.surveys[j].survey_id == 1) {
                        _this.globals.surveys[j].questions.push(qArray);
                        console.log(_this.globals.surveys[j].questions);
                    }
                }
            }
        }, function (error) {
            console.log('error is ', error);
        });
        /*this.surveyService.getOptions('hi').subscribe((response) => {
          this.surveyService.getSurveyResponses('hi').subscribe((response)=>{
               this.results= [];
               //console.log('response is ', response);
               for (let i = 0; i < response.length; i++) {
       
                 let rArray =
                 {
                  
                
                   "option_id": response[i].option_id,
                   "option_text": response[i].option_text,
                   "option_is_active": response[i].option_is_active,
                   "question_id": response[i].question_id
                 };
                 for (let j = 0; j < surveys.questions.)
                   this.results.push(rArray);
       
               }
               console.log(this.results);
       },(error) => {
               console.log('error is ', error)
            })
    
           /*for(let j =0; j<Responses.length; j++){
           this.surveyService.postSurveyResponse(Responses[j]).subscribe((response)=>{
               this.responses = [];
               //console.log('response is ', response);
               for (let i = 0; i < response.length; i++) {
                  
                 let sArray =
                 {
                   "question_id": response[i].question_id,
                   "survey_id": response[i].survey_id,
                   "option_id": response[i].option_id,
                   "response_text": response[i].response_text
                   }
                     ;
                   this.responses.push(sArray);
                   console.log(this.responses);
               }
               
       },(error) => {
               console.log('error is ', error)
           })
           }
        this.surveyService.getQuestionLength().subscribe((response) => {
          this.questionID = response[0];
          this.surveyService.getOptionLength().subscribe((value) => {
            this.optionID = value[0];
            this.surveyService.getSurveyLength().subscribe((data) => {
              this.surveyID = data[0];
              this.surveyID = this.surveyID + 1;
              let insertSurveyID = { "survey_name": FormValues.SurveyName };
              this.surveyService.postSurveyID(insertSurveyID).subscribe((response) => {
              }, (error) => {
                console.log('error is ', error)
              });
              wait(50);
              for (let j = 0; j < FormValues.questions.length; j++) {
                this.questionID = this.questionID + 1;
                wait(50);
                let insertQuestionsArray = { "question_text": FormValues.questions[j].questionText, "question_type": FormValues.questions[j].questionType };
                wait(50);
                this.surveyService.postQuestionID(insertQuestionsArray).subscribe((response) => {
                }, (error) => {
                  console.log('error is ', error)
                });
                for (let i = 0; i < FormValues.questions[j].questionOptions.length; i++) {
                  this.optionID = this.optionID + 1;
                  let insertOptionIDArray = { "option_text": FormValues.questions[j].questionOptions[i].option, "question_id": this.questionID }
                  wait(50);
                  this.surveyService.postOptionID(insertOptionIDArray).subscribe((response) => {
                  }, (error) => {
                    console.log('error is ', error)
                  });
                  let insertArchitecturesArray = { "survey_id": this.surveyID, "question_id": this.questionID, "option_id": this.optionID };
                  wait(50);
                  this.surveyService.postArchitectures(insertArchitecturesArray).subscribe((response) => {
                  }, (error) => {
                    console.log('error is ', error)
                  })
                }
              }
            }, (error) => {
              console.log('error is ', error)
            })
          }, (error) => {
            console.log('error is ', error)
          })
        }, (error) => {
          console.log('error is ', error)
        })*/
        /* function f(object: some)
         this.surveyService.getQuestionLength().subscribe((response) => {
           this.questionID = response[0];
     
           this.surveyService.getOptionLength().subscribe((value) => {
             this.optionID = value[0];
     
             this.surveyService.getSurveyLength().subscribe((data) => {
               this.surveyID = data[0];
               for (let i = 0; FormValues1.questions.length; i++) {
                 if (FormValues1.questions[i].questionID == "") {
                   this.questionID = this.questionID + 1;
                   let insertUpdateQuestion = { "question_text": FormValues1.questions[i].questionText, "question_type": FormValues1.questions[i].questionType };
                   wait(50);
                   this.surveyService.postQuestionID(insertUpdateQuestion).subscribe((response) => {
                   }, (error) => {
                     console.log('error is ', error)
                   });
                   for (let j = 0; FormValues1.questions[i].questionOptions.length; j++) {
                     this.optionID = this.optionID + 1;
                     let insertUpdateOption = { "option_text": FormValues1.questions[i].questionOptions[j].option, "question_id": this.questionID };
                     this.surveyService.postOptionID(insertUpdateOption).subscribe((response) => {
                     }, (error) => {
                       console.log('error is ', error)
                     });
                     let insertUpdateArchitectures = { "survey_id": FormValues1.SurveyID, "question_id": this.questionID, "option_id": this.optionID };
                     this.surveyService.postArchitectures(insertUpdateArchitectures).subscribe((response) => {
                     }, (error) => {
                       console.log('error is ', error)
                     });
                   }
                 }
                 if (FormValues1.questions[i].questionID != "") {
                   let updateQuestion = {
                     "question_id": FormValues1.questions[i].questionID, "question_text": FormValues1.questions[i].questionText, "question_is_active": FormValues1.questions[i].questionIsActive, "question_type": FormValues1.questions[i].questionType
                   };
                   this.surveyService.updateSurveyQuestion(updateQuestion).subscribe((response) => {
                   }, (error) => {
                     console.log('error is ', error)
                   });
                   for (let j = 0; FormValues1.questions[i].questionOptions.length; j++) {
                     if (FormValues1.questions[i].questionOptions[j].optionID == "") {
                       this.optionID = this.optionID + 1;
                       let insertOption = { "option_text": FormValues1.questions[i].questionOptions[j].option, "question_id": FormValues1.questions[i].questionID };
                       this.surveyService.postOptionID(insertOption).subscribe((response) => {
                       }, (error) => {
                         console.log('error is ', error)
                       });
                       let insertArchitectures = {
                         "survey_id": FormValues1.SurveyID, "question_id": FormValues1.questions[i].questionID, "option_id": this.optionID
                       }
                       this.surveyService.postArchitectures(insertArchitectures).subscribe((response) => {
                       }, (error) => {
                         console.log('error is ', error)
                       });
                     }
                     if (FormValues1.questions[i].questionOptions[j].optionID != "") {
                       let insertOption = { "option_id": FormValues1.questions[i].questionOptions[j].optionID, "option_is_active": FormValues1.questions[i].questionOptions[j].option_is_active };
                       this.surveyService.updateSurveyOption(insertOption).subscribe((response) => {
                       }, (error) => {
                         console.log('error is ', error)
                       });
                     }
                   }
                 }
               }
             }, (error) => {
               console.log('error is ', error)
             })
           }, (error) => {
             console.log('error is ', error)
           })
         }, (error) => {
           console.log('error is ', error)
         })*/
        /*for(let j =0; j <Surveys.length; j++){
        this.surveyService.postSurveyResponses(Su[j]).subscribe((response)=>{
            this.surveys = [];
            //console.log('response is ', response);
            for (let i = 0; i < response.length; i++) {
        
                let lArray =
                {
                "question_id": response[i].question_id,
                  "question_num": response[i].question_num,
                  "question_text": response[i].question_text,
                "question_is_active": response[i].question_is_active,
                "question_type": response[i].question_type,
                "option_id": response[i].option_id,
                "option_num": response[i].option_num,
                "option_text": response[i].option_text,
                "option_is_active": response[i].option_is_active
                
               
              }
                  ;
                this.surveys.push(lArray);
        
            }
            console.log(this.surveys);
        },(error) => {
            console.log('error is ', error)
        })
        }
        
            for (let j = 0; j < Updates.length; j++) {
              if (Updates[j].question_id = '') {
                this.surveyService.insertSurveyQuestions(Updates[j]).subscribe((response) => {
                  this.updates = [];
                  //console.log('response is ', response);
                  for (let i = 0; i < response.length; i++) {
        
                    let mArray =
                    {
                      "question_num": response[i].question_num,
                      "question_text": response[i].question_text,
                      "question_is_active": response[i].question_is_active,
                      "question_type": response[i].question_type,
                      "option_id": response[i].option_id,
                      "option_num": response[i].option_num,
                      "option_text": response[i].option_text,
                      "option_is_active": response[i].option_is_active
                    }
                      ;
                    this.updates.push(mArray);
        
                  }
                  console.log(this.updates);
                }, (error) => {
                  console.log('error is ', error)
                })
              }
              if (Updates[j].question_id != '') {
                this.surveyService.updateSurveyQuestions(Updates[j]).subscribe((response) => {
                  this.updates = [];
                  //console.log('response is ', response);
                  for (let i = 0; i < response.length; i++) {
        
                    let dArray =
                    {
                      "question_id": response[i].question_id,
                      "question_num": response[i].question_num,
                      "question_text": response[i].question_text,
                      "question_is_active": response[i].question_is_active,
                      "question_type": response[i].question_type,
                      "option_id": response[i].option_id,
                      "option_num": response[i].option_num,
                      "option_text": response[i].option_text,
                      "option_is_active": response[i].option_is_active,
                      "response_id": response[i].response_id,
                      "survey_id": response[i].survey_id
                    }
                      ;
                    this.updates.push(dArray);
        
                  }
                  console.log(this.updates);
                }, (error) => {
                  console.log('error is ', error)
                })
              }
            }*/
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(632),
        styles: [__webpack_require__(587)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_survey_service__["a" /* SurveyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_survey_service__["a" /* SurveyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_survey_service__["a" /* SurveyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* Globals */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export correctHeight */
/* unused harmony export detectBody */
/* harmony export (immutable) */ __webpack_exports__["a"] = smoothlyMenu;
/*
 * Inspinia js helpers:
 *
 * correctHeight() - fix the height of main wrapper
 * detectBody() - detect windows size
 * smoothlyMenu() - add smooth fade in/out on navigation show/ide
 *
*/
function correctHeight() {
    var pageWrapper = jQuery('#page-wrapper');
    var navbarHeigh = jQuery('nav.navbar-default').height();
    var wrapperHeigh = pageWrapper.height();
    if (navbarHeigh > wrapperHeigh) {
        pageWrapper.css("min-height", navbarHeigh + "px");
    }
    if (navbarHeigh < wrapperHeigh) {
        if (navbarHeigh < jQuery(window).height()) {
            pageWrapper.css("min-height", jQuery(window).height() + "px");
        }
        else {
            pageWrapper.css("min-height", navbarHeigh + "px");
        }
    }
    if (jQuery('body').hasClass('fixed-nav')) {
        if (navbarHeigh > wrapperHeigh) {
            pageWrapper.css("min-height", navbarHeigh + "px");
        }
        else {
            pageWrapper.css("min-height", jQuery(window).height() - 60 + "px");
        }
    }
}
function detectBody() {
    if (jQuery(document).width() < 769) {
        jQuery('body').addClass('body-small');
    }
    else {
        jQuery('body').removeClass('body-small');
    }
}
function smoothlyMenu() {
    if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        jQuery('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 200);
    }
    else if (jQuery('body').hasClass('fixed-sidebar')) {
        jQuery('#side-menu').hide();
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 100);
    }
    else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        jQuery('#side-menu').removeAttr('style');
    }
}
//# sourceMappingURL=app.helpers.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_topnavbar_topnavbar_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navigation_navigation_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_graphs_graphs_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_survey_survey_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_input_input_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_edit_edit_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_exportRaw_exportRaw_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_not_found_not_found_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_survey_landing_survey_landing_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_survey_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_graph_service__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_authentication_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_auth_guard_service__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_keys_pipe__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_filterQuestionId_pipe__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_filterByOptionActive_pipe__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_filterByDate_pipe__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_filter_pipe__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_filterSurvey_pipe__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_graphableQuestion_pipe__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_exceptQuestionId_pipe__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_filterByQuestionActive_pipe__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__app_routes__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__globals__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular/3rd party imports








// Component imports












// Services/Pipes imports













// Custom imports


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        // Declarations allow all components and pipes to be used through the project
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_topnavbar_topnavbar_component__["a" /* TopnavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_exportRaw_exportRaw_component__["a" /* ExportRawComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_graphs_graphs_component__["a" /* GraphsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_input_input_component__["a" /* InputComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_survey_survey_component__["a" /* SurveyComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_survey_landing_survey_landing_component__["a" /* SurveyLandingComponent */],
            __WEBPACK_IMPORTED_MODULE_24__pipes_keys_pipe__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_26__pipes_filterByOptionActive_pipe__["a" /* FilterByOptionActivePipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes_filterQuestionId_pipe__["a" /* FilterByQuestionIDPipe */],
            __WEBPACK_IMPORTED_MODULE_27__pipes_filterByDate_pipe__["a" /* FilterByDatePipe */],
            __WEBPACK_IMPORTED_MODULE_28__pipes_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_29__pipes_filterSurvey_pipe__["a" /* FilterBySurveyIdPipe */],
            __WEBPACK_IMPORTED_MODULE_15__pages_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_exportRaw_exportRaw_component__["a" /* ExportRawComponent */],
            __WEBPACK_IMPORTED_MODULE_30__pipes_graphableQuestion_pipe__["a" /* GraphableQuestionPipe */],
            __WEBPACK_IMPORTED_MODULE_31__pipes_exceptQuestionId_pipe__["a" /* ExceptQuestionIdPipe */],
            __WEBPACK_IMPORTED_MODULE_32__pipes_filterByQuestionActive_pipe__["a" /* FilterByQuestionActivePipe */],
        ],
        // Imports bring in external modules such as core Angular modules
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_33__app_routes__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */]
        ],
        // Providers allow all components to use the given services
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__services_survey_service__["a" /* SurveyService */],
            __WEBPACK_IMPORTED_MODULE_21__services_graph_service__["a" /* GraphService */],
            __WEBPACK_IMPORTED_MODULE_22__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_23__services_auth_guard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_34__globals__["a" /* Globals */],
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* HashLocationStrategy */] }
        ],
        // Bootstrap is the first component loaded in the project
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_graphs_graphs_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_input_input_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_survey_survey_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_edit_edit_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_exportRaw_exportRaw_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_not_found_not_found_component__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });








// path refers to the end of the url after .org such as www.dutchesscap.org/
var appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__pages_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'graphs',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_graphs_graphs_component__["a" /* GraphsComponent */]
        //canActivate: [AuthGuard]
    },
    {
        path: 'input',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_input_input_component__["a" /* InputComponent */],
    },
    {
        path: 'exportRaw',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_exportRaw_exportRaw_component__["a" /* ExportRawComponent */],
    },
    {
        path: 'edit',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_edit_edit_component__["a" /* EditComponent */],
    },
    {
        path: 'survey',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_survey_survey_component__["a" /* SurveyComponent */],
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact_component__["a" /* ContactComponent */],
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_7__pages_not_found_not_found_component__["a" /* NotFoundComponent */],
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navigation',
        template: __webpack_require__(633),
        styles: [__webpack_require__(588)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopnavbarComponent = (function () {
    // Declare the AuthenticationService so that it's available to this component
    function TopnavbarComponent(auth) {
        this.auth = auth;
    }
    TopnavbarComponent.prototype.toggleNavigation = function () {
        jQuery("body").toggleClass("mini-navbar");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* smoothlyMenu */])();
    };
    return TopnavbarComponent;
}());
TopnavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'topnavbar',
        template: __webpack_require__(634),
        styles: [__webpack_require__(589)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], TopnavbarComponent);

var _a;
//# sourceMappingURL=topnavbar.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExceptQuestionIdPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExceptQuestionIdPipe = (function () {
    function ExceptQuestionIdPipe() {
    }
    ExceptQuestionIdPipe.prototype.transform = function (questions, questionId) {
        if (questions) {
            return questions.filter(function (question) { return question.question_id != questionId; });
        }
    };
    return ExceptQuestionIdPipe;
}());
ExceptQuestionIdPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'ExceptQuestionId'
    })
], ExceptQuestionIdPipe);

//# sourceMappingURL=exceptQuestionId.pipe.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filterByDate'
    })
], FilterByDatePipe);

//# sourceMappingURL=filterByDate.pipe.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'ActiveOptions'
    })
], FilterByOptionActivePipe);

//# sourceMappingURL=filterByOptionActive.pipe.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'ActiveQuestions'
    })
], FilterByQuestionActivePipe);

//# sourceMappingURL=filterByQuestionActive.pipe.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filterByQuestionID'
    })
], FilterByQuestionIDPipe);

//# sourceMappingURL=filterQuestionId.pipe.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filterBySurveyID'
    })
], FilterBySurveyIdPipe);

//# sourceMappingURL=filterSurvey.pipe.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphableQuestionPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GraphableQuestionPipe = (function () {
    function GraphableQuestionPipe() {
    }
    GraphableQuestionPipe.prototype.transform = function (questions) {
        if (questions) {
            return questions.filter(function (question) { return question.question_type != 'text'; });
        }
    };
    return GraphableQuestionPipe;
}());
GraphableQuestionPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'GraphableQuestion'
    })
], GraphableQuestionPipe);

//# sourceMappingURL=graphableQuestion.pipe.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        // check if "routes" exists
        if (value) {
            // create instance vars to store keys and final output
            var keyArr = Object.keys(value), dataArr_1 = [];
            // loop through the object,
            // pushing values to the return array
            keyArr.forEach(function (key) {
                dataArr_1.push(value[key]);
            });
            // return the resulting array
            return dataArr_1;
        }
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys', pure: false })
], KeysPipe);

//# sourceMappingURL=keys.pipe.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "#footer {\n   background-color:white; \n   text-align: center; \n   padding: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".header {\n    color: #36A0FF;\n    font-size: 27px;\n    padding: 10px;\n}\n.header2 {\n    color: #36A0FF;\n    font-size: 15px;\n    padding: 10px;\n    margin-bottom:30px;\n}\n\n.bigicon {\n    font-size: 35px;\n    color: #36A0FF;\n}\n.pagination{\n    text-align:center;\n}\n.container-fluid{\n    width:100%;\n}\n#bucket{\n    margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  float: none;\n  padding-top: 1%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "#btnQuestionAdd {\n    color: green;\n }\n \n #btnQuestionRemove {\n    color: #eb494e\n }\n \n a:hover { \n    background-color: yellow;\n }\n \n .btnBar{\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px;\n }\n \n #surveySelect{\n    width: 300px;\n }\n \n #ctr {\n    margin-left: 13%;\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".colQuestions{\n   width: 35%\n}\n\n.colResponses{\n   width: 53%\n}\n\n.colDates{\n   width: 12%;\n   text-align: right;\n}\n\n.btnExport{\n   margin-top: 23px;\n}\n\n.divSearchRow {\n   margin-bottom: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".filterBlock {\n   margin-top: 30px;\n}\n\n.divExportBtn {\n   margin-top: 60px;\n}\n\n.optionsDiv {\n   margin-top: 10px;\n}\n\n.optionsLabel {\n   padding-left: 10px;\n   margin-bottom: 10px;\n}\n\n.spanOption{\n   margin-left: 15px;\n   font-weight: 400;\n}\n\n.optionsList {\n   margin-top: 10px;\n   list-style: none;\n}\n\n.btnBlock {\n   margin-top: 30px;\n}\n\n#multipleDataSets{\n   margin-bottom: 20px;\n}\n\n.btnGroupSwitch {\n   padding-left:32px; \n   padding-right:32px;\n}\n\n\nli {\n   margin-bottom: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".margin-top-5 {\n   margin-top: 5px;\n}\n\n.margin-top-20 {\n   margin-top: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".spanOption{\n   margin-left: 15px;\n   font-weight: 400;\n}\n\n.spanQuestionText{\n   margin-left:5px\n}\n\n.spanQuestion{\n   font-weight: 600;\n   font-size: 14px;\n}\n\n.btnBar{\n   padding-left: 15px;\n   padding-right: 15px;\n   padding-top: 15px;\n}\n\n#surveySelect{\n   width: 300px;\n}\n\n#ctr {\n   margin-left: 7%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "* {\n    box-sizing: border-box;\n  }\n  \n  body {\n    padding: 0;\n    margin: 0;\n  }\n  \n  #notfound {\n    position: relative;\n    height: 100vh;\n    background-color: #fafbfd;\n  }\n  \n  #notfound .notfound {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n  \n  .notfound {\n    max-width: 520px;\n    width: 100%;\n    text-align: center;\n  }\n  \n  .notfound .notfound-bg {\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    top: 50%;\n    transform: translateY(-50%);\n    z-index: -1;\n  }\n  \n  .notfound .notfound-bg > div {\n    width: 100%;\n    background: #fff;\n    border-radius: 90px;\n    height: 125px;\n  }\n  \n  .notfound .notfound-bg > div:nth-child(1) {\n    box-shadow: 5px 5px 0px 0px #f3f3f3;\n  }\n  \n  .notfound .notfound-bg > div:nth-child(2) {\n    transform: scale(1.3);\n    box-shadow: 5px 5px 0px 0px #f3f3f3;\n    position: relative;\n    z-index: 10;\n  }\n  \n  .notfound .notfound-bg > div:nth-child(3) {\n    box-shadow: 5px 5px 0px 0px #f3f3f3;\n    position: relative;\n    z-index: 90;\n  }\n  \n  .notfound h1 {\n    font-family: 'Quicksand', sans-serif;\n    font-size: 86px;\n    text-transform: uppercase;\n    font-weight: 700;\n    margin-top: 0;\n    margin-bottom: 8px;\n    color: #151515;\n  }\n  \n  .notfound h2 {\n    font-family: 'Quicksand', sans-serif;\n    font-size: 26px;\n    margin: 0;\n    font-weight: 700;\n    color: #151515;\n  }\n  \n  .notfound a {\n    font-family: 'Quicksand', sans-serif;\n    font-size: 14px;\n    text-decoration: none;\n    text-transform: uppercase;\n    background: #18e06f;\n    display: inline-block;\n    padding: 15px 30px;\n    border-radius: 5px;\n    color: #fff;\n    font-weight: 700;\n    margin-top: 20px;\n  }\n  \n  @media only screen and (max-width: 767px) {\n      .notfound .notfound-bg {\n        width: 287px;\n        margin: auto;\n      }\n  \n      .notfound .notfound-bg > div {\n        height: 85px;\n    }\n  }\n  \n  @media only screen and (max-width: 480px) {\n    .notfound h1 {\n      font-size: 68px;\n    }\n  \n    .notfound h2 {\n      font-size: 18px;\n    }\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".header {\n    color: #36A0FF;\n    font-size: 27px;\n    padding: 10px;\n}\n.header2 {\n    color: #36A0FF;\n    font-size: 15px;\n    padding: 10px;\n    margin-bottom:30px;\n}\n\n.bigicon {\n    font-size: 35px;\n    color: #36A0FF;\n}\n.pagination{\n    text-align:center;\n}\n#bucket{\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  float: none;\n  padding-top: 1%;\n}\n.container{\n    height: 90%;\n}\n#btn{\n    margin-top: 1%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".header {\n    color: #36A0FF;\n    font-size: 27px;\n    padding: 10px;\n}\n.header2 {\n    font-size: 20px;\n}\n.pages{\n    margin-left:290px;\n}\n\n.pageNumbers {\n    list-style-type: none;\n    display:inline;\n}\n.custom-pagination{\n    display:inline-block;\n}\n\n.pagination{\n    display: inline;\n}\n.pageNumberActive {\n    color: black;\n    list-style-type: none;\n    display:inline;\n}\n\n.inline {\n    display:inline-block;\n    margin-right:5px;\n}\n.container-fluid{\n    width:100%;\n    \n}\n.container{\n    height: 100%;\n    margin: 0 auto;\n}\n#bucket{ \n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    float: none;\n    padding-top: 1%;\n}\n#dropdownStyle{\n    float: none;\n    margin: auto 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 216,
	"./af.js": 216,
	"./ar": 223,
	"./ar-dz": 217,
	"./ar-dz.js": 217,
	"./ar-kw": 218,
	"./ar-kw.js": 218,
	"./ar-ly": 219,
	"./ar-ly.js": 219,
	"./ar-ma": 220,
	"./ar-ma.js": 220,
	"./ar-sa": 221,
	"./ar-sa.js": 221,
	"./ar-tn": 222,
	"./ar-tn.js": 222,
	"./ar.js": 223,
	"./az": 224,
	"./az.js": 224,
	"./be": 225,
	"./be.js": 225,
	"./bg": 226,
	"./bg.js": 226,
	"./bm": 227,
	"./bm.js": 227,
	"./bn": 228,
	"./bn.js": 228,
	"./bo": 229,
	"./bo.js": 229,
	"./br": 230,
	"./br.js": 230,
	"./bs": 231,
	"./bs.js": 231,
	"./ca": 232,
	"./ca.js": 232,
	"./cs": 233,
	"./cs.js": 233,
	"./cv": 234,
	"./cv.js": 234,
	"./cy": 235,
	"./cy.js": 235,
	"./da": 236,
	"./da.js": 236,
	"./de": 239,
	"./de-at": 237,
	"./de-at.js": 237,
	"./de-ch": 238,
	"./de-ch.js": 238,
	"./de.js": 239,
	"./dv": 240,
	"./dv.js": 240,
	"./el": 241,
	"./el.js": 241,
	"./en-au": 242,
	"./en-au.js": 242,
	"./en-ca": 243,
	"./en-ca.js": 243,
	"./en-gb": 244,
	"./en-gb.js": 244,
	"./en-ie": 245,
	"./en-ie.js": 245,
	"./en-il": 246,
	"./en-il.js": 246,
	"./en-nz": 247,
	"./en-nz.js": 247,
	"./eo": 248,
	"./eo.js": 248,
	"./es": 251,
	"./es-do": 249,
	"./es-do.js": 249,
	"./es-us": 250,
	"./es-us.js": 250,
	"./es.js": 251,
	"./et": 252,
	"./et.js": 252,
	"./eu": 253,
	"./eu.js": 253,
	"./fa": 254,
	"./fa.js": 254,
	"./fi": 255,
	"./fi.js": 255,
	"./fo": 256,
	"./fo.js": 256,
	"./fr": 259,
	"./fr-ca": 257,
	"./fr-ca.js": 257,
	"./fr-ch": 258,
	"./fr-ch.js": 258,
	"./fr.js": 259,
	"./fy": 260,
	"./fy.js": 260,
	"./gd": 261,
	"./gd.js": 261,
	"./gl": 262,
	"./gl.js": 262,
	"./gom-latn": 263,
	"./gom-latn.js": 263,
	"./gu": 264,
	"./gu.js": 264,
	"./he": 265,
	"./he.js": 265,
	"./hi": 266,
	"./hi.js": 266,
	"./hr": 267,
	"./hr.js": 267,
	"./hu": 268,
	"./hu.js": 268,
	"./hy-am": 269,
	"./hy-am.js": 269,
	"./id": 270,
	"./id.js": 270,
	"./is": 271,
	"./is.js": 271,
	"./it": 272,
	"./it.js": 272,
	"./ja": 273,
	"./ja.js": 273,
	"./jv": 274,
	"./jv.js": 274,
	"./ka": 275,
	"./ka.js": 275,
	"./kk": 276,
	"./kk.js": 276,
	"./km": 277,
	"./km.js": 277,
	"./kn": 278,
	"./kn.js": 278,
	"./ko": 279,
	"./ko.js": 279,
	"./ky": 280,
	"./ky.js": 280,
	"./lb": 281,
	"./lb.js": 281,
	"./lo": 282,
	"./lo.js": 282,
	"./lt": 283,
	"./lt.js": 283,
	"./lv": 284,
	"./lv.js": 284,
	"./me": 285,
	"./me.js": 285,
	"./mi": 286,
	"./mi.js": 286,
	"./mk": 287,
	"./mk.js": 287,
	"./ml": 288,
	"./ml.js": 288,
	"./mn": 289,
	"./mn.js": 289,
	"./mr": 290,
	"./mr.js": 290,
	"./ms": 292,
	"./ms-my": 291,
	"./ms-my.js": 291,
	"./ms.js": 292,
	"./mt": 293,
	"./mt.js": 293,
	"./my": 294,
	"./my.js": 294,
	"./nb": 295,
	"./nb.js": 295,
	"./ne": 296,
	"./ne.js": 296,
	"./nl": 298,
	"./nl-be": 297,
	"./nl-be.js": 297,
	"./nl.js": 298,
	"./nn": 299,
	"./nn.js": 299,
	"./pa-in": 300,
	"./pa-in.js": 300,
	"./pl": 301,
	"./pl.js": 301,
	"./pt": 303,
	"./pt-br": 302,
	"./pt-br.js": 302,
	"./pt.js": 303,
	"./ro": 304,
	"./ro.js": 304,
	"./ru": 305,
	"./ru.js": 305,
	"./sd": 306,
	"./sd.js": 306,
	"./se": 307,
	"./se.js": 307,
	"./si": 308,
	"./si.js": 308,
	"./sk": 309,
	"./sk.js": 309,
	"./sl": 310,
	"./sl.js": 310,
	"./sq": 311,
	"./sq.js": 311,
	"./sr": 313,
	"./sr-cyrl": 312,
	"./sr-cyrl.js": 312,
	"./sr.js": 313,
	"./ss": 314,
	"./ss.js": 314,
	"./sv": 315,
	"./sv.js": 315,
	"./sw": 316,
	"./sw.js": 316,
	"./ta": 317,
	"./ta.js": 317,
	"./te": 318,
	"./te.js": 318,
	"./tet": 319,
	"./tet.js": 319,
	"./tg": 320,
	"./tg.js": 320,
	"./th": 321,
	"./th.js": 321,
	"./tl-ph": 322,
	"./tl-ph.js": 322,
	"./tlh": 323,
	"./tlh.js": 323,
	"./tr": 324,
	"./tr.js": 324,
	"./tzl": 325,
	"./tzl.js": 325,
	"./tzm": 327,
	"./tzm-latn": 326,
	"./tzm-latn.js": 326,
	"./tzm.js": 327,
	"./ug-cn": 328,
	"./ug-cn.js": 328,
	"./uk": 329,
	"./uk.js": 329,
	"./ur": 330,
	"./ur.js": 330,
	"./uz": 332,
	"./uz-latn": 331,
	"./uz-latn.js": 331,
	"./uz.js": 332,
	"./vi": 333,
	"./vi.js": 333,
	"./x-pseudo": 334,
	"./x-pseudo.js": 334,
	"./yo": 335,
	"./yo.js": 335,
	"./zh-cn": 336,
	"./zh-cn.js": 336,
	"./zh-hk": 337,
	"./zh-hk.js": 337,
	"./zh-tw": 338,
	"./zh-tw.js": 338
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 620;


/***/ }),

/***/ 632:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 633:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n    <div class=\"sidebar-collapse\">\n        <ul class=\"nav metismenu\" id=\"side-menu\">\n            <li class=\"nav-header\">\n                <div class=\"dropdown profile-element\">\n                    <span>\n                        <img alt=\"image\" class=\"img-rectangle\" width=\"165px\"\n                             src=\"./assets/img/dutchess-cap.png\" />\n                    </span>\n                </div>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('home')}\">\n                <a [routerLink]=\"['/home']\"><i class=\"fas fa-home\"></i> <span class=\"nav-label\">Home</span></a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('graphs')}\">\n               <a [routerLink]=\"['/graphs']\"><i class=\"fas fa-chart-line\"></i> <span class=\"nav-label\">Graph Designer</span></a>\n           </li>\n            <li [ngClass]=\"{active: activeRoute('input')}\">\n                <a [routerLink]=\"['/input']\"><i class=\"fas fa-user-edit\"></i> <span class=\"nav-label\">Input Survey Manually</span></a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('exportRaw')}\">\n                <a [routerLink]=\"['/exportRaw']\"><i class=\"fas fa-table\"></i> <span class=\"nav-label\">Query/Export Data</span></a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('edit')}\">\n                  <a [routerLink]=\"['/edit']\"><i class=\"fas fa-edit\"></i> <span class=\"nav-label\">Edit Survey</span></a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ 634:
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom\">\n    <div id=\"topNavBar\">\n        <nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\">\n            <ul class=\"nav navbar-top-links navbar-right\">\n                <li>\n                    <a *ngIf=\"auth.isAuthenticated()\"\n                    (click)=\"auth.logout()\" style=\"font-size:12px\">\n                        <i class=\"fas fa-globe-americas\"></i> Return To Survey / Logout\n                    </a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n</div>\n"

/***/ }),

/***/ 635:
/***/ (function(module, exports) {

module.exports = "<!--\n<form #end=\"ngForm\" (ngSubmit)=\"onSubmit(end)\" novalidate>\n<div class=\"form-group\">\n  <label>First Name</label><br>\n  <input name=\"fName\" ngModel #first=\"ngModel\"><br>\n  \n  <label>Last Name</label><br>\n  <input name=\"lName\" ngModel><br>\n  \n  <label>Email Address</label><br>\n  <input name=\"email\" ngModel><br>\n  \n  <label>Phone Number</label><br>\n  <input name=\"phoneNum\" ngModel><br>\n  \n  <button style=\"margin-top: 10px\"> Submit </button>\n</div>\n</form>\n-->\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-9\" id=\"bucket\">\n            <div class=\"well well-sm\">\n                <form class=\"form-horizontal\" action=\"survey.component.html\" method=\"post\" #end=\"ngForm\" (ngSubmit)=\"onSubmit(end)\" novalidate>\n                    <fieldset>\n                        <legend class=\"text-center header\">Thank you for taking our survey!</legend>\n                        <p class=\"text-center header2\">If you would like to leave any additonal information,<br> please fill out the form below. </p>\n                        \n                        <div class=\"form-group\">\n                            <span class=\"col-md-1 col-md-offset-2 text-center\"><i class=\"fa fa-user bigicon\"></i></span>\n                            <div class=\"col-md-6\">\n                                <input name=\"fName\" type=\"text\" placeholder=\"First Name\" class=\"form-control\" ngModel>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <span class=\"col-md-1 col-md-offset-2 text-center\"><i class=\"fa fa-user bigicon\"></i></span>\n                            <div class=\"col-md-6\">\n                                <input name=\"lName\" type=\"text\" placeholder=\"Last Name\" class=\"form-control\" ngModel>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <span class=\"col-md-1 col-md-offset-2 text-center\"><i class=\"fa fa-envelope-o bigicon\"></i></span>\n                            <div class=\"col-md-6\">\n                                <input id=\"email\" name=\"email\" type=\"text\" placeholder=\"Email Address\" class=\"form-control\" ngModel>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <span class=\"col-md-1 col-md-offset-2 text-center\"><i class=\"fa fa-phone-square bigicon\"></i></span>\n                            <div class=\"col-md-6\">\n                                <input id=\"phone\" name=\"phone\" type=\"text\" placeholder=\"Phone\" class=\"form-control\" ngModel>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <span class=\"col-md-1 col-md-offset-2 text-center\"><i class=\"fa fa-pencil-square-o bigicon\"></i></span>\n                            <div class=\"col-md-6\">\n                                <textarea class=\"form-control\" id=\"message\" name=\"message\" placeholder=\"Enter your massage for us here about any thoughts or opinions regarding the CAP orginization and programs.\" rows=\"7\" ngModel></textarea>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12 text-center\">\n                                <button type=\"submit\" class=\"btn btn-primary btn-lg\">Submit</button>\n                            </div>\n                        </div>\n                    </fieldset>\n                </form>\n                \n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <navigation></navigation>\n  <div id=\"page-wrapper\" class=\"gray-bg\">\n    <topnavbar></topnavbar>\n    <div id=\"ctr\">\n      <div class=\"row\">\n        <div class=\"col-lg-10 ibox float-e-margins\">\n          <div class=\"ibox-content\">\n            <div class=\"row justify-content-between btnBar\">\n               <div class=\"col\">\n                  <select class=\"form-control pull-left\" id=\"surveySelect\" (change)=\"updateSurveyFormData($event.target.value)\">\n                    <option value=\"-1\" disabled selected>Select survey to edit or create a new one!</option>\n                    <option *ngFor=\"let s of globals.surveys\" [value]=\"s.survey_id\">\n                      {{ s.survey_name }}\n                    </option>\n                  </select>\n                </div>\n                <div class=\"col\">\n                  <button type=\"button\" (click)=\"newSurveyForm()\" class=\"pull-right btn btn-warning btn-sm\">Create New Survey</button>\n                </div>\n            </div>\n            <hr>\n            <div class=\"feed-activity-list\">\n              <form [formGroup]=\"survey\" novalidate (ngSubmit)=\"save(survey)\">\n                <div class=\"form-group\">\n                  <h2 style=\"font-weight:bold\">Survey Name</h2>\n                  <input [readonly]=\"setReadOnly()\" type=\"text\" class=\"form-control\" formControlName=\"surveyName\"\n                    placeholder=\"Enter Survey Name\">\n                </div>\n                <!-- QUESTIONS -->\n                <div formArrayName=\"questions\">\n                  <div *ngFor=\"let question of survey.controls.questions.controls; let i=index\">\n                    <div [formGroupName]=\"i\" class=\"feed-element\" style=\"margin-bottom:10px\">\n                      <h3> Question {{ i+1}}</h3>\n                      <div class=\"row\">\n                        <div class=\"col-lg-3\">\n                          <div class=\"row\">\n                            <div class=\"col-lg-12\">\n                              <small class=\"text-muted\">Question Type</small>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-lg-12\">\n                              <!--TYPE GO HERE-->\n                              <select formControlName=\"questionType\" class=\"form-control form-control-sm\" required>\n                                <option value=\"\" disabled selected>Select question type:</option>\n                                <option value=\"dropdown\">Dropdown</option>\n                                <option value=\"checkboxes\">Checkboxes</option>\n                                <option value=\"mc\">Multiple Choice</option>\n                                <option value=\"text\">Textbox</option>\n                              </select>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-lg-9\">\n                          <button *ngIf=\"survey.controls.questions.length > 1\" class='pull-right btn btn-lg' (click)='removeQuestion(i)'\n                            style='background-color:transparent;'>\n                            <div>\n                              <i id=\"btnQuestionRemove\" class=\"fas fa-minus-circle\"></i>\n                            </div>\n                          </button>\n                        </div>\n                      </div>\n                      <div class=\"row\" style=\"margin-top:10px\">\n                        <div class=\"col-lg-12\">\n                          <small class=\"text-muted\">Question Prompt</small>\n                          <!--TEXT BOX GOES HERE-->\n                          <div class=\"form-group\">\n                            <textarea formControlName=\"questionText\" class=\"form-control\" id=\"exampleTextarea\" rows=\"2\"\n                              placeholder=\"Enter Question Prompt Here...\"></textarea>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\" *ngIf=\"showOptionsDiv(question)\">\n                        <div class=\"col-lg-1\">\n                        </div>\n                        <div class=\"col-lg-5\">\n                          <!--OPTIONS GO HERE-->\n                          <div>\n                            <!-- SHOWING OPTIONS-->\n                            <small class=\"text-muted\">Add Options</small>\n                            <div formArrayName=\"questionOptions\" *ngFor=\"let option of survey.controls.questions.controls[i].controls.questionOptions.controls; let j=index\">\n                              <div class=\"row\">\n                                <div class=\"col-lg-10\">\n                                  <div [formGroupName]=\"j\">\n                                    <div class=\"form-group\">\n                                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter Option\"\n                                        formControlName=\"option\">\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"col-lg-2\">\n                                  <span *ngIf=\"question.controls.questionOptions.length > 1\" (click)=\"removeOption(question, j)\"><i\n                                      class=\"fas fa-trash-alt\"></i></span>\n                                </div>\n                              </div>\n                              <button type=\"button\" class=\"btn btn-success btn-sm pull-right\" *ngIf=\"j == question.controls.questionOptions.length-1\"\n                                (click)=\"addOption(question)\" style=\"float: right\"><i class=\"fa fa-plus-circle\"></i>\n                                Add Option</button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                          <button class='pull-right btn btn-lg' (click)='addQuestion(i)' style='background-color:transparent;'>\n                            <div>\n                              <i id=\"btnQuestionAdd\" class=\"fa fa-plus-circle\"></i>\n                            </div>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                    <!--END OF FEED ELEMENT DIV-  -->\n                  </div>\n                  <!--END OF nfFor DIV-->\n                </div>\n                <!--END OF Form Array for Questions Div-->\n              </form>\n            </div>\n            <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\">Save Survey</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 637:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <navigation></navigation>\n    <div id=\"page-wrapper\" class=\"gray-bg\">\n        <topnavbar></topnavbar>\n\n        <div class=\"row wrapper border-bottom white-bg page-heading\">\n          <div class=\"row\" style=\"margin-top:30px\">\n\n            <div class=\"col-lg-2\">\n              <div class=\"form-group\">\n                <label for=\"exampleFormControlSelect1\">Survey</label>\n                <select class=\"form-control\" id=\"exampleFormControlSelect1\" (change)=\"updateSurvey($event.target.value)\">\n                  <option *ngFor=\"let survey of globals.surveys\" value=\"{{survey.survey_id}}\">\n                    {{ survey.survey_name }}\n                  </option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-lg-5\">\n              <div class=\"form-group\">\n                <label for=\"exampleFormControlSelect1\">Survey Question</label>\n                <select class=\"form-control\" id=\"exampleFormControlSelect1\" (change)=\"updateDataFeed($event.target.value)\">\n                  <option value=\"-1\">All Questions</option>\n                  <option *ngFor=\"let question of getQuestions()\" value=\"{{ question.question_id }}\">\n                    {{ question.question_text}}\n                  </option>\n                </select>\n              </div>\n            </div>\n\n            <div class=\"col-lg-3\">\n              <div class=\"form-group\">\n                <label for=\"exampleFormControlSelect1\">As of Date</label>\n                <input class=\"form-control\" type=\"date\" value=\"{{ dateFilter }}\" (change)=\"updateDate($event.target.value)\">\n              </div>\n            </div>\n\n            <div class=\"col-lg-2\">\n              <button type=\"button\" class=\"btn btn-primary btn-block btn-sm btnExport\" (click)=\"exportTableToCSV('table.csv')\"><i\n                  class=\"fas fa-download\"></i> Export Table</button>\n            </div>\n\n          </div>\n\n          <div class=\"row divSearchRow\">\n\n            <div class=\"col-lg-12\">\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" placeholder=\"Filter Responses By Keyword\">\n                <div class=\"input-group-btn\">\n                  <button class=\"btn btn-default\" type=\"submit\">\n                    <i class=\"glyphicon glyphicon-search\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"row \">\n\n            <div class=\"col-lg-12\">\n              <table id=\"tableResponses\" class=\"table table-hover table-sm\">\n                <thead>\n                  <tr>\n                    <th class=\"colQuestions\">Question</th>\n                    <th class=\"colResponses\">Response</th>\n                    <th class=\"colDates\">Date Submitted</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let response of dataFeed | filter: searchText | filterByDate: dateFilter\">\n                    <th> {{ response.question }} </th>\n                    <td> {{ response.response }}</td>\n                    <td class=\"colDates\"> {{ response.date }}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n          </div> \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 638:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <navigation></navigation>\n  <div id=\"page-wrapper\" class=\"gray-bg\">\n    <topnavbar></topnavbar>\n\n    <div class=\"row wrapper border-bottom white-bg page-heading\">\n      <div class=\"row\">\n\n        <div class=\"col-lg-3\"style=\"margin-bottom: 500px\">\n          <br>\n          <form [formGroup]=\"chartForm\">\n            <div class=\"form-group\">\n\n              <div class=\"filterBlock\">\n                <label for=\"deepGraphSwitch\">Data Set Modeling Switch</label>\n                <div class=\"btn-group w-100\" id=\"deepGraphSwitch\" role=\"group\" (click)=\"updateMultipleDataSetForm($event.target.value)\">\n                  <button [disabled]=\"buttonStateSingle()\" type=\"button\" value=\"single\" class=\"btnGroupSwitch btn btn-success\">Single</button>\n                  <button [disabled]=\"buttonStateMultiple()\" type=\"button\" value=\"multiple\" class=\"btnGroupSwitch btn btn-success\">Double</button>\n                </div>\n              </div>\n\n              <div class=\"filterBlock\">\n                <label for=\"graphType\">Chart Type</label>\n                <select class=\"form-control\" formControlName=\"chartType\" (change)=\"updateChart()\" required>\n                  <option *ngFor=\"let graph of graphService.getGraphTypes()\" [value]=\"graph.val\">\n                    {{graph.view}}\n                  </option>\n                </select>\n              </div>\n\n              <div class=\"filterBlock\">\n                <label for=\"graphType\">Select Survey</label>\n                <select class=\"form-control\" formControlName=\"surveyId\" required>\n                  <option *ngFor=\"let survey of globals.surveys\" [value]=\"survey.survey_id\">\n                    {{survey.survey_name}}\n                  </option>\n                </select>\n              </div>\n\n              <div class=\"filterBlock\">\n                <label for=\"graphType\">Select Question</label>\n                <select class=\"form-control\" formControlName=\"questionId\" (change)=\"updateChart()\" required>\n                  <option *ngFor=\"let question of globals.surveys[chartForm.controls.surveyId.value].questions | GraphableQuestion\"\n                    [value]=\"question.question_id\">\n                    {{question.question_text}}\n                  </option>\n                </select>\n              </div>\n\n              <div id=\"multipleDataSets\" *ngIf=\"currentDatasetType != 'single'\">\n                <div class=\"filterBlock\">\n                  <label for=\"graphType\">Select Sub Question</label>\n                  <select class=\"form-control\" formControlName=\"subQuestionId\" required (change)=\"updateChart()\">\n                    <option *ngFor=\"let question of globals.surveys[chartForm.controls.surveyId.value].questions | ExceptQuestionId: chartForm.controls.questionId.value | GraphableQuestion\"\n                      [value]=\"question.question_id\">\n                      {{question.question_text}}\n                    </option>\n                  </select>\n                </div>\n                <div class=\"optionsDiv\">\n                  <form [formGroup]=\"optionsForm\" (change)=\"updateChart()\">\n                    <small class=\"optionsLabel text-muted\">Sub Question Data Filter</small>\n                    <ul class=\"optionsList\" formArrayName=\"options\" *ngFor=\"let option of getSubQuestionOptions(); let i = index\">\n                      <div class=\"col-lg-12\">\n                         <li>\n                           <input type=\"checkbox\" [formControlName]=\"i\">\n                           <span class=\"spanOption\">{{option.option_text}}</span>\n                        </li>\n                      </div>\n                     </ul>\n                  </form>\n                </div>\n              </div>\n              <div class=\"btnBlock\">\n               <hr>\n                <button type=\"button\" class=\"btn btn-primary btn-block btn-sm\">\n                  <a href=\"graphs\" (click)=\"download($event)\" style=\"color:white\">\n                    <i class=\"fas fa-download\"></i>\n                    Export Graph\n                  </a>\n                </button>\n              </div>\n\n            </div>\n          </form>\n        </div>\n\n        <div class=\"col-lg-8\">\n          <canvas id=\"graphCanvas\" width=\"670\" height=\"670\"></canvas>\n        </div>\n\n        <div class=\"col-lg-1\">\n\n        </div>\n\n      </div>\n\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <navigation></navigation>\n  <div id=\"page-wrapper\" class=\"gray-bg\">\n    <topnavbar></topnavbar>\n    <div class=\"col-lg-3 margin-top-20\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>Survey Details</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <div class=\"feed-activity-list\">\n            <div *ngFor=\"let info of getSurveyInfo()\">\n               <div class=\"feed-element margin-top-5\">\n                <span *ngIf=\"info.status\" class=\"label label-primary pull-right\">Active</span>\n                <span *ngIf=\"! info.status\" class=\"label label-warning pull-right\">Inactive</span>\n                <strong>{{info.name}}</strong>\n                <div class=\"margin-top-5\">\n                  <div> Date Created: <small class=\"text-muted pull-right\">{{info.date}}</small></div>\n                  <div> Submissions: <small class=\"text-muted pull-right\">{{info.submissions}}</small></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 640:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n      <navigation></navigation>\n      <div id=\"page-wrapper\" class=\"gray-bg\">\n        <topnavbar></topnavbar>\n        <div id=\"ctr\">\n          <div class=\"row\">\n            <div class=\"col-lg-11 ibox float-e-margins\">\n              <div class=\"ibox-content\">\n                <div class=\"row justify-content-between btnBar\">\n                  <div class=\"col\">\n                    <select class=\"form-control pull-left\" id=\"surveySelect\" (change)=\"updateSurvey($event.target.value)\">\n                      <option *ngFor=\"let s of globals.surveys\" [value]=\"s.survey_id\">\n                        {{ s.survey_name }}\n                      </option>\n                    </select>\n                  </div>\n                  <div class=\"col\">\n                    <button type=\"button\" class=\"btn btn-primary pull-right btn-sm\">\n                      <i class=\"fas fa-database\"></i>\n                      Add to Database\n                    </button>\n                  </div>\n                </div>\n                <hr>\n                <div class=\"feed-activity-list\">\n                  <form>\n                    <div class=\"row form-group\" *ngFor=\"let question of survey.questions | ActiveQuestions; let i = index \">\n                      <div class=\"col-lg-4\" style=\"margin-left:40px\">\n                        <span class=\"spanQuestion\"> {{ i+1 }} . <span class=\"spanQuestionText\">{{ question.question_text }}</span></span>\n                      </div>\n                      <div class=\"col-lg-7\">\n                        <div [ngSwitch]=\"question.question_type\">\n    \n                          <div *ngSwitchCase=\"'dropdown'\">\n                            <select class=\"form-control\" id=\"questionType\">\n                              <option *ngFor=\"let option of question.options\">\n                                {{ option.option_text }}\n                              </option>\n                            </select>\n                          </div>\n                          <div *ngSwitchCase=\"'checkboxes'\">\n                            <div *ngFor=\"let option of question.options\" id=\"divCheckboxOptionText\">\n                              <label class=\"form-check-label\">\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"option.option_text\">\n                                <span class=\"spanOption\">{{ option.option_text }}</span>\n                              </label>\n                            </div>\n                          </div>\n                          <div *ngSwitchCase=\"'text'\">\n                            <label class=\"form-check-label\"></label>\n                            <textarea class=\"form-control\" id=\"textArea\" rows=\"3\"></textarea>\n                          </div>\n                          <div *ngSwitchCase=\"'mc'\">\n                            <div *ngFor=\"let option of question.options\">\n                              <label class=\"check-label\">\n                                <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\">\n                                <span class=\"spanOption\">{{ option.option_text }}</span>\n                              </label>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ 641:
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n\t<div class=\"notfound\">\n\t\t<div class=\"notfound-bg\">\n\t\t\t<div></div>\n\t\t\t<div></div>\n\t\t\t<div></div>\n\t\t</div>\n\t\t<h1>oops!</h1>\n\t\t<h2>Error 404 : Page Not Found</h2>\n\t\t<a href=\"#\">go back</a>\n\t</div>\n</div>"

/***/ }),

/***/ 642:
/***/ (function(module, exports) {

module.exports = "<!--\n<form #end=\"ngForm\" (ngSubmit)=\"onSubmit(end)\" novalidate>\n<div class=\"form-group\">\n  <label>First Name</label><br>\n  <input name=\"fName\" ngModel #first=\"ngModel\"><br>\n  \n  <label>Last Name</label><br>\n  <input name=\"lName\" ngModel><br>\n  \n  <label>Email Address</label><br>\n  <input name=\"email\" ngModel><br>\n  \n  <label>Phone Number</label><br>\n  <input name=\"phoneNum\" ngModel><br>\n  \n  <button style=\"margin-top: 10px\"> Submit </button>\n</div>\n</form>\n-->\n\n<div class=\"container\" style=\"margin: 0 auto\">\n    <div class=\"row\">\n        <div class=\"col-md-7\" id=\"bucket\" >\n            <div class=\"well well-sm\">\n                <!--<form class=\"form-horizontal\" method=\"post\" #end=\"ngForm\" (ngSubmit)=\"onSubmit(end)\" novalidate>-->\n                <legend class=\"text-center header\">Welcome to Dutchess CAP</legend>\n                <p class=\"text-center header2\">Please select the survey you would like to take:</p>\n               \n                <form class=\"form-horizontal\" method=\"post\" #start=\"ngForm\" validate>\n                    <!--(ngSubmit)=\"onStart()-->\n\n                    <select class=\"form-control\" id=\"select\" (change)=\"surveySelect($event, $event.target.value)\">\n                        <option disabled selected>-Please Select an Option-</option>\n                        <option name =\"surveyValue\" *ngFor=\"let surveyActive of globals.surveys\" value=\"{{surveyActive.survey_id}}\" ngModel>{{surveyActive.survey_name}}</option>\n                    </select>\n                    \n                    <div class=\"form-group\">\n                        <div class=\"col-md-12 text-center\">\n                            <button type=\"submit\" id=\"btn\" class=\"btn btn-primary btn-lg\">Start</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n <!--\n                        <div class=\"form-group\">\n                            <span class=\"col-md-1 col-md-offset-2 text-center\"><i class=\"fa fa-user bigicon\"></i></span>\n                            <div class=\"col-md-6\">\n                                <input name=\"fName\" type=\"text\" placeholder=\"First Name\" class=\"form-control\" ngModel>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <span class=\"col-md-1 col-md-offset-2 text-center\"><i class=\"fa fa-user bigicon\"></i></span>\n                            <div class=\"col-md-6\">\n                                <input name=\"lName\" type=\"text\" placeholder=\"Last Name\" class=\"form-control\" ngModel>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <span class=\"col-md-1 col-md-offset-2 text-center\"><i class=\"fa fa-envelope-o bigicon\"></i></span>\n                            <div class=\"col-md-6\">\n                                <input id=\"email\" name=\"email\" type=\"text\" placeholder=\"Email Address\" class=\"form-control\" ngModel>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <span class=\"col-md-1 col-md-offset-2 text-center\"><i class=\"fa fa-phone-square bigicon\"></i></span>\n                            <div class=\"col-md-6\">\n                                <input id=\"phone\" name=\"phone\" type=\"text\" placeholder=\"Phone\" class=\"form-control\" ngModel>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <span class=\"col-md-1 col-md-offset-2 text-center\"><i class=\"fa fa-pencil-square-o bigicon\"></i></span>\n                            <div class=\"col-md-6\">\n                                <textarea class=\"form-control\" id=\"message\" name=\"message\" placeholder=\"Enter your massage for us here about any thoughts or opinions regarding the CAP orginization and programs.\" rows=\"7\" ngModel></textarea>\n                            </div>\n                        </div>\n                        -->"

/***/ }),

/***/ 643:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <button\n    *ngIf=\"!auth.isAuthenticated()\" (click)=\"auth.login()\">Login</button>\n    <div class=\"row\">\n      <div class=\"col-md-9\" id=\"bucket\">\n        <div class=\"well well-sm\">\n          <div *ngFor=\"let survey of globals.surveys | filterBySurveyID: currentSurveyId; let j = index\">\n            <div *ngFor=\"let question of survey.questions | paginate: config\">\n              <form class=\"form-horiziontal\" action=\"contact.component.html\">\n                <fieldset>\n  \n                  <legend class=\"text-center header\">{{ survey.survey_name }}</legend>\n  \n                  <!--<div *ngFor=\"let survey of globals.surveys | filterBySurveyID: currentSurveyId\">-->\n                  <div class=\"text-center header2\">\n                    <h3> {{ question.question_id + 1 }}. {{ question.question_text}} </h3>\n                  </div>\n                  <div [ngSwitch]=\"question.question_type\" style=\"height:150px\">\n  \n                    <div class=\"form-group\" id=\"dropdownStyle\">\n                      <div class=\"col-md-6\">\n                        <div *ngSwitchCase=\"'dropdown'\">\n                          <select class=\"form-control\" id=\"select\" [(ngModel)]=\"selectedOptionId\" name=\"selectedOption\"\n                            (change)=\"setSelectedOption($event, $event.target.value, 'dd')\">\n                            <option disabled selected>-Please Select an Option-</option>\n                            <option *ngFor=\"let option of question.options\" value=\"{{option.option_id}}\">\n                              {{ option.option_text }}\n                            </option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n  \n                    <div class=\"form-check\">\n                      <div class=\"col-md-6\">\n                        <div *ngSwitchCase=\"'checkboxes'\">\n                          <div *ngFor=\"let option of question.options\" class=\"form-check-label\" id=\"divCheckboxOptionText\"\n                            (change)=\"setSelectedOption($event, $event.target.value, 'cb')\">\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"{{option.option_id}}\">\n                            {{ option.option_text }}\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n  \n                    <div class=\"form-group\">\n                      <div class=\"col-md-6\">\n                        <div *ngSwitchCase=\"'text'\">\n                          <div class=\"form-check-label\">\n                            <textarea class=\"form-control\" name=\"text\" rows=\"2\" [(ngModel)]=\"textAreaValue\"></textarea>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n  \n                    <div class=\"form-group\">\n                      <div class=\"col-md-6\">\n                        <div *ngSwitchCase=\"'mc'\">\n                          <div *ngFor=\"let option of question.options\" id=\"radioBoxOptionText\" (change)=\"setSelectedOption($event, $event.target.value, 'mc')\">\n                            <input type=\"radio\" class=\"form-check-input\" name=\"question.question_id\" value=\"{{option.option_id}}\">\n                            {{ option.option_text }}\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n  \n                  </div>\n                  <pagination-template #p=\"paginationApi\" [id]=\"config.id\" (pageChange)=\"config.currentPage = $event\">\n                    <div class=\"custom-pagination\">\n                      <ul>\n                        <span class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\">\n                          <button class=\"btn btn-primary btn-sm\" *ngIf=\"!p.isFirstPage()\" (click)=\"removeResponse(getQuestionIndex(question.question_id, p.getCurrent())); p.previous();\">\n                            Previous </button>\n                          </span>\n  \n                        <span *ngFor=\"let page of p.pages\" [class.current]=\"p.getCurrent() === page.value\">\n                          <li class=\"pageNumbers\" *ngIf=\"p.getCurrent() !== page.value\">\n                            <a style=\"font-size: 15px; color: grey\">{{ page.label }}</a>\n                          </li>\n                          <li class=\"pageNumberActive\" *ngIf=\"p.getCurrent() === page.value\">\n                            <a style=\"font-size: 15px; color: grey\">{{ page.label }}</a>\n                          </li>\n                        </span>\n  \n                        <span class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\">\n                          <button class=\"btn btn-primary btn-sm\" *ngIf=\"!p.isLastPage()\" (click)=\"updateResponses(textAreaValue, getQuestionIndex(question.question_id)); p.next()\">\n                            Next </button>\n                          <button class=\"btn btn-primary btn-sm\" *ngIf=\"p.isLastPage()\" (click)=\"updateResponses(textAreaValue, getQuestionIndex(question.question_id)); postOnSubmit();\">\n                            Submit </button>\n                          </span>\n                      </ul>\n                    </div>\n                  </pagination-template>\n                </fieldset>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_lock__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_lock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_auth0_lock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




window.global = window;
var AuthenticationService = (function () {
    function AuthenticationService(router) {
        var _this = this;
        this.router = router;
        // https://dutchesscapp.auth0.com/
        this.auth0Options = {
            theme: {
                primaryColor: '#DFA612'
            },
            auth: {
                redirectUrl: 'http://localhost:4200/home',
                responseType: 'token id_token',
                audience: "https://dutchesscap.auth0.com/userinfo",
                params: {
                    scope: 'openid profile email'
                }
            },
            autoclose: true,
            oidcConformant: true,
        };
        this.lock = new __WEBPACK_IMPORTED_MODULE_2_auth0_lock___default.a('Om122xNAJ4dyh43gPnuJpLfgQMZhpNFp', 'dutchesscap.auth0.com', this.auth0Options);
        this.lock.on('authenticated', function (authResult) {
            _this.lock.getUserInfo(authResult.accessToken, function (error, profile) {
                if (error) {
                    throw new Error(error);
                }
                localStorage.setItem('token', authResult.idToken);
                localStorage.setItem('profile', JSON.stringify(profile));
                _this.router.navigate(['/']);
            });
        });
    }
    // When called, produce the lock modal that allows authentication
    AuthenticationService.prototype.login = function () {
        this.lock.show();
    };
    // Remove the localStorage tokens and navigate to the survey page
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('profile');
        localStorage.removeItem('token');
        this.router.navigate(['survey']);
    };
    // Checks if the token has expired / if it exists
    AuthenticationService.prototype.isAuthenticated = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(392);


/***/ })

},[804]);
//# sourceMappingURL=main.bundle.js.map