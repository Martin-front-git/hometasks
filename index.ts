const colors: string[] = ["red", "yellow", "blue", "black", "green"];

function ColorsFun(colors: string[]): void {
    while (colors.length > 0) {
        const randomIndex: number = Math.floor(Math.random() * colors.length);
        const randomColor: string = colors.splice(randomIndex, 1)[0];
        console.log(randomColor);
    }
}

ColorsFun(colors);