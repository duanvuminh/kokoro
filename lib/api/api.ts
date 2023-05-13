export async function postData(url = "", data = {}) {
  // Default options are marked with *
  const header = {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
    Accept: "application/json",
    Authorization: "Bearer " + process.env.ChatGPT,
  };
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    cache: "force-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: header,
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}