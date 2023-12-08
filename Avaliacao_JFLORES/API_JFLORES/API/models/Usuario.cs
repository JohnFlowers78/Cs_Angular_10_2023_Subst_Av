using System.ComponentModel.DataAnnotations;
using API.Controllers;
namespace API.Models;
public class Usuario
{
  public Usuario()
      {
        CriadoEm = DateTime.Now;
      }
  [Key]
  public int UsuarioId { get; set; }
  public string? Nome { get; set; }
  public DateTime CriadoEm { get; set; }
  public string? Nascimento { get; set; }
}
