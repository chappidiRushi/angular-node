import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }
  baseUrl(): string {
    return window.location.origin;
  }
}
