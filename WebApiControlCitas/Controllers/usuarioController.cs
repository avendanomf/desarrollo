using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebApiControlCitas.models;

namespace WebApiControlCitas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("ReglasCors")]
    public class usuarioController : ControllerBase
    {
        public readonly ControlcitasmedicasContext _db;


        public usuarioController(ControlcitasmedicasContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IActionResult GetUser()
        {
            try
            {
                var resultCliente = _db.Usuarios.ToList();

                // Retornar la respuesta paginada
                return StatusCode(200, new { mensaje = "ok", response = resultCliente });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        //GET: api/Controllers/user/5
        [HttpGet("{id}", Name = "GetUser")]
        public IActionResult GetUser(int id)
        {
            try
            {
                Usuario? resultCliente = _db.Usuarios.Find(id);
                return StatusCode(200, new { mensaje = "ok", response = resultCliente });
            }
            catch (Exception ex)
            {
                // Manejar errores y devolver una respuesta adecuada
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        // POST: api/Controllers/user
        [HttpPost]
        public IActionResult PostUser([FromBody] Usuario newUser)
        {
            try
            {
                // Puedes validar el modelo si es necesario
                if (newUser == null)
                {
                    return BadRequest("Datos del usuario no válidos");
                }

                // Llama a la capa de negocios para agregar el usuario
                _db.Usuarios.Add(newUser);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "usuario agregado" });
            }
            catch (Exception ex)
            {
                // Manejar errores y devolver una respuesta adecuada
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }

        // PUT: api/Controllers/user/5
        [HttpPut("{id}")]
        public IActionResult PutUser(int id, [FromBody] Usuario updateUser)
        {
            try
            {
                // Puedes validar el modelo si es necesario
                if (updateUser == null || id != updateUser.IdUsuario)
                {
                    return BadRequest("Datos del usuario no válidos");
                }

                // Llama a la capa de negocios para actualizar el usuario
                var existingUser = _db.Usuarios.Find(id);

                if (existingUser == null)
                {
                    return NotFound($"Usuario con ID {id} no encontrado");
                }
                existingUser.Correo = updateUser.Correo;
                existingUser.Contrasena = updateUser.Contrasena;
                
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = existingUser });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }  
        
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            try
            {
                var usuarioToDelete = _db.Usuarios.Find(id);
                if (usuarioToDelete == null)
                {
                    return NotFound($"Usuario con ID {id} no encontrada");
                }

                _db.Usuarios.Remove(usuarioToDelete);
                _db.SaveChanges();
                return StatusCode(200, new { mensaje = "ok", response = "Usuario eliminado" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error interno del servidor: {ex.Message}");
            }
        }     
    }
}
