import { Dish } from './../../shared/dish';
import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage implements OnInit {

  dish:Dish;
  errMess: string;
  avgstars: string;
  numcomments: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              @Inject("BaseURL") public BaseURL) {
    this.dish = navParams.get("dish");
    this.avgstars = this.calculateAvgRatings(this.dish).toFixed(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

  ngOnInit() {

  }
  
  private calculateAvgRatings(dish: Dish): number {
    let totalRatings = dish.comments.map(comment => comment.rating)
                        .reduce((accu, current) => accu+current, 0);
    let numRatings = this.dish.comments.length;
    return (totalRatings/numRatings);
  }
}
