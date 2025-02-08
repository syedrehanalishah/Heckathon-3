import { StaticImageData } from "next/image";

export type Iproduct = {
    title:string,
    price:number,
    id:number,
    rating?:string,
    img_url?:string[] | StaticImageData | string;
    size: string[];
    color: string[];
    qty: number;
    discount?: number;
    img1?:string,
    img2?:string,
    img3?:string,
    img4?:string,

  };


//   cart data Type 

export type Cart = {
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