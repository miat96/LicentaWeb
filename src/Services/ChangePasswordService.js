import Cookies from 'universal-cookie';
import { Base64 } from 'js-base64';
import fetch from 'isomorphic-fetch';
import FormData from 'form-data';

export class ChangePasswordService{

    static change(username, password){
        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        let data = {
            method: 'POST',
            body: formData,
        }

        return new Promise((resolve, reject) => {
            fetch("http://localhost/licenta/changePassword.php", data)
            .then((result) => {resolve(result)})
            .catch((error) => {reject(error)})
        });
    }
    
}