import React, { useState, useEffect, useRef } from "react";

interface IframeAutoHeightProps {
    srcDoc: string;
}

export default function ReactIframeDynamicHeight({ srcDoc }: IframeAutoHeightProps) {
  const [iframeHeight, setIframeHeight] = useState<number | undefined>(
    undefined
  );
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (divRef.current) {
      // Create a temporary div and set its inner HTML
      const tempDiv = document.createElement("div");
      tempDiv.style.visibility = "hidden";
      tempDiv.style.position = "absolute";
      tempDiv.innerHTML = srcDoc;
      document.body.appendChild(tempDiv);

      // Get the height of the temporary div
      const contentHeight = tempDiv.offsetHeight;

      // Remove the temporary div
      document.body.removeChild(tempDiv);

      // Set the iframe height based on the div's content height
      setIframeHeight(contentHeight);
    }
  }, [srcDoc]);

  return (
    <>
      <div style={{ display: "none" }} ref={divRef}></div>
      <iframe height={iframeHeight} srcDoc={srcDoc} />
    </>
  );
}
