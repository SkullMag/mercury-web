import React from "react"
import "../styles/CollectionsHeader.css"

export default function CollectionsHeader() {
    const [isSelecting, setSelecting] = React.useState(false)

    function selectButtonClicked() {
        setSelecting(select => !select)

    }

    return (
        <div className="collections-header">
            <button className="createCollectionButton">
                Create
            </button>
            <button className="selectCollectionButton" onClick={selectButtonClicked}>
                {isSelecting ? "Cancel" : "Select"}
            </button>
            {isSelecting && (<button className="deleteCollectionButton">
                Delete
            </button>)}
        </div>
    )
}