const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/**
 * 
 * @param {string} root 
 * @param {array} imagesArray 
 * @returns 
 */

function makeGallery(root, imagesList) {
  const rootNode = document.querySelector(root);
  
  const imagesMarkupList = [];
  for (let i = 0; i < imagesList.length; i += 1) {
    const { url, alt } = imagesList[i];

    const li = `<li><img src=${url} alt='${alt}' height='100' width='200'/></li>`;

    imagesMarkupList.push(li);
  }
   rootNode.insertAdjacentHTML("beforeend", imagesMarkupList.join(''));
}
makeGallery('.gallery', images);
