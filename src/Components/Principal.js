import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faUser } from '@fortawesome/fontawesome-free-solid'
import {LoginService} from '../Services/LoginService.js'
import {PrincipalService} from '../Services/PrincipalService.js'
import ReactBnbGallery from 'react-bnb-gallery'
import "../CSS/Principal.css";

const UserReactComponent = props => <div><FontAwesomeIcon icon={faUser} size="2x" color="#990000"/></div>;

const PhoneReactComponent = props => <div><FontAwesomeIcon icon={faMobileAlt} size="2x" color="#990000"/></div>;

export class Principal extends React.Component{
    static defaultProps = {
        zoom: 15
      };

    constructor(props){
        super(props);
        
        this.state = {
          center: {
            lat: 46.7667,
            lng: 23.6,
          },
          myLatitude: '',
          myLongitude: '',
          phoneLatitude: '',
          phoneLongitude: '',
          findThePhone: false,
          token: LoginService.getId(),
          galleryOpened: false,
          photos: [],
        }
        this.setPhoneLocation = this.setPhoneLocation.bind(this);
        this.loadPhotos = this.loadPhotos.bind(this);

        this.toggleGallery = this.toggleGallery.bind(this);
    }

    loadPhotos(){
      PrincipalService.getPhotos(this.state.token).then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        for(const res of responseJson){
          console.log(res);
          const photo = "data:image/jpeg;base64," + res;
          var newArray = this.state.photos.slice();    
          newArray.push(photo);   
          this.setState({photos : newArray})
        }
        //this.setState({photos : responseJson});
      }, (error) => {
        console.log(error.message);
      })
    }

    toggleGallery() {
      this.setState(prevState => ({
        galleryOpened: !prevState.galleryOpened
      }));
    }

    tick() {
      this.setMyLocation();
    }

    setMyLocation(){
      const location = window.navigator && window.navigator.geolocation;
      if (location) {
        location.getCurrentPosition((position) => {
          this.setState({myLatitude: position.coords.latitude});
          this.setState({myLongitude: position.coords.longitude});
        })
      }
    }

    componentDidMount() {
      this.setMyLocation();
      this.loadPhotos();
      this.interval = setInterval(() => this.tick(), 20000);
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    setPhoneLocation(){
      console.log(this.state.token);
      setInterval(() => {
        PrincipalService.getPhoneLocation(this.state.token).then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({phoneLatitude : responseJson.latitude});
          this.setState({phoneLongitude: responseJson.longitude});
        });
      }, 10000)
    }

    handleSubmit = event => {
      event.preventDefault();
      console.log("handleSubmit")
      this.setPhoneLocation();
    }
      render() {
        return (
            <div className="Principal">
              <div className="principal-container">
                <form onSubmit={this.handleSubmit}>
                    <Button
                      block
                      //disabled={!this.validateForm()}
                      type="submit"
                    >
                      Get Location
                    </Button>
                </form>

                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyAnGL0048HDdUqUMoxmXvSnNXGRArcgGS0' }}
                  defaultCenter={this.state.center}
                  defaultZoom={this.props.zoom}
                >
              
                  <UserReactComponent
                    lat={this.state.myLatitude}
                    lng={this.state.myLongitude}
                  />

                  <PhoneReactComponent
                    lat={this.state.phoneLatitude}
                    lng={this.state.phoneLongitude}
                  />

                </GoogleMapReact>

                <button onClick={this.toggleGallery}>Open photo gallery</button>
                <ReactBnbGallery
                  show={this.state.galleryOpened}
                  photos={this.state.photos}
                  onClose={this.toggleGallery} />
                
              </div>
            </div>
        );
      }
}
