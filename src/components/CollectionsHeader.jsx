import React from "react"
import { useTranslation } from "react-i18next"
import "../styles/CollectionsHeader.css"

export default function CollectionsHeader() {
    const [isSelecting, setSelecting] = React.useState(false)
    const [t, _] = useTranslation("collections")

    function selectButtonClicked() {
        setSelecting(select => !select)

    }

    return (
        <div className="collections-header">
            <button className="createCollectionButton">
                {t("createCollectionButton")}
            </button>
            <button className="selectCollectionButton" onClick={selectButtonClicked}>
                {isSelecting ? t("cancelSelectionButton") : t("startSelectionButton")}
            </button>
            {isSelecting && (<button className="deleteCollectionButton">
                {t("deleteCollectionButton")}
            </button>)}
        </div>
    )
}