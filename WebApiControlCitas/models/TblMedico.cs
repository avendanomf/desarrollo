using System;
using System.Collections.Generic;

namespace WebApiControlCitas.models;

public partial class TblMedico
{
    public int IdMedico { get; set; }

    public int? IdUsuario { get; set; }

    public string TipoIdentificacion { get; set; } = null!;

    public string NumeroIdentificacion { get; set; } = null!;

    /// <summary>
    /// Nombre completo del médico
    /// </summary>
    public string NombreCompleto { get; set; } = null!;

    public string Direccion { get; set; } = null!;

    public string Celular { get; set; } = null!;

    public string Cargo { get; set; } = null!;

    public string Especialidad { get; set; } = null!;

    public string Sexo { get; set; } = null!;

    public virtual ICollection<TblCitaMedica> TblCitaMedicas { get; set; } = new List<TblCitaMedica>();

    public virtual ICollection<TblHistoriaClinica> TblHistoriaClinicas { get; set; } = new List<TblHistoriaClinica>();

    public virtual ICollection<TblTurno> TblTurnos { get; set; } = new List<TblTurno>();
}
