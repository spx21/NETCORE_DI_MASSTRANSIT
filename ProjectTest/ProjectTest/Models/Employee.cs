using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectTest_BE.DB
{
    public class Employee
    {
        [Key]
        public int UserID { get; set; }
        public string EmployeeName { get; set; }
        public DateTime? ClockIn { get; set; }
        public DateTime? ClockOut { get; set; }
        public bool Active { get; set; }
    }
}
