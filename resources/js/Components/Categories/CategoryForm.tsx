import { FormEventHandler } from "react";

interface CategoryFormData {
    name: string;
    description: string | null;
}

interface CategoryFormProps {
    data: CategoryFormData;
    errors: Record<string, string>;
    processing: boolean;
    submitLabel: string;
    onSubmit: FormEventHandler;
    onNameChange: (value: string) => void;
    onDescriptionChange: (value: string | null) => void;
}

export default function CategoryForm ({
    data,
    errors,
    processing,
    submitLabel,
    onSubmit,
    onNameChange,
    onDescriptionChange,
}: CategoryFormProps){
    return (
        <form onSubmit={onSubmit} className="form-card">
            <div className="form-field">
                <label htmlFor="name" className="form-label">
                    Category Name
                </label>
                <input 
                    id="name"
                    type="text"
                    value={data.name}
                    onChange={(event) => onNameChange(event.target.value)}
                    className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                    placeholder="Enter category name"
                    autoComplete="off"
                />
                {errors.name && (
                    <p className="form-error">
                        {errors.name}
                    </p>
                )}
            </div>

            <div className="form-field">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <textarea
                    id="description"
                    value={data.description || ''}
                    onChange={(event) => onDescriptionChange(event.target.value)}
                    className={`form-textarea ${errors.description ? 'form-input-error' : ''}`}
                    placeholder="Enter category description"
                    rows={5}
                />
                {errors.description && (
                    <p className="form-error">
                        {errors.description}
                    </p>
                )}
            </div>

            <div className="form-actions">
                <button type="submit" disabled={processing} className="button button-primary">
                    {processing ? 'Saving...' : submitLabel}
                </button>
            </div>
        </form>
    )
}