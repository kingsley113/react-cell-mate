const renderErrors = (errors) => {
  console.log(errors);
  let list = [];
  for (const key in errors) {
    console.log(key);
    if (key === "name") {
      list.push(`${key} ${errors[key]}`);
    } else {
      list.push(errors[key]);
    }
  }
  alert(list);
};

export default renderErrors;
