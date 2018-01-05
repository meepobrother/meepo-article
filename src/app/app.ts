import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFooterBottomComponent } from './article-footer-bottom/article-footer-bottom';
import { ArticleThumbListComponent } from './article-thumb-list/article-thumb-list';
import { ArticleListComponent } from './article-list/article-list';
import { ViewPreviewComponent } from './video-preview/video-preview';
import { CharmComponent } from './charm/charm';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        ArticleFooterBottomComponent,
        ArticleThumbListComponent,
        ArticleListComponent,
        ViewPreviewComponent,
        CharmComponent
    ],
    declarations: [
        ArticleFooterBottomComponent,
        ArticleThumbListComponent,
        ArticleListComponent,
        ViewPreviewComponent,
        CharmComponent
    ],
    providers: [],
})
export class ArticleModule { }
export { ArticleListInter } from './article-list/article-list';
export { CharmItemInter } from './charm/charm';

