var names = ['Eric', 'Art', 'Horace'];

names.forEach(function(name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Eric'));

var person = {
  name: 'Eric',
  greet: function() {
      names.forEach((name) => {
        console.log(this.name + ' says hi to ' + name);
      });
  }
};

person.greet();

// Challenge Area
function add(a, b) {
  return a + b;
}

// addStatement
var addStatement = (a, b) =>  {
  return a + b;
}

// addExpression
var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));
