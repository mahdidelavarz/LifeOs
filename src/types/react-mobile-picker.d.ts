declare module "react-mobile-picker" {
  import { FC, ReactNode } from "react";

  interface PickerProps {
    value: { [key: string]: string };
    onChange: (value: { [key: string]: string }) => void;
    wheelMode?: "natural" | "normal";
    children: ReactNode;
    height: number;
    itemHeight: number;
  }

  interface ColumnProps {
    name: string;
    children: ReactNode;
  }

  interface ItemProps {
    value: string;
    children: (props: { selected: boolean }) => ReactNode;
  }

  const Picker: FC<PickerProps> & {
    Column: FC<ColumnProps>;
    Item: FC<ItemProps>;
  };

  export default Picker;
}
