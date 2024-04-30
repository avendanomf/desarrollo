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
    public class MedicoController : ControllerBase
    {
        private readonly ControlcitasmedicasContext _db;

        public MedicoController(ControlcitasmedicasContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetMedicos()
        {
            try
            {
                var resultMedicos = _db.TblMedicos.ToList();
                return StatusCode(200, new { mensaje = "ok", response = resultMedicos });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpGet("{id}", Name = "GetMedico")]
        public IActionResult GetMedico(int id)
        {
            try
            {
                var resultMedico = _db.TblMedicos.Find(id);
                if (resultMedico == null)
                {
                    return NotFound($"Médico con ID {id} no encontrado");
                }
                return StatusCode(200, new { mensaje = "ok", response = resultMedico });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPost]
        public IActionResult PostMedico([FromBody] TblMedico newMedico)
        {
            try
            {
                if (newMedico == null)
                {
                    return BadRequest("Datos del médico no válidos");
                }

                _db.TblMedicos.Add(newMedico);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "médico agregado" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public IActionResult PutMedico(int id, [FromBody] TblMedico updateMedico)
        {
            try
            {
                if (updateMedico == null || id != updateMedico.IdMedico)
                {
                    return BadRequest("Datos del médico no válidos");
                }

                var existingMedico = _db.TblMedicos.Find(id);
                if (existingMedico == null)
                {
                    return NotFound($"Médico con ID {id} no encontrado");
                }

                existingMedico.TipoIdentificacion = updateMedico.TipoIdentificacion;
                existingMedico.NumeroIdentificacion = updateMedico.NumeroIdentificacion;
                existingMedico.NombreCompleto = updateMedico.NombreCompleto;
                existingMedico.Direccion = updateMedico.Direccion;
                existingMedico.Celular = updateMedico.Celular;
                existingMedico.Cargo = updateMedico.Cargo;
                existingMedico.Especialidad = updateMedico.Especialidad;
                existingMedico.Sexo = updateMedico.Sexo;

                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = existingMedico });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteMedico(int id)
        {
            try
            {
                var medicoToDelete = _db.TblMedicos.Find(id);
                if (medicoToDelete == null)
                {
                    return NotFound($"Médico con ID {id} no encontrado");
                }

                _db.TblMedicos.Remove(medicoToDelete);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "médico eliminado" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
