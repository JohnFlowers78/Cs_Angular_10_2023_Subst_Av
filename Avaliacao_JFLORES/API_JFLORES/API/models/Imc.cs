using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Models;
public class Imc
{
  public Imc()
      {
        CriadoEm = DateTime.Now;
      }
  [Key]
  public int ImcId { get; set; }    //PK
  public DateTime CriadoEm { get; set; }
  public float Altura { get; set; }
  public float Peso { get; set; }
  public int UsuarioId { get; set; } // FK
  [ForeignKey("UsuarioId")]
  public Usuario? Usuario { get; set; }


  

/* Realizar aqui os ifs para a classificação */
  public void VerificarClassificacao()
    {

    }   

}