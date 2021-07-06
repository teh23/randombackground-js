const button = document.getElementById("button");
const h3 = document.querySelectorAll("h3");

function padZero(hex, length = 2) {
    let desiredLength = hex;

    if (desiredLength.length >= length) {
        console.log(desiredLength);
        return desiredLength;
    }
    let t = "0" + desiredLength;
    return padZero(t, length);
}

function rgbToHex(r, g, b, reverse = false) {
    function hex(decimal) {
        return decimal.toString(16);
    }
    let test = padZero("11");
    console.log(test, "tutaj");

    if (reverse) {
        return `#${padZero(hex(255 - r))}${padZero(hex(255 - g))}${padZero(
            hex(255 - b)
        )}`;
    }
    return `#${padZero(hex(r))}${padZero(hex(g))}${padZero(hex(b))}`;
}

let [max, min] = [256, 0];

button.addEventListener("click", () => {
    let random = () => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    let [r, g, b] = [random(), random(), random()];
    let rgb = rgbToHex(r, g, b);
    let reverseRgb = rgbToHex(r, g, b, true);

    h3.forEach((value, ix) => {
        value.style.backgroundColor = reverseRgb;
        value.style.color = rgb;

        if (ix === 0) {
            value.lastChild.innerHTML = rgb;
        } else {
            value.lastChild.innerHTML = reverseRgb;
        }
    });
    [
        button.style.color,
        button.style.borderColor,
        document.body.style.backgroundColor,
    ] = [reverseRgb, reverseRgb, rgb];
});
