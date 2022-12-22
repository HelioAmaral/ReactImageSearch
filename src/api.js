import axios from "axios";

//create a function that will be used to make the http request
const searchImages = async (term) => {
 const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID aRFR0OFmoPvoxyTL6Ij3GRUfjmdSWKnR114m5BVLpAI",
    },
    params: {
      query: term,
    },
  });

  
  return response.data.results;
};


export default searchImages;