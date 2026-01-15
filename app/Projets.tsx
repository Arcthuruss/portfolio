import ProjectCard, {TagString} from "./ProjectCard";
import "./card.css";
import {useState} from "react";

export default function Projets() {

    const [filters, setFilters] = useState<TagString[]>(["UE1", "UE2", "UE3", "UE4", "UE5", "UE6", "Perso", "Stage"]);

    function changeFilter(filter: TagString) {
        if (filters.includes(filter)) {
            setFilters(filters.filter(f => f !== filter));
        } else {
            setFilters([...filters, filter]);
        }
    }

    return (<>
        <main className="flex flex-col gap-[32px] items-center w-full">
            <div className="bg-white text-black p-5 rounded-2xl">
                <p>Dans le contexte de mon BUT Informatique, j'ai eu l'occasion de réaliser plusieurs projets. Ils sont
                    triés selon plusieurs catégories, les compétences du BUT (UE), projets de stage et projets personnels.</p>
                <p className="ml-4">Les compétences sont les suivantes:</p>
                <ul className="list-disc list-inside ml-8">
                    <li>UE1: Réaliser un développement d'application</li>
                    <li>UE2: Optimiser des applications informatiques</li>
                    <li>UE3: Administrer des systèmes informatiques communicants complexes</li>
                    <li>UE4: Gérer des données de l'information</li>
                    <li>UE5: Conduite de projet</li>
                    <li>UE6: Travailler dans une équipe informatique</li>
                </ul>
            </div>
            <div className="flex flex-row justify-around w-full">
                {/*<button onClick={() => console.table(filters)}>debug</button>*/}
                <div className={"card border-[#BEEEEF]" + (filters.includes("UE1")?" bg-[#BEEEEF] text-black":"")} onClick={() => changeFilter("UE1")}>
                    <p>UE1</p>
                </div>
                <div className={"card border-[#FFC107]" + (filters.includes("UE2")?" bg-[#FFC107] text-black":"")} onClick={() => changeFilter("UE2")}>
                    <p>UE2</p>
                </div>
                <div className={"card border-[#FAAACE]" + (filters.includes("UE3")?" bg-[#FAAACE] text-black":"")} onClick={() => changeFilter("UE3")}>
                    <p>UE3</p>
                </div>
                <div className={"card border-[#CB4322]" + (filters.includes("UE4")?" bg-[#CB4322] text-black":"")} onClick={() => changeFilter("UE4")}>
                    <p>UE4</p>
                </div>
                <div className={"card border-[#AD6E34]" + (filters.includes("UE5")?" bg-[#AD6E34] text-black":"")} onClick={() => changeFilter("UE5")}>
                    <p>UE5</p>
                </div>
                <div className={"card border-[#257525]" + (filters.includes("UE6")?" bg-[#257525] text-black":"")} onClick={() => changeFilter("UE6")}>
                    <p>UE6</p>
                </div>
                <div className={"card border-[#842593]" + (filters.includes("Perso")?" bg-[#842593] text-black":"")} onClick={() => changeFilter("Perso")}>
                    <p>Perso</p>
                </div>
                <div className={"card border-[#238AB9]" + (filters.includes("Stage")?" bg-[#238AB9] text-black":"")} onClick={() => changeFilter("Stage")}>
                    <p>Stage</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <ProjectCard
                    image={"/sys_logo.png"}
                    name={"Système de reccomendation de musique"}
                    desc={"Création d'un site avec un système de reccomendation de musique en créant une IA"}
                    tags={["UE4", "UE5", "UE6"]}
                    filters={filters}
                    link={"https://github.com/orgs/IUT-InTheEnd/repositories"}
                />
                <ProjectCard
                    image={"/128px-Logo_IUT_Lannion.svg.png"}
                    name={"Analyse d'avis utilisateur"}
                    desc={"Analyse des effets de traitement contre le diabète à partir d'avis laissé par des " +
                        "utilisateurs suivit de reccomendation de traitement"}
                    tags={["Stage"]}
                    filters={filters}
                    link={undefined}
                />
                <ProjectCard
                    image={"/Penrose-dreieck.svg"}
                    name={"Portfolio"}
                    desc={"Création d'un site web portfolio pour présenter mes projets"}
                    tags={["Perso"]}
                    filters={filters}
                    link={"https://github.com/Arcthuruss/portfolio"}
                />
                <ProjectCard
                    image={"/pact_logo.svg"}
                    name={"Création d'un site de promotion d'offres"}
                    desc={"Création d'un site web où des professionels peuvent mettre des annonces pour promouvoir des" +
                        "restaurants, attractions, musées, etc..."}
                    tags={["UE1", "UE2", "UE3", "UE4", "UE5", "UE6"]}
                    filters={filters}
                    link={"https://github.com/A2-2-CeltiCode/PACT"}
                />
            </div>
        </main>
        </>)
}