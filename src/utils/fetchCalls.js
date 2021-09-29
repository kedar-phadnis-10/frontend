const { default: axios } = require("axios");

const BASE_URL="https://oneshot-backend.herokuapp.com";

export const getColleges = async()=>{
    // const response = await fetch(`${BASE_URL}/colleges`, {
	// 	method: "get",
	// 	credentials: "include"
	// });
	// return response.json();
    const response = await axios.get(`${BASE_URL}/colleges`);
    return response.data;
}


export const getCollegeDetails=async(id)=>{
    const response = await axios.get(`${BASE_URL}/colleges/${id}`);
    return response.data;
}
