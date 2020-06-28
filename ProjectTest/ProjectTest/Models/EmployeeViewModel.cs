using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectTest_FE.Models
{
    public class EmployeeModel
    {
        public int UserID { get; set; }
        public string EmployeeName { get; set; }
        public DateTime? ClockIn { get; set; }
        public DateTime? ClockOut { get; set; }
        public bool Active { get; set; }
    }
}
