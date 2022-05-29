import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-job-application',
    templateUrl: './job-application.component.html',
    styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent {

    constructor(private msb: MatSnackBar) { }

    name: string = '';
    snackBarMsg: string = 'You applied successfully!';
    snackBarAction: string = 'Dismiss';

    openSnackBar() {
        this.msb.open(this.snackBarMsg, this.snackBarAction);
    }

    receiveData($data: string) {
        this.name = $data;
    }
}