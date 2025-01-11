import { h } from 'preact'; // Ensure this is imported
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
        console.log(`Fetching: /content/pages/${name}.md`);
        const data = await getMarkdownContent('/content/pages', name);
        setContent(data);
      } catch (err) {
        console.error(`Failed to fetch content for: ${name}`);
        console.error(err.message);
        setError(`Could not load content for: ${name}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [name]);

  const htmlContent = useMemo(
    () => (content ? parseMarkdown(content.content) : ''),
    [content]
  );

  if (isLoading) {
    return <p>Loading...</p>; // Add a spinner or loader for better UX
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