import React from "react";
import { BookmarkIcon } from "../icons/BookmarkIcon"
import { DropdownMenu, DropdownItem } from "./DropdownMenu";
import "../styles/DropdownMenu.css"
import { SERVER_IP } from "../constants";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { capitalize } from "../utils";
import { CheckIcon } from "../icons/CheckIcon";

export default function AddToCollectionButton({ word }) {
    const [dropdownHidden, setDropdownHidden] = React.useState(true)
    const authState = useSelector(state => state.auth)
    const [collections, setCollections] = React.useState([])
    let selectedCollections = new Set()

    useEffect(async () => {
        const response = await fetch([SERVER_IP, "api", "getCollections", authState.token, authState.username].join("/"))
        if (response.status === 200) {
            setCollections(await response.json())
        }
    }, [authState.username])

    function collectionSelected(name, wasSelected) {
        wasSelected ? selectedCollections.delete(name) : selectedCollections.add(name)
    }

    function saveChanges() {
        selectedCollections.forEach(async name => {
            await fetch([SERVER_IP, "api", "addWordToCollection", authState.token, 
                         name.toLowerCase(), word].join("/"), { method: "POST" })
        })
        setDropdownHidden(hidden => !hidden)
    }
    
    return (
        <>
            <button title="Add to collection" className="card addToCollection" onClick={() => setDropdownHidden(hidden => !hidden)}> 
                <BookmarkIcon width={19} height={19} fill="white" />
            </button>
            <DropdownMenu 
                title="Choose collections" 
                header={(<p>Choose collections</p>)}
                body={collections.map((collection, i) => {
                    return (
                        <DropdownItem onSelect={collectionSelected} key={i} right={<CheckIcon width={32} height={32} fill="white"/>}>
                            {capitalize(collection.name)}
                        </DropdownItem>  
                    )
                })} 
                footer={(
                    <>
                        <button className="addToCollectionsButton" onClick={saveChanges}>Add</button>
                        {/* <br />
                        <button className="cancelChoiceButton" onClick={() => setDropdownHidden(hidden => !hidden)}>Cancel</button> */}
                    </>
                )}
                isHidden={dropdownHidden}
            />
                
        </>
    )
}