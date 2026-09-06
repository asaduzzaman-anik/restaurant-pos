import { Head, Link, useForm } from '@inertiajs/react';
import CategoryForm from '@/Components/Categories/CategoryForm';

interface CategoryFormData {
    name: string;
    description: string | null;
}

export default function Create() {
    const { data, setData, post, processing, errors } =
        useForm<CategoryFormData>({
            name: '',
            description: '',
        });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        post('/categories');
    };

    return (
        <>
            <Head title="Create Category" />

            <main className="app-container">
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Create Category</h1>

                        <p className="page-description">
                            Add a new category to your restaurant menu.
                        </p>
                    </div>

                    <Link
                        href="/categories"
                        className="button button-secondary"
                    >
                        Back to Categories
                    </Link>
                </div>

                <CategoryForm
                    data={data}
                    errors={errors}
                    processing={processing}
                    submitLabel="Create Category"
                    onSubmit={handleSubmit}
                    onNameChange={(value) => setData('name', value)}
                    onDescriptionChange={(value) =>
                        setData('description', value)
                    }
                />
            </main>
        </>
    );
}