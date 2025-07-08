import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  standalone: true,
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.css'],
})
export class SearchBar {
  @Output() search = new EventEmitter<string>();

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }
}