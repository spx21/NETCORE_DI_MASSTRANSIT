using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models
{
    public interface Message
    {   
        int UserID { get; }
        bool IsTimeIn { get; } 
        bool IsTimeOut { get; }
        string Value { get; }
    }
}
