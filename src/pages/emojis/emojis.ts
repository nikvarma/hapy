import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@IonicPage()
@Component({
  selector: 'page-emojis',
  templateUrl: 'emojis.html',
})
export class EmojisPage implements OnInit {
  emojiList: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmojisPage');
  }

  ngOnInit(): void {
    this.getEmojis();
  }

  selectedEmoji(emoji: string): void {
    let isEmojiSelected = (typeof emoji == null || typeof emoji == "undefined") ? false : true;
    this.viewCtrl.dismiss({ emoji: emoji, isemoji: isEmojiSelected });
  }

  getEmojis(): void {
    this.emojiList = [
      {
        "emoji": "😀",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😁",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😂",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😃",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😄",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😅",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😆",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😉",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😊",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😋",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😎",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😍",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😘",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😗",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😙",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😚",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😐",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😑",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😶",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😏",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😣",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😥",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🤐",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😯",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😪",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😫",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😴",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😌",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😛",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😜",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😝",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😒",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😓",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😔",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😕",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😲",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😖",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😞",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😟",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😤",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😢",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😭",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😦",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😧",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😨",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😩",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😬",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😰",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😱",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😳",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😵",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😡",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😠",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😷",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😇",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😈",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "👿",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "👹",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "👺",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "💀",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "👻",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "👽",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "💩",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😺",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😸",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😹",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😻",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😼",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😽",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🙀",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😿",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "😾",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🚒",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🚀",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "‍✈️",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "💋",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "👄",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "👀",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "👅",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "👎",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "👌",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "👇",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "👊",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "✋",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "💪",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🏃",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🎂",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🍧",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🍚",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🍣",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "☕️",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🍵",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🍻",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🍺",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🍹",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🍴",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🌕",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🌖",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🌗",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🌘",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🌑",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🌛",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🌜",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🌝",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🌞",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🌙",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🌚",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🌒",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🌓",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "💫",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "⭐️",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🌟",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "⛅️",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "⛄️",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "☔️",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "✨",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "💥",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "☀️",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "☄️",
        "title": "",
        "keyborad": "",
        "short-code": ""
      },
      {
        "emoji": "🌈",
        "title": "",
        "keyborad": "",
        "short-code": ""
      }
    ]
  }

}
