import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://frontend-take-home-service.fetch.com",
  withCredentials: true,
});

export async function login(email: string, name: string) {
  const res = await instance.post("/auth/login", {
    email,
    name,
  });
  return res;
}

export async function logout() {
  const res = await instance.post("/auth/logout");
  return res;
}

export async function getBreeds(): Promise<AxiosResponse<string[]>> {
  const res = await instance.get("/dogs/breeds");
  return res;
}

export async function isAuthenticated() {
  //we get the breeds array and a 200 when logged in and a 401 when were not.
  const res = await instance.get("/dogs/breeds");

  if (res.status === 401) {
    return false;
  }

  return true;
}

export async function searchDogs(searchParamsURL: string) {
  console.log(searchParamsURL);
  const res = await instance.get(`/dogs/search${searchParamsURL}`);
  return res;
}
