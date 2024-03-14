import DBManager from "./storageManager.mjs"
class Exercise {

    constructor() {
        this.exerciseId;
        this.legs;
        this.pull;
        this.push;
        this.core;
    }

async save() {
    //TODO: What happens if the DBManager fails to complete its task?
// We know that if a user object dos not have the ID, then it cant be in the DB.

if (this.exerciseId == null) {
    return await DBManager.selectYourExercise(this);
}else{
    return await DBManager.updateYourExercise(this);































































































} 
}

async delete() {
    //TODO: What happens if the DBManager fails to complete its task?
    await DBManager.deleteUser(this); 
}

async exsists(){
    let u = await DBManager.login(this.email, this.pswHash);
    return u;
}
}


export default Exercise;