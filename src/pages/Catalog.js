import category from "../assets/fake-data/category";
import productData from "../assets/fake-data/products";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";
import ProductCard from "../components/ProductCard";

const Catalog = () => {
  return (
    <Helmet title="Catalog">
      <div className="catalog">
        <div className="catalog__filter">
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              product portfolio
            </div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <p className="catalog__filter__widget__content__item">
                  {item.display}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="catalog__content">
          <Grid col={3} mdCol={2} smCol={1} gap={20}>
            {productData.getAllProducts().map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
