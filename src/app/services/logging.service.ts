import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Servisin global olarak kullanılmasını sağlar
})
export class LoggingService {

  constructor() { }

  // Log mesajı yazdırma metodu
  log(message:string):void{
    const timestamp = new Date();
    console.log(`[LOG - ${timestamp.toISOString()}]: ${message}`)
  }
}
