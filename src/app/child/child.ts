import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-child',
  imports: [RouterOutlet],
  templateUrl: './child.html',
  styleUrl: './child.scss'
})
export class Child implements OnInit {
  ngOnInit(): void {
      console.log('child detail component loaded');
    }
}
