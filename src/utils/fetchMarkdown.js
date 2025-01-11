import matter from 'gray-matter';

export const getMarkdownContent = async (directory, slug) => {
  const response = await fetch(`${directory}/${slug}.md`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Markdown file: ${slug}.md`);
  }
  const text = await response.text();
  const { data, content } = matter(text);
  return { data, content };
};