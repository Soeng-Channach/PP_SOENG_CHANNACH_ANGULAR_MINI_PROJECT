import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookService } from '../book.service';
import { Ibook } from '../ibook';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _serviceBook:BookService){}

  ngOnInit(): void {
   this.getAllBook()
  }

  books:Ibook[] = [];

  getAllBook(){
    this._serviceBook.getBook().subscribe((e)=>{
      this.books=e;
    })
  }

}
