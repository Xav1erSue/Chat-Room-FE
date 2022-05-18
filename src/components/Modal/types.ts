import { ReactElement } from "react";
export interface IModalProps {
  visible: boolean;
  onCancel: () => void;
  children?: ReactElement | ReactElement[];
  className?: string;
}
