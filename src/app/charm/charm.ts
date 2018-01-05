import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'charm',
    templateUrl: './charm.html',
    styleUrls: ['./charm.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CharmComponent implements OnInit {
    @Input() items: CharmItemInter[] = [];
    constructor() { }

    ngOnInit() { }
}

export interface CharmItemInter {
    color?: string;
    title?: string;
    desc?: string;
    image?: string;
    link?: string;
}