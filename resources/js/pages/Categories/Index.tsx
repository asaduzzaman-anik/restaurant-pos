import { Head, Link, router } from '@inertiajs/react';
import { Category } from '@/types/category';

interface CategoriesIndexProps {
    categories: Category[];
    flash?: {
        success?: string;
    };
}

export default function Index({
    categories,
    flash,
}: CategoriesIndexProps) {
    const handleDelete = (category: Category) => {
        const confirmed = window.confirm(
            `Are you sure you want to delete "${category.name}"?`,
        );

        if (!confirmed) {
            return;
        }

        router.delete(`/categories/${category.id}`);
    };

    return (
        <>
            <Head title="Categories" />

            <main className="app-container">
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Categories</h1>

                        <p className="page-description">
                            Manage the categories used by your restaurant
                            products.
                        </p>
                    </div>

                    <Link
                        href="/categories/create"
                        className="button button-primary"
                    >
                        Add Category
                    </Link>
                </div>

                {flash?.success && (
                    <div className="alert-success">
                        {flash.success}
                    </div>
                )}

                <div className="card">
                    {categories.length === 0 ? (
                        <div className="empty-state">
                            <h2 className="empty-state-title">
                                No categories found
                            </h2>

                            <p className="empty-state-description">
                                Create your first category to get started.
                            </p>
                        </div>
                    ) : (
                        <div className="table-wrapper">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Products</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {categories.map((category) => (
                                        <tr key={category.id}>
                                            <td>
                                                <span className="table-name">
                                                    {category.name}
                                                </span>
                                            </td>

                                            <td>
                                                <span className="table-description">
                                                    {category.description || 'N/A'}
                                                </span>
                                            </td>

                                            <td>
                                                <span className="badge badge-neutral">
                                                    {category.products_count ??
                                                        0}
                                                </span>
                                            </td>

                                            <td>
                                                <div className="table-actions">
                                                    <Link
                                                        href={`/categories/${category.id}/edit`}
                                                        className="button button-secondary button-small"
                                                    >
                                                        Edit
                                                    </Link>

                                                    <button
                                                        type="button"
                                                        className="button button-danger button-small"
                                                        onClick={() =>
                                                            handleDelete(
                                                                category,
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}