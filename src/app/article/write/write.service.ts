import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Write } from './write';
import { authOptions, urls } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class WriteService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
  }

  post(write: Write) {
    this.http.post<any>(urls.article.write, write, authOptions).subscribe(
      (response) => {
        switch (response.status) {
          case 460:
            this.snackBar.open('The account isn\'t activated');
            break;
          case 461:
            this.snackBar.open('The title is too long');
            break;
          case 462:
            this.snackBar.open('The title can\'t be blank');
            break;
          case 463:
            this.snackBar.open('The category isn\'t exist');
            break;
          default:
            if (write.show) {
              this.snackBar.open('The article was published successfully');
            } else {
              this.snackBar.open('The article is saved to personal space');
            }
        }
      }
    );
  }
}
