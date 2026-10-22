import * as React from 'react';

import type {NormalizedSelectRenderControlProps} from '../types';

export function getSelectedOptionsContent<T>(
    {list, value}: Pick<NormalizedSelectRenderControlProps<T>, 'list' | 'value'>,
    mapItemDataToContentProps: (item: T) => {title?: React.ReactNode},
): React.ReactNode {
    const options = value
        .map((itemId) => ({
            itemId,
            title:
                itemId in list.structure.itemsById
                    ? mapItemDataToContentProps(list.structure.itemsById[itemId]).title
                    : '',
        }))
        .filter(({title}) => Boolean(title));

    // `title` is a ReactNode, so it can only be joined into a string when every part is a string
    if (options.every(({title}) => typeof title === 'string')) {
        return options.map(({title}) => title).join(', ');
    }

    return options.map(({itemId, title}, index) => (
        <React.Fragment key={itemId}>
            {index > 0 ? ', ' : null}
            {title}
        </React.Fragment>
    ));
}
