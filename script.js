const result=document.querySelector("#result")
const loader=document.querySelector("#loding")


const API_KEY=" https://fakestoreapi.in/api/products"


loader.style.display="block"

async function getData(){
    const response=await fetch(API_KEY)
    const result= await response.json()
    console.log(result.products);
    
    displayData(result.products)
    loader.style.display="none"
    
}
getData()

function displayData(detaArr){
    detaArr.forEach((item)=>{
        const mainDiv=document.createElement("div")
        mainDiv.className="maindiv"
        const wishList=document.createElement("button")
        wishList.innerText="Add To Wishlist"
        wishList.id="wish"
        const addTocart=document.createElement("button")
        addTocart.innerText="Add To Cart"
        addTocart.id="cart"
        // img.src=item.image
        mainDiv.innerHTML=`<a href="/singleproduct.html?id=${item.id}"><img src="${item.image}"></a><p>${item.title.split(" ").slice(0,3)+"..."}</p> <h2>$:${item.price}</h2>`
        mainDiv.append(wishList,addTocart)
        result.append(mainDiv)
    })
}