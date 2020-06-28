using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Contracts;
using Core.Models;
using MassTransit;
using Microsoft.AspNetCore.Mvc;
using ProjectTest_BE.Models;

namespace ProjectTest_BE.Controllers
{
    public class AuthenticationController : Controller
    {
        private readonly IAuthenticationService _authenticationService;
        private readonly IEmployeeService _employeeService;
        private readonly IRequestClient<Message> _requestClient;

        public AuthenticationController(IAuthenticationService authenticationService,
                                        IEmployeeService employeeService,
                                        IRequestClient<Message> requestClient)
        {
            _authenticationService = authenticationService;
            _employeeService = employeeService;
            _requestClient = requestClient;
        }
        public IActionResult Index()
        {
            return View();
        }

        [Route("api/login")]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            
            if (string.IsNullOrEmpty(model.Username))
            {
                return BadRequest("Usernme is required.");
            }
            if (string.IsNullOrEmpty(model.Password))
            {
                return BadRequest("Password is required.");
            }
            if (model.Username != "Admin" || model.Password != "test123")
            {
                return BadRequest("Invalid password or username");
            }
            var user = new User
            {
                Email = "test@email.com",
                FirstName = "kevin",
                LastName = "Oliveros",
            };
            var tempEmployee = await _employeeService.PostEmployee(new Employee() { EmployeeName = user.FirstName + " " + user.LastName , Active = true});
            user.Id = tempEmployee.UserID;
            var token = await _authenticationService.GenerateAccessTokenAsync(user);
            var result = new
            {
                access_token = token,
                User = user
            };

            return Ok(result);
        }
    }
}
