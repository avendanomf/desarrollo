using Microsoft.AspNetCore.Mvc;
using WebApiControlCitas.models;
using System;
using System.Linq;

namespace WebApiControlCitas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CitaMedicaController : ControllerBase
    {
        private readonly ControlcitasmedicasContext _db;

        public CitaMedicaController(ControlcitasmedicasContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetCitasMedicas()
        {
            try
            {
                var resultCitasMedicas = _db.TblCitaMedicas.ToList();
                return StatusCode(200, new { mensaje = "ok", response = resultCitasMedicas });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpGet("{id}", Name = "GetCitaMedica")]
        public IActionResult GetCitaMedica(int id)
        {
            try
            {
                var resultCitaMedica = _db.TblCitaMedicas.Find(id);
                if (resultCitaMedica == null)
                {
                    return NotFound($"Cita médica con ID {id} no encontrada");
                }
                return StatusCode(200, new { mensaje = "ok", response = resultCitaMedica });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPost]
        public IActionResult PostCitaMedica([FromBody] TblCitaMedica? newCitaMedica)
        {
            try
            {
                if (newCitaMedica == null)
                {
                    return BadRequest("Datos de la cita médica no válidos");
                }

                _db.TblCitaMedicas.Add(newCitaMedica);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "cita médica agregada" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public IActionResult PutCitaMedica(int id, [FromBody] TblCitaMedica updateCitaMedica)
        {
            try
            {
                if (updateCitaMedica == null || id != updateCitaMedica.IdCita)
                {
                    return BadRequest("Datos de la cita médica no válidos");
                }

                var existingCitaMedica = _db.TblCitaMedicas.Find(id);
                if (existingCitaMedica == null)
                {
                    return NotFound($"Cita médica con ID {id} no encontrada");
                }

                existingCitaMedica.IdPaciente = updateCitaMedica.IdPaciente;
                existingCitaMedica.IdMedico = updateCitaMedica.IdMedico;
                existingCitaMedica.IdTurno = updateCitaMedica.IdTurno;
                existingCitaMedica.IdServicio = updateCitaMedica.IdServicio;
                existingCitaMedica.FechaCita = updateCitaMedica.FechaCita;
                existingCitaMedica.HoraCita = updateCitaMedica.HoraCita;

                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = existingCitaMedica });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCitaMedica(int id)
        {
            try
            {
                var citaMedicaToDelete = _db.TblCitaMedicas.Find(id);
                if (citaMedicaToDelete == null)
                {
                    return NotFound($"Cita médica con ID {id} no encontrada");
                }

                _db.TblCitaMedicas.Remove(citaMedicaToDelete);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "cita médica eliminada" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
