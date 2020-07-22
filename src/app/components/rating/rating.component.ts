import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  constructor() { }
  ngOnChanges(): void {
    this.starWidth = (75 / 5) * this.rating;
  }
  onClickRating(): void {
    this.ratingClicked.emit('Rating ' + this.rating + ' was clicked.');
  }
}
