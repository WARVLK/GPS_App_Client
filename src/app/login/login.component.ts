import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = ""

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['code']== null) return;
      console.log(params); 
      this.httpClient.put("/api/authentication/code", params['code'], {headers:{Accept:"text/plain"}}).subscribe(response=>{
        console.log(response);
        this.username = response['athlete']['username']
      });
    })
  }

}
