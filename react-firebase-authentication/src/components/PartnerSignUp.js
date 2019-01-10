// import PropTypes from "prop-types";
import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';
//import { FirestoreProvider } from "@react-firebase/firestore";
import firebase from 'firebase';
import * as routes from '../constants/routes';
import { auth } from '../firebase';
import { Link,
    withRouter,
} from 'react-router-dom';
// import ReactGoogleMapLoader from "react-google-maps-loader";
// import ReactGooglePlacesSuggest from "react-google-places-suggest";
import Autocomplete from "react-google-autocomplete";


const PartnerSignUpPage = ({ history }) => 
        <div>
            <PartnerSignUp history={history}/>
        </div>


const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const settings = {timestampsInSnapshots: true};

var config = {
    databaseURL: "https://freeload-9a0e3.firebaseio.com/",
    projectId: "freeload-9a0e3",
    apiKey: "AIzaSyBou3FEdCKImwQ6PAdkQpe4G9kQkigVgWw",
    //authDomain: "https://accounts.google.com/o/oauth2/auth",
    storageBucket: '',
  messagingSenderId: "AIzaSyCVPu5Z1T_JwIY9ZaNdHknH5LOdSG7ia1c",
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

firebase.firestore().settings(settings);



const INITIAL_STATE = {
    id : '',
    email : '',
    title : '',
    passwordOne : '',
    address : '',
    placeId : '',
    priceLevel : '',
    ratings : '',
    location : '',
    phone_number : '',
    first_name : '',
    last_name : '',
    photoUrl : '',
    stripe_id : '',
    notificationType : '',
    periods : '',
    googlePhotos : '',
    error: null,
};


class PartnerSignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
      }

    getStripeId(url) {
        return axios.post(url)
            .then(response => {
                this.response = response.data;
                //console.log(this.response);
                return this.response;
            })
    }

    getGoogleObj(google_url){
        return axios.get(google_url)
            .then(response =>{
                this.response = response.geometry.location;
                console.log(this.response);
                return this.response;
            })
    }

    // writeUserData(email,fname,lname){
    //     firebase.database().ref('host_test').push({
    //         email,
    //         fname,
    //         lname
    //     }).then((data)=>{
    //         //success callback
    //         console.log('data ' , data)
    //     }).catch((error)=>{
    //         //error callback
    //         console.log('error ' , error)
    //     })
    // }

    insertUserData(id, email, title, address, placeId, priceLevel, ratings, location, phone_number, first_name, last_name, photoUrl, stripe_id, notificationType, periods, googlePhotos){
        firebase.firestore().collection('host_test').add({
            id,
            email,
            title,
            address,
            placeId,
            priceLevel,
            ratings,
            location,
            phone_number,
            first_name,
            last_name,
            photoUrl,
            stripe_id,
            notificationType,
            periods,
            googlePhotos
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }

    // async go(url, email, title, passwordOne, address, placeId, priceLevel, ratings, latitude,longitude, phone_number, first_name, last_name, photoUrl, periods, googlePhotos) {
    //     let auth_response = await fetch(auth.doCreateUserWithEmailAndPassword(email, passwordOne));
    //     let id = await auth_response.uid;
    //     console.log(id);
    //     let stripe_response = await fetch(this.getStripeId(url));
    //     let stripeid = await stripe_response.stripe_id;
    //     console.log(stripeid);
    //     let geo = new firebase.firestore.GeoPoint(latitude, longitude);
    //     this.insertUserData(id, email, title, address, placeId, priceLevel, ratings, geo, phone_number, first_name, last_name, photoUrl, stripeid, 1, periods, googlePhotos);
        
    //   }

    // handleInputChange(e) {
    //     this.setState({ search: e.target.value, value: e.target.value })
    // }

    // handleSelectSuggest(suggest) {
    //     console.log(suggest)
    //     console.log(suggest.geometry.location.lat)
    //     console.log(suggest.types)

    //     this.setState({ address: "", value: suggest.formatted_address })
    //     for(let i = 0; i < suggest.types.length; i++)
    //     {
    //         if(suggest.types[i] === "food" || suggest.types[i] === "cafe" || suggest.types[i] === "restaurant")
    //         {
    //             return 1;
    //         }
    //     }
    // }

    onSubmit = (event) => {
        const {
            id,
            email,
            title,
            passwordOne,
            address,
            placeId,
            priceLevel,
            ratings,
            latitude,
            longitude,
            phone_number,
            first_name,
            last_name,
            photoUrl,
            stripeid,
            notificationType,
            periods,
            googlePhotos
        } = this.state;

        const {
            history,
        } = this.props;

        
        let input_url = window.location.href;
        let params = queryString.parse(input_url);
        let url = 'https://us-central1-freeload-9a0e3.cloudfunctions.net/onboardHost/?scope=read_write&code=' + params.code;
        
        let google_url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + placeId + '&key=' + 'AIzaSyDr4AVCVtA7YN0C6JQQdFOrC0CxqfqLo3I';
        // this.writeUserData(email, first_name, last_name);

        // firebase.database().ref('host_test/').once('value', function (snapshot) {
        //     console.log(snapshot.val())
        // });
        
        //this.insertUserData(email, first_name, last_name);
        // let dbCon = this.props.db.database().ref('host_test');
        // console.log(dbCon);
        // dbCon.push({
        //             email,
        //             passwordOne,
        //             address,
        //             phone_number,
        //             first_name,
        //             last_name,
        //             //stripe_id: stripeid,
        //         }).then((data)=>{
        //             //success callback
        //             console.log('data ' , data)
        //         }).catch((error)=>{
        //             //error callback
        //             console.log('error ' , error)
        //         })
            
       
        // this.componentDidMount(
        //     url,
        //     email,
        //     title,
        //     passwordOne,
        //     address,
        //     placeId,
        //     priceLevel,
        //     ratings,
        //     latitude,
        //     longitude,
        //     phone_number,
        //     first_name,
        //     last_name,
        //     photoUrl,
        //     periods,
        //     googlePhotos);

        // this.getGoogleObj(google_url);

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                // history.push(routes.HOME);
                console.log(authUser);
                this.getStripeId(url).then(data => {
                    console.log(data.stripe_id);
                    // stripeid = data.stripe_id;
                    // id = authUser.uid;
                    this.getGoogleObj(google_url).then(geoObj => {

                        let geo = new firebase.firestore.GeoPoint(geoObj.lat, geoObj.lng);
                        console.log(data.stripe_id);
                        console.log(geo);
                        this.insertUserData(authUser.uid, email, title, address, placeId, priceLevel, ratings, geo, phone_number, first_name, last_name, photoUrl, data.stripe_id, notificationType, periods, googlePhotos);

                    })
                    
                })
                .catch(error => {
                        this.setState(byPropKey('error', error));
                });

            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });



        event.preventDefault();
    }


    render() {
        // url is 'https://www.example.com/user?id=123&type=4';


        // let input_url = window.location.href;
        // let params = queryString.parse(input_url);
        // let url = 'https://us-central1-freeload-9a0e3.cloudfunctions.net/onboardHost/?scope=read_write&code=' + params.code;
        
        // this.getStripeId(url).then(data => {
        //     console.log(data.stripe_id);
        //     stripeid = data.stripe_id;
        //     console.log(stripeid);
        //     //this.insertUserData(email, passwordOne, address, phone_number, first_name, last_name, stripeid);
        // })
        // .catch(error => {
        //         this.setState(byPropKey('error', error));
        // });

        // const {
        //     email,
        //     passwordOne,
        //     passwordTwo,
        //     address,
        //     phone_number,
        //     first_name,
        //     last_name,
        //     error,
        // } = this.state;

        const {
            id,
            email,
            title,
            passwordOne,
            passwordTwo,
            address,
            placeId,
            priceLevel,
            ratings,
            latitude,
            longitude,
            phone_number,
            first_name,
            last_name,
            photoUrl,
            stripe_id,
            notificationType,
            periods,
            googlePhotos,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            address === '' ||
            phone_number === '' ||
            first_name === '' ||
            last_name === '';
        // axios({
        //     method: 'post',
        //     url: url,

        //   }).then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        // let stripeid = this.getStripeId(url);
        // console.log("stripeid");

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    value={passwordOne}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="Password"
                />
                <input
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm Password"
                />
                {/* <input
                    value={address}
                    onChange={event => this.setState(byPropKey('address', event.target.value))}
                    type="text"
                    placeholder="Address"
                /> */}
                <input
                    value={phone_number}
                    onChange={event => this.setState(byPropKey('phone_number', event.target.value))}
                    type="text"
                    placeholder="Phone Number"
                />
                <input
                    value={first_name}
                    onChange={event => this.setState(byPropKey('first_name', event.target.value))}
                    type="text"
                    placeholder="First Name"
                />
                <input
                    value={last_name}
                    onChange={event => this.setState(byPropKey('last_name', event.target.value))}
                    type="text"
                    placeholder="Last Name"
                />


                <Autocomplete
                    style={{width: '90%'}}
                    onPlaceSelected={(place) => {
                    console.log(place);
                    this.setState(byPropKey('address', place.formatted_address))
                    this.setState(byPropKey('title', place.name))
                    this.setState(byPropKey('placeId', place.place_id))
                    this.setState(byPropKey('priceLevel', place.price_level))
                    this.setState(byPropKey('ratings', place.rating))
                    this.setState(byPropKey('latitude', place.geometry.location.lat))
                    this.setState(byPropKey('longitude', place.geometry.location.lng))
                    this.setState(byPropKey('photoUrl', place.photos[0]))
                    this.setState(byPropKey('periods', place.opening_hours.periods))
                    this.setState(byPropKey('googlePhotos', place.photos))
                    }}
                    // onChange={event => this.setState(byPropKey('address', event.target.value))}
                    types={['establishment']}
                    componentRestrictions={{country: "us"}}
                />

                {/* <ReactGoogleMapLoader
                params={{
                    key: API_KEY,
                    libraries: "places, geocode, establisment",
                }}
                render={googleMaps =>
                    googleMaps && (
                        <div>
                            <ReactGooglePlacesSuggest
                                autocompletionRequest={{ input: address,}}
                                googleMaps={googleMaps}
                                types={['restaurant']}
                                onSelectSuggest={this.handleSelectSuggest.bind(this)}
                            >
                                <input
                                    type="text"
                                    value={value}
                                    placeholder="Address"
                                    onChange={event => this.setState({ address: event.target.value, value: event.target.value })}
                                    //onChange={e => this.state.setState({ field: e.target.value })}
                                />  
                            </ReactGooglePlacesSuggest>
                        </div>
                    )
                }
            /> */}
                <button disabled={isInvalid} type="submit">
                    Sign Up
                </button>
                {error && <p>{error.message}</p>}
                
            </form>
            
        );


    }

}
export default withRouter(PartnerSignUpPage);