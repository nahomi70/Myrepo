import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuresList } from './features/structures-list/structures-list';
import { CreateSites } from "./features/create-sites/create-sites";
import { SitesList } from "./features/sites-list/sites-list";

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet, StructuresList, CreateSites, SitesList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tesoft.GRH.Stage');
}
