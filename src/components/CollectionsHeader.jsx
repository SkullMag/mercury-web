import React from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { SERVER_IP } from "../constants"
import "../styles/CollectionsHeader.css"
import { DropdownMenu, DropdownItem } from "./DropdownMenu"

export default function CollectionsHeader( {collections, setCollections} ) {
    const [isSelecting, setSelecting] = React.useState(false)
    const [t, ] = useTranslation("collections")
    const [dropdownHidden, setDropdownHidden] = React.useState(true)
    const authState = useSelector(state => state.auth)
    const [collectionName, setCollectionName] = React.useState("")
    const [errorText, setErrorText] = React.useState("")

    function selectButtonClicked() {
        setSelecting(select => !select)
    }

    function collectionNameChanged(event) {
        setCollectionName(event.target.value)
    }

    async function createCollection() {
        if (collectionName.length < 3) {
            setErrorText(t("collectionNameLengthError"))
            return
        }
        let response = fetch([SERVER_IP, "api", "createCollection", 
                                      authState.token, collectionName].join("/"), 
                                      { method: "POST" })
        if (!response.ok) {
            setErrorText(t("collectionAlreadyCreatedError"))
            return
        }
        response = await response
        if (response.status === 200) {
            setCollections({
                collections: [...collections, {name: collectionName, wordCount: 0, username: authState.username}]
            })
            setDropdownHidden(hidden => !hidden)
        }
    }

    return (
        <div className="collections-header">
            <button className="createCollectionButton" onClick={() => setDropdownHidden(hidden => !hidden)}>
                {t("createCollectionButton")}
            </button>
            <button className="selectCollectionButton" onClick={selectButtonClicked}>
                {isSelecting ? t("cancelSelectionButton") : t("startSelectionButton")}
            </button>
            {isSelecting && (<button className="deleteCollectionButton">
                {t("deleteCollectionButton")}
            </button>)}
            <DropdownMenu 
                style={{transform: "translateX(0) translateY(120px)", "text-align": "center"}} 
                header={(
                    <>
                        <p>{t("createCollectionDropdownTitle")}</p>
                        <p className="errorText" style={{"font-size": "16px"}}>{errorText}</p>
                    </>
                )} 
                body={(
                    <input type="text" className="collectionNameInput" placeholder={t("collectionNameInputPlaceholder")} value={collectionName} onChange={collectionNameChanged} />
                )} 
                footer={(
                    <button className="addCollectionButton" onClick={createCollection}>
                        {t("addCollectionButton")}
                    </button>
                )}
                isHidden={dropdownHidden} />
            
        </div>
    )
}