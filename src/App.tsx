import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { formInputList, productList } from "./data";
import Button from "./components/ui/Button";

function App() {
  // Render
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const renderedproducts = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderINputFormList = formInputList.map(input=> (
  <div className="flex flex-col">
    <label htmlFor={input.id}>{input.label}</label>
    <input className="border border-gray-600 m-3 p-3"type="text" id={input.id} name={input.name}/>
    </div>))
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
        {renderINputFormList}
          <div className="items-center flex space-x-3">
            <Button className="bg-blue-500 hover:bg-blue-400" width="w-full">Submit</Button>
            <Button className="bg-red-500 hover:bg-red-400" width="w-full" onClick={closeModal}> Cancel </Button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default App;
