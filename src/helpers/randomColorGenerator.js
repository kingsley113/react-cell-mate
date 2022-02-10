const randomColorGenerator = () => {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  if (color.length < 6) {
    console.log(color);
    color = randomColorGenerator();
    color.shift();
  }
  return `#${color}`;
};

export default randomColorGenerator;
