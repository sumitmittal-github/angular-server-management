import { Component, Output } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.scss'
})
export class ServerStatusComponent {

  currentStatus = 'online';


}