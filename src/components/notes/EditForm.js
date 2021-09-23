import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../../store/actions/noteAction";
import useInput from "./../../customHook/useInput";
import { useHistory } from "react-router-dom";

const EditForm = () => {
  const note = useSelector((state) => state.note);

  const [title, bindTitle, resetTitle] = useInput(note.title);
  const [content, bindContent, resetContent] = useInput(note.content);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && content) {
      dispatch(updateNote({ id: note.id, title, content }));
      resetTitle();
      resetContent();
      history.push("/");
    } else {
      return null;
    }
  };
  return (
    <div className="session">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text">New Note</h5>

        <div className="input-field ">
          <input
            id="note-title"
            type="text"
            className="validate"
            {...bindTitle}
          />
          <label className="active" htmlFor="note-title">
            Note Title
          </label>
        </div>
        <div className="input-field">
          <textarea
            id="note-content"
            className="materialize-textarea"
            {...bindContent}
          ></textarea>
          <label className="active" htmlFor="textarea1">Note Content</label>
        </div>
        <button className="btn green">Update</button>
      </form>
    </div>
  );
};

export default EditForm;
