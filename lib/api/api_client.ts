"use client";

export async function kyomoGetPostDataClient(url = "") {
  let host = window.location.origin;
  const response = await fetch(`${host}${url}`, {
    method: "GET",
    cache: "force-cache",
  });
  return response.json();
}

export async function kyomoPostPostDataClient(url = "",data={}) {
  let host = window.location.origin;
  const response = await fetch(`${host}${url}`, {
    headers:{
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data)
  });
  return response.json();
}