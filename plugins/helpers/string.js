// helper.js

export const addAnker = (string) => {
  // Regular expression for finding links
  const linkRegex = /(https?:\/\/[^\s]+)/g;
  // Replace links with anchor tags
  return string.replace(linkRegex, '<a href="$1">$1</a>');
 }
