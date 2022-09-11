import { deleteAsync } from "del"
export const reset = () => {
    return deleteAsync(['dist']) // reset task deactivated in gulpfile.js
}