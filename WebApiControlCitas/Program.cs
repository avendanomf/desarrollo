using Microsoft.EntityFrameworkCore;
using WebApiControlCitas.models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Key"] ?? "")),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

var conn = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<ControlcitasmedicasContext>(options =>
{
    options.UseNpgsql(conn);
});

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "ControlCitasMedicasWebApi", Version = "v1" });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var misReglasCors = "ReglasCors";
builder.Services.AddCors(opt =>
{
    opt.AddPolicy(name: misReglasCors, builder =>
    {
        builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
   {
       c.SwaggerEndpoint("/swagger/v1/swagger.json", "NoColgravasWepApi V1");
   });
    app.UseDeveloperExceptionPage();
}

app.UseCors(misReglasCors);
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.Run();
