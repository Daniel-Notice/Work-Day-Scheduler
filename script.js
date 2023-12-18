let now = dayjs().format("dddd, MMMM D, YYYY h:mm A");

console.log(now);

document.querySelector("#currentDay").textContent = now;
