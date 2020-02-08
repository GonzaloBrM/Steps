import { sha256, sha224 } from 'js-sha256';

export class UserRequest {

    private id : Number;
    private userName : string;
    private password : string;

    constructor(user: string, password: string,id? : Number){
        this.userName = user;
        this.password = sha256(password);
        this.id = id;
    }
}
