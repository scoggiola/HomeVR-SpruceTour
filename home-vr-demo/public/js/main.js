$(document).ready(() => {
  // Set 'init VR' button event handler
  initVRButton();

  // Listen for exitVRMode custom event (fired from client.js)
  window.document.addEventListener('exitVRMode', handleExitVRMode, false);
  function handleExitVRMode(e) {
    // console.log(e.detail); // <-- For debugging purposes only TODO: remove this line
    if (e.detail.message === 'exit VR') {
      const content = '<div class="img-container"><img id="img-baseline" src="./public/images/Spruce_Ext_FrontRight_ElevationA.jpg" alt=""><img id="img-garage" class="overlay-img" src=""><img id="img-fireplace" class="overlay-img" src=""></div><iframe allowvr id="frame-vr" src=""></iframe>'
      $('#media-container').html('');
      $('#outer-menu').removeClass('vr-active');
      $('#media-container').removeClass('vr-active');
      $('#media-container').html(content);
      resetMenu();
    }
  }

  // Add 'click' event listener to inputs
  $('.input-dom').on('click', function() {
    // Define menu state options and tag id anchors
    const options = {
      elevation: ['ElevationA', 'ElevationB'],
      garage: ['2Car', '3Car'],
      fireplace: ['Fireplace', ''],
      view: ['FrontRight', 'FrontLeft', 'Back']
    };
    const anchors = {
      base: 'img-baseline',
      garage: 'img-garage',
      sunroom: 'img-sunroom'
    };

    // Store current menu state by input
    const elevation = $('.input-dom[name="elevation"]:checked').val();
    const garage = $('.input-dom[name="garage"]:checked').val();
    const fireplace = $('.input-dom[name="fireplace"]:checked').val();
    const view = $('.input-dom[name="view"]:checked').val();

    // Set base and current img src strings
    let imgSrc = './public/images/Spruce_Ext_';
    let currentSrc = imgSrc;

    if (view === options.view[0] || view === options.view[1]) {
      // view = FrontRight || FrontLeft
      // Deactivate fireplace img layer
      // TODO: check if class exists first
      $(`#${anchors.fireplace}`).removeClass('active');
      concatSrc(view);
      handleCaseElevation(elevation);
      handleCaseGarage(view, garage);
    } else if (view === options.view[2]) {
      concatSrc(view);
      handleCaseElevation(elevation);
      handleCaseGarage(view, garage);
      handleCaseFireplace(fireplace);
    }

   /**
    * Concat menu state value onto imgSrc string
    *
    * @param  {String} data
    * @return {Void}
    */
    function concatSrc(data) {
      // Add underscore
      const snippet = `${data}_`;
      // Concat to imgSrc
      imgSrc = imgSrc.concat(snippet);
    }

    /**
     * Finalize imgSrc string for insertion into 'src' attribute
     *
     * @param  {String} ext
     * @return {Void}
     */
    function capSrc(ext) {
      // Slice off underscore from end of imgSrc string
      imgSrc = imgSrc.slice(0, -1);
      // Concat extension (.jpg / .png) to end of imgSrc string
      imgSrc = imgSrc.concat(ext);
    }

    /**
     * Update img 'src' attribute by tag id anchor
     *
     * @param  {String} anchor
     * @param  {String} source
     * @return {Void}
     */
    function updateImg(anchor, source) {
      if (anchor === anchors.base) {
        $(`#${anchors.base}`).attr('src', source);
      } else if (anchor === anchors.elevation) {
        $(`#${anchors.elevation}`).attr('src', source);
        $(`#${anchors.elevation}`).addClass('active');
      } else if (anchor === anchors.garage) {
        $(`#${anchors.garage}`).attr('src', source);
        $(`#${anchors.garage}`).addClass('active');
      } else if (anchor === anchors.sunroom) {
        $(`#${anchors.sunroom}`).attr('src', source);
        $(`#${anchors.sunroom}`).addClass('active');
      }
    }

    function handleCaseElevation(elevation) {
      currentSrc = imgSrc;
      concatSrc(elevation);
      capSrc('.jpg');
      updateImg(anchors.base, imgSrc);
      imgSrc = currentSrc;
    }

    /**
     * Handle garage case sequence
     *
     * @param  {String} view
     * @param  {String} garage
     * @return {Void}
     */
    function handleCaseGarage(view, garage) {
      if (view === options.view[0] || view === options.view[1] || view === options.view[2]) {
        if (garage === options.garage[0]) {
          // Garage: 2Car
          return;
        } else {
          // Garage: 3Car
          // Store ref to current imgSrc string
          currentSrc = imgSrc;
          concatSrc(garage);
          capSrc('.png');
          updateImg(anchors.garage, imgSrc);
          // Reset imgSrc
          imgSrc = currentSrc;
        }
      }
    }

    /**
     * Handle fireplace case sequence
     *
     * @param  {String} sunroom
     * @return {Void}
     */
    function handleCaseFireplace(fireplace) {
      if (fireplace === options.fireplace[0]) {
        concatSrc(fireplace);
        capSrc('.png');
        updateImg(anchors.fireplace, imgSrc);
      } else {
        $(`#${anchors.fireplace}`).removeClass('active');
      }
    }
  });
});

/**
 * Initiate vr button event listener
 *
 * @return {Void}
 */
function initVRButton() {
  $('#vr-btn').on('click', function() {
    $('#outer-menu').addClass('vr-active');
    $('#media-container').addClass('vr-active');
    setTimeout(function() {
      $('#frame-vr').attr('src', './vr/index.html')
    }, 1000);
  })
}

/**
 * Initiate vr button event listener
 *
 * @return {Void}
 */
function resetMenu() {
  const names = ['elevation', 'garage', 'fireplace', 'view'];
  names.forEach((element) => {
    const inputs = document.getElementsByName(element);
    for (let i = 0; i < inputs.length; i++) {
      if (i === 0) {
        inputs[0].checked = true;
      } else {
        inputs[i].checked = false;
      }
    }
  });
}
