const router = require('express').Router()
const {Listing} = require('../db/models')
var multer = require('multer')
const fileUpload = require('express-fileupload')

router.use(fileUpload()) //express-fileupload

module.exports = router

var knex = require('knex')({
  client: 'pg',
  connection: 'postgres://localhost:5432/dealhuntz',
  searchPath: ['knex', 'public'],
  useNullAsDefault: true
})

// configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    /*
    Files will be saved in the 'uploads' directory. Make
    sure this directory already exists!
  */
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

// create the multer instance that will be used to upload/save the file
const upload = multer({dest: 'uploads/'})

router.get('/', async (req, res, next) => {
  try {
    const listings = await Listing.findAll()
    res.json(listings)
  } catch (err) {
    next(err)
  }
})

router.get('/:listingId', async (req, res, next) => {
  try {
    const listings = await Listing.findOne({
      where: {
        id: req.params.listingId
      }
    })
    res.json(listings)
  } catch (err) {
    next(err)
  }
})

router.get('/location/:city', async (req, res, next) => {
  try {
    const listings = await Listing.findAll({
      where: {
        city: req.params.city
      }
    })
    res.json(listings)
  } catch (err) {
    next(err)
  }
})

router.get('/users/:userId', async (req, res, next) => {
  try {
    const listings = await Listing.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(listings)
  } catch (err) {
    next(err)
  }
})

router.post(
  '/create/:userId',
  upload.single('picture'),
  async (req, res, next) => {
    try {
      // const {name, data} = req.files.picture;
      // await knex.insert({name: name, img: data}).into('picture');
      console.log(req.files, 'req.file.picture -------')
      console.log(req.body, 'req.body -------')

      const listing = await Listing.create({
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        price: req.body.price,
        description: req.body.description,
        type: req.body.type,
        userId: req.params.userId
      })
      res.json(listing)
    } catch (err) {
      next(err)
    }
  }
)

// router.post('/photos/upload', async (req, res, next) => {
//     try {
//       console.log(req.files, 'req.files ------')
//       if (req.files === null) {
//         res.status(400).send("no file uploaded");
//       }
//       console.log(req.files, 'req.files!!!----')
//       const file = req.files.file;
//       file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
//         if(err) {
//           console.error(err);
//           return res.status(500).send(err);
//         }

//         res.json('hello')
//         // res.json({ fileName: file.name, filePath: `uploads/${file.name}`});
//       })
//       // const {name, data} = req.files.picture;
//       // await knex.insert({name: name, img: data}).into('picture');
//     } catch (err) {
//       next(err)
//     }
//   }
// )
