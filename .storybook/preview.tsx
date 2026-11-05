import type {Decorator, Preview} from '@storybook/react-webpack5';
import {Provider} from '@gravity-ui/uikit';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

import {DocsDecorator} from './DocsDecorator/DocsDecorator';

const withProvider: Decorator = (Story) => (
    <Provider theme="light" mobile={false}>
        <Story />
    </Provider>
);

const preview: Preview = {
    decorators: [withProvider],
    parameters: {
        docs: {
            container: DocsDecorator,
        },
    },
};

export default preview;
