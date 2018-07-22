import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
  items = [
    {
      name: 'Document verification and signing on blockchain ',
      description: 'Document verification, can be verified on web or mobile applications. The documents can be signed on web or mobile. The data related to verification and signing is stored in blockchain, which is non tamperable, persistant. The technology available in firebase, node.js backend',
      imageUrl: ''
    },
    {
      name: 'Mobile Wallet with minimum server. ',
      description: 'Mobile wallet, that can be rented, subscribed. Compare with paypal fees of 4% to 6%, the fees is similar. Salient feature is the user can transact from wallet directly from blockchain. No lockup with service provider',
      imageUrl: ''
    },
    {
      name: 'Mobile Wallet Service. ',
      description: 'Mobile wallet service solution, that can be rented or sold, with minimum server. The business model is the service fees of 2 to 6% for every transaction. Salient feature is the user can transact from wallet directly from blockchain.',
      imageUrl: ''
    },
    {
      name: 'Mobile Crypto Wallet type-1. ',
      description: 'Mobile wallet that stores your investment directly in blockchain. You will be able to create a password protected locking for crypto in blockchain. This can be accessed only by your password. Even the company providing this wallet cannot withdraw the funds in this wallet. The user needs to subscribe to use this service. This is a one time spendable wallet, but verifiable. A recovery wallet in another mobile can be created just for recovery after due verification.',
      imageUrl: ''
    },
    {
      name: 'Mobile Crypto Wallet type-2. ',
      description: 'Mobile wallet that stores your investment directly in blockchain. You will be able to create a password protected locking for crypto in blockchain. This can be accessed only by a password and signature. Even the company providing this wallet cannot withdraw the funds in this wallet. The user needs to subscribe to use this service. This is a multi time spendable wallet. A recovery wallet in another mobile can be created just for recovery after due verification.',
      imageUrl: ''
    }
  ];

// Type-1, will use composite-key,  only holder can spend. Some data may be provided in email, that can be used/verfied in another wallet. Wallet provider may also hold a "provider-key". This may be required for redeeming.

// Type-2, will use composite-key with probably multi-signature, any one can spend. Wallet provider may also hold a "provider-key". This may be needed for redeeming.

  constructor(public navCtrl: NavController) { }

}

