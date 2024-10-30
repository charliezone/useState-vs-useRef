import { useEffect, useRef, useState } from 'react';

export default function StateVersion() {
    const [isModalOpen, setModalOpen] = useState(false); // Controls modal visibility
    const [productToDelete, setProductToDelete] = useState(''); // Holds the product ID across renders
    const amountOfRenders = useRef(0);

    const products = [
        { id: '101', name: 'Product A' },
        { id: '102', name: 'Product B' },
        { id: '103', name: 'Product C' },
    ];

    function handleDelete(productId) {
        setProductToDelete(productId); // Store the ID with re-rendering
        console.log('Select product to delete:', productId);
        setModalOpen(true); // Open the modal
    }

    function confirmDelete() {
        console.log('Deleting product:', productToDelete);
        // Trigger deletion logic here...
        setModalOpen(false); // Close the modal
    }

    useEffect(() => {
        amountOfRenders.current = amountOfRenders.current + 1;
    });

    return (
        <div>
            <h2>Product List With useState</h2>
            <h3>Times re rendered: {amountOfRenders.current}</h3>
            <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="modal" style={{ marginTop: '20px', border: '1px solid black', padding: '10px' }}>
                <p>Are you sure you want to delete this product?</p>
                <button onClick={confirmDelete}>Yes, Delete</button>
                <button onClick={() => setModalOpen(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
}