using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WebApiControlCitas.models;

public partial class ControlcitasmedicasContext : DbContext
{
    public ControlcitasmedicasContext()
    {
    }

    public ControlcitasmedicasContext(DbContextOptions<ControlcitasmedicasContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Sesione> Sesiones { get; set; }

    public virtual DbSet<TblCitaMedica> TblCitaMedicas { get; set; }

    public virtual DbSet<TblHistoriaClinica> TblHistoriaClinicas { get; set; }

    public virtual DbSet<TblMedico> TblMedicos { get; set; }

    public virtual DbSet<TblPaciente> TblPacientes { get; set; }

    public virtual DbSet<TblServicio> TblServicios { get; set; }

    public virtual DbSet<TblTurno> TblTurnos { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("host=localhost; port=5432; Database=controlcitasmedicas; Username=postgres; Password=123456789");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Sesione>(entity =>
        {
            entity.HasKey(e => e.IdSesion).HasName("sesiones_pkey");

            entity.ToTable("sesiones");

            entity.HasIndex(e => e.TokenSesion, "sesiones_token_sesion_key").IsUnique();

            entity.Property(e => e.IdSesion).HasColumnName("id_sesion");
            entity.Property(e => e.FechaExpiracion)
                .HasColumnType("timestamp without time zone")
                .HasColumnName("fecha_expiracion");
            entity.Property(e => e.FechaInicio)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("fecha_inicio");
            entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");
            entity.Property(e => e.TokenSesion)
                .HasMaxLength(500)
                .HasColumnName("token_sesion");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Sesiones)
                .HasForeignKey(d => d.IdUsuario)
                .HasConstraintName("sesiones_id_usuario_fkey");
        });

        modelBuilder.Entity<TblCitaMedica>(entity =>
        {
            entity.HasKey(e => e.IdCita).HasName("tbl_cita_medica_pkey");

            entity.ToTable("tbl_cita_medica");

            entity.Property(e => e.IdCita).HasColumnName("id_cita");
            entity.Property(e => e.FechaCita)
                .HasComment("Fecha de la cita médica")
                .HasColumnName("fecha_cita");
            entity.Property(e => e.HoraCita)
                .HasMaxLength(20)
                .HasComment("Hora de la cita médica")
                .HasColumnName("hora_cita");
            entity.Property(e => e.IdMedico).HasColumnName("id_medico");
            entity.Property(e => e.IdPaciente).HasColumnName("id_paciente");
            entity.Property(e => e.IdServicio).HasColumnName("id_servicio");
            entity.Property(e => e.IdTurno).HasColumnName("id_turno");

            entity.HasOne(d => d.IdMedicoNavigation).WithMany(p => p.TblCitaMedicas)
                .HasForeignKey(d => d.IdMedico)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("tbl_cita_medica_id_medico_fkey");

            entity.HasOne(d => d.IdPacienteNavigation).WithMany(p => p.TblCitaMedicas)
                .HasForeignKey(d => d.IdPaciente)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("tbl_cita_medica_id_paciente_fkey");

            entity.HasOne(d => d.IdServicioNavigation).WithMany(p => p.TblCitaMedicas)
                .HasForeignKey(d => d.IdServicio)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("tbl_cita_medica_id_servicio_fkey");

            entity.HasOne(d => d.IdTurnoNavigation).WithMany(p => p.TblCitaMedicas)
                .HasForeignKey(d => d.IdTurno)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("tbl_cita_medica_id_turno_fkey");
        });

        modelBuilder.Entity<TblHistoriaClinica>(entity =>
        {
            entity.HasKey(e => e.IdHistoria).HasName("tbl_historia_clinica_pkey");

            entity.ToTable("tbl_historia_clinica");

            entity.Property(e => e.IdHistoria).HasColumnName("id_historia");
            entity.Property(e => e.FechaAtencion)
                .HasComment("Fecha de atención de la historia clínica")
                .HasColumnName("fecha_atencion");
            entity.Property(e => e.HoraAtencion)
                .HasComment("Hora de atención de la historia clínica")
                .HasColumnName("hora_atencion");
            entity.Property(e => e.IdMedico).HasColumnName("id_medico");
            entity.Property(e => e.IdPaciente).HasColumnName("id_paciente");
            entity.Property(e => e.Observaciones)
                .HasComment("Observaciones en la historia clínica")
                .HasColumnName("observaciones");

            entity.HasOne(d => d.IdMedicoNavigation).WithMany(p => p.TblHistoriaClinicas)
                .HasForeignKey(d => d.IdMedico)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("tbl_historia_clinica_id_medico_fkey");

            entity.HasOne(d => d.IdPacienteNavigation).WithMany(p => p.TblHistoriaClinicas)
                .HasForeignKey(d => d.IdPaciente)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("tbl_historia_clinica_id_paciente_fkey");
        });

        modelBuilder.Entity<TblMedico>(entity =>
        {
            entity.HasKey(e => e.IdMedico).HasName("tbl_medico_pkey");

            entity.ToTable("tbl_medico");

            entity.HasIndex(e => e.NombreCompleto, "uq_nombre_completo").IsUnique();

            entity.Property(e => e.IdMedico).HasColumnName("id_medico");
            entity.Property(e => e.Cargo)
                .HasMaxLength(50)
                .HasColumnName("cargo");
            entity.Property(e => e.Celular)
                .HasMaxLength(20)
                .HasColumnName("celular");
            entity.Property(e => e.Direccion)
                .HasMaxLength(100)
                .HasColumnName("direccion");
            entity.Property(e => e.Especialidad)
                .HasMaxLength(50)
                .HasColumnName("especialidad");
            entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");
            entity.Property(e => e.NombreCompleto)
                .HasMaxLength(100)
                .HasComment("Nombre completo del médico")
                .HasColumnName("nombre_completo");
            entity.Property(e => e.NumeroIdentificacion)
                .HasMaxLength(20)
                .HasColumnName("numero_identificacion");
            entity.Property(e => e.Sexo)
                .HasMaxLength(10)
                .HasColumnName("sexo");
            entity.Property(e => e.TipoIdentificacion)
                .HasMaxLength(5)
                .HasColumnName("tipo_identificacion");
        });

        modelBuilder.Entity<TblPaciente>(entity =>
        {
            entity.HasKey(e => e.IdPaciente).HasName("tbl_paciente_pkey");

            entity.ToTable("tbl_paciente");

            entity.Property(e => e.IdPaciente).HasColumnName("id_paciente");
            entity.Property(e => e.Celular)
                .HasMaxLength(20)
                .HasColumnName("celular");
            entity.Property(e => e.Direccion)
                .HasMaxLength(100)
                .HasColumnName("direccion");
            entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");
            entity.Property(e => e.NombreCompleto)
                .HasMaxLength(100)
                .HasComment("Nombre completo del paciente")
                .HasColumnName("nombre_completo");
            entity.Property(e => e.NumeroIdentificacion)
                .HasMaxLength(20)
                .HasColumnName("numero_identificacion");
            entity.Property(e => e.Ocupacion)
                .HasMaxLength(50)
                .HasColumnName("ocupacion");
            entity.Property(e => e.Sexo)
                .HasMaxLength(10)
                .HasColumnName("sexo");
            entity.Property(e => e.TipoIdentificacion)
                .HasMaxLength(5)
                .HasColumnName("tipo_identificacion");
        });

        modelBuilder.Entity<TblServicio>(entity =>
        {
            entity.HasKey(e => e.IdServicio).HasName("tbl_servicio_pkey");

            entity.ToTable("tbl_servicio");

            entity.Property(e => e.IdServicio).HasColumnName("id_servicio");
            entity.Property(e => e.NombreServicio)
                .HasMaxLength(100)
                .HasComment("Nombre del servicio médico")
                .HasColumnName("nombre_servicio");
        });

        modelBuilder.Entity<TblTurno>(entity =>
        {
            entity.HasKey(e => e.IdTurno).HasName("tbl_turno_pkey");

            entity.ToTable("tbl_turno");

            entity.Property(e => e.IdTurno).HasColumnName("id_turno");
            entity.Property(e => e.IdMedico).HasColumnName("id_medico");
            entity.Property(e => e.NombreTurno)
                .HasMaxLength(100)
                .HasComment("Nombre del turno de atención")
                .HasColumnName("nombre_turno");

            entity.HasOne(d => d.IdMedicoNavigation).WithMany(p => p.TblTurnos)
                .HasForeignKey(d => d.IdMedico)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("tbl_turno_id_medico_fkey");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("usuarios_pkey");

            entity.ToTable("usuarios");

            entity.HasIndex(e => e.Correo, "usuarios_correo_key").IsUnique();

            entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");
            entity.Property(e => e.Contrasena)
                .HasMaxLength(100)
                .HasColumnName("contrasena");
            entity.Property(e => e.Correo)
                .HasMaxLength(50)
                .HasColumnName("correo");
            entity.Property(e => e.FechaCreacion)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp without time zone")
                .HasColumnName("fecha_creacion");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
