import {
    RESPONSIVE_DRAWER_OPEN,
} from '../constants';


export function setMobileDrawerOpen(isOpen) {
    return {
        type: RESPONSIVE_DRAWER_OPEN,
        payload: {
            isOpen
        }
    }
}

export const mobileDrawerOpen = payload => payload.responsive.mobileDrawerOpen.isOpen;

export const SET_MENU = '@customization/SET_MENU';
export const MENU_OPEN = '@customization/MENU_OPEN';
export const SET_FONT_FAMILY = '@customization/SET_FONT_FAMILY';
export const SET_BORDER_RADIUS = '@customization/SET_BORDER_RADIUS';
