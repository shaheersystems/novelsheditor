import React from "react";
import DOMPurify from "dompurify";

function HTMLRenderer({ htmlString }) {
  // Sanitize the HTML string
  const sanitizedHTML = DOMPurify.sanitize(htmlString);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
}

export default HTMLRenderer;
