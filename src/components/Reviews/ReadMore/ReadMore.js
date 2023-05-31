import { useEffect, useState } from 'react';

export const ReadMore = ({ text, maxLength }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [truncatedText, setTruncatedText] = useState(text);

  useEffect(() => {
    if (!isExpanded) {
      setTruncatedText(text.slice(0, maxLength));
    } else {
      setTruncatedText(text);
    }
  }, [isExpanded, maxLength, text]);
  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  if (text.length > maxLength) {
    return (
      <div className="text">
        <p>
          {truncatedText}
          {isExpanded ? '' : '...'}
        </p>

        <button className="read-more" onClick={toggleExpand} type="button">
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      </div>
    );
  } else {
    return (
      <div className="text">
        <p>{truncatedText}</p>
      </div>
    );
  }
};
