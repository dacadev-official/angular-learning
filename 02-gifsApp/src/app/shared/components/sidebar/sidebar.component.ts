import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent  {

  get historial(): string[] {
    return [...this.gifsService.historial];
  }

  constructor(
    private gifsService: GifsService
  ) { }

  buscar(item: string): void {
    this.gifsService.busquedaGifs(item)
  }

}
