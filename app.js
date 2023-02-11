const images = [
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
];


const n = images.length;
const flexContainer = document.getElementById("flex-container");
const leftButton = document.getElementById("left-btn");
const rightButton = document.getElementById("right-btn");
const carouselNav = document.getElementById("carousel-nav");

const containerWidth = 80;
const flexContainerWith = n * containerWidth;
flexContainer.style.width = flexContainerWith;

for (let i = 0; i < n; i++) {
    const newImage = document.createElement("img");
    newImage.src = images[i];
    newImage.classList.add("img-style");
    flexContainer.appendChild(newImage);    

    const dotDiv = document.createElement('div');
    dotDiv.classList.add("carousel-dot");
    carouselNav.appendChild(dotDiv);
    dotDiv.addEventListener('click', (event) => {
        const index = [...carouselNav.children].indexOf(event.target);
        showImage(index);
    });
}

let currentPosition = 0;
showImage(0);
leftButton.addEventListener('click', ()=> {
    if(currentPosition > 0){
        showImage(currentPosition - 1);
    }
    else {
        showImage(n - 1);
    }
    
});

rightButton.addEventListener('click', ()=> {
    if(currentPosition < n-1){
        showImage(currentPosition + 1);
    }
    else {
        showImage(0);
    }
    
});

function showImage(position) {
    const previousDot = carouselNav.children[currentPosition];
    previousDot.classList.remove("active");
    currentPosition = position;
    const currentDot = carouselNav.children[currentPosition];
    currentDot.classList.add("active"); 

    const translateXDistance = -currentPosition * containerWidth;
    flexContainer.style.transform = `translateX(${translateXDistance}vw)`;
}











































// my dot code 


// const carouselNavigator = document.getElementById("carouselNavigator");
// const newDot = document.getElementById("carouselNavigator")
// // appending dots of carousel navigator

// for(let i=0; i<n; i++){   
//     const newDot = document.createElement("div");
//     newDot.classList.add("caraousel-nav-button");
//     newDot.id = `dot-${i}`;
//     carouselNavigator.appendChild(newDot);
// }

// // Navigate on clicking dots 

// const dot0 = document.getElementById("dot-0");
// const dot1 = document.getElementById("dot-1");
// const dot2 = document.getElementById("dot-2");
// const dot3 = document.getElementById("dot-3");
// const dot4 = document.getElementById("dot-4");

// dot0.addEventListener('click', ()=> {
//     currentPosition = 0;
//     showImage();
// })

// dot1.addEventListener('click', () => {
//     currentPosition = 1;
//     showImage();
// })


// dot2.addEventListener('click', () => {
//     currentPosition = 2;
//     showImage();
// })


// dot3.addEventListener('click', () => {
//     currentPosition = 3;
//     showImage();
// })


// dot4.addEventListener('click', () => {
//     currentPosition = n-1;
//     showImage();
// })