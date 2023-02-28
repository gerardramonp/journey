const formatTimeStamp = (timeStamp: Date): string => {
  const dateFormat = new Date(timeStamp);
  let year = dateFormat.getFullYear();
  let month = dateFormat.getMonth() + 1;
  let day = dateFormat.getDate();

  return `${day < 10 ? `0${day}` : day}/${
    month < 10 ? `0${month}` : month
  }/${year}`;
};

export default formatTimeStamp;
