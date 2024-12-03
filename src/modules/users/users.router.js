import {Router} from 'express';
const router = Router()

const products = [{'id': '1', 'name': 'Laptop', 'description': 'High-performance laptop', 'price': 1200.00, 'stock': 10},
    {'id': '2', 'name': 'Smartphone', 'description': 'Latest model smartphone', 'price': 999.99, 'stock': 25},
    {'id': '3', 'name': 'Headphones', 'description': 'Noise-cancelling headphones', 'price': 199.99, 'stock': 50},
    {'id': '4', 'name': 'Smartwatch', 'description': 'Waterproof smartwatch', 'price': 149.99, 'stock': 30},
    {'id': '5', 'name': 'Camera', 'description': '4K professional camera', 'price': 699.99, 'stock': 15},
    {'id': '6', 'name': 'Gaming Console', 'description': 'Next-gen gaming console', 'price': 499.99, 'stock': 20},
    {'id': '7', 'name': 'Monitor', 'description': '4K ultra-wide monitor', 'price': 329.99, 'stock': 8},
    {'id': '8', 'name': 'Keyboard', 'description': 'Mechanical RGB keyboard', 'price': 89.99, 'stock': 60},
    {'id': '9', 'name': 'Mouse', 'description': 'Wireless ergonomic mouse', 'price': 39.99, 'stock': 75},
    {'id': '10', 'name': 'External Hard Drive', 'description': '1TB external hard drive', 'price': 59.99, 'stock': 40},
    {'id': '11', 'name': 'Tablet', 'description': 'High-resolution screen tablet', 'price': 299.99, 'stock': 22},
    {'id': '12', 'name': 'Printer', 'description': 'Wireless all-in-one printer', 'price': 129.99, 'stock': 12},
    {'id': '13', 'name': 'Router', 'description': 'Dual-band WiFi router', 'price': 79.99, 'stock': 18},
    {'id': '14', 'name': 'Desk Chair', 'description': 'Ergonomic office chair', 'price': 199.99, 'stock': 10},
    {'id': '15', 'name': 'Webcam', 'description': 'HD webcam with microphone', 'price': 49.99, 'stock': 35},
    {'id': '16', 'name': 'Speakers', 'description': 'Bluetooth portable speakers', 'price': 99.99, 'stock': 25},
    {'id': '17', 'name': 'Drone', 'description': 'Compact drone with camera', 'price': 399.99, 'stock': 10},
    {'id': '18', 'name': 'Fitness Tracker', 'description': 'Track your workouts and health', 'price': 59.99, 'stock': 45},
    {'id': '19', 'name': 'Power Bank', 'description': '10,000mAh portable charger', 'price': 29.99, 'stock': 80},
    {'id': '20', 'name': 'Smart Bulb', 'description': 'WiFi-enabled smart bulb', 'price': 19.99, 'stock': 100}
]
//get all data
router.get('/products', (req, res) => {
    return res.json({message:'Success',
        data:products});
})
//add data
router.post('/products', (req, res) => {
    products.push(req.body);
    res.json({message:'Success'});
})
//delete
router.delete('/products',(req, res) => {
    const id = req.body.id
    const index = products.findIndex((user)=>{
        return user.id === id;

    });
    if(index <0){
        return res.json({message:'Error'});
    }
    products.splice(index, 1);
    return res.json({message:'Success',users:products});

})

// update
// put(Replaces the entire resource,Missing fields are removed)
//patch(Partially update a resource,Missing fields remain unchanged)
router.put('/products' ,(req, res) => {
    const id = req.body.id;
    console.log(req.body);
    const stock = req.body.stock;
    const index  = products.findIndex((user)=>{
        return user.id === id;
    })
    if (index < 0){
        return res.json({message:'Error'});
    }
    products[index].stock = stock;
    return res.json({message:'Success'});
})
export default router;