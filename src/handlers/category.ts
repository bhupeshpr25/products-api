import prisma from "../db";
import { body } from "express-validator";

export const getOneCategory = async (req, res) => {
  const category = await prisma.category.findUnique({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: category });
};

export const getCategory = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      categories: true,
    },
  });
  const categories = products.reduce((allCategories, product) => {
    return [...allCategories, ...product.categories];
  }, []);

  res.json({ data: categories });
};

export const createCategory = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.productId,
    },
  });

  if (!product) {
    //product does not belong to user
    res.json({ message: "nope" });
  }

  const category = await prisma.category.create({
    data: {
      title: req.body.title,
      product: { connect: { id: product.id } },
    },
  });

  res.json({ data: category });
};

export const updateCategory = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      categories: true,
    },
  });

  const categories = products.reduce((allCategories, product) => {
    return [...allCategories, ...product.categories];
  }, []);

  const match = categories.find((category) => category.id === req.params.id);

  if (!match) {
    res.json({ message: "nope" });
  }

  const updatedCategory = await prisma.category.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });

  res.json({ data: updatedCategory });
};

export const deleteCategory = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      categories: true,
    },
  });

  const categories = products.reduce((allCategories, product) => {
    return [...allCategories, ...product.categories];
  }, []);

  const match = categories.find((category) => category.id === req.params.id);

  if (!match) {
    res.json({ message: "nope" });
  }

  const deletedCategory = await prisma.category.delete({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: deletedCategory });
};
