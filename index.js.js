console.log("A.");
function makeLine(size){
  //size = number of #s;
  let line = '';
  for (let i=0; i< size; i++){
    line += '#';
  }

  return line;
}  
console.log(makeLine(5));

console.log("B.");

function makeSquare(size){
  let lines = [];
  for (let i=0; i < size ; i++){
   let line = makeLine(size);
   lines.push(line);
  }
  return lines.join('\n');
}
console.log(makeSquare(5));
console.log('C.');
function makeRectangle(width,height){
  let lines = [];
  for (let i= 0; i < height; i++){
    let line = makeLine(width);
    lines.push(line);
  }
  return lines.join('\n');
}
console.log(makeRectangle(5,3));

console.log('C. Book example');

function makeRect(width, height) {
   let rectangle = '';
   for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
   }
   return rectangle.slice(0, -1);
}
