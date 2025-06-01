import { Marquee } from "@/app/components/ui/magic/marquee";
import Image from "next/image";

const products = [
    {
        name: "Mango Pineapple Smoothie",
        price: "$5.00",
        image: "/menu/mango-pineapple.png",
    },
    {
        name: "Double Cheeseburger",
        price: "$10.00",
        image: "/menu/double-cheeseburger.png",
    },
    {
        name: "Quarter Pounder With Cheese",
        price: "$10.00",
        image: "/menu/quarter-pounder-cheese.png",
    },
    {
        name: "Quarter Pounder",
        price: "$10.00",
        image: "/menu/quarter-pounder.png",
    },
    {
        name: "Double Quarter Pounder",
        price: "$8.00",
        image: "/menu/double-quarter-pounder.png",
    },
    {
        name: "Big Mac",
        price: "$10.00",
        image: "/menu/big-mac.png",
    },
    {
        name: "Cheeseburger",
        price: "$10.00",
        image: "/menu/cheeseburger.png",
    },
    {
        name: "Strawberry Banana Smoothie",
        price: "$5.00",
        image: "/menu/strawberry-smoothie.png",
    },
];

export function MenuSection() {
    return (
        <section className="py-16 px-4 bg-white dark:bg-black text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-black dark:text-white">
                TODAY'S FEATURED MUNCHIES
            </h2>
            <p className="text-sm text-orange-600 mb-8">
                Best Seller Product This Season!
            </p>

            <Marquee className="w-full" pauseOnHover>
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center min-w-[200px] sm:min-w-[240px] mx-4"
                    >
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="mt-4 font-medium text-black dark:text-white text-sm sm:text-base">
                            {product.name}
                        </h3>
                        <p className="text-orange-600 font-bold mt-1 text-sm sm:text-base">
                            {product.price}
                        </p>
                    </div>
                ))}
            </Marquee>
        </section>
    );
}



// import { cn } from "@/lib/util";
// import {
//     IconAdjustmentsBolt,
//     IconCloud,
//     IconCurrencyDollar,
//     IconEaseInOut,
//     IconHeart,
//     IconHelp,
//     IconRouteAltLeft,
//     IconTerminal2,
// } from "@tabler/icons-react";

// export function MenuSection() {
//     const features = [
//         {
//             title: "Built for developers",
//             description:
//                 "Built for engineers, developers, dreamers, thinkers and doers.",
//             icon: <IconTerminal2 />,
//         },
//         {
//             title: "Ease of use",
//             description:
//                 "It's as easy as using an Apple, and as expensive as buying one.",
//             icon: <IconEaseInOut />,
//         },
//         {
//             title: "Pricing like no other",
//             description:
//                 "Our prices are best in the market. No cap, no lock, no credit card required.",
//             icon: <IconCurrencyDollar />,
//         },
//         {
//             title: "100% Uptime guarantee",
//             description: "We just cannot be taken down by anyone.",
//             icon: <IconCloud />,
//         },
//         {
//             title: "Multi-tenant Architecture",
//             description: "You can simply share passwords instead of buying new seats",
//             icon: <IconRouteAltLeft />,
//         },
//         {
//             title: "24/7 Customer Support",
//             description:
//                 "We are available a 100% of the time. Atleast our AI Agents are.",
//             icon: <IconHelp />,
//         },
//         {
//             title: "Money back guarantee",
//             description:
//                 "If you donot like EveryAI, we will convince you to like us.",
//             icon: <IconAdjustmentsBolt />,
//         },
//         {
//             title: "And everything else",
//             description: "I just ran out of copy ideas. Accept my sincere apologies",
//             icon: <IconHeart />,
//         },
//     ];
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
//             {features.map((feature, index) => (
//                 <Feature key={feature.title} {...feature} index={index} />
//             ))}
//         </div>
//     );
// }

// const Feature = ({
//     title,
//     description,
//     icon,
//     index,
// }: {
//     title: string;
//     description: string;
//     icon: React.ReactNode;
//     index: number;
// }) => {
//     return (
//         <div
//             className={cn(
//                 "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
//                 (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
//                 index < 4 && "lg:border-b dark:border-neutral-800"
//             )}
//         >
//             {index < 4 && (
//                 <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
//             )}
//             {index >= 4 && (
//                 <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
//             )}
//             <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
//                 {icon}
//             </div>
//             <div className="text-lg font-bold mb-2 relative z-10 px-10">
//                 <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
//                 <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
//                     {title}
//                 </span>
//             </div>
//             <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
//                 {description}
//             </p>
//         </div>
//     );
// };
