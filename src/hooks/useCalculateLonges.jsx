import { useCharWith } from './useCharWith';

export const useCalculateLonges = (view) => {
  const width = useCharWith(view);

  if (view) {
    const doc = view.state.doc;
    const chartWidth = width;
    let maxLineLength = 0;

    for (let i = 0; i < doc.lines; i++) {
      const line = doc.line(i);
      if (line.length > maxLineLength) {
        maxLineLength = line.length;
      }
    }

    console.log(maxLineLength);
    const newWidth = maxLineLength * chartWidth;
    return newWidth;
  }
};
