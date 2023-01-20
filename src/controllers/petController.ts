import { RequestHandler } from "express";
import { Pet } from "../models/pet";

export const defaultPet: RequestHandler = (req, res, next) => {
    res.redirect('/pet');
}

export const allPet: RequestHandler = async (req, res, next) => {
    let petList: Pet[] = await Pet.findAll();
    res.render('all-pet', {petList})
}
// petList = variable in allPet

export const singlePet: RequestHandler = async (req, res, next) =>{
    let itemId = req.params.petId;
    let petItem: Pet | null = await Pet.findByPk(itemId);
    if (petItem){
        res.render('pet-detail', {findPet: petItem});
    }
    else {
        res.status(404).render('error', { message: 'Pet not found'});
    }
}

export const addPetPage: RequestHandler = (req, res, next) => {
    res.render('add-pet');
}

export const addPet: RequestHandler = async (req, res, next) => {
    let newPet: Pet = req.body;
    await Pet.create(newPet);
    res.redirect('/pet');
}

export const editPetPage: RequestHandler = async (req, res, next) =>{
    let itemId = req.params.petId;
    let petItem: Pet | null = await Pet.findOne({
        where: { petId: itemId}
    });
    if (petItem){
        res.render('edit-pet', { findPet: petItem});
    }
    else {
        res.status(404).render('error', { message: 'Pet not found.'});
    }
}

export const editPet: RequestHandler = async (req, res, next) =>{
    let itemId = req.params.petId;
    let updatePet: Pet = req.body;

    let [updated] = await Pet.update(updatePet,{
        where: { petId: itemId}
    });
    
    if (updated ===1){
        res.redirect('/pet');
    }
    else {
        res.render('error', { message: 'Pet could not be updated'});
    }
}

export const deletePet: RequestHandler = async (req, res, next) =>{
    let itemId = req.params.petId;

    let deleted = await Pet.destroy({
        where: { petId: itemId }
    });

    if (deleted) {
        res.redirect('/pet')
    }
    else {
        res.status(404).render('error', {message: 'Cant not find Pet to delete.'})
    }
}