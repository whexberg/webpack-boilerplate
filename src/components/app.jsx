import "../styles/index.scss";

import { Recipes } from "./recipes";
import sword from "../images/swc-sword.png";
import swordSvg from "../images/sword.svg";

export const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Oh hai, React</h1>
                </section>
                <img src={sword} alt="sword" width="250" />
                <img src={swordSvg} alt="sword" width="250" />
                <Recipes />
            </main>
        </>
    );
};
