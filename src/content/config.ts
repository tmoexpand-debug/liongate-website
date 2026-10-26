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

// City pages: src/content/locations/burbank.md -> /pest-control/burbank/
// Astro reserves `slug` on content collections (it becomes entry.slug from
// the filename or the frontmatter slug). It cannot also be a schema field.
const locations = defineCollection({
  type: 'content',
  schema: z.object({
    city: z.string(),
    title: z.string(),
    description: z.string(),
    neighborhoods: z.array(z.string()),
    localPests: z.array(z.string()),
    faqs: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })),
  }),
});

export const collections = { blog, locations };
