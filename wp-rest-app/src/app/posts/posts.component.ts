import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {PostsService} from "./posts.service";
import {Post} from "./post.model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = []

  constructor(
    private dialog: MatDialog,
    private postService: PostsService,
  ) { }

  ngOnInit(): void {
    this.postService.fetchPosts(20).subscribe(res => {
      this.posts = res;

    })
  }

  openPostDetail(post: Post): void {
    const dialogRef = this.dialog.open(PostDetailComponent, {
      data: post
    })
  }

}
