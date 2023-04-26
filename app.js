const buttons = document.querySelector(".btnContainer")
// console.log(buttons)
const menuArea = document.querySelector(".menuArea")
console.log(menuArea)

const btns = ["All", "Breakfast", "Lunch", "Shakes", "Dinner",];
const menuData = [
    {
        id: 1,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
        title:"Buttermilk Pancakes",
        price: 15.99,
        desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 2,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
        title:"Godzilla Milkshake",
        price: 15.99,
        desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 3,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
        title:"Milkshake",
        price: 15.99,
        desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 4,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
        title:"Country Delight",
        price: 15.99,
        desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 4,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
        title:"Country Delight",
        price: 15.99,
        desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 4,
        scr: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
        title:"Country Delight",
        price: 15.99,
        desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
]

const myBtn = []
const myMenu = []

btns.forEach((item)=>{
    const string = `<button class="btn">${item}</button>`
    myBtn.push(string)
    // console.log(myBtn)
})
menuData.forEach((item)=>{
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