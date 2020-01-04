using Microsoft.AspNetCore.Mvc;

namespace automasprimes.Controllers
{
    [Route("version")]
    public class VersionController : Controller
    {
        [HttpGet]
        public ActionResult Get()
        {
            return Ok("1.0.0");
        }
    }
}
