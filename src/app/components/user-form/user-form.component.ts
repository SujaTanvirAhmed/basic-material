import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user-add-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

    formTitle: string = "";
    isUpdateForm: boolean = false;
    userId = this.activatedRoute.snapshot.params['id'];

    name = new FormControl('');
    position = new FormControl('');
    sex = new FormControl('');

    constructor(
        private usersService: UsersService,
        private msb: MatSnackBar,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.userId = this.activatedRoute.snapshot.params['id'];
        this.isUpdateForm = this.userId ? true : false;

        if (this.isUpdateForm) {
            this.usersService.getOneUser(this.userId)
                .subscribe(user => {
                    console.log(user);
                    this.name.setValue(user.userName);
                    this.position.setValue(user.position);
                    this.sex.setValue(user.sex);
                });
            this.formTitle = "Update Existing User";
        }
        else {
            this.formTitle = "Add a New User";
        }
    }

    isFormValid(): boolean {
        if (this.name.invalid || this.position.invalid || this.sex.invalid) {
            return false;
        }
        return true;
    }

    resetFormFields() {
        this.name.reset();
        this.position.reset();
        this.sex.reset();
    }

    onSubmit() {
        if (!this.isUpdateForm) {
            // ADD A NEW USER
            if (!this.isFormValid()) {
                this.msb.open("Please fill-up required fields!", "X", { duration: 3000 });
                return;
            }
            else {
                const newUser = {
                    userName: this.name.value,
                    position: this.position.value,
                    sex: this.sex.value
                }
                this.usersService.addOneUser(newUser)
                    .subscribe(data => {
                        console.log(data.message);
                        this.resetFormFields();
                        this.msb.open("User added successfully!", "X", { duration: 3000 });
                    });
            }
        }
        else {
            // UPDATE AN EXISTING USER
            if (!this.isFormValid()) {
                this.msb.open("Please fill-up required fields!", "X", { duration: 3000 });
                return;
            }
            else {
                this.usersService.updateOneUser({ id: parseInt(this.userId), userName: this.name.value, position: this.position.value, sex: this.sex.value })
                    .subscribe(msg => {
                        this.resetFormFields();
                        console.log(msg);
                    });
            }
        }
    }


}