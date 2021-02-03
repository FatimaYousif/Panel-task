// for carosal js
var span = document.getElementsByTagName('span');
var div = document.getElementsByTagName('div');
var l = 0;
span[1].onclick = () => {
    l++;
    for (var i of div) {
        if (l == 0) { i.style.left = "0px"; }
        // if(l==1) {i.style.left="-740px";}
        if (l == 1) { i.style.left = "-700px"; }
        // if (l == 1) { i.style.left = "-1000px"; }
        

        // if(l==2) {i.style.left="-1480px";}
        if (l == 2) { i.style.left = "-1400px"; }

        // if(l==3) {i.style.left="-2220px";}
        if (l == 3) { i.style.left = "-2000px"; }

        // if(l==4) {i.style.left="-2960px";}
        if (l == 4) { i.style.left = "-2700px"; }

        if (l > 4) { l = 4; }
    }
}
span[0].onclick = () => {
    l--;
    for (var i of div) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-700px"; }
        if (l == 2) { i.style.left = "-1400px"; }
        if (l == 3) { i.style.left = "-2000px"; }
        if (l == 4) { i.style.left = "-2700px"; }
        if (l < 0) { l = 0; }
    }
}


// for json of sub items in row2 container 
let items1 = [
    
    {
        class:"two",
        img2 :"images/1_2.png",
        p: "Biscuits & Crackers",
       
      },
      {
        class:"three",
        img2 :"images/1_3.png",
        p: "Sugar & Home baking",
       
      },
      {
        class:"four",
        img2 :"images/1_4.png",
        p: "Tins, Jars & Packets",
      },

]

let main = document.querySelector(".container .row2 ");
let append = items1.map(item =>
    `   
        <div class=${item.class}>
            <img src=${item.img2} alt="">
            <p>${item.p}</p>
        </div>
`
).join('');
main.innerHTML = append;


// for json of sub items in row2 container1
let items2 = [
    {
      class:"one",
      img2 :"images/2_1.png",
      p: "Soft drinks",
     
    },
    
    {
        class:"two",
        img2 :"images/2_2.png",
        p: "Tea",
       
      },
      {
        class:"three",
        img2 :"images/2_3.png",
        p: "Juices",
       
      },
      {
        class:"four",
        img2 :"images/2_4.png",
        p: "Powdered Drinks",
      },

]

let main1 = document.querySelector(".container1 .row2");
let append1 = items2.map(item =>
    `   
        <div class=${item.class}>
            <img src=${item.img2} alt="">
            <p>${item.p}</p>
        </div>
`
).join('');
main1.innerHTML = append1;



// for json of sub items in row2 container2
let items3 = [
    {
      class:"one",
      img2 :"images/3_1.png",
      p: "Ready meals",
     
    },
    
    {
        class:"two",
        img2 :"images/3_2.png",
        p: "Meat & poultry",
       
      },
      {
        class:"three",
        img2 :"images/3_3.png",
        p: "Fish & seafood",
       
      },
      {
        class:"four",
        img2 :"images/3_4.png",
        p: "fruits & vegetables",
      },

]

let main2 = document.querySelector(".container2 .row2");
let append2 = items3.map(item =>
    `   
        <div class=${item.class}>
            <img src=${item.img2} alt="">
            <p>${item.p}</p>
        </div>
`
).join('');
main2.innerHTML = append2;



// for json of sub items in row2 container3
let items4 = [
    {
      class:"one",
      img2 :"images/4_1.png",
      p: "Pets Food",
     
    },
    
    {
        class:"two",
        img2 :"images/4_2.png",
        p: "Pet Accessories",
       
      },
      {
        class:"three",
        img2 :"images/4_3.png",
        p: "Pet Treats & chews",
       
      },
      {
        class:"four",
        img2 :"images/4_4.png",
        p: "Pet care",
      },

]

let main3 = document.querySelector(".container3 .row2");
let append3 = items4.map(item =>
    `   
        <div class=${item.class}>
            <img src=${item.img2} alt="">
            <p>${item.p}</p>
        </div>
`
).join('');
main3.innerHTML = append3;
