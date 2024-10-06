import {Component, computed, OnInit, signal} from '@angular/core';
import {MatChip, MatChipListbox, MatChipOption} from '@angular/material/chips';
import {DecimalPipe} from '@angular/common';
import {
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {MatListItem} from '@angular/material/list';
import {ProductFilterComponent} from './product-filter/product-filter.component';

@Component({
  selector: 'app-flatten-operator',
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
    MatListItem,
    ProductFilterComponent
  ],
  templateUrl: './flatten-operator.component.html',
  styleUrl: './flatten-operator.component.scss'
})
export class FlattenOperatorComponent implements OnInit {

  ngOnInit() {
  }

}
