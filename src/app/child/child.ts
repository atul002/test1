import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss'
})
export class Child implements OnInit {
  ngOnInit(): void {
    console.log('child component loaded');
  }
}
