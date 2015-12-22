'use strict';
module Blogorian.Domain {
    export interface IPost {
        title: string;
        url: string;
        publishedDate: Date;
        imageUrl: string;
        content: string;
        tags?: Array<string>
    }

    export class Post extends EntityBase implements IPost {
        constructor(public title: string,
            public url: string,
            public publishedDate: Date,
            public imageUrl: string,
            public content: string,
            public id: number,
            public tags?: Array<string>) {

            super();

            this.id = id;
            this.title = title;
            this.url = url;
            this.publishedDate = publishedDate;
            this.imageUrl = imageUrl;
            this.content = content;
            this.tags = tags;
        }
    }
}