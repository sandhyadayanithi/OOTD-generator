const categories ={
  accessories : {
    images : [
      "images/ac1.png",
      "images/ac2.png",
      "images/ac3.png",
      "images/ac4.png",
      "images/ac5.png",
      "images/ac6.png",
      "images/ac7.png"
    ],
    index : 0,
    element : document.querySelector('.accImg'),
    nextBtn : document.querySelector('.nextbtn-1'),
    prevBtn : document.querySelector('.prevbtn-1')
  },
  tops : {
    images : [
      "images/top1.png",
      "images/top2.png",
      "images/top3.png",
      "images/top4.png",
      "images/top5.png",
      "images/top6.png",
      "images/top7.png",
      "images/top8.png",
      "images/top9.png",
      "images/top10.png"
    ],
    index : 0,
    element : document.querySelector('.topImg'),
    nextBtn : document.querySelector('.nextbtn-2'),
    prevBtn : document.querySelector('.prevbtn-2')
  },
  bottoms : {
    images : [
      "images/btm1.png",
      "images/btm2.png",
      "images/btm3.png",
      "images/btm4.png",
      "images/btm5.png",
      "images/btm6.png",
      "images/btm7.png",
      "images/btm8.png"
    ],
    index : 0,
    element : document.querySelector('.btmImg'),
    nextBtn : document.querySelector('.nextbtn-3'),
    prevBtn : document.querySelector('.prevbtn-3')
  }
};

function updateImage(cat){
  const category=categories[cat];
  category.element.src=category.images[category.index];
}

function setUp(){
  for (const cat in categories){
    const category=categories[cat];
    category.nextBtn.addEventListener('click',()=>{
      category.index=(category.index + 1) % category.images.length;
      updateImage(cat);
    });
    category.prevBtn.addEventListener('click',()=>{
      category.index=(category.index - 1 + category.images.length) % category.images.length;
      updateImage(cat);
    });
  }
}

function random(){
  for(const cat in categories){
    const category=categories[cat];
    category.index=Math.floor(Math.random()*category.images.length);
    updateImage(cat);
  }
}

document.querySelector('.random-btn').addEventListener('click',random);

setUp();