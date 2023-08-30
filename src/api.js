import { API_URL } from "./config";

const getShows = async() =>{
    const response = await fetch(API_URL + '/shows');
    return response.json();
}

const getShowById = async(id) =>{
    const response = await fetch(API_URL + '/shows/' + id);
    return response.json();
}

const getShowCast = async(id) =>{
    const response = await fetch(API_URL + '/shows/' + id + '/cast');
    return response.json();
}

export {getShowById, getShows, getShowCast}
