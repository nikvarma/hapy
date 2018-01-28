import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';


@IonicPage()
@Component({
  selector: 'page-backgroundcolor-picker',
  templateUrl: 'backgroundcolor-picker.html',
})
export class BackgroundcolorPickerPage implements OnInit {

  bgColorList: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {

  }

  setBgColor(bg: any): void {
    this.viewCtrl.dismiss(bg);
  }

  ngOnInit(): void {
    this.bgColorList = [
      {
        bgcolor: "linear-gradient(rgb(33, 150, 243), rgb(244, 67, 54))", hexcolor: {
          0: "#2196f3",
          1: "#f44336"
        }, text: "", name: "Politics"
      },
      {
        bgcolor: "linear-gradient(rgb(255, 95, 109), rgb(255, 195, 113))", hexcolor: {
          0: "#ff5f6d",
          1: "#ffc371"
        }, text: "", name: "Sweet Morning"
      },
      {
        bgcolor: "linear-gradient(rgb(255, 75, 31), rgb(255, 144, 104))", text: "", hexcolor: {
          0: "#ff4b1f",
          1: "#ff9068"
        }, name: "Sylvia"
      },
      {
        bgcolor: "linear-gradient(rgb(22, 191, 253), rgb(203, 48, 102))", text: "", hexcolor: {
          0: "#16bffd",
          1: "#cb3066"
        }, name: "Transfile"
      },
      {
        bgcolor: "linear-gradient(rgb(238, 205, 163), rgb(239, 98, 159))", text: "", hexcolor: {
          0: "#eecda3",
          1: "#ef629f"
        }, name: "Tranquil"
      },
      {
        bgcolor: "linear-gradient(rgb(29, 67, 80), rgb(164, 57, 49))", text: "", hexcolor: {
          0: "#1d4350",
          1: "#a43931"
        }, name: "Red Ocean"
      },
      {
        bgcolor: "linear-gradient(rgb(255, 75, 31), rgb(31, 221, 255))", text: "", hexcolor: {
          0: "#ff4b1f",
          1: "#1fddff"
        }, name: "Ali"
      },
      {
        bgcolor: "linear-gradient(rgb(131, 77, 155), rgb(208, 78, 214))", text: "", hexcolor: {
          0: "#834d9b",
          1: "#d04ed6"
        }, name: "Suzy"
      },
      {
        bgcolor: "linear-gradient(rgb(0, 153, 247), rgb(241, 23, 18))", text: "", hexcolor: {
          0: "#0099f7",
          1: "#f11712"
        }, name: "Superman"
      },
      {
        bgcolor: "linear-gradient(rgb(30, 60, 114), rgb(42, 82, 152))", text: "", hexcolor: {
          0: "#1e3c72",
          1: "#2a5298"
        }, name: "Joomla"
      },
      {
        bgcolor: "linear-gradient(rgb(17, 67, 87), rgb(242, 148, 146))", text: "", hexcolor: {
          0: "#114357",
          1: "#f29492"
        }, name: "Pizelex"
      },
      {
        bgcolor: "linear-gradient(rgb(253, 116, 108), rgb(255, 144, 104))", text: "", hexcolor: {
          0: "#fd746c",
          1: "#ff9068"
        }, name: "Haikus"
      },
      {
        bgcolor: "linear-gradient(rgb(106, 48, 147), rgb(160, 68, 255))", text: "", hexcolor: {
          0: "#6a3093",
          1: "#a044ff"
        }, name: "Purplin"
      },
      {
        bgcolor: "linear-gradient(rgb(178, 69, 146), rgb(241, 95, 121))", text: "", hexcolor: {
          0: "#b24592",
          1: "#f15f79"
        }, name: "Blush"
      },
      {
        bgcolor: "linear-gradient(rgb(244, 107, 69), rgb(238, 168, 73))", text: "", hexcolor: {
          0: "#f46b45",
          1: "#eea849"
        }, name: "Master Card"
      },
      {
        bgcolor: "linear-gradient(rgb(0, 92, 151), rgb(54, 55, 149))", text: "", hexcolor: {
          0: "#005c97",
          1: "#363795"
        }, name: "Clear Sky"
      },
      {
        bgcolor: "linear-gradient(rgb(229, 57, 53), rgb(227, 93, 91))", text: "", hexcolor: {
          0: "#e53935",
          1: "#e35d5b"
        }, name: "Passion"
      },
      {
        bgcolor: "linear-gradient(rgb(252, 0, 255), rgb(0, 219, 222))", text: "", hexcolor: {
          0: "#fc00ff",
          1: "#00dbde"
        }, name: "Timber"
      },
      {
        bgcolor: "linear-gradient(rgb(19, 106, 138), rgb(38, 120, 113))", text: "", hexcolor: {
          0: "#136a8a",
          1: "#267871"
        }, name: "Turquoise flow"
      },
      {
        bgcolor: "linear-gradient(rgb(0, 191, 143), rgb(0, 21, 16))", text: "", hexcolor: {
          0: "#00bf8f",
          1: "#001510"
        }, name: "Vine"
      },
      {
        bgcolor: "linear-gradient(rgb(255, 0, 132), rgb(51, 0, 27))", text: "", hexcolor: {
          0: "#ff0084",
          1: "#33001b"
        }, name: "Flickr"
      },
      {
        bgcolor: "linear-gradient(rgb(254, 172, 94), rgb(199, 121, 208), rgb(75, 192, 200))", text: "", hexcolor: {
          0: "#feac5e",
          1: "#c779d0",
          2: "#4bc0c8"
        }, name: "Atlas"
      },
      {
        bgcolor: "linear-gradient(rgb(100, 65, 165), rgb(42, 8, 69))", text: "", hexcolor: {
          0: "#6441a5",
          1: "#2a0845"
        }, name: "Twitch"
      },
      {
        bgcolor: "linear-gradient(rgb(67, 206, 162), rgb(24, 90, 157))", text: "", hexcolor: {
          0: "#43cea2",
          1: "#185a9d"
        }, name: "Endless River"
      },
      {
        bgcolor: "linear-gradient(rgb(170, 255, 169), rgb(17, 255, 189))", text: "", hexcolor: {
          0: "#aaffa9",
          1: "#11ffbd"
        }, name: "Teal Love"
      },
      {
        bgcolor: "linear-gradient(rgb(185, 147, 214), rgb(140, 166, 219))", text: "", hexcolor: {
          0: "#b993d6",
          1: "#8ca6db"
        }, name: "Dirty Fog"
      },
      {
        bgcolor: "linear-gradient(rgb(0, 210, 255), rgb(58, 123, 213))", text: "", hexcolor: {
          0: "#00d2ff",
          1: "#3a7bd5"
        }, name: "Reef"
      },
      {
        bgcolor: "linear-gradient(rgb(80, 201, 195), rgb(150, 222, 218))", text: "", hexcolor: {
          0: "#50c9c3",
          1: "#96deda"
        }, name: "Aqualicious"
      },
      {
        bgcolor: "linear-gradient(rgb(222, 98, 98), rgb(255, 184, 140))", text: "", hexcolor: {
          0: "#de6262",
          1: "#ffb88c"
        }, name: "A Lost Memory"
      },
      {
        bgcolor: "linear-gradient(rgb(213, 51, 105), rgb(203, 173, 109))", text: "", hexcolor: {
          0: "#d53369",
          1: "#cbad6d"
        }, name: "Blurry Beach"
      },
      {
        bgcolor: "linear-gradient(rgb(248, 87, 166), rgb(255, 88, 88))", text: "", hexcolor: {
          0: "#f857a6",
          1: "#ff5858"
        }, name: "Day Tripper"
      },
      {
        bgcolor: "linear-gradient(rgb(252, 53, 76), rgb(10, 191, 188))", text: "", hexcolor: {
          0: "#fc354c",
          1: "#0abfbc"
        }, name: "Miaka"
      },
      {
        bgcolor: "linear-gradient(rgb(192, 72, 72), rgb(72, 0, 72))", text: "", hexcolor: {
          0: "#c04848",
          1: "#480048"
        }, name: "Influenza"
      },
      {
        bgcolor: "linear-gradient(rgb(95, 44, 130), rgb(73, 160, 157))", text: "", hexcolor: {
          0: "#5f2c82",
          1: "#49a09d"
        }, name: "Calm Darya"
      },
      {
        bgcolor: "linear-gradient(rgb(237, 66, 100), rgb(255, 237, 188))", text: "", hexcolor: {
          0: "#ed4264",
          1: "#ffedbc"
        }, name: "Peach"
      },
      {
        bgcolor: "linear-gradient(rgb(28, 216, 210), rgb(147, 237, 199))", text: "", hexcolor: {
          0: "#1cd8d2",
          1: "#93edc7"
        }, name: "Sea Blizz"
      },
      {
        bgcolor: "linear-gradient(rgb(19, 78, 94), rgb(113, 178, 128))", text: "", hexcolor: {
          0: "#134e5e",
          1: "#71b280"
        }, name: "Moss"
      },
      {
        bgcolor: "linear-gradient(rgb(29, 151, 108), rgb(147, 249, 185))", text: "", hexcolor: {
          0: "#1d976c",
          1: "#93f9b9"
        }, name: "Mojito"
      },
      {
        bgcolor: "linear-gradient(rgb(235, 51, 73), rgb(244, 92, 67))", text: "", hexcolor: {
          0: "#eb3349",
          1: "#f45c43"
        }, name: "Cherry"
      },
      {
        bgcolor: "linear-gradient(rgb(255, 81, 47), rgb(221, 36, 118))", text: "", hexcolor: {
          0: "#ff512f",
          1: "#dd2476"
        }, name: "Bloody Mary"
      },
      {
        bgcolor: "linear-gradient(rgb(2, 170, 176), rgb(0, 205, 172))", text: "", hexcolor: {
          0: "#02aab0",
          1: "#00cdac"
        }, name: "Green Beach"
      }
    ];
  }


}
