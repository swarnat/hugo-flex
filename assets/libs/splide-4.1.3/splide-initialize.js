var splideData;
if (splideData) {
  document.addEventListener("DOMContentLoaded", function (e) {
    for (let id in splideData) {
      let options = Object.assign({
        perPage: 1
      }, splideData[id])

      var splideObj = new Splide("#" + id, options)

      splideObj.mount();
    }
  });
}
