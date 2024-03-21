import {
  ReactElement,
  createContext,
  useEffect,
  useState,
} from "react";

type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [
  {
    sku: "item0001",
    name: "Samsung",
    price: 300,
  },
  {
    sku: "item0002",
    name: "Iphone",
    price: 500,
  },
  {
    sku: "item0003",
    name: "Tecno",
    price: 200,
  },
];

type UseProductContextType = {
  products: ProductType[];
};

const initialContextState: UseProductContextType = {
  products: [],
};

const ProductsContext =
  createContext<UseProductContextType>(initialContextState);

type ChildrenType = { children: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType) => {
  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const data = fetch("http://localhost:3500/products")
        .then((res) => res.json())
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
        });
      return data
    };
    fetchProducts().then(products => setProducts(products));
  },[]);

  const [products, setProducts] = useState<ProductType[]>(initState);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
