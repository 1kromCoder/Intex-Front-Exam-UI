import { API } from "./getEnv";

export const getRequest = async (
  url: string,
  token?: string | null,
  params?: Record<string, string>,
) => {
  const query = params ? "?" + new URLSearchParams(params).toString() : "";
  query;
  const res = await fetch(`${API}${url}`, {
    // @ts-ignore 
    next: { revalidate: 60 },
    headers: {
  ...(token && { Authorization: `Bearer ${token}` }),
}})

  const data = await res.json();
  return data;
};

export const postRequest = async (
  url: string,
  body?: any,
) => {
  const res = await fetch(`${API}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return data;
};
