import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public chartType: string = 'bar';
  public chartDoughnutType: string = 'doughnut';
  public chartLineType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [5, 10, 22, 4], label: '' }
  ];

  public chartLabels: Array<any> = ['Wins', 'Top 5', 'Top 10', 'DNF'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 1,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    legend: {
      display: false,
    }
  };

  

  public chartLineDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];

  public chartLineLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartLineColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartLineOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  public chartLineClicked(e: any): void { }
  public chartLineHovered(e: any): void { }

  

  public chartDoughnutDatasets: Array<any> = [
    { data: [0, 13, 2, 1, 0, 0], label: 'Class Ranks' }
  ];

  public chartDoughnutLabels: Array<any> = ['Pro', 'A', 'B', 'C', 'D', 'Rookie'];

  public chartDoughnutColors: Array<any> = [
    {
      backgroundColor: ['#000000', '#3437eb', '#00d12d', '#fffb00', '#dea300', '#d90000'],
      hoverBackgroundColor: ['#9f42ca', '#9f42ca', '#9f42ca', '#9f42ca', '#9f42ca', '#9f42ca'],
      borderWidth: 1,
    }
  ];

  public chartDoughnutOptions: any = {
    responsive: true,
    legend: {
      labels: {
        boxWidth: 10,
        usePointStyle: true,
      },
    }
  };
  public chartDoughnutClicked(e: any): void { }
  public chartDoughnutHovered(e: any): void { }

}
