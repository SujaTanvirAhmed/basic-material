import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-submitted-info',
    templateUrl: './submitted-info.component.html',
    styleUrls: ['./submitted-info.component.css']
})
export class SubmittedInfoComponent {
    @Input() name: string = '';
    @Input() email: string = '';
    @Input() sex: string = '';
    @Input() birthDate: string = '';
    @Input() preferredJobType: string = '';

    constructor() {
        console.log("submitted created");
    }
}