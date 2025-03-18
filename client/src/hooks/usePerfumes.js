import { useState, useEffect } from "react";
import { create, getAllPerfumes, getOnePerfume } from "../api/perfumes-api.js";
import * as request from "../api/requester.js";

export function useAllPerfumes() {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        let response = await getAllPerfumes();
        setPerfumes(response);
      } catch (error) {
        console.error("Error fetching perfumes:", error);
      }
    };

    fetchPerfumes();
  }, []);

  return [perfumes, setPerfumes];
}

export function usegetOnePerfumeById(id) {
  const [perfume, setPerfumes] = useState({});

  useEffect(() => {
    (async () => {
      let result = await getOnePerfume(id);

      setPerfumes(result);
    })();
  }, [id]);

  return [perfume, setPerfumes];
}

export function useCreatePerfume() {
  const perfumeCreateHandler = (perfumeData) => create(perfumeData);
  return perfumeCreateHandler;
}

export function deletePerfume(id) {
  request.del(`http://localhost:3030/data/perfumes/${id}`);
}
