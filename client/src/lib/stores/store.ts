import { createContext } from "react";
import Counter from "./counter.ts";
import { UiStore } from "./uiStore.ts"
interface Store {
    counter: Counter
    uiStore: UiStore
}

export const store: Store = {
    counter: new Counter(),
    uiStore: new UiStore()
}

export const StoreContext = createContext(store);