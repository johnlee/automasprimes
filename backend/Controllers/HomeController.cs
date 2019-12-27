using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace ecsautobalancer.Controllers
{
    [Route("primes")]
    public class HomeController : Controller
    {
        [HttpGet]
        public ActionResult Get()
        {
            return Get(100000);
        }

        [HttpGet("{number}")]
        public ActionResult Get(int number)
        {
            Stopwatch stopwatch = new Stopwatch();
            stopwatch.Start();

            var primes = FindPrimeNumbersInN(number);

            stopwatch.Stop();

            string containerid = Environment.MachineName;

            TimeSpan ts = stopwatch.Elapsed;
            string elapsedtime = String.Format("{0:00}:{1:00}:{2:00}.{3:00}",
            ts.Hours, ts.Minutes, ts.Seconds,
            ts.Milliseconds / 10);

            var result = new
            {
                ContainerId = containerid,
                ElapsedTime = elapsedtime,
                NumberOfPrimes = primes.Count,
                PrimeNumbers = primes
            };
            return Ok(result);
        }

        private List<int> FindPrimeNumbersInN(int n)
        {
            List<int> results = new List<int>();

            if (n > 1999999) // lets not get carried away...
            {
                return results;
            }
            
            for (int p = 2; p <= n; p++)
            {
                if (IsPrime(p))
                {
                    results.Add(p);
                }
            }
            return results;
        }

        private bool IsPrime(int n)
        {
            if (n <= 1)
            {
                return false;
            }
            else
            {
                for (int i = 2; i < n; i++ )
                {
                    if (n % i == 0)
                    {
                        return false;
                    }
                }
                return true;
            }
        }
    }
}
