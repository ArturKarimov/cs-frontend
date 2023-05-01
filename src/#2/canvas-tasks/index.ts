import prevImage from "./assets/img.jpeg";

const normalBtn: HTMLButtonElement = document.getElementById("normal") as HTMLButtonElement;
const inversedBtn: HTMLButtonElement = document.getElementById("inversed") as HTMLButtonElement;
const grayscaledBtn: HTMLButtonElement = document.getElementById("grayscaled") as HTMLButtonElement;

const img = new Image();
img.src = prevImage;

const canvas: HTMLCanvasElement = document.getElementById("canvas_area") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

img.onload = () => {
    ctx.drawImage(img, 0, 0)
}

canvas.width = img.width
canvas.height = img.height

const filterImage = (image: any) => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    return {
        normal: () => {
            const img = new Image();
            img.src = image;

            img.onload = () => {
                ctx.drawImage(img, 0, 0)
            }
        },
        inverse: () => {
            for (let i = 0; i <= data.length; i += 4) {
                data[i] = 255 - data[i]
                data[i + 1] = 255 - data[i + 1]
                data[i + 2] = 255 - data[i + 2]
            }

            ctx.putImageData(imageData, 0 , 0)
        },
        gray: () => {
            for (let i = 0; i <= data.length; i += 4) {
                const avg = (data[i] + data[i + 1] + data[i + 2]) / 3

                data[i] = avg
                data[i + 1] = avg
                data[i + 2] = avg
            }
            ctx.putImageData(imageData, 0 , 0)
        }
    }
}

normalBtn.addEventListener("click", () => filterImage(prevImage).normal())
inversedBtn.addEventListener("click", () => filterImage(prevImage).inverse())
grayscaledBtn.addEventListener("click", () => filterImage(prevImage).gray())