import { MRT_Row, MRT_TableInstance } from "material-react-table";

export const enum Fields {
  id = "id",
  name = "name",
  designation = "designation",
  industry = "industry",
  email = "email",
  phone = "phone",
  country = "country",
  subscription = "subscription",
  subscription_valid_till = "subscription_valid_till",
}

export interface User {
  [Fields.id]: number;
  [Fields.name]: string;
  [Fields.designation]: string;
  [Fields.industry]: string;
  [Fields.email]: string;
  [Fields.phone]: string;
  [Fields.country]: string;
  [Fields.subscription]: boolean;
  [Fields.subscription_valid_till]: string;
}