import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createNewLocation } from "../utils/api";

function NewLocationForm({ location, onClose }) {
  const { register, handleSubmit } = useForm();
  const [newEntryLoad, setNewEntryLoad] = useState(false);
  const [error, setError] = useState("")

  async function onSubmit(data) {
    try {
        setNewEntryLoad(true);
        data.latitude = location.latitude;
        data.longitude = location.longitude;
      const newLocation = await createNewLocation(data);
      console.log(newLocation);
      onClose();
    } catch (error) {
      console.log(error);
      setError(error.message);
      setNewEntryLoad(false);
    }
  }
  return (
    <form className="newLocationForm" onSubmit={handleSubmit(onSubmit)}>
    {error ? <h4 className="error">{error}</h4> : null}
      <label htmlFor="title">Title</label>
      <input name="title" required ref={register} />
      <label htmlFor="comments">Comments</label>
      <textarea name="comments" rows={3} ref={register} placeholder="Place your comment here..."></textarea>
      <label htmlFor="description">Description</label>
      <textarea name="description" placeholder="Short description..." rows={3} ref={register}></textarea>
      <label htmlFor="image">Image</label>
      <input name="image" ref={register} placeholder="Place image URL here..."/>
      Or
      {
    // TODO unable image's upload from local machine
      }
      <input type='file'/>
      <label htmlFor="rating">Rating</label>
      <input name="rating" type="number" ref={register} placeholder="Number from 1 to 10"/>
      <label htmlFor="visitDate">Visit Date</label>
      <input name="visitDate" type="date" required ref={register} />
      <button style={{backgroundColor: "blue", color: "white", borderRadius: "4px"}} disabled={newEntryLoad}>{newEntryLoad ? "Created entry" : "Add Location"}</button>
    </form>
  );
}

export default NewLocationForm;
