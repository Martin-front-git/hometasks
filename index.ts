const colors: string[] = ["red", "yellow", "blue", "black", "green"];

function ColorsFun(colors: string[]): void {
    while (colors.length > 0) {
        const random: number = Math.floor(Math.random() * colors.length);
        const randomColor: string = colors[random];
        console.log(randomColor);
        colors = colors.filter((color, index) => index !== random);
    }
}

ColorsFun(colors);