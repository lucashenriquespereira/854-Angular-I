import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InputSearchData } from 'src/app/models/input-search-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();
  @Output() public inputSearch: EventEmitter<InputSearchData> = new EventEmitter<InputSearchData>();

  public searchData: InputSearchData = {inputSearch:""};
  constructor() { }

  ngOnInit() {
    this.elementCreated.emit("header")  
  }

  public submitSearch(): void {
    this.inputSearch.emit(this.searchData)
    console.log('Pesquisa realizada')
  }

}
