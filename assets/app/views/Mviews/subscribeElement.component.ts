import {Component, OnInit} from '@angular/core';

@Component ({
  selector: 'app-subscribe-element',
  template: `
    <div class="subscribeElementContainer">
      <p class="subscribeElementHeading">Keep Up With Fourteen76</p>
      <form action="/subscribe" method="post">
        <input type="email" placeholder="Email" name="email"/>
        <button type="submit" class="subscribeButton">Subscribe</button>
      </form>
    </div>
  `
})

export class SubscribeElement {

}
