export default function formatMarkdown(markdown: string): string {
  // Split the markdown content by lines
  const lines = markdown.split("\n");

  // Array to store the formatted markdown lines
  const formattedLines: string[] = [];

  let lastLineWasEmpty = false;

  // Regular expression to match headings in markdown (e.g., #, ##, ###, etc.)
  const headingRegex = /^(#{1,6})\s*(.*)$/;

  lines.forEach((line) => {
    // Trim whitespace from both ends of the line
    line = line.trim();

    // Handle heading formatting: remove any spaces before the heading
    const match = line.match(headingRegex);
    if (match) {
      const level = match[1]; // The # symbols (heading level)
      const title = match[2].trim(); // The heading text (trim spaces)

      // Ensure that the heading is properly formatted with no leading spaces
      line = `${level} ${title}`;
    }

    // Ensure no consecutive empty lines (more than one empty line)
    if (line === "") {
      if (!lastLineWasEmpty) {
        formattedLines.push(""); // Only add one empty line
      }
      lastLineWasEmpty = true; // Mark that we added an empty line
    } else {
      formattedLines.push(line); // Add non-empty lines
      lastLineWasEmpty = false; // Reset the empty line flag
    }
  });

  // Join the formatted lines with single new lines
  return formattedLines.join("\n");
}
