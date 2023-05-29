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

export async function getDogsIds(searchParams: URLSearchParams) {
  const url = new URL("/dogs/search", instance.defaults.baseURL);

  searchParams.getAll("breed").forEach((breed) => {
    if (!url.searchParams.has("breeds")) {
      url.searchParams.set("breeds", breed);
    }
    url.searchParams.append("breeds", breed);
  });

  searchParams.getAll("zipCode").forEach((zipCode) => {
    if (!url.searchParams.has("zipCodes")) {
      url.searchParams.set("zipCodes", zipCode);
    }
    url.searchParams.append("zipCodes", zipCode);
  });

  if (searchParams.get("sort") !== null && searchParams.get("sort")) {
    url.searchParams.append("sort", searchParams.get("sort") as string);
  }

  const res = await instance.get(decodeURIComponent(url.toString()));
  return res;
}

export async function getDogs(ids: string[]) {
  const res = instance.post("/dogs", ids);
  return res;
}

export async function fetchPage(url: string) {
  const res = await instance.get(url);
  return res;
}
