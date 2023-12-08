namespace API.Controllers;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Models;


[ApiController]
[Route("api/usuario")]
public class UsuarioController : ControllerBase
{
    private readonly AppDataContext _ctx;
    public UsuarioController(AppDataContext context)
    {
        _ctx = context;
    }

    [HttpGet]
    [Route("listar")]
    public ActionResult Listar()
    {
        try
        {
            List<Usuario> usuarios = _ctx.Usuarios.ToList();
            return usuarios.Count == 0 ? NotFound() : Ok(usuarios);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpGet]
    [Route("buscar/{nome}")]
    public ActionResult Buscar([FromRoute] string nome)
    {
        try
        {
            Usuario? usuarioCadastrado = _ctx.Usuarios.FirstOrDefault(x => x.Nome == nome);
            if (usuarioCadastrado != null)
            {
                return Ok(usuarioCadastrado);
            }
            return NotFound();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPost]
    [Route("cadastrar")]
    public ActionResult Cadastrar([FromBody] Usuario usuario)
    {
        try
        {
            _ctx.Usuarios.Add(usuario);
            _ctx.SaveChanges();
            return Created("", usuario);
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpPut]
    [Route("alterar/{id}")]
    public IActionResult Alterar([FromRoute] int id,
    [FromBody] Usuario usuario)
    {
        try
        {
            Usuario? usuarioCadastrado =
                _ctx.Usuarios.FirstOrDefault(x => x.UsuarioId == id);
            if (usuarioCadastrado != null)
            {
                usuarioCadastrado.Nome = usuario.Nome;
                _ctx.SaveChanges();
                return Ok(usuario);
            }
            return NotFound();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    [HttpDelete]
    [Route("deletar/{id}")]
    public IActionResult Deletar([FromRoute] int id)
    {
        try
        {
            Usuario? usuarioCadastrado = _ctx.Usuarios.Find(id);
            if (usuarioCadastrado != null)
            {
                _ctx.Usuarios.Remove(usuarioCadastrado);
                _ctx.SaveChanges();
                return Ok();
            }
            return NotFound();
        }
        catch (Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}
