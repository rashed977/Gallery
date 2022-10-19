import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 6VLIhfkhehHchM-3Ntr9G3erzLP_FTGfOTW88CzTWus'
      }
})