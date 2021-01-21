import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowMovieComponent } from './components/show-movie/show-movie.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { UpdateMovieComponent } from './components/update-movie/update-movie.component';

import {MovieServiceService} from './_services/movie-service.service';

//Below lines is required for Angular Material
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ShowMovieComponent,
    AddMovieComponent,
    UpdateMovieComponent,
    routingComponents,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule, MatTableModule,
    MatIconModule, MatButtonModule,
    MatSortModule,MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [MovieServiceService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents:[AddMovieComponent,UpdateMovieComponent]
})

export class AppModule { }
