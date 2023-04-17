const tail = require('../tail');
const result = tail(["Hello", "Lighthouse", "Labs"]); // this step will take the value of result through tail function, then tail fxn will remove the head element.
const result1 = tail([1, 2, 3]); 