import axios from "axios";

const KEY = "AIzaSyD5cGmg3tH26-rpZxM6tr3Qq1MCjHyJMdk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
