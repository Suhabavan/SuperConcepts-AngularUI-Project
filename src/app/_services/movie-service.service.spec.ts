import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { MovieServiceService } from './movie-service.service';

describe('MovieServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: MovieServiceService = TestBed.get(MovieServiceService);
    expect(service).toBeTruthy();
  });
});
