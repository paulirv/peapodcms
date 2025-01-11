import { h } from 'preact';
import { useState, useEffect, useMemo } from 'preact/hooks';
import { getMarkdownContent } from '../utils/fetchMarkdown';
import { parseMarkdown } from '../utils/markdownParser';

const Page = ({ name }) => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await getMarkdownContent('/content/pages', name);
        setContent(data);
      } catch (err) {
        console.error(`Failed to fetch content for: ${name}`);
        setError(`Could not load content for: ${name}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [name]);

  useEffect(() => {
    if (content) {
      // Update the document title
      if (content.data.title  == 'Home') {
        document.title = 'PeaPodCMS';
      } else {
        document.title = content.data.title + ' | PeaPodCMS' || 'PeaPodCMS';
      }

      // Update the meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          content.data.description || 'Default description for PeaPodCMS.'
        );
      } else {
        console.warn('No <meta name="description"> tag found in the document.');
      }
    }
  }, [content]);

  const htmlContent = useMemo(
    () => (content ? parseMarkdown(content.content) : ''),
    [content]
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!content) {
    return <p>No content available for this page.</p>;
  }

  const { title = 'Untitled', description = 'No description available' } =
    content.data;

  return (
    <main>
      <h1>{title}</h1>
      <p>{description}</p>
      <hr />
      <section
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </main>
  );
};

export default Page;