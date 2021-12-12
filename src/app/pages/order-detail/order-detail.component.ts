import { OrdersService } from './../../services/api/orders.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order: any = {} 
  constructor(private route: ActivatedRoute, private ordersService: OrdersService) { }

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const orderIdFromRoute = String(routeParams.get('id'));
    if(this.ordersService.orders.length == 0) await this.ordersService.getOrders();
    this.order = this.ordersService.orders.find((order:any) => order._id == orderIdFromRoute) as any
  }

  async reload(){
    await this.ordersService.getOrders();
    this.order = this.ordersService.orders.find((order:any) => order._id == this.order._id) as any
  }

  async accept(){
    await this.ordersService.updateOrder({
      id: this.order._id,
      order:{
        status: "accepted"
      }
    })
    await this.reload()
  }

  async take(){
    await this.ordersService.updateOrder({
      id: this.order._id,
      order:{
        status: "inorigin"
      }
    })
    await this.reload()
  }
  
  async give(){
    await this.ordersService.updateOrder({
      id: this.order._id,
      order:{
        status: "indestination"
      }
    })
    await this.reload()
  }

  async complete(){
    await this.ordersService.updateOrder({
      id: this.order._id,
      order:{
        status: "completed"
      }
    })
    await this.reload()
  }

}
