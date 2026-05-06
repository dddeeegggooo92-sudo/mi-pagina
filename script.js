const countdown = document.querySelector("#countdown");

function renderCountdown() {
  if (!countdown) return;

  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);

  const diff = Math.max(0, end.getTime() - now.getTime());
  const totalSeconds = Math.floor(diff / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  countdown.textContent = `${hours}:${minutes}:${seconds}`;
}

renderCountdown();
setInterval(renderCountdown, 1000);

document.querySelectorAll("details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    document.querySelectorAll("details").forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
