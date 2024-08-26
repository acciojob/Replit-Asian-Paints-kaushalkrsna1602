//your JS code here. If required.
document.getElementById("change_button").addEventListener("click", function() {
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;

    // Reset all grid items to transparent
    const gridItems = document.getElementsByClassName("grid-item");
    for (let item of gridItems) {
        item.style.backgroundColor = "transparent";
    }

    // Change the background color of the selected block
    if (blockId >= 1 && blockId <= 9) {
        document.getElementById(blockId).style.backgroundColor = color;
    } else {
        alert("Please enter a valid block ID between 1 and 9.");
    }
});

document.getElementById("Reset").addEventListener("click", function() {
    // Reset all grid items to transparent
    const gridItems = document.getElementsByClassName("grid-item");
    for (let item of gridItems) {
        item.style.backgroundColor = "transparent";
    }
});
