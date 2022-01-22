import {Component, Inject, OnInit} from '@angular/core';
import {PostsService} from "../posts.service";
import {Post} from "../post.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PostListComponent} from "../post-list/post-list.component";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PostListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Post) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close()
  }

}
