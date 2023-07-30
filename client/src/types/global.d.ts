// ----------------------------------------------------------------------
// 전역 타입 선언
// ----------------------------------------------------------------------

declare global {
  declare module "*.png";
  declare module "*.jpg";
  declare module "*.jpeg";
  declare module "*.svg";

  interface Payload {
    payload: {
      isSuccess: boolean;
      msg: string | unknown;
      code?: number;
      isExpire?: boolean;
      user?: object | boolean;
    };
  }
}

export { };

