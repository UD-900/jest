import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import 'zone.js'; // This is usually the only place it should be imported directly

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
