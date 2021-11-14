import React, { useEffect, useState } from "react";
import ProductView from "./ProductView";
import Button from "./Button";
import productData from "../assets/fake-data/products";

const ProductViewModal = () => {
	// recuperamos el valor del slug mandado desde el productCard

  return (
    <div
      className={`product-view__modal ${product && "active"}`}
    >
      <div className="product-view__modal__content">
        <ProductView product={product} />
        <div className="product-view__modal__content__close">
            close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
