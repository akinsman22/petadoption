import { Router } from "express";
import { addPet, addPetPage, allPet, deletePet, editPet, editPetPage, singlePet } from "../controllers/petController";

const router = Router();

router.get('/', allPet );
// call to server
router.get('/add', addPetPage);
//.post sending data back 
router.post('/add', addPet);

router.get('/edit/:petId', editPetPage);

router.post('/edit/:petId', editPet);

router.post('/delete/:petId', deletePet);

router.get('/:petId', singlePet);

export default router; 
