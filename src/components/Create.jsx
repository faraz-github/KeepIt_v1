import React, { useState } from "react";

function Create(props) {

    //Custom Required Function as the required not working in field.
    function myalert() {
        alert("Please Enter Note Title.");
    }

    //State Variable
    const [textInput, setTextInput] = useState({
        title: "",
        content: ""
    });

    //OnChange Function
    function HandleChange(event) {
        const { name, value } = event.target;

        setTextInput(prevState => {
            if (name === "noteTitle") {
                return ({
                    title: value,
                    content: prevState.content
                })
            } else if (name === "noteContent") {
                return ({
                    title: prevState.title,
                    content: value
                })
            }
        });
    }

    //On Submit Function
    function HandleClick(event) {

        if(textInput.title === ""){
            myalert();
        }else{
            props.onAdd(textInput);
        }
        
        event.preventDefault();
        setTextInput({
            title: "",
            content: ""
        });
    }

    return (
        <div className="Create p-4 shadow">

            <form className="form-group">

                <input className="form-control mb-3"
                    type="text"
                    placeholder="Title Here"
                    name="noteTitle"
                    value={textInput.title}
                    onChange={HandleChange}
                ></input>

                <textarea className="form-control mb-3"
                    placeholder="Write your note here..."
                    name="noteContent"
                    value={textInput.content}
                    onChange={HandleChange}>
                </textarea>

                <button className="AddButton float-end" type="submit" onClick={HandleClick}><i className="bi bi-plus-square-fill"></i></button>

            </form>

        </div>

    )

}

export default Create;