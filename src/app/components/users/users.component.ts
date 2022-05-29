import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    public users: User[] = [];

    constructor(private usersService: UsersService) { }

    ngOnInit() {
        // this.usersService.getUsers().subscribe(data => this.users = data);
        this.getAllUsers();
    }

    getAllUsers() {
        this.usersService.getAllUsers().subscribe(data => this.users = data);
    }

    onDeleteUserEvent(user: User) {
        // this.usersService.getUsers().subscribe(data => this.users = data);
        console.log("deleteUser event caught");
    }

    deleteUser(event: number) {
        console.log("From parent: going to delete", event);
        this.usersService.getAllUsers().subscribe(data => this.users = data);
    }

    updateUsers() {
        console.log("Updating user");
    }
}