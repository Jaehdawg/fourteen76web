'use strict';
export const mainUrl: string = "http://www.fourteen76.com/";
export const shareImgUrl: string = mainUrl + 'images/share/';
export const faceShare: string = "https://www.facebook.com/sharer/sharer.php?u=http%3A//fourteen76.com/";
export const googleShare: string = "https://plus.google.com/share?url=http://www.fourteen76.com/";

export function emailJoin(subject: string, link: string) {
  return "mailto:?Subject=" + subject + "&body=Check%20this%20out%20%20http://www.fourteen76.com/" + link;
}

export function twitterJoin(link: string, title: string, hashtags: string) {
  return "https://twitter.com/share?url=http://www.fourteen76.com/" + link + "&amp;text=" + title + "&amp;hashtags=fourteen76, onlineartgallery, artcollective" + hashtags;
}

export function redditJoin(link: string, title: string){
  return "http://reddit.com/submit?url=http://www.fourteen76.com/" + link + "&amp;title=" + title;
}
