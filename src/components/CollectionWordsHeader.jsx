import React from "react"
import { useTranslation } from "react-i18next"
import { CollectionWordsContext } from "../context/CollectionWordsContext"
import "../styles/CollectionWordsHeader.css"

export default function CollectionWordsHeader({ collectionName }) {
    const { t } = useTranslation("collectionWords")
    const { isEditing, toggleEditing } = React.useContext(CollectionWordsContext)

    return (
        <div className="card collectionHeader">
            <p className="collectionTitle">{collectionName}</p>
            <div className="collectionWordsHeaderButtons">
                <button className="selectCollectionButton" onClick={toggleEditing}>
                    {isEditing ? t("cancelEditingButton", {ns: "collections"}) : t("startEditingButton", {ns: "collections"})}
                </button>
                <button className="learnWordsButton">{t("learnButton")}</button>
            </div>
        </div>
    )
}