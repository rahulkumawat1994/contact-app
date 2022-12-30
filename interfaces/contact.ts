export interface ContactInterface {
  name: string;
  phone: string;
  type: Type;
  isWhatsapp: string;
  image: string | null;
}
export enum Type {
  PERSONAL = "personal",
  OFFICE = "office",
}
