import express from 'express';
const router =express.Router();
import {Book} from '../models/bookModels.js';

router.post('/', async(request, response) => {
    try {
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear 
        ){
            return response.status(400).send({
                message: 'send all required fields:title,author,publishYear',
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };
        const book =await Book.create(newBook);

        return response.status(201).send(book);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: + error.message});
    }
});
//get all books

router.get('/',async(request, response) =>{
    try {
        const books =await Book.find({});
        return response.status(200).json({
            count:books.length,
            data:books
        });
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
        
    }
});

// get one book from the database by id

router.get('/:id',async(request, response) =>{
    try {
        const {id} =request.params;
        const book =await Book.findById(id);
        return response.status(200).json(book);
        
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message:error.message});
        
    }
});
//update a book 

router.put('/:id',async(req,res)=>{
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message:'send all required fields:title,author,publishYear',
        });
    }
    const {id} = req.params;
    const result = await Book.findByIdAndUpdate(id,req.body);

    if(!result){
        return res.status(404).json({
            message: 'Book not found'
        });
    }
    return res.status(200).send({message: 'Book updated successfully'});

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
        
    }
})

//delete a book from the database
router.delete('/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result) {
            return res.status(404).json({message:'Book not found'});

        }
        return res.status(200).send({message:'Book deleted successfully'});
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
        
    }
});

export default router;