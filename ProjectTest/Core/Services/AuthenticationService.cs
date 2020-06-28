using Core.Config;
using Core.Contracts;
using Core.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Core.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly JwtConfig _jwtConfig;

        public AuthenticationService(JwtConfig jwtConfig)
        {
            _jwtConfig = jwtConfig;
        }

        public async Task<string> GenerateAccessTokenAsync(User user)
        {
            var claims = new List<Claim>
            {
                new Claim("userid", user.Id.ToString()),
                new Claim("first_name", user.FirstName ?? string.Empty),
                new Claim("last_name", user.LastName ?? string.Empty),
                new Claim("email", user.Email ?? string.Empty)
            };

            var symmetricKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtConfig.SigningKey));
            var token = new JwtSecurityToken(
                issuer: _jwtConfig.Issuer,
                audience: _jwtConfig.Audience,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(_jwtConfig.ValidForMinutes),
                signingCredentials: new SigningCredentials(symmetricKey, SecurityAlgorithms.HmacSha256)
            );

            var tokenHandler = new JwtSecurityTokenHandler();
            return await Task.Run(() => tokenHandler.WriteToken(token));
        }
    }
}
