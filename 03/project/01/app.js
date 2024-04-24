const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];

theList.shift();
theList.pop();
theList.unshift("FIRST");
theList[3] = "hello World";
theList[2] = "MIDDLE";
theList.pop();
theList.pop();
theList[theList.length - 1] = "LAST";
console.log(theList);
