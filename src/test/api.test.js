import { getSpendingList, createSpending } from "../components/api";
import axios from "axios";

jest.mock("axios");

describe("API Functions", () => {
  it("should fetch spending list", async () => {
    const responseData = [
      {
        description: "Example Description",
        amount: 123.45,
        currency: "USD",
        spent_at: "2023-08-11T14:30:00.000Z",
        id: 41,
      },
      {
        description: "Another Description",
        amount: 1000,
        currency: "HUF",
        spent_at: "2022-07-12T04:00:00.000Z",
        id: 40,
      },
    ];
    axios.get.mockResolvedValue({ data: responseData });

    const spendings = await getSpendingList();
    expect(spendings).toEqual(responseData);
  });

  it("should create a new spending", async () => {
    const spendingData = {
      description: "Example Description",
      amount: 123.45,
      currency: "USD",
      spent_at: "2023-08-11T14:30:00.000Z",
    };
    const responseData = {
      description: "Example Description",
      amount: 123.45,
      currency: "USD",
      spent_at: "2023-08-11T14:30:00.000Z",
      id: 41,
    };
    axios.post.mockResolvedValue({ data: responseData });

    const newSpending = await createSpending(spendingData);
    expect(newSpending).toEqual(responseData);
  });
});
