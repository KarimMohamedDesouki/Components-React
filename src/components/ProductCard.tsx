import { IProduct } from "../interface";
import Button from "./ui/Button";

interface IProps{
  product: IProduct
}

const ProductCard = ({product}:IProps) => {
  const {title,price,imageUrl,description,category} = product

  return (
    <div className=" max-w-sm md:max-w-lg mx-auto border border-blue-600 p-4 m-4 rounded-xl flex flex-col">
      <img className="rounded-xl"
        src={imageUrl}
        alt={category.name}
      />
      <h3 className="m-3 text-xl"> {title}</h3>
      <p className="ml-3 overflow-hidden">
        {description}
      </p>
      <div className="flex m-3 space-x-3">
        <span className={`w-10 h-10 bg-red-500 rounded-full`} />
        <span className={`w-10 h-10 bg-blue-500 rounded-full`} />
        <span className={`w-10 h-10 bg-violet-500 rounded-full`} />
      </div>
      <div className="flex items-center m-3 justify-between">
        <span className="text-indigo-700 text-xl">${price}</span>
        <div className="flex items-center space-x-3">
          <img
            className="w-20 h-20 rounded-full"
            src={category.imageURL}
            alt={category.name}
          />
          <span className="text-md">{category.name}</span>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <Button className="bg-blue-600" width="w-full">Edit</Button>
        <Button className="bg-lime-600" width="w-full">Destroy</Button>
      </div>
    </div>
  );
};

export default ProductCard;
