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

    let carsgroup: React.JSX.Element[] = [];
    for (let i = 0; i < 10; i++) {
        carsgroup.push(<ProjectCard
            image={"/placeholder.webp"}
            name={"Placeholder"}
            desc={"Lorem ipsum dolor sit amet"}
            tags={["UE1", "UE2", "UE3", "UE4", "UE5", "UE6", "Perso"]}
            filters={filters}
            key={i}
        />)
    }

    return (<>
        <main className="flex flex-col gap-[32px] items-center w-full">
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
            <div className="grid grid-cols-5 gap-5">
                <ProjectCard
                    image={"/placeholder.webp"}
                    name={"Système de reccomendation de musique"}
                    desc={"Création d'un site avec un système de reccomendation de musique en créant une IA"}
                    tags={["UE4", "UE5", "UE6"]}
                    filters={filters}
                />
                <ProjectCard
                    image={"/placeholder.webp"}
                    name={"Analyse d'avis utilisateur"}
                    desc={"Analyse des effets de traitement contre le diabète à partir d'avis laissé par des " +
                        "utilisateurs suivit de reccomendation de traitement"}
                    tags={["Stage"]}
                    filters={filters}
                />
                <ProjectCard
                    image={"/placeholder.webp"}
                    name={"Portfolio"}
                    desc={"Création d'un site web portfolio pour présenter mes projets"}
                    tags={["Perso"]}
                    filters={filters}
                />
                {carsgroup}
            </div>
        </main>
        </>)
}