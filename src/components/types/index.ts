export type ToastType = {
  title: string;
  description: string;
  type: ToastEnum;
};

export enum ToastEnum {
  SUCCESS = "success",
  ERROR = "error",
}
