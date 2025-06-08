import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.scss',
  imports: [ButtonComponent],
  encapsulation: ViewEncapsulation.None
})
export class NewTicketComponent {

}