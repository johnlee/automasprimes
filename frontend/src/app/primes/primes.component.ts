import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Primes } from './primes';
import { PrimesService } from './primes.service';

@Component({
  selector: 'app-primes',
  templateUrl: './primes.component.html',
  styleUrls: ['./primes.component.css'],
  providers: [PrimesService]
})
export class PrimesComponent implements OnInit {
  primes: Primes[];

  numFind: number;
  numCalls: number;
  submitted = false;

  constructor(private service: PrimesService) { }

  ngOnInit() {
    this.onReset();
  }

  onSubmit(): void {
    this.submitted = true;
    console.log('Calling...');
    this.service.getPrimes(this.numFind).subscribe(result => {
      console.log('Result = ' + JSON.stringify(result));
      if (result) { this.primes.push(result.); }
    });
  }

  onReset(): void {
    this.numCalls = 1;
    this.numFind = 1;
    this.submitted = false;
  }
}