using Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Contracts
{
    public interface IEmployeeService
    {
        Task<IEnumerable<Employee>> GetEmployeesAsync();
        Task<Employee> GetEmployee(int id);
        Task PutEmployee(int id, Employee employee);
        Task<Employee> PostEmployee(Employee employee);
        Task<Employee> DeleteEmployee(int id);
        Task UpdateTimeInAsync(int userID);
        Task UpdateTimeOutAsync(int userID);
    }
}
