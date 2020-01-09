import Todos from "./scenes/Todos";
import Welcome from "./scenes/Welcome";

export default [
    {
        path: "/",
        children: Welcome
    },
    {
        path: "/todos",
        title: "Todo`s List",
        children: Todos
    }
];
