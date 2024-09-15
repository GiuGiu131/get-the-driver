import axios from "axios";
import { BASE_URL } from "../utils/constants";

// const client = axios.create({
//   // baseURL: "https://jsonplaceholder.typicode.com/posts"
//   // baseURLMenu: "http://localhost:5173",
//   baseURLMenu: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export async function fetchMenuItems() {
  const URLMENU = `${BASE_URL}/data/menu.json`;
  const response = await axios.get(URLMENU);
  return response.data;
}

// const apiClient = axios.create({
//   baseURL: "http://localhost:5173/data",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export const fetchMenuItems = () => {
//   return apiClient.get("http://localhost:5173/data/menu");
// };
// export default apiClient;

// export const fetchDataMenu = async () => {
//   try {
//     const response = await client.get("/data/menu");
//     console.log(typeof response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };

// export const fetchDataMenu = async function getUser() {
//   try {
//     const response = await client.get("/data/menu");
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// };
