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
      "Authorization":
        "Bearer w1PP3kin8nzcheb06AgS+MrijJf9Dqs4x9Wnn88nJ8vdVfrx6C1Gy4TVDqSk+gARY+EALiUFqdAyJ08pHYYsJ6siViZrIgRgJN02hDn/GpKGkpXE3BkXEK38zUxCqTioQb4nGZX2UzhCZNFFuujEndOpFkJHFlwqQbLHS/MUY7FZnu9Zvj8iI1R9dEJcVecxdQTzknZpUwv8rv3bRSA9jTzwddrrSb9hCZ/oWvnfKdl9xMpmODCteZoY9nNy5WtWM1/rX6xYaUNjuFHRqTdUw7ac0eKDc9XrLu3MCuprogGC1S5lZB8HsV7063T+Cq+Rct/jvahoGZytbZKNqFyWvwZlnS8PZRw/ruo0Lw==",
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
