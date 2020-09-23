'use strict'

const db = require('../server/db')
const {User, Listing} = require('../server/db/models')

const testListings = [
  {
    address: '980 Transport Avenue',
    city: 'Jersey City',
    state: 'NJ',
    price: '$300,000',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    type: 'turnkey',
    imgUrl:
      'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2020/04/hot-homes-outdoor-living.jpg'
  },
  {
    address: '123 Main St',
    price: '$400,000',
    city: 'Dallas',
    state: 'TX',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    type: 'turnkey',
    imgUrl:
      'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2020/04/hot-homes-outdoor-living.jpg'
  },
  {
    address: '806 Washington St',
    city: 'Jersey City',
    state: 'NJ',
    price: '$500,000',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    type: 'turnkey',
    imgUrl:
      'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2020/04/hot-homes-outdoor-living.jpg'
  },
  {
    address: '980 Transport Avenue',
    city: 'Jersey City',
    state: 'NJ',
    price: '$271808.71',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    type: 'turnkey',
    imgUrl:
      'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2020/04/hot-homes-outdoor-living.jpg'
  },
  {
    address: '980 Transport Avenue',
    city: 'Jersey City',
    state: 'FL',
    price: '$271808.71',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    type: 'flip',
    imgUrl:
      'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2020/04/hot-homes-outdoor-living.jpg'
  },
  {
    address: '980 Transport Avenue',
    city: 'Jersey City',
    state: 'CA',
    price: '$271808.71',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    type: 'turnkey',
    imgUrl:
      'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2020/04/hot-homes-outdoor-living.jpg'
  },
  {
    address: '980 Transport Avenue',
    city: 'Jersey City',
    state: 'MI',
    price: '$271808.71',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    type: 'turnkey',
    imgUrl:
      'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2020/04/hot-homes-outdoor-living.jpg'
  },
  {
    address: '980 Transport Avenue',
    city: 'Jersey City',
    state: 'MI',
    price: '$271808.71',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    type: 'flip',
    imgUrl:
      'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2020/04/hot-homes-outdoor-living.jpg'
  },
  {
    address: '980 Transport Avenue',
    city: 'Jersey City',
    state: 'MI',
    price: '$271808.71',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    type: 'turnkey',
    imgUrl:
      'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2020/04/hot-homes-outdoor-living.jpg'
  },
  {
    address: '980 Transport Avenue',
    city: 'Jersey City',
    state: 'MI',
    price: '$271808.71',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    type: 'turnkey',
    imgUrl:
      'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2020/04/hot-homes-outdoor-living.jpg'
  },
  {
    address: '980 Transport Avenue',
    city: 'Jersey City',
    state: 'MI',
    price: '$271808.71',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    type: 'flip',
    imgUrl:
      'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2020/04/hot-homes-outdoor-living.jpg'
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '123',
      description:
        'Hello! I am an investor out of OCcean/Monmouth County, New Jersey. I am looking for off market deals to flip and buy/hold',
      profilePic:
        'https://thumbs.dreamstime.com/b/profile-icon-female-african-american-avatar-woman-portrait-casual-person-silhouette-face-flat-design-vector-52547954.jpg'
    }),
    User.create({
      email: 'murphy@email.com',
      password: '123',
      description:
        'Hello! I am an investor out of OCcean/Monmouth County, New Jersey. I am looking for off market deals to flip and buy/hold',
      profilePic:
        'https://thumbs.dreamstime.com/b/profile-icon-female-african-american-avatar-woman-portrait-casual-person-silhouette-face-flat-design-vector-52547954.jpg'
    }),
    User.create({
      email: 'bnk423@gmail.com',
      password: '123',
      description:
        'Hello! I am an investor out of OCcean/Monmouth County, New Jersey. I am looking for off market deals to flip and buy/hold',
      profilePic:
        'https://thumbs.dreamstime.com/b/profile-icon-female-african-american-avatar-woman-portrait-casual-person-silhouette-face-flat-design-vector-52547954.jpg'
    }),
    testListings.map(testListing => {
      Listing.create(testListing)
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded test listings`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
