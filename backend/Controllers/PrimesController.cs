using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace automasprimes.Controllers
{
    [Route("primes")]
    public class PrimesController : Controller
    {
        const int MAXNUMBER = 1999999;

        [HttpGet]
        public ActionResult Get()
        {
            return Get(1000);
        }

        [HttpGet("{number}")]
        public ActionResult Get(int number)
        {
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();

            var n = number;
            if (number > MAXNUMBER || number == 0) // lets not get carried away...
            {
                n = MAXNUMBER;
            }

            var primes = ReallyInefficientWayToSeeIfNIsPrime(n);

            stopwatch.Stop();

            string containerid = Environment.MachineName;

            TimeSpan ts = stopwatch.Elapsed;
            string elapsedtime = String.Format("{0:00}:{1:00}:{2:00}.{3:00}",
            ts.Hours, ts.Minutes, ts.Seconds,
            ts.Milliseconds / 10);

            var result = new
            {
                ContainerId = containerid,
                GivenNumber = n,
                NumberOfPrimes = primes.Count,
                ElapsedTime = elapsedtime
            };
            return Ok(result);
        }

        private List<int> ReallyInefficientWayToSeeIfNIsPrime(int n)
        {
            List<int> results = new List<int>();
            for (int p = 2; p <= n; p++)
            {
                if (HasNoDivisibleNumbers(p))
                {
                    results.Add(p);
                }
            }
            return results;
        }

        private bool HasNoDivisibleNumbers(int n)
        {
            if (n <= 1)
            {
                return false;
            }
            else
            {
                int numberOfDivisibles = 0;
                for (int i = 2; i < n; i++ )
                {
                    if (n % i == 0)
                    {
                        numberOfDivisibles++;
                    }
                }
                return numberOfDivisibles == 0;
            }
        }
    }
}
