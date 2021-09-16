import React from "react";

const Note = ({note}) => {
  return (
    <div className="note">
    {note.title}
    </div>
  );
};

export default Note;
