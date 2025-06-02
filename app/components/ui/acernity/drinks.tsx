
import { Marquee } from "@/app/components/ui/magic/marquee";
import Image from "next/image";

const products = [
    {
        name: "Coca-Cola",
        price: "$1.10",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Pepsi",
        price: "$1.10",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Fanta",
        price: "$0.85",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Sprite",
        price: "$0.85",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Mountain Dew",
        price: "$1.10",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Thumbs Up",
        price: "$1.10",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "7 Up",
        price: "$0.85",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Limca",
        price: "$0.85",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Appy Fizz",
        price: "$0.60",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Red Bull",
        price: "$1.79",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Monster Energy",
        price: "$1.89",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Bovonto",
        price: "$0.60",
        image:
            "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export function Drinks() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-center">
            <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-black dark:text-white">
                NEED REFRESHMENTS!!?
            </h2>
            <p className="text-sm sm:text-base text-orange-600 mb-8"></p>

            <Marquee className="w-full overflow-hidden" pauseOnHover reverse>
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center min-w-[160px] sm:min-w-[200px] lg:min-w-[240px] mx-2 sm:mx-4"
                    >
                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-sm">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain rounded"
                            />
                        </div>
                        <h3 className="mt-3 sm:mt-4 font-medium text-black dark:text-white text-xs sm:text-sm lg:text-base">
                            {product.name}
                        </h3>
                        <p className="text-orange-600 font-bold mt-1 text-xs sm:text-sm lg:text-base">
                            {product.price}
                        </p>
                    </div>
                ))}
            </Marquee>
        </section>
    );
}

// import { Marquee } from "@/app/components/ui/magic/marquee";
// import Image from "next/image";

// const products = [
//     {
//         name: "Coca-Cola",
//         price: "$1.10",
//         image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//         name: "Pepsi",
//         price: "$1.10",
//         image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//         name: "Fanta",
//         price: "₹$0.85",
//         image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//         name: "Sprite",
//         price: "₹$0.85",
//         image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//         name: "Mountain Dew",
//         price: "$1.10",
//         image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//         name: "Thumbs Up",
//         price: "$1.10",
//         image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//         name: "7 Up",
//         price: "₹$0.85",
//         image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//         name: "Limca",
//         price: "₹$0.85",
//         image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//         name: "Appy Fizz",
//         price: "₹$0.60",
//         image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//         name: "Red Bull",
//         price: "₹$1.79",
//         image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//         name: "Monster Energy",
//         price: "₹$1.89",
//         image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//         name: "Bovonto",
//         price: "₹$0.60",
//         image: "https://images.unsplash.com/photo-1543253687-c931c8e01820?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
// ];

// export function Drinks() {
//     return (
//         <section className="py-16 px-4 bg-white dark:bg-black text-center">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-black dark:text-white">
//                 NEED REFRESHMENTS!!?
//             </h2>
//             <p className="text-sm text-orange-600 mb-8">
//                 {/* Best Seller Product This Season! */}
//             </p>

//             <Marquee className="w-full" pauseOnHover reverse>
//                 {products.map((product, index) => (
//                     <div
//                         key={index}
//                         className="flex flex-col items-center min-w-[200px] sm:min-w-[240px] mx-4"
//                     >
//                         <div className="relative w-32 h-32 sm:w-40 sm:h-40">
//                             <Image
//                                 src={product.image}
//                                 alt={product.name}
//                                 fill
//                                 className="object-contain rounded"
//                             />
//                         </div>
//                         <h3 className="mt-4 font-medium text-black dark:text-white text-sm sm:text-base">
//                             {product.name}
//                         </h3>
//                         <p className="text-orange-600 font-bold mt-1 text-sm sm:text-base">
//                             {product.price}
//                         </p>
//                     </div>
//                 ))}
//             </Marquee>
//         </section>
//     );
// }
