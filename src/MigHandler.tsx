import { PanelModel } from '@grafana/data';
import { SimpleOptions } from 'types';

class Opts implements SimpleOptions {
  bgURL!: string;
  boxes!: Array<import('./types').Box>;
}

export const MigHandler = (panel: PanelModel<Partial<SimpleOptions>> | any): Partial<SimpleOptions> => {
  console.log('Migrating from an older version', panel);
  const options: SimpleOptions = new Opts();
  options.bgURL = panel.bgURL;
  options.boxes = [];
  panel.boxes.forEach((oldBox: any) => {
    console.log('Found a box to upgrade:', oldBox);
    options.boxes.push({
      angle: oldBox.angle,
      color: oldBox.color,
      colorHigh: oldBox.colorHigh,
      colorLow: oldBox.colorLow,
      colorMedium: oldBox.colorMedium,
      decimal: oldBox.decimal,
      fontSize: oldBox.fontsize,
      hasOrb: oldBox.hasOrb,
      orbHideText: oldBox.orbHideText,
      orbLocation: oldBox.orbLocation,
      orbSize: oldBox.orbSize,
      prefixSize: oldBox.prefixSize,
      serie: oldBox.serie,
      suffixSize: oldBox.suffixSize,
      text: oldBox.text,
      suffix: oldBox.suffix,
      prefix: oldBox.prefix,
      thresholds: oldBox.thresholds,
      blinkHigh: oldBox.blinkHigh,
      blinkLow: oldBox.blinkLow,
      isUsingThresholds: oldBox.usingThresholds,
      xpos: oldBox.xpos,
      ypos: oldBox.ypos,
      url: oldBox.URL,
    });
  });
  return options;
};