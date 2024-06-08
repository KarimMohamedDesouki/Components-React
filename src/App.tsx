import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { colors, formInputList, productList } from "./data";
import Button from "./components/ui/Button";
import { IProduct } from "./interface";
import CircleColor from "./components/ui/CircleColor";

function App() {
  const defaultProductObj = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  // Render
  const [product, setproduct] = useState<IProduct>(defaultProductObj);
  const [tempColor,setTempColor] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false);

  console.log(tempColor);
  

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setproduct({
      ...product,
      [name]: value,
    });
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(product);
  };

  const onCancel = () => {
    console.log("cancel");
    setproduct(defaultProductObj);
    closeModal();
  };

  const renderedproducts = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderINputFormList = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <input
        className="border border-gray-600 m-3 p-3"
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
    </div>
  ));

  const renderProductColor = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => 
        setTempColor(prev=>[...prev,color])
      }
    />
  ));

  return (
    <>
      <div className="container mx-auto">
        <div className="text-center text-5xl m-5">Products</div>
        <div>
          <Button className="bg-blue-500 hover:bg-blue-400" onClick={openModal}>
            ADD Product
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 m-4 rounded-lg">
          {renderedproducts}
        </div>
        <Modal isOpen={isOpen} closeModal={closeModal} title="Add new Product">
          <form onSubmit={submitHandler}>
            {renderINputFormList}
            <div className="flex m-3 space-x-3">{renderProductColor}</div>

            <div className="items-center flex space-x-3">
              <Button className="bg-blue-500 hover:bg-blue-400" width="w-full">
                Submit
              </Button>
              <Button
                className="bg-red-500 hover:bg-red-400"
                width="w-full"
                onClick={onCancel}
              >
                {" "}
                Cancel{" "}
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default App;
