using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Mvc;
using WebApiControlCitas.models;
using System.Linq;
using WebApiControlCitas.Entities;

namespace WebApiControlCitas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ControlcitasmedicasContext _db;
        private IConfiguration _config;

        public AuthController(ControlcitasmedicasContext db, IConfiguration config)
        {
            _db = db;
            _config = config;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginEF credentials)
        {
            try
            {
                // Buscar el usuario en la base de datos
                var user = _db.Usuarios.FirstOrDefault(u => u.Correo == credentials.Correo && u.Contrasena == credentials.Contrasena);

                if (user == null)
                {
                    return Unauthorized(new { mensaje = "Credenciales inválidas" });
                }

                // Generar el token JWT
                var token = GenerateJwtToken(user);

                // Guardar la sesión en la base de datos
                var session = new Sesione
                {
                    IdUsuario = user.IdUsuario,
                    TokenSesion = token,
                    FechaInicio = DateTime.Now,
                    FechaExpiracion = DateTime.Now.AddHours(1) 
                };
                _db.Sesiones.Add(session);
                _db.SaveChanges();

                return Ok(new { mensaje = "Autenticación exitosa", token = token });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { mensaje = "Error interno del servidor", error = ex.Message });
            }
        }

        private string GenerateJwtToken(Usuario user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes((_config.GetSection("JWT:Key").Value) ?? "");

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, user.IdUsuario.ToString()),
                    new Claim(ClaimTypes.Email, user.Correo)
                }),
                Expires = DateTime.UtcNow.AddHours(1), // Por ejemplo, expira en 1 hora
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
      
    }
}
