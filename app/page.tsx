'use client'

import "./page.css";
import {useState} from "react";
import Projets from "./Projets";
import Profile from "./Profile";
import Image from "next/image";

export default function Home() {

    const [currentScreen, setCurrentScreen] = useState<"profile" | "projets">("profile");

    let page;

    switch (currentScreen) {
        case "projets":
            page = <Projets />;
            break;
        case "profile":
            page = <Profile />;
            break;
    }

    return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16">
        <div className="flex justify-around dark:bg-gray-800 bg-lime-800 sticky top-0 w-full p-2">
            <p className="navButton" onClick={() => {setCurrentScreen("profile")}}>
                Home
            </p>
            <p className="navButton" onClick={() => {setCurrentScreen("projets")}}>
                Projets
            </p>
        </div>
        {page}
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center dark:bg-gray-800 bg-lime-800 w-full bottom-0 fixed pt-5 pb-5">
            <a className="flex flex-row items-center gap-2" href="https://github.com/Arcthuruss">
                <Image className="bg-white rounded-full" src={"./Octicons-mark-github.svg"} alt={"Github Logo"} width={48} height={48} />
                <p>@Arcthuruss</p>
            </a>
            <a href="mailto:luc.donnard@etudiant.univ-rennes.fr?cc=luc.donnard2@gmail.com">
                <Image src={"./mail.svg"} alt={"mail icon"} width={48} height={48} />
            </a>
        </footer>
    </div>
    );
}
