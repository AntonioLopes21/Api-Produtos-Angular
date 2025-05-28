import { Component, OnInit } from '@angular/core';
import { ListProductServiceService } from '../../services/list-product-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-product',
  imports: [CommonModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent implements OnInit{
  items : any = [];
  title : string = '';
  price : number = 0;
  detalhesExibidos : boolean = false;
  
  constructor (private listProductService : ListProductServiceService) {}

  ngOnInit() : void {
    this.listProductService.getProducts().subscribe(products => {
      this.items = products;
      console.log(products)
    })
  }

  exibirDetalhes() {
    this.detalhesExibidos = !this.detalhesExibidos
    console.log("clicado");
  }
}
