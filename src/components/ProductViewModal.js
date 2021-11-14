import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductView from "./ProductView";
import Button from "./Button";
import { remove } from "../redux/product-modal/productModalSlice";
import productData from "../assets/fake-data/products";

const ProductViewModal = () => {
	// recuperamos el valor del slug mandado desde el productCard
  const productSlug = useSelector((state) => state.productModal.value);
	// usaremos dispatch para elmiminar el slug
  const dispatch = useDispatch();

  const [product, setProduct] = useState(undefined);

  useEffect(() => {
		// llenamos el producto buscando en producData el que coincida con el slug
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);

  return (
    <div
      className={`product-view__modal ${product && "active"}`}
    >
      <div className="product-view__modal__content">
        <ProductView product={product} />
        <div className="product-view__modal__content__close">
          <Button size="sm" onClick={() => dispatch(remove())}>
            close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
