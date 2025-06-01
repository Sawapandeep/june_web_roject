export default function SignInPage() {
    return (
        <main className="min-h-screen p-8 bg-black text-orange-600">
            <h1 className="text-3xl font-bold mb-4">🔐 Sign In</h1>
            <form className="space-y-4 max-w-md">
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        className="mt-1 block w-full border px-3 py-2 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        className="mt-1 block w-full border px-3 py-2 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                >
                    Sign In
                </button>
            </form>
        </main>
    );
}
