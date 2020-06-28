using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectTest_FEv2.Models
{
    public class StatusCodeResponseVM
    {
        //
        // Summary:
        //     HttpStatus
        public int HttpStatus { get; set; }
        //
        // Summary:
        //     Code
        public string Code { get; set; }
        //
        // Summary:
        //     Message
        public string Message { get; set; }
        //
        // Summary:
        //     Detail
        public string Detail { get; set; }
    }
}
