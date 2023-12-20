import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"100300a92f4e44aaa6a1b445ffad23f0",
    }
})