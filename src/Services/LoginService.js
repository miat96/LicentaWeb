import axios from 'axios';
import Cookies from 'universal-cookie';
import { Base64 } from 'js-base64';
import URLSearchParams from 'url-search-params';
import { resolve } from 'path';
import { reject } from 'q';

export class LoginService{
    static root = 'http://localhost/licenta';
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

    // static login(loginModel){
    //     let config = {
    //         headers: {
    //           header: 'Access-Control-Allow-Origin: *'
    //         }
    //     };

    //     var params = new URLSearchParams();
    //     params.append("username", "admin");
    //     params.append("password", "admin");

    //     return new Promise((resolve, reject) => {
    //         axios.post(this.root + "/login.php", params, config).then((responese) => {
    //             resolve(responese);
    //         }, (error) => {
    //             reject(error);
    //         })
    //     });
    // }

    static login(username, password){
        var params = new URLSearchParams();
        params.append("username", "admin");
        params.append("password", "admin");

        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: 'http://localhost/licenta/login.php',
                headers: { 'content-type': 'application/json'},
                data: params
            })
            .then((result) => {resolve(result)})
            .catch((error) => {reject(error)})
        });
    }




    static logout() {
        this.cookies.remove('TOKEN');
    }
}