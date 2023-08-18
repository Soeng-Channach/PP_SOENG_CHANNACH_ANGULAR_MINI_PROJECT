import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Ibook } from './ibook';


@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    let books:Ibook[]=[
      {
        id: 1,
        title: "Long Bright Ri...",
        author: "Jonh Abraham",
        description: "lorem ipsum dolor sit amet con et just e parturient mont et ullamcorper Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dolorum minus recusandae quia exercitationem. Mollitia ipsam a debitis tempora molestias minus, reprehenderit quod tempore. Maxime soluta non deserunt necessitatibus a.",
        image: "../../assets/images/long.png",
      },
      {
        id: 2,
        title: "Long Bright Ri...",
        author: "Jonh Abraham",
        description: "lorem ipsum dolor sit amet con et just e parturient mont et ullamcorper ",
        image: "../../assets/images/where.png",
      },
      {
        id: 3,
        title: "Long Bright Ri...",
        author: "Jonh Abraham",
        description: "lorem ipsum dolor sit amet con et just e parturient mont et ullamcorper ",
        image: "../../assets/images/all.png",
      },
      {
        id: 4,
        title: "Long Bright Ri...",
        author: "Jonh Abraham",
        description: "lorem ipsum dolor sit amet con et just e parturient mont et ullamcorper ",
        image: "../../assets/images/follow.png",
      },
      {
        id: 5,
        title: "Long Bright Ri...",
        author: "Jonh Abraham",
        description: "lorem ipsum dolor sit amet con et just e parturient mont et ullamcorper ",
        image: "../../assets/images/pergi.png",
      },
      {
        id: 6,
        title: "Long Bright Ri...",
        author: "Jonh Abraham",
        description: "lorem ipsum dolor sit amet con et just e parturient mont et ullamcorper ",
        image: "../../assets/images/embers.png",
      },
     
    ]
    return {books};
  }
 
}
