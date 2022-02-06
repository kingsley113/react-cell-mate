const renderErrors = (errors) => {
  // console.log(errors);
  let list = [];
  for (const key in errors) {
    // console.log(key);
    // if (key === "name") {
    //   list.push(`${key} ${errors[key]}`);
    // } else {
    //   list.push(errors[key]);
    // }
    switch (key) {
      case "name":
        list.push(`${key} ${errors[key]}`);
        break;
      case "title":
        list.push(`${key} ${errors[key]}`);
        break;
      default:
        list.push(errors[key]);
        break;
    }
  }
  alert(list);
};

export default renderErrors;
