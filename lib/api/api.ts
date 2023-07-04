"use server";

import { example } from "lib/const";

export async function _postData(url = "", data = {}) {
  const { ChatGPT } = process.env;
  const header = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${ChatGPT}`,
  };
  const response = await fetch(url, {
    method: "POST",
    cache: 'no-store',
    headers: header,
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function kyomoFetchPage(url = "") {
  let host = "http://localhost:3000";
  if (process.env.VERCEL_URL != undefined) {
    host = `https://${process.env.VERCEL_URL}`;
  }
  const response = await fetch(`${host}${url}`, {
    method: "GET",
    cache: "force-cache"
  });
  return response.json();
}