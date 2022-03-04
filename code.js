function setupGrid() 
{
    let gridSize = prompt("Please input how many squares you'd like per line (Min: 2, Max: 100)");

    if(gridSize > 100 || gridSize < 2) 
    {
        setupGrid();
        return;
    }

   let gridSetup = document.getElementById('grid');

    let box = document.createElement('div');
    box.style.outline = '1px solid white';
    box.style.width = (600 / gridSize) + 'px'; 
    box.style.height = (600 / gridSize) + 'px'; 
    box.style.float = 'left';
    box.className = 'gridBox';
    gridSetup.appendChild(box);

    for(let i = 0; i < ((gridSize * gridSize) - 1); i++) {
        box.setAttribute('id', 'Box ' + i);
        gridSetup.appendChild(box.cloneNode(true));
    }

    let boxes = document.getElementsByClassName('gridBox');

    let red = Math.round(Math.random() * 100);
    let green = Math.round(Math.random() * 100);
    let blue = Math.round(Math.random() * 100);
    let colorGradient = "rgb(" + red + "%, " + green + "%, " + blue + "%)";
    console.log(colorGradient);

    let redBool = 0;
    let greenBool = 0;
    let blueBool = 0;

    for(let j = 0; j < boxes.length; j++) 
    {
        boxes[j].addEventListener('mouseenter', () => {
            boxes[j].style.backgroundColor = colorGradient;
            if(redBool === 0) 
            {
                red = red - 1;
                if(red === 0) 
                {
                    redBool = 1;
                }
            }
            else if(redBool === 1) 
            {
                red = red + 1;
                if(red === 100) 
                {
                    redBool = 0;
                }
            }

            if(greenBool === 0) 
            {
                green = green - 1;
                if(green === 0) 
                {
                    greenBool = 1;
                }
            }
            else if(greenBool === 1) 
            {
                green = green + 1;
                if(green === 100) 
                {
                    greenBool = 0;
                }
            }

            if(blueBool === 0) 
            {
                blue = blue - 1;
                if(blue === 0) 
                {
                    blueBool = 1;
                }
            }
            else if(blueBool === 1) 
            {
                blue = blue + 1;
                if(blue === 100) 
                {
                    blueBool = 0;
                }
            }

            colorGradient = "rgb(" + red + "%, " + green + "%, " + blue + "%)";
        });
    }
}

setupGrid();

function resetGrid() 
{
    let boxes = document.getElementsByClassName('gridBox');

    while(boxes[0]) {
        boxes[0].parentNode.removeChild(boxes[0]);
    }

    setupGrid();
}
