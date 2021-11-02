import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class GraficaService {
  constructor(private http: HttpClient) {}

  getUsuariosRedeSocilaes() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonaData() {
    return this.getUsuariosRedeSocilaes().pipe(
      map((data) => {
        const labels = Object.keys(data);
        const values = Object.values(data);

        return { labels, values }
      })
    );
  }
}
