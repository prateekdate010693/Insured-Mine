import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  card = [
    {
      "img" : "../../assets/img/undraw_fast_loading_0lbh.png",
      "title" : "Track Progress on Leaderboard",
      "content" : "Set and track goals for your agents and view their progress on your leaderboard. See sales data like deals won (and lost), deal value, and renewable revenue."
    },
    {
      "img" : "../../assets/img/undraw_personal_goals_edgd.png",
      "title" : "Boost Team Energy",
      "content" : "Accomplishing your goals supercharges your team atmosphere. Boost your team’s energy by keeping everyone on the same page for what needs to be done to accomplish your team’s goals."
    },
    {
      "img" : "../../assets/img/undraw_steps_ngvm.png",
      "title" : "Customized KPIs",
      "content" : "View all your customized KPIs in one chart that shows deals won vs target revenue. See individual revenue generation for each of your agents so you know who is crushing it and who needs some extra help."
    },
    {
      "img" : "../../assets/img/undraw_team_goals_hrii.png",
      "title" : "Goal Performance",
      "content" : "Both you and your agents can review goal performance with My Goals inside the InsuredMine CRM. Track performance for sales, new customer onboarding, and renewables. Easily view your team’s performance from your dashboard."
    },
    {
      "img" : "../../assets/img/10.png",
      "title" : "Close Deals on Time",
      "content" : "Close deals on time through activity tracking in the InsuredMine CRM. "
    },
    {
      "img" : "../../assets/img/11.png",
      "title" : "Meet Customer Needs",
      "content" : "Store, track, and analyze your customer needs so you know the right products to offer at the right times."
    },
    {
      "img" : "../../assets/img/12.png",
      "title" : "Effective Cross-Selling",
      "content" : "An effective cross-selling strategy is rooted in what you do best – customer service. Keep track of vital customer information like insurance needs and finances inside the InsuredMine CRM."
    },
    {
      "img" : "../../assets/img/13.png",
      "title" : "Win More Deals Back",
      "content" : "Win back lost deals or lost customers with sales automation solutions like email and mobile texts. Automatically assign your CSRs and agents follow up tasks like gentle nudging campaigns."
    },
    {
      "img" : "../../assets/img/14.png",
      "title" : "Manage Renewals",
      "content" : "Access all your renewal information on one screen. Scan for revenue opportunities for policies ending in 30, 60, or 90 days or whatever parameters work best for you."
    }
  ]  
}
