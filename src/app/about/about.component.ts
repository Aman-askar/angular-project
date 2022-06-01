import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  posts:any;

  constructor(private service:PostService) { }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response;
    });
  }
}

