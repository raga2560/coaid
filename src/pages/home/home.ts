import { Component } from "@angular/core";
import { NavController, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login-page/login-page';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {

  todos: any;
  loading: any;
  relationship : string = 'news';

   items = [
    {
      imageUrl: 'assets/img/lists/stadium.jpg',
      title: 'First Cup',
      place: 'Madison Square',
      date: '05/06/2016'
    },
    {
      imageUrl: 'assets/img/lists/stadium-3.png',
      title: 'Season',
      place: 'Hooli',
      date: '15/03/2016'
    },
    {
      imageUrl: 'assets/img/lists/stadium-2.jpg',
      title: '2nd Season',
      place: 'Castelão',
      date: '05/12/2015'
    },
  ];


  constructor(public navCtrl: NavController,  public modalCtrl: ModalController, 
    public alertCtrl: AlertController, public authService: Auth, public loadingCtrl: LoadingController) {

  }
/*
  ionViewDidLoad(){

    this.todoService.getTodos().then((data) => {
		  this.todos = data;
    }, (err) => {
    	console.log("not allowed");
    });

  }

  loadTodos(){

  }
  
  delete(item) {
    alert('Deleted ' + item.title);
  }

  viewComments(item) {
    alert('Viewing comments of ' + item.title);
  }

  viewPlayers(item) {
    alert('Viewing players of ' + item.title);
  }


  addTodo(){

    let prompt = this.alertCtrl.create({
      title: 'Add Todo',
      message: 'Describe your todo below:',
      inputs: [
        {
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: todo => {

      			if(todo){

              this.showLoader();

      				this.todoService.createTodo(todo).then((result) => {
                this.loading.dismiss();
                this.todos = result;
      					console.log("todo created");
      				}, (err) => {
                this.loading.dismiss();
      					console.log("not allowed");
      				});

      			}


          }
        }
      ]
    });

    prompt.present();

  }

  deleteTodo(todo){

    this.showLoader();

    //Remove from database
    this.todoService.deleteTodo(todo._id).then((result) => {

      this.loading.dismiss();

      //Remove locally
  		let index = this.todos.indexOf(todo);

  		if(index > -1){
  			this.todos.splice(index, 1);
  		}   

    }, (err) => {
      this.loading.dismiss();
    	console.log("not allowed");
    });
  }

  showLoader(){

    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();

  }
 */

  logout(){
    
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);

  }

}
