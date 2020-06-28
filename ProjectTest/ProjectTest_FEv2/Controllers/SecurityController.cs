using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ProjectTest_FEv2.Models;

namespace ProjectTest_FEv2.Controllers
{
    public class SecurityController : Controller
    {
        private IConfiguration _configuration;
        public SecurityController(IConfiguration Configuration)
        {
            _configuration = Configuration;
            ProjectTestWrapper.SetBaseUrl(_configuration["BackEndBaseUrl"]);
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Login(string returnUrl = "")
        {
            if (!string.IsNullOrEmpty(HttpContext.Session.GetString("Token")))
            {
                return RedirectToAction("Index", "Home");
            }
            var model = new LoginViewModel { ReturnUrl = returnUrl };
            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {

                    string token = "";
                    
                    var obj = ProjectTestWrapper.Post<dynamic>("/api/login", model, isToken: true);
                    token = obj.access_token;
                    HttpContext.Session.SetString("Token", token);
                    return RedirectToAction("Index", "Employee");
                }
                ModelState.AddModelError("", "Invalid login attempt");
                return View(model);
            }
            catch(Exception ex)
            {
                ModelState.AddModelError("", "Invalid login attempt");
                return View(model);
            }
        }


        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Login", "Security");
        }
    }
}
