import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CharactersComponent } from './components/characters/characters.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
    },
    {
      path: 'main',
      component: MainComponent,
      pathMatch: 'full'
    },
    {
      path: 'characters',
      component: CharactersComponent,
      pathMatch: 'full'
    },
    {
      path: 'episodes',
      component: EpisodesComponent,
      pathMatch: 'full'
    },
    {
      path: 'seasons',
      component: SeasonsComponent,
      pathMatch: 'full'
    },
  
      {
      path: 'contact',
      component: ContactComponent,
      pathMatch: 'full'
    },
  

   {
     path: '**', //* * cualquier ruta
      component: NotFoundComponent,
     pathMatch: 'full'
   }
  
  ];
  
  