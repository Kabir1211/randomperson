
$(document).ready(()=>{
    const url = 'https://randomuser.me/api/'


    async function myFunction(){
        try {
            const random_person_response = await fetch(url);
            
            const final_response = await random_person_response.json();
            const result = final_response.results[0];
            console.log(result);
            const sex = result.gender;
            const age = result.dob.age
            const name = result.name.first + " " + result.name.last;
            const email = result.email;
            const image = result.picture.large;
            const phone_number = result.phone;
            console.log(phone_number)
            const address = result.location.street.number + ", " + result.location.street.name + ", "+ result.location.city + ", " + result.location.state + ", " + result.location.country
            
            $("#name").text("Hi, I am " + name + "!")
            $("#info").text("I am a " +  age + " year old " + sex + " based in "+ result.location.country+ " and I am trying to find a friend. Below are my contact details if you want to reach out.")
            $("#number").text(phone_number)
            $("#address").text(address)
            $("#email").text(email)
            $(".dp").attr("src", image)
        }
        catch(err)
        {
            console.log("something went wrong");
        }
    }
    myFunction()
})