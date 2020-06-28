using Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Contracts
{
    public interface IAuthenticationService
    {
        Task<string> GenerateAccessTokenAsync(User user);
    }
}
