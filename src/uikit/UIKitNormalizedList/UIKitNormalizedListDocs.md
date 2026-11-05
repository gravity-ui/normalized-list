# UIKitNormalizedList

[`NormalizedList`](/docs/normalized-list-normalizedlist--docs) with default `renderItem` set to [`UIKitListItemView`](/docs/normalized-list-uikit-uikitlistitemview--docs) (list row themed for `@gravity-ui/uikit`).

Requires `@gravity-ui/uikit@^8.0.0`, React 18 or 19 (`react` and `react-dom`), `@gravity-ui/icons`, and `@floating-ui/react`.

There are many usage patterns for this component — see the Storybook stories alongside these docs.

## Basic usage

```tsx
import {useNormalizedList} from '@gravity-ui/normalized-list';
import {UIKitNormalizedList} from '@gravity-ui/normalized-list/uikit';

const list = useNormalizedList({items});

<UIKitNormalizedList
  list={list}
  multiple
  mapItemDataToContentProps={(item) => ({title: item.title})}
/>;
```

Prop descriptions match core NormalizedList — see [`NormalizedList` Props](/docs/normalized-list-normalizedlist--docs#props).
