import moment from "moment"
import { useMemo } from "react"


// if we implment a store/rootStore we can add in a second argument here to pass the rootStore as a prop into the VM & add it to the useMemo dependency array.
export default function useViewModel<T>(VM: new () => T):T {
  return useMemo(() => new VM(), [])
}