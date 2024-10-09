function Product(props) {
    return (
      <div>
        <img src={props.img} width={"100%"} height={"100%"}   alt="products" />
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </div>
    );
}

export default Product