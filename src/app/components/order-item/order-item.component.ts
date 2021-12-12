import { OrdersService } from './../../services/api/orders.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() order: any = "";
  constructor(private ordersService: OrdersService, private router: Router) { }

  ngOnInit(): void {
  }

  async orderDetail(){
    this.router.navigate(["/order-detail",this.order._id])
  }

}
