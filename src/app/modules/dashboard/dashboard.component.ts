import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll/animate-on-scroll.directive';
import { CountUpOnScrollDirective } from '../../directives/count-up/count-up-on-scroll.directive';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatIconModule,
    BaseChartDirective,
    CommonModule,
    AnimateOnScrollDirective,
    CountUpOnScrollDirective,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public lineChartData: ChartData<'line'> = {
    labels: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
    datasets: [
      {
        data: [173, 166, 185, 155, 187, 158],
        label: 'Payments Done',
        borderColor: '#6A287E',
        backgroundColor: '#6A287E',
        pointRadius: 3,
        fill: false,
        tension: 0.4,
      },

      {
        data: [148, 131, 145, 134, 146, 144],
        label: 'Payments Pending',
        borderColor: '#009966',
        backgroundColor: '#009966',
        pointRadius: 3,
        fill: false,
        tension: 0.4, // curvatura
      },
    ],
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    aspectRatio: 1.7,

    animation: {
      duration: 3000,
      delay: 1000,
      easing: 'easeInOutQuart',
    },

    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: '#b29f71',
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  public pieChartData: ChartData<'pie'> = {
    labels: ['Payments Done', 'Payments Pending'],
    datasets: [
      {
        data: [63, 25],
        backgroundColor: ['#6A287E', '#009966'],
        hoverBackgroundColor: ['#009966', '#6A287E'],
        borderWidth: 0,
      },
    ],
  };

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 3000,
      delay: 1000,
      easing: 'easeInOutQuart',
    },
  };

  constructor() {}
}
