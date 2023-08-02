import { useState } from "react";
import Item from "./Item";

/**
 * A React component that renders a list of items with the ability to sort them by different criteria and clear the list.
 * @param {Object} props - The component props.
 * @param {Array} props.items - An array of objects representing the items to be displayed in the list.
 * @param {Function} props.onDeleteItem - A function to be called when an item is deleted from the list.
 * @param {Function} props.onToggleItem - A function to be called when an item's packed status is toggled.
 * @param {Function} props.onClearList - A function to be called when the list is cleared.
 * @returns {JSX.Element} The rendered component.
 */
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => Number(a.packed - b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
