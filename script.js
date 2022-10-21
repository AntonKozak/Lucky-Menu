const alergy = {
    laktos: 1,
    gluten: 2,
    nuts: 3,
}

const menu = [
    {
        name: 'Hamburgare',
        vegetarisk: false,
        kott: true,
        alergy: [alergy.gluten],
        price: 50
    },
    {
        name: 'Hallomi Hamburgare',
        vegetarisk: true,
        kott: false,
        alergy: [],
        price: 30
    },
    {
        name: 'Potatis',
        vegetarisk: true,
        kott: false,
        alergy: [alergy.laktos],
        price: 80
    },
    {
        name: 'Vegetebale',
        vegetarisk: true,
        kott: false,
        alergy: [alergy.nuts],
        price: 70
    },
    {
        name: 'Grass',
        vegetarisk: true,
        kott: false,
        alergy: [],
        price: 23
    },
    {
        name: 'Pasta',
        vegetarisk: false,
        kott: true,
        alergy: [],
        price: 34
    },
    {
        name: 'Ris',
        vegetarisk: true,
        kott: false,
        alergy: [],
        price: 14
    },
    {
        name: 'Lapwa z masom',
        vegetarisk: false,
        kott: true,
        alergy: [],
        price: 56
    },
    {
        name: 'Kawka z souce',
        vegetarisk: false,
        kott: false,
        alergy: [],
        price: 56
    }
];


let filterByVegitarisk = false;
let filterByLactos = false;
let filterByGluten = false;
let filterByNuts = false;
let filterByKott = false;

const sort = {
    ['stigande']: (a, b) => a.price - b.price,
    ['fallande']: (a, b) => b.price - a.price,
}

function getMenu() { //  сортирує веганску їжу
    const selectedSort = document.getElementById('selectedSort').value;

    return menu.filter(item => {
        const isVegitarisk = filterByVegitarisk ? item.vegetarisk : true;
        const isKott = filterByKott ? item.kott : true;
        const isLactos = filterByLactos ? !item.alergy.includes(alergy.laktos) : true;
        const isGluten = filterByGluten ? !item.alergy.includes(alergy.gluten) : true;
        const isNuts = filterByNuts ? !item.alergy.includes(alergy.nuts) : true;

        return isVegitarisk && isKott && isLactos && isGluten && isNuts;
    }).sort(sort[selectedSort]);
}

function renderMenu() {  // генерує хтмл код з меню
    const menu = getMenu();

    let content = '<div class="center"> <ul class="menu_list">';

    for (const item of menu) {
        content += `
        <li>
        ${item.name} - ${item.price}
        </li>`;
    }
    content += '</ul> </div>'

    document.querySelector('#content').innerHTML = content;
}

function handleVegitarisk(event) {
    filterByVegitarisk = Boolean(event.target.checked);
    document.getElementById('kott').disabled = event.target.checked
    renderMenu();
}

function handleLactos(event) {
    filterByLactos = Boolean(event.target.checked);
    renderMenu();
}

function handleGluten(event) {
    filterByGluten = Boolean(event.target.checked);
    renderMenu();
}

function handleNuts(event) {
    filterByNuts = Boolean(event.target.checked);
    renderMenu();
}

function handleKott(event) {
    filterByKott = Boolean(event.target.checked);
    document.getElementById('vegetarisk').disabled = event.target.checked
    renderMenu();
}

function handleSort() {
    renderMenu();
}

renderMenu();






// function getOnlyVegitariskMenu() { //  сортирує веганску їжу
//     return menu.filter(item => item.vegetarisk)
// }
// function getMenuWithoutAlergy(alergy) {  // сортирує без алергії
//     return menu.filter(item => !item.alergy.includes(alergy))
// }

// const menu1 = getOnlyVegitariskMenu();
// console.log(menu1);

// const menu2 = getMenuWithoutAlergy(alergy.laktos);






// renderMenu(getMenuWithoutAlergy(getMenuWithoutAlergy(getMenu(menu, false), alergy.gluten), alergy.laktos))
//renderMenu(getMenu([...menu], false))
// renderMenu(getMenuWithoutAlergy(getMenu(false), alergy.laktos));

// sort by pris and show in html
// menu.sort((a, b) => a.price - b.price);

// var demo = document.getElementById("demo");
// menu.forEach(items => demo.innerHTML += "<br>" + Object.values(items).join(" "));

// sort by name and show in html
// menu.sort((a, b) => {
//     if (a.name < b.name) return -1;
//     return 1;
// });

// var demo = document.getElementById("demo");
// menu.forEach(items => demo.innerHTML += "<br>" + Object.values(items).join(" "));


//sort by vegetarisk and show in html
// menu.sort((a, b) => {
//     if (a.vegetarisk === b.vegetarisk) return -1;
//     return 1;
// });
// var demo = document.getElementById("demo");
// menu.forEach(items => demo.innerHTML += "<br>" + Object.values(items).join(" "));







// //////////////////////////////////////

// var checkbox = document.getElementById("checkbox").checked = true;
// checkbox.addEventListener('change', function(vegetarisk) {
//     if (this.checked) {
//       console.log("Checkbox is checked..");
//       return checkboxTrue();
//     } else {
//       console.log("Checkbox is not checked..");
//       return vegetarisk;
//     }
//   });
//   var checkbox = document.getElementById("checkbox").checked = !checkbox;

//   console.log(typeof"checkbox");

// renderMenu(getMenu(checkbox));
/////////////////////////////////////////