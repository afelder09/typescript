import { User } from '../models/User'

const user = new User({name: 'butler', age: 35})
const existingUser = new User({ id: 1, name: 'manwarski', age: 34})

user.save();
existingUser.save();