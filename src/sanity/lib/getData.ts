import { client } from "./client";

export async function getData(slug: string) {
    const query = `*[_type=='product' && slug.current==$slug][0] {
      Title, description, price, image
    }`;
    const data = await client.fetch(query, { slug });
    console.log("Query Result:", data); // Debugging
    return data;
  }