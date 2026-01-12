(function() {
    const button = document.getElementById("clicker");
    const total = document.getElementById("count");
    let count = parseInt(total.innerHTML);
    
    button.addEventListener("click", function() {
        total.innerHTML = count + 1;
        count += 1;
    });
}) ();
