function recurse(arg) {
    if (arg > 10) return;
    console.log(arg);
    recurse(arg + 1);
}

recurse(1);
