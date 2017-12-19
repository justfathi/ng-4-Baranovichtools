import { Injectable} from '@angular/core';
import { MatDialog } from '@angular/material';
import { MessageComponent } from '../components/message/message.component';
import { SubscriptionComponent } from '../components/subscription/subscription.component'
import { LoginComponent } from '../components/login/login.component';

@Injectable()
export class AppService {
  // scripts
  loadAPI: Promise<any>;

  constructor(private _dialog: MatDialog) {}
    public addScript(val) {
        if(val === 'share') {
             this.loadAPI = new Promise((resolve) => {
             this.loadScript('https://yastatic.net/share2/share.js');
            });
        }
    }

    public loadScript(url) {
        let node = document.createElement('script');
        node.id = 'api';
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

    public openLogin(){
       const dialogRef3 = this._dialog.open(LoginComponent)
    }
}
