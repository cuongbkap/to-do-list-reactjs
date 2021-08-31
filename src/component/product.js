function Product() {
let products = [
{id:1,name:"xiaomi mi 10 lite",price:"9.000.000d",status:true},
{id:2,name:"xiaomi mi mix 4",price:"16.000.000d",status:true},
{id:3,name:"xiaomi mi mix 3",price:"10.000.000d",status:false},
{id:4,name:"xiaomi redmi note 10 pro",price:"7.000.000d",status:true},
];
let elements = products.map((product,index) => {
return <tr key="index">
    <td>{product.id}</td>
    <td>{product.name}</td>
    <td>{product.price}</td>
    <td>{product.status === true ? 'Còn hàng' : 'Hết hàng'}</td>
</tr>
});
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
                {elements}
            </tbody>
        </table>

    </div>
</div>
);
}
export default Product;