import { OnInit, Component, AfterViewInit } from "@angular/core";
import { Globals } from "../../globals";
import { GraphService } from '../../services/graph.service';

@Component({
   selector: 'home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   constructor(
      public globals: Globals,
      public graphService: GraphService
   ) { };

   ngOnInit() {
   }

   canvas: any;
   // canvas context
   ctx: any;
   // chart object
   chart: Chart = null;

   ngAfterViewInit() {
      this.canvas = document.getElementById('graphCanvas');
      this.ctx = this.canvas.getContext('2d');
      this.updateChart();
   };

   


   updateChart(): void {
      this.destroyChart();
      let c: Chart = this.graphService.createDateChart(this.ctx, "line", this.DateGraphData())
      this.buildChart(c)
}

   private destroyChart(): void {
      if (this.chart != null) {
         this.chart.destroy();
      }
   }

   // go through the surveys and get the info for the survey details card
   getSurveyInfo(): any[] {
      let surveyDetails: any[] = [];
      this.globals.surveys.forEach(survey => {
         let submissionCount = 0;
         // get the number of responses on each question of the survey
         survey.questions.map(q => { submissionCount += q.responses.length });
         // push details to array
         surveyDetails.push({
            name: survey.survey_name,
            date: survey.date_created,
            status: survey.is_active,
            // round down the operation of the the total submissions divided by the number of questions, parse to string for formatting
            submissions: Math.round(submissionCount / survey.questions.length).toLocaleString(),
         })
      });
      return surveyDetails;
   }

   private buildChart(chartData: Chart): void {
      this.chart = chartData;
      this.chart.update();
   }

   
   
   mapDateData(val): Map<string, number> {
      let map = new Map();
      let survey = this.globals.surveys[val];
      let qid = survey.questions[0].question_id;
      survey.questions.forEach(question => {
         if (question.question_id == qid) {
            question.responses.forEach(r => {
               let testdate = new Date(r.date_taken)
               if (testdate >= this.getDateYearAgo()){
                  if (map.has(r.date_taken)) {
                     let count = map.get(r.date_taken);
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
      });
      return map;
   }



   mapDateDataSets(): any[] {
      let datasets: any[] = new Array();
      // go through the checkboxes that are selected
         // dsMap contains all the top question options labels with values 0
         for(let v = 0; v < this.globals.surveys.length; v++){
            // push the dataset values
            datasets.push({
               label: this.globals.surveys[v].survey_name,
               data: this.mapDataLast(v),
               borderColor: this.graphService.getColorByIndex(v),
               fill: false
            })
         };
      return datasets;
   }

   mapDataLast(val): any[] {
      let data: any[] = new Array();
      let a = Array.from(this.mapDateData(val).keys());
      let b = Array.from(this.mapDateData(val).values());

      let survey = this.globals.surveys[val];

      // Push the values with the labels to the datasets
      for(let r=0; r <= survey.questions[0].responses.length; r++){

         data.push({
            x: a[r],
            y: b[r]
         })

      }
      return data
   }


   // pulls together the above functions to set the labels and datasets for the matrix graph
   DateGraphData(): any {
      return {
         datasets: this.mapDateDataSets()
      }
   }

   private getDateYearAgo(): any {
      let today = new Date();
      let d = today.getDate();
      let m = today.getMonth() + 1;
      let yyyy = today.getFullYear() - 1;
      let mm: string;
      let dd: string;

      if(d < 10) {
         dd = '0' + d;
      }
      else{
         dd = '' + d;
      }
      if(m < 10) {
         mm = '0' + m;
      }
      else{
         mm = '' + m;
      }

      let today1 = new Date(yyyy + '-' + mm + '-' + dd);

      return today1;
   }
   
}