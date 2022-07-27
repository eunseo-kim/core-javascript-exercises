function a(x, y, z) {
  console.log(this, x, y, z);
}

var obj = {
  hi: 'Hello',
};

a.call(obj, 1, 2, 3); // { hi: 'Hello' } 1 2 3

a.apply(obj, [1, 2, 3]); // { hi: 'Hello' } 1 2 3

var c = a.bind(obj);
c(1, 2, 3); // { hi: 'Hello' } 1 2 3

var d = a.bind(obj, 1, 2);
d(3); // { hi: 'Hello' } 1 2 3
