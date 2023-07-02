import { example } from "lib/const";

export async function _postData(url = "", data = {}) {
  const { ChatGPT } = process.env;
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${ChatGPT}`,
  };
  const response = await fetch(url, {
    method: "POST",
    cache: "no-store",
    headers: header,
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function postData(url = "", data = {}) {
  const { ChatGPT } = process.env;
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const response = await fetch(url, {
    method: "POST",
    cache: "force-cache",
    headers: header,
    body: JSON.stringify(data),
  });
  if (response.status == 500) {
    throw "server error";
  }
  return response.json();
}
