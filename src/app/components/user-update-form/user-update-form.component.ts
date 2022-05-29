import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
    selector: 'app-user-update-form',
    templateUrl: './user-update-form.component.html',
    styleUrls: ['./user-update-form.component.css']
})
export class UserUpdateFormComponent {

    @Output() private updateUserEvent: EventEmitter<string>;

    name = new FormControl(this.data.user.userName);
    position = new FormControl(this.data.user.position);
    sex = new FormControl(this.data.user.sex);


    updateValid: boolean = true;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: { user: User },
        private http: HttpClient,
        private usersService: UsersService
    ) {
        this.updateUserEvent = new EventEmitter<string>();
    }

    onSubmitUpdated() {
        if (this.name.invalid || this.position.invalid || this.sex.invalid) {
            console.log("Please fill-up required fields!");
            this.updateValid = false;
        }
        else {
            this.updateValid = true;
            const newUser: User = {
                id: this.data.user.id,
                userName: this.name.value,
                position: this.position.value,
                sex: this.sex.value
            };
            this.http.put<any>('http://localhost:4000/users', newUser)
                .subscribe(data => {
                    console.log(data.message);
                    this.updateUserEvent.emit('hello');
                });
        }
    }

    isValid() {
        if (this.name.invalid || this.position.invalid || this.sex.invalid) {
            this.updateValid = false;
        }
        else {
            this.updateValid = true;
        }
    }
}