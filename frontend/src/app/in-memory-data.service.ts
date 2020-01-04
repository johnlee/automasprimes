import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Primes } from './primes/primes';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const primes: Primes[] = [
        { id: 1, containerId: '6014a9767ccb', givenNumber: 100, numberOfPrimes: 3, elapsedTime: '00:00:01.23', },
        { id: 2, containerId: '2222a9767ccb', givenNumber: 100, numberOfPrimes: 3, elapsedTime: '00:00:01.33', },
        { id: 3, containerId: '3333a9767ccb', givenNumber: 100, numberOfPrimes: 3, elapsedTime: '00:00:01.44', },
        { id: 4, containerId: '4444a9767ccb', givenNumber: 100, numberOfPrimes: 3, elapsedTime: '00:00:01.55', },
        { id: 5, containerId: '5555a9767ccb', givenNumber: 100, numberOfPrimes: 3, elapsedTime: '00:00:01.66', }
    ];
    return {primes};
  }
}