$(document).ready(() => {
  // Set 'init VR' button event handler
  initVRButton();

  // Listen for exitVRMode custom event (fired from client.js)
  window.document.addEventListener('exitVRMode', handleExitVRMode, false);
  function handleExitVRMode(e) {
    // console.log(e.detail); // <-- For debugging purposes only TODO: remove this line
    if (e.detail.message === 'exit VR') {
      const content = '<div class="img-container"><img id="img-baseline" src="./public/images/Spruce_Ext_FrontRight_ElevationA.jpg" alt=""><img id="img-baseline-color" class="overlay-img" src=""><img id="img-garage" class="overlay-img" src=""><img id="img-garage-color" class="overlay-img" src=""><img id="img-fireplace" class="overlay-img" src=""><img id="img-fireplace-color" class="overlay-img" src=""></div><iframe allowvr id="frame-vr" src=""></iframe>'
      $('#media-container').html('');
      $('#outer-menu').removeClass('vr-active');
      $('#media-container').removeClass('vr-active');
      $('#media-container').html(content);
      resetMenu();
    }
  }

  // Add 'click' event listener to inputs
  $('.input-dom').on('click', function(e) {
    console.log(e);
    // Define menu state options and tag id anchors
    const options = {
      elevation: ['ElevationA', 'ElevationB'],
      garage: ['2Car', '3Car'],
      fireplace: ['Fireplace', ''],
      view: ['FrontRight', 'FrontLeft', 'Back'],
      color: ['Color1', 'Color2']
    };
    const anchors = {
      base: 'img-baseline',
      garage: 'img-garage',
      fireplace: 'img-fireplace',
      baseColor: 'img-baseline-color',
      garageColor: 'img-garage-color',
      fireplaceColor: 'img-fireplace-color'
    };

    // Store current menu state by input
    const elevation = $('.input-dom[name="elevation"]:checked').val();
    const garage = $('.input-dom[name="garage"]:checked').val();
    const color = $('.input-dom[name="color"]:checked').val();
    const fireplace = $('.input-dom[name="fireplace"]:checked').val();
    let view = $('.input-dom[name="view"]:checked').val();

    // Set base and current img src strings
    let imgSrc = './public/images/Spruce_Ext_';
    let currentSrc = imgSrc;

    const fireplaceClassName = 'form-check-input input-dom input-fireplace';

    if (e.currentTarget.className === fireplaceClassName && view === options.view[0] ||
        e.currentTarget.className === fireplaceClassName && view === options.view[1]) {
      setViewOptionToBack();
      view = $('.input-dom[name="view"]:checked').val();
    }

    if (view === options.view[0] || view === options.view[1]) {
      // view = FrontRight || FrontLeft
      // Deactivate fireplace img layer
      // TODO: check if class exists first
      $(`#${anchors.fireplace}`).removeClass('active');
      $(`#${anchors.fireplaceColor}`).removeClass('active');
      concatSrc(view);
      handleCaseElevation(elevation, color);
      handleCaseGarage(view, garage, color);
    } else if (view === options.view[2]) {
      concatSrc(view);
      handleCaseElevation(elevation, color);
      handleCaseGarage(view, garage, color);
      handleCaseFireplace(fireplace, color);
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
      } else if (anchor === anchors.garage) {
        $(`#${anchors.garage}`).attr('src', source);
        $(`#${anchors.garage}`).addClass('active');
      } else if (anchor === anchors.fireplace) {
        $(`#${anchors.fireplace}`).attr('src', source);
        $(`#${anchors.fireplace}`).addClass('active');
      } else if (anchor === anchors.baseColor) {
        $(`#${anchors.baseColor}`).attr('src', source);
        $(`#${anchors.baseColor}`).addClass('active');
      } else if (anchor === anchors.garageColor) {
        $(`#${anchors.garageColor}`).attr('src', source);
        $(`#${anchors.garageColor}`).addClass('active');
      } else if (anchor === anchors.fireplaceColor) {
        $(`#${anchors.fireplaceColor}`).attr('src', source);
        $(`#${anchors.fireplaceColor}`).addClass('active');
      }
    }

    function handleCaseElevation(elevation, color) {
      currentSrc = imgSrc;
      concatSrc(elevation);
      capSrc('.jpg');
      updateImg(anchors.base, imgSrc);
      imgSrc = currentSrc;
      if (color !== options.color[0]) {
        // Color not Color1
        currentSrc = imgSrc;
        concatSrc(elevation);
        concatSrc(color)
        capSrc('.png');
        updateImg(anchors.baseColor, imgSrc);
        imgSrc = currentSrc;
      } else {
        $(`#${anchors.baseColor}`).removeClass('active');
      }
    }

    /**
     * Handle garage case sequence
     *
     * @param  {String} view
     * @param  {String} garage
     * @return {Void}
     */
    function handleCaseGarage(view, garage, color) {
      if (view === options.view[0] || view === options.view[1] || view === options.view[2]) {
        if (garage === options.garage[0]) {
          // Garage: 2Car
          $(`#${anchors.garage}`).removeClass('active');
          $(`#${anchors.garageColor}`).removeClass('active');
        } else {
          // Garage: 3Car
          // Store ref to current imgSrc string
          currentSrc = imgSrc;
          concatSrc(garage);
          capSrc('.png');
          updateImg(anchors.garage, imgSrc);
          // Reset imgSrc
          imgSrc = currentSrc;
          if (color !== options.color[0]) {
            currentSrc = imgSrc;
            concatSrc(garage);
            concatSrc(color)
            capSrc('.png');
            updateImg(anchors.garageColor, imgSrc);
            imgSrc = currentSrc;
          } else {
            $(`#${anchors.garageColor}`).removeClass('active');
          }
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
        currentSrc = imgSrc;
        concatSrc(fireplace);
        capSrc('.png');
        updateImg(anchors.fireplace, imgSrc);
        imgSrc = currentSrc;
        if (color !== options.color[0]) {
          currentSrc = imgSrc;
          concatSrc(fireplace);
          concatSrc(color);
          capSrc('.png');
          updateImg(anchors.fireplaceColor, imgSrc);
          imgSrc = currentSrc;
        } else {
          $(`#${anchors.fireplaceColor}`).removeClass('active');
        }
      } else {
        $(`#${anchors.fireplace}`).removeClass('active');
        $(`#${anchors.fireplaceColor}`).removeClass('active');
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
      $('#frame-vr').attr('src', './vr/index.html');
      setTimeout(function() {
        sendFireplaceValueToChild();
      }, 2000)
    }, 1000);
  })
}

function sendFireplaceValueToChild() {
  const fireplace = $('.input-dom[name="fireplace"]:checked').val();
  const targetWindow = $('#frame-vr')[0].contentWindow;
  targetWindow.postMessage({ type: fireplace }, config.messageOrigin);
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

function setViewOptionToBack() {
  const viewInputs = document.getElementsByName('view');
  // convert nodelist to array
  const inputArr = Array.prototype.slice.call(viewInputs);
  inputArr.forEach(function(input, index) {
    index === 2 ? viewInputs[2].checked = true : viewInputs[index].checked = false;
  });
}
