import { Component, OnInit  } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {NgForm} from '@angular/forms';
import { MovieServiceService } from 'src/app/_services/movie-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private service:MovieServiceService,private dialogBox:MatDialogRef<AddMovieComponent>,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();

    //Else
    this.service.movieData={
      _id:'',
      Name:'',
      Director:'',
      Language:'',
      Rating:0
    }
  }

  onSubmit(form:NgForm){
    this.service.addMovie(form.value).subscribe(success=>
      {
        this.resetForm(form);
        this._snackBar.open("Movie added successfully",'',{
          duration:3000,
          verticalPosition:'bottom'
        });
      },
      error=>{
        this._snackBar.open(error,'',{
          duration:3000,
          verticalPosition:'bottom'
        });
      });
  }

  onClose(){
    this.dialogBox.close();
    this.service.filter('Register click');
  }

}
