import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  canGoBack = false;
  showMenu = false;
  constructor(public router: Router) { 
    router.events.subscribe(()=>{
      this.canGoBack = this.router.url != "/home";
      this.showMenu = this.router.url != "/signin" && this.router.url != "/signup"
    })
  }
}
