using Microsoft.AspNetCore.Mvc;
using WebApiControlCitas.models;
using System;
using System.Linq;
using Microsoft.AspNetCore.Cors;

namespace WebApiControlCitas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("ReglasCors")]
    public class ServicioController : ControllerBase
    {
        private readonly ControlcitasmedicasContext _db;

        public ServicioController(ControlcitasmedicasContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetServicios()
        {
            try
            {
                var resultServicios = _db.TblServicios.ToList();
                return StatusCode(200, new { mensaje = "ok", response = resultServicios });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpGet("{id}", Name = "GetServicio")]
        public IActionResult GetServicio(int id)
        {
            try
            {
                var resultServicio = _db.TblServicios.Find(id);
                if (resultServicio == null)
                {
                    return NotFound($"Servicio con ID {id} no encontrado");
                }
                return StatusCode(200, new { mensaje = "ok", response = resultServicio });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPost]
        public IActionResult PostServicio([FromBody] TblServicio newServicio)
        {
            try
            {
                if (newServicio == null)
                {
                    return BadRequest("Datos del servicio no válidos");
                }

                _db.TblServicios.Add(newServicio);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "servicio agregado" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public IActionResult PutServicio(int id, [FromBody] TblServicio updateServicio)
        {
            try
            {
                if (updateServicio == null || id != updateServicio.IdServicio)
                {
                    return BadRequest("Datos del servicio no válidos");
                }

                var existingServicio = _db.TblServicios.Find(id);
                if (existingServicio == null)
                {
                    return NotFound($"Servicio con ID {id} no encontrado");
                }

                existingServicio.NombreServicio = updateServicio.NombreServicio;

                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = existingServicio });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteServicio(int id)
        {
            try
            {
                var servicioToDelete = _db.TblServicios.Find(id);
                if (servicioToDelete == null)
                {
                    return NotFound($"Servicio con ID {id} no encontrado");
                }

                _db.TblServicios.Remove(servicioToDelete);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "servicio eliminado" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
