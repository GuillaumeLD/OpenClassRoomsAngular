import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date = new Date();
  posts = [
    new Post(
      "Mon premier post",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore"
      + "et dolore magna aliqua. Ut enim ad minim veniam, quis",
      1,
      new Date()
    ),
    new Post(
      "Mon premier post",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore"
      + "et dolore magna aliqua. Ut enim ad minim veniam, quis",
      -1,
      new Date()
    ),
    new Post(
      "Mon premier post",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore"
      + "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      0,
      new Date()
    ),
  ];

}

class Post {

  constructor(
    private title: string,
    private content: string,
    private loveIts: number,
    private created_at: Date
  ) { }

}
