import Image from "next/image";

enum Tags {
    UE1   = "#BEEEEF",
    UE2   = "#FFC107",
    UE3   = "#FAAACE",
    UE4   = "#CB4322",
    UE5   = "#AD6E34",
    UE6   = "#257525",
    Perso = "#842593",
    Ipsum = "#DCF457",
    Stage = "#238AB9",
}

export type TagString = keyof typeof Tags;

export default function ProjectCard({image, name, desc, tags, filters}: {image: string; name: string; desc: string, tags: TagString[], filters: TagString[]}) {

    return (<>
        <div className={"flex flex-row border-2 border-gray-200 rounded-2xl gap-2" + (!filters.some(f => tags.includes(f))?" hidden":"")}>
            <Image src={image} alt={name} width={75} height={75} className={"rounded-l-2xl"}/>
            <div className="flex flex-col justify-around p-2">
                <p className="font-bold text-2xl">{name}</p>
                <p>{desc}</p>
                <div className="flex flex-row gap-2">
                    {tags.map(tag => (
                        <p key={tag}
                           className={"border-2 border-[" + Tags[tag] +"] rounded-2xl pr-2 pl-2"}
                        >{tag}</p>
                    ))}
                </div>
            </div>
        </div>
    </>)
}