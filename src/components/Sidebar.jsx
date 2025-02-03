import { useState, useCallback } from "react";

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar() {
  // State to hold the current menu items
  let [menuItems, setMenuItems] = useState([]);
  
  // State to hold the new menu item input value
  let [newMenuItem, setNewMenuItem] = useState("");
  
  // State to hold the filter text
  let [filter, setFilter] = useState("");

  // Callback to add a new menu item
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim()) {
      setMenuItems([newMenuItem, ...menuItems]);
      setNewMenuItem(""); // Clear the input field after adding
    }
  }, [menuItems, newMenuItem]);

  // Filter menu items based on the filter text
  let filteredMenuItems = menuItems.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {/* Input to add a new menu item */}
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      />
      <br />
      
      {/* Button to add the new menu item */}
      <button onClick={addMenuItem}>Add Item</button>
      <br />
      
      {/* Input to filter the menu items */}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />
      
      {/* Render the filtered menu items */}
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
