import React from "react";
import "../Styles/cardItem.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import cover from '../../media/cover.jpg';
// import { CardItem } from "../CardItem";
import { useEffect, useState } from "react";


const ListCards = () => {

    const [book, setBook] = useState([]);
    useEffect(() => {
        const app = async () => {
            fetch("https://www.etnassoft.com/api/v1/get/?num_items=15")
                .then((res) => res.json())
                .then((result) => { setBook(result) })
        };
        app();

    }, []);

    return (
        <main className='containerCard'>
            <img className="cover" src={cover} alt="Librother.com" />

            <Box sx={{width: '90%', display: 'flex', flexWrap: 'wrap', gap: 25, justifyContent: 'center'}} mt={10} mb={10}>
                {book.map((item) => (
                   
                    <Card  sx={{ maxWidth: 325, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>                       
                        <CardMedia      
                            component="img"
                            height="466"
                            image={item.cover}/>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.author}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                            {/* <Button size="small" variant="contained">Buy</Button> */}
                            {/* <Button size="small" variant="contained" color="neutral" data-rel="dialog" data-transition="Flip">Learn More</Button> */}
                            <Button color="success" size="small" variant="contained" mb={30}>Learn More</Button>                            
                        </CardActions>
                    </Card>
                ))}
            </Box>

            {/*  {book.map((item) => (
                    <CardItem
                    key = {item.id}
                    title = {item.title}
                    author = {item.author}
                    thumbnail = {item.thumbnail}
                    />
                ))} */}

        </main>
    );

}

export default ListCards;