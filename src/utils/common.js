export function createTitle(text) {
  if (text) {
    const sentences = text.split('\n');
    if (sentences.length > 1) {
      return `${sentences[0]} ${sentences[1]}`.trim();
    }
  }
  return '';
}
