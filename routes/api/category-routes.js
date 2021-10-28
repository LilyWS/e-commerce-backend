const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const data = await Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  res.json(data);
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const data = await Category.findByPk(req.params.id, {
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  });
  res.json(data);
});

router.post('/', (req, res) => {
  // create a new category
  const data = await Category.create(req.body);
  res.json(data);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  const data = await Category.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  
  res.json(data);
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  const data = await Category.destroy({
    where: {
      id: req.params.id
    }
  });

  res.json(data);
});

module.exports = router;
