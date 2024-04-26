using System;
using System.Collections.Generic;

namespace WebApiControlCitas.models;

public partial class Usuario
{
    public int IdUsuario { get; set; }

    public string Correo { get; set; } = null!;

    public string Contrasena { get; set; } = null!;

    public DateTime? FechaCreacion { get; set; }

    public virtual ICollection<Sesione> Sesiones { get; set; } = new List<Sesione>();
}
