function Time() {
  let date =
    new Date().toLocaleTimeString("vn", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    }) + "";
  return <h2>{date}</h2>;
}

export default Time;
