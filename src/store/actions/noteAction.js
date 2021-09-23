const addNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .add({
        ...note,
        favorite: false,
        createdAt: new Date(),
      })
      .then(() => {
        console.log("note added successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(note.id)
      .delete()

      .then(() => {
        console.log("note successfully deleted!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const toggleFaveNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const favstatus = !note.favorite;
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(note.id)
      .update({ favorite: favstatus })
      .then(() => {
        console.log("this is your favorite note");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(note.id)
      .update({ title: note.title, content: note.content })
      .then(() => {
        console.log("your note has been successfuly editted");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default addNote;
