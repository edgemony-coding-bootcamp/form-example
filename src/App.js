import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: { value: "", modified: false },
    email: { value: "", modified: false },
  });
  function updateData(field) {
    return function (event) {
      setFormData({
        ...formData,
        [field]: { value: event.target.value, modified: true },
      });
    };
  }

  // updateData('name')
  // function updateName(event) {
  //   setFormData({
  //     ...formData,
  //     name: { value: event.target.value, modified: true },
  //   });
  // };

  // updateData('email')
  // function updateEmail(event) {
  //   setFormData({
  //     ...formData,
  //     email: { value: event.target.value, modified: true },
  //   });
  // };

  function onSubmit(event) {
    const data = Object.keys(formData).reduce(
      (acc, key) => ({
        ...acc,
        [key]: formData[key].value,
      }),
      {}
    );
    console.log(data);
    event.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={formData.name.value}
            name="name"
            id="name"
            onChange={updateData("name")}
            className={formData.name.modified ? "modified" : ""}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={formData.email.value}
            name="email"
            id="email"
            className={formData.email.modified ? "modified" : ""}
            onChange={updateData("email")}
            required
          />
        </div>
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}

export default App;
