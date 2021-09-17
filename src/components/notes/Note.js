import React from "react";
import {deleteNote} from "../../store/actions/noteAction.js"
import { useDispatch} from "react-redux"

const Note = ({ note }) => {
  const dispatch = useDispatch()

  const deleteNoteHnadler = () => {
    dispatch(deleteNote(note))
  }
  return (
    <div className="note white">
      <div className="right-align">
        <i className="material-icons red-text" style={{ cursor: "pointer" }}>
          favorite
        </i>
        <i className="material-icons" style={{ cursor: "pointer" }} onClick={deleteNoteHnadler}>
          delete
        </i>
      </div>
      <h5 className="black-text">{note.title}</h5>
      <p className="truncate">{note.content}</p>
      <p className="grey-text">2 days ago</p>
      <div className="right-align">
        <i className="material-icons black-text" style={{ cursor: "pointer" }}>edit</i>
      </div>
    </div>
  );
};

export default Note;
