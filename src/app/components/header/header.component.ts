import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { PagesService } from 'src/app/services/router/pages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hasHistory = false
  faBackButton = faArrowLeft
  constructor(public pagesService: PagesService){

  }
  ngOnInit(): void {

  }

  goBack(){
    this.pagesService.router.navigate([".."])
  }

}
