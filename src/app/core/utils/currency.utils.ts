import  { Option } from '../models/option';

export function currencyToOptions(source: any, showkey = true): Option<string>[] {
    return Object.keys(source).map((key: string) => {
      // @ts-ignore
      return { label: `${source[key]}${showkey ? ' (' + key + ') ' : ''}`, value: key };
    });
  }
  