function changeBackground() {
  // You should be able to get the value of the select by now
  const color = document.querySelector("#backgroundColor").value;

  // This should be available for students to see how to update CSS
  document.body.style.backgroundColor = color;
}

function updateFontSize() {
  // This is something you can do based on exercices on Calculator
  const fontSize = parseFloat(document.querySelector("#fontSize").value);
  // The tricky part here is to do a querySelector on your own
  // And play with concatenation to add the 'px' unit in the string
  /* SOLUTION */
  document.body.style.fontSize = fontSize +  'px'
  console.log(fontSize);
}
function colorKeyword() {
  const keywords =
    "aqua black blue fuchsia gray green lime maroon navy olive purple red silver teal white yellow aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkturquoise darkviolet deeppink deepskyblue dimgray dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray green greenyellow honeydew hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgreen lightgrey lightpink lightsalmon lightseagreen lightskyblue lightslategray lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy navyblue oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray snow springgreen steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen";
  let colorWord = document.querySelector('#colorWord').value;
      
  console.log(colorWord);
    if (keywords.includes(colorWord)) {
    
      document.body.style.backgroundColor = colorWord;
  } else {
    document.body.style.backgroundColor = "red";
  }
  /* SOLUTION */
}
function changeBoxColor(){
  let coloredBox = document.querySelector('#coloredBox');
  let color = coloredBox.style.backgroundColor;
  //Write the rest of the code here
  /* SOLUTION */
  let rgb = ['red', 'green', 'blue'];
  
    /*if (color === 'red') {
      coloredBox.style.backgroundColor = 'green';
    } else if (color === 'green') {
      coloredBox.style.backgroundColor = 'blue';
    } else if (color === 'blue') {
      coloredBox.style.backgroundColor = 'red';
    }  */
let index = rgb.indexOf(color);
var newIndex = index + 1;
if(newIndex >= rgb.length) newIndex = 0;
      coloredBox.style.backgroundColor = rgb[newIndex];
        
      

    
  
}

function sliderChanged(value){
  console.log("the value of the slider is "+value);
 //Write the rest of the code here
  /* SOLUTION */
  
  let sizeBox1  = document.querySelector('#sizedBox');
  sizeBox1.style.width = 100 * value + 'px';
  sizeBox1.style.height = 100 * value + 'px';

}
