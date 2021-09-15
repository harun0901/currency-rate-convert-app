export interface InputProps {
    label: string;
    value: any;
    setValue: (value: any) => void;
    readonly?: boolean;
    setIsUpdating?: (value: boolean) => void;
  }