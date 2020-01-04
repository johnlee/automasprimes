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
  url: string;
  numFind: number;
  numCalls: number;
  submitted: boolean;
  callsCompleted: number;

  progressbar = 0;

  constructor(private service: PrimesService) { }

  ngOnInit() {
    this.onReset();
  }

  onSubmit(): void {
    this.submitted = true;
    console.log('Calling...');
    for (var i = 0; i < this.numCalls; i++) {
      this.service.getPrimes(this.numFind, this.url).subscribe(result => {
        console.log('Result = ' + JSON.stringify(result));
        var p = result as Primes;
        if (p) {
          this.primes.push(p);
          this.callsCompleted++;
          this.progressbar += 10;
        }
      });
    }
  }

  onReset(): void {
    this.primes = new Array<Primes>();
    this.url = "http://johns-internet-app-lb-2107860646.us-west-2.elb.amazonaws.com";
    this.numCalls = 10;
    this.numFind = 50000;
    this.submitted = false;
    this.callsCompleted = 0;
  }
}