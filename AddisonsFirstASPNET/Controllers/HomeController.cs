using AddisonsFirstASPNET.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AddisonsFirstASPNET.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("gradeCal")]
        public IActionResult gradeCal()
        {
            return View();
        }

        [HttpPost("gradeCal")]
        public IActionResult gradeCal(gradeCalModel Model)
        {
            return View();
        }

    }
}
