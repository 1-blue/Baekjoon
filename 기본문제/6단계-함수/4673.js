/**
 * 셀프넘버구하기
 */

const condition = 10000;
const array = Array(condition).fill().map(v => 0);

for (let i = 1; i <= condition; i++) {
  let tempArray = i.toString().split("");

  let index = tempArray.reduce((p, v) => {
    return p + Number(v);
  }, 0) + i;

  if(index <= condition){
    array[index]++;
  }
}

for(let i = 1; i<=condition; i++){
  if(array[i] === 0){
    console.log(i);
  }
}