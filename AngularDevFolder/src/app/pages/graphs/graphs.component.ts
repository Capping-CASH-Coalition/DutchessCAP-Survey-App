import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Chart} from "chart.js";
import { FormBuilder, FormGroup, FormArray, FormControl, FormControlName } from '@angular/forms';
import { GraphData } from './graphData.component';
import { GraphService } from './graph.service'
import { Globals } from '../../globals';


@Component({
    selector: 'app-graphs',
    templateUrl: './graphs.component.html',
    styleUrls: ['./graphs.component.css']
})


export class GraphsComponent implements AfterViewInit, OnInit {
   
   constructor(
      private graphService: GraphService,
      private globals: Globals,
      private fb: FormBuilder,
   ){};

   currentDatasetType: string;
   chartForm: FormGroup;
   canvas: any;
   ctx: any;
   chart: Chart = null;

   ngOnInit() {
      this.initChartForm();
   }

   ngAfterViewInit() {
     this.canvas = document.getElementById('graphCanvas');
     this.ctx = this.canvas.getContext('2d');  
     // this.initChart();
   };

   updateMultipleDataSetForm(val){
      this.currentDatasetType = val;
   }


   // will need to create methods to get surveyId, questionId, subQuestionId,
   initChartForm() {
      this.chartForm = this.fb.group({
         chartType: new FormControl('pie'),
         surveyId: new FormControl('0'),
         questionId: new FormControl('0'),
        // subQuestionId: new FormControl('1'),
        // subQuestionOptions: this.getSubQuestionOptions(this.chartForm.controls.subQuestionId.value)
      });
   }  


   getSubQuestionOptions(subQuestionId): FormArray {
      let ops = new FormArray([]);
      this.globals.surveys[this.chartForm.controls.surveyId.value].questions.forEach(question => {
         if (question.question_id === subQuestionId){
            question.options.forEach(o => {
               ops.push(this.fb.group({
                  option: new FormControl(o.option_text)
               }))
            });
         }
      });
      return ops;
   }

   /*

   patchFormOptions(options) {
      let ops = new FormArray([]);
      options.forEach(o => {
         ops.push(this._fb.group({
            option: new FormControl(o.option_text)
         }));
      });
      return ops;
   }

   initQuestion() {
      return this._fb.group({
         questionText: new FormControl(''),
         questionType: new FormControl(''),
         questionOptions: this._fb.array([
            this.initOption(),
         ])
      });
   }

   initOption() {
      return this._fb.group({
         option: new FormControl('')
      })
   }


   // Data Filters/Form Group
  // chartFiltersForm: FormGroup;
/*   chartDataFilters: string[] = [];
   chartTypes: string[] = [];
   
   chartTypesObj: ChartType[] = [];

   //Canvas
   canvas: any;
   ctx: any;

   //Chart Object
   chart: Chart = null;

   //Chart Data (Initialize it here with a length of 1 so don't get undefined error)
   chartDataArr: Array<GraphData> = new Array(1);

   //Chart Globals
   currChartType: string;
   currDataLabels: string[];
   currDataSetData: number[];
   currDataFilterTopLevel: string;
   currDataFilterSubLevel: string;
   
   chartOptions = {
      responsive: false
   }


   updateTopFilter(filter: string) {
      if (this.currDataFilterTopLevel != filter) {
         this.currDataFilterTopLevel = filter;
         this.updateCurrCharDataLabels(filter);
         this.generateChart();
      }
   }

   updateSubFilter(filter: string) {
      if (this.currDataFilterSubLevel != filter) {
         this.currDataFilterSubLevel = filter;
      }
   }

   updateChartType(chartType: string) {
      if (this.currChartType != chartType) {
         this.currChartType = this.getChartJSChartType(chartType);
         this.generateChart();
      }
   }

   private updateCurrCharDataLabels(filter: string): void {
      let gd = this.getGraphDataFromDataArray(filter);
      this.currDataSetData = gd.data;
      this.currDataLabels = gd.labels;
   }

   private generateChart(): void {
      this.chart.destroy();
      this.chart = this.getCurrChartGlobals();
      this.chart.update();
   }

   private initChart(): void {
      this.chart = this.getCurrChartGlobals();
      this.chart.update();
   }



   private initChartGlobals(gd: GraphData): void {
      this.currChartType = 'pie';
      this.currDataLabels = gd.labels;
      this.currDataSetData = gd.data;
   }

   private getCurrChartGlobals(): Chart {
      let c = new Chart(this.ctx, {
         type: this.currChartType,
         data: {
            labels: this.currDataLabels,
            datasets: [{
                label: 'Total Distribution',
                data: this.currDataSetData,
                backgroundColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255,1)',
                    'rgba(255, 159, 64, 1)'
                ]
            }]
        },
         options: this.chartOptions
      })
      return c;
   }

   private addToDataArray(key:string, labels:Array<string>, data:Array<number>): void {
      let gd = new GraphData(key, labels, data);
      this.chartDataArr.push(gd);
   }

   private getGraphDataFromDataArray(key: string): GraphData {
      for (let i = 0; i < this.chartDataArr.length; i++) {
         if (this.chartDataArr[i].key === key) {
            return this.chartDataArr[i];
         }
      }
   }

   download(event) {
    var anchor = event.target;
    var can =document.getElementsByTagName('canvas')[0] as HTMLCanvasElement;
    anchor.href = can.toDataURL("image/png");
    anchor.download = "graph.png";
}
*/   
}
