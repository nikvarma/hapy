import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostsPage } from './posts';
import { MediaviewersmallComponent } from '../../components/mediaviewersmall/mediaviewersmall';

@NgModule({
  declarations: [
    PostsPage,
    MediaviewersmallComponent
  ],
  imports: [
    IonicPageModule.forChild(PostsPage),
  ],
})
export class PostsPageModule {}
