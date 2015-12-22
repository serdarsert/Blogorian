using System;
using System.Collections.Generic;

namespace Blogorian.Models
{
    public class Post
    {
        #region Properties
        public int Id { get; set; }
        public string Title { get; set; }
        public string Url
        {
            get
            {
                string url = Title.ToLowerInvariant();
                url = string.Join("-", url.Split(' ')) + "-" + Id;
                return url;
            }
        }
        public DateTime PublishedDate { get; set; }
        public bool Published { get; set; }
        public string ImageUrl { get; set; }
        public string Content { get; set; }
        public List<string> Tags { get; set; }
        #endregion
    }
}