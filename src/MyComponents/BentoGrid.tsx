import { BentoGrid, BentoGridItem } from "./bento-grid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

import image1 from '../assets/cat.webp';

function BentoGridSecondDemo() {
    return (
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                />
            ))}
        </BentoGrid>
    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-3xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent  dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
        <img className="rounded-xl w-[34.7rem]" src={image1} />
    </div>
);
const items = [
    {
        title: "Early Learning",
        description: "Foundational education for children aged 2-5 years.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "After-School Care",
        description: "Enriching activities and homework support for school-age children.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Summer Programs",
        description: "Exciting summer activities combining learning and fun.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];

export default BentoGridSecondDemo