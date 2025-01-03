import { Rule } from 'sanity';

export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "Title",
      title: "Product Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: "description",
      title: "Product Description",
      type: "string",
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
      validation: (Rule: Rule) => Rule.required().min(0)
    },
    {
      name: "discountedprice",
      title: "Discounted Product Price",
      type: "number",
      validation: (Rule: Rule) =>
        Rule.min(0).error("Discounted price cannot be negative")
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: 'Title',
        maxLength: 200
      },
      validation: (Rule: Rule) => Rule.required()
    }
  ]
};
