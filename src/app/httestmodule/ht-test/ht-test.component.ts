import { Component, OnInit } from '@angular/core';
import Handsontable from 'handsontable';
import 'handsontable-key-value';

@Component({
  selector: 'app-ht-test',
  templateUrl: './ht-test.component.html',
  styleUrls: ['./ht-test.component.scss']
})
export class HtTestComponent implements OnInit {

  dataset: any[] = [
    { id: 1, name: 'Ted Right', address: 'Wall Street', kv: 'a' },
    { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue', kv: 'a' },
    { id: 3, name: 'Joan Well', address: 'Broadway', kv: 'a' },
    { id: 4, name: 'Gail Polite', address: 'Bourbon Street', kv: 'a' },
    { id: 5, name: 'Michael Fair', address: 'Lombard Street', kv: 'a' },
    { id: 6, name: 'Mia Fair', address: 'Rodeo Drive', kv: 'a' },
    { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard', kv: 'a' },
    { id: 8, name: 'Jack Right', address: 'Michigan Avenue', kv: 'a' },
  ];
  container: any;

  hot: any;

  columnsCasual: any;
  columnsKeyValue: any;

  constructor() {

    this.columnsCasual = [
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
    ];

    this.columnsKeyValue = [
      {},
      { type: 'numeric' },
      {
        type: 'dropdown',
        source: ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white']
      },
      {
        type: 'dropdown',
        source: ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white']
      },
      {
        type: 'key-value',
        filter: false, // Same parameter as in `autocomplete`
        data: 'status', // The field containing the key value in your data
        // List of source items
        source: [
          {
            id: 1,
            name: 'Ready',
          },
          {
            id: 2,
            name: 'Cancelled',
          },
          {
            id: 3,
            name: 'Done',
          },
        ],
        keyProperty: 'id', // The field containing the key value in your items
        valueProperty: 'name', // The field containing the display value in your items
      },
    ];

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.container = document.getElementById('hotId');
    if (this.container) {

      this.hot = new Handsontable(this.container, {
        data: this.dataset,
        colHeaders: ['Car', 'Year', 'Chassis color', 'Bumper color'],
        afterChange: this.afterDropDownChanged,
        columns: this.columnsCasual
      });

      this.hot.updateSettings({ columns: this.columnsKeyValue} );
    }
  }

  afterDropDownChanged = (changes, source) => {
    if (changes && changes[0][1] === 2) {
      if (changes[0][3] === 'yellow') {
        for (let i = 0; i < this.hot.countRows(); i++) {
          this.hot.setDataAtCell(i, 3, null);
          this.hot.setCellMeta(i, 3, 'source', ['yellow_1', 'yellow_2', 'yellow_b']);
        }
      }

      if (changes[0][3] === 'red') {
        this.hot.setDataAtCell(changes[0][0], 3, null);
        this.hot.setCellMeta(changes[0][0], 3, 'source', ['red_1', 'red_2', 'red_b']);
      }
    }
  }

}