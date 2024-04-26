using Microsoft.AspNetCore.Mvc;
using WebApiControlCitas.models;
using System;
using System.Linq;

namespace WebApiControlCitas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class pacienteController : ControllerBase
    {
        private readonly ControlcitasmedicasContext _db;

        public pacienteController(ControlcitasmedicasContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetTblPacientes()
        {
            try
            {
                var resultTblPacientes = _db.TblPacientes.ToList();
                return StatusCode(200, new { mensaje = "ok", response = resultTblPacientes });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpGet("{id}", Name = "Getpaciente")]
        public IActionResult Getpaciente(int id)
        {
            try
            {
                var resultpaciente = _db.TblPacientes.Find(id);
                if (resultpaciente == null)
                {
                    return NotFound($"paciente con ID {id} no encontrado");
                }
                return StatusCode(200, new { mensaje = "ok", response = resultpaciente });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPost]
        public IActionResult Postpaciente([FromBody] TblPaciente newpaciente)
        {
            try
            {
                if (newpaciente == null)
                {
                    return BadRequest("Datos de la paciente no válidos");
                }

                _db.TblPacientes.Add(newpaciente);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "paciente agregada" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public IActionResult Putpaciente(int id, [FromBody] TblPaciente updatepaciente)
        {
            try
            {
                if (updatepaciente == null || id != updatepaciente.IdPaciente)
                {
                    return BadRequest("Datos de la paciente no válidos");
                }

                var existingpaciente = _db.TblPacientes.Find(id);
                if (existingpaciente == null)
                {
                    return NotFound($"paciente con ID {id} no encontrada");
                }

                existingpaciente.IdPaciente = updatepaciente.IdPaciente;
                existingpaciente.NombreCompleto = updatepaciente.NombreCompleto;
                existingpaciente.TipoIdentificacion = updatepaciente.TipoIdentificacion;
                existingpaciente.NumeroIdentificacion = updatepaciente.NumeroIdentificacion;
                existingpaciente.Ocupacion = updatepaciente.Ocupacion;
                existingpaciente.Celular = updatepaciente.Celular;
                existingpaciente.Direccion = updatepaciente.Direccion;

                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = existingpaciente });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Deletepaciente(int id)
        {
            try
            {
                var pacienteToDelete = _db.TblPacientes.Find(id);
                if (pacienteToDelete == null)
                {
                    return NotFound($"paciente con ID {id} no encontrado");
                }

                _db.TblPacientes.Remove(pacienteToDelete);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "paciente eliminado" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
