import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';
import {BehaviorSubject, Subject} from "rxjs";

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
