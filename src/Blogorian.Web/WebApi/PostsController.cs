using Blogorian.Models;
using Microsoft.AspNet.Mvc;
using System.Collections.Generic;
using System.Linq;
namespace Blogorian.Web.WebApi
{
    [Route("api/posts")]
    public class PostsController : Controller
    {
        // GET: api/posts
        [HttpGet]
        public List<Post> Get()
        {
            return PostsRepository.Posts;
        }

        // GET api/posts/5
        [HttpGet("{id}")]
        public Post Get(int id)
        {
            return PostsRepository.Posts.FirstOrDefault(p => p.Id == id);
        }
    }
}
