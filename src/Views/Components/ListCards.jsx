import React from "react";
import "../Styles/cardItem.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
// import { CardItem } from "../CardItem";
import { useEffect, useState } from "react";


const ListCards = () => {

    const [book, setBook] = useState([]);
    useEffect(() => {
        const app = async () => {
            fetch("https://www.etnassoft.com/api/v1/get/?all_tags=[comics]&order=newest")
                .then((res) => res.json())
                .then((result) => { setBook(result) })
        };
        app();

    }, []);

    return (
        <main className='containerCard'>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', alignContent: 'center'}}>
                {book.map((item) => (
                   
                    <Card  sx={{ maxWidth: 300 }}>
                         
                        <CardMedia 
                            
                            component="img"
                            height="300"
                            image={item.cover}
                        />

                        <CardContent >
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.author}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Buy</Button>
                            <Button size="small" data-rel="dialog" data-transition="Flip">Learn More</Button>
                            
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