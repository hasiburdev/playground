// let x = 20;
// const debugFunc = (x = 5) => {
//   //   debugger;
//   if (x < 0) return 0;
//   if (x < 2) {
//     debugger;
//   }
//   return debugFunc(--x);
// };
// console.log(debugFunc(10));

const anotherSyncFuntion = () => {
  debugger;
  return "koti koti taka";
};

const asyncFunction = () => {
  const time = setTimeout(() => {
    console.log("this does nothing");
    debugger;
  }, 500);
  console.log(time);
  debugger;
};

const syncFunction = () => {
  let variable = "some variable";
  //   anotherSyncFuntion();
  asyncFunction();
  debugger;
};

syncFunction();
