using System;
using System.Collections.Generic;

namespace WebApiControlCitas.models;

public partial class TblHistoriaClinica
{
    public int IdHistoria { get; set; }

    public int IdPaciente { get; set; }

    public int IdMedico { get; set; }

    /// <summary>
    /// Fecha de atención de la historia clínica
    /// </summary>
    public DateOnly FechaAtencion { get; set; }

    /// <summary>
    /// Hora de atención de la historia clínica
    /// </summary>
    public string HoraAtencion { get; set; }

    /// <summary>
    /// Observaciones en la historia clínica
    /// </summary>
    public string Observaciones { get; set; } = null!;

    public virtual TblMedico? IdMedicoNavigation { get; set; } = null!;

    public virtual TblPaciente? IdPacienteNavigation { get; set; } = null!;
}
