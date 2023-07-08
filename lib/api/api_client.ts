"use client";

export async function kyomoGetPostDataClient(url = "") {
  let host = window.location.origin;
  const response = await fetch(`${host}${url}`, {
    method: "GET",
    cache: "force-cache",
  });
  return response.json();
}
