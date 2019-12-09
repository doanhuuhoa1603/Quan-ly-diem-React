import axios from "axios";

export const BASE_URL = process.env.REACT_APP_API_URL + "classes/";

export function getClasses() {
  return axios.get(BASE_URL);
}
export function deleteClass(id) {
    return axios.delete(BASE_URL + id);
  }