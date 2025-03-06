import * as request from "./requester.js";

const getAllPerfumes = async () => {
  try {
    const response = await request.get("http://localhost:3030/data/perfumes");
    return response;
  } catch (error) {
    console.error("Error fetching perfumes:", error);

    throw error;
  }
};

const getOnePerfume = (id) =>
  request.get(`http://localhost:3030/data/perfumes/${id}`);

const create = (data) =>
  request.post("http://localhost:3030/data/perfumes", data);

const remove = (id) =>
  request.del(`http://localhost:3030/data/perfumes/${id}`);

const update = (id, data) =>
  request.put(`http://localhost:3030/data/perfumes/${id}`, data);

export {
  getAllPerfumes,
  getOnePerfume,
  create,
  remove,
  update,
}
