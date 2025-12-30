(function () {
  const API_URL = "https://umami-q2ai0nctcl.edgeone.app/umami";

  const pvEl = document.getElementById("umami_value_site_pv");
  const vEl = document.getElementById("umami_value_site_v");

  if (!pvEl || !vEl) return;

  fetch(API_URL, { cache: "no-store" })
    .then((res) => res.json())
    .then((data) => {
      if (typeof data.pageviews === "number") {
        pvEl.textContent = data.pageviews.toLocaleString();
      }
      if (typeof data.visitors === "number") {
        vEl.textContent = data.visitors.toLocaleString();
      }
    })
    .catch(() => {
      pvEl.textContent = "-";
      vEl.textContent = "-";
    });
})();
