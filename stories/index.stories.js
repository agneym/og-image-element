import { storiesOf, html, withKnobs, withClassPropertiesKnobs } from '@open-wc/demoing-storybook';

import { OgImageElement } from '../src/OgImageElement.js';
import readme from "../README.md";
import '../og-image-element.js';

storiesOf('OG Image Element', module)
  .addDecorator(withKnobs)
  .add(
    'Documentation',
    () => withClassPropertiesKnobs(OgImageElement, {
      template: html`
        <og-image-element>
          <div slot="title">When can we skip the alt tag?</div>
        </og-image-element>
      `
    }),
    { notes: { markdown: readme }, options: { selectedPanel: 'storybooks/knobs/panel' } },
  )
  .add(
    'Title',
    () => html`
      <og-image-element>
        <div slot="title">This is the title for the Post</div>
      </og-image-element>
    `,
  )
  .add(
    'Title and Subtitle',
    () => html`
      <og-image-element .subtitle="Subtitle for the post">
        <div slot="title">Title Post</div>
      </og-image-element>
    `)
  .add(
    'Set styles',
    () => html`
      <style>
        og-image-element {
          --font-color: red;
        }
      </style>
      <og-image-element .subtitle="Subtitle for the post">
        <div slot="title">Title Post</div>
      </og-image-element>
    `
  )