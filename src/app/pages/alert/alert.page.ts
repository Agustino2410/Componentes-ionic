import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Press OK');
          }
        },
        {
          text: 'Cancel',
          cssClass: 'rojo',
          role: 'cancel'
        }
      ],
    });
    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Prompt',
      backdropDismiss: false,
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Nombre',
        },
        {
          name: 'name2',
          id: 'named-id',
          type: 'text',
          placeholder: 'Nombre 2',
        },
      ],
      buttons: [
        {
          text: 'Ok'
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
        }
      ]
    });
    await alert.present();
  }
}
