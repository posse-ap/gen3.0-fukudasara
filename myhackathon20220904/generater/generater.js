"use strict";
window.addEventListener("load", function () {
  class Panel {
    constructor() {
      const section = document.createElement("section");
      section.classList.add("kotoGenerator");

      this.panelBox = document.createElement("div");
      this.panelBox.classList.add("panelBox");

      this.img = document.createElement("img");
      this.img.src = "../prehackathon/img.mH/kJ07.png";

      this.timeoutId = undefined;

      const showPicture = () => {
        this.img = document.createElement("img");
        this.img.src = "../prehackathon/img.mH/kJ01.png";
        this.stopButton.appendChild(this.img);
      }

      this.stopButton = document.createElement("div");
      this.stopButton.textContent = "STOP";
      this.stopButton.classList.add("stopButton");
      this.stopButton.addEventListener('click',() => {
        clearTimeout(this.timeoutId);

        showPicture ();
      })

      // this.startButton = document.createElement('div');
      // this.startButton.textContent = '遊ぶお題を生成';
      // this.startButton.classList.add('startButton');

      section.appendChild(this.panelBox);
      this.panelBox.appendChild(this.img);
      section.appendChild(this.stopButton);
      // section.appendChild(this.startButton);

      const main = document.querySelector("main");
      main.appendChild(section);
    }

    getRandomImage() {
      const images = [
        "../image/img.mH/kJ01.png",
        "../image/img.mH/kJ02.png",
        "../image/img.mH/kJ03.png",
        "../image/img.mH/kJ04.png",
        "../image/img.mH/kJ05.png",
      ];
      return images[Math.floor(Math.random() * images.length)];
    }


    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(()=>{
      this.spin();
      }, 30)
    }

  }

  const panels = [
    new Panel()
  ];

  const startButton = document.getElementById("startButton");

  startButton.addEventListener("click", () => {
    if(startButton.classList.contains("inactive")){
      return;
    }
    startButton.classList.add('inactive');
    panels.forEach((panel) => {
      panel.spin();
    });

  });

});
