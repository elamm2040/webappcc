import { configureStore } from "@reduxjs/toolkit";
import shiftsList from "./features/shifts-list";

export default configureStore({
  reducer: {
    shifts: shiftsList
  },
});
