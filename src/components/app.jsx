import "../styles/index.scss";

import { Recipes } from "./recipes";
import { Whatever } from "./whatever";

export const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Oh hai, React</h1>
                </section>
                <Recipes />
                <Whatever />
            </main>
        </>
    );
};
