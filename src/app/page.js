import Image from "next/image";

const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.in/api/products");
  const data = await res.json();
  return data;
};

const Home = async () => {
  const { products } = await getProducts();

  return (
    <div className="container my-10 mx-auto px-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-md">
          <div className="relative h-[300px]">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="p-3">
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
