import { defineCollection, z } from 'astro:content';

// Blog posts live in src/content/blog/*.md. The filename is the URL slug:
// src/content/blog/foo.md -> /blog/foo/
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    // Service slug from src/data/site.ts this post should link to
    relatedService: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
