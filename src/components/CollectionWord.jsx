import React from "react";
import { useTranslation } from "react-i18next";
import { CollectionWordsContext } from "../context/CollectionWordsContext";
import { ChevronIcon } from "../icons/ChevronIcon";
import "../styles/CollectionWord.css"
import DefinitionsView from "./DefinitionsView";


function CollectionWord({ style, jsonData, onDelete }) {
    const [isOpen, setOpen] = React.useState(false)
    const { t } = useTranslation("collections")
    const { isEditing } = React.useContext(CollectionWordsContext)

    const handleWordCardClick = () => {
        if (!isEditing) {
            setOpen(prev => !prev)
        }
    }

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
        {isEditing && (
            <button className="deleteCollectionButton" style={{
                    marginLeft: "0",
                    marginRight: "10px"
                }}
                onClick={() => onDelete(jsonData.word)}>
                {t("deleteCollectionButton")}
            </button>
        )}
            <p className="collectionWord">{jsonData.word}</p>
            <ChevronIcon width="15" height="15" fill="currentColor" style={chevronStyle} />
        </div>
        {isOpen && <DefinitionsView json_data={jsonData} style={definitionsViewStyle}/>}
        </>
    );
}

export default React.memo(CollectionWord);