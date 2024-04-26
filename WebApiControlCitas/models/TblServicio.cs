using System;
using System.Collections.Generic;

namespace WebApiControlCitas.models;

public partial class TblServicio
{
    public int IdServicio { get; set; }

    /// <summary>
    /// Nombre del servicio médico
    /// </summary>
    public string NombreServicio { get; set; } = null!;

    public virtual ICollection<TblCitaMedica> TblCitaMedicas { get; set; } = new List<TblCitaMedica>();
}
