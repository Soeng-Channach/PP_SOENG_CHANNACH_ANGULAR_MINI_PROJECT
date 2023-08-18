import { Component,OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Ibook } from '../ibook';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private _service: BookService){}

  ngOnInit(): void {
    //  this.getABook();
  }

  // books:Ibook[] = [];

  getABook(bookId: number): void {
      this._service.getBookById(bookId).subscribe((book) => {
      // this.books=book;
    })
  }

}
