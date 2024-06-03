function my_Dictionary() {  //my dictionary
    var Animal = {
        Species:"Dog",         //different KVP's
        Color:"Black",
        Breed:"Terrier", 
        Age:"9",
        Sound:"Bark"
    };
    delete Animal.Breed;
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}