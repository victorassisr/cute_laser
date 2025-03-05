import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-melhor-envio',
  templateUrl: './melhor-envio.component.html',
  styleUrls: ['./melhor-envio.component.css']
})
export class MelhorEnvioComponent implements OnInit {

  private code: string | null = '';
  private baseUrl = 'https://api-cute-laser.vercel.app';

  constructor(
    private activatedRouter: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.code = this.activatedRouter.snapshot.queryParamMap.get('code');
    this.performRequest();
  }

  performRequest() {
    if(this.code) {

      const body = {
        code: this.code
      };

      this.http.post(`${this.baseUrl}/melhor-envio/auth`, body, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }).subscribe({
        next: res => {
          console.log('RESPOSTA TKEN', res);
        },
        error: err => {
          console.log('ERRO RESPOSTA TKEN', err);
        }
      });
    }
  }
}
