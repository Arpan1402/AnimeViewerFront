import { Component, OnInit } from '@angular/core';
import { genreList } from '../../mock/genre-list';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  constructor() { }

  genres=['All',...genreList];
  animeList=[];
  sortingOrder=['A-Z','Z-A'];
  searchAnime:FormGroup;

  ngOnInit(): void {

    this.searchAnime=new FormGroup({
      'name':new FormControl(null)
    });

  }

  onSearch(){
    console.log(this.searchAnime);
  }
}
