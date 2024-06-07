import { Cart } from "../model/cart.model.js";

export const createCart = async (req, res, next) => {
  try {
    const cartInformation = new Cart(
      {
        title: "cart 1",
        color: "blue",
        size: 2.5,
      },
      {
        title: "cart 2",
        color: "green",
        size: 2.5,
      },
      {
        title: "cart 1",
        color: "blue",
        size: 2.5,
      }
    );

    await cartInformation.save();
    res.status(201).json(cartInformation);
  } catch (error) {
    console.log(`error while create data : ${error}`);
  }
};
