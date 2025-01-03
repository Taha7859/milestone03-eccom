import { type SchemaTypeDefinition } from 'sanity'
import {product} from "@/sanity/schemaTypes/post"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
