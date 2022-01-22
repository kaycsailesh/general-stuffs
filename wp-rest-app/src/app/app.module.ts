import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostsComponent} from './posts/posts.component';
import {PostListComponent} from './posts/post-list/post-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {HeaderComponent} from './header/header.component';
import {MapComponent} from './map/map.component';
import {PostDetailComponent} from './posts/post-detail/post-detail.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { MapTilesComponent } from './map/map-tiles/map-tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostListComponent,
    HeaderComponent,
    MapComponent,
    PostDetailComponent,
    MapTilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
