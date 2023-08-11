import axios from "axios";

//this next line could've been put into a .env file, but in the sake of quick functionality I decided to put it here
const BASE_URL = "https://shielded-depths-43687-bb049deacd16.herokuapp.com";

export const getSpendingList = async (currency, order) => {
  try {
    const response = await axios.get(`${BASE_URL}/spendings/`, {
      params: { currency, order },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createSpending = async (spendingData) => {
  try {
    const response = await axios.post(`${BASE_URL}/spendings/`, spendingData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
