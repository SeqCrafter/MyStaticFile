(async function () {
  const websiteID = "5d9ec39a-2049-405e-8d8c-d3e811006836";
  const shareID = "Cqwf1lUqMmC1a30H";
  const startAt = 0;
  const endAt = new Date().getTime();

  const TOKEN_API = `https://cloud.umami.is/analytics/us/api/share/${shareID}`;
  const API_URL = `https://cloud.umami.is/analytics/us/api/websites/${websiteID}/stats?startAt=${startAt}&endAt=${endAt}`;

  const pvEl = document.getElementById("umami_value_site_pv");
  const vEl = document.getElementById("umami_value_site_v");

  if (!pvEl || !vEl) return;

  let x_umami_share_token = "";

  try {
    const tokenRes = await fetch(TOKEN_API);
    const tokenData = await tokenRes.json();
    x_umami_share_token = tokenData.token;
  } catch {
    return;
  }

  if (!x_umami_share_token) return;

  try {
    const statsRes = await fetch(API_URL, {
      headers: {
        "x-umami-share-token": x_umami_share_token,
        "x-umami-share-context": "1",
      },
    });
    const data = await statsRes.json();

    if (typeof data.pageviews === "number") {
      //console.log(data.pageviews);
      pvEl.textContent = data.pageviews.toLocaleString();
    }
    if (typeof data.visitors === "number") {
      //console.log(data.visitors);
      vEl.textContent = data.visitors.toLocaleString();
    }
  } catch {
    pvEl.textContent = "-";
    vEl.textContent = "-";
  }
})();
