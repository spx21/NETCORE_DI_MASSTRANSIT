using Core.Contracts;
using Core.Data;
using Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly ProjectContext _context;

        public EmployeeService(ProjectContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Employee>> GetEmployeesAsync()
        {
            return await _context.Employees.ToListAsync();
        }

        public async Task<Employee> GetEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);

            return employee;
        }

        public async Task PutEmployee(int id, Employee employee)
        {
            _context.Entry(employee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    throw new Exception("Employee not found");
                }
                else
                {
                    throw;
                }
            }
        }

        public async Task<Employee> PostEmployee(Employee employee)
        {
            employee.UserID = GetLatestId();
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();

            return employee;
        }
        public async Task<Employee> DeleteEmployee(int id)
        {
            var employee = await _context.Employees.FindAsync(id);
            if (employee == null)
            {
                throw new Exception("Employee not found");
            }

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();

            return employee;
        }

        private bool EmployeeExists(int id)
        {
            return _context.Employees.Any(e => e.UserID == id);
        }

        private int GetLatestId()
        {
            var hasData = _context.Employees.Count() > 0;
            return !hasData ? 1 : (_context?.Employees?.Max(x => x.UserID) ?? 0) + 1;
        }

        public async Task UpdateTimeInAsync(int userID)
        {
            var employee = _context.Employees.Where(x => x.UserID == userID).FirstOrDefault();
            employee.ClockIn = DateTime.Now;
            _context.Entry(employee).State = EntityState.Modified;
            await _context.SaveChangesAsync();

        }
        public async Task UpdateTimeOutAsync(int userID)
        {
            var employee = _context.Employees.Where(x => x.UserID == userID).FirstOrDefault();
            employee.ClockOut = DateTime.Now;
            _context.Entry(employee).State = EntityState.Modified;

            await _context.SaveChangesAsync();
        }
    }
}
