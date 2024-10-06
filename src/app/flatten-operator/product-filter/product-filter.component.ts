import {Component, computed, input, OnInit, signal} from '@angular/core';
import {MatChip, MatChipListbox, MatChipOption} from '@angular/material/chips';
import {DecimalPipe} from '@angular/common';
import {concatMap, delay, mergeMap, Observable, of, Subject} from 'rxjs';
import {
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {MatListItem} from '@angular/material/list';

type Product = string;

interface Request {
  delay: number;
  products: Product[]
}

interface Response {
  delay: number;
  products: Product[]
}

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [
    MatChip,
    MatChipOption,
    MatChipListbox,
    DecimalPipe,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatListItem
  ],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.scss'
})
export class ProductFilterComponent implements OnInit {
  requests: Request[] = [
    {delay: 1_000, products: ['Product 1', 'Product 2', 'Product 3']},
    {delay: 3_000, products: ['Product 1', 'Product 2', 'Product 3']},
    {delay: 5_000, products: ['Product 1', 'Product 2', 'Product 3']}
  ]

  filter$ = new Subject<Request>();
  selected = signal<Request[]>([]);
  response = signal<Response[]>([])
  orderOfUserClick = computed(() => this.selected().map(item => `Request delay ${item.delay}`).join('--> '))

  strategy = input.required<'concat' | 'merge'>();

  ngOnInit() {
    const flattenOps = this.strategy() === 'concat' ?
      concatMap<Request, Observable<Request>>(request => of(request).pipe(delay(request.delay))) :
      mergeMap<Request, Observable<Request>>(request => of(request).pipe(delay(request.delay)))
    this.filter$.pipe(
      flattenOps
    ).subscribe(res => {
      this.response.update(prev => prev.concat(res));
    })
  }

  filter(item: Request) {
    this.selected.update(prev => prev.concat(item));
    this.filter$.next(item);
  }

  isSelected(request: Request) {
    return !!this.selected().find(item => item.delay === request.delay)
  }
}
