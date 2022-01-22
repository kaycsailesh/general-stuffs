import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../post.model";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[] = []
  @Output() postClick = new EventEmitter<Post>()
  displayedColumns = ['id', 'title', 'slug', 'status', 'date']

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onPostClick(post: Post): void {
   this.postClick.emit(post)
  }
}
