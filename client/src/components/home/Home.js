import React, { useEffect } from 'react';
import Slider from './Slider';
import { getProducts } from '../redux/actions/Action';
import { useSelector, useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Home.css';


const Home = () => {


    const { products } = useSelector(state => state.getproductsdata);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);



    return (
        <div className="home_section">
            <div className="banner_part" style={{ textAlign: 'center' }}>
                {/* <div className='color'> */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqguznmFobK0_MLU-BSoZuxdcyeLxsLFDoEQ&usqp=CAU" alt="" style={{ padding: 30 }} />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqguznmFobK0_MLU-BSoZuxdcyeLxsLFDoEQ&usqp=CAU" alt="" style={{ padding: 30 }} />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqguznmFobK0_MLU-BSoZuxdcyeLxsLFDoEQ&usqp=CAU" alt="" style={{ padding: 30 }} />
                {/* </div> */}
            </div>

            <div className="slide_part">
                <div className="left_slide" style={{display:'flex',padding:20,textAlign:'center'}}>


                    <Card sx={{ maxWidth: 345 }} style={{margin:10}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="data:image/jpeg;base64,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"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                House
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            House royalty-free images. 20,014,844 house stock photos, vectors, and illustrations are available royalty-free.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>



                    <Card sx={{ maxWidth: 345 }} style={{margin:10}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQRmUkGYNM81mk-kZm_A2MQeGvnET69MCfog&usqp=CAU"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                House
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            A house is a single-unit residential building. It may range in complexity from a rudimentary hut to a complex structure of wood, masonry, concrete or other ...
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                    <Card sx={{ maxWidth: 345 }} style={{margin:10}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQRmUkGYNM81mk-kZm_A2MQeGvnET69MCfog&usqp=CAU"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                House
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            House royalty-free images. 20,014,844 house stock photos, vectors, and illustrations are available royalty-free.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                            {/* <Slider title="Deal of the Day" products={products} />  */}
                </div>

                {/* <div className="right_slide">
                    <h4>Festive Latest Launches</h4>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                    <a href="#">See More</a>
                </div> */}
            </div>

            <div className="center_img">
                <img src="data:image/jpeg;base64,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" alt="" style={{width:'400px',height:'300px'}}/> 
                <p style={{padding:5}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque, quibusdam quam corporis similique sunt? Atque fugiat reprehenderit cupiditate facere impedit architecto, voluptate, illo itaque aspernatur, magnam harum. Eius vero ipsum eveniet facilis, tempore expedita quas quos recusandae doloribus assumenda, temporibus nemo laborum necessitatibus? Adipisci odio quia ea molestiae magni?</p>
            </div>
            {/* <Slider title="Best Seller" products={products} />  */}
            <Slider title="Up to 80% off" products={products} />


        </div>
    )
}

export default Home;