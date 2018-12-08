webpackJsonp([1,5],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(481);
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
        // solid colors for charts
        this.solidColors = [
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
        // transparent colors for radar chart and overlapping datasets
        this.transparentColors = [
            'rgba(054, 162, 235, 0.4)',
            'rgba(255, 099, 132, 0.4)',
            'rgba(255, 206, 086, 0.4)',
            'rgba(075, 192, 192, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 159, 064, 0.4)',
            'rgba(046, 139, 087, 0.4)',
            'rgba(082, 139, 139, 0.4)',
            'rgba(070, 130, 180, 0.4)',
            'rgba(147, 112, 219, 0.4)',
            'rgba(205, 092, 092, 0.4)',
            'rgba(219, 112, 219, 0.4)',
            'rgba(255, 231, 186, 0.4)',
            'rgba(178, 223, 238, 0.4)',
            'rgba(072, 209, 204, 0.4)',
            'rgba(238, 180, 180, 0.4)',
            'rgba(153, 050, 204, 0.4)',
            'rgba(102, 205, 170, 0.4)',
            'rgba(230, 238, 000, 0.4)',
            'rgba(255, 193, 037, 0.4)',
            'rgba(000, 178, 238, 0.4)',
            'rgba(255, 159, 064, 0.4)',
            'rgba(230, 207, 161, 0.4)',
            'rgba(205, 197, 191, 0.4)',
            'rgba(202, 255, 112, 0.4)',
            'rgba(255, 127, 080, 0.4)',
            'rgba(205, 051, 051, 0.4)',
            'rgba(255, 127, 000, 0.4)',
            'rgba(255, 174, 185, 0.4)'
        ];
        /**
         *  Chart Options
         */
        this.pieChartOptions = {
            responsive: false,
        };
        this.barChartOptions = {
            responsive: false,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.doughnutChartOptions = {
            responsive: false,
        };
        this.lineChartOptions = {
            responsive: false,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        this.polarAreaChartOptions = {
            responsive: false,
        };
        this.radarChartOptions = {
            responsive: false,
        };
        this.defaultOptions = {
            responsive: false,
        };
    }
    // creates a sinng dataset chart
    GraphService.prototype.createSingleChart = function (context, chartType, map) {
        return new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](context, {
            type: chartType,
            data: {
                labels: Array.from(map.keys()),
                datasets: this.createDataset(map, chartType)
            },
            options: this.getOptions(chartType)
        });
    };
    // creates dataset for singlechart
    GraphService.prototype.createDataset = function (data, chartType) {
        return [{
                label: 'Total',
                data: Array.from(data.values()),
                backgroundColor: this.getColors(chartType),
                fill: chartType != 'line' ? true : false,
                borderColor: this.getColors(chartType),
                lineTension: chartType != 'line' ? 0 : 1
            }];
    };
    // creates a matrix chart for mutiple datasets
    GraphService.prototype.createMatrixChart = function (context, chartType, matrixData) {
        return new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](context, {
            type: chartType,
            data: matrixData,
            options: this.getOptions(chartType)
        });
    };
    // date chart
    GraphService.prototype.createDateChart = function (context, chartType, matrixData) {
        return new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"](context, {
            type: chartType,
            data: matrixData,
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: "Responses By Survey For Past Year"
                },
                scales: {
                    xAxes: [{
                            type: "time",
                            time: {
                                tooltipFormat: 'll',
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Date'
                            }
                        }],
                    yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'value'
                            }
                        }]
                }
            }
        });
    };
    // returns the graph types
    GraphService.prototype.getGraphTypes = function () {
        return this.graphTypes;
    };
    // returns colors based off of chart type
    GraphService.prototype.getColors = function (chartType) {
        if (chartType == "radar") {
            return this.transparentColors;
        }
        else {
            return this.solidColors;
        }
    };
    // returns a color by index, if not enough then
    GraphService.prototype.getColorByIndex = function (i, chartType) {
        var colors;
        if (i > this.getColors(chartType).length) {
            // if the colors overflow the current chart colors, move to other color dataset and subtract index to be in scope
            if (chartType == 'bar') {
                colors = this.getColors('line');
                return colors[i - this.getColors('line').length + 2];
            }
            else {
                colors = this.getColors('bar');
                return colors[i - this.getColors('bar').length + 2];
            }
        }
        else {
            colors = this.getColors(chartType);
            return colors[i];
        }
    };
    // sets the options for the chart based off of type
    GraphService.prototype.getOptions = function (chartType) {
        switch (chartType) {
            case 'pie':
                return this.pieChartOptions;
            case 'bar':
                return this.barChartOptions;
            case 'doughnut':
                return this.doughnutChartOptions;
            case 'polarArea':
                return this.polarAreaChartOptions;
            case 'line':
                return this.lineChartOptions;
            case 'radar':
                return this.radarChartOptions;
            default:
                return this.defaultOptions;
        }
    };
    /**
     *  downloads the chart
     */
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_survey_service__ = __webpack_require__(46);
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
    function EditComponent(_fb, surveyService) {
        this._fb = _fb;
        this.surveyService = surveyService;
        // Holds the dynamic survey variables for display
        this.surveys = [];
        // Last IDs in the database
        this.lastSurveyId = 0;
        this.lastQuestionId = 0;
        this.lastOptionId = 0;
    }
    // initilaize a new blank survey form
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the modal
        this.modal = document.getElementById('success');
        this.newSurveyForm();
        this.surveyService.getAllSurveys().subscribe(function (response) {
            var _loop_1 = function (i) {
                var survey = {
                    "survey_id": response.body[i].survey_id,
                    "survey_name": response.body[i].survey_name,
                    "date_created": response.body[i].date_created,
                    "survey_is_active": response.body[i].survey_is_active
                };
                _this.surveys.push(survey);
                _this.lastSurveyId++;
                // Get the survey questions by selectedSurveyId
                _this.surveyService.getAllSurveyQuestions(_this.surveys[i].survey_id).subscribe(function (response) {
                    // Initialize the questions
                    _this.surveys[i].questions = [];
                    // Iterate through the questions and push them one at a time
                    for (var j = 0; j < response.body.length; j++) {
                        var question = {
                            "question_id": response.body[j].question_id,
                            "question_text": response.body[j].question_text,
                            "question_type": response.body[j].question_type,
                            "question_is_active": response.body[j].question_is_active,
                            options: []
                        };
                        _this.surveys[i].questions.push(question);
                        _this.lastQuestionId++;
                    }
                    // Get the survey options based on the selectedSurveyId
                    _this.surveyService.getAllSurveyOptions(_this.surveys[i].survey_id).subscribe(function (response) {
                        for (var k = 0; k < _this.surveys[i].questions.length; k++) {
                            for (var l = 0; l < response.body.length; l++) {
                                var option = {
                                    "option_id": response.body[l].option_id,
                                    "option_text": response.body[l].option_text,
                                    "option_is_active": response.body[l].option_is_active,
                                    "question_id": response.body[l].question_id
                                };
                                // If the question IDs match, push the option into the questions[j].options array
                                if (_this.surveys[i].questions[k].question_id == response.body[l].question_id) {
                                    _this.surveys[i].questions[k].options.push(option);
                                    _this.lastOptionId++;
                                }
                            }
                        }
                    }, function (error) {
                        console.log('error is ', error);
                    });
                }, function (error) {
                    console.log('error is ', error);
                });
            };
            // Get 1 survey at a time and push into surveys array
            for (var i = 0; i < response.body.length; i++) {
                _loop_1(i);
            }
        }, function (error) {
            console.log('error is ', error);
        });
    };
    // sets the survey name to readonly based on the edit global
    EditComponent.prototype.setReadOnly = function () {
        return this.nameReadOnly;
    };
    // sets the survey form to a blank survey
    EditComponent.prototype.newSurveyForm = function () {
        this.isNewSurvey = true;
        this.currentQuestionScope = -1;
        this.currentOptionScope = [-1];
        this.survey = this._fb.group({
            survey_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            survey_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            questions: this._fb.array([
                this.initQuestion(),
            ])
        });
        this.nameReadOnly = false;
        jQuery("#surveySelect").val(-1);
    };
    // create a new blank question
    EditComponent.prototype.initQuestion = function () {
        return this._fb.group({
            question_is_active: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]({ value: true, disabled: true }),
            question_text: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            question_type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](''),
            options: this._fb.array([
                this.initOption(),
            ])
        });
    };
    // create a new blank option
    EditComponent.prototype.initOption = function () {
        this.currentOptionScope.push(-1);
        return this._fb.group({
            option_is_active: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]({ value: true, disabled: true }),
            option_text: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('')
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
    EditComponent.prototype.addOption = function (question, questionIndex) {
        var control = question.controls.options;
        control.push(this.initOption());
        if (this.isNewSurvey) {
            this.currentOptionScope.push(-1);
        }
    };
    // remove option from the form group array at the given index
    EditComponent.prototype.removeOption = function (question, optionIndex, questionIndex) {
        var control = question.controls.options;
        control.removeAt(optionIndex);
        if (this.isNewSurvey) {
            this.currentOptionScope.pop();
        }
    };
    // checks the question type and returns boolean to display the options div
    EditComponent.prototype.showOptionsDiv = function (question) {
        var questionType = question.controls.question_type.value;
        var ret;
        switch (questionType.toString()) {
            case "select":
                ret = true;
                break;
            case "checkbox":
                ret = true;
                break;
            case "radio":
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
    // Used to update the formgroup from a given survey id
    EditComponent.prototype.updateSurveyFormData = function (survey_id) {
        this.isNewSurvey = false;
        var currSurvey;
        this.nameReadOnly = true;
        // loop through the surveys and set the current one to the one that mathches the id
        this.surveys.forEach(function (s) {
            currSurvey = s.survey_id == survey_id ? s : currSurvey;
        });
        // populate the survey form with proper data
        this.survey = this._fb.group({
            survey_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](currSurvey.survey_id),
            survey_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]({ value: currSurvey.survey_name, disabled: true }),
            questions: this._fb.array([])
        });
        // patch the questions nested array value with the new questions
        this.currentOptionScope = [];
        //this.patchFormQuestions(currSurvey.questions);
        this.currentQuestionScope = currSurvey.questions.length - 1;
        this.patchFormQuestions(currSurvey.questions);
    };
    // used to update the questions of the form group qustions array
    EditComponent.prototype.patchFormQuestions = function (questions) {
        var _this = this;
        var control = this.survey.controls['questions'];
        questions.forEach(function (q) {
            control.push(_this._fb.group({
                question_is_active: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](q.question_is_active),
                question_text: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]({ value: q.question_text, disabled: true }),
                question_type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]({ value: q.question_type, disabled: true }),
                options: _this.patchFormOptions(q.options)
            }));
        });
    };
    // used to update the options of the nested form group options array
    EditComponent.prototype.patchFormOptions = function (options) {
        var _this = this;
        var ops = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormArray */]([]);
        options.forEach(function (o) {
            ops.push(_this._fb.group({
                option_is_active: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](o.option_is_active),
                option_text: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]({ value: o.option_text, disabled: true }),
            }));
        });
        this.currentOptionScope.push(options.length - 1);
        return ops;
    };
    // Saves/Uploads the selected formData to the database
    EditComponent.prototype.save = function (formData) {
        var survey;
        var question;
        var option;
        var architecture;
        // Get the survey index
        var surveyIndex = this.getSurveyIndex(formData);
        // If the surveyIndex is -1, this is a new survey
        if (surveyIndex === -1) {
            survey = {
                "survey_name": formData.survey_name
            };
            // Post the new survey with the survey_name
            this.surveyService.postNewSurvey(survey).subscribe();
            this.lastSurveyId++;
            // Set the lastSurveyId, lastQuestionId, and lastOptionId for the post to the architectures table
            formData.survey_id = this.lastSurveyId;
            formData.question_id = this.lastQuestionId;
            formData.option_id = this.lastOptionId;
            // Send the entire formData object
            for (var i = 0; i < formData.questions.length; i++) {
                this.lastQuestionId++;
                question = {
                    "question_text": formData.questions[i].question_text,
                    "question_type": formData.questions[i].question_type
                };
                // First post the question
                this.surveyService.postQuestion(question).subscribe();
                this.surveyService.wait(50);
                for (var j = 0; j < formData.questions[i].options.length; j++) {
                    this.lastOptionId++;
                    option = {
                        "option_text": formData.questions[i].options[j].option_text,
                        "question_id": this.lastQuestionId
                    };
                    this.surveyService.wait(50);
                    // Then post the option
                    this.surveyService.postOption(option).subscribe();
                    this.surveyService.wait(100);
                    architecture = {
                        "survey_id": this.lastSurveyId,
                        "question_id": this.lastQuestionId,
                        "option_id": this.lastOptionId
                    };
                    // Then post the architecture
                    this.surveyService.postArchitecture(architecture).subscribe();
                }
            }
            // If the index is not -1, this is an existing survey
        }
        else {
            // For every question, check if anything has changed, updated, or been added
            for (var i = 0; i < this.surveys[surveyIndex].questions.length; i++) {
                // // Check if questions active/inactive has changed, then update the database
                if (formData.questions[i].question_is_active !==
                    this.surveys[surveyIndex].questions[i].question_is_active) {
                    question = {
                        "question_id": this.surveys[surveyIndex].questions[i].question_id,
                        "question_is_active": formData.questions[i].question_is_active
                    };
                    this.surveyService.updateSurveyQuestionActive(question).subscribe();
                }
                // Check if options active/inactive has changed
                for (var j = 0; j < this.surveys[surveyIndex].questions[i].options.length; j++) {
                    // If it has changed, update the database
                    if (formData.questions[i].options[j].option_is_active !==
                        this.surveys[surveyIndex].questions[i].options[j].option_is_active) {
                        option = {
                            "option_id": this.surveys[surveyIndex].questions[i].options[j].option_id,
                            "option_is_active": formData.questions[i].options[j].option_is_active
                        };
                        this.surveyService.updateSurveyOptionActive(option).subscribe();
                    }
                }
                // Check if there were options added
                if (this.surveys[surveyIndex].questions[i].options.length < formData.questions[i].options.length) {
                    for (var m = this.surveys[surveyIndex].questions[i].options.length; m < formData.questions[i].options.length; m++) {
                        this.lastOptionId++;
                        option = {
                            "option_text": formData.questions[i].options[m].option_text,
                            "question_id": this.lastQuestionId
                        };
                        // First post the option
                        this.surveyService.postOption(option).subscribe();
                        this.surveyService.wait(100);
                        architecture = {
                            "survey_id": this.surveys[surveyIndex].survey_id,
                            "question_id": this.surveys[surveyIndex].questions[i].question_id,
                            "option_id": this.lastOptionId
                        };
                        // Then post the architecture
                        this.surveyService.postArchitecture(architecture).subscribe();
                    }
                }
            }
            // Check if there are new questions added
            if (this.surveys[surveyIndex].questions.length < formData.questions.length) {
                for (var i = this.surveys[surveyIndex].questions.length; i < formData.questions.length; i++) {
                    this.lastQuestionId++;
                    question = {
                        "question_text": formData.questions[i].question_text,
                        "question_type": formData.questions[i].question_type
                    };
                    // First post the question
                    this.surveyService.postQuestion(question).subscribe();
                    this.surveyService.wait(50);
                    for (var j = 0; j < formData.questions[i].options.length; j++) {
                        this.lastOptionId++;
                        option = {
                            "option_text": formData.questions[i].options[j].option_text,
                            "question_id": this.lastQuestionId
                        };
                        this.surveyService.wait(50);
                        // Then post the option
                        this.surveyService.postOption(option).subscribe();
                        this.surveyService.wait(100);
                        architecture = {
                            "survey_id": this.surveys[surveyIndex].survey_id,
                            "question_id": this.lastQuestionId,
                            "option_id": this.lastOptionId
                        };
                        // Then post the architecture
                        this.surveyService.postArchitecture(architecture).subscribe();
                    }
                }
            }
        }
    };
    // Returns the surveyIndex that matches the formData.survey_id
    EditComponent.prototype.getSurveyIndex = function (formData) {
        var index;
        console.log("formData.survey_id" + formData.survey_id);
        if (formData.survey_id) {
            index = formData.survey_id - 1;
        }
        else {
            index = -1;
        }
        console.log("index" + index);
        return index;
    };
    // When user clicks save survey, display modal
    EditComponent.prototype.openModal = function () {
        this.modal.style.display = "block";
        setTimeout(function () { window.location.reload(); }, 12000);
    };
    // When user clicks X, close the modal and refresh the page to see changes
    EditComponent.prototype.closeModal = function () {
        this.modal.style.display = "none";
        window.location.reload();
    };
    // Updates the options active status
    EditComponent.prototype.updateOptionActiveStatus = function (question, option, bool) {
        if (!this.isNewSurvey) {
            var control = question.controls.options.at(option);
            control.patchValue({ option_is_active: bool });
        }
    };
    EditComponent.prototype.updateQuestionActiveStatus = function (question, bool) {
        if (!this.isNewSurvey) {
            var control = question;
            control.patchValue({ question_is_active: bool });
        }
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(632),
        styles: [__webpack_require__(588)],
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_services_survey_service__["a" /* SurveyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_survey_service__["a" /* SurveyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_survey_service__["a" /* SurveyService */]) === "function" && _b || Object])
], EditComponent);

