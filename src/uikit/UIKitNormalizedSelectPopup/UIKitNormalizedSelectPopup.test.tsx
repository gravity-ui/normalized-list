import * as React from 'react';

import {Popup} from '@gravity-ui/uikit';
import {createRoot} from 'react-dom/client';

import {UIKitNormalizedSelectPopup} from './UIKitNormalizedSelectPopup';

jest.mock('@gravity-ui/uikit', () => ({Popup: jest.fn(() => null)}));

describe('UIKitNormalizedSelectPopup anchor', () => {
    const previousActEnvironment = Reflect.get(globalThis, 'IS_REACT_ACT_ENVIRONMENT');

    beforeAll(() => {
        Reflect.set(globalThis, 'IS_REACT_ACT_ENVIRONMENT', true);
    });

    afterAll(() => {
        Reflect.set(globalThis, 'IS_REACT_ACT_ENVIRONMENT', previousActEnvironment);
    });

    test('resolves the mounted anchor when initially open', async () => {
        const container = document.createElement('div');
        const root = createRoot(container);
        const anchorRef = React.createRef<HTMLDivElement>();
        const controlRef = React.createRef<HTMLButtonElement>();
        const popup = jest.mocked(Popup);

        try {
            await React.act(async () => {
                root.render(
                    <div ref={anchorRef}>
                        <button ref={controlRef}>Open</button>
                        <UIKitNormalizedSelectPopup
                            anchorRef={anchorRef}
                            controlRef={controlRef}
                            open
                            onClose={jest.fn()}
                        >
                            Options
                        </UIKitNormalizedSelectPopup>
                    </div>,
                );
            });

            expect(anchorRef.current).not.toBeNull();
            const props = popup.mock.calls[popup.mock.calls.length - 1][0];
            expect(props.anchorElement).toBe(anchorRef.current);
        } finally {
            await React.act(async () => root.unmount());
        }
    });
});
