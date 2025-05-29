import { Component, OnInit } from '@angular/core';
import { ListProductServiceService } from '../../services/list-product-service.service';
import { CommonModule } from '@angular/common';

interface Produto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Component({
  selector: 'app-list-product',
  imports: [CommonModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent implements OnInit {
  items: Produto[] = [];
  detalhesExibidos: boolean = false;
  idSelecionado: number | null = null;

  constructor(private listProductService: ListProductServiceService) { }

  ngOnInit(): void {
    this.listProductService.getProducts().subscribe(data => {
      this.items = data;
      console.log(data)
    })
  }



  exibirDetalhes(id: number) {
    this.idSelecionado = this.idSelecionado === id ? null : id;
    this.detalhesExibidos = !this.detalhesExibidos
  }


}

