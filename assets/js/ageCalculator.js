function calcAge() {
    const now = new Date();
    let age = now.getFullYear() - 2000;
    const mdif = now.getMonth() - 7 + 1; // jan is 0 in getMonth
    if (mdif < 0) {
        // not birthday yet
        --age;
    }
    else if (mdif === 0) {
        // maybe birthday?
        var ddif = now.getDate() - 3;
        if (ddif < 0) --age; // not birthday yet
    }

    document.getElementById("age").innerHTML = age;
}
window.onload = calcAge;