import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-products-alerts',
  templateUrl: './products-alerts.component.html',
  styleUrls: ['./products-alerts.component.css']
})
export class ProductsAlertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() product : Product | undefined;
  @Output() notify = new EventEmitter();

}
