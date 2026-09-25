let favoriteColors = ["Red", "Blue", "Green"];
favoriteColors.push("Yellow");
console.log("See the favorite colors using push:", favoriteColors);
favoriteColors.shift();
console.log("See the favorite colors using shift:", favoriteColors);

for (const color of favoriteColors) {
    console.log("Color in array:", color);
}

const liked = favoriteColors.map(color => "I like " + color);
console.log(liked);
