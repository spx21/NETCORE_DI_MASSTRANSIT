using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Core.Models;
using MassTransit;
using Microsoft.Extensions.Configuration;
using ProjectTest_FEv2.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace ProjectTest_FEv2.Controllers
{
    public class EmployeeController : Controller
    {
        private IConfiguration _configuration;
        private readonly IRequestClient<Message> _requestClient;

        public EmployeeController(IConfiguration configuration, IRequestClient<Message> requestClient)
        {
            _configuration = configuration;
            ProjectTestWrapper.SetBaseUrl(_configuration["BackEndBaseUrl"]);
            //ProjectTestWrapper.SetToken(HttpContext.Session.GetString("Token"));
            _requestClient = requestClient;
        }

        // GET: Departments
        public async Task<IActionResult> Index()
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString("Token")))
            {
                return RedirectToAction("Login", "Security");
            }
            try
            {
                ProjectTestWrapper.SetToken(HttpContext.Session.GetString("Token"));
                var obj = ProjectTestWrapper.Get<IList<EmployeeViewModel>>("/api/Employees");
                return View(obj);
            }
            catch(UnauthorizedAccessException ex)
            {
                return Unauthorized();
            }
            catch(Exception ex)
            {

                var schoolContext = new List<EmployeeViewModel>();
                return View(schoolContext);
            }

        }

        // GET: Departments/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            try
            {

                ProjectTestWrapper.SetToken(HttpContext.Session.GetString("Token"));
                var obj = ProjectTestWrapper.Get<EmployeeViewModel>("/api/Employees/"+id);
                return View(obj);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized();
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        // GET: Departments/Create
        public IActionResult Create()
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString("Token")))
            {
                return RedirectToAction("Login", "Security");
            }
            //ViewData["InstructorID"] = new SelectList(_context.Instructors, "ID", "FullName");
            //return View();
            return View();
        }

        // POST: Departments/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("UserId,EmployeeName,ClockIn,ClockOut,Active")] EmployeeViewModel employee)
        {
            try
            {

                ProjectTestWrapper.SetToken(HttpContext.Session.GetString("Token"));
                var obj = ProjectTestWrapper.Post<EmployeeViewModel>("/api/Employees", employee);
                return RedirectToAction("Index", "Employee");
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized();
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", ex.Message);
                return View(employee);
            }

        }

        // GET: Departments/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString("Token")))
            {
                return RedirectToAction("Login", "Security");
            }
            if (id == null)
            {
                return NotFound();
            }

            try
            {
                ProjectTestWrapper.SetToken(HttpContext.Session.GetString("Token"));
                var obj = ProjectTestWrapper.Get<EmployeeViewModel>("/api/Employees/" + id);
                return View(obj);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized();
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        // POST: Departments/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int? id, [Bind("UserId,EmployeeName,ClockIn,ClockOut,Active")] EmployeeViewModel employee)
        {
            try
            {

                ProjectTestWrapper.SetToken(HttpContext.Session.GetString("Token"));
                var obj = ProjectTestWrapper.Put<EmployeeViewModel>("/api/Employees/"+id, employee);
                return RedirectToAction("Index", "Employee");
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized();
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", ex.Message);
                return View(employee);
            }
        }

        // GET: Departments/Delete/5
        public async Task<IActionResult> Delete(int? id, bool? concurrencyError)
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString("Token")))
            {
                return RedirectToAction("Login", "Security");
            }
            try
            {

                ProjectTestWrapper.SetToken(HttpContext.Session.GetString("Token"));
                var obj = ProjectTestWrapper.Get<EmployeeViewModel>("/api/Employees/" + id);
                return View(obj);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized();
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }
        // POST: Departments/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Delete(EmployeeViewModel employee)
        {
            try
            {
                ProjectTestWrapper.SetToken(HttpContext.Session.GetString("Token"));
                var obj = ProjectTestWrapper.Delete<dynamic>("/api/Employees/" + employee.UserID);
                return RedirectToAction("Index", "Employee");
            }
               catch(UnauthorizedAccessException ex)
            {
                return Unauthorized();
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("", ex.Message);
                return View(employee);
            }
        }
        public IActionResult ClockIn(int id)
        {
            try
            {
                var request = _requestClient.Create(new { UserID = id, IsTimeIn = true});

                var response =request.GetResponse<Message>();
                response.Wait();
                return RedirectToAction("Index", "Employee");
            }
            catch (RequestTimeoutException exception)
            {
                return StatusCode((int)HttpStatusCode.RequestTimeout);
            }
        }
        public IActionResult ClockOut(int id)
        {
            try
            {
                var request = _requestClient.Create(new { UserID = id , IsTimeOut = true});
                var response = request.GetResponse<Message>();
                response.Wait();
                return RedirectToAction("Index", "Employee");
            }
            catch (RequestTimeoutException exception)
            {
                return StatusCode((int)HttpStatusCode.RequestTimeout);
            }
        }
    }
}
