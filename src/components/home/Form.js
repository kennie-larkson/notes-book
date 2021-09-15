import React from "react";
import useInput from "../../customHook/useInput.js";
import addNote from "../../store/actions/noteAction.js"
import { useDispatch } from "react-redux";

const Form = () => {
  const [title, bindTitle, resetTitle] = useInput();
  const [content, bindContent, resetContent] = useInput();
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content })
    dispatch(addNote({ title, content }))
    resetTitle();
    resetContent();
  };
  return (
    <div className="session">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text">New Note</h5>

        <div className="input-field ">
          <input id="note-title" type="text" className="validate" {...bindTitle} />
          <label className="active" htmlFor="note-title">
            Note Title
          </label>
        </div>
        <div className="input-field">
          <textarea id="note-content" className="materialize-textarea" {...bindContent}></textarea>
          <label htmlFor="textarea1">Note Content</label>
        </div>
        <button className="btn green">Add</button>
      </form>
    </div>
  );
};

export default Form;
