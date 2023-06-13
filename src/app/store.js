import { configureStore } from "@reduxjs/toolkit";
import shiftsList from "./features/shifts-list";
import onLine from "./features/on-line";

export default configureStore({
  reducer: {
    shifts: shiftsList,
    onLine: onLine
  },
});
