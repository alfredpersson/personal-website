import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    problem: z.string(),
    role: z.string(),
    decisions: z
      .array(
        z.object({
          decision: z.string(),
          because: z.string(),
          measuredBy: z.string(),
        })
      )
      .length(3),
    headlineNumber: z.string(),
    status: z.enum(['live', 'reserved']),
    order: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    permalink: z.string().optional(),
  }),
});

export const collections = { caseStudies, blog };
