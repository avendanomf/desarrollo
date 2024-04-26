using Microsoft.AspNetCore.Mvc;
using WebApiControlCitas.models;
using System;
using System.Linq;

namespace WebApiControlCitas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class sesionController : ControllerBase
    {
        private readonly ControlcitasmedicasContext _db;

        public sesionController(ControlcitasmedicasContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult Getsesiones()
        {
            try
            {
                var resultsesiones = _db.Sesiones.ToList();
                return StatusCode(200, new { mensaje = "ok", response = resultsesiones });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpGet("{id}", Name = "Getsesion")]
        public IActionResult Getsesion(int id)
        {
            try
            {
                var resultsesion = _db.Sesiones.Find(id);
                if (resultsesion == null)
                {
                    return NotFound($"Sesión con ID {id} no encontrada");
                }
                return StatusCode(200, new { mensaje = "ok", response = resultsesion });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPost]
        public IActionResult Postsesion([FromBody] Sesione newsesion)
        {
            try
            {
                if (newsesion == null)
                {
                    return BadRequest("Datos de la sesión no válidos");
                }

                _db.Sesiones.Add(newsesion);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "sesión agregada" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public IActionResult Putsesion(int id, [FromBody] Sesione updatesesion)
        {
            try
            {
                if (updatesesion == null || id != updatesesion.IdSesion)
                {
                    return BadRequest("Datos de la sesión no válidos");
                }

                var existingsesion = _db.Sesiones.Find(id);
                if (existingsesion == null)
                {
                    return NotFound($"Sesión con ID {id} no encontrada");
                }

                existingsesion.IdUsuario = updatesesion.IdUsuario;
                existingsesion.TokenSesion = updatesesion.TokenSesion;
                existingsesion.FechaInicio = updatesesion.FechaInicio;
                existingsesion.FechaExpiracion = updatesesion.FechaExpiracion;

                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = existingsesion });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Deletesesion(int id)
        {
            try
            {
                var sesionToDelete = _db.Sesiones.Find(id);
                if (sesionToDelete == null)
                {
                    return NotFound($"Sesión con ID {id} no encontrada");
                }

                _db.Sesiones.Remove(sesionToDelete);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "sesión eliminada" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
