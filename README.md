# getTextWidth

This helper function is intended to get the **rendered** width of text. It leverages canvas to simulate the rendered text and calculate the width using the font of your project.

It also has a backup height:width ratio number in case something goes wrong with the canvas.

**`Returns numeric value of width in pixels`**

### Example

Here is an example of how to implement this function.

```javascript

import { getTextWidth } from 'get-text-width';

const width = getTextWidth("Hello world");

// The function also accepts as custom 
// backup font height:width ratio like so:
const width = getTextWidth("Hello world", 0.5);

```
[Live demo](https://codesandbox.io/s/get-text-width-example-u2n96?file=/src/App.tsx)

## Common fonts `height:width` aspect ratios
<details>
<summary><b>Sans-serif fonts</b></summary>

| Font                      | Aspect ratio  |
| ------------------------- | ------------- |
| `Arial`                   |   `0.52`      |
| `Arial Black`             | 	`0.52`      |
| `Calibri`                 | 	`0.46`      |
| `Candara`                 | 	`0.47`      |
| `Century Gothic`          | 	`0.53`      |
| `Corbel`                  | 	`0.46`      |
| `DejaVu Sans`             | 	`0.55`      |
| `DejaVu Sans Condensed`   | 	`0.55`      |
| `DejaVu Sans Light`       | 	`0.55`      |
| `Eurostile`               | 	`0.47`      |
| `Franklin Gothic`         | 	`0.49`      |
| `Futura`                  | 	`0.51`      | 
| `Gadget`                  | 	`0.55`      | 
| `Geneva`                  | 	`0.55`      | 
| `Gill Sans`               | 	`0.45`      | 
| `GNU Free Sans`           | 	`0.53`      | 
| `Goudy Sans`              | 	`0.48`      | 
| `Helvetica`               | 	`0.52`      | 
| `Helvetica Neue`          | 	`0.52`      | 
| `Impact`                  | 	`0.65`      | 
| `Liberation Sans`         | 	`0.53`      | 
| `Lucida Grande`           |   `0.53`      | 
| `Lucida Sans Unicode`     | 	`0.53`      | 
| `Myriad`                  | 	`0.48`      | 
| `Optima`                  | 	`0.47`      | 
| `Serpentine BoldBold`     | 	`0.47`      | 
| `Stone Sans`              | 	`0.52`      | 
| `Tahoma`                  | 	`0.55`      | 
| `Trebuchet MS`            | 	`0.52`      | 
| `Verdana`                 | 	`0.55`      | 
</details>

<details>
<summary><b>Serif fonts</b></summary>

| Font                      | Aspect ratio  |
| ------------------------- | ------------- |
| `Baskerville`              | 	`0.45`      |
| `Bernhard Modern`         | 	`0.34`      |
| `Big Caslon`              | 	`0.47`      |
| `Book Antiqua`            | 	`0.46`      |
| `Bookman Old Style`       | 	`0.47`      |
| `Calisto MT`              | 	`0.47`      |
| `Cambria`                 | 	`0.47`      |
| `Century`                 | 	`0.46`      |
| `Century Schoolbook`      | 	`0.46`      |
| `Cochin`                  | 	`0.37`      |
| `Constantia`              | 	`0.45`      |
| `DejaVu Serif`            | 	`0.52`      |
| `DejaVu Serif Condensed`  | 	`0.52`      |
| `Didot`                   | 	`0.43`      |
| `Garamond`                | 	`0.38`      |
| `Georgia`                 | 	`0.48`      |
| `GNU Free Serif`          | 	`0.45`      |
| `Goudy Old Style`         | 	`0.40`      |
| `Hoefler Text`            | 	`0.44`      |
| `Humana Serif`            | 	`0.50`      |
| `Janson Text`             | 	`0.43`      |
| `Liberation Serif`        | 	`0.46`      |
| `Minion`                  | 	`0.45`      |
| `New York`                | 	`0.55`      |
| `Palatino`                | 	`0.46`      |
| `Times New Roman`         | 	`0.45`      |
</details>

<details>
<summary><b>Monopace fonts</b></summary>

| Font                      | Aspect ratio  |
| ------------------------- | ------------- |
| `Andale Mono`             | 	`0.51`      |
| `Consolas`                | 	`0.49`      |
| `Courier New`             | 	`0.43`      |
| `DejaVu Mono`             | 	`0.55`      |
| `GNU Free Mono`           | 	`0.42`      |
| `Liberation Mono`         | 	`0.53`      |
| `Lucida Console`          | 	`0.53`      |
</details>

<details>
<summary><b>Script/Display/Decorative fonts</b></summary>

| Font                      | Aspect ratio  |
| ------------------------- | ------------- |
| `URW Alcuin SCT`          |	`0.51`      |
| `American Typewriter`     |	`0.51`      |
| `Barbedor`                |	`0.49`      |
| `Caflisch Script`         |	`0.37`      |
| `Chalkboard`              |	`0.53`      |
| `Charlemagne`             |	`0.74`      |
| `Comic Sans MS`           |	`0.55`      |
| `Copperplate`             |	`0.44`      |
| `Corsiva`                 |	`0.60`      |
| `Flemish Script`          |	`0.28`      |
| `Herculanum`              |	`0.61`      |
| `Marker Felt`             |	`0.62`      |
| `Papyrus`                 |	`0.46`      |
| `Sand`                    |	`0.69`      |
| `Textile`                 |	`0.68`      |
</details>

&nbsp;
&nbsp;
&nbsp;
&nbsp;

## <div align="center"> Happy coding! 🗒 </div>