import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostsPage } from './posts';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PostsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PostsPage),
  ],
})
export class PostsPageModule {}
