import './style.css';




  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination], 
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  
  
  });


  function location() {
    setTimeout(() => {
      getAddressFromCoordinates();
    }, 2000);
}

function error(){
  document.getElementById('address').textContent = "GAST UW DATA SUCKED";
  document.getElementById('address').style.color = "rgb(198, 66, 66)";
};

 const getAddressFromCoordinates = async () =>{
    const response = await fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/4.481399602726015,51.025710874850546.json?&access_token=pk.eyJ1Ijoic2Fpbm8iLCJhIjoiY2xldjZnbDIyMXg2ZDN2cDRkZG5xaWF1ZyJ9.ppAUFDUs6U1j6c3l0UbKZA`);
    const data = await response.json();
    document.getElementById("loader").style.display = "none";
    try{
      const address = data.features[0].place_name;
      document.getElementById('address').textContent = address;
    } catch(err){
      error();
    }
}

await location();

  async function footer() {
    // Display the loading spinner
    document.getElementById("loader").style.display = "block";
    
    try {
      // Geocode the address
      await geocodeAddress(address);


    } finally {
      // Hide the loading spinner
      document.getElementById("loader").style.display = "none";
    }
  }

