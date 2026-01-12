(function() {
    const button1 = document.getElementById("clicker-1");
    const button5 = document.getElementById("clicker-5");
    const button10 = document.getElementById("clicker-10");
    const total = document.getElementById("count");
    let count = parseInt(total.innerHTML);
    
    button1.addEventListener("click", function() {
        total.innerHTML = count + 1;
        count += 1;
    });
    
    button5.addEventListener("click", function() {
        total.innerHTML = count + 5;
        count += 5;
    });

    button10.addEventListener("click", function() {
        total.innerHTML = count + 10;
        count += 10;
    });
}) ();
