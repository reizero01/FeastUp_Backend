import PropTypes from "prop-types";
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
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGooglePlacesSuggest from "react-google-places-suggest";


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
    email: '',
    password: '',
    address: '',
    phone_number: '',
    first_name: '',
    last_name: '',
    error: null,
};

const API_KEY = "AIzaSyAezRNZzJM_m9IMXXYH659yUlWT6Zk97Rs";

class PartnerSignUp extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
        //firebase.initializeApp(firebase.config);
        // this.handleSort = this.handleSort.bind(this);
        // this.handleOrder = this.handleOrder.bind(this);
      }

    getStripeId(url) {
        return axios.post(url)
            .then(response => {
                this.response = response.data;
                //console.log(this.response);
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

    insertUserData(email, password, address, phone_number, first_name, last_name, stripe_id){
        firebase.firestore().collection('host_test').add({
            email,
            password,
            address,
            phone_number,
            first_name,
            last_name,
            stripe_id
        }).then((data)=>{
            //success callback
            console.log('data ' , data)
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }

    // handleInputChange(e) {
    //     this.setState({ search: e.target.value, value: e.target.value })
    // }

    handleSelectSuggest(suggest) {
        console.log(suggest)
        console.log(suggest.geometry.location.lat)
        console.log(suggest.types)

        this.setState({ address: "", value: suggest.formatted_address })
        for(let i = 0; i < suggest.types.length; i++)
        {
            if(suggest.types[i] === "food" || suggest.types[i] === "cafe" || suggest.types[i] === "restaurant")
            {
                return 1;
            }
        }
    }

    onSubmit = (event) => {
        const {
            email,
            passwordOne,
            address,
            phone_number,
            first_name,
            last_name,
            //stripe_id,
        } = this.state;

        const {
            history,
        } = this.props;

        let stripeid = '';
        let input_url = window.location.href;
        let params = queryString.parse(input_url);
        let url = 'https://us-central1-freeload-9a0e3.cloudfunctions.net/onboardHost/?scope=read_write&code=' + params.code;
        
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
            
        


        this.getStripeId(url).then(data => {
            console.log(data.stripe_id);
            stripeid = data.stripe_id;
            console.log(stripeid);
            this.insertUserData(email, passwordOne, address, phone_number, first_name, last_name, stripeid);
        })
        .catch(error => {
                this.setState(byPropKey('error', error));
        });

        // auth.doCreateUserWithEmailAndPassword(email, passwordOne)
        //     .then(authUser => {
        //         this.setState({ ...INITIAL_STATE });
        //         history.push(routes.HOME);
        //     })
        //     .catch(error => {
        //         this.setState(byPropKey('error', error));
        //     });

        event.preventDefault();
    }


    render() {
        // url is 'https://www.example.com/user?id=123&type=4';


        // let stripeid = '';
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

        const {
            email,
            passwordOne,
            passwordTwo,
            address,
            phone_number,
            first_name,
            last_name,
            error,
            value,
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
                <ReactGoogleMapLoader
                params={{
                    key: API_KEY,
                    libraries: "places, geometry",
                }}
                render={googleMaps =>
                    googleMaps && (
                        <div>
                            <ReactGooglePlacesSuggest
                                autocompletionRequest={{ input: address,}}
                                googleMaps={googleMaps}
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
            />
                <button disabled={isInvalid} type="submit">
                    Sign Up
                </button>
                {error && <p>{error.message}</p>}
                
            </form>
            
        );


    }

}
export default withRouter(PartnerSignUpPage);