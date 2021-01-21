import { Component, OnInit,ViewChild } from '@angular/core';
import {MovieServiceService} from '../../_services/movie-service.service';
import {IMovie} from '../../interfaces/movie';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatDialogConfig,MatDialog} from '@angular/material/dialog';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { UpdateMovieComponent } from '../update-movie/update-movie.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  dataSource: MatTableDataSource<IMovie>;
  displayedColumns: string[] = ['Name','Director','Language','Rating','options'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private service:MovieServiceService, private dialog:MatDialog, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies(){
    this.service.getAllMovies().subscribe(
      data=>{
        this.dataSource = new MatTableDataSource<IMovie>(data);
        this.dataSource.sort = this.sort;
      },
      error=>{
        this._snackBar.open(error,'',{
          duration:3000,
          verticalPosition:'bottom'
        });
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AddMovieComponent,dialogConfig);
  }

  onEdit(movie:IMovie){
    this.service.movieData = movie;
    const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "70%";
      this.dialog.open(UpdateMovieComponent,dialogConfig);
  }

  onDelete(id:string){
    if(confirm('Are you sure to delete this record ?'))
    this.service.deleteMovie(id).subscribe(result=>{
      this.getAllMovies();
    },
    error=>{
      this._snackBar.open(error,'',{
        duration:3000,
        verticalPosition:'bottom'
      });
    });
  }

}
