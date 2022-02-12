const renderErrors = (errors) => {
  let list = [];
  for (const key in errors) {
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
