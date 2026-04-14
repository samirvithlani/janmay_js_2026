const colors = [
  "Red", "Blue", "Green", "Yellow", "Orange",
  "Purple", "Pink", "Brown", "Black", "White",
  "Gray", "Cyan", "Magenta", "Lime", "Teal",
  "Indigo", "Violet", "Gold", "Silver", "Beige",
  "Maroon", "Olive", "Coral", "Turquoise", "Lavender",
  "Peach", "Mint", "Mustard", "Navy", "SkyBlue",
  "Chocolate", "Crimson", "Salmon", "Plum", "Khaki",
  "Aqua", "Azure", "Ivory", "Tan", "Rose",
  "Amber", "Charcoal", "Fuchsia", "Lilac", "Periwinkle",
  "Saffron", "Scarlet", "SeaGreen", "SlateBlue", "SteelBlue"
];

const getBoxes =()=>{
    const boxes = document.getElementsByClassName("box")//[]
    console.log(boxes)
    
    for(let i=0;i<boxes.length;i++){
    const randomIndex = Math.floor(Math.random()*colors.length)    
        boxes[i].style.backgroundColor = colors[randomIndex]
    }
}