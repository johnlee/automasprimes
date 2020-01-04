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

  url = "http://johns-internet-app-lb-2107860646.us-west-2.elb.amazonaws.com";
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
    this.service.getPrimes(this.numFind, this.url).subscribe(result => {
      console.log('Result = ' + JSON.stringify(result));
      var p = result as Primes;
      if (p) { 
        this.primes.push(p); 
      }
    });
  }

  onReset(): void {
    this.numCalls = 1;
    this.numFind = 1;
    this.submitted = false;
  }
}