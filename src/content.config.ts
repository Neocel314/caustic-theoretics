import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({ title: z.string(), date: z.coerce.date(), category: z.enum(['essays', 'notes', 'fragments', 'projects']), description: z.string(), tags: z.array(z.string()).default([]), featured: z.boolean().default(false), draft: z.boolean().default(false) }),
});
export const collections = { writing };
