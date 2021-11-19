function Note(props) {

    function HandleClick() {
        props.onDeleteID(props.id);
    }

    return (

        <div className="col-xl-3 col-lg-4 col-md-6 p-2">

            <div className="Note p-4 m-auto rounded shadow">

                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <button className="DeleteButton float-end" onClick={HandleClick}><i className="bi bi-trash-fill"></i></button>

            </div>

        </div>

    );
}

export default Note;
