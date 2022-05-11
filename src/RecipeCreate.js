import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormState});

  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createRecipe(formData)
    setFormData({...initialFormState})
  }
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody style={{backgroundColor: "#fff0c7"}}>
          <tr>
            <td>
              <label htmlFor="name">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="name"
                onChange={handleChange}
                value={formData.name}
              />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
              <input
                id="photo"
                name="photo"
                type="url"
                placeholder="photo"
                onChange={handleChange}
                value={formData.photo}
              />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="ingredients"
                rows={2}
                onChange={handleChange}
                value={formData.ingredients}
              />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
              <textarea
                id="preparation"
                name="preparation"
                placeholder="preparation"
                rows={2}
                onChange={handleChange}
                value={formData.preparation}
              />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
