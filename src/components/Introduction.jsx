import Logo from "../assets/logo.svg?react";
import { gsap } from "gsap";
import React from "react";

const Introduction = () => {
    const comp = React.useRef(null);

    React.useLayoutEffect(() => {
        const element = comp.current;
        if (!element) return;

        const tl = gsap.timeline();

        tl.from(element, {
            opacity: 1,
            height: "100%",
            duration: 5,
        }).to(element, {
            opacity: 0,
            height: "0%",
            ease: "expo.Out",
        });

        return () => tl.kill(); // Encerrar a animação quando o componente for desmontado
    }, []);

    return (
        <div className="introduction" ref={comp}>
            <Logo className="logo-svg-intro" />
            <h5 className="name-intro mt-3">Yourflix</h5>
        </div>
    );
};

export default Introduction;
