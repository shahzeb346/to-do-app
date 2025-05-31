const input = document.querySelector("input");
const btn = document.querySelector(".add-btn");
const list = document.querySelector("ol");

btn.addEventListener("click", () => {
    if (input.value === "") {
        alert("Plz enter the value");
    } else {
        const li = document.createElement("li");
        const remove = document.createElement("button");
        li.textContent = input.value.charAt(0).toUpperCase()+ input.value.slice(1).toLowerCase(); // Add space before button
        remove.textContent = "Delete";
        remove.classList.add("delete-btn");
         
        li.classList.add("item");
        li.append(remove);
        list.append(li);

        input.value = "";
        btn.style.backgroundColor = "green";


        // Add delete functionality
        remove.addEventListener("click", () => {
            li.remove();
        });
    }
});



 


   

