export const countRecursiveItems = (items) => {
  let total = 0;
  for (const item of items) {
    total += 1; // Count the current comment
    if (item.children && Array.isArray(item.children)) {
      total += countRecursiveItems(item.children); // Recursively count children
    }
  }
  return total;
};
