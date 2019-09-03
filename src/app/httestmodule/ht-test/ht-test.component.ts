import { Component, OnInit } from '@angular/core';
import Handsontable from 'handsontable';

@Component({
  selector: 'app-ht-test',
  templateUrl: './ht-test.component.html',
  styleUrls: ['./ht-test.component.scss']
})
export class HtTestComponent implements OnInit {

  dataset: any[] = [
    { id: 1, name: 'Ted Right', address: 'Wall Street' },
    { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
    { id: 3, name: 'Joan Well', address: 'Broadway' },
    { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
    { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
    { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
    { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
    { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
  ];
  container:any;

  hot:any;

  constructor() {

   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.container = document.getElementById('hotId');
    if(this.container){

      this.hot = new Handsontable(this.container, {
        data: this.dataset,
        colHeaders: ['Car', 'Year', 'Chassis color', 'Bumper color'],
        afterChange: this.afterDropDownChanged,
        columns: [
          {},
          { type: 'numeric' },
          {
            type: 'dropdown',
            source: ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white']
          },
          {
            type: 'dropdown',
            source: ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white']
          }
        ]
      });

      this.hot.addHook('afterchange', this.afterDropDownChanged);
    

    }
  }

  afterDropDownChanged = (changes, source) => {
    console.log('afterDropDownChanged')
    console.log(changes)
    console.log(source)
    if (changes && changes[0][1] === 2) {
      console.log(this.hot.countRows());
     

        if (changes[0][3] === 'yellow') {
          for (let i = 0; i < this.hot.countRows(); i++) {
            this.hot.setCellMeta(i, 3, 'source', ['yellow_1', 'yellow_2', 'yellow_b']);
          }
        }

        if (changes[0][3] === 'red') {
          this.hot.setCellMeta(changes[0][0], 3, 'source', ['red_1', 'red_2', 'red_b']);
        }

      }
   
  }

}
