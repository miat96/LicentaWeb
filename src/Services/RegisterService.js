import fetch from 'isomorphic-fetch';
import FormData from 'form-data';

export class RegisterService{
    
    static register(username, password, token){
        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('token', token);

        let data = {
            method: 'POST',
            body: formData,
        }

        return new Promise((resolve, reject) => {
            fetch("http://localhost/licenta/register.php", data)
            .then((result) => {resolve(result)})
            .catch((error) => {reject(error)})
        });
    }

}