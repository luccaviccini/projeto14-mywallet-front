import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

function newEntry(body, token) {
  return axios.post(`${BASE_URL}/entries`, body, createConfig(token));
}

function getEntries(token) {
  return axios.get(`${BASE_URL}/entries`, createConfig(token));
}

export const apiEntry = {
  newEntry,
  getEntries,
};