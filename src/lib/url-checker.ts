/**
 * Checks if the given URL contains the specified word.
 * @param url - The URL to check.
 * @param word - The word to look for in the URL.
 * @returns The word if it is present in the URL, otherwise null.
 */
const findWordInUrl = (url: string, word: string): string | null => {
  // Create a regular expression to check for the word in the URL
  const regex = new RegExp(`\\b${word}\\b`, 'i'); // Use word boundaries for exact match
  return regex.test(url) ? word : null;
};

export default findWordInUrl;
