const Router = require('nextjs-dynamic-routes')

const router = new Router() 
router.add({ name: 'car-info', pattern: '/car-info/:id' })

module.exports = router
