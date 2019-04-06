import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable()
export class PostsService {

  posts: Post[] = [
    new Post(
      "Mon premier post",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore"
      + "et dolore magna aliqua. Ut enim ad minim veniam, quis",
      1,
      new Date()
    ),
    new Post(
      "Mon deuxième post",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore"
      + "et dolore magna aliqua. Ut enim ad minim veniam, quis",
      -1,
      new Date()
    ),
    new Post(
      "Encore un post",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore"
      + "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      0,
      new Date()
    ),
  ];

  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  loveIt(post: Post) {
    const postIndexToLove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts[postIndexToLove].loveIts++;
    this.emitPosts();
  }

  dontLoveIt(post: Post) {
    const postIndexToDontLove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts[postIndexToDontLove].loveIts--;
    this.emitPosts();
  }
}
