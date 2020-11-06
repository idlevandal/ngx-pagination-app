// app.component.ts
import { Component, OnInit } from '@angular/core';
import { config } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  collection = { count: 58, data: [] };
  config = {
    id: 'custom',
    itemsPerPage: 6,
    currentPage: 1,
    totalItems: this.collection.count
  };

  public paginationHeaderText: string = '';
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;

  constructor() {
    //Create dummy data
    for (let i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: "item number " + (i + 1)
        }
      );
    }
  }

  ngOnInit(): void {
    this.buildPaginationHeader(this.config.currentPage, this.config.itemsPerPage);
  }

  // onPageChange(event): void{
  //   console.log(event);
  //   this.config.currentPage = event;
  //   this.createPaginationHeader(event);
  // }

  public updatePaginationHeader(): void {
    const lastItem = (this.config.currentPage * this.config.itemsPerPage);
    const toItem = lastItem <= this.collection.count ? lastItem : this.collection.count;
    const firstItem = lastItem - (this.config.itemsPerPage - 1)
    
    this.buildPaginationHeader(firstItem, toItem);
  }

  private buildPaginationHeader(resultFrom, resultTo): void {
    this.paginationHeaderText =  `Showing ${resultFrom}-${resultTo} of ${this.collection.count} Results`;
  }

}