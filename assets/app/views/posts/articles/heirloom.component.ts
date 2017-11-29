import {Component, OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as global from '../global';


@Component ({
  selector: 'app-heirloom',
  templateUrl: './templates/heirloom.component.html'

})
export class HeirloomComponent implements OnInit {
  constructor(private titleService: Title, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: `Food trucks: the craze that has become a bento so overfull with ceviche-sushi fusion concepts it has started spilling onto a pallet churning out everything from bao ice cream sandwiches to gourmet grilled cheeses. While intercultural culinary savvy is an exciting and exponentially expanding prospect,`},
      {property: 'og:title', content: this.postTitle},
      {property: 'og:description', content: `Food trucks: the craze that has become a bento so overfull with ceviche-sushi fusion concepts it has started spilling onto a pallet churning out everything from bao ice cream sandwiches to gourmet grilled cheeses. While intercultural culinary savvy is an exciting and exponentially expanding prospect,`},
      {property: 'og:type', content: "article"},
      {property: 'og:url', content: global.mainUrl + this.pageUrl},
      {property: 'og:image', content: global.shareImgUrl + 'zebbie.jpg'},
      {property: 'og:site_name', content: 'Fourteen76'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: this.postTitle},
      {name: 'twitter:description', content: `Food trucks: the craze that has become a bento so overfull with ceviche-sushi fusion concepts it has started spilling onto a pallet churning out everything from bao ice cream sandwiches to gourmet grilled cheeses. While intercultural culinary savvy is an exciting and exponentially expanding prospect,`},
      {name: 'twitter:image', content: global.shareImgUrl + 'zebbie.jpg'}
    ])
  }



  postTitle = 'Heirloom';
  postImage = "/images/headImages/heirloom.jpg";
  postImageTwo = "/images/postImages/heirloom.jpg";
  postImageThree = "/images/postImages/heirloom2.jpg";
  postImageFour = "/images/postImages/heirloom3.jpg";
  postImageFive = "/images/postImages/heirloom4.jpg";
  postSubtitle = "By Jonathan Patrick";

  pageUrl: string = 'Heirloom';
  shareTitle: string = 'Heirloom';
  shareFacebook = global.faceShare + this.pageUrl;
  shareTwitter = "";
  hastags = "food, chefinterview, foodtruck, bhamfood";
  shareEmail = "";
  shareGoogle = global.googleShare + this.pageUrl;
  shareReddit = "";


  ngOnInit() {
    this.titleService.setTitle(this.postTitle);
    this.shareEmail = global.emailJoin(this.shareTitle, this.pageUrl);
    this.shareTwitter = global.twitterJoin(this.pageUrl, this.shareTitle, this.hastags);
    this.shareReddit = global.redditJoin(this.pageUrl, this.shareTitle);
  }
}
