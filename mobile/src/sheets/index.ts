import { registerSheet, SheetDefinition } from "react-native-actions-sheet";

import CreateCustomer from "./CreateCustomer";

registerSheet("CreateCustomerSheet", CreateCustomer);

declare module "react-native-actions-sheet" {
  interface Sheets {
    CreateCustomerSheet: SheetDefinition;
  }
}

export {};
