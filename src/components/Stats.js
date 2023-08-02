/**
 * Displays statistics about a list of items.
 * @param {Object[]} items - The array of items.
 * @param {boolean} items[].packed - Indicates whether the item has been packed or not.
 * @returns {JSX.Element} - The JSX element containing the statistics message.
 */
export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your list 🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  let message;
  if (percentage === 100) {
    message = "You got everything! You are ready to go ✈️";
  } else {
    message = `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`;
  }

  return (
    <footer className="stats">
      <em>{message}</em>
    </footer>
  );
}
