import { StaticImageData } from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';

interface cartItem{
    id: number;
    title: string;
    img_url?:string[] | StaticImageData | string;
    price: number;
    size: string[];
    color:string[];
    qty: number;
    discount?:number;
    vvid:string | number | undefined,
    img1?:string,
    img2?:string,
    img3?:string,
    img4?:string,
};

const cartpage = () => {
  const cartItem =   useSelector((state:any)=> state.Cart);

  return (
    <div>
        {
            cartItem.length >= 1 &&
            cartItem.map((item:any,i:any)=>{
                return(
                    <div key={i}>
                        {/* <Image src={item.img_url} alt={item.title} width={100} height={100}></Image> */}
                    </div>
                )
            })
        }
    </div>
  )
}

export default cartpage