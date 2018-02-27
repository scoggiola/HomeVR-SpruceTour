const fakeAPI = {
  domMenuData: {
    menuFoyer: [
      {
        sectionType: 'list',
        sectionHeader: 'camera view',
        sectionOptions: ['Foyer', 'GreatRoom', 'Kitchen', 'MasterSuite', 'MasterBath'],
      },
      {
        sectionType: 'toggle',
        sectionHeader: 'bedroom 5',
        sectionOptions: [{value: 'on', rotation: -41.6}, {value: 'off', rotation: -41.6}],
      },
      {
        sectionType: 'toggle',
        sectionHeader: 'fireplace',
        sectionOptions: [{value: 'on', rotation: -137.1}, {value: 'off', rotation: -137.1}],
      },
      {
        sectionType: 'toggle',
        sectionHeader: 'nook',
        sectionOptions: [{value: 'closed', rotation: -179.9}, {value: 'open', rotation: -179.9}],
      },
      {
        sectionType: 'toggle',
        sectionHeader: 'rail',
        sectionOptions: [{value: 'on', rotation: -114.3}, {value: 'off', rotation: -114.3}],
      },
    ],
    menuGreatRoom: [
      {
        sectionType: 'list',
        sectionHeader: 'camera view',
        sectionOptions: ['Foyer', 'GreatRoom', 'Kitchen', 'MasterSuite', 'MasterBath'],
      },
      {
        sectionType: 'toggle',
        sectionHeader: 'bedroom 5',
        sectionOptions: [{value: 'on', rotation: 68.9}, {value: 'off', rotation: 68.9}],
      },
      {
        sectionType: 'toggle',
        sectionHeader: 'fireplace',
        sectionOptions: [{value: 'on', rotation: -27.7}, {value: 'off', rotation: -27.7}],
      },
      {
        sectionType: 'toggle',
        sectionHeader: 'nook',
        sectionOptions: [{value: 'closed', rotation: -130.3}, {value: 'open', rotation: -130.3}],
      },
      {
        sectionType: 'toggle',
        sectionHeader: 'rail',
        sectionOptions: [{value: 'on', rotation: 48.7}, {value: 'off', rotation: 48.7}],
      },
    ],
    menuKitchen: [
      {
        sectionType: 'list',
        sectionHeader: 'camera view',
        sectionOptions: ['Foyer', 'GreatRoom', 'Kitchen', 'MasterSuite', 'MasterBath'],
      },
      {
        sectionType: 'list',
        sectionHeader: 'cabinets',
        sectionOptions: [{value: 'option1', rotation: 20.2}, {value: 'option2', rotation: 20.2}, {value: 'option3', rotation: 20.2}],
      },
      {
        sectionType: 'list',
        sectionHeader: 'backsplash',
        sectionOptions: [{value: 'option1', rotation: 20.2}, {value: 'option2', rotation: 20.2}, {value: 'option3', rotation: 20.2}],
      },
      {
        sectionType: 'list',
        sectionHeader: 'counter',
        sectionOptions: [{value: 'option1', rotation: 20.2}, {value: 'option2', rotation: 20.2}, {value: 'option3', rotation: 20.2}],
      },
      {
        sectionType: 'list',
        sectionHeader: 'flooring',
        sectionOptions: [{value: 'option1', rotation: 20.2}, {value: 'option2', rotation: 20.2}, {value: 'option3', rotation: 20.2}],
      },
      {
        sectionType: 'toggle',
        sectionHeader: 'fireplace',
        sectionOptions: [{value: 'on', rotation: 169.7}, {value: 'off', rotation: 169.7}],
      },
      {
        sectionType: 'toggle',
        sectionHeader: 'nook',
        sectionOptions: [{value: 'closed', rotation: 174.4}, {value: 'open', rotation: 174.4}],
      },
      {
        sectionType: 'toggle',
        sectionHeader: 'rail',
        sectionOptions: [{value: 'on', rotation: -147.8}, {value: 'off', rotation: -147.8}],
      },
    ],
    menuMasterSuite: [
      {
        sectionType: 'list',
        sectionHeader: 'camera view',
        sectionOptions: ['Foyer', 'GreatRoom', 'Kitchen', 'MasterSuite', 'MasterBath'],
      },
    ],
    menuMasterBath: [
      {
        sectionType: 'list',
        sectionHeader: 'camera view',
        sectionOptions: ['Foyer', 'GreatRoom', 'Kitchen', 'MasterSuite', 'MasterBath'],
      },
      {
        sectionType: 'list',
        sectionHeader: 'sink',
        sectionOptions: [{value: 'single', rotation: -12.8}, {value: 'double', rotation: -12.8}],
      },
    ],
  },
  modalData: {
    appliances: {
      refrigerator: {
        data: {
          title: '36-inch Wide Side-by-Side Refrigerator - 28 cu. ft.',
          model: 'WRS588FIHV',
          msrp: '$1,899.00',
          quickFeatures: [
            '-Exterior Ice with EveryDrop™ Filtration',
            '-In-Door-Ice® Storage',
            '-Accu-Chill™ Temperature Management System'
          ],
          additionalFeatures: [
            {
              title: 'Exterior Ice and Water Dispenser with EveryDrop™ Filtration',
              info: 'Access fresh filtered water and ice without ever opening the refrigerator door.'
            },
            {
              title: 'In-Door-Ice® Storage',
              info: 'Get an extra full shelf in the freezer with an ice bin that\'s been moved to the door.'
            },
            {
              title: 'Accu-Chill™ Temperature Management System',
              info: 'Cool food quickly with technology that senses and adapts to create the ideal environment for food.'
            },
            {
              title: 'Frameless Glass Shelves',
              info: 'Store more items on each shelf with wall-to-wall frameless glass shelves, which offer greater storage flexibility.'
            }
          ],
          imgSrc: '/static_assets/images/refrigerator.png',
          prodImgSrc: './static_assets/images/refrigerator.png',
          colorOptions: [
            {
              name: 'black',
              value: '#000'
            },
            {
              name: 'fingerprint resistant black stainless',
              value: '#5B5959'
            },
            {
              name: 'white',
              value: '#FFF'
            },
            {
              name: 'fingerprint resistant stainless steel',
              value: '#D8D8D8'
            },
          ]
        }
      }
    }
  },
  storageKeyData: {
    kitchen: {
      scene: 'KitchenScenePano',
      sunroom: 'KitchenSunroomPano',
      cabinets: 'KitchenCabinetsPano',
      backsplash: 'KitchenBacksplashPano',
      counter: 'KitchenCounterPano',
      flooring: 'KitchenFlooringPano',
      fireplace: 'KitchenFireplacePano',
      nook: 'KitchenNookPano',
      rail: 'KitchenRailPano',
      all: ['KitchenScenePano', 'KitchenSunroomPano', 'KitchenCabinetsPano', 'KitchenBacksplashPano', 'KitchenCounterPano', 'KitchenFlooringPano', 'KitchenFireplacePano', 'KitchenNookPano', 'KitchenRailPano']
    },
    all: ['KitchenScenePano', 'KitchenSunroomPano', 'KitchenCabinetsPano', 'KitchenBacksplashPano', 'KitchenCounterPano', 'KitchenFlooringPano', 'KitchenFireplacePano', 'KitchenNookPano', 'KitchenRailPano']
  },
  panoUriData: {
    foyer: {
      scene: 'panos/foyer/Spruce_Int_Foyer.jpg',
      bedroom5: 'panos/foyer/Spruce_Int_Foyer_Bed5.png',
      fireplace: 'panos/foyer/Spruce_Int_Foyer_Fireplace.png',
      nook: 'panos/foyer/Spruce_Int_Foyer_Nook.png',
      rail: 'panos/foyer/Spruce_Int_Foyer_Rail.png'
    },
    greatRoom: {
      scene: 'panos/greatroom/Spruce_Int_GreatRoom.jpg',
      bedroom5: 'panos/greatroom/Spruce_Int_GreatRoom_Bed5.png',
      fireplace: 'panos/greatroom/Spruce_Int_GreatRoom_Fireplace.png',
      nook: 'panos/greatroom/Spruce_Int_GreatRoom_Nook.png',
      rail: 'panos/greatroom/Spruce_Int_GreatRoom_Rail.png'
    },
    kitchen: {
      scene: 'panos/kitchen/Spruce_Int_Kitchen.jpg',
      fireplace: 'panos/kitchen/Spruce_Int_Kitchen_Fireplace.png',
      nook: 'panos/kitchen/Spruce_Int_Kitchen_Nook.png',
      rail: 'panos/kitchen/Spruce_Int_Kitchen_Rail.png',
      backsplash: {
        option2: 'panos/kitchen/backsplash/Spruce_DesignCenter_Backsplash2.png',
        option3: 'panos/kitchen/backsplash/Spruce_DesignCenter_Backsplash3.png'
      },
      cabinets: {
        option2: 'panos/kitchen/cabinets/Spruce_DesignCenter_Cabinets2.png',
        option3: 'panos/kitchen/cabinets/Spruce_DesignCenter_Cabinets3.png'
      },
      counter: {
        option2: 'panos/kitchen/counter/Spruce_DesignCenter_Counter2.png',
        option3: 'panos/kitchen/counter/Spruce_DesignCenter_Counter3.png'
      },
      flooring: {
        option2: 'panos/kitchen/flooring/Spruce_DesignCenter_Floor2.png',
        option3: 'panos/kitchen/flooring/Spruce_DesignCenter_Floor3.png'
      }
    },
    masterSuite: {
      scene: 'panos/mastersuite/Spruce_Int_MasterSuite.jpg'
    },
    masterBath: {
      scene: 'panos/masterbath/Spruce_Int_MasterBath.jpg',
      sink: 'panos/masterbath/Spruce_Int_MasterBath_DblSink.png'
    }
  },
  getMenuData: function() {
    return new Promise((resolve, reject) => {
      const menuDescriptor = Object.getOwnPropertyDescriptor(this, 'domMenuData');
      menuDescriptor ? resolve(menuDescriptor.value) : reject(new Error('menu data not found'));
    });
  },
  getModalData: function() {
    return new Promise((resolve, reject) => {
      const modalDescriptor = Object.getOwnPropertyDescriptor(this, 'modalData');
      modalDescriptor ? resolve(modalDescriptor.value) : reject(new Error('modal data not found'));
    });
  },
  getStorageKeyData: function() {
    return new Promise((resolve, reject) => {
      const storageKeyDescriptor = Object.getOwnPropertyDescriptor(this, 'storageKeyData');
      storageKeyDescriptor ? resolve(storageKeyDescriptor.value) : reject(new Error('storage key data not found'));
    });
  },
  getPanoUriData: function() {
    return new Promise((resolve, reject) => {
      const panoUriDescriptor = Object.getOwnPropertyDescriptor(this, 'panoUriData');
      panoUriDescriptor ? resolve(panoUriDescriptor.value) : reject(new Error('pano uri data not found'));
    })
  }
}

export default fakeAPI;
