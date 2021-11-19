import Note from "./Note";

function Notes(props) {

    const notes = props.notes;

    // Pass Note ID Function Using Note
    function passDeleteNoteID(id) {
        props.onDelete(id);
    }

    return (

        <div className="Notes row p-3">

            {notes.map((element, index) =>

                <Note
                    key={index}
                    id={index}
                    title={element.title}
                    content={element.content}
                    onDeleteID={passDeleteNoteID}
                />

            )}

        </div>

    );
}

export default Notes;