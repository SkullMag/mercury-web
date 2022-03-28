import React from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { CollectionWordsContext } from "../context/CollectionWordsContext"
import "../styles/CollectionWordsHeader.css"

export default function CollectionWordsHeader({ authorUsername, collectionName }) {
    const { t } = useTranslation("collectionWords")
    const { isEditing, toggleEditing, collectionWords } = React.useContext(CollectionWordsContext)
    const navigate = useNavigate()
    const authState = useSelector(state => state.auth)

    function openLearningWindow() {
        navigate("/learn/" + authorUsername + "/" + collectionName, {
            state: collectionWords.slice(0, 20)
        })
    }

    return (
        <>
        <div className="collectionWordsHeaderButtons">
            {collectionWords && collectionWords.length > 0 && (<button className="learnWordsButton" onClick={openLearningWindow}>{t("learnButton")}</button>)}
            {collectionWords && collectionWords.length > 0 && authorUsername === authState.username && (<button className="selectCollectionButton" onClick={toggleEditing}>
                {isEditing ? t("cancelEditingButton", {ns: "collections"}) : t("startEditingButton", {ns: "collections"})}
            </button>)}
        </div>
        <div className="card collectionHeader">
            <p className="collectionTitle">{collectionName}</p>
        </div>
        </>
    )
}