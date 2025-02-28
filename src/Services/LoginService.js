import Cookies from 'universal-cookie';
import { Base64 } from 'js-base64';
import fetch from 'isomorphic-fetch';
import FormData from 'form-data';

export class LoginService{
    static cookies = new Cookies();

    static getId() {
        let data = this.cookies.get('TOKEN');

        if (data === undefined) {
            return "";
        }

        let token = Base64.decode(data).split(',');
        this.id = token[0];
        return this.id;
    }

    static setData(id) {
        this.cookies.set('TOKEN', Base64.encode(id));
    }

    static login(username, password){
        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        let data = {
            method: 'POST',
            body: formData,
        }

        return new Promise((resolve, reject) => {
            fetch("http://localhost/licenta/login.php", data)
            .then((result) => {resolve(result)})
            .catch((error) => {reject(error)})
        });
    }




    static logout() {
        this.cookies.remove('TOKEN');
    }
}