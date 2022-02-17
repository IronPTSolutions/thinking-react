function ProductRow({ name, price }) {
    return (
        <div className="ProductRow d-flex">
            <div className="w-75">
                {name}
            </div>

            <div className="w-25">
                {price}
            </div>
        </div>
    )
}

export default ProductRow