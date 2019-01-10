// import PropTypes from "prop-types";
import React from "react";
// import ReactGoogleMapLoader from "react-google-maps-loader";
// import ReactGooglePlacesSuggest from "react-google-places-suggest";
// import withAuthorization from './withAuthorization';
// import {Router, Route, Link} from "react-router-dom";
// import { MapsRestaurant } from "material-ui/svg-icons";
// import restaurant from "material-ui/svg-icons/maps/restaurant";
import Autocomplete from 'react-google-autocomplete';

const PlacePage = () =>
    <div>
        
        <Autocomplete
                style={{width: '90%'}}
                onPlaceSelected={(place) => {
                console.log(place);
                }}
                types={['establishment']}
                componentRestrictions={{country: "us"}}
            />
    </div>

// const authCondition = (authUser) => !!authUser;
// const API_KEY = "AIzaSyAezRNZzJM_m9IMXXYH659yUlWT6Zk97Rs"

// const state = {
//     search: "",
//     value: "",
// }

// class Place extends React.Component {
    
    
    
//     constructor(props) {
//         super(props);
//         this.state = {...state};
//      }
  
//      updateData(data) {
//         this.setState({ data });
//      }
    
    

//     handleInputChange(e) {
//         this.setState({ search: e.target.value, value: e.target.value })
//     }

//     handleSelectSuggest(suggest) {
//         console.log(suggest)
//         console.log(suggest.geometry.location.lat)
//         console.log(suggest.types)

//         this.setState({ search: "", value: suggest.formatted_address })
//     }

    

//     render() {
//         const { search, value } = this.state
//         return (
//             <ReactGoogleMapLoader
//                 params={{
//                     key: API_KEY,
//                     libraries: "places, geometry",
//                 }}
//                 render={googleMaps =>
//                     googleMaps && (
//                         <div>
//                             <ReactGooglePlacesSuggest
//                                 autocompletionRequest={{ input: search,}}
//                                 googleMaps={googleMaps}
//                                 onSelectSuggest={this.handleSelectSuggest.bind(this)}
//                             >
//                                 <input
//                                     type="text"
//                                     value={value}
//                                     placeholder="Search a location"
//                                     onChange={this.handleInputChange.bind(this)}
//                                     //onChange={e => this.state.setState({ field: e.target.value })}
//                                 />
//                                 <button to="/Home">Go to Results</button>
                                    
//                             </ReactGooglePlacesSuggest>
//                         </div>
//                     )
//                 }
//             />

            
//         )
//     }
// }

// // PlacePage.propTypes = {
// //     googleMaps: PropTypes.object,
// // }

export default (PlacePage);