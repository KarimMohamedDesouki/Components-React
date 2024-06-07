export interface IProduct {
    id?: string | undefined;
    title:string;
    description:string;
    imageUrl:string;
    price:string;
    colors:string[];
    category: {
        name: string;
        imageURL: string;
    };
}

export interface IformInput {
    
    id: string;
    name:string;
    label:string;
    type:string;
}