/**
 * @param inputText: text to be measured
 * @param backupRatio: if something goes wrong, this number will be used to give a width estimate, the average open-sans font height-width ratio is 0.5  
 * 
 * @returns {number} numeric value of width in pixels
 */
export const getTextWidth = (() => {
  const container = document.createElement('canvas');

  return function (inputText?: string | number | null, backupRatio = 0.5): number {
    let width = 0;
    let text = inputText ?? '';
    text = text.toString();

    let context = container.getContext('2d');

    if (context) {
      context.font = window
        .getComputedStyle(document.body)
        .getPropertyValue('font');
      width = context.measureText(text).width;
      return width;
    } else {
      /* if something goes wrong mounting the canvas, return an estimate calculated using 
       * the backup ratio, the average open-sans font height-width ratio of 0.5 
       */
      let fontSize = parseFloat(
        window.getComputedStyle(document.body).getPropertyValue('font-size')
      );
      return fontSize * backupRatio * text.length;
    }
  };
})();
