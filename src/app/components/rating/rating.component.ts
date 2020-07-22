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
  starHalf = false
  constructor() { }
  ngOnChanges(): void {
    if (this.rating % 0.5 !== 0) {
      this.starHalf = true;
      this.starWidth = (75 / 5) * this.rating - 1;
    } else {
      this.starWidth = (75 / 5) * this.rating;
    }
  }
  onClickRating(): void {
    this.ratingClicked.emit('Rating ' + this.rating + ' was clicked.');
  }
}
