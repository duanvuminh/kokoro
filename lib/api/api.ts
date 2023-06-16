export async function postData(url = "", data = {}) {
  const { ChatGPT } = process.env;
  const header = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${ChatGPT}`,
  };
  const response = await fetch(url, {
    method: "POST",
    cache: "force-cache",
    headers: header,
    body: JSON.stringify(data),
  });
  return response.json();
}