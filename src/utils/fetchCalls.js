const { default: axios } = require("axios");

const BASE_URL="http://localhost:5000";

async function getColleges(){
    // const response = await fetch(`${BASE_URL}/colleges`, {
	// 	method: "get",
	// 	credentials: "include"
	// });
	// return response.json();
    const response = await axios.get(`${BASE_URL}/colleges`);
    return response.data;
}


async function getCollegeDetails(id){
    const response = await axios.get(`${BASE_URL}/colleges/${id}`);
    return response.data;
}

module.exports = { getColleges, getCollegeDetails}