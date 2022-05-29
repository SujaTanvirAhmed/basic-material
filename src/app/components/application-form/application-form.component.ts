import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-application-form',
    templateUrl: './application-form.component.html',
    styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent {

    @Output() exportData = new EventEmitter<string>();

    constructor(private msb: MatSnackBar) {
        console.log("application-form created");
    }

    snackBarMsg: string = 'You applied successfully!';
    snackBarAction: string = 'Dismiss';

    jobTypes: string[] = ['Full-Time', 'Part-Time'];
    preferredJobType: string = '';

    name = new FormControl('');
    email = new FormControl('');
    sex = new FormControl('');
    birthDate = new FormControl('');
    snacks = new FormGroup({
        tea: new FormControl(false),
        coffee: new FormControl(false),
        burger: new FormControl(false),
        hotdog: new FormControl(false)
    });

    preferredSnacks: string[] = [
        this.snacks.value.tea ? "Tea" : "",
        this.snacks.value.coffee ? "Coffee" : "",
        this.snacks.value.burger ? "Burger" : "",
        this.snacks.value.hotdog ? "Hotdog" : ""
    ];

    printSnacks(): void {
        const applicant = {
            name: this.name.value,
            email: this.email.value,
            sex: this.sex.value,
            birthDate: this.birthDate.value,
            preferredJobType: this.preferredJobType,
            snacks: {
                tea: this.snacks.value.tea,
                coffee: this.snacks.value.coffee,
                hotdog: this.snacks.value.hotdog,
                burger: this.snacks.value.burger
            }
        };
        console.log(applicant);
    }

    openSnackBar() {
        this.msb.open(this.snackBarMsg, this.snackBarAction);
    }

    sendData() {
        this.exportData.emit("Hello, how are you?");
    }
}