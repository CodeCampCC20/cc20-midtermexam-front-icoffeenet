import { create } from zustand
import axios from "axios"

const registerId = create(( set ) => ({
    user: [],
    password: [],
    FetchUserId: async(userId) => {
        const res= await axios.get(`http://localhost/0000`)
    }
}))