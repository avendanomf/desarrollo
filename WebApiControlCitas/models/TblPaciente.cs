using System;
using System.Collections.Generic;

namespace WebApiControlCitas.models;

public partial class TblPaciente
{
    public int IdPaciente { get; set; }

    public int? IdUsuario { get; set; }

    public string TipoIdentificacion { get; set; } = null!;

    public int NumeroIdentificacion { get; set; }

    /// <summary>
    /// Nombre completo del paciente
    /// </summary>
    public string NombreCompleto { get; set; } = null!;

    public string Direccion { get; set; } = null!;

    public int Celular { get; set; }

    public string Ocupacion { get; set; } = null!;

    public string Sexo { get; set; } = null!;

    public virtual ICollection<TblCitaMedica> TblCitaMedicas { get; set; } = new List<TblCitaMedica>();

    public virtual ICollection<TblHistoriaClinica> TblHistoriaClinicas { get; set; } = new List<TblHistoriaClinica>();
}
