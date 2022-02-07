import { Component } from '@angular/core';

import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'picGenerator';
  descRaid = { obsidian:"a", regal:"a", crimson:"a", flamingo:"a", frost: "Doom 2 @ 30%", cobalt:"a", emerald:"Ultimus 7.5 60%/Doom 1 2x Week 30%", cobbler:"a", solar:"a", wind:"a", artic:"a" };
  descGreek = { obsidian:"a", regal:"a", crimson:"a", flamingo:"a", frost: "Doom 2 @ 30%", cobalt:"a", emerald:"a", cobbler:"a", solar:"a", wind:"a", artic:"a" };
  descWarLvl = { obsidian:"a", regal:"a", crimson:"a", flamingo:"a", frost: "Doom 2 @ 30%", cobalt:"a", emerald:"a", cobbler:"a", solar:"a", wind:"a", artic:"a" };

  ngOnInit(): void {
    this.downloadAsPng();
  }

  downloadAsPng(){
    var node = document.getElementById('body');
    var body = document.querySelector('body');
    var height = body.offsetHeight;
    var style = getComputedStyle(body);
    var getTopBotMargin = parseInt(style.marginTop + style.marginBottom);
    var fullHeight = height + getTopBotMargin;
    console.log(fullHeight);

    htmlToImage.toPng(node, {skipAutoScale:true}).then((dataUrl) => {
      var img = new Image();
      img.src = dataUrl
      document.body.appendChild(img);
    })
    .catch((error) => {
      console.error("Something went wrong.", error);
    })
  }

}
