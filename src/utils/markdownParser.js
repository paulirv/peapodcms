import { marked } from 'marked';

// Function to parse Markdown
export function parseMarkdown(markdownContent) {
  return marked(markdownContent);
}