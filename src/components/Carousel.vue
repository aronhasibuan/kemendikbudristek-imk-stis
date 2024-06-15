<template>
    <div class="gallery mb-10">
      <div class="gallery-container">
        <img src="../assets/gambar1.jpg" alt="" class="gallery-item gallery-item-1" data-index="1">
        <img src="../assets/gambar2.jpg" alt="" class="gallery-item gallery-item-2" data-index="2">
        <img src="../assets/gambar3.jpg" alt="" class="gallery-item gallery-item-3" data-index="3">
        <img src="../assets/gambar4.jpg" alt="" class="gallery-item gallery-item-4" data-index="4">
        <img src="../assets/gambar5.jpg" alt="" class="gallery-item gallery-item-5" data-index="5">
      </div>
      <div class="gallery-controls flex justify-center"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Carousel',
    mounted() {
      const galleryContainer = this.$el.querySelector('.gallery-container')
      const galleryControlsContainer = this.$el.querySelector('.gallery-controls')
      const galleryControls = ['previous', 'next']
      const galleryItems = this.$el.querySelectorAll('.gallery-item')
  
      class Carousel {
        constructor(container, items, controls) {
          this.carouselContainer = container
          this.carouselControls = controls
          this.carouselArray = [...items]
        }
  
        updateGallery() {
          this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1')
            el.classList.remove('gallery-item-2')
            el.classList.remove('gallery-item-3')
            el.classList.remove('gallery-item-4')
            el.classList.remove('gallery-item-5')
          })
  
          this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`)
          })
        }
  
        setCurrentState(direction) {
          if (direction.className.includes('gallery-controls-previous')) {
            this.carouselArray.unshift(this.carouselArray.pop())
          } else {
            this.carouselArray.push(this.carouselArray.shift())
          }
          this.updateGallery()
        }
  
        setControls() {
          this.carouselControls.forEach(control => {
            const button = document.createElement('button')
            button.className = `gallery-controls-${control}`
            button.innerText = control
            galleryControlsContainer.appendChild(button)
          })
        }
  
        useControls() {
          const triggers = [...galleryControlsContainer.childNodes]
          triggers.forEach(control => {
            control.addEventListener('click', e => {
              e.preventDefault()
              this.setCurrentState(control)
            })
          })
        }
      }
  
      const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls)
  
      exampleCarousel.setControls()
      exampleCarousel.useControls()
    }
  }
  </script>
  
  <style>
  /* Your CSS as is */
  
  .gallery {
    width: 100%;
  }
  
  .gallery-container {
    align-items: center;
    display: flex;
    height: 400px;
    margin: 0 auto;
    max-width: 1000px;
    position: relative;
  }
  
  .gallery-item {
    height: 200px;
    opacity: 0;
    position: absolute;
    transition: all 0.3s ease-in-out;
    width: 330px;
    z-index: 0;
    border-radius: 15px;
    background-size: contain;
  }
  
  .gallery-item-1 {
    left: 15%;
    opacity: 0.4;
    transform: translateX(-50%);
  }
  
  .gallery-item-2,
  .gallery-item-4 {
    height: 250px;
    opacity: 0.8;
    width: 380px;
    z-index: 1;
  }
  
  .gallery-item-2 {
    left: 30%;
    transform: translateX(-50%);
  }
  
  .gallery-item-3 {
    box-shadow: -2px 5px 33px 6px rgba(0, 0, 0, 0.35);
    height: 300px;
    opacity: 1;
    left: 50%;
    transform: translateX(-50%);
    width: 430px;
    z-index: 2;
  }
  
  .gallery-item-4 {
    left: 70%;
    transform: translateX(-50%);
  }
  
  .gallery-item-5 {
    left: 85%;
    opacity: 0.4;
    transform: translateX(-50%);
  }
  
  .gallery-controls button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    font-size: 20px;
    margin: 0 50px;
    padding: 0 12px;
    text-transform: capitalize;
  }
  
  .gallery-controls-button:focus {
    outline: none;
  }
  
  .gallery-controls-previous {
    position: relative;
  }
  
  .gallery-controls-previous::before {
    border: solid #000;
    border-width: 0 4px 4px 0;
    content: '';
    display: inline-block;
    height: 4px;
    left: -30px;
    padding: 10px;
    position: absolute;
    transform: rotate(135deg) translateY(-50%);
    transition: left 0.15s ease-in-out;
    width: 5px;
  }
  
  .gallery-controls-previous:hover::before {
    left: -40px;
  }
  
  .gallery-controls-next {
    position: relative;
  }
  
  .gallery-controls-next::before {
    border: solid #000;
    border-width: 0 4px 4px 0;
    content: '';
    display: inline-block;
    height: 4px;
    padding: 10px;
    position: absolute;
    right: -30px;
    top: 45%;
    transform: rotate(-45deg) translateY(-50%);
    transition: right 0.15s ease-in-out;
    width: 5px;
  }
  
  .gallery-controls-next:hover::before {
    right: -40px;
  }
  
  .gallery-nav {
    bottom: -15px;
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    position: absolute;
    width: 100%;
  }
  
  .gallery-nav li {
    background: #ccc;
    border-radius: 50%;
    height: 10px;
    margin: 0 16px;
    width: 10px;
  }
  
  .gallery-nav li.gallery-item-selected {
    background: #555;
  }
  </style>
  