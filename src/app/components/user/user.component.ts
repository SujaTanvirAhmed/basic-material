import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UserUpdateFormComponent } from '../user-update-form/user-update-form.component';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent {

    @Input() user: User = { id: 0, sex: "", position: "", userName: "" };
    @Output() private deleteUserEvent: EventEmitter<number>;

    avatarMale = 'assets/images/avatar-male.png';
    avatarFemale = 'assets/images/avatar-female.png';
    private baseUrl: string = 'http://localhost:4000';

    postResponse: number = 0;
    deleteResponse: number = 0;
    // private dialogRef: any;

    constructor(
        private http: HttpClient,
        private msb: MatSnackBar,
        private dialog: MatDialog
    ) {
        this.deleteUserEvent = new EventEmitter<number>();
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(
            UserUpdateFormComponent,
            { width: '350px', data: { user: this.user } }
        );
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    postFnc() {
        this.http.post<any>(this.baseUrl, {
            message: "Helllo",
            userId: 123456
        }).subscribe(
            data => {
                this.postResponse = data.userId;
                console.log(this.postResponse);
            }
        );
    }

    onUpdate(id: number | undefined) {
        this.http.put<any>(this.baseUrl + '/users/' + id, { name: "Hello" })
            .subscribe(data => console.log(data));
    }

    onDelete(value: number | undefined) {
        this.http.delete<any>(this.baseUrl + '/users/' + this.user.id)
            .subscribe(data => {
                this.deleteUserEvent.emit(value);
                console.log("User deleted with id:", data.userId);
                this.msb.open('User deleted with id: ' + data.userId, 'X', { duration: 3000 });
            })
    }

    catchUpdateUserEvent() {
        console.log("Update event captured");
    }
}