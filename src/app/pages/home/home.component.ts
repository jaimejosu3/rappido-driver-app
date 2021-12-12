import { OrdersService } from './../../services/api/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  orders = []
  pendingOrders = []
  currentOrders = []
  completedOrders = []
  currentTab = "pending"
  constructor(public ordersSercice: OrdersService) { }

  async ngOnInit() {
    this.changeTab("pending")
  }

  async changeTab(tab: string){
    this.currentTab = tab;
    if(tab == "pending"){
      let result = await this.ordersSercice.getOrdersPending(); 
      this.orders = result.data;
    }
    if(tab == "current"){
      let result = await this.ordersSercice.getOrdersCurrent(); 
      this.orders = result.data;
    }
    if(tab == "completed"){
      let result = await this.ordersSercice.getOrdersCompleted(); 
      this.orders = result.data;
    }

  }



}
