export class LocationService{
    
    static getMyLocation(){
        const location = window.navigator && window.navigator.geolocation;
      
        if (location) {
            location.getCurrentPosition((position) => {
                var location = {};
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                location = {lat, long};
                console.log(location)
                return {latitude: lat, longitude:long};
            }, (error) => {
                return null;
            })
        }
    }
}