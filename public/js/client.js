// ** ENDPOINT **
const endpoint = '/api/v0/gallery';
// ** FETCH **
fetch(endpoint)
  // ** ERROR HANDLING **
  .then((response) => {

    if (!response.ok) {
      throw new Error('Not 200 ok');
    }
    return response.json();

  })
  // ** GALLERY LOADING **
  .then((data) => {
    const imgArr = data;
    const gallery = document.querySelector(".gallery");

    for (let i = 0; i < imgArr.length; i++) {

      //**FIGURE CREATED TO HOUSE IMAGES**

      const imageFigure = document.createElement("figure");
      gallery.appendChild(imageFigure);

      //**H3 ELEMENT CREATED FOR IMAGE TITLE**

      const imageTitle = document.createElement('h3');
      imageTitle.innerText = `${imgArr[i].title}`;

      imageFigure.append(imageTitle);

      //**ANCHOR ELEMENT CREATED FOR ORIGINAL IMAGE LINK**

      const imageLink = document.createElement('a');
      imageLink.href = `${imgArr[i].linkURL}`;
      imageFigure.append(imageLink);

      //**IMG ELEMENT CREATED TO RETREIVE LOCALY HOSTED IMAGE AND CREATE ALT FOR ACCESIBILITY**

      const figLinkImg = document.createElement('img');
      figLinkImg.src = `${imgArr[i].pathURL}`;
      figLinkImg.alt = `${imgArr[i].description}`;
      imageLink.append(figLinkImg);

      //**FIGCAPTION ELEMENT CREATED TO GIVE CREDIT AND LINK TO THEIR PERSONAL ACCOUNT**

      const imageCaption = document.createElement('figcaption');
      imageFigure.append(imageCaption);
      const figureLink = document.createElement('a');
      figureLink.href = `${imgArr[i].creditURL}`;
      figureLink.innerText = `Photographer credit: ${imgArr[i].credit}`;
      imageCaption.append(figureLink);
    };
  })
  // ** CATCH THE ERRORS **
  .catch((err) => {
    console.log(err);
  });


