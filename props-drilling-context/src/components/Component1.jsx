import { AppContextProvider } from "../context/AppContext";
import Component2 from "./Component2";

export default function Component1() {
    return (
        <AppContextProvider>
            <Component2 />
        </AppContextProvider>
    );
}
