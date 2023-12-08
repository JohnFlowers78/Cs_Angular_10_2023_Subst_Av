using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/imc")]
    public class ImcController : ControllerBase
    {
        private readonly AppDataContext _ctx;
        public ImcController(AppDataContext context)
        {
            _ctx = context;
        }

        [HttpGet]
        [Route("listar")]
        public ActionResult Listar()
        {
            try
            {
                List<Imc> imcs = _ctx.Imcs.ToList();
                return imcs.Count == 0 ? NotFound() : Ok(imcs);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [HttpPost]
        [Route("cadastrar")]
        public ActionResult Cadastrar([FromBody] Imc imc)
        {
            try
            {
                _ctx.Imcs.Add(imc);
                _ctx.SaveChanges();
                return Created("", imc);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


    }
}