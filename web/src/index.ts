import { User } from '../models/User'

const user = new User({name: 'butler', age: 35})

console.log(user.get('name'))

user.on('change', () => {
    console.log('user was changed')
})

user.trigger('change')