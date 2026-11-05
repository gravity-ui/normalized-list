import type * as React from 'react';

import {Provider} from '@gravity-ui/uikit';
import {DocsContainer} from '@storybook/addon-docs/blocks';
import type {DocsContainerProps} from '@storybook/addon-docs/blocks';

import {cn} from '../../src/components/utils/cn';

import './DocsDecorator.scss';

export type DocsDecoratorProps = React.PropsWithChildren<DocsContainerProps>;

const b = cn('docs-decorator');

export function DocsDecorator({children, context}: DocsDecoratorProps) {
    return (
        <div className={b()}>
            <DocsContainer context={context}>
                <Provider theme="light" mobile={false}>
                    {children}
                </Provider>
            </DocsContainer>
        </div>
    );
}
