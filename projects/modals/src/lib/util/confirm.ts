export type ExtraOptions = Record<string, ExtraOption>;
export type ExtraOptionsResult<T> = Record<keyof T, boolean>;

export interface ExtraOption {
  label: string;
  checked?: boolean;
}

export interface ConfirmModalData<T extends ExtraOptions = ExtraOptions> {
  message: string;
  extraOptions: T;
  confirmLabel: string;
  cancelLabel: string;
}
