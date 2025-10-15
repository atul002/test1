import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-detail',
  imports: [],
  templateUrl: './child-detail.html',
  styleUrl: './child-detail.scss'
})
export class ChildDetail implements OnInit {
ngOnInit(): void {
    console.log('child detail component loaded');
  }
}
