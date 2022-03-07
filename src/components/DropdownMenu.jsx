import React from "react"

export function DropdownMenu({ header, body, footer, isHidden, style }) {
    return !isHidden && (
        <div className="dropdown-menu card" style={style}>
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

    function itemSelected(e) {
        const status = isActive
        setActive(!status)
        props.onSelect(e.target.textContent, status)
    }
    return (
        <div className={isActive ? "dropdown-item active" : "dropdown-item"} onClick={itemSelected}>
            {props.children}
            <div className="right-item" style={{"margin-left": "auto", display: isActive ? "flex" : "none"}}>
                {props.right}
            </div>
        </div>
    )
}