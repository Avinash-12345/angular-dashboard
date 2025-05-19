import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { TrafficsComponent } from "./dashboard/traffics/traffics.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TrafficsComponent, TicketsComponent, ServerStatusComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-dashboard';
}
