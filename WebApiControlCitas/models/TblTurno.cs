using System;
using System.Collections.Generic;

namespace WebApiControlCitas.models;

public partial class TblTurno
{
    public int IdTurno { get; set; }

    /// <summary>
    /// Nombre del turno de atención
    /// </summary>
    public string? NombreTurno { get; set; }

    public string NombreMedico { get; set; } = null!;

    public virtual TblMedico NombreMedicoNavigation { get; set; } = null!;

    public virtual ICollection<TblCitaMedica> TblCitaMedicas { get; set; } = new List<TblCitaMedica>();
}
