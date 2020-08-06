# getTextWidth

This helper function is intended to get the **rendered** width of text. It leverages canvas to simulate the rendered text and calculate the width using the font of your project.

It also has a backup height:width ratio number in case something goes wrong with the canvas

### Example

Here is an example of how to implement this function.

```javascript

import { getTextWidth } from 'get-text-width';

const width = getTextWidth("Hello world");

// The function also accepts as custom 
// backup font height:width ratio like so:
const width = getTextWidth("Hello world", 0.5);


```
&nbsp;
&nbsp;
&nbsp;
&nbsp;

## <div align="center"> Happy coding! 🗒 </div>