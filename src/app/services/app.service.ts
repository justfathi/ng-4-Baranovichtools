import { Injectable} from '@angular/core';
// import { Subject } from 'rxjs/Subject';
// import { AngularFireDatabase  } from 'angularfire2/database';
import { MdDialog } from '@angular/material';
import { MessageComponent } from '../components/message/message.component';
import { SubscriptionComponent } from '../components/subscription/subscription.component'

@Injectable()
export class AppService {
  // scripts
  loadAPI: Promise<any>;

  constructor(
    //private db: AngularFireDatabase, 
    private _dialog: MdDialog) {}

    public onClickAddScript(val) {
        if(val === 'news') {
             this.loadAPI = new Promise((resolve) => {
             this.loadScript('assets/fetchnews.js');
            });
        }
        if(val === 'map') {
             this.loadAPI = new Promise((resolve) => {
             this.loadScript('assets/map.js');
            });
        }
    }

    public loadScript(url) {
        console.log('preparing to load...');
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        node.async = true;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
    }

    // dialogs 
    public openMessage() {
      const dialogRef = this._dialog.open(MessageComponent);
    }

     public openSubscription() {
      const dialogRef2 = this._dialog.open(SubscriptionComponent);
    }

}
