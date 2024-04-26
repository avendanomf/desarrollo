using System;
using System.Collections.Generic;

namespace WebApiControlCitas.models;

public partial class Sesione
{
    public int IdSesion { get; set; }

    public int? IdUsuario { get; set; }

    public string TokenSesion { get; set; } = null!;

    public DateTime? FechaInicio { get; set; }

    public DateTime? FechaExpiracion { get; set; }

    public virtual Usuario? IdUsuarioNavigation { get; set; }
}
