import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})

export class SplashComponent implements OnInit {
  serverData: JSON 
  employeeData: JSON
  employee: JSON

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  sayHi() {
    this.httpClient.get('http://127.0.0.1:5002/').subscribe(data => {
      this.serverData = data as JSON
      console.log(this.serverData)
    })
  }

  getAllEmployees() {
    this.httpClient.get('http://127.0.0.1:5002/employees').subscribe(data => {
      this.employeeData = data as JSON
      console.log(this.employeeData)
    })
  }

  getEmployee() {
    this.httpClient.get('http://127.0.0.1:5002/employees/1').subscribe(data => {
      this.employee = data as JSON
      console.log(this.employee)
    })
  }

}
