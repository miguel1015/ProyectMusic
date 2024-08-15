import { Control, Schema } from "react-hook-form";

export type TInputKing = {
  disabled?: boolean;
  type: string;
  placeholder?: string;
  error?: FieldError | undefined;
  label: string;
  labelColor?: string;
  id: string;
  control: Control<FieldValues>;
  schema: Schema<FieldValues>;
};
