export type Document = {
  title: string;
  content: string;
};

export type DocumentIndex = Map<string, Set<Document>>;

/**
 * Builds a DocumentIndex from a list of Documents.
 * The index's keys are the words in all the documents,
 * and the values are the documents the word appears in.
 */
export function buildIndex(docs: Document[]): DocumentIndex {
  const index: DocumentIndex = new Map();

  for (const doc of docs) {
    const words = doc.content.match(/\b(\w+)\b/g);

    if (words) {
      for (const word of words) {
        const lowerWord = word.toLowerCase();

        if (index.has(lowerWord)) {
          index.get(lowerWord)!.add(doc);
        } else {
          index.set(lowerWord, new Set([doc]));
        }
      }
    }
  }

  return index;
}
