"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const endpoint = isRegistering ? "/api/auth/register" : "/api/auth/login";

        const res = await fetch(endpoint, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
            router.push("/profile");
        } else {
            const data = await res.json();
            setError(data.error || "Unknown error");
        }
    };

    return (
        <main className="min-h-screen p-8 bg-black text-orange-600">
            <h1 className="text-3xl font-bold mb-4">{isRegistering ? "📝 Register" : "🔐 Sign In"}</h1>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        className="mt-1 block w-full border px-3 py-2 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        className="mt-1 block w-full border px-3 py-2 rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="text-red-400">{error}</p>}
                <button type="submit" className="bg-orange-600 text-white px-4 py-2 rounded">
                    {isRegistering ? "Create Account" : "Sign In"}
                </button>
                <p className="text-sm mt-2">
                    {isRegistering ? "Already have an account?" : "New here?"}{" "}
                    <button type="button" className="underline" onClick={() => setIsRegistering(!isRegistering)}>
                        {isRegistering ? "Sign In" : "Create Account"}
                    </button>
                </p>
            </form>
        </main>
    );
}


// export default function SignInPage() {
//     return (
//         <main className="min-h-screen p-8 bg-black text-orange-600">
//             <h1 className="text-3xl font-bold mb-4">🔐 Sign In</h1>
//             <form className="space-y-4 max-w-md">
//                 <div>
//                     <label className="block text-sm font-medium">Email</label>
//                     <input
//                         type="email"
//                         className="mt-1 block w-full border px-3 py-2 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium">Password</label>
//                     <input
//                         type="password"
//                         className="mt-1 block w-full border px-3 py-2 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
//                         required
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
//                 >
//                     Sign In
//                 </button>
//             </form>
//         </main>
//     );
// }
