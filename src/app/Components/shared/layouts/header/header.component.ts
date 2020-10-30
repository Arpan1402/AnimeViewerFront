import { Component, OnInit } from '@angular/core';
import { genreList } from "../../../mock/genre-list";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  genres=[...genreList];

  constructor() { }

  ngOnInit(): void {
  }

}
