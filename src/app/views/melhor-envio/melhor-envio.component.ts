import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-melhor-envio',
  templateUrl: './melhor-envio.component.html',
  styleUrls: ['./melhor-envio.component.css']
})
export class MelhorEnvioComponent implements OnInit {

  private code: string = '';
  private baseUrl = 'https://sandbox.melhorenvio.com.br';
  private urlToken = `${this.baseUrl}/oauth/token`;

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
        grant_type: "authorization_code",
        client_id: 3393,
        client_secret: "SDCS9VxIwsALZis2AnFuOGGmnfoKxthJmC7zMdMb",
        redirect_uri: "https://cutelaser.art.br/me",
        refresh_token: "",
        code: this.code
      };

      this.http.post(this.urlToken, body, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': 'teste victorassis545@gmail.com'
        }
      }).subscribe({
        next: res => {
          console.log(res);
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }

}
