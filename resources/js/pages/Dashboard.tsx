import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <main className="min-h-screen bg-gray-100 p-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900">Restaurant POS</h1>
                    <p className="text-gray-600 mt-2">
                        Laravel + Inertia + React + TypeScript + Tailwind CSS
                    </p>
                    <div className="mt-6 rounded-md bg-gray-50 p-4">
                        <p className="text-gray-800 font-medium">
                            Project Setup is Working
                        </p>
                        <p className="text-gray-600 mt-1 text-sm">
                            The React frontend in rendered thorugh Inertia.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}