import axios from 'axios'

// Dummy api data from https://jsonplaceholder.typicode.com/
export default() => {
    return axios.create({
        baseURL: `https://jsonplaceholder.typicode.com`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}