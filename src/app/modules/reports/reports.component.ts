import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll/animate-on-scroll.directive';

@Component({
  selector: 'app-reports',
  imports: [
    MatIconModule,
    BaseChartDirective,
    CommonModule,
    AnimateOnScrollDirective,
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent {
  weeklyChartData: ChartData<'bar'> = {
    labels: ['17', '18', '19', '20', '21', '22', '23', '24', '25'],
    datasets: [
      {
        data: [6, 6, 4, 3, 5, 4, 4, 5, 6],
        backgroundColor: '#6A287E',
        stack: 'a',
        maxBarThickness: 25,
      },
      {
        data: [3, 4, 3, 3, 4, 5, 3, 4, 4],
        backgroundColor: '#009966',
        stack: 'a',
        maxBarThickness: 25,
      },
      {
        data: [2, 2, 3, 2, 3, 2, 3, 2, 3],
        backgroundColor: '#ABABAB',
        stack: 'a',
        maxBarThickness: 25,
      },
    ],
  };
  weeklyChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: {
          color: '#b29f71',
        },
      },
      y: {
        stacked: true,
        display: false,
        grid: { display: false },
      },
    },
    layout: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
    },
    elements: {
      bar: {
        borderRadius: 6,
      },
    },
    animation: {
      duration: 3000,
      delay: 2000,
      easing: 'easeInOutQuart',
    },
  };
}
