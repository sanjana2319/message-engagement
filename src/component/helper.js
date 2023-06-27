export const formattedDate = (value) => {
  console.log("this.value", value);
  const date = new Date(value);
  const options = {
    day: "numeric",
    month: "short",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const parts = formattedDate.split(" ");
  const convertedDate = `${parts[1]} ${parts[0]}`;
  console.log("convertedDate", convertedDate);
  return convertedDate;
};
