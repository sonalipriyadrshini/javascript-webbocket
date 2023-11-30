function Root(){
    if(true){
        var heroone="iron man"//function scope
        const herotwo="super man"//block scope
        let herothree="batman"//block scope
        console.log(herotwo);
    }
    console.log(heroone);
    
    console.log(herothree);
}
Root();