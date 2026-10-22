import * as React from 'react';

import {flushSync} from 'react-dom';
import {createRoot} from 'react-dom/client';

import type {NormalizedSelectRenderControlProps} from '../types';

import {getSelectedOptionsContent} from './getSelectedOptionsContent';

type Item = {title: React.ReactNode};

const itemsById: Record<string, Item> = {
    id1: {title: 'title1'},
    id2: {title: 'title2'},
    id3: {title: <span>title3</span>},
};

const list = {structure: {itemsById}} as NormalizedSelectRenderControlProps<Item>['list'];

const mapItemDataToContentProps = (item: Item) => item;

describe('NormalizedSelect getSelectedOptionsContent', () => {
    test('string titles. Should return joined string', () => {
        const result = getSelectedOptionsContent(
            {list, value: ['id1', 'id2']},
            mapItemDataToContentProps,
        );

        expect(result).toBe('title1, title2');
    });

    test('ReactNode title. Should render every title instead of stringifying it', () => {
        const container = document.createElement('div');
        const root = createRoot(container);

        flushSync(() =>
            root.render(
                getSelectedOptionsContent({list, value: ['id1', 'id3']}, mapItemDataToContentProps),
            ),
        );

        expect(container.textContent).toBe('title1, title3');
        expect(container.querySelector('span')?.textContent).toBe('title3');

        root.unmount();
    });
});
