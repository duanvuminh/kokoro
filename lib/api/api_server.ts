"use server";

export async function _postData(url = "", data: any = {}) {
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${data.Authorization ?? ""}`,
  };
  delete data.Authorization;
  const response = await fetch(url, {
    method: "POST",
    cache: "no-store",
    headers: header,
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function kyomoGetPostData(url = "") {
  let host = "http://localhost:3000";
  if (process.env.NEXT_PUBLIC_VERCEL_URL != undefined) {
    host = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
  const response = await fetch(`${host}${url}`, {
    method: "GET",
    cache: "force-cache",
  });
  if (response.status == 500) {
    throw "server error";
  }
  return response.json();
}
