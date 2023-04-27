const buttons = document.querySelector(".btnContainer")
// console.log(buttons)
const menuArea = document.querySelector(".menuArea")
// console.log(menuArea)

const btns = ["All", "Breakfast", "Lunch", "Shakes", "Dinner",];
const menuData = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 39.99,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
]


const myBtn = []
let myMenu = []

btns.forEach((item) => {
    const string = `<button class="btn">${item}</button>`
    myBtn.push(string)
    // console.log(myBtn)
})
menuData.forEach((item) => {
    const string = `<div class="menuCard">
    <img class="foodImg" src=${item.scr}>
    <div class="text">
        <div class="foodHeader">
            <h2>${item.title}</h2>
            <h2 id="price">$${item.price}</h2>
        </div>
        <p id="desc">${item.desc}</p>
    </div>

</div>`
    myMenu.push(string)
    // console.log(myMenu)
})




buttons.innerHTML = myBtn.join("")
menuArea.innerHTML = myMenu.join("")

const buttonName = document.querySelectorAll(".btn")

buttonName.forEach((element) => {
    element.addEventListener('click', () => {
        // console.log('hi')
        let filter = []
        if (element.innerHTML == 'Breakfast') {
            const filteredArray =  menuData.filter((item) => {
                return item.category == "breakfast"
            })
            arrayFiltration(filteredArray, filter)
        } else if(element.innerHTML == 'Lunch'){
            const filteredArray =  menuData.filter((item) => {
                return item.category == "lunch"
            })
            arrayFiltration(filteredArray, filter)
        } else if(element.innerHTML == 'Shakes'){
            const filteredArray =  menuData.filter((item) => {
                return item.category == "shakes"
            })
            arrayFiltration(filteredArray, filter)
        } else if(element.innerHTML == 'Dinner'){
            const filteredArray =  menuData.filter((item) => {
                return item.category == "dinner"
            })
            arrayFiltration(filteredArray, filter)
        } else{
            menuArea.innerHTML = myMenu.join("")
        }
    })
})


function arrayFiltration(fArr, arr){
    fArr.forEach((item) => {
        const string = `<div class="menuCard">
        <img class="foodImg" src=${item.scr}>
        <div class="text">
            <div class="foodHeader">
                <h2>${item.title}</h2>
                <h2 id="price">$${item.price}</h2>
            </div>
            <p id="desc">${item.desc}</p>
        </div>
    
    </div>`
    arr.push(string)
    menuArea.innerHTML = arr.join("")
    })
}
console.log()