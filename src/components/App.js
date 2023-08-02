import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList.js";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

/**
 * Main component of the application.
 * Manages the state of the items list and passes down the necessary props to its child components.
 */
export default function App() {
  const [items, setItems] = useState([]);

  /**
   * Adds a new item to the items list.
   * @param {Object} item - The item to be added.
   */
  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  /**
   * Deletes an item from the items list based on its id.
   * @param {number} id - The id of the item to be deleted.
   */
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  /**
   * Toggles the 'packed' property of an item in the items list based on its id.
   * @param {number} id - The id of the item to be toggled.
   */
  function handleToggleItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  /**
   * Clears the items list after confirming with the user.
   */
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
