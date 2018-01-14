import { Injectable } from '@angular/core';
import { ItemSliding } from 'ionic-angular/components/item/item-sliding';
import { FabContainer, LoadingController } from 'ionic-angular';

@Injectable()
export class ComponentactionsProvider {

  constructor(private loadingCtrl: LoadingController) {
    console.log('Hello ComponentactionsProvider Provider');
  }

  slidingClose(slidingItem: ItemSliding): Promise<boolean> {
    return new Promise((resolve, reject) => {
      slidingItem.close();
      resolve(true);
    });
  }

  fabClose(fab: FabContainer): Promise<boolean> {
    return new Promise((resolve, reject) => {
      fab.close();
      resolve(true);
    });
  }

  presentLoadingDefault(): any {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    return loading;
  }

  loadingDismiss(loading: any) {
    loading.dismiss();
  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
        </div>`,
      duration: 5000
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

    loading.present();
  }

  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading Please Wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  doRefresh(refresher): any {
    console.log('Begin async operation');
    return refresher;
  }

  doRefreshComplete(refresher: any): void {
    refresher.complete();
  }
  
  doInfiniteComplete(infiniteScroll): void {
    infiniteScroll.complete();
  }
}
