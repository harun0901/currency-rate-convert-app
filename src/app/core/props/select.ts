import { InputProps } from './input';
import { Option } from '../models/option';
export interface SelectProps extends InputProps {
    options: Option<any>[];
}