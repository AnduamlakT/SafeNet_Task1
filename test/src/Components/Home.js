import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker, Polyline } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%'
};

class Home extends Component {

    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {

        const pathCoordinates = [
            { lat: 9.005401, lng: 38.763611 },
            { lat: 11.572076, lng: 43.145645 }
        ];

        return (

            <Map
                google={this.props.google}
                zoom={7}
                style={mapStyles}
                initialCenter={{
                    lat: 9.005401,
                    lng: 38.763611
                }}
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Addis Ababa, Ethiopia'}
                />

                <Polyline
                    path={pathCoordinates}
                    geodesic={true}
                    options={{
                        strokeColor: "#ff2527",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                        icons: [
                            {
                                
                                offset: "0",
                                repeat: "20px"
                            }
                        ]
                    }}
                />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>

        );

    }

}

export default GoogleApiWrapper(
    (props) => ({
        apiKey: props.apiKey
    })
)(Home);