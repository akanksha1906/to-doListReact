import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

function App() {
  // state = {
  //   items: [],
  //   item: "",
  //   selectedItem: {},
  //   editItem: false
  // };
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [selectedItem, setSelectedItem] = useState({});
  const [editItem, setEditItem] = useState(false);

  const handleChange = e => {
    // this.setState({
    //   item: e.target.value,
    //   setItem = e.target.value
    // });
    setItem(e.target.value);
  };

  const handleSubmit = type => {
    let updatedItems;
    // let { items, item, selectedItem } = this.state;

    if (type === "add") {
      const newItem = {
        id: uuid(),
        title: item
      };
      //console.log(newItem);
      updatedItems = [...items, newItem];
    } else {
      let updatedItem = { ...selectedItem, title: item };

      let updatedItemIndex = items.findIndex(
        item => item.id === updatedItem.id
      );

      items[updatedItemIndex] = updatedItem;
      updatedItems = items;
    }

    // this.setState({
    //   items: updatedItems,
    //   item: "",
    //   editItem: false,
    //   selectedItem: {}
    // });
    setItems(updatedItems);
    setItem("");
    setEditItem(false);
    setSelectedItem({});
  };

  const clearList = () => {
    // this.setState({
    //   items: []
    // });
    setItems([]);
  };

  const handleDelete = id => {
    // const filteredItems = this.state.items.filter(item => item.id !== id);
    const filteredItems = items.filter(item => item.id !== id);
    // this.setState({
    //   items: filteredItems
    // });
    setItems(filteredItems);
  };

  const handleEdit = id => {
    // const { items } = this.state;

    const updatedIndex = items.findIndex(item => item.id === id);
    if (updatedIndex !== -1) {
      const selectedItem = items.find(item => item.id === id);
      //  this.setState({ selectedItem, editItem: true, item: selectedItem.title });
      setSelectedItem(selectedItem);
      setEditItem(true);
      setItem(selectedItem.title);
    }
  };

  // const { items, item, editItem } = this.state;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Todo Input</h3>
          <TodoInput
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={editItem}
          />
          <TodoList
            items={items}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
