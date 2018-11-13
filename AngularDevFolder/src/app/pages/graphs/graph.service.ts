import { Injectable } from '@angular/core';

@Injectable()
export class GraphService {

   private graphTypes: any[] = [
      {val: 'pie', view: 'Pie' },
      {val: 'bar', view: 'Bar' },
      {val: 'doughnut', view: 'Doughnut' },
      {val: 'polarArea', view: 'Polar Area' },
      {val: 'line', view: 'Line' },
      {val: 'radar', view: 'Radar' },
      {val: 'bubble', view: 'Bubble Hubble' },
   ]

   public getGraphTypes(): any[] {
      return this.graphTypes;
   }

}