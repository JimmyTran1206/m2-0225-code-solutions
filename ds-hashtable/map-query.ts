import { Document, DocumentIndex } from './map-index';

/**
 * Queries a DocumentIndex and returns all the Documents that contain
 * any of the words in the query, as a Set.
 */
export function queryIndex(index: DocumentIndex, query: string): Set<Document> {
  const result = new Set<Document>();

  const words = query.match(/\b(\w+)\b/g);
  if (!words) return result;

  for (const word of words) {
    const lowerWord = word.toLowerCase();
    const docs = index.get(lowerWord);
    if (docs) {
      docs.forEach(doc => result.add(doc));
    }
  }

  return result;
}
