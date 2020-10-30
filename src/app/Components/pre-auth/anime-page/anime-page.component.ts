import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { anime } from '../../mock/anime';

@Component({
  selector: 'app-anime-page',
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AnimePageComponent implements OnInit {

  anime=Object.assign({},anime);
  seasons=Object.assign({},this.anime.seasons)
  seasonList=[];
  epList=[];
  selected=""
  genre=this.anime.desc.genre;
  releaseDate=this.anime.desc.releaseDate;
  status=this.anime.desc.status;
  plot=this.anime.desc.plot;

  constructor() { }

  ngOnInit(): void {

    for(let value in this.seasons){
      this.seasonList.push(this.seasons[value].sName);
    }
    this.selected=this.seasonList[0];
    this.ifChanged();
  }
  

  ifChanged(){

    if(this.selected!=""){
      let season=this.selected;
      for(let value in this.seasons){
        if(this.seasons[value].sName===this.selected){
          this.epList=[...this.seasons[value].epList]
        }
      }
    }
  }

}
