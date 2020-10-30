import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { genreList } from './../../mock/genre-list';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  genres=[...genreList];
  yourGenres=[];
  genders=['Male','Female','Others']

  profileForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    console.log(this.genres)
    this.profileForm=new FormGroup({
      'fname':new FormControl(null,Validators.required),
      'lname':new FormControl(null,Validators.required),
      'dob':new FormControl(null,Validators.required),
      'gender':new FormControl('male',Validators.required)
    })
  }

  addGenre(genreName:string){
    this.yourGenres.push(genreName);
    this.yourGenres.sort();
    this.genres=this.genres.filter(item=>item!==genreName);
  }

  removeGenre(genreName:string){
    this.genres.push(genreName);
    this.genres.sort();
    this.yourGenres=this.yourGenres.filter(item=>item!==genreName);
  }

  onAddGenre(name:string){
    console.log(name);
    this.addGenre(name);
    console.log(this.genres);
    console.log(this.yourGenres);
  }

  onRemoveGenre(name:string){
    console.log(name);
    this.removeGenre(name);
  }

  onSubmit(){
    console.log(this.profileForm)
  }
}
