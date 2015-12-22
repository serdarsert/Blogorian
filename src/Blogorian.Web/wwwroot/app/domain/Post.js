'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Blogorian;
(function (Blogorian) {
    var Domain;
    (function (Domain) {
        var Post = (function (_super) {
            __extends(Post, _super);
            function Post(title, url, publishedDate, imageUrl, content, id, tags) {
                _super.call(this);
                this.title = title;
                this.url = url;
                this.publishedDate = publishedDate;
                this.imageUrl = imageUrl;
                this.content = content;
                this.id = id;
                this.tags = tags;
                this.id = id;
                this.title = title;
                this.url = url;
                this.publishedDate = publishedDate;
                this.imageUrl = imageUrl;
                this.content = content;
                this.tags = tags;
            }
            return Post;
        })(Domain.EntityBase);
        Domain.Post = Post;
    })(Domain = Blogorian.Domain || (Blogorian.Domain = {}));
})(Blogorian || (Blogorian = {}));
//# sourceMappingURL=Post.js.map