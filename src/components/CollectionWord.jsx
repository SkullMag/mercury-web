import React from "react";
import "../styles/CollectionWord.css"
import DefinitionsView from "./DefinitionsView";


function CollectionWord({ style, jsonData }) {
    const [isOpen, setOpen] = React.useState(false)
    const handleWordCardClick = () => setOpen(prev => !prev)

    const chevronStyle = {
        transition: "transform 0.3s",
        transform: isOpen ? "translateY(-50%) rotate(90deg)" : "",
    }

    const definitionsViewStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.03)",
        paddingTop: "10px",
        margin: "0"
    }

    return (<>
        <div className="collectionWordCard" style={style} onClick={handleWordCardClick}>
            <p className="collectionWord">{jsonData.word}</p>
            <svg className="chevron" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" style={chevronStyle}>
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </div>
        {isOpen && <DefinitionsView json_data={jsonData} style={definitionsViewStyle}/>}
        </>
    );
}

export default React.memo(CollectionWord);