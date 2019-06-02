import Cookies from 'universal-cookie';
import { Base64 } from 'js-base64';
import fetch from 'isomorphic-fetch';
import FormData from 'form-data';

export class FindPasswordService{
    static cookies = new Cookies();

    static getId() {
        let data = this.cookies.get('USERNAME');

        if (data === undefined) {
            return "";
        }

        let username = Base64.decode(data).split(',');
        this.id = username[0];
        return this.id;
    }

    static setData(id) {
        this.cookies.set('USERNAME', Base64.encode(id));
    }

    static sendMail(username){
        let formData = new FormData();
        formData.append('username', username);

        let data = {
            method: 'POST',
            body: formData,
        }

        return new Promise((resolve, reject) => {
            fetch("http://localhost/licenta/sendMail.php", data)
            .then((result) => {resolve(result)})
            .catch((error) => {reject(error)})
        });
    }

    static removeId(){
        this.cookies.remove('USERNAME');
    }
}