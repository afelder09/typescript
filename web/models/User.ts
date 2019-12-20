import { Eventing } from './Eventing'
import { Sync } from './Sync'
import { Attributes } from './Attributes'

export interface UserProps {
    name?: string,
    age?: number,
    id?: number
}

export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>('http://localhost:1234/users')
    public attributes: Attributes<UserProps>

    constructor(data: UserProps) {
        this.attributes = new Attributes<UserProps>(data)
    }

    get get(){
        return this.attributes.get;
    }

    set(key, value) {
        return this.attributes.set(key)
    }

    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger
    }

    fetch() {

    }

    save() {

    }
}
