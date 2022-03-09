import React from "react";
import { ChevronIcon } from "../icons/ChevronIcon";
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
            <ChevronIcon width="20" height="20" fill="currentColor" />
        </div>
        {isOpen && <DefinitionsView json_data={jsonData} style={definitionsViewStyle}/>}
        </>
    );
}

export default React.memo(CollectionWord);