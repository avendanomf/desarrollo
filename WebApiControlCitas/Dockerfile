# Usar la imagen SDK de .NET Core para compilar la aplicación
# Use the SDK image for building
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /api/webapicontrolcitas
EXPOSE 8089

# Copy the entire content of the BackEnd directory
COPY ./WebApiControlCitas /api


# Restore NuGet packages
RUN dotnet restore "/api/WebApiControlCitas.csproj"


# Build and publish the application
RUN dotnet publish "/api/WebApiControlCitas.csproj" -c Release -o out

# Use the ASP.NET Core runtime image for the final image
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS runtime
WORKDIR /api

# Copy the published output from the build image
COPY --from=build-env /api/webapicontrolcitas/out .

# Exponer el puerto en el que la aplicación escuchará

# Definir el comando de ejecución
ENTRYPOINT ["dotnet", "WebApiControlCitas.dll"]