const fakeAPI = {
  domMenuData: {
    menuFoyer: {
      menuData: [
        {
          sectionHeader: 'scene',
          sectionOptions: ['Foyer', 'GreatRoom', 'Kitchen', 'MasterSuite', 'MasterBath'],
        },
        {
          sectionHeader: 'bedroom 5',
          sectionOptions: ['on', 'off'],
        },
        {
          sectionHeader: 'fireplace',
          sectionOptions: ['on', 'off'],
        },
        {
          sectionHeader: 'nook',
          sectionOptions: ['open', 'closed'],
        },
        {
          sectionHeader: 'rail',
          sectionOptions: ['on', 'off'],
        },
      ],
    },
    menuGreatRoom: {
      menuData: [
        {
          sectionHeader: 'scene',
          sectionOptions: ['Foyer', 'GreatRoom', 'Kitchen', 'MasterSuite', 'MasterBath'],
        },
        {
          sectionHeader: 'bedroom 5',
          sectionOptions: ['on', 'off'],
        },
        {
          sectionHeader: 'fireplace',
          sectionOptions: ['on', 'off'],
        },
        {
          sectionHeader: 'nook',
          sectionOptions: ['open', 'closed'],
        },
        {
          sectionHeader: 'rail',
          sectionOptions: ['on', 'off'],
        },
      ],
    },
    menuKitchen: {
      menuData: [
        {
          sectionHeader: 'scene',
          sectionOptions: ['Foyer', 'GreatRoom', 'Kitchen', 'MasterSuite', 'MasterBath'],
        },
        {
          sectionHeader: 'cabinets',
          sectionOptions: ['option1', 'option2', 'option3'],
        },
        {
          sectionHeader: 'backsplash',
          sectionOptions: ['option1', 'option2', 'option3'],
        },
        {
          sectionHeader: 'counter',
          sectionOptions: ['option1', 'option2', 'option3'],
        },
        {
          sectionHeader: 'flooring',
          sectionOptions: ['option1', 'option2', 'option3'],
        },
        {
          sectionHeader: 'fireplace',
          sectionOptions: ['on', 'off'],
        },
        {
          sectionHeader: 'nook',
          sectionOptions: ['open', 'closed'],
        },
        {
          sectionHeader: 'rail',
          sectionOptions: ['on', 'off'],
        },
      ],
    },
    menuMasterSuite: {
      menuData: [
        {
          sectionHeader: 'scene',
          sectionOptions: ['Foyer', 'GreatRoom', 'Kitchen', 'MasterSuite', 'MasterBath'],
        },
      ]
    },
    menuMasterBath: {
      menuData: [
        {
          sectionHeader: 'scene',
          sectionOptions: ['Foyer', 'GreatRoom', 'Kitchen', 'MasterSuite', 'MasterBath'],
        },
        {
          sectionHeader: 'sink',
          sectionOptions: ['single', 'double'],
        },
      ]
    },
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
      scene: 'panos/mastersuite/Spruce_Int_MasterSuite.png'
    },
    masterBath: {
      scene: 'panos/masterbath/Spruce_Int_MasterBath.png',
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
