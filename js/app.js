function main()
{
    const genrateButton = document.querySelector("#generateButton");

    const generateParentButton = document.querySelector("#generateParent");
    const generateChildrenButton = document.querySelector("#generateChildren");


    //evente listener
    genrateButton.addEventListener("click",function(){
    
        const txtLinkName = document.querySelector("#linkName");//fetch element from DOM
        const txtLinkAddress = document.querySelector("#linkAddress");//fetch element from DOM
        const div = document.querySelector("#container");

        //This dynamically creates an element
        const newLink= document.createElement("a"); 

        //This sets an Attribute to the newly created element
        newLink.setAttribute("href",`${txtLinkAddress.value}`);
        newLink.setAttribute("target","_BLANK");
 
        newLink.innerHTML= txtLinkName.value; 

        console.log(newLink);

        //parentElement.appendChild(childNode)
        div.appendChild(newLink);

    });


    //event listener
    generateParentButton.addEventListener("click",function(){

     /*
        This code is going to dispaly to the console the parent of generateParentButton
     */
     

     //fetch the generaeParentBUtton
     const element1 =  generateParentButton.parentElement;


     console.log("parent",element1) //show parent of button (the form)
     

    //return the child elements of the element1
    const childElements = element1.children;

    console.log("children of form",childElements) //show the children of element1(the form)

    console.log("the number of children within form",childElements.length) //show the size of the area(elements within the form)
    console.log("4th child of the form",childElements[3]); //show the 4th child within the form

     //console.log(parent);
     console.log("previous sibling of the form",element1.previousElementSibling)//this should show the div

    });



}

main();