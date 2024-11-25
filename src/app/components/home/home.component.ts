import { Component } from '@angular/core';
import{ LoggingService } from '../../services/logging.service'; // Logging servisini import et

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [LoggingService]
})
export class HomeComponent {
  constructor(private loggingService: LoggingService) { } // Logging servisini inject et

  // Loglama işlemi
  logButtonClick():void{
this.loggingService.log('Home Component buton tıklandı'); // Loglama servisini kullanarak log mesajı yazdır
}
}
