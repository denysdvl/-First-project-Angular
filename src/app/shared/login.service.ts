import { Injectable } from '@angular/core'

export interface Login {
    id: number
    Name: string
    Password: string
}

@Injectable({ providedIn: 'root' })
export class LoginService {
    MyName: string
    check: boolean = false;
    public login: Login[] = [
        {
            id: 1,
            Name: "Denys",
            Password: "iop098"
        }
    ]

    CheckLogin(name: string, pass: string) {
        if (this.login.filter((el) => el.Name === name).length === 1 &&
         this.login.filter((el) => el.Password === pass).length === 1) {
            this.MyName = this.login.find((el) => el.Name == name)["Name"];
            this.check = true;
        }
        else {
            alert("please try again");
            this.check = false;
        }
    };
    onLogout() {
        this.check = false;
    }
}
