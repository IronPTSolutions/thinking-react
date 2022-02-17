import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"
import products from '../data/products.json'

function getCategories(products) {
    const categories = []

    products.forEach(product => {
        const category = product.category
    
        if (!categories.includes(category)) {
            categories.push(category)
        }
    })
    
    return categories
}

const categories = getCategories(products)

function ProductTable({ search, inStock}) {
    return (
        <div className="ProductTable">
            <div className="d-flex">
                <div className="w-75 fs-5 fw-bold">Name</div>
                <div className="w-25 fs-5 fw-bold">Price</div>
            </div>

            {categories.map(category => (
                <>
                    <ProductCategoryRow category={category}/>
                    {products
                        .filter(product => product.category === category)
                        .filter(product => inStock ? product.stocked : true)
                        .filter(product => product.name.toLowerCase().includes(search.toLowerCase()))
                        .map(product => <ProductRow {...product}/>)
                    }
                </>
            ))}
        </div>
    )
}

export default ProductTable