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

    public int IdMedico { get; set; }

    public virtual TblMedico? IdMedicoNavigation { get; set; } = null!;

    public virtual ICollection<TblCitaMedica>? TblCitaMedicas { get; set; } = new List<TblCitaMedica>();
}
