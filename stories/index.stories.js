import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { OgImageElement } from '../src/OgImageElement.js';
import '../og-image-element.js';

storiesOf('og-image-element', module)
  .addDecorator(withKnobs)
  .add('Documentation', () => withClassPropertiesKnobs(OgImageElement))
  .add(
    'Alternative Title',
    () => html`
      <og-image-element .title=${'Something else'}></og-image-element>
    `,
  );
