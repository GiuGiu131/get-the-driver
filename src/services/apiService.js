import axios from "axios";
import { BASE_URL } from "../utils/constants";

export async function fetchMenuItems() {
  const URLMENU = `${BASE_URL}/data/menu.json`;
  const response = await axios.get(URLMENU);
  return response.data;
}

export async function fetchUsers() {
  const URLMENU = `${BASE_URL}/data/drivers.json`;
  const response = await axios.get(URLMENU);
  return response.data;
}
