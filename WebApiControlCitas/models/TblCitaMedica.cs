using System;
using System.Collections.Generic;

namespace WebApiControlCitas.models;

public partial class TblCitaMedica
{
    public int IdCita { get; set; }

    public int IdPaciente { get; set; }

    public int IdMedico { get; set; }

    public int IdTurno { get; set; }

    public int IdServicio { get; set; }

    /// <summary>
    /// Fecha de la cita médica
    /// </summary>
    public DateOnly FechaCita { get; set; }

    /// <summary>
    /// Hora de la cita médica
    /// </summary>
    public string HoraCita { get; set; } = null!;

    public virtual TblMedico? IdMedicoNavigation { get; set; } = null!;

    public virtual TblPaciente? IdPacienteNavigation { get; set; } = null!;

    public virtual TblServicio? IdServicioNavigation { get; set; } = null!;

    public virtual TblTurno? IdTurnoNavigation { get; set; } = null!;
}
