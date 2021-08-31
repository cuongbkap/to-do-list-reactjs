function Product() {
return (
<div>
    <div class="container">

        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <div>
                    <tr>
                        <td>{this.props.id}</td>
                        <td>{this.props.children}</td>
                        <td>{this.props.price}</td>
                        <td>{this.props.status === true ? 'Còn hàng' : 'Hết hàng'}</td>
                    </tr>
                </div>

            </tbody>
        </table>

    </div>
</div>
);
}
export default Product;