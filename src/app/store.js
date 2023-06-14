import { configureStore } from "@reduxjs/toolkit";
import shiftsList from "./features/shifts-list";
import onLine from "./features/on-line";
import signCandidate from "./features/sign-candidate.slice";
import signAuto from "./features/sign-auto.slice";

export default configureStore({
  reducer: {
    shifts: shiftsList,
    onLine: onLine,
    signCan: signCandidate,
    signAuto: signAuto
  },
});
