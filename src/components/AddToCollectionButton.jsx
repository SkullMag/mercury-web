import React from "react";
import { BookmarkIcon } from "../icons/BookmarkIcon"
import { DropdownMenu, DropdownItem } from "./DropdownMenu";
import "../styles/DropdownMenu.css"

export default function AddToCollectionButton() {
    const [dropdownHidden, setDropdownHidden] = React.useState(true)
    return (
        <>
            <button title="Add to collection" className="card addToCollection" onClick={(e) => setDropdownHidden(!dropdownHidden)}> 
                <BookmarkIcon width={19} height={19} fill="white" />
            </button>
            <DropdownMenu 
                title="Choose collections" 
                header={(<p>Choose collections</p>)}
                body={(<>
                        <DropdownItem>Test item</DropdownItem>
                        <DropdownItem>Test item</DropdownItem>
                        <DropdownItem>Test item</DropdownItem>
                        <DropdownItem>Test item</DropdownItem>
                        <DropdownItem>Test item</DropdownItem>
                        <DropdownItem>Test item</DropdownItem>
                        <DropdownItem>Test item</DropdownItem>
                    </>
                )} 
                footer={(
                    <>
                        <button className="addToCollectionsButton">Add</button>
                        <br />
                        <button className="cancelChoiceButton">Cancel</button>
                    </>
                )}
                isHidden={dropdownHidden}
            />
                
        </>
    )
}