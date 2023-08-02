import React from "react";
/**
 * Renders a single item in a list.
 * @param {Object} props - The component props.
 * @param {Object} props.item - The item to be displayed.
 * @param {Function} props.onDeleteItem - The function to be called when the delete button is clicked.
 * @param {Function} props.onToggleItem - The function to be called when the packed status is toggled.
 * @returns {JSX.Element} - The rendered item component.
 */
export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
