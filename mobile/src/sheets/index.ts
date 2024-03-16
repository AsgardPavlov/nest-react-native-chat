import { registerSheet, SheetDefinition } from "react-native-actions-sheet";

import CreateCharge from "./CreateCharge";
import CreateCustomer from "./CreateCustomer";

registerSheet("CreateCustomerSheet", CreateCustomer);
registerSheet("CreateChargeSheet", CreateCharge);

declare module "react-native-actions-sheet" {
  interface Sheets {
    CreateCustomerSheet: SheetDefinition;
    CreateChargeSheet: SheetDefinition<{
      payload: {
        cardId: string;
      };
    }>;
  }
}

export {};
