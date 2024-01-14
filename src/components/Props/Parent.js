import React from 'react'
import Child from './Child'
import './Parent.css'
let arr=[
    {img:"https://kontorsenteret.no/wp-content/uploads/2022/09/iPhone-14-256GB.jpg",name:"Iphone 15",brand:"Apple",price:80000},
    {img:"https://images.hotukdeals.com/threads/raw/6PWTl/4191221_1/re/1024x1024/qt/60/4191221_1.jpg",name:"Galaxy S23 Ultra",brand:"Samsung",price:120000},
    {img:"https://www.gamesworldegypt.com/image/cache/catalog/gamesworldegypt/Mobile/OnePlus11R5G16GBram256GBStorageSonicBlack-500x500.png",name:"OnePlus 11R",brand:"OnePlus",price:40000},
    {img:"https://th.bing.com/th/id/OIP.HtsxLcQmIEc7B62ykIyXxQAAAA?rs=1&pid=ImgDetMain",name:"Nothing Phone 2",brand:"Nothing",price:55000},
    {img:"https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/0/l/0/-original-imagtwh6enjfudqt.jpeg?q=70",name:"Google Pixel 8",brand:"Google",price:76000},
    {img:"https://cdn.media.amplience.net/i/xcite/541818-01?img404=default&w=2048&qlt=75&fmt=auto",name:"Xiaomi 13 Pro",brand:"Xiaomi",price:75000},



]
function Parent() {
  return (
    <>
    <h1 className="text-success">The available products are</h1>
    <div className="products">
        {
            arr.map((element)=>
            <Child {...element}/>
            )
        }
        
    </div>
    </>
  )
}

export default Parent