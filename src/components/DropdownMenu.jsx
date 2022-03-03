import React from "react"

export function DropdownMenu({ header, body, footer, isHidden }) {
    return !isHidden && (
        <div className="dropdown-menu card">
            <div className="dropdown-header">
                {header}
            </div>
            <div className="dropdown-body">
                {body}
            </div>
            <div className="dropdown-footer">
                {footer}
            </div>
        </div>
    )
}

export function DropdownItem(props) {
    const [isActive, setActive] = React.useState(false)
    return (
        <div className={isActive ? "dropdown-item active" : "dropdown-item"} onClick={_ => setActive(!isActive)}>
            {props.children}
        </div>
    )
}