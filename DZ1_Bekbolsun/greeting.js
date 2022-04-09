const name = prompt("Как вас зовут?")
console.log("Hello" + " " + name)


const arr = [1,2,3,4,5];
const arr2 = [1,2,3,4,5];


console.log(arr==arr2);
console.log(JSON.stringify(arr)==JSON.stringify(arr2));

const colour = prompt ('Выберите цвет: red, yellow, green!');

switch (colour) {
    case 'red':
        alert('стой')
        break;
    case 'yellow':
        alert('подожди')
        break;
    case 'green':
        alert('иди')
    break;
    default:
        alert('undefined')
        break;
}

