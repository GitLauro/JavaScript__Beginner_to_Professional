const one = () => console.log("One")
const two = () => console.log("Two");
const three = () => {
    console.log("Three");
    one();
    two();
}
const four = () => {
    console.log("Four");
    setTimeout(() => {
	three();
	one();
    }, 0);
    
}

four();
