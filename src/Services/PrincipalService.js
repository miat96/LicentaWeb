import fetch from 'isomorphic-fetch';
import FormData from 'form-data';

export class PrincipalService{

    static getPhoneLocation(token){
        let formData = new FormData();
        formData.append('token', token);

        let data = {
            method: 'POST',
            body: formData,
        }

        return new Promise((resolve, reject) => {
            fetch("http://localhost/licenta/getLocation.php", data)
            .then((result) => {resolve(result)})
            .catch((error) => {reject(error)})
        });
    }


    static getPhotos(token){
        let formData = new FormData();
        formData.append('token', token);

        let data = {
            method: 'POST',
            body: formData,
        }

        return new Promise((resolve, reject) => {
            fetch("http://localhost/licenta/getPhotos.php", data)
            .then((result) => {resolve(result)})
            .catch((error) => {reject(error)})
        });
    }

}