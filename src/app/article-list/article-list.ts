
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'article-list',
    templateUrl: './article-list.html',
    styleUrls: ['./article-list.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ArticleListComponent implements OnInit {
    @Input() items: ArticleListInter[] = [];
    constructor() { }
    ngOnInit() { }
}

export interface ArticleListInter {
    desc?: string;
    images?: { src: string, type: string }[];
    avatar?: string;
    nickname?: string;
    goods?: number;
    discuss?: number;
    look?: number;
    title?: string;
    color?: string;
    link?: string;
}