var _a, _b;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_survey_service__ = __webpack_require__(46);
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
    function ExportRawComponent(surveyService, changeref) {
        this.surveyService = surveyService;
        this.changeref = changeref;
        // Holds the dynamic survey variables for display
        this.surveys = [];
        this.showExportDiv = false;
    }
    ExportRawComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.surveyService.getAllSurveys().subscribe(function (response) {
            var _loop_1 = function (i) {
                var survey = {
                    "survey_id": response.body[i].survey_id,
                    "survey_name": response.body[i].survey_name,
                    "date_created": response.body[i].date_created.split(" ")[0],
                    "survey_is_active": response.body[i].survey_is_active
                };
                _this.surveys.push(survey);
                // Get the survey questions by selectedSurveyId
                _this.surveyService.getAllSurveyQuestions(_this.surveys[i].survey_id).subscribe(function (response) {
                    // Initialize the questions
                    _this.surveys[i].questions = [];
                    // Iterate through the questions and push them one at a time
                    for (var j = 0; j < response.body.length; j++) {
                        var question = {
                            "question_id": response.body[j].question_id,
                            "question_text": response.body[j].question_text,
                            "question_type": response.body[j].question_type,
                            "question_is_active": response.body[j].question_is_active,
                            options: []
                        };
                        _this.surveys[i].questions.push(question);
                    }
                    // Get the survey options based on the selectedSurveyId
                    _this.surveyService.getAllSurveyOptions(_this.surveys[i].survey_id).subscribe(function (response) {
                        for (var k = 0; k < _this.surveys[i].questions.length; k++) {
                            for (var l = 0; l < response.body.length; l++) {
                                var option = {
                                    "option_id": response.body[l].option_id,
                                    "option_text": response.body[l].option_text,
                                    "option_is_active": response.body[l].option_is_active,
                                    "question_id": response.body[l].question_id
                                };
                                // If the question IDs match, push the option into the questions[j].options array
                                if (_this.surveys[i].questions[k].question_id == response.body[l].question_id) {
                                    _this.surveys[i].questions[k].options.push(option);
                                }
                            }
                        }
                        // Manually detect changes as the page will load faster than the async call
                        _this.changeref.detectChanges();
                    }, function (error) {
                        console.log('error is ', error);
                    });
                    // Get the survey responses based on the selectedSurveyID
                    _this.surveyService.getSurveyResponses(_this.surveys[i].survey_id).subscribe(function (response) {
                        for (var k = 0; k < _this.surveys[i].questions.length; k++) {
                            _this.surveys[i].questions[k].responses = [];
                            for (var l = 0; l < response.body.length; l++) {
                                var response1 = {
                                    "response_id": response.body[l].response_id,
                                    "survey_id": response.body[l].survey_id,
                                    "question_id": response.body[l].question_id,
                                    "option_id": response.body[l].option_id,
                                    "response_text": response.body[l].response_text,
                                    "date_taken": response.body[l].date_taken.split(" ")[0],
                                    "survey_hash": response.body[l].survey_hash
                                };
                                // If the question IDs match, push the response into the questions[j].responses array
                                if (_this.surveys[i].questions[k].question_id == response.body[l].question_id) {
                                    _this.surveys[i].questions[k].responses.push(response1);
                                }
                            }
                        }
                        // Manually detect changes as the page will load faster than the async call
                        _this.changeref.detectChanges();
                        _this.showExportDiv = true;
                        // set the current survey to the first survey in the  globals
                        _this.currSurvey = _this.surveys[0];
                        // update the date value select to be the date created of the survey
                        _this.updateDate(_this.currSurvey.date_created);
                        // update the upper date limit with the latest response on the current survey
                        _this.updateDateUpper(_this.currSurvey.questions[0].responses[_this.currSurvey.questions[0].responses.length - 1].date_taken);
                        // set the data feed to -1 which is all questions
                        _this.updateDataFeed(-1);
                    }, function (error) {
                        console.log('error is ', error);
                    });
                    // Manually detect changes as the page will load faster than the async call
                    _this.changeref.detectChanges();
                }, function (error) {
                    console.log('error is ', error);
                });
                // Manually detect changes as the page will load faster than the async call
                _this.changeref.detectChanges();
            };
            // Get 1 survey at a time and push into surveys array
            for (var i = 0; i < response.body.length; i++) {
                _loop_1(i);
            }
        }, function (error) {
            console.log('error is ', error);
        });
    };
    // sets the survey name to readonly based on the edit global
    ExportRawComponent.prototype.setReadOnly = function () {
        return this.nameReadOnly;
    };
    // set the date filter global from the survey
    ExportRawComponent.prototype.updateDate = function (date) {
        this.dateFilterStart = date;
    };
    // set the upper date filter global from the survey
    ExportRawComponent.prototype.updateDateUpper = function (date) {
        this.dateFilterEnd = date;
    };
    // set the current survey from the given id 
    ExportRawComponent.prototype.updateSurvey = function (id) {
        this.currSurvey = this.surveys[id - 1];
        // get questions from the current survey
        this.getQuestions();
        // update feed to -1 which is all questions
        this.updateDataFeed(-1);
    };
    // get all the questions of the current survey, filtering out the inactive ones
    ExportRawComponent.prototype.getQuestions = function () {
        return this.currSurvey.questions.filter(function (question) {
            return question.question_is_active === true;
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
                if (question.question_is_active) {
                    question.responses.forEach(function (response) {
                        _this.dataFeed.push({
                            question: question.question_text,
                            question_id: question.question_id,
                            response: response.response_text,
                            date_taken: response.date_taken
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
                            date_taken: response.date_taken
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
        console.log("This is the csv: " + csv.join("\n"));
    };
    return ExportRawComponent;
}());
ExportRawComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-exportRaw',
        styles: [__webpack_require__(589)],
        template: __webpack_require__(633),
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_services_survey_service__["a" /* SurveyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_survey_service__["a" /* SurveyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services_survey_service__["a" /* SurveyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], ExportRawComponent);

var _a, _b;
//# sourceMappingURL=exportRaw.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_graph_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_survey_service__ = __webpack_require__(46);
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
    function GraphsComponent(graphService, changeref, surveyService, fb) {
        this.graphService = graphService;
        this.changeref = changeref;
        this.surveyService = surveyService;
        this.fb = fb;
        // global to track which switch for the dataset
        this.currentDatasetType = 'single';
        // chart object
        this.chart = null;
        // hold off on displaying div until this is true after data loaded
        this.displayDiv = false;
        // Holds the dynamic survey variables for display
        this.surveys = [];
        // sub question options global
        this.subQuestionOptions = [];
    }
    ;
    GraphsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // init the chart form
        this.initChartForm();
        // get the surveys and populated inner fields with inner get calls
        this.surveyService.getAllSurveys().subscribe(function (response) {
            var _loop_1 = function (i) {
                var survey = {
                    "survey_id": response.body[i].survey_id,
                    "survey_name": response.body[i].survey_name,
                    "date_created": response.body[i].date_created,
                    questions: []
                };
                //this.surveys.push(survey);
                _this.surveys.push(survey);
                // Manually detect changes as the page will load faster than the async call
                _this.changeref.detectChanges();
                // Get the survey questions by selectedSurveyId
                _this.surveyService.getAllSurveyQuestions(_this.surveys[i].survey_id).subscribe(function (response) {
                    // Initialize the questions
                    _this.surveys[i].questions = [];
                    // Iterate through the questions and push them one at a time
                    for (var j = 0; j < response.body.length; j++) {
                        var question = {
                            "question_id": response.body[j].question_id,
                            "question_text": response.body[j].question_text,
                            "question_type": response.body[j].question_type,
                            "question_is_active": response.body[j].question_is_active,
                            options: [],
                            responses: []
                        };
                        //this.surveys[i].questions.push(question);
                        _this.surveys[i].questions.push(question);
                        // Manually detect changes as the page will load faster than the async call
                        _this.changeref.detectChanges();
                    }
                    // Get the survey options based on the selectedSurveyId
                    _this.surveyService.getAllSurveyOptions(_this.surveys[i].survey_id).subscribe(function (response) {
                        for (var k = 0; k < _this.surveys[i].questions.length; k++) {
                            for (var l = 0; l < response.body.length; l++) {
                                var option = {
                                    "option_id": response.body[l].option_id,
                                    "option_text": response.body[l].option_text,
                                    "option_is_active": response.body[l].option_is_active,
                                    "question_id": response.body[l].question_id
                                };
                                // If the question IDs match, push the option into the questions[j].options array
                                if (_this.surveys[i].questions[k].question_id == response.body[l].question_id) {
                                    _this.surveys[i].questions[k].options.push(option);
                                    // Manually detect changes as the page will load faster than the async call
                                    _this.changeref.detectChanges();
                                }
                            }
                        }
                        // Manually detect changes as the page will load faster than the async call
                        _this.changeref.detectChanges();
                        // Get the survey responses based on the selectedSurveyId
                        _this.surveyService.getSurveyResponses(_this.surveys[i].survey_id).subscribe(function (response) {
                            for (var m = 0; m < _this.surveys[i].questions.length; m++) {
                                for (var n = 0; n < response.body.length; n++) {
                                    var responseData = {
                                        "question_id": response.body[n].question_id,
                                        "survey_id": response.body[n].survey_id,
                                        "option_id": response.body[n].option_id,
                                        "response_text": response.body[n].response_text,
                                        "survey_hash": response.body[n].survey_hash
                                    };
                                    // If the question IDs match, push the response into the questions[j].response array
                                    if (_this.surveys[i].questions[m].question_id == response.body[n].question_id) {
                                        _this.surveys[i].questions[m].responses.push(responseData);
                                        // Manually detect changes as the page will load faster than the async call
                                        _this.changeref.detectChanges();
                                    }
                                }
                            }
                            // Manually detect changes as the page will load faster than the async call
                            _this.changeref.detectChanges();
                            //if (i == this.surveys.length - 1) {
                            // set the display to be true after the page has loaded
                            _this.displayDiv = true;
                            // init the options form
                            _this.initOptionsForm();
                            // grab the updated selected options
                            _this.updateSelectedOptions();
                            // html canvas elemnt to context that ChartJS can work with
                            _this.canvas = document.getElementById('graphCanvas');
                            _this.ctx = _this.canvas.getContext('2d');
                            // update the chart visually
                            _this.updateChart();
                            //  }
                        }, function (error) {
                            console.log('error is ', error);
                        });
                        // Manually detect changes as the page will load faster than the async call
                        _this.changeref.detectChanges();
                    }, function (error) {
                        console.log('error is ', error);
                    });
                    // Manually detect changes as the page will load faster than the async call
                    _this.changeref.detectChanges();
                }, function (error) {
                    console.log('error is ', error);
                });
                // Manually detect changes as the page will load faster than the async call
                _this.changeref.detectChanges();
            };
            // Get 1 survey at a time and push into surveys array
            for (var i = 0; i < response.body.length; i++) {
                _loop_1(i);
            }
            // Manually detect changes as the page will load faster than the async call
            _this.changeref.detectChanges();
        }, function (error) {
            console.log('error is ', error);
        });
    };
    // init chart form
    GraphsComponent.prototype.initChartForm = function () {
        this.chartForm = this.fb.group({
            chartType: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('pie'),
            surveyId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('1'),
            questionId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('1'),
            subQuestionId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('2')
        });
    };
    // init the options with the subquestion id appropiately 
    GraphsComponent.prototype.initOptionsForm = function () {
        var controls = this.getSubQuestionOptions().map(function (o) { return new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](false); });
        this.optionsForm = this.fb.group({
            options: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormArray */](controls)
        });
    };
    // get the options of the sub questions with active options
    GraphsComponent.prototype.getSubQuestionOptions = function () {
        var sid = this.chartForm.controls.surveyId.value;
        var qid = this.chartForm.controls.subQuestionId.value;
        var opsReturn;
        this.surveys[sid - 1].questions.forEach(function (q) {
            if (q.question_id == qid) {
                opsReturn = q.options
                    .filter(function (option) { return option.option_is_active === true; });
            }
        });
        return opsReturn;
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
            this.destroyChart();
            var c = this.graphService.createMatrixChart(this.ctx, this.chartForm.controls.chartType.value, this.matrixGraphData());
            this.buildChart(c);
        }
    };
    // update the options being listed
    GraphsComponent.prototype.updateSubQuestionOptions = function () {
        // resets the options form to be all false when a new question is selected
        this.initOptionsForm();
    };
    // map the dataset for an individual dataset graph
    GraphsComponent.prototype.mapSingleData = function () {
        var _this = this;
        var map = new Map();
        var survey = this.surveys[this.chartForm.controls.surveyId.value - 1];
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
    // update the selected options to only be the checked ones
    GraphsComponent.prototype.updateSelectedOptions = function () {
        var options = this.getSubQuestionOptions();
        this.selectedOptions = this.optionsForm.value.options
            .map(function (v, i) { return v ? options[i].option_text : null; })
            .filter(function (v) { return v !== null; });
    };
    GraphsComponent.prototype.mapTopLevelFilter = function () {
        var _this = this;
        var responseMap = new Map();
        this.surveys[this.chartForm.controls.surveyId.value - 1].questions.forEach(function (q) {
            if (q.question_id == _this.chartForm.controls.questionId.value) {
                q.responses.map(function (r) { return responseMap.set(r.survey_hash, r.response_text); });
            }
        });
        return responseMap;
    };
    ///Matrix label map 
    GraphsComponent.prototype.initMatrixLabelsMap = function () {
        var _this = this;
        var labelMap = new Map();
        this.surveys[this.chartForm.controls.surveyId.value - 1].questions.forEach(function (q) {
            if (q.question_id == _this.chartForm.controls.questionId.value) {
                // on every option, if the option is active, add to the label map, if not active then nothing happens
                q.options.map(function (o) { return o.option_is_active ? labelMap.set(o.option_text, 0) : null; });
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
            _this.surveys[_this.chartForm.controls.surveyId.value - 1].questions.forEach(function (sq) {
                if (sq.question_id == _this.chartForm.controls.subQuestionId.value) {
                    // loop through all the sub question responses
                    sq.responses.forEach(function (r) {
                        // question map has hash id key of this response
                        if (questionMap.has(r.survey_hash)) {
                            // key for new 'map'
                            var k = questionMap.get(r.survey_hash);
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
            var color = _this.graphService.getColorByIndex(index, _this.chartForm.controls.chartType.value);
            datasets.push({
                label: o,
                data: Array.from(dsMap.values()),
                backgroundColor: color,
                fill: _this.chartForm.controls.chartType.value != 'line' ? true : false,
                borderColor: color
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
    // set the single state button to disabled or not disabled
    GraphsComponent.prototype.buttonStateSingle = function () {
        return this.currentDatasetType == 'single' ? true : false;
    };
    // set the multiple state button to disabled or not disabled
    GraphsComponent.prototype.buttonStateMultiple = function () {
        return this.currentDatasetType == 'multiple' ? true : false;
    };
    // update the dataset switch to single or multiple
    GraphsComponent.prototype.updateMultipleDataSetForm = function (val) {
        // if multiple datasets, set default to bar
        if (val == 'multiple') {
            this.chartForm.controls.chartType.setValue('bar');
        }
        // set the global value for current dataset type
        this.currentDatasetType = val;
        // update chart accordingly to filters
        this.updateChart();
    };
    return GraphsComponent;
}());
GraphsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-graphs',
        template: __webpack_require__(634),
        styles: [__webpack_require__(590)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_graph_service__["a" /* GraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_graph_service__["a" /* GraphService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_survey_service__["a" /* SurveyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_survey_service__["a" /* SurveyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _d || Object])
], GraphsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=graphs.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_graph_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_survey_service__ = __webpack_require__(46);
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
    function HomeComponent(graphService, surveyService, changeref) {
        this.graphService = graphService;
        this.surveyService = surveyService;
        this.changeref = changeref;
        // chart object
        this.chart = null;
        // Holds the dynamic survey variables for display
        this.surveys = [];
        // Forces home page to wait on the get calls to the database
        this.showHomeDiv = false;
        // Forces home page to wait on the get calls to the database
        this.showInfo = false;
        // Holds the survey details to determine if survey is active
        this.surveyDetails = [];
        // Used to keep track 
        this.currSurveyIndex = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the modal
        this.modal = document.getElementById('success');
        // get the canvas
        this.canvas = document.getElementById('graphCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.surveyService.getAllSurveysInfo().subscribe(function (response) {
            for (var i = 0; i < response.body.length; i++) {
                var survey = {
                    "survey_id": response.body[i].survey_id,
                    "survey_name": response.body[i].survey_name,
                    "date_created": response.body[i].date_created.split(" ")[0],
                    "survey_is_active": response.body[i].survey_is_active,
                    "response_count": response.body[i].response_count
                };
                _this.surveyDetails.push(survey);
            }
        }, function (error) {
            console.log('error is ', error);
        });
        this.surveyService.getAllSurveysInfo().subscribe(function (response) {
            for (var i = 0; i < response.body.length; i++) {
                var submissions = {
                    "survey_id": response.body[i].survey_id,
                    //"date_taken": response.body[i].date_taken.split(" ")[0],
                    "count": response.body[i].count
                };
            }
        }, function (error) {
            console.log('error is ', error);
        });
        this.surveyService.getAllSurveys().subscribe(function (response) {
            var _loop_1 = function (i) {
                var survey = {
                    "survey_id": response.body[i].survey_id,
                    "survey_name": response.body[i].survey_name,
                    "date_created": response.body[i].date_created.split(" ")[0],
                    "survey_is_active": response.body[i].survey_is_active
                };
                _this.surveys.push(survey);
                // Get the survey questions by selectedSurveyId
                _this.surveyService.getAllSurveyQuestions(_this.surveys[i].survey_id).subscribe(function (response) {
                    // Initialize the questions
                    _this.surveys[i].questions = [];
                    // Iterate through the questions and push them one at a time
                    for (var j = 0; j < response.body.length; j++) {
                        var question = {
                            "question_id": response.body[j].question_id,
                            "question_text": response.body[j].question_text,
                            "question_type": response.body[j].question_type,
                            "question_is_active": response.body[j].question_is_active,
                            options: [],
                            responses: []
                        };
                        _this.surveys[i].questions.push(question);
                    }
                    // Manually detect changes as the page will load faster than the async call
                    _this.changeref.detectChanges();
                    _this.surveyService.getSurveyResponses(_this.surveys[i].survey_id).subscribe(function (response) {
                        for (var k = 0; k < _this.surveys[i].questions.length; k++) {
                            for (var l = 0; l < response.body.length; l++) {
                                var responseData = {
                                    "response_id": response.body[l].response_id,
                                    "survey_id": response.body[l].survey_id,
                                    "question_id": response.body[l].question_id,
                                    "option_id": response.body[l].option_id,
                                    "response_text": response.body[l].response_text,
                                    "date_taken": response.body[l].date_taken.split(" ")[0],
                                    "survey_hash": response.body[l].survey_hash
                                };
                                // If the question IDs match, push the response into the questions[j].responses array
                                if (_this.surveys[i].questions[k].question_id == response.body[l].question_id) {
                                    _this.surveys[i].questions[k].responses.push(responseData);
                                }
                            }
                        }
                        // Manually detect changes as the page will load faster than the async call
                        _this.changeref.detectChanges();
                        if (i == _this.surveys.length - 1) {
                            _this.showHomeDiv = true;
                            _this.showInfo = true;
                        }
                    }, function (error) {
                        console.log('error is ', error);
                    });
                    // Manually detect changes as the page will load faster than the async call
                    _this.changeref.detectChanges();
                }, function (error) {
                    console.log('error is ', error);
                });
                // Manually detect changes as the page will load faster than the async call
                _this.changeref.detectChanges();
            };
            // Get 1 survey at a time and push into surveys array
            for (var i = 0; i < response.body.length; i++) {
                _loop_1(i);
            }
        }, function (error) {
            console.log('error is ', error);
        });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // update chart after .75 seconds have passed to allow for all the data to be retrieved
        setTimeout(function () { _this.updateChart(); }, 750);
    };
    ;
    // Updates survey, changing it's active status
    HomeComponent.prototype.updateActiveSurvey = function () {
        var survey = {
            "survey_id": this.surveyDetails[this.currSurveyIndex].survey_id,
            "survey_is_active": this.surveyDetails[this.currSurveyIndex].survey_is_active
        };
        // Checks if survey is currently active
        if (this.surveyDetails[this.currSurveyIndex].survey_is_active) {
            this.surveyDetails[this.currSurveyIndex].survey_is_active = false;
            survey.survey_is_active = false;
            this.surveyService.updateSurveyActive(survey).subscribe();
        }
        else {
            this.surveyDetails[this.currSurveyIndex].survey_is_active = true;
            survey.survey_is_active = true;
            this.surveyService.updateSurveyActive(survey).subscribe();
        }
        // closes the modal
        this.modal.style.display = "none";
        window.location.reload();
    };
    // Builds chart with survey date data
    HomeComponent.prototype.updateChart = function () {
        this.destroyChart();
        var c = this.graphService.createDateChart(this.ctx, "line", this.dateGraphData());
        this.buildChart(c);
    };
    // destroys chart if a chart is already there(for refresh button)
    HomeComponent.prototype.destroyChart = function () {
        if (this.chart != null) {
            this.chart.destroy();
        }
    };
    // builds the chart
    HomeComponent.prototype.buildChart = function (chartData) {
        this.chart = chartData;
        this.chart.update();
    };
    // go through the surveys and get the info for the survey details card
    HomeComponent.prototype.getSurveyInfo = function () {
        var surveyDetails = [];
        this.surveys.forEach(function (survey) {
            var submissionCount = 0;
            // get the number of responses on each question of the survey
            survey.questions.map(function (q) { submissionCount += q.responses.length; });
            // push details to array
            surveyDetails.push({
                survey_id: survey.survey_id,
                name: survey.survey_name,
                date: survey.date_created,
                status: survey.survey_is_active,
                // round down the operation of the the total submissions divided by the number of questions, parse to string for formatting
                submissions: Math.round(submissionCount / survey.questions.length).toLocaleString(),
            });
        });
        return surveyDetails;
    };
    // Push all the surveys information into a datasets array and return it for chart creation
    HomeComponent.prototype.dateGraphData = function () {
        var dataset = new Array();
        for (var index = 0; index < this.surveys.length; index++) {
            // push the dataset values
            dataset.push({
                label: this.surveys[index].survey_name,
                data: this.pushDateDataBySurvey(index),
                backgroundColor: this.graphService.getColorByIndex(index, 'date'),
                borderColor: this.graphService.getColorByIndex(index, 'date'),
                fill: false
            });
        }
        ;
        return {
            datasets: dataset,
        };
    };
    // Sets the date taken and submit count for each date taken for each survey
    HomeComponent.prototype.pushDateDataBySurvey = function (surveyIndex) {
        var data = new Array();
        // Push the values with the labels to the data array
        for (var r = 0; r <= this.surveys[surveyIndex].questions[0].responses.length; r++) {
            data.push({
                // the date.taken text for each response on a given date taken
                x: Array.from(this.mapDateData(surveyIndex).keys())[r],
                // the count for amount of surveys taken on each date.taken
                y: Array.from(this.mapDateData(surveyIndex).values())[r]
            });
        }
        // returns data to the datasets
        return data;
    };
    // Map a surveys dates and count how much surveys were taken per that date
    HomeComponent.prototype.mapDateData = function (surveyIndex) {
        var _this = this;
        var map = new Map();
        // makes sure the question is part of current survey
        var questionIndex = 0;
        // Maps each survey separately to be able to display on the same graphs
        this.surveys[surveyIndex].questions.forEach(function (question) {
            // Used to increment question index if current question is not a checkbox
            var questionId = _this.surveys[surveyIndex].questions[questionIndex].question_id;
            // confirms that the question is active and not a checkbox
            if (question.question_id == questionId && question.question_type != "checkbox" && question.question_is_active == true) {
                question.responses.forEach(function (r) {
                    // checks to make sure to only grab responses from the last year
                    var testdate = new Date(r.date_taken);
                    if (testdate >= _this.getDateYearAgo()) {
                        if (map.has(r.date_taken)) {
                            var count = map.get(r.date_taken);
                            // increment count by 1
                            count += 1;
                            map.set(r.date_taken, count);
                        }
                        else {
                            map.set(r.date_taken, 1);
                        }
                    }
                });
            }
            else {
                questionIndex++;
            }
        });
        return map;
    };
    // Get date from exactly one year ago to make sure that only surveys taken in the past year are graphed
    HomeComponent.prototype.getDateYearAgo = function () {
        var today = new Date();
        var d = today.getDate();
        var m = today.getMonth() + 1;
        var yyyy = today.getFullYear() - 1;
        var mm;
        var dd;
        if (d < 10) {
            dd = '0' + d;
        }
        else {
            dd = '' + d;
        }
        if (m < 10) {
            mm = '0' + m;
        }
        else {
            mm = '' + m;
        }
        // puts the date from a year ago into date format
        var yearago = new Date(yyyy + '-' + mm + '-' + dd);
        // reaturns the date to check against the date.taken of each submission
        return yearago;
    };
    // When user clicks save survey, display modal
    HomeComponent.prototype.openModal = function (id) {
        this.currSurveyIndex = id - 1;
        this.modal.style.display = "block";
    };
    // When user clicks X, close the modal and refresh the page to see changes
    HomeComponent.prototype.closeModal = function () {
        this.modal.style.display = "none";
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__(635),
        styles: [__webpack_require__(591)],
        providers: [__WEBPACK_IMPORTED_MODULE_2_app_services_survey_service__["a" /* SurveyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_graph_service__["a" /* GraphService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_graph_service__["a" /* GraphService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_survey_service__["a" /* SurveyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_survey_service__["a" /* SurveyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_survey_service__ = __webpack_require__(46);
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
    function InputComponent(surveyService, changeref, auth) {
        this.surveyService = surveyService;
        this.changeref = changeref;
        this.auth = auth;
        // Array that holds all survey structuring data
        this.surveys = [];
        this.selectedSurveyName = "";
        // Fills when multiple choices are selected by updateResponses()
        this.checkboxChoices = [];
        // Pushes/pops when user selects next or previous
        this.surveyData = [];
    }
    // On component initialization, get the survey ids, names, and date created
    InputComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the modal
        this.modal = document.getElementById('success');
        this.surveyService.getActiveSurveys().subscribe(function (response) {
            // Get 1 survey at a time and push into surveys array
            for (var i = 0; i < response.body.length; i++) {
                var survey = {
                    "survey_id": response.body[i].survey_id,
                    "survey_name": response.body[i].survey_name,
                    "date_created": response.body[i].date_created,
                    questions: [],
                };
                _this.surveys.push(survey);
            }
            _this.changeref.detectChanges();
        }, function (error) {
            console.log('error is ', error);
        });
        //Generates UUID on initialization and sets it to currentUser
        this.currentUser = this.generateUUID();
    };
    // After initial load, delay the survey select so data can properly load from DB
    InputComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.surveySelect(_this.surveys[0].survey_id); }, 1000);
    };
    // This continuously checks if the user is authenticated
    InputComponent.prototype.ngDoCheck = function () {
        // If authenticated, redirect to the home dashboard
        if (!this.auth.isAuthenticated) {
            //this.router.navigate(['home']);
        }
    };
    // When a user clicks an option from the dropdown menu
    InputComponent.prototype.surveySelect = function (survey_id) {
        var _this = this;
        // Sets the selected survey id based on the one chosen from the webpage
        this.selectedSurveyId = survey_id;
        // Iterates through the surveys array and sets the index to the survey selected
        for (var i = 0; i < this.surveys.length; i++) {
            if (this.selectedSurveyId == this.surveys[i].survey_id) {
                this.selectedSurveyIndex = i;
            }
            this.surveys[i].questions = [];
        }
        // Sets default survey name and updates on select
        this.selectedSurveyName = this.surveys[this.selectedSurveyIndex].survey_name;
        // Once the selected surveyID is done, this will populate the data using the selected ID
        this.surveyService.getActiveSurveyQuestions(this.selectedSurveyId).subscribe(function (response) {
            // Initialize the questions
            // this.surveys[this.selectedSurveyIndex].questions = [];
            // Iterate through the questions and push them one at a time
            for (var i = 0; i < response.body.length; i++) {
                var question = {
                    "question_id": response.body[i].question_id,
                    "question_text": response.body[i].question_text,
                    "question_type": response.body[i].question_type,
                    "question_is_active": response.body[i].question_is_active,
                    options: []
                };
                _this.surveys[_this.selectedSurveyIndex].questions.push(question);
            }
            //  console.log(this.surveys[this.selectedSurveyIndex]);
            _this.changeref.detectChanges();
            // Get the survey options based on the selectedSurveyId
            _this.surveyService.getActiveSurveyOptions(_this.selectedSurveyId).subscribe(function (response) {
                for (var j = 0; j < _this.surveys[_this.selectedSurveyIndex].questions.length; j++) {
                    for (var k = 0; k < response.body.length; k++) {
                        var option = {
                            "option_id": response.body[k].option_id,
                            "option_text": response.body[k].option_text,
                            "option_is_active": response.body[k].option_is_active,
                            "question_id": response.body[k].question_id
                        };
                        // If the question IDs match, push the option into the questions[j].options array
                        if (_this.surveys[_this.selectedSurveyIndex].questions[j].question_id == response.body[k].question_id) {
                            _this.surveys[_this.selectedSurveyIndex].questions[j].options.push(option);
                            // console.log(this.surveys[this.selectedSurveyIndex].questions[j].options[k]);
                        }
                    }
                }
                _this.changeref.detectChanges();
            }, function (error) {
                console.log('error is ', error);
            });
        }, function (error) {
            console.log('error is ', error);
        });
    };
    // Deals with Radio/Text/Select and grabs correct values for DB
    InputComponent.prototype.valueChanges = function (survey_id, question_id, option_id, option_text) {
        // Checks for multiple options, runs for SELECT type
        if (typeof option_id == 'object') {
            // option is an array, filter the correct option id to get correlating option_text
            var options = option_id.filter(function (option) { return option.option_id == option_text; });
            option_id = options[0].option_id;
            option_text = options[0].option_text;
        }
        // Creates response object to be able to model for
        var response = {
            'survey_id': survey_id,
            'question_id': question_id,
            'option_id': option_id,
            'response_text': option_text,
            'survey_hash': this.currentUser
        };
        // Gets the question index in the surveys.questions array from the question id
        var question_index = this.surveys[this.selectedSurveyIndex].questions.findIndex(function (i) { return i.question_id === question_id; });
        // Sets the current question response model based off values passed through
        this.surveys[this.selectedSurveyIndex].questions[question_index].responseModel = [response];
    };
    // Updates response array based on checked box
    InputComponent.prototype.updateCheckbox = function (currentQuestion, option_text, isChecked, option_id, survey_id) {
        // Checks to see if current question has response, if not make a response array for that Q  
        if (!currentQuestion.response) {
            currentQuestion.response = [];
            currentQuestion.responseModel = [];
        }
        // If Checkbox is checked, push the content of the checked box to response array
        if (isChecked) {
            currentQuestion.response.push(option_text); // Pushes value selected into response array
            var response = {
                survey_id: survey_id,
                question_id: currentQuestion.question_id,
                option_id: option_id,
                response_text: option_text,
                survey_hash: this.currentUser
            };
            currentQuestion.responseModel.push(response);
        }
        else {
            var index = currentQuestion.response.findIndex(function (o) { return o === option_text; });
            var temp = currentQuestion.responseModel.filter(function (item) { return item.option_id != option_id; });
            currentQuestion.responseModel = temp;
            currentQuestion.response.splice(index, 1);
        }
    };
    // Submit Button Functionality
    InputComponent.prototype.save = function () {
        var _this = this;
        // Takes the responsemodel from each question and pushes it to the surveyData object
        this.surveys[this.selectedSurveyIndex].questions.forEach(function (element) {
            _this.surveyData = _this.surveyData.concat(element.responseModel);
        });
        // Uncleaned surveyData Array
        console.log(this.surveyData);
        // Takes surveyData array and cleans it of undefined values in array
        this.surveyData = this.surveyData.filter(function (element) {
            return element !== undefined;
        });
        // Cleaned surveyData Array
        console.log(this.surveyData);
        // Post the surveyData array to the API
        this.surveyService.postSurveyResponse(this.surveyData).subscribe();
        // Function to reload the page once submitted, this makes it so they can't submit it multiple times
        window.location.reload();
    };
    // Generates a unique user hash for the current user using the page
    InputComponent.prototype.generateUUID = function () {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
    // When user clicks save survey, display modal
    InputComponent.prototype.openModal = function () {
        var _this = this;
        this.modal.style.display = "block";
        if (this.modal.style.display == "block") {
            setTimeout(function () { _this.closeModal(); }, 3000);
        }
    };
    // When user clicks X, close the modal and refresh the page to see changes
    InputComponent.prototype.closeModal = function () {
        window.location.reload();
    };
    return InputComponent;
}());
InputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-input',
        template: __webpack_require__(636),
        styles: [__webpack_require__(592)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_survey_service__["a" /* SurveyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_survey_service__["a" /* SurveyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_survey_service__["a" /* SurveyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], InputComponent);

var _a, _b, _c;
//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(637),
        styles: [__webpack_require__(593)]
    })
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_survey_service__ = __webpack_require__(46);
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
    function SurveyComponent(surveyService, changeref, auth) {
        this.surveyService = surveyService;
        this.changeref = changeref;
        this.auth = auth;
        // Array that holds all survey structuring data
        this.surveys = [];
        // References the question page number in HTML
        this.pageNumber = 0;
        // Displays the welcome HTML when false and displays the survey HTML when true
        this.showSurveyDiv = false;
        // Fills when multiple choices are selected by updateResponses()
        this.checkboxChoices = [];
        // Pushes/pops when user selects next or previous
        this.surveyData = [];
        // Disables the save button once they press it so user can't save multiple times
        this.disabledSave = false;
    }
    // On component initialization, get the survey ids, names, and date created
    SurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Generates UUID on initialization and sets it to currentUser
        this.currentUser = this.generateUUID();
        // Gets all active surveys
        this.surveyService.getActiveSurveys().subscribe(function (response) {
            // Get 1 survey at a time and push into surveys array
            for (var i = 0; i < response.body.length; i++) {
                var survey = {
                    "survey_id": response.body[i].survey_id,
                    "survey_name": response.body[i].survey_name,
                    "date_created": response.body[i].date_created,
                    questions: [],
                };
                _this.surveys.push(survey);
            }
            // Manually refresh the HTML component
            _this.changeref.detectChanges();
        }, function (error) {
            console.log('error is ', error);
        });
    };
    // This continuously checks if the user is authenticated
    SurveyComponent.prototype.ngDoCheck = function () {
        // If authenticated, redirect to the home dashboard
        if (!this.auth.isAuthenticated) {
            //this.router.navigate(['home']);
        }
    };
    // When a user clicks a survey name option from the dropdown menu, save the selectedSurveyId and selectedSurveyIndex
    SurveyComponent.prototype.surveySelect = function (surveyId) {
        // Sets the selected survey_id to the one chosen from the webpage
        this.selectedSurveyId = surveyId;
        // Iterates through the surveys array and sets the index based on survey_id
        for (var i = 0; i < this.surveys.length; i++) {
            if (this.selectedSurveyId == this.surveys[i].survey_id) {
                this.selectedSurveyIndex = i;
            }
            // Initialize the survey's questions
            this.surveys[i].questions = [];
        }
    };
    // When user clicks start, show the survey HTML, then get all active survey questions and options
    SurveyComponent.prototype.onStart = function () {
        var _this = this;
        this.showSurveyDiv = true;
        // Once the selected surveyID is done, this will populate the data using the selected ID
        this.surveyService.getActiveSurveyQuestions(this.selectedSurveyId).subscribe(function (response) {
            // Initialize the questions
            _this.surveys[_this.selectedSurveyIndex].questions = [];
            // Iterate through the questions and push them one at a time
            for (var i = 0; i < response.body.length; i++) {
                var question = {
                    "question_id": response.body[i].question_id,
                    "question_text": response.body[i].question_text,
                    "question_type": response.body[i].question_type,
                    "question_is_active": response.body[i].question_is_active,
                    options: []
                };
                _this.surveys[_this.selectedSurveyIndex].questions.push(question);
            }
            _this.changeref.detectChanges();
            // Get the survey options based on the selectedSurveyId
            _this.surveyService.getActiveSurveyOptions(_this.selectedSurveyId).subscribe(function (response) {
                for (var j = 0; j < _this.surveys[_this.selectedSurveyIndex].questions.length; j++) {
                    for (var k = 0; k < response.body.length; k++) {
                        var option = {
                            "option_id": response.body[k].option_id,
                            "option_text": response.body[k].option_text,
                            "option_is_active": response.body[k].option_is_active,
                            "question_id": response.body[k].question_id
                        };
                        // If the question IDs match, push the option into the questions[j].options array
                        if (_this.surveys[_this.selectedSurveyIndex].questions[j].question_id == response.body[k].question_id) {
                            _this.surveys[_this.selectedSurveyIndex].questions[j].options.push(option);
                        }
                    }
                }
                _this.changeref.detectChanges();
            }, function (error) {
                console.log('error is ', error);
            });
        }, function (error) {
            console.log('error is ', error);
        });
    };
    // Deals with Radio/Text/Select and grabs correct values for DB
    SurveyComponent.prototype.valueChanges = function (survey_id, question_id, option_id, option_text) {
        // Checks for multiple options, runs for SELECT type
        if (typeof option_id == 'object') {
            // Options is an array, filter the correct option id to get correlating option_text
            var options = option_id.filter(function (option) { return option.option_id == option_text; });
            option_id = options[0].option_id;
            option_text = options[0].option_text;
        }
        // Creates response object
        var response = {
            "survey_id": survey_id,
            "question_id": question_id,
            "option_id": option_id,
            "response_text": option_text,
            "survey_hash": this.currentUser
        };
        // Gets the question index in the surveys.questions array from the question id
        var question_index = this.surveys[this.selectedSurveyIndex].questions.findIndex(function (i) { return i.question_id === question_id; });
        // Sets the current question response model based off values passed through
        this.surveys[this.selectedSurveyIndex].questions[question_index].responseModel = [response];
    };
    // Updates response array based on checked box
    SurveyComponent.prototype.updateCheckbox = function (currentQuestion, option_text, isChecked, option_id, survey_id) {
        // Checks to see if current question has response, if not make a response array for that Q  
        if (!currentQuestion.response) {
            currentQuestion.response = [];
            currentQuestion.responseModel = [];
        }
        // If Checkbox is checked, push the content of the checked box to response array
        if (isChecked) {
            // Pushes value selected into response array
            currentQuestion.response.push(option_text);
            var response = {
                "survey_id": survey_id,
                "question_id": currentQuestion.question_id,
                "option_id": option_id,
                "response_text": option_text,
                "survey_hash": this.currentUser
            };
            currentQuestion.responseModel.push(response);
        }
        else {
            var index = currentQuestion.response.findIndex(function (o) { return o === option_text; });
            var temp = currentQuestion.responseModel.filter(function (item) { return item.option_id != option_id; });
            currentQuestion.responseModel = temp;
            currentQuestion.response.splice(index, 1);
        }
    };
    // TODO
    SurveyComponent.prototype.hideQuestion = function (index) {
        if (this.pageNumber == index) {
            return false;
        }
        else {
            return true;
        }
    };
    // TODO
    SurveyComponent.prototype.onNext = function () {
        this.pageNumber++;
    };
    // TODO
    SurveyComponent.prototype.onPrevious = function () {
        this.pageNumber--;
    };
    // TODO
    SurveyComponent.prototype.isFirstPage = function () {
        if (this.pageNumber == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    // TODO
    SurveyComponent.prototype.isLastPage = function () {
        if (this.pageNumber == this.surveys[this.selectedSurveyIndex].questions.length - 1) {
            return true;
        }
        else {
            return false;
        }
    };
    // Submit Button Functionality
    SurveyComponent.prototype.save = function () {
        var _this = this;
        this.disabledSave = true;
        // Takes the responsemodel from each question and pushes it to the surveyData object
        this.surveys[this.selectedSurveyIndex].questions.forEach(function (element) {
            _this.surveyData = _this.surveyData.concat(element.responseModel);
        });
        // Uncleaned surveyData Array
        console.log(this.surveyData);
        // Takes surveyData array and cleans it of undefined values in array
        this.surveyData = this.surveyData.filter(function (element) {
            return element !== undefined;
        });
        // Cleaned surveyData Array
        console.log(this.surveyData);
        // Post the surveyData array to the API
        this.surveyService.postSurveyResponse(this.surveyData).subscribe();
        // Function to reload the page once submitted, this makes it so they can't submit it multiple times
        setTimeout(function () { _this.sendThankYou(); }, 1000);
    };
    // Function to generate the unique user hash which will be input into the DB
    SurveyComponent.prototype.generateUUID = function () {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
    // Used on submit click which sends the user to the Thank You once finished with the survey
    SurveyComponent.prototype.sendThankYou = function () {
        window.location.href = 'http://localhost:8888/#/thankyou';
    };
    return SurveyComponent;
}());
SurveyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-survey',
        template: __webpack_require__(638),
        styles: [__webpack_require__(594)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_survey_service__["a" /* SurveyService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_survey_service__["a" /* SurveyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_survey_service__["a" /* SurveyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], SurveyComponent);

var _a, _b, _c;
//# sourceMappingURL=survey.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThankyouComponent = (function () {
    function ThankyouComponent() {
    }
    return ThankyouComponent;
}());
ThankyouComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-thankyou',
        template: __webpack_require__(639),
        styles: [__webpack_require__(595)]
    })
], ThankyouComponent);

//# sourceMappingURL=thankyou.component.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 389;


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(416);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); }); // Added by Survey builder. be cautious
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(629),
        styles: [__webpack_require__(585)],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 401:
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

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_topnavbar_topnavbar_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navigation_navigation_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_graphs_graphs_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_survey_survey_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_input_input_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_edit_edit_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_exportRaw_exportRaw_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_not_found_not_found_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_thankyou_thankyou_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_survey_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_graph_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_authentication_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_keys_pipe__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_filterQuestionId_pipe__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_filterByOptionActive_pipe__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_filterByDate_pipe__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_filter_pipe__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_filterSurvey_pipe__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_graphableQuestion_pipe__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_exceptQuestionId_pipe__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pipes_filterByQuestionActive_pipe__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__app_routes__ = __webpack_require__(403);
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
            __WEBPACK_IMPORTED_MODULE_15__pages_edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_exportRaw_exportRaw_component__["a" /* ExportRawComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_graphs_graphs_component__["a" /* GraphsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_input_input_component__["a" /* InputComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_survey_survey_component__["a" /* SurveyComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_thankyou_thankyou_component__["a" /* ThankyouComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pipes_keys_pipe__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipes_filterByOptionActive_pipe__["a" /* FilterByOptionActivePipe */],
            __WEBPACK_IMPORTED_MODULE_24__pipes_filterQuestionId_pipe__["a" /* FilterByQuestionIDPipe */],
            __WEBPACK_IMPORTED_MODULE_26__pipes_filterByDate_pipe__["a" /* FilterByDatePipe */],
            __WEBPACK_IMPORTED_MODULE_27__pipes_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_28__pipes_filterSurvey_pipe__["a" /* FilterBySurveyIdPipe */],
            __WEBPACK_IMPORTED_MODULE_29__pipes_graphableQuestion_pipe__["a" /* GraphableQuestionPipe */],
            __WEBPACK_IMPORTED_MODULE_30__pipes_exceptQuestionId_pipe__["a" /* ExceptQuestionIdPipe */],
            __WEBPACK_IMPORTED_MODULE_31__pipes_filterByQuestionActive_pipe__["a" /* FilterByQuestionActivePipe */],
        ],
        // Imports bring in external modules such as core Angular modules
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_32__app_routes__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */]
        ],
        // Providers allow all components to use the given services
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__services_survey_service__["a" /* SurveyService */],
            __WEBPACK_IMPORTED_MODULE_20__services_graph_service__["a" /* GraphService */],
            __WEBPACK_IMPORTED_MODULE_21__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_22__services_auth_guard_service__["a" /* AuthGuardService */],
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["c" /* HashLocationStrategy */] }
        ],
        // Bootstrap is the first component loaded in the project
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_graphs_graphs_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_input_input_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_survey_survey_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_edit_edit_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_exportRaw_exportRaw_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_not_found_not_found_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_thankyou_thankyou_component__ = __webpack_require__(176);
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
        component: __WEBPACK_IMPORTED_MODULE_5__pages_exportRaw_exportRaw_component__["a" /* ExportRawComponent */],
    },
    {
        path: 'edit',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_edit_edit_component__["a" /* EditComponent */],
    },
    {
        path: 'survey',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_survey_survey_component__["a" /* SurveyComponent */],
    },
    {
        path: 'thankyou',
        component: __WEBPACK_IMPORTED_MODULE_7__pages_thankyou_thankyou_component__["a" /* ThankyouComponent */],
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_not_found_not_found_component__["a" /* NotFoundComponent */],
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(76);
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
        template: __webpack_require__(630),
        styles: [__webpack_require__(586)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(64);
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
    TopnavbarComponent.prototype.helpGuide = function () {
    };
    return TopnavbarComponent;
}());
TopnavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'topnavbar',
        template: __webpack_require__(631),
        styles: [__webpack_require__(587)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], TopnavbarComponent);

var _a;
//# sourceMappingURL=topnavbar.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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
    FilterByDatePipe.prototype.transform = function (responses, date, date1) {
        if (responses) {
            return responses.filter(function (response) { return response.date_taken >= date && response.date_taken <= date1; });
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

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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
            return options.filter(function (option) { return option.option_is_active === true; });
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

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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
            return questions.filter(function (question) { return question.question_is_active === true; });
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

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(64);
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
            this.router.navigate(['survey']);
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

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(167);
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


// Http specifc header that is needed to post data to the database
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]({
        'Content-Type': 'application/json',
    })
};
var SurveyService = (function () {
    // Instantiates the HttpClient class
    function SurveyService(http) {
        this.http = http;
    }
    /*
      Get functions
    */
    // Function that will call the index.js route to get all active surveys
    SurveyService.prototype.getAllSurveysInfo = function () {
        return this.http.get('http://localhost:8888/api/allSurveyInfo', { observe: 'response' });
    };
    // Function that will call the index.js route to get all active surveys
    SurveyService.prototype.getSurveySubmissionsOverTime = function () {
        return this.http.get('http://localhost:8888/api/surveySubmissionsOverTime', { observe: 'response' });
    };
    // Function that will call the index.js route to get all active surveys
    SurveyService.prototype.getActiveSurveys = function () {
        return this.http.get('http://localhost:8888/api/activeSurveys', { observe: 'response' });
    };
    // Function that will call the index.js route to get all surveys
    SurveyService.prototype.getAllSurveys = function () {
        return this.http.get('http://localhost:8888/api/allSurveys', { observe: 'response' });
    };
    // Function that will call the index.js route to get all questions given a specific survey_id as a parameter
    SurveyService.prototype.getActiveSurveyQuestions = function (survey_id) {
        return this.http.get('http://localhost:8888/api/activeSurveyQuestions/' + survey_id, { observe: 'response' });
    };
    // Function that will call the index.js route to get all questions given a specific survey_id as a parameter
    SurveyService.prototype.getAllSurveyQuestions = function (survey_id) {
        return this.http.get('http://localhost:8888/api/allSurveyQuestions/' + survey_id, { observe: 'response' });
    };
    // Function that will call the index.js route to get all options given a specific survey_id as a parameter
    SurveyService.prototype.getActiveSurveyOptions = function (survey_id) {
        return this.http.get('http://localhost:8888/api/activeSurveyOptions/' + survey_id, { observe: 'response' });
    };
    // Function that will call the index.js route to get all options given a specific survey_id as a parameter
    SurveyService.prototype.getAllSurveyOptions = function (survey_id) {
        return this.http.get('http://localhost:8888/api/allSurveyOptions/' + survey_id, { observe: 'response' });
    };
    // Function that will call the index.js route to get all responses given a specific survey_id as a parameter
    SurveyService.prototype.getSurveyResponses = function (survey_id) {
        return this.http.get('http://localhost:8888/api/surveyResponses/' + survey_id, { observe: 'response' });
    };
    /*
      Post functions
    */
    // Function that will call the index.js to post an individual survey response to a survey given a specific survey_id as a parameter
    SurveyService.prototype.postSurveyResponse = function (response) {
        return this.http.post('http://localhost:8888/api/postSurveyResponse', response, httpOptions);
    };
    SurveyService.prototype.postNewSurvey = function (survey) {
        return this.http.post('http://localhost:8888/api/postNewSurvey', survey, httpOptions);
    };
    SurveyService.prototype.postQuestion = function (question) {
        return this.http.post('http://localhost:8888/api/postQuestion', question, httpOptions);
    };
    SurveyService.prototype.postOption = function (option) {
        return this.http.post('http://localhost:8888/api/postOption', option, httpOptions);
    };
    SurveyService.prototype.postArchitecture = function (surveyComponent) {
        return this.http.post('http://localhost:8888/api/postArchitecture', surveyComponent, httpOptions);
    };
    /*
      Put/Update functions
    */
    // Function that will call the index.js route to update a questions given the specific updates
    SurveyService.prototype.updateSurveyActive = function (survey) {
        return this.http.put('http://localhost:8888/api/updateSurveyActive', survey, httpOptions);
    };
    // Function that will call the index.js route to update a questions given the specific updates
    SurveyService.prototype.updateSurveyQuestionActive = function (question) {
        return this.http.put('http://localhost:8888/api/updateSurveyQuestionActive', question, httpOptions);
    };
    SurveyService.prototype.updateSurveyOptionActive = function (option) {
        return this.http.put('http://localhost:8888/api/updateSurveyOptionActive', option, httpOptions);
    };
    SurveyService.prototype.wait = function (ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    };
    SurveyService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        //return throwError(
        //'Something bad happened; please try again later.');
    };
    ;
    return SurveyService;
}());
SurveyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object])
], SurveyService);

var _a;
//# sourceMappingURL=survey.service.js.map

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "#footer {\n   background-color:white; \n   text-align: center; \n   padding: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "#btnQuestionAdd {\r\n    color: green;\r\n }\r\n \r\n a:hover { \r\n    background-color: yellow;\r\n }\r\n \r\n .btnBar{\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    padding-top: 15px;\r\n }\r\n \r\n #surveySelect{\r\n    width: 300px;\r\n }\r\n \r\n #ctr {\r\n    margin-left: 13%;\r\n }\r\n\r\n  /* The Modal (background) */\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n   background-color: #fefefe;\r\n   margin: 15% auto; /* 15% from the top and centered */\r\n   padding: 30px;\r\n   border: 1px solid #888;\r\n   width: 18%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n.saved {\r\n   font-size: 28px;\r\n   text-align: center;\r\n}\r\n\r\n.questionActiveLabel {\r\n   margin-left: 15px;\r\n   margin-top: 3px;\r\n}\r\n.questionInactiveLabel {\r\n   margin-left: 15px;\r\n   margin-top: 3px;\r\n}\r\n\r\n#questionHeader {\r\n   margin-right: 30px;\r\n}\r\n\r\n.hide{\r\n   display: \"none\";\r\n}\r\n\r\n#questionPromptDiv {\r\n    margin-top: 10px;\r\n}\r\n\r\n#optionh3 {\r\n    font-weight: lighter;\r\n}\r\n\r\n#surveyNameh2 {\r\n    font-weight: bold;\r\n}\r\n\r\n#questionDiv {\r\n    margin-bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".colQuestions{\r\n   width: 35%\r\n}\r\n\r\n.colResponses{\r\n   width: 53%\r\n}\r\n\r\n.colDates{\r\n   width: 12%;\r\n   text-align: right;\r\n}\r\n\r\n.btnExport{\r\n   margin-top: 23px;\r\n}\r\n\r\n.divSearchRow {\r\n   margin-bottom: 15px;\r\n}\r\n\r\n#headerExport {\r\n    margin-top: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".filterBlock {\r\n   margin-top: 30px;\r\n}\r\n\r\n.divExportBtn {\r\n   margin-top: 60px;\r\n}\r\n\r\n.optionsDiv {\r\n   margin-top: 10px;\r\n}\r\n\r\n.optionsLabel {\r\n   padding-left: 10px;\r\n   margin-bottom: 10px;\r\n}\r\n\r\n.spanOption{\r\n   margin-left: 15px;\r\n   font-weight: 400;\r\n}\r\n\r\n.optionsList {\r\n   margin-top: 10px;\r\n   list-style: none;\r\n}\r\n\r\n.btnBlock {\r\n   margin-top: 30px;\r\n}\r\n\r\n#multipleDataSets{\r\n   margin-bottom: 20px;\r\n}\r\n\r\n.btnGroupSwitch {\r\n   padding-left:32px; \r\n   padding-right:32px;\r\n}\r\n\r\nli {\r\n   margin-bottom: 5px;\r\n}\r\n\r\n#chartDiv {\r\n    margin-bottom: 500px;\r\n}\r\n\r\n#export {\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".margin-top-5 {\r\n   margin-top: 5px;\r\n}\r\n\r\n.margin-top-20 {\r\n   margin-top: 20px;\r\n}\r\n\r\n.modal {\r\n   display: none; /* Hidden by default */\r\n   position: fixed; /* Stay in place */\r\n   z-index: 1; /* Sit on top */\r\n   left: 0;\r\n   top: 0;\r\n   width: 100%; /* Full width */\r\n   height: 100%; /* Full height */\r\n   overflow: auto; /* Enable scroll if needed */\r\n   background-color: rgb(0,0,0); /* Fallback color */\r\n   background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n   background-color: #fefefe;\r\n   margin: 15% auto; /* 15% from the top and centered */\r\n   padding: 30px;\r\n   border: 1px solid #888;\r\n   width: 54%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n    color: rgb(66, 60, 60);\r\n    float: center;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.checker {\r\n   font-size: 28px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".spanOption{\r\n   margin-left: 15px;\r\n   font-weight: 400;\r\n}\r\n\r\n.spanQuestionText{\r\n   margin-left:5px\r\n}\r\n\r\n.spanQuestion{\r\n   font-weight: 600;\r\n   font-size: 14px;\r\n}\r\n\r\n.btnBar{\r\n   padding-left: 15px;\r\n   padding-right: 15px;\r\n   padding-top: 15px;\r\n}\r\n\r\n#surveySelect{\r\n   width: 300px;\r\n}\r\n\r\n#ctr {\r\n   margin-left: 7%;\r\n}\r\n\r\n /* The Modal (background) */\r\n .modal {\r\n   display: none; /* Hidden by default */\r\n   position: fixed; /* Stay in place */\r\n   z-index: 1; /* Sit on top */\r\n   left: 0;\r\n   top: 0;\r\n   width: 100%; /* Full width */\r\n   height: 100%; /* Full height */\r\n   overflow: auto; /* Enable scroll if needed */\r\n   background-color: rgb(0,0,0); /* Fallback color */\r\n   background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n   background-color: #fefefe;\r\n   margin: 15% auto; /* 15% from the top and centered */\r\n   padding: 30px;\r\n   border: 1px solid #888;\r\n   width: 18%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n.saved {\r\n   font-size: 28px;\r\n   text-align: center;\r\n}\r\n\r\n#questionText {\r\n  margin-left: 40px;\r\n}\r\n/* Aligns multi-line checkbox or radio text */\r\n#indentAlign label > input {\r\n  float:left;\r\n  margin-right:10px;\r\n}\r\n#indentAlign label > span {\r\n  display:table;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "* {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  #notfound {\r\n    position: relative;\r\n    height: 100vh;\r\n    background-color: #fafbfd;\r\n  }\r\n  \r\n  #notfound .notfound {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n  \r\n  .notfound {\r\n    max-width: 520px;\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  \r\n  .notfound .notfound-bg {\r\n    position: absolute;\r\n    left: 0px;\r\n    right: 0px;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    z-index: -1;\r\n  }\r\n  \r\n  .notfound .notfound-bg > div {\r\n    width: 100%;\r\n    background: #fff;\r\n    border-radius: 90px;\r\n    height: 125px;\r\n  }\r\n  \r\n  .notfound .notfound-bg > div:nth-child(1) {\r\n    box-shadow: 5px 5px 0px 0px #f3f3f3;\r\n  }\r\n  \r\n  .notfound .notfound-bg > div:nth-child(2) {\r\n    transform: scale(1.3);\r\n    box-shadow: 5px 5px 0px 0px #f3f3f3;\r\n    position: relative;\r\n    z-index: 10;\r\n  }\r\n  \r\n  .notfound .notfound-bg > div:nth-child(3) {\r\n    box-shadow: 5px 5px 0px 0px #f3f3f3;\r\n    position: relative;\r\n    z-index: 90;\r\n  }\r\n  \r\n  .notfound h1 {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 86px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n    margin-top: 0;\r\n    margin-bottom: 8px;\r\n    color: #151515;\r\n  }\r\n  \r\n  .notfound h2 {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 26px;\r\n    margin: 0;\r\n    font-weight: 700;\r\n    color: #151515;\r\n  }\r\n  \r\n  .notfound a {\r\n    font-family: 'Quicksand', sans-serif;\r\n    font-size: 14px;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    background: #18e06f;\r\n    display: inline-block;\r\n    padding: 15px 30px;\r\n    border-radius: 5px;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  @media only screen and (max-width: 767px) {\r\n      .notfound .notfound-bg {\r\n        width: 287px;\r\n        margin: auto;\r\n      }\r\n  \r\n      .notfound .notfound-bg > div {\r\n        height: 85px;\r\n    }\r\n  }\r\n  \r\n  @media only screen and (max-width: 480px) {\r\n    .notfound h1 {\r\n      font-size: 68px;\r\n    }\r\n  \r\n    .notfound h2 {\r\n      font-size: 18px;\r\n    }\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "#btnLogin {\r\n   margin: 5px;\r\n}\r\n\r\n.center {\r\n   display: block;\r\n   margin-left: auto;\r\n   margin-right: auto;\r\n   width: 50%;\r\n}\r\n\r\n#imgLogo {\r\n   height: 60%;\r\n   width: 60%;\r\n}\r\n\r\n.margin-top-5pct {\r\n   margin-top: 5%;\r\n}\r\n\r\n#btnStart {\r\n   margin-top: 10%;\r\n}\r\n\r\n.mt-3 {\r\n   margin-top: 3%;\r\n }\r\n\r\n .questionHeader {\r\n    margin-bottom: 20px;\r\n }\r\n \r\n #imgHeart {\r\n    height: 50px;\r\n }\r\n\r\n\r\n.spanOption {\r\n  font-weight: 400;\r\n}\r\n.spanQuestionText {\r\n  margin-left: 5px\r\n}\r\n.spanQuestion {\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n}\r\n.btnBar {\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  padding-top: 15px;\r\n}\r\n#selectBox{\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n}\r\n.row-centered {\r\n  text-align: center;\r\n}\r\n.center {\r\n  margin: 0 auto;\r\n  width: 80%;\r\n}\r\n.col-centered {\r\n  display: inline-block;\r\n  float: none;\r\n  /* reset the text-align */\r\n  text-align: left;\r\n  /* inline-block space fix */\r\n  margin-right: -4px;\r\n  text-align: center;\r\n  background-color: #ccc;\r\n  border: 1px solid #ddd;\r\n}\r\n#surveySelect {\r\n  width: 300px;\r\n  -ms-flex-item-align: center;\r\n      -ms-grid-row-align: center;\r\n      align-self: center;\r\n}\r\n#ctr {\r\n  margin-left: 7%;\r\n}\r\nbody {\r\n  height: 100vh;\r\n\r\n}\r\n\r\n#bottomSpacing {\r\n  margin-bottom: 8%;\r\n}\r\n\r\n.saved {\r\n  font-size: 28px;\r\n  text-align: center;\r\n}\r\n\r\n#questionText {\r\n  font-weight: bold;\r\n}\r\n\r\n#dcapLogo {\r\n  float:left; margin-right: 10px;\r\n}\r\n\r\n#landingRow {\r\n  margin-top: 3%;\r\n}\r\n\r\n/* Aligns multi-line checkbox or radio text */\r\n#indentAlign label > input {\r\n  float:left;\r\n  margin-right:10px;\r\n}\r\n#indentAlign label > span {\r\n  display:table;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "#divRowComment {\n   text-align: center;\n}\n\n#divRowHeader {\n   text-align: center;\n}\n\n#divRowBtn {\n   margin-top:5%;\n}\n\nbody {\n  height: 100vh;\n}\n\n.row {\n  margin-top: 3%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 214,
	"./af.js": 214,
	"./ar": 221,
	"./ar-dz": 215,
	"./ar-dz.js": 215,
	"./ar-kw": 216,
	"./ar-kw.js": 216,
	"./ar-ly": 217,
	"./ar-ly.js": 217,
	"./ar-ma": 218,
	"./ar-ma.js": 218,
	"./ar-sa": 219,
	"./ar-sa.js": 219,
	"./ar-tn": 220,
	"./ar-tn.js": 220,
	"./ar.js": 221,
	"./az": 222,
	"./az.js": 222,
	"./be": 223,
	"./be.js": 223,
	"./bg": 224,
	"./bg.js": 224,
	"./bm": 225,
	"./bm.js": 225,
	"./bn": 226,
	"./bn.js": 226,
	"./bo": 227,
	"./bo.js": 227,
	"./br": 228,
	"./br.js": 228,
	"./bs": 229,
	"./bs.js": 229,
	"./ca": 230,
	"./ca.js": 230,
	"./cs": 231,
	"./cs.js": 231,
	"./cv": 232,
	"./cv.js": 232,
	"./cy": 233,
	"./cy.js": 233,
	"./da": 234,
	"./da.js": 234,
	"./de": 237,
	"./de-at": 235,
	"./de-at.js": 235,
	"./de-ch": 236,
	"./de-ch.js": 236,
	"./de.js": 237,
	"./dv": 238,
	"./dv.js": 238,
	"./el": 239,
	"./el.js": 239,
	"./en-au": 240,
	"./en-au.js": 240,
	"./en-ca": 241,
	"./en-ca.js": 241,
	"./en-gb": 242,
	"./en-gb.js": 242,
	"./en-ie": 243,
	"./en-ie.js": 243,
	"./en-il": 244,
	"./en-il.js": 244,
	"./en-nz": 245,
	"./en-nz.js": 245,
	"./eo": 246,
	"./eo.js": 246,
	"./es": 249,
	"./es-do": 247,
	"./es-do.js": 247,
	"./es-us": 248,
	"./es-us.js": 248,
	"./es.js": 249,
	"./et": 250,
	"./et.js": 250,
	"./eu": 251,
	"./eu.js": 251,
	"./fa": 252,
	"./fa.js": 252,
	"./fi": 253,
	"./fi.js": 253,
	"./fo": 254,
	"./fo.js": 254,
	"./fr": 257,
	"./fr-ca": 255,
	"./fr-ca.js": 255,
	"./fr-ch": 256,
	"./fr-ch.js": 256,
	"./fr.js": 257,
	"./fy": 258,
	"./fy.js": 258,
	"./gd": 259,
	"./gd.js": 259,
	"./gl": 260,
	"./gl.js": 260,
	"./gom-latn": 261,
	"./gom-latn.js": 261,
	"./gu": 262,
	"./gu.js": 262,
	"./he": 263,
	"./he.js": 263,
	"./hi": 264,
	"./hi.js": 264,
	"./hr": 265,
	"./hr.js": 265,
	"./hu": 266,
	"./hu.js": 266,
	"./hy-am": 267,
	"./hy-am.js": 267,
	"./id": 268,
	"./id.js": 268,
	"./is": 269,
	"./is.js": 269,
	"./it": 270,
	"./it.js": 270,
	"./ja": 271,
	"./ja.js": 271,
	"./jv": 272,
	"./jv.js": 272,
	"./ka": 273,
	"./ka.js": 273,
	"./kk": 274,
	"./kk.js": 274,
	"./km": 275,
	"./km.js": 275,
	"./kn": 276,
	"./kn.js": 276,
	"./ko": 277,
	"./ko.js": 277,
	"./ky": 278,
	"./ky.js": 278,
	"./lb": 279,
	"./lb.js": 279,
	"./lo": 280,
	"./lo.js": 280,
	"./lt": 281,
	"./lt.js": 281,
	"./lv": 282,
	"./lv.js": 282,
	"./me": 283,
	"./me.js": 283,
	"./mi": 284,
	"./mi.js": 284,
	"./mk": 285,
	"./mk.js": 285,
	"./ml": 286,
	"./ml.js": 286,
	"./mn": 287,
	"./mn.js": 287,
	"./mr": 288,
	"./mr.js": 288,
	"./ms": 290,
	"./ms-my": 289,
	"./ms-my.js": 289,
	"./ms.js": 290,
	"./mt": 291,
	"./mt.js": 291,
	"./my": 292,
	"./my.js": 292,
	"./nb": 293,
	"./nb.js": 293,
	"./ne": 294,
	"./ne.js": 294,
	"./nl": 296,
	"./nl-be": 295,
	"./nl-be.js": 295,
	"./nl.js": 296,
	"./nn": 297,
	"./nn.js": 297,
	"./pa-in": 298,
	"./pa-in.js": 298,
	"./pl": 299,
	"./pl.js": 299,
	"./pt": 301,
	"./pt-br": 300,
	"./pt-br.js": 300,
	"./pt.js": 301,
	"./ro": 302,
	"./ro.js": 302,
	"./ru": 303,
	"./ru.js": 303,
	"./sd": 304,
	"./sd.js": 304,
	"./se": 305,
	"./se.js": 305,
	"./si": 306,
	"./si.js": 306,
	"./sk": 307,
	"./sk.js": 307,
	"./sl": 308,
	"./sl.js": 308,
	"./sq": 309,
	"./sq.js": 309,
	"./sr": 311,
	"./sr-cyrl": 310,
	"./sr-cyrl.js": 310,
	"./sr.js": 311,
	"./ss": 312,
	"./ss.js": 312,
	"./sv": 313,
	"./sv.js": 313,
	"./sw": 314,
	"./sw.js": 314,
	"./ta": 315,
	"./ta.js": 315,
	"./te": 316,
	"./te.js": 316,
	"./tet": 317,
	"./tet.js": 317,
	"./tg": 318,
	"./tg.js": 318,
	"./th": 319,
	"./th.js": 319,
	"./tl-ph": 320,
	"./tl-ph.js": 320,
	"./tlh": 321,
	"./tlh.js": 321,
	"./tr": 322,
	"./tr.js": 322,
	"./tzl": 323,
	"./tzl.js": 323,
	"./tzm": 325,
	"./tzm-latn": 324,
	"./tzm-latn.js": 324,
	"./tzm.js": 325,
	"./ug-cn": 326,
	"./ug-cn.js": 326,
	"./uk": 327,
	"./uk.js": 327,
	"./ur": 328,
	"./ur.js": 328,
	"./uz": 330,
	"./uz-latn": 329,
	"./uz-latn.js": 329,
	"./uz.js": 330,
	"./vi": 331,
	"./vi.js": 331,
	"./x-pseudo": 332,
	"./x-pseudo.js": 332,
	"./yo": 333,
	"./yo.js": 333,
	"./zh-cn": 334,
	"./zh-cn.js": 334,
	"./zh-hk": 335,
	"./zh-hk.js": 335,
	"./zh-tw": 336,
	"./zh-tw.js": 336
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
webpackContext.id = 617;


/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n    <div class=\"sidebar-collapse\">\n        <ul class=\"nav metismenu\" id=\"side-menu\">\n            <li class=\"nav-header\">\n                <div class=\"dropdown profile-element\">\n                    <span>\n                        <img alt=\"image\" class=\"img-rectangle\" width=\"165px\"\n                             src=\"./assets/img/dutchess-cap.png\" />\n                    </span>\n                </div>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('home')}\">\n                <a [routerLink]=\"['/home']\"><i class=\"fas fa-home\"></i> <span class=\"nav-label\">Home</span></a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('graphs')}\">\n               <a [routerLink]=\"['/graphs']\"><i class=\"fas fa-chart-line\"></i> <span class=\"nav-label\">Graph Designer</span></a>\n           </li>\n            <li [ngClass]=\"{active: activeRoute('input')}\">\n                <a [routerLink]=\"['/input']\"><i class=\"fas fa-user-edit\"></i> <span class=\"nav-label\">Input Survey Manually</span></a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('exportRaw')}\">\n                <a [routerLink]=\"['/exportRaw']\"><i class=\"fas fa-table\"></i> <span class=\"nav-label\">Query/Export Data</span></a>\n            </li>\n            <li [ngClass]=\"{active: activeRoute('edit')}\">\n                  <a [routerLink]=\"['/edit']\"><i class=\"fas fa-edit\"></i> <span class=\"nav-label\">Edit Survey</span></a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom\">\n    <div id=\"topNavBar\">\n        <nav class=\"navbar navbar-static-top white-bg\" role=\"navigation\" style=\"margin-bottom: 0\">\n            <ul class=\"nav navbar-top-links navbar-right\">\n                <li>\n                    <a *ngIf=\"auth.isAuthenticated()\"\n                    (click)=\"auth.logout()\" style=\"font-size:12px\">\n                        <i class=\"fas fa-globe-americas\"></i> Return To Survey / Logout\n                    </a>\n                </li>\n                <li>\n                    <a (click)=\"helpGuide()\" style=\"font-size:12px\">\n                        <i class=\"fas info-circle\"></i>\n                    </a>\n                </li>\n            </ul>\n        </nav>\n    </div>\n</div>\n<div id=\"helpGuide\" class=\"modal\">\n  \n    <!-- Modal content -->\n    <div class=\"modal-content\">\n      <span (click)=\"closeModal()\" class=\"close\">&times;</span>\n      <p>Saved Successfully!</p>\n    </div>\n\n\n</div>"

/***/ }),

