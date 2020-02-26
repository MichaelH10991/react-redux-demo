import React, { useState, useMemo, useEffect, useCallback } from 'react'
import {
    Toolbar,
    AppBar,
    Button,
    Typography,
    Dialog,
    DialogContent,
    Menu,
    MenuItem,
    useTheme,
    Divider,
} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import DASHBOARDS from './data'
import { Link } from 'react-router-dom'

const DROPDOWN_ICON = <ArrowDropDownIcon />
const MENU_POSITION_PROPS = {
    anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
    transformOrigin: { horizontal: 'left', vertical: 'top' },
}

function useLocation() {
    const [location, setLocation] = useState(window.location)
    useEffect(() => {
        const handler = () => setLocation(window.location)
        window.addEventListener('popstate', handler)
        return () => {
            window.removeEventListener('popstate', handler)
        }
    }, [])
    return location
}

function useMenu(initialState = null) {
    const [menuAnchor, setMenuAnchor] = useState(initialState)
    const handleOpenClick = useCallback(
        clickEvent => setMenuAnchor(clickEvent.currentTarget),
        [setMenuAnchor]
    )
    const handleClose = useCallback(() => setMenuAnchor(null), [])
    return { menuAnchor, handleOpenClick, handleClose }
}

function DashboardMenu() {
    // from useMenu() hook from ./MenuButton
    const { menuAnchor, handleOpenClick, handleClose } = useMenu()
    const pathname = useLocation().pathname

    const BUTTON_STYLE = {
        background: 'red',
        color: 'white',
    }
    return (
        <>
            <Button
                style={BUTTON_STYLE}
                onClick={handleOpenClick}
                endIcon={DROPDOWN_ICON}
            >
                Dashboards
            </Button>
            <Menu
                open={Boolean(menuAnchor)}
                anchorEl={menuAnchor}
                onClose={handleClose}
                onClick={handleClose}
                getContentAnchorEl={null}
                {...MENU_POSITION_PROPS}
            >
                {Object.entries(DASHBOARDS).map(([dashboardId, dashboard]) => {
                    const {
                        title,
                        url = `/dashboard/${dashboardId}`,
                    } = dashboard
                    const isCurrent = pathname.endsWith(url)
                    if (isCurrent) {
                        return (
                            <MenuItem key={dashboardId}>
                                <strong>{title}</strong>
                            </MenuItem>
                        )
                    }
                    return (
                        <MenuItem key={dashboardId} component={Link} to={url}>
                            {title}
                        </MenuItem>
                    )
                })}
                {
                    <>
                        <Divider />
                        <p>custom_dashboard</p>
                    </>
                }
            </Menu>
        </>
    )
}

export default DashboardMenu
