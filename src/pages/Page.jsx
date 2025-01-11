import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { getMarkdownContent } from '../utils/fetchMarkdown';

const Page = ({ name }) => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        console.log(`Fetching: /content/pages/${name}.md`); // Log fetch URL
        const data = await getMarkdownContent('/content/pages', name);
        setContent(data);
      } catch (err) {
        console.error(`Failed to fetch content for: ${name}`);
        console.error(err.message);
        setError(`Could not load content for: ${name}`);
      }
    };

    fetchContent(); // Call the async function
  }, [name]); // Dependency array ensures it runs when 'name' changes

  if (error) {
    return <p>{error}</p>;
  }

  if (!content) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{content.data.title}</h1>
      <p>{content.data.description}</p>
      <div dangerouslySetInnerHTML={{ __html: content.content }} />
    </div>
  );
};

export default Page;