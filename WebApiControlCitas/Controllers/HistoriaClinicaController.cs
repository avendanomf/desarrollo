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
        public class HistoriaClinicaController : ControllerBase
    {
        private readonly ControlcitasmedicasContext _db;

        public HistoriaClinicaController(ControlcitasmedicasContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetHistoriasClinicas()
        {
            try
            {
                var resultHistoriasClinicas = _db.TblHistoriaClinicas.ToList();
                return StatusCode(200, new { mensaje = "ok", response = resultHistoriasClinicas });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpGet("{id}", Name = "GetHistoriaClinica")]
        public IActionResult GetHistoriaClinica(int id)
        {
            try
            {
                var resultHistoriaClinica = _db.TblHistoriaClinicas.Find(id);
                if (resultHistoriaClinica == null)
                {
                    return NotFound($"Historia clínica con ID {id} no encontrada");
                }
                return StatusCode(200, new { mensaje = "ok", response = resultHistoriaClinica });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPost]
        public IActionResult PostHistoriaClinica([FromBody] TblHistoriaClinica newHistoriaClinica)
        {
            try
            {
                if (newHistoriaClinica == null)
                {
                    return BadRequest("Datos de la historia clínica no válidos");
                }

                _db.TblHistoriaClinicas.Add(newHistoriaClinica);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "historia clínica agregada" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public IActionResult PutHistoriaClinica(int id, [FromBody] TblHistoriaClinica updateHistoriaClinica)
        {
            try
            {
                if (updateHistoriaClinica == null || id != updateHistoriaClinica.IdHistoria)
                {
                    return BadRequest("Datos de la historia clínica no válidos");
                }

                var existingHistoriaClinica = _db.TblHistoriaClinicas.Find(id);
                if (existingHistoriaClinica == null)
                {
                    return NotFound($"Historia clínica con ID {id} no encontrada");
                }

                existingHistoriaClinica.IdPaciente = updateHistoriaClinica.IdPaciente;
                existingHistoriaClinica.IdMedico = updateHistoriaClinica.IdMedico;
                existingHistoriaClinica.FechaAtencion = updateHistoriaClinica.FechaAtencion;
                existingHistoriaClinica.HoraAtencion = updateHistoriaClinica.HoraAtencion;
                existingHistoriaClinica.Observaciones = updateHistoriaClinica.Observaciones;

                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = existingHistoriaClinica });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteHistoriaClinica(int id)
        {
            try
            {
                var historiaClinicaToDelete = _db.TblHistoriaClinicas.Find(id);
                if (historiaClinicaToDelete == null)
                {
                    return NotFound($"Historia clínica con ID {id} no encontrada");
                }

                _db.TblHistoriaClinicas.Remove(historiaClinicaToDelete);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "historia clínica eliminada" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }
    }
}
