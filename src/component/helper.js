export const formattedDate = (value) => {
  const date = new Date(value);
  const options = {
    day: "numeric",
    month: "short",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const parts = formattedDate.split(" ");
  const convertedDate = `${parts[1]} ${parts[0]}`;
  return convertedDate;
};
