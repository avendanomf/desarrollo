--CREATE DATABASE IF NOT EXISTS ControlCitasMedicas;

CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    correo VARCHAR(50) UNIQUE NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla sesiones (para control de sesiones)
CREATE TABLE sesiones (
    id_sesion SERIAL PRIMARY KEY,
    id_usuario INT REFERENCES usuarios(id_usuario),
    token_sesion VARCHAR(500) UNIQUE NOT NULL,
    fecha_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_expiracion TIMESTAMP
);


-- Crear la tabla TBL_Paciente
CREATE TABLE TBL_Paciente (
    Id_Paciente SERIAL PRIMARY KEY,
	id_usuario INT,
    Tipo_Identificacion VARCHAR(5) NOT NULL,
    Numero_Identificacion VARCHAR(20) NOT NULL,
    Nombre_Completo VARCHAR(100) NOT NULL,
    Direccion VARCHAR(100) NOT NULL,
    Celular VARCHAR(20) NOT NULL,
    Ocupacion VARCHAR(50) NOT NULL,
    Sexo VARCHAR(10) NOT NULL
);

-- Crear la tabla TBL_Medico
CREATE TABLE TBL_Medico (
    Id_Medico SERIAL PRIMARY KEY,
	id_usuario INT,
    Tipo_Identificacion VARCHAR(5) NOT NULL,
    Numero_Identificacion VARCHAR(20 NOT NULL,
    Nombre_Completo VARCHAR(100) NOT NULL,
    Direccion VARCHAR(100) NOT NULL,
    Celular VARCHAR(20) NOT NULL,
    Cargo VARCHAR(50) NOT NULL,
    Especialidad VARCHAR(50) NOT NULL,
    Sexo VARCHAR(10) NOT NULL
);

ALTER TABLE TBL_Medico ADD CONSTRAINT UQ_Nombre_Completo UNIQUE (Nombre_Completo);

-- Crear la tabla TBL_Servicio
CREATE TABLE TBL_Servicio (
    Id_Servicio SERIAL PRIMARY KEY,
    Nombre_Servicio VARCHAR(100) NOT NULL
);

-- Crear la tabla TBL_Turno
CREATE TABLE TBL_Turno (
    Id_Turno SERIAL PRIMARY KEY,
    Nombre_Turno VARCHAR(100),
    Nombre_Medico VARCHAR(100) NOT NULL,
    FOREIGN KEY (Nombre_Medico) REFERENCES TBL_Medico (Nombre_Completo)
);

-- Crear la tabla TBL_Cita_Medica
CREATE TABLE TBL_Cita_Medica (
    Id_Cita SERIAL PRIMARY KEY,
    Id_Paciente INT NOT NULL,
    Id_Medico INT NOT NULL,
    Id_Turno INT NOT NULL,
    Id_Servicio INT NOT NULL,
    Fecha_Cita DATE NOT NULL,
    Hora_Cita TIME NOT NULL,
    FOREIGN KEY (Id_Paciente) REFERENCES TBL_Paciente (Id_Paciente),
    FOREIGN KEY (Id_Medico) REFERENCES TBL_Medico (Id_Medico),
    FOREIGN KEY (Id_Turno) REFERENCES TBL_Turno (Id_Turno),
    FOREIGN KEY (Id_Servicio) REFERENCES TBL_Servicio (Id_Servicio)
);

-- Crear la tabla TBL_Historia_Clinica
CREATE TABLE TBL_Historia_Clinica (
    Id_Historia SERIAL PRIMARY KEY,
    Id_Paciente INT NOT NULL,
    Id_Medico INT NOT NULL,
    Fecha_Atencion DATE NOT NULL,
    Hora_Atencion TIME NOT NULL,
    Observaciones TEXT NOT NULL,
    FOREIGN KEY (Id_Paciente) REFERENCES TBL_Paciente (Id_Paciente),
    FOREIGN KEY (Id_Medico) REFERENCES TBL_Medico (Id_Medico)
);

-- Añadir descripciones a las columnas
COMMENT ON COLUMN TBL_Paciente.Nombre_Completo IS 'Nombre completo del paciente';
COMMENT ON COLUMN TBL_Medico.Nombre_Completo IS 'Nombre completo del médico';
COMMENT ON COLUMN TBL_Servicio.Nombre_Servicio IS 'Nombre del servicio médico';
COMMENT ON COLUMN TBL_Turno.Nombre_Turno IS 'Nombre del turno de atención';
COMMENT ON COLUMN TBL_Cita_Medica.Fecha_Cita IS 'Fecha de la cita médica';
COMMENT ON COLUMN TBL_Cita_Medica.Hora_Cita IS 'Hora de la cita médica';
COMMENT ON COLUMN TBL_Historia_Clinica.Fecha_Atencion IS 'Fecha de atención de la historia clínica';
COMMENT ON COLUMN TBL_Historia_Clinica.Hora_Atencion IS 'Hora de atención de la historia clínica';
COMMENT ON COLUMN TBL_Historia_Clinica.Observaciones IS 'Observaciones en la historia clínica';
