import Image from "next/image";

export default function Profile() {
    return (<>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <div className="flex flex-row items-center gap-10 border-2 border-gray-500 rounded-2xl pr-5 w-[50vw]">
                <Image src={"/placeholder.webp"} alt="Photo" width={400} height={400} className="rounded-l-2xl" />
                <p>
                    Luc Donnard, Étudiant en 3ème année de BUT Informatique à l'IUT de Lannion. Ma spécialité est
                    le développement logiciel et web mais j'ai également les compétences pour de la gestion de base de
                    données et de l'intelligence artificielle.
                </p>
            </div>
        </main>
    </>)
}