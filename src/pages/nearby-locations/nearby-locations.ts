import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-nearby-locations',
  templateUrl: 'nearby-locations.html',
})
export class NearbyLocationsPage implements OnInit {
  address: any = {
    place: "",
    set: false
  };

  map: any;
  markers = [];
  placedetails: any;
  autocompleteItems: any;
  autocomplete: any;
  acService: any;
  placesService: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    
  }

  loadMap(): Promise<any> {
    return new Promise((resolve, reject) => {

    });
  }

  dismissMap(): void {
    this.viewCtrl.dismiss();
  }
  ngOnInit(): void {
    this.initMap();
    this.initPlacedetails();
    this.acService = new google.maps.places.AutocompleteService();
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
  }

  private getPlaceDetail(place_id: string): void {
    var self = this;
    var request = {
      placeId: place_id
    };
    this.placesService = new google.maps.places.PlacesService(this.map);
    this.placesService.getDetails(request, callback);
    function callback(place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        //console.log('page > getPlaceDetail > place > ', place);
        // set full address
        self.placedetails.address = place.formatted_address;
        self.placedetails.lat = place.geometry.location.lat();
        self.placedetails.lng = place.geometry.location.lng();
        for (var i = 0; i < place.address_components.length; i++) {
          let addressType = place.address_components[i].types[0];
          let values = {
            short_name: place.address_components[i]['short_name'],
            long_name: place.address_components[i]['long_name']
          }
          if (self.placedetails.components[addressType]) {
            self.placedetails.components[addressType].set = true;
            self.placedetails.components[addressType].short = place.address_components[i]['short_name'];
            self.placedetails.components[addressType].long = place.address_components[i]['long_name'];
          }
        }
        // set place in map
        self.map.setCenter(place.geometry.location);
        self.createMapMarker(place);
        // populate
        self.address.set = true;
        //console.log('page > getPlaceDetail > details > ', self.placedetails);
      } else {
        //console.log('page > getPlaceDetail > status > ', status);
      }
    }
  }

  private initMap() {
    var point = { lat: -34.603684, lng: -58.381559 };
    let divMap = (<HTMLInputElement>document.getElementById('map_canvas'));
    this.map = new google.maps.Map(divMap, {
      center: point,
      zoom: 15,
      disableDefaultUI: true,
      draggable: true,
      zoomControl: true
    });
  }

  private createMapMarker(place: any): void {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: this.map,
      position: placeLoc
    });
    this.markers.push(marker);
  }

  private initPlacedetails() {
    this.placedetails = {
      address: '',
      lat: '',
      lng: '',
      components: {
        route: { set: false, short: '', long: '' },                           // calle 
        street_number: { set: false, short: '', long: '' },                   // numero
        sublocality_level_1: { set: false, short: '', long: '' },             // barrio
        locality: { set: false, short: '', long: '' },                        // localidad, ciudad
        administrative_area_level_2: { set: false, short: '', long: '' },     // zona/comuna/partido 
        administrative_area_level_1: { set: false, short: '', long: '' },     // estado/provincia 
        country: { set: false, short: '', long: '' },                         // pais
        postal_code: { set: false, short: '', long: '' },                     // codigo postal
        postal_code_suffix: { set: false, short: '', long: '' },              // codigo postal - sufijo
      }
    };
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  chooseItem(item: any) {
    //console.log('modal > chooseItem > item > ', item);
    this.viewCtrl.dismiss(item);
}

  updateSearch() {
    //console.log('modal > updateSearch');
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let self = this;
    let config = {
      types: ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
      input: this.autocomplete.query
    }
    
    this.acService.getPlacePredictions(config, (predictions, status) => {
      //console.log('modal > getPlacePredictions > status > ', status);
      self.autocompleteItems = [];

      if (predictions) {
        predictions.forEach(function (prediction) {
          self.autocompleteItems.push(prediction);
        });
      }
    });
  }


  getDistanceBetweenPoints(start, end, units) {

    let earthRadius = {
      miles: 3958.8,
      km: 6371
    };

    let R = earthRadius[units || 'miles'];
    let lat1 = start.lat;
    let lon1 = start.lng;
    let lat2 = end.lat;
    let lon2 = end.lng;

    let dLat = this.toRad((lat2 - lat1));
    let dLon = this.toRad((lon2 - lon1));
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;

    return d;

  }

  toRad(x) {
    return x * Math.PI / 180;
  }

}
