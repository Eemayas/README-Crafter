export class Toc {
  concatSpaces: boolean;
  levelBoundaries: [number, number];
  anchorsPrefix: string;
  links: Map<string, number>;
  entries: { indent: number; title: string; link: string }[];

  constructor(
    concatSpaces: boolean = false,
    levelBoundaries: [number, number] = [1, 6],
    anchorsPrefix: string = "",
  ) {
    this.concatSpaces = concatSpaces;
    this.levelBoundaries = levelBoundaries;
    this.anchorsPrefix = anchorsPrefix;
    this.links = new Map<string, number>();
    this.entries = [];
  }

  // Sanitize and generate anchor links, handle duplicates
  generateAnchor(title: string): string {
    let link =
      this.anchorsPrefix +
      title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, this.concatSpaces ? "" : "-");
    const linkCount = this.links.get(link) || 0;

    if (linkCount > 0) {
      link += `-${linkCount}`;
    }
    this.links.set(link, linkCount + 1);
    return link;
  }

  // Check if the heading level is within the allowed range
  shouldBeAdded(indent: number): boolean {
    const [min, max] = this.levelBoundaries;
    return indent >= min && indent <= max;
  }

  // Add entries to the ToC
  addTocEntry(indent: number, title: string) {
    if (!this.shouldBeAdded(indent)) return null;

    const link = this.generateAnchor(title);
    this.entries.push({
      indent: indent - 1,
      title: title,
      link: link,
    });
  }

  // Generate final ToC
  generateToc(
    indentCharacters: string = "-",
    indentSpaces: number = 2,
    trimTocIndent: boolean = true,
  ): string {
    if (this.entries.length === 0) return "";

    const minIndent = trimTocIndent
      ? Math.min(...this.entries.map((e) => e.indent))
      : 0;

    return this.entries
      .map(({ indent, title, link }) => {
        const adjustedIndent = indent - minIndent;
        return (
          " ".repeat(adjustedIndent * indentSpaces) +
          `${indentCharacters} [${title}](#${link})`
        );
      })
      .join("\n");
  }

  // Parse the markdown and extract ToC
  parseMarkdown(markdown: string) {
    const lines = markdown.split("\n");
    const headingRegex = /^(#{1,6})\s+(.*)$/;

    lines.forEach((line) => {
      const match = line.match(headingRegex);
      if (match) {
        const level = match[1].length; // Heading level based on number of #
        const title = match[2].trim();
        this.addTocEntry(level, title);
      }
    });
  }
}
