import React from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { CollectionWordsContext } from "../context/CollectionWordsContext"
import "../styles/CollectionWordsHeader.css"

export default function CollectionWordsHeader({ authorUsername, collectionName }) {
    const { t } = useTranslation("collectionWords")
    const { isEditing, toggleEditing, collectionWords } = React.useContext(CollectionWordsContext)
    const navigate = useNavigate()

    function openLearningWindow() {
        navigate("/learn/" + authorUsername + "/" + collectionName, {
            state: collectionWords.slice(0, 20)
        })
    }

    return (
        <>
        <div className="card collectionHeader">
            <p className="collectionTitle">{collectionName}</p>
        </div>
        <div className="collectionWordsHeaderButtons">
        <button className="learnWordsButton" onClick={openLearningWindow}>{t("learnButton")}</button>
            <button className="selectCollectionButton" onClick={toggleEditing}>
                {isEditing ? t("cancelEditingButton", {ns: "collections"}) : t("startEditingButton", {ns: "collections"})}
            </button>
        </div>
        </>
    )
}