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

    public class TurnoController : ControllerBase
    {
        private readonly ControlcitasmedicasContext _db;

        public TurnoController(ControlcitasmedicasContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetTurnos()
        {
            try
            {
                var resultTurnos = _db.TblTurnos.ToList();
                return StatusCode(200, new { mensaje = "ok", response = resultTurnos });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpGet("{id}", Name = "GetTurno")]
        public IActionResult GetTurno(int id)
        {
            try
            {
                var resultTurno = _db.TblTurnos.Find(id);
                if (resultTurno == null)
                {
                    return NotFound($"Turno con ID {id} no encontrado");
                }
                return StatusCode(200, new { mensaje = "ok", response = resultTurno });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPost]
        public IActionResult PostTurno([FromBody] TblTurno newTurno)
        {
            try
            {
                if (newTurno == null)
                {
                    return BadRequest("Datos del turno no válidos");
                }

                _db.TblTurnos.Add(newTurno);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "turno agregado" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public IActionResult PutTurno(int id, [FromBody] TblTurno updateTurno)
        {
            try
            {
                if (updateTurno == null || id != updateTurno.IdTurno)
                {
                    return BadRequest("Datos del turno no válidos");
                }

                var existingTurno = _db.TblTurnos.Find(id);
                if (existingTurno == null)
                {
                    return NotFound($"Turno con ID {id} no encontrado");
                }

                existingTurno.NombreTurno = updateTurno.NombreTurno;
                existingTurno.IdMedico = updateTurno.IdMedico;

                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = existingTurno });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTurno(int id)
        {
            try
            {
                var turnoToDelete = _db.TblTurnos.Find(id);
                if (turnoToDelete == null)
                {
                    return NotFound($"Turno con ID {id} no encontrado");
                }

                _db.TblTurnos.Remove(turnoToDelete);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "turno eliminado" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
