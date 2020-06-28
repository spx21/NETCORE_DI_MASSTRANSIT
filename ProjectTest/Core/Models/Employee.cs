using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models
{
    public class Employee
    {
        public int UserID { get; set; }
        public string EmployeeName { get; set; }
        public DateTime? ClockIn { get; set; }
        public DateTime? ClockOut { get; set; }
        public bool Active { get; set; }
    }
}
