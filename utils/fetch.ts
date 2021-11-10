export async function fetchJSON(input: RequestInfo, init?: RequestInit) {
  const res = await fetch(input, init);
  return res.json();
}
