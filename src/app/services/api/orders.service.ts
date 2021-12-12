import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orders = [];
  constructor(private http: HttpClient) {
    console.log(environment)
  }
  
  async getOrders(){
    let result: any = await this.http.get(environment.apiBase + "/orders",{
      headers: {
        authorization: "Bearer " + localStorage.getItem("token")
      }
    }).toPromise()
    this.orders = result.data;
    return result;
  }

  async getOrdersPending(){
    let result: any = await this.http.get(environment.apiBase + "/orders/pending",{
      headers: {
        authorization: "Bearer " + localStorage.getItem("token")
      }
    }).toPromise()
    this.orders = result.data;
    return result;
  }

  async getOrdersCurrent(){
    let result: any = await this.http.get(environment.apiBase + "/orders/inride",{
      headers: {
        authorization: "Bearer " + localStorage.getItem("token")
      }
    }).toPromise()
    this.orders = result.data;
    return result;
  }

  async getOrdersCompleted(){
    let result: any = await this.http.get(environment.apiBase + "/orders/completed",{
      headers: {
        authorization: "Bearer " + localStorage.getItem("token")
      }
    }).toPromise()
    this.orders = result.data;
    return result;
  }
  async createOrder(order: any){
    let result = await this.http.post(environment.apiBase + "/order",order,{
      headers: {
        authorization: "Bearer " + localStorage.getItem("token")
      }
    }).toPromise()
    return result;
  }

  async updateOrder(order: any){
    let result = await this.http.patch(environment.apiBase + "/order",order,{
      headers: {
        authorization: "Bearer " + localStorage.getItem("token")
      }
    }).toPromise()
    return result;
  }

}
