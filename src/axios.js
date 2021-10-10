import axios from "axios";

const instance = axios.create({
  baseURL: 'https://us-central1-clone-a78b1.cloudfunctions.net/api' //The API (cloud function) URL
});
//'http://localhost:5001/clone-a78b1/us-central1/api'
export default instance;
