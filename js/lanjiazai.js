var images = document.getElementsByTagName("img");
  function callback(entries) {
   for (let i of entries) {
     if (i.isIntersecting) {
         let img = i.target;
         let trueSrc = img.getAttribute("data-src");
         img.setAttribute("src", trueSrc);
         observer.unobserve(img);
     }
   } 
 }
     const observer = new IntersectionObserver(callback);
     for (let i of images) {
       observer.observe(i);
     }