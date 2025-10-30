const dateNow = new Date();
const year = dateNow.getFullYear();
const month = dateNow.getMonth() + 1;
const date = dateNow.getDate();

const result = year + '年' + month +'月' + date +'日';
console.log(result);