import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    animal: string;
    name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
    selector: 'dialog-overview-example',
    templateUrl: 'dialog-overview-example.html',
})
export class DialogOverviewExample {
    animal: string = '';
    name: string = '';

    constructor(public dialog: MatDialog) {
        console.log("dialog created");
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '500px',
            data: { name: this.name, animal: this.animal },
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
    styleUrls: ['main.css']
})
export class DialogOverviewExampleDialog {
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
    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
