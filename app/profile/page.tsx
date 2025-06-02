import { verifyToken } from "@/lib/jwt";
import { cookies } from "next/headers";

export default function ProfilePage() {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    const user = token ? verifyToken(token) : null;

    if (!user) {
        return (
            <main className="min-h-screen p-8 bg-black text-red-600">
                <h1 className="text-2xl font-bold">Access Denied</h1>
                <p className="text-gray-400">You must be signed in to view this page.</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen p-8 bg-black text-orange-600">
            <h1 className="text-3xl font-bold mb-4">👋 Welcome, {user.email}</h1>
            <p className="text-gray-400">You're authenticated with JWT!</p>
        </main>
    );
}

// export default function ProfilePage() {
//     return (
//         <main className="min-h-screen p-8 bg-black ">
//             <h1 className="text-3xl font-bold mb-4 text-orange-600">👤 My Profile</h1>
//             <p className="text-white">This is your profile page. Personalize it!</p>
//         </main>
//     );
// }
