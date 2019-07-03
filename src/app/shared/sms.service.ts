import { Injectable } from '@angular/core'

export interface Sms {
    firstName: string
    myText: string
    dismissed: boolean
    id: number
}

@Injectable({ providedIn: 'root' })
export class SmsService {
    maxId = 100;
    public sms: Sms[] = [
        this.createSms("Keanu Reeves", "Lorem Nulla efficitur lacinia laoreet. Nam elit mauris, pellentesque quis laoreet id", true),
        this.createSms("Denys", "Nam elit mauris, pellentesque quis laoreet id", true),
        this.createSms("Mark Sinclair", "Lorem Nulla efficitur lacinia laoreet.", true)
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