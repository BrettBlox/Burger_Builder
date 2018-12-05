import axios from "axios";

const instance = axios.create({
  baseURL: "https://reactburger-7f7a2.firebaseio.com/"
});

export default instance;
