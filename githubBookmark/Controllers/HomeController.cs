using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace reactdemo.Controllers
{
    public class HomeController : Controller
    {
        private const string Repos = "repos";

        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult getRepos()
        {
            var json = JsonConvert.SerializeObject(Session[Repos]);
            return Content(json, "application/json");
        }

        [HttpPost]
        public void addRepo(string repoResult)
        {
            var repo = JObject.Parse(repoResult);

            if (Session[Repos] != null)
            {
                List<JObject> reposList = (List<JObject>)HttpContext.Session[Repos];
                reposList.Add(repo);
                Session[Repos] = reposList;
            }
            else
            {
                List<JObject> repos = new List<JObject>()
                {
                    repo
                };
                Session[Repos] = repos;
            }
        }
    }
}