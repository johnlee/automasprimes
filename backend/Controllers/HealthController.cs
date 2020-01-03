using Microsoft.AspNetCore.Mvc;

namespace automasprimes.Controllers
{
    [Route("health")]
    public class HealthController : Controller
    {
        [HttpGet]
        public ActionResult Get()
        {
            return Ok("I am healthy!");
        }
    }
}
