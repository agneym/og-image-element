# \<og-image-element>

To be used with [Open Graph Generator Image Action](https://github.com/BoyWithSilverWings/generate-og-image)

![Screenshot](/demo/shot.png?raw=true "Element Output Generated")

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i og-image-element
```

## Usage
```html
<script type="module">
  import 'og-image-element/og-image-element.js';
</script>

<og-image-element>
  <div slot="title">Title of the Post</div>
  <img slot="image" src="url to image" />
</og-image-element>
```

You can customise styling with CSS variables:

```css
og-image-element {
  --heading-font: 'Aleo', serif;
  --background: #ffffff;
  --font-color: #000000;
  --font-size: 100%;
}
```

## Testing using karma (if applied by author)
```bash
npm run test
```

## Demoing using storybook (if applied by author)
```bash
npm run storybook
```

## Linting
```bash
npm run lint
```
