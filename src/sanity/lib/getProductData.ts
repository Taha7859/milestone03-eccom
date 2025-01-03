import { client } from "./client"

export async function getProductData (){
    const res = await client.fetch(`*[_type=='product']{
        Title,image,price,discountedprice,description,
        "slug":slug.current}`)
    return res
}
