import React from 'react';
import { getProductsByCategory, getProductById } from '../../asyncMock';

const ExampleComponent = () => {
  // Ejemplo de obtener productos por categoría
  getProductsByCategory('Amargos')
    .then(products => {
      console.log(`Products in category Amargos:`, products);
    })
    .catch(error => {
      console.error('Error fetching products by category:', error);
    });

  // Ejemplo de obtener un producto por ID
  getProductById('LAT')
    .then(product => {
      console.log(`Product with ID LAT:`, product);
    })
    .catch(error => {
      console.error('Error fetching product by ID:', error);
    });

  return (
    <div>
      {/* Contenido del componente */}
    </div>
  );
}

export default ExampleComponent;
