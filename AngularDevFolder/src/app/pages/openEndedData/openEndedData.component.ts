import { Component, OnInit } from '@angular/core';
//import * as WordCloud from 'wordcloud';
//const WordCloud = require('wordcloud');

@Component({
    selector: 'app-openEndedData',
    styleUrls: ['./openEndedData.component.css'],
    templateUrl: './openEndedData.component.html',
})
export class OpenEndedDataComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    
    }

    responseData = [
      "The experience was great! I had an overall positive experience. Thank You!",
      "Wasn't too pleased with the help, felt unhappy with the result",
      "Great Job! I had a very posotive experience",
      "Good work, could improve by having more locations",
      "Please revise this program, I had a very negative experience",
      "So grateful. Thank you!",
      "Mediocre",
      "The experience was great! I had an overall positive experience. Thank You!",
      "Wasn't too pleased with the help, felt unhappy with the result",
      "Great Job! I had a very posotive experience",
      "Good work, could improve by having more locations",
      "Please revise this program, I had a very negative experience",
      "So grateful. Thank you!",
      "Mediocre",
      "The experience was great! I had an overall positive experience. Thank You!",
      "Wasn't too pleased with the help, felt unhappy with the result",
      "Great Job! I had a very posotive experience",
      "Good work, could improve by having more locations",
      "Please revise this program, I had a very negative experience",
      "So grateful. Thank you!",
      "Mediocre",
    ]




    characters = [
      'Finn the human',
      'Jake the dog',
      'Princess bubblegum',
      'Lumpy Space Princess',
      'Beemo1',
      'Beemo2'
    ]
   
    
    
    //wordList = [['foo', 25], ['bar', 36]];

    //x = document.getElementById('wordcloudCanvas');
    
    //WordCloud = new WordCloud(document.getElementById('wordcloudCanvas'), list: this.listA );
    //this.WordCloud(this.x, { list: this.listA } )

    //WordCloud(document.getElementById('wordcloudCanvas'), list: this.wordList);

}
