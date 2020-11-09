import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
 //forma: FormGroup;
 listaBlog: Object[]=[];
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.listaBlog= this.service.getPublications();
    //this.service.addPublication(this.forma)
  }
saveForm(): void {
//console.log(this.forma);

}
}
