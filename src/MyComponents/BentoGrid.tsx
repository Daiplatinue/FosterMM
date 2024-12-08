import React from "react";
import { motion } from "framer-motion";
import image1 from '../assets/home.jpg';
import image2 from '../assets/health.jpg';
import image3 from '../assets/parent1.jpg';

const cn = (...classes: (string | boolean | undefined)[]) => {
    return classes.filter(Boolean).join(" ");
};

export function FeaturesSectionDemo() {
    const features = [
        {
            title: "Home Placement Program",
            description:
                "Ensures children are placed in nurturing, supportive foster homes tailored to their individual needs and circumstances.",
            skeleton: <SkeletonOne />,
            className:
                "col-span-1 lg:col-span-4 border-b lg:border-r border-neutral-800",
        },
        {
            title: "Emotional Support Program",
            description:
                "Provides therapy and emotional support to children and families to help them navigate the challenges of fostering.",
            skeleton: <SkeletonTwo />,
            className: "border-b col-span-1 lg:col-span-2 border-neutral-800",
        },
        {
            title: "Health and Wellness Program",
            description:
                "Focuses on the physical and mental well-being of children, offering regular check-ups, medical care, and wellness activities.",
            skeleton: <SkeletonThree />,
            className:
                "col-span-1 lg:col-span-3 lg:border-r border-neutral-800",
        },
        {
            title: "Foster Parent Training Program",
            description:
                "Equips foster parents with the skills, knowledge, and resources needed to provide the best care for children.",
            skeleton: <SkeletonFour />,
            className: "col-span-1 lg:col-span-3 border-b lg:border-none",
        },
    ];
    return (
        <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto mt-[-18rem]">
            <div className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-neutral-800 text-white h-[48rem]">
                    {features.map((feature) => (
                        <FeatureCard key={feature.title} className={feature.className}>
                            <FeatureTitle>{feature.title}</FeatureTitle>
                            <FeatureDescription>{feature.description}</FeatureDescription>
                            <div className="h-full w-full">{feature.skeleton}</div>
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

const FeatureCard = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
            {children}
        </div>
    );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p className="max-w-5xl mx-auto text-left tracking-tight text-neutral-200 text-xl md:text-2xl md:leading-snug">
            {children}
        </p>
    );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
    return (
        <p
            className={cn(
                "text-sm md:text-base  max-w-4xl text-left mx-auto",
                "text-neutral-400 text-center font-normal dark:text-neutral-400",
                "text-left max-w-sm mx-0 md:text-sm my-2"
            )}
        >
            {children}
        </p>
    );
};

const SkeletonOne = () => {
    return (
        <div className="relative flex py-8 px-2 gap-10 h-full">
            <div className="w-full p-5 mx-auto bg-neutral-900 shadow-2xl group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2">
                    <img
                        src={image1}
                        alt="header"
                        className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
                    />
                </div>
            </div>

            <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-zinc-900 via-zinc-900 to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-zinc-900 via-transparent to-transparent w-full pointer-events-none" />
        </div>
    );
};

const SkeletonThree = () => {
    return (
        <a
            href="https://www.youtube.com/watch?v=uXA1Bc4ucS4"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex gap-10 h-full group/image"
        >
            <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
                    <div className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.707 12.707l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414z" />
                        </svg>
                    </div>
                    <img
                        src={image2}
                        alt="header"
                        className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
                    />
                </div>
            </div>
        </a>
    );
};

const SkeletonTwo = () => {
    const images = [
        "https://cdn.pixabay.com/photo/2019/11/13/22/15/motherhood-4624889_1280.jpg",
        "https://cdn.pixabay.com/photo/2022/01/13/14/02/mother-6935336_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/06/25/17/56/baby-821625_1280.jpg",
        "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    const imageVariants = {
        whileHover: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
        whileTap: {
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
        },
    };

    return (
        <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
            <div className="flex flex-row -ml-20">
                {images.map((image, idx) => (
                    <motion.div
                        variants={imageVariants}
                        key={"images-first" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 bg-zinc-900 border-neutral-800 border  flex-shrink-0 overflow-hidden"
                    >
                        <img
                            src={image}
                            alt="bali images"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-row">
                {images.map((image, idx) => (
                    <motion.div
                        key={"images-second" + idx}
                        style={{
                            rotate: Math.random() * 20 - 10,
                        }}
                        variants={imageVariants}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        className="rounded-xl -mr-4 mt-4 p-1 :bg-neutral-800 border-neutral-800 border  flex-shrink-0 overflow-hidden"
                    >
                        <img
                            src={image}
                            alt="bali images"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-zinc-900 to-transparent h-full pointer-events-none" />
            <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-zinc-900 to-transparent h-full pointer-events-none" />
        </div>
    );
};

const SkeletonFour = () => {
    return (
        <div className="relative flex py-2 px-2 gap-10 h-full">
            <div className="w-full p-5 mx-auto bg-neutral-900 shadow-2xl group h-full">
                <div className="flex flex-1 w-full h-full flex-col space-y-2">
                    <img
                        src={image3}
                        alt="header"
                        className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
                    />
                </div>
            </div>

            <div className="absolute bottom-0 z-40 inset-x-0 h-30 bg-gradient-to-t from-zinc-900 via-zinc-900 to-transparent w-full pointer-events-none" />
            <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-zinc-900 via-transparent to-transparent w-full pointer-events-none" />
        </div>
    );
};

export default FeaturesSectionDemo;