import { Product } from "@/model/product";
import { connectDB } from "@/utils/database";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(404).json({
        success: false,
        message: `No request found with ${req.method} method`
    })
  } else {
    await connectDB();
    const { name, price, category } = req.body;
    // const price = 1232131,
    //       name = "Guucci Glass",
    //       category = "eye glass"

    await Product.create({
      name,
      price,
      category,
    });
    res.status(201).json({
      success: true,
      message: "Product Created Successfully",
    });
  }
};
