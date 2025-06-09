import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-template',
  templateUrl: './item-template.component.html',
  styleUrl: './item-template.component.scss',
  imports: [],
  host: {
    class: 'dashboard-item'
  }
})
export class ItemTemplateComponent {

  @Input({required: true}) 
  image!: {src: string, alt: string};

  @Input({required: true})
  title!: string;


}