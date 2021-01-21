import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {NgForm} from '@angular/forms';
import { MovieServiceService } from 'src/app/_services/movie-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  constructor(private service:MovieServiceService,private dialogBox:MatDialogRef<UpdateMovieComponent>,private _snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  onClose(){
    this.dialogBox.close();
    this.service.filter('Register click');
  }

  onSubmit(form:NgForm){
    var Id= form.value.Id;
    this.service.updateMovie(form.value).subscribe(
      data=>{
        if(data!=null){
          this._snackBar.open("Updated successfully",'',{
            duration:5000,
            verticalPosition:'bottom'
          });
        }
      },
      error=>{
        this._snackBar.open(error,'',{
          duration:3000,
          verticalPosition:'bottom'
        });
      });
    }

}
