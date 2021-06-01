import { Component, OnInit } from '@angular/core';
import { SearchService} from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Recipes';
  recipes =[];
  countFlag: boolean = true;
  item: String = '';

  constructor(private search: SearchService){

  }
  
  getData(){
    this.search.getSearchData(this.item).subscribe(
      (res) => {
        if(res.count<=0){
          this.countFlag = false;
        }else{
          this.countFlag = true;
        };
        this.recipes = res.recipes;
      })
  }
}
