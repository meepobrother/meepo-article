
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'article-list',
    templateUrl: './article-list.html'
})
export class ArticleListComponent implements OnInit {
    @Input() items: ArticleListInter[] = [];
    constructor() { }
    ngOnInit() { }
}

export interface ArticleListInter {
    desc?: string;
    images?: string[];
    avatar?: string;
    nickname?: string;
    goods?: number;
    discuss?: number;
    look?: number;
    title?: string;
    color?: string;
    link?: string;
}
