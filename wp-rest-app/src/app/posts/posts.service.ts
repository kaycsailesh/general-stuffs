import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Post} from "./post.model";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  activePost: Subject<Post> = new Subject<Post>()

  constructor(
    private http: HttpClient,
  ) {
  }

  fetchPosts(limit: number): Observable<Post[]> {
    const postsUrl = 'https://wordpress.org/news/wp-json/wp/v2/posts'
    let postParams = new HttpParams()
    postParams = postParams.append('per_page', 20)
    postParams = postParams.append('orderby', 'date')
    return this.http.get<Post[]>(postsUrl, {observe: 'body', responseType: 'json', params: postParams})
  }

  setActivePost(post: Post): void {
    this.activePost.next(post)
  }

  getActivePost(): Observable<Post> {
    return this.activePost
  }
}
