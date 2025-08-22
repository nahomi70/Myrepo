import { Component, inject, OnInit } from '@angular/core';
import { StructuresService } from '../../core/services/structures.service';
import { Structure } from '../../core/interfaces/structure.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-structures-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './structures-list.html',
  styleUrl: './structures-list.css'
})
export class StructuresList implements OnInit {

private structureService = inject(StructuresService);// va recuperer les donnés

structures : Structure [] = [];                       //tablau qui va contenir les donné 

  ngOnInit(): void {
   
    this.structureService.getStructures().subscribe({
      next:(data) => {
        console.log("structures: ",data)
       this.structures= data;            // stok lesdonné dans structure
      }
    });
  }

  trackByIndex(index: number): number {
  return index;
}

}


