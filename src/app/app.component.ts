import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SidebarComponent, FooterComponent, RouterOutlet],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col">
      <!-- Header -->
      <app-header></app-header>
      
      <!-- Main Layout -->
      <div class="flex flex-1 overflow-hidden">
        <!-- Sidebar - Desktop only -->
        <app-sidebar></app-sidebar>
        
        <!-- Main Content -->
        <main class="flex-1 overflow-y-auto">
          <div class="container mx-auto px-4 py-6 max-w-4xl">
            <router-outlet></router-outlet>
          </div>
        </main>
      </div>
      
      <!-- Footer -->
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent { }
