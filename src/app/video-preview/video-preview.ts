import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'video-preview',
    templateUrl: './video-preview.html',
    styleUrls: ['./video-preview.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ViewPreviewComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}