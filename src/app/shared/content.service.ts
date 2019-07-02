import { Injectable } from '@angular/core'
export interface Dogs {
    id: number
    title: string
    imgurl: string
    content: string
}

export interface Sms {
    firstName: string
    myText: string
    dismissed: boolean
    id: number
}
export interface Login {
    id: number
    Name: string
    Password: string
}

@Injectable({ providedIn: 'root' })
export class DogsService {

    public dogs: Dogs[] = [
        {
            id: 1,
            title: "Shiba Inu",
            imgurl: "https://cdn.pixabay.com/photo/2019/03/13/22/51/pet-4053938_960_720.jpg",
            content: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
            bred for hunting.` },
        {
            id: 2,
            title: "Husky",
            imgurl: "https://cdn.pixabay.com/photo/2017/01/28/22/13/dog-2016708_960_720.jpg",
            content: `Husky is a general name for a sled-type of dog used in northern regions, differentiated from other sled-dog types by their fast pulling style. They are an ever-changing cross-breed of the fastest dogs`
        },
        {
            id: 3,
            title: "Akita",
            imgurl: "https://cdn.pixabay.com/photo/2017/07/24/15/07/akita-2534986_960_720.jpg",
            content: `The Akita is a medium breed of dog originating from the mountainous regions of northern Japan.`
        }
    ]

}
@Injectable({ providedIn: 'root' })
export class SmsService {
    maxId = 100;
    public sms: Sms[] = [
        this.createSms("Keanu Reeves", "Lorem Nulla efficitur lacinia laoreet. Nam elit mauris, pellentesque quis laoreet id", true),
        this.createSms("Keanu Reeves", "Lorem Nulla efficitur lacinia laoreet. Nam elit mauris, pellentesque quis laoreet id", true),
        this.createSms("Keanu Reeves", "Lorem Nulla efficitur lacinia laoreet. Nam elit mauris, pellentesque quis laoreet id", true)
    ]

    createSms(firstName, myText, dismissed) {
        return ({
            firstName,
            myText,
            dismissed,
            id: this.maxId++
        });
    }
    sendSms = (name, text, myCheck) => {
        if (myCheck === true) {
            const newItem = this.createSms(name, text, false);
            this.sms.push(newItem)
        } else {
            const newItem = this.createSms(name, text, true);
            this.sms.push(newItem)
        }

    };
    onClose(id: number) {
        const idx = this.sms.findIndex(t => t.id === id);
        this.sms[idx].dismissed = false;
    }
}

@Injectable({ providedIn: 'root' })
export class LoginService {

    MyName: string;
    MyPass: string;
    check: boolean = false;
    public login: Login[] = [
        {
            id: 1,
            Name: "Denys",
            Password: "iop098"
        }
    ]

    CheckLogin(name: string, pass: string) {
        this.MyName = this.login.find((el) => el.Name === name)["Name"];
        this.MyPass = this.login.find((el) => el.Name === name)["Password"];
        if (this.MyName === name && this.MyPass === pass) {
            this.check = true;
            console.log(this.MyName);
        }
        else {
            alert("please try again");
            this.check = false;
        }
    };
}

