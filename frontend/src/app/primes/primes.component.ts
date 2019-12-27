import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Primes } from '../primes';

@Component({
  selector: 'app-primes',
  templateUrl: './primes.component.html',
  styleUrls: ['./primes.component.css']
})
export class PrimesComponent implements OnInit {
  primes: Primes[];

  numFind: number;
  numCalls: number;
  submitted = false;

  constructor() { }

  ngOnInit() {
    this.onReset();
  }

  onSubmit(): void {
    this.submitted = true;
    console.log('Calling...');
  }

  onReset(): void {
    this.numCalls = 1;
    this.numFind = 1;
    this.submitted = false;
  }
}