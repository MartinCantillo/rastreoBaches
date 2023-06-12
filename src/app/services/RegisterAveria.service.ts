import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baches } from '../Models/Baches';
import { averia } from '../Models/Averia';

@Injectable({
  providedIn: 'root',
})
export class RegisterAveriaService {
  private generatedKeys: number[] = [];
  private parametro: number = 0;
  codigoCiudadano: number;
  codigoBache: number;
  private SaveAveria: string = 'http://localhost:8023/user/averia';

  constructor(private httpClient: HttpClient) {}
  generatePrimaryKey(): number {
    let key: number;
    do {
      key = Math.floor(Math.random() * 1000000);
    } while (this.generatedKeys.includes(key)); // Verifica si el número ya ha sido generado antes

    this.generatedKeys.push(key); // Almacena el nuevo número generado
    this.parametro = key;
    return key;
  }
  getParametro(): number {
    return this.parametro;
  }

  public SaveAverias(averias: averia): Observable<Object> {
    return this.httpClient.post(`${this.SaveAveria}`, averias);
  }
}
