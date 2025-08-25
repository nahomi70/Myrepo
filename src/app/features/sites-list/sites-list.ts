import { Component, inject, OnInit, TrackByFunction } from '@angular/core';
import { Sites } from '../../core/interfaces/site.models';
import { SitesService } from '../../core/services/sites.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sites-list',
  standalone: true,
  imports: [CommonModule],     
  templateUrl: './sites-list.html',
  styleUrls: ['./sites-list.css'] 
})
export class SitesList implements OnInit {

  sitesService = inject(SitesService); 
  sites: Sites[] = []; 

  ngOnInit(): void {
    this.sitesService.getSites().subscribe({
      next: (data) => {
        console.log("Sites :", data); 
        this.sites = data;
      },
      
    });
  }

    trackByIndex(index: number): number {
  return index;
}

  

  
}

