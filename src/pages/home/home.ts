import { Leader } from './../../shared/leader';
import { Promotion } from './../../shared/promotion';
import { Dish } from './../../shared/dish';
import { LeaderProvider } from './../../providers/leader/leader';
import { PromotionProvider } from './../../providers/promotion/promotion';
import { DishProvider } from './../../providers/dish/dish';
import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMess: string;
  promoErrMess: string;
  leaderErrMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private dishservice: DishProvider,
    private promotionservice: PromotionProvider,
    private leaderservice: LeaderProvider,
    @Inject('BaseURL') public BaseURL) {
  }

  ngOnInit(): void {
    this.dishservice.getFeaturedDish()
      .subscribe(dish => this.dish = dish, errmess => this.dishErrMess = errmess);
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion,
      errmess => this.promoErrMess = <any>errmess);
    this.leaderservice.getFeaturedLeader()
      .subscribe(leader => this.leader = leader,
      errmess => this.leaderErrMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
