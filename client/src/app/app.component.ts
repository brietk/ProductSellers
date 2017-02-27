import { Component, OnInit} from '@angular/core';
import { SellersService, Seller } from './sellers.service';

//http.cat/404

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  //private sellers: Seller[];
    private seller: Seller;

  constructor(private service : SellersService) {}

  ngOnInit() {
    
    /*var successHandler = (result) => {
      this.seller = result;
    };
    var errorHandler = (err) => {
      //TODO: Display toastr!
      alert("Something failed");
    };

    this.service.getSellerById(2).subscribe(successHandler, errorHandler);

    /*this.service.getSellers().subscribe(result => {
      this.sellers = result;
    });*/
  }
}
