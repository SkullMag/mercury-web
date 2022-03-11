import React from "react"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom"
import "../styles/FinishLearningCard.css"

export default function FinishLearningCard({ wordsStatus }) {
    const { authorUsername, collectionName } = useParams()
    const navigate = useNavigate()
    const { t } = useTranslation("learning")
    const percentage = Math.floor(wordsStatus.reduce((a, b) => a + (b.status === "true" ? 1 : 0), 0) / wordsStatus.length * 100)

    function goBackToCollection() {
        navigate("/collections/" + authorUsername + "/" + collectionName)
    }
    
    return (
        <section>
            <div className="card finishLearningCard">
                <div className="youRememberText">
                    <p className="youRemember">{t("youRemember")}</p>
                    <p className="percentageOfWords">{percentage}% {t("ofWords")}</p>
                </div>
                <button className="goBackToCollectionButton" onClick={goBackToCollection}>
                    {t("goBack")}
                </button>
            </div>
        </section>
    )
}