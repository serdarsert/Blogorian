using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blogorian.Data
{
    public class Route
    {
        public string Path { get; set; }
        public string TemplateUrl { get; set; }
        public string Controller { get; set; }
        public string ControllerAs { get; set; }

        public Route(string path, string templateUrl, string controller, string controllerAs)
        {
            this.Path = path;
            this.TemplateUrl = templateUrl;
            this.Controller = controller;
            this.ControllerAs = controllerAs;
        }
    }
}
