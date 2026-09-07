import { getCollection, type CollectionEntry } from 'astro:content';
export type Post = CollectionEntry<'writing'>;
export const allWriting = async () => (await getCollection('writing', ({ data }) => !data.draft)).sort((a,b) => b.data.date.getTime()-a.data.date.getTime());
export const sitePath = (path = '/') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
export const postUrl = (post: Post) => sitePath(`/${post.data.category}/${post.id}/`);
export const dateLabel = (date: Date) => date.toISOString().slice(0,10).replaceAll('-', '.');
export const categoryLabel = (category: string) => ({ essays: 'Essay', notes: 'Note', fragments: 'Fragment', projects: 'Project' }[category] || category);
export const readTime = (post: Post) => Math.max(1, Math.ceil((post.body || '').split(/\s+/).length / 220));
