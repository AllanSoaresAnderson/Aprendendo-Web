import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = ''
  coverTitle:string = ''
  coverDescription:string = ''
  id:string | null= '0'

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article =>
      article.id.toString() == id)[0]


    this.coverTitle = result.title
    this.coverDescription = result.description
    this.photoCover = result.photo


  }

}
