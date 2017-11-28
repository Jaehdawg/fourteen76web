import {Component, OnInit} from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import * as global from '../global';


, private meta: Meta) {
  this.meta.addTags([
    {name: 'description', content: `Artist Interview`},
    {property: 'og:title', content: this.postTitle},
    {property: 'og:description', content: `Artist Interview`},
    {property: 'og:type', content: "article"},
    {property: 'og:url', content: global.mainUrl + this.pageUrl},
    {property: 'og:image', content: global.shareImgUrl + 'amy.jpg'}
    {property: 'og:site_name', content: 'Fourteen76'}
    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:title', content: this.postTitle},
    {name: 'twitter:description', content: `Artist Interview`},
    {name: 'twitter:image', content: global.shareImgUrl + 'amy.jpg'}
  ]);
}


this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);


pageUrl: string = 'AmyVaughn';
shareTitle: string = 'Amy%20Vaughn';
shareFacebook = global.faceShare + this.pageUrl;
shareTwitter = "";
hastags = "artistshowcase, artist, coolart, creatives";
shareEmail = "";
shareGoogle = global.googleShare + this.pageUrl;
shareReddit = "";
