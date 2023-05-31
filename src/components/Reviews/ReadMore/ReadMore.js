import { useState } from 'react';

export const ReadMore = ({ text, maxLength }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [truncatedText, setTruncatedText] = useState(text);

  useState(() => {
    if (!isExpanded) {
      setTruncatedText(text.slice(0, maxLength));
    } else {
      setTruncatedText(text);
    }
  }, [isExpanded]);
  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div>
      <p>{truncatedText}</p>
      {text.length > maxLength && (
        <button onClick={toggleExpand}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};
