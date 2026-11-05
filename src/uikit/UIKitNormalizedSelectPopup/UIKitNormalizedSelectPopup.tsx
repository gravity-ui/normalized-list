'use client';

import * as React from 'react';

import {Popup} from '@gravity-ui/uikit';

import {NormalizedSelectQa} from '../../components/NormalizedSelect/constants';
import type {
    NormalizedSelectPopupPlacement,
    NormalizedSelectRenderPopupProps,
} from '../../components/NormalizedSelect/types';
import {block} from '../../components/utils/cn';

import {getMiddlewares} from './middlewares';

import './UIKitNormalizedSelectPopup.scss';

const b = block('normalized-select-popup');

const DEFAULT_PLACEMENT: NormalizedSelectPopupPlacement = [
    'bottom-start',
    'bottom-end',
    'top-start',
    'top-end',
];

export type UIKitNormalizedSelectPopupProps = NormalizedSelectRenderPopupProps;

export const UIKitNormalizedSelectPopup = ({
    open,
    onClose,
    anchorRef,
    controlRef,
    children,
    className,
    id,
    width,
    placement = DEFAULT_PLACEMENT,
    disablePortal,
}: UIKitNormalizedSelectPopupProps) => {
    const [anchorElement, setAnchorElement] = React.useState<HTMLElement | null>(null);

    React.useEffect(() => {
        setAnchorElement(anchorRef.current);
    }, [anchorRef]);

    return (
        <Popup
            className={b(null, className)}
            qa={NormalizedSelectQa.POPUP}
            anchorElement={anchorElement}
            placement={placement}
            open={open}
            onOpenChange={(nextOpen) => {
                if (!nextOpen) {
                    onClose();
                }
            }}
            disablePortal={disablePortal}
            returnFocus={controlRef}
            floatingMiddlewares={getMiddlewares({width, disablePortal})}
            id={id}
        >
            {children}
        </Popup>
    );
};
