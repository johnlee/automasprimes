import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Primes } from './primes';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const primes: Primes[] = [
        { containerId: '6014a9767ccb', elapsedTime: '00:00:01.54', numberOfPrimes: 3, primeNumbers: [1,2,3] },
        { containerId: '2222a9767ccb', elapsedTime: '00:00:02.54', numberOfPrimes: 3, primeNumbers: [1,2,3] },
        { containerId: '3333a9767ccb', elapsedTime: '00:00:03.54', numberOfPrimes: 3, primeNumbers: [1,2,3] },
        { containerId: '4444a9767ccb', elapsedTime: '00:00:04.54', numberOfPrimes: 3, primeNumbers: [1,2,3] },
        { containerId: '5555a9767ccb', elapsedTime: '00:00:05.54', numberOfPrimes: 3, primeNumbers: [1,2,3] }
    ];
    return {primes};
  }
}