/***/ 632:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n    <navigation></navigation>\r\n    <div id=\"page-wrapper\" class=\"gray-bg\">\r\n      <topnavbar></topnavbar>\r\n      <div id=\"ctr\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-10 ibox float-e-margins\">\r\n            <div class=\"ibox-content\">\r\n              <div class=\"row justify-content-between btnBar\">\r\n                <div class=\"col\">\r\n                  <select class=\"form-control pull-left\" id=\"surveySelect\" (change)=\"updateSurveyFormData($event.target.value)\">\r\n                    <option value=\"-1\" disabled selected>Select survey to edit or create a new one!</option>\r\n                    <option *ngFor=\"let s of surveys\" [value]=\"s.survey_id\">\r\n                      {{ s.survey_name }}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <button type=\"button\" (click)=\"newSurveyForm()\" class=\"pull-right btn btn-warning\">\r\n                    Create New Survey\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <hr>\r\n              <div class=\"feed-activity-list\">\r\n                <form [formGroup]=\"survey\" novalidate (ngSubmit)=\"save(survey.value)\">\r\n                  <div class=\"form-group\">\r\n                    <h2 id=\"surveyNameh2\">Survey Name</h2>\r\n                    <input [readonly]=\"setReadOnly()\" type=\"text\" class=\"form-control\" formControlName=\"survey_name\"\r\n                      placeholder=\"Enter Survey Name\">\r\n                  </div>\r\n                  <!-- QUESTIONS -->\r\n                  <div formArrayName=\"questions\">\r\n                    <div *ngFor=\"let question of survey.controls.questions.controls; let i=index\">\r\n                      <div [formGroupName]=\"i\" class=\"feed-element\" id=\"questionDiv\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\">\r\n                            <div row>\r\n                              <h3 class=\"pull-left\" id=\"questionHeader\">Question {{ i+1}}</h3>\r\n                              <button type=\"button\" (click)=\"updateQuestionActiveStatus(question, false)\" *ngIf=\"survey.controls.questions.controls[i].controls.question_is_active.value\"\r\n                                value=\"true\" class=\"label label-primary\">Active</button>\r\n                              <button type=\"button\" (click)=\"updateQuestionActiveStatus(question, true)\" *ngIf=\"! survey.controls.questions.controls[i].controls.question_is_active.value\"\r\n                                value=\"false\" class=\"label label-warning\">Inactive</button>\r\n                              <button type=\"button\" *ngIf=\"survey.controls.questions.length > 1 && i > currentQuestionScope\"\r\n                                class=\"btn btn-danger btn-sm pull-right\" (click)='removeQuestion(i)'> <i id=\"btnQuestionRemove\"\r\n                                  class=\"fas fa-minus-circle\"></i></button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-3\">\r\n                            <div class=\"row\">\r\n                              <div class=\"col-lg-12\">\r\n                                <small class=\"text-muted\">Question Type</small>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-lg-12\">\r\n                                <!--TYPE GO HERE-->\r\n                                <select formControlName=\"question_type\" class=\"form-control form-control-sm\" required>\r\n                                  <option value=\"\" disabled selected>Select question type:</option>\r\n                                  <option value=\"select\">Dropdown</option>\r\n                                  <option value=\"checkbox\">Checkboxes</option>\r\n                                  <option value=\"radio\">Multiple Choice</option>\r\n                                  <option value=\"text\">Textbox</option>\r\n                                </select>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\" id=\"questionPromptDiv\">\r\n                          <div class=\"col-lg-12\">\r\n                            <small class=\"text-muted\">Question Prompt</small>\r\n                            <!--TEXT BOX GOES HERE-->\r\n                            <div class=\"form-group\">\r\n                              <textarea formControlName=\"question_text\" class=\"form-control\"\r\n                                id=\"exampleTextarea\" rows=\"2\" placeholder=\"Enter Question Prompt Here...\">\r\n                              </textarea>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n  \r\n                        <div class=\"row\" *ngIf=\"showOptionsDiv(question)\">\r\n                          <div class=\"col-lg-6\">\r\n                            <!--OPTIONS GO HERE-->\r\n                            <!-- SHOWING OPTIONS-->\r\n                            <div formArrayName=\"options\" *ngFor=\"let option of survey.controls.questions.controls[i].controls.options.controls; let j=index\">\r\n  \r\n                              <div class=\"row\">\r\n                                <div class=\"col-lg-10\">\r\n                                  <h3 id=\"optionh3\" class=\"pull-left\">Option {{ j+1}}</h3>\r\n                                  <button type=\"button\" (click)=\"updateOptionActiveStatus(question, j, false)\" *ngIf=\"survey.controls.questions.controls[i].controls.options.controls[j].controls.option_is_active.value\"\r\n                                    value=\"true\" class=\"label label-primary pull-right\">Active</button>\r\n                                  <button type=\"button\" (click)=\"updateOptionActiveStatus(question, j, true)\" *ngIf=\"! survey.controls.questions.controls[i].controls.options.controls[j].controls.option_is_active.value\"\r\n                                    value=\"false\" class=\"label label-warning pull-right\">Inactive</button>\r\n                                </div>\r\n                              </div>\r\n  \r\n                              <div class=\"row\">\r\n                                <div class=\"col-lg-12\">\r\n                                  <div [formGroupName]=\"j\">\r\n                                    <div class=\"form-group\">\r\n                                      <div class=\"row\">\r\n                                        <div class=\"col-lg-10\">\r\n                                          <input formControlName=\"option_text\" type=\"text\"\r\n                                            class=\"form-control\" placeholder=\"Enter Option\">\r\n                                        </div>\r\n                                        <div class=\"col-lg-2\">\r\n                                          <button type=\"button\" class=\"btn btn-danger btn-sm pull-right\" *ngIf=\"question.controls.options.length > 1  &&  j > currentOptionScope[i] \"\r\n                                            (click)=\"removeOption(question, j, i)\"><i class=\"fas fa-minus-circle\"></i></button>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n  \r\n                              <div class=\"row\">\r\n                                <div class=\"col-lg-10\">\r\n                                  <button type=\"button\" class=\"btn btn-primary btn-block pull-right \" *ngIf=\"j == question.controls.options.length - 1\"\r\n                                    (click)=\"addOption(question,i)\"><i class=\"fa fa-plus-circle\"></i> \r\n                                  </button>\r\n                                </div>\r\n                              </div>\r\n  \r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-sm pull-right\" *ngIf='i >= currentQuestionScope'\r\n                              (click)='addQuestion(i)'><i class=\"fa fa-plus-circle\"></i>\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <!--END OF FEED ELEMENT DIV-  -->\r\n                    </div>\r\n                    <!--END OF ngFor DIV-->\r\n                  </div>\r\n                  <!--END OF Form Array for Questions Div-->\r\n                  <button type=\"submit\" id=\"save\" (click)=\"openModal()\" class=\"btn btn-success btn-lg btn-block\">\r\n                    Save Survey\r\n                  </button>\r\n  \r\n                </form>\r\n                <div id=\"success\" class=\"modal\">\r\n  \r\n                  <!-- Modal content -->\r\n                  <div class=\"modal-content\">\r\n                    <span (click)=\"closeModal()\" class=\"close\">&times;</span>\r\n                    <p>Saved Successfully!</p>\r\n                  </div>\r\n  \r\n                </div>\r\n              </div>\r\n  \r\n              <pre>Form Value: <br>{{survey.value | json}}</pre>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ 633:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n    <navigation></navigation>\r\n    <div *ngIf=\"showExportDiv\" id=\"page-wrapper\" class=\"gray-bg\">\r\n        <topnavbar></topnavbar>\r\n\r\n        <div class=\"row wrapper border-bottom white-bg page-heading\">\r\n          <div class=\"row\" id=\"headerExport\">\r\n\r\n            <div class=\"col-lg-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleFormControlSelect1\">Survey</label>\r\n                <select class=\"form-control\" id=\"exampleFormControlSelect1\" (change)=\"updateSurvey($event.target.value)\">\r\n                  <option *ngFor=\"let s of surveys\" value=\"{{s.survey_id}}\">\r\n                    {{ s.survey_name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleFormControlSelect1\">Survey Question</label>\r\n                <select class=\"form-control\" id=\"exampleFormControlSelect1\" (change)=\"updateDataFeed($event.target.value)\">\r\n                  <option value=\"-1\">All Questions</option>\r\n                  <option *ngFor=\"let question of getQuestions()\" value=\"{{ question.question_id }}\">\r\n                    {{ question.question_text}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleFormControlSelect1\">Start Date</label>\r\n                <input class=\"form-control\" type=\"date\" value=\"{{ dateFilterStart }}\" (change)=\"updateDate($event.target.value)\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-2\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleFormControlSelect1\">End Date</label>\r\n                <input class=\"form-control\" type=\"date\" value=\"{{ dateFilterEnd }}\" (change)=\"updateDateUpper($event.target.value)\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-2\">\r\n              <button type=\"button\" class=\"btn btn-primary btn-block btn-sm btnExport\" (click)=\"exportTableToCSV('table.csv')\"><i\r\n                  class=\"fas fa-download\"></i> Export Table</button>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row divSearchRow\">\r\n\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchText\" placeholder=\"Filter Responses By Keyword\">\r\n                <div class=\"input-group-btn\">\r\n                  <button class=\"btn btn-default\" type=\"submit\">\r\n                    <i class=\"glyphicon glyphicon-search\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row \">\r\n\r\n            <div class=\"col-lg-12\">\r\n              <table id=\"tableResponses\" class=\"table table-hover table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"colQuestions\">Question</th>\r\n                    <th class=\"colResponses\">Response</th>\r\n                    <th class=\"colDates\">Date Submitted</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let response of dataFeed | filter: searchText | filterByDate: dateFilterStart:dateFilterEnd\">\r\n                    <th> {{ response.question }} </th>\r\n                    <td> {{ response.response }}</td>\r\n                    <td class=\"colDates\"> {{ response.date_taken }}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n\r\n          </div> \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 634:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <navigation></navigation>\r\n  <div id=\"page-wrapper\" class=\"gray-bg\">\r\n    <topnavbar></topnavbar>\r\n\r\n    <div  class=\"row wrapper border-bottom white-bg page-heading\">\r\n      <div class=\"row\">\r\n\r\n        <div *ngIf=\"displayDiv\" class=\"col-lg-3\" id=\"chartDiv\">\r\n          <br>\r\n          <form [formGroup]=\"chartForm\">\r\n            <div class=\"form-group\">\r\n\r\n              <div class=\"filterBlock\">\r\n                <label for=\"deepGraphSwitch\">Data Set Modeling Switch</label>\r\n                <div class=\"btn-group w-100\" id=\"deepGraphSwitch\" role=\"group\" (click)=\"updateMultipleDataSetForm($event.target.value)\">\r\n                  <button [disabled]=\"buttonStateSingle()\" type=\"button\" value=\"single\" class=\"btnGroupSwitch btn btn-success\">Single</button>\r\n                  <button [disabled]=\"buttonStateMultiple()\" type=\"button\" value=\"multiple\" class=\"btnGroupSwitch btn btn-success\">Double</button>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"filterBlock\">\r\n                <label for=\"graphType\">Chart Type</label>\r\n                <select class=\"form-control\" formControlName=\"chartType\" (change)=\"updateChart()\" required>\r\n                  <option *ngFor=\"let graph of graphService.getGraphTypes()\" [value]=\"graph.val\">\r\n                    {{graph.view}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n\r\n              <div class=\"filterBlock\">\r\n                <label for=\"graphType\">Select Survey</label>\r\n                <select class=\"form-control\" formControlName=\"surveyId\" required>\r\n                  <option *ngFor=\"let survey of surveys\" [value]=\"survey.survey_id\">\r\n                    {{survey.survey_name}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n\r\n              <div class=\"filterBlock\">\r\n                <label for=\"graphType\">Select Question</label>\r\n                <select class=\"form-control\" formControlName=\"questionId\" (change)=\"updateChart()\" required>\r\n                  <option *ngFor=\"let question of surveys[chartForm.controls.surveyId.value - 1].questions | GraphableQuestion\"\r\n                    [value]=\"question.question_id\">\r\n                    {{question.question_text}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n\r\n              <div id=\"multipleDataSets\" *ngIf=\"currentDatasetType != 'single'\">\r\n                <div class=\"filterBlock\">\r\n                  <label for=\"graphType\">Select Sub Question</label>\r\n                  <select class=\"form-control\" formControlName=\"subQuestionId\" required (change)=\"updateSubQuestionOptions()\">\r\n                    <option *ngFor=\"let question of surveys[chartForm.controls.surveyId.value - 1].questions | ExceptQuestionId: chartForm.controls.questionId.value | GraphableQuestion\"\r\n                      [value]=\"question.question_id\">\r\n                      {{question.question_text}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"optionsDiv\">\r\n                  <form [formGroup]=\"optionsForm\" (change)=\"updateChart()\">\r\n                    <small class=\"optionsLabel text-muted\">Sub Question Data Filter</small>\r\n                    <ul class=\"optionsList\" formArrayName=\"options\" *ngFor=\"let option of getSubQuestionOptions(); let i = index\">\r\n                      <div class=\"col-lg-12\">\r\n                         <li>\r\n                           <input type=\"checkbox\" [formControlName]=\"i\">\r\n                           <span class=\"spanOption\">{{option.option_text}}</span>\r\n                        </li>\r\n                      </div>\r\n                     </ul>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n              <div class=\"btnBlock\">\r\n               <hr>\r\n                <button type=\"button\" class=\"btn btn-primary btn-block btn-sm\">\r\n                  <a href=\"graphs\" (click)=\"download($event)\" id=\"export\">\r\n                    <i class=\"fas fa-download\"></i>\r\n                    Export Graph\r\n                  </a>\r\n                </button>\r\n              </div>\r\n\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n        <div class=\"col-lg-8\">\r\n          <canvas id=\"graphCanvas\" width=\"670\" height=\"670\"></canvas>\r\n        </div>\r\n\r\n        <div class=\"col-lg-1\">\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 635:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <navigation></navigation>\r\n  <div id=\"page-wrapper\" class=\"gray-bg\">\r\n    <topnavbar></topnavbar>\r\n    <div  *ngIf=\"showHomeDiv\" class=\"col-lg-3 margin-top-20\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <h5>Survey Details</h5>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <div *ngIf=\"showInfo\" class=\"feed-activity-list\">\r\n            <div *ngFor=\"let info of surveyDetails\">\r\n               <div class=\"feed-element margin-top-5\">\r\n                <button type=\"submit\" *ngIf=\"info.survey_is_active\"  value=\"{{info.survey_id}}\" (click)=\"openModal($event.target.value)\" class=\"label label-primary pull-right\">Active</button>\r\n                <button type=\"submit\" *ngIf=\"! info.survey_is_active\" value=\"{{info.survey_id}}\" (click)=\"openModal($event.target.value)\" class=\"label label-warning pull-right\">Inactive</button>\r\n                <strong>{{info.survey_name}}</strong>\r\n                <div class=\"margin-top-5\">\r\n                  <div> Date Created: <small class=\"text-muted pull-right\">{{info.date_created}}</small></div>\r\n                  <div> Submissions: <small class=\"text-muted pull-right\">{{info.response_count}}</small></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"filterBlock\">\r\n            <div class=\"btn-group w-100\" id=\"deepGraphSwitch\" role=\"group\" (click)=\"updateChart()\" required>\r\n              <button type=\"button\" class=\"btnGroupSwitch btn btn-success\">Refresh Chart</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-9 margin-top-20\">\r\n      <div class=\"ibox-content\">\r\n        <canvas id=\"graphCanvas\" width=\"1000\" height=\"670\"></canvas>\r\n      </div >\r\n    </div>\r\n    <div id=\"success\" class=\"modal\">\r\n\r\n        <!-- Modal content -->\r\n        <div class=\"modal-content\">\r\n          <p class=\"checker\">Are you sure you want to change the activity status of this survey?</p>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-5\">\r\n              <span (click)=\"updateActiveSurvey()\" class=\"close\">Yes</span>\r\n            </div>\r\n            <div class=\"col-lg-2\">\r\n              <span (click)=\"closeModal()\" class=\"close\">No</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <navigation></navigation>\r\n  <div id=\"page-wrapper\" class=\"gray-bg\">\r\n    <topnavbar></topnavbar>\r\n    <div id=\"ctr\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-11 ibox float-e-margins\">\r\n          <div class=\"ibox-content\">\r\n            <div class=\"row justify-content-between btnBar\">\r\n              <div class=\"col\">\r\n                <select class=\"form-control pull-left\" id=\"surveySelect\" (change)=\"surveySelect($event.target.value)\">\r\n                  <option disabled selected>-Please Select a Survey-</option>\r\n                  <option *ngFor=\"let activeSurveys of surveys\" value=\"{{activeSurveys.survey_id}}\">\r\n                    {{ activeSurveys.survey_name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-primary pull-right btn-sm\" (click)='save(); openModal()'>\r\n                  <i class=\"fas fa-database\"></i>\r\n                  Save\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"feed-activity-list\">\r\n              <b>\r\n                <legend align=\"center\"> {{ selectedSurveyName }} </legend>\r\n              </b>\r\n\r\n              <form>\r\n                <div *ngFor=\"let survey of surveys | filterBySurveyID: selectedSurveyId\">\r\n                  <div>\r\n                    <div class=\"row form-group\" *ngFor=\"let question of survey.questions; let k = index\">\r\n                      <div>\r\n                        <div class=\"col-lg-4\" id=\"questionText\">\r\n                          <span class=\"spanQuestion\"> {{ k+1 }} . <span class=\"spanQuestionText\">{{\r\n                              question.question_text\r\n                              }}</span></span>\r\n                        </div>\r\n                        <div class=\"col-lg-7\">\r\n                          <div [ngSwitch]=\"question.question_type\">\r\n\r\n                            <div *ngSwitchCase=\"'select'\">\r\n                              <select [(ngModel)]=\"question.response\" [ngModelOptions]=\"{standalone: true}\" (change)='valueChanges(survey.survey_id,question.question_id,question.options, question.response )'\r\n                                class=\"form-control\">\r\n                                <option *ngFor=\"let option of question.options\" [value]=\"option.option_id\">\r\n                                  {{ option.option_text }}\r\n                                </option>\r\n                              </select>\r\n                            </div>\r\n                            <div *ngSwitchCase=\"'checkbox'\">\r\n                              <div id=\"indentAlign\" *ngFor=\"let option of question.options; let j = index\">\r\n                                <label class=\"form-check-label\">\r\n                                  <input class=\"form-check-input\" (change)=\"updateCheckbox(question, option.option_text, $event.target.checked, option.option_id, survey.survey_id)\"\r\n                                    type=\"checkbox\" [value]=\"option.option_text\">\r\n                                  <span class=\"spanOption\">{{ option.option_text }}</span>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                            <div *ngSwitchCase=\"'text'\">\r\n                              <div *ngFor=\"let option of question.options\">\r\n                                <label class=\"form-check-label\"></label>\r\n                                <textarea class=\"form-control\" (change)='valueChanges(survey.survey_id, question.question_id, option.option_id, question.response)'\r\n                                  [(ngModel)]='question.response' [ngModelOptions]='{standalone: true}' rows=\"3\"></textarea>\r\n                              </div>\r\n                            </div>\r\n                            <div *ngSwitchCase=\"'radio'\">\r\n                              <div id=\"indentAlign\" *ngFor=\"let option of question.options\">\r\n                                <label class=\"check-label\">\r\n                                  <!--  [(ngModel)]=\"surveys.responses[k]\"-->\r\n                                  <input type=\"radio\" (change)='valueChanges(survey.survey_id, question.question_id,option.option_id, option.option_text)'\r\n                                    [(ngModel)]=\"question.response\" [ngModelOptions]=\"{standalone: true}\" class=\"form-check-input\"\r\n                                    [name]=\"'radio'+question.question_id\" [value]=\"option.option_text\">\r\n                                  <span class=\"spanOption\">{{ option.option_text }}</span>\r\n                                </label>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"success\" class=\"modal\">\r\n\r\n      <!-- Modal content -->\r\n      <div class=\"modal-content\">\r\n        <p class=\"saved\">Saved Successfully!</p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 637:
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\r\n\t<div class=\"notfound\">\r\n\t\t<div class=\"notfound-bg\">\r\n\t\t\t<div></div>\r\n\t\t\t<div></div>\r\n\t\t\t<div></div>\r\n\t\t</div>\r\n\t\t<h1>oops!</h1>\r\n\t\t<h2>Error 404 : Page Not Found</h2>\r\n\t\t<a [routerLink]=\"['/home']\">go back</a>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 638:
/***/ (function(module, exports) {

module.exports = "<!-- Survey Landing/Home page -->\r\n\r\n<body>\r\n\r\n  <div class=\"row white-bg h-100\" *ngIf=\"!showSurveyDiv\">\r\n    <div class=\"col-lg-9 align-items-center h-100\">\r\n      <img id=\"dcapLogo\" src=\"../../../assets/img/dutchess-cap-heart.png\" id=\"imgHeart\">\r\n      <h1>Dutchess County Community Action Survey Portal</h1>\r\n    </div>\r\n    <div class=\"col-lg-3 align-items-center h-100\">\r\n      <button class=\"btn btn-default pull-right\" id=\"btnLogin\" *ngIf=\"!auth.isAuthenticated()\" (click)=\"auth.login()\">\r\n        <i class=\"fas fa-sign-in-alt\"></i>\r\n        Admin Login\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" id=\"landingRow\">\r\n\r\n    <div class=\"col-lg-3\">\r\n    </div>\r\n\r\n    <div class=\"col-lg-6\" *ngIf=\"!showSurveyDiv\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-content\">\r\n          <img class=\"center\" id=\"imgLogo\" src=\"../../../assets/img/dutchess-cap-color.png\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3\"></div>\r\n            <div class=\"col-lg-6\">\r\n              <p class=\"text-center black\">Please select a survey to take:</p>\r\n              <select class=\"form-control\" id=\"select\" (change)=\"surveySelect($event.target.value)\">\r\n                <option disabled selected>-Please Select a Survey-</option>\r\n                <option *ngFor=\"let surveyActive of surveys\" value=\"{{surveyActive.survey_id}}\">{{surveyActive.survey_name}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-lg-3\"></div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"form-group\">\r\n              <div class=\"col-lg-12 text-center \">\r\n                <button type=\"button\" id=\"btnStart\" class=\"btn btn-success btn-lg btn-block\" (click)=\"onStart()\">\r\n                  Start Survey!\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6\" *ngIf=\"showSurveyDiv\">\r\n\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-content\">\r\n          <form>\r\n            <div *ngFor=\"let survey of surveys | filterBySurveyID: selectedSurveyId\">\r\n              <div *ngFor=\"let question of survey.questions; let k = index\">\r\n                <div class=\"row\">\r\n                  <div [hidden]=\"hideQuestion(k)\" id=\"topSpacing\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 questionHeader row-centered\">\r\n                        <h2 id=\"questionText\">{{ question.question_text }}</h2>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-2\">\r\n                    </div>\r\n                    <div class=\"col-lg-8\">\r\n                      <div [ngSwitch]=\"question.question_type\" id=\"bottomSpacing\">\r\n                        <div *ngSwitchCase=\"'select'\">\r\n                          <select [(ngModel)]=\"question.response\" [ngModelOptions]=\"{standalone: true}\" (change)='valueChanges(survey.survey_id,question.question_id,question.options, question.response )'\r\n                            class=\"form-control\">\r\n                            <option disabled selected>-Please Select a Response-</option>\r\n                            <option *ngFor=\"let option of question.options\" [value]=\"option.option_id\">\r\n                              {{ option.option_text }}\r\n                            </option>\r\n                          </select>\r\n                        </div>\r\n                        <div *ngSwitchCase=\"'checkbox'\">\r\n                          <div id=\"indentAlign\" *ngFor=\"let option of question.options; let j = index\">\r\n                            <label id=\"checkLabel\" class=\"form-check-label\">\r\n                              <input class=\"form-check-input\" (change)=\"updateCheckbox(question, option.option_text, $event.target.checked, option.option_id, survey.survey_id)\"\r\n                                type=\"checkbox\" [value]=\"option.option_text\">\r\n                              <span id=\"indent\" class=\"spanOption\">{{ option.option_text }}</span>\r\n\r\n                            </label>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngSwitchCase=\"'text'\">\r\n                          <div *ngFor=\"let option of question.options\">\r\n                            <label class=\"form-check-label\"></label>\r\n                            <textarea class=\"form-control\" (change)='valueChanges(survey.survey_id, question.question_id, option.option_id, question.response)'\r\n                              [(ngModel)]='question.response' [ngModelOptions]='{standalone: true}' rows=\"3\"></textarea>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngSwitchCase=\"'radio'\">\r\n                          <div id=\"indentAlign\" *ngFor=\"let option of question.options\">\r\n                            <label class=\"check-label\">\r\n                              <!--  [(ngModel)]=\"surveys.responses[k]\"-->\r\n                              <input type=\"radio\" (change)='valueChanges(survey.survey_id, question.question_id,option.option_id, option.option_text)'\r\n                                [(ngModel)]=\"question.response\" [ngModelOptions]=\"{standalone: true}\" class=\"form-check-input\"\r\n                                [name]=\"'radio'+question.question_id\" [value]=\"option.option_text\">\r\n                              <span class=\"spanOption\">{{ option.option_text }}</span>\r\n                            </label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-lg-2\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\" [hidden]=\"hideQuestion(k)\">\r\n                  <div class=\"col-lg-4\">\r\n                    <button [disabled]=\"isFirstPage()\" type=\"button\" class=\"btn btn-primary pull-left\" (click)='onPrevious()'>\r\n                      <i class=\"fas fa-arrow-circle-left\"></i>\r\n                      Previous Question\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"col-lg-4 row-centered\">\r\n                    <div class=\"row\">\r\n                      <b>Question {{k + 1}} of {{survey.questions.length }}</b>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      {{survey.survey_name}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-lg-4\">\r\n                    <button type=\"button\" *ngIf=\"!isLastPage()\" class=\"btn btn-primary pull-right\" (click)='onNext()'>\r\n                      Next Question\r\n                      <i class=\"fas fa-arrow-circle-right\"></i>\r\n                    </button>\r\n                    <button type=\"button\" [disabled]='disabledSave' *ngIf=\"isLastPage()\" class=\"btn btn-warning pull-right\"\r\n                      (click)='save();'>\r\n                      Submit Response!\r\n                      <i class=\"fas fa-database\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-lg-3\">\r\n    </div>\r\n\r\n  </div>\r\n</body>"

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-3\">\n    </div>\n\n    <div class=\"col-lg-6\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\" id=\"divRowHeader\">\n          <h2 class=\"center-text\">Thank you for taking our survey!</h2>\n        </div>\n        <div class=\"ibox-content\">\n           <div class=\"row\" id=\"divRowComment\">\n               <p class=\"center-text\">If you would like to leave a comment or question, <a href=\"http://dutchesscaporg-proof.presencehost.net/contact.html\"> click here!</a>\n            </div>\n            <div class=\"row\" id=\"divRowBtn\">\n            <button class=\"btn btn-default btn-block\" (click)=\"location.href = 'http://www.dutchesscap.org/'\">\n              <i class=\"fas fa-sign-in-alt\"></i>\n              Return to http://www.dutchesscap.org\n            </button>\n         </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-3\">\n    </div>\n\n  </div>\n</body>"

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_lock__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_lock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_auth0_lock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(417);
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
                redirectUrl: 'http://localhost:8888/#/home',
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

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ })

},[800]);
//# sourceMappingURL=main.bundle.js.map