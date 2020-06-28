using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Config
{
    public class JwtConfig
    {
        public string SigningKey { get; set; }
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public long ValidForMinutes { get; set; }
    }
}
