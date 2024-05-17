export const useCharWith = (editor) => {
  if (!editor?.current) return 20;
  const span = document.createElement('span');
  span.textContent = 'M';
  span.style.font = getComputedStyle(editor.current).font;
  span.style.visibility = 'hidden';
  document.body.appendChild(span);
  const charWith = span.getBoundingClientRect().width;
  document.body.removeChild(span);
  console.log(charWith);
  return charWith;
};
