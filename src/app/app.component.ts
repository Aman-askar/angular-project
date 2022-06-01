import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project1';
  posts:any;

  constructor(private service: PostService) {}

  ngOnInit() {
   this.service.getPosts()
   .subscribe(responce => {
     this.posts = responce;
   });
  }
  
}
