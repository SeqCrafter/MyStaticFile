(function () {
  const websiteID = "5d9ec39a-2049-405e-8d8c-d3e811006836";
  const startAt = 0;
  const endAt = new Date().getTime();

  const API_URL = `https://cloud.umami.is/analytics/us/api/websites/${websiteID}/stats?startAt=${startAt}&endAt=${endAt}`;

  const pvEl = document.getElementById("umami_value_site_pv");
  const vEl = document.getElementById("umami_value_site_v");

  if (!pvEl || !vEl) return;

  fetch(API_URL, {
    headers: {
      "x-umami-share-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3ZWJzaXRlSWQiOiI1ZDllYzM5YS0yMDQ5LTQwNWUtOGQ4Yy1kM2U4MTEwMDY4MzYiLCJpYXQiOjE3NjcxNzM3NTh9.PPVUKSvYWDehAwf4KgbRebBvvFZ-CyBusiDRtQtfXcc",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (typeof data.pageviews === "number") {
        console.log(data.pageviews);
        pvEl.textContent = data.pageviews.toLocaleString();
      }
      if (typeof data.visitors === "number") {
        console.log(data.visitors);
        vEl.textContent = data.visitors.toLocaleString();
      }
    })
    .catch(() => {
      pvEl.textContent = "-";
      vEl.textContent = "-";
    });
})();
