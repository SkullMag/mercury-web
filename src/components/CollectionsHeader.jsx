import React from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { SERVER_IP } from "../constants"
import { CollectionsContext } from "../context/CollectionsContext"
import { useCreateCollectionMutation } from "../store/api/collections"
import "../styles/CollectionsHeader.css"
import { DropdownMenu } from "./DropdownMenu"

export default function CollectionsHeader({ setCollections, isPublic }) {
    const { t } = useTranslation("collections")
    const [dropdownHidden, setDropdownHidden] = React.useState(true)
    const [collectionName, setCollectionName] = React.useState("")
    const [errorText, setErrorText] = React.useState("")
    const authState = useSelector(state => state.auth)
    const { isEditing, toggleEditing } = React.useContext(CollectionsContext)
    const [createCollection, createCollectionResult] = useCreateCollectionMutation()

    function collectionNameChanged(event) {
        setCollectionName(event.target.value)
    }

    async function create() {
        if (collectionName.length < 3) {
            setErrorText(t("collectionNameLengthError"))
            return
        }
        try {
            await createCollection({token: authState.token, collectionName: collectionName}).unwrap()
            setDropdownHidden(true)
        } catch (error) {
            setErrorText("Collection already exists")
        }
    }

    return (
        <div className="collections-header">
            <button className="createCollectionButton" onClick={() => setDropdownHidden(hidden => !hidden)}>
                {t("createCollectionButton")}
            </button>
            
            {!isPublic && (<button className="selectCollectionButton" onClick={toggleEditing}>
                {isEditing ? t("cancelEditingButton") : t("startEditingButton")}
            </button>)}
            
            <DropdownMenu 
                style={{transform: "translateX(0) translateY(120px)", "text-align": "center"}} 
                header={(
                    <>
                        <p>{t("createCollectionDropdownTitle")}</p>
                        {errorText && (<p className="errorText" style={{"font-size": "16px"}}>{errorText}</p>)}
                    </>
                )} 
                body={(
                    <input type="text" className="collectionNameInput" placeholder={t("collectionNameInputPlaceholder")} 
                           value={collectionName} onChange={collectionNameChanged} />
                )} 
                footer={(
                    <button className="addCollectionButton" onClick={create}>
                        {t("addCollectionButton")}
                    </button>
                )}
                isHidden={dropdownHidden} />
            
        </div>
    )
}