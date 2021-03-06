import { FETCH_PHONES } from '../actionTypes';

const initialState = {
  phones: {
    mobiles: [
      {
        id: '1',
        name: 'Infinix Hot 8',
        category: 'Infinix',
        price: 40000,
        type: 'New and fairly-used',
        image: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-hot-s8-3.jpg',
        mainSpec: [
            { os: 'Android 9.0 (Pie), XOS 5.0' },
            {sim: 'Dual SIM (Nano-SIM, dual stand-by)' },
            {internal: '32GB 2GB RAM, 64GB 4GB RAM'},
            {card: 'microSDXC (dedicated slot)'},
            {mainCamera: '13 MP, f/1.8, 26mm (wide), 1/3.1", 1.12µm, PDAF, Quad-LED flash, panorama, HDR'},
            {selfieCamera: '8 MP, f/2.0, 25mm (wide), LED flash'},
            {sensors: 'Fingerprint (rear-mounted), accelerometer, proximity, compass'},
            {batteryType: 'Li-Po 5000 mAh, non-removable'},
            {others: 'WLAN, Bluetooth, GPS, Radio, USB'},
            {technology: 'GSM, HSPA, LTE' },
        ],
      },
      {
        id: '2',
        name: 'Infinix Hot 9',
        category: 'Infinix',
        price: 45000,
        type: 'New and fairly-used',
        image: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-hot9-2.jpg',
        mainSpec: [
            { os: 'Android 10, XOS 6.0' },
            {sim: 'Dual SIM (Nano-SIM, dual stand-by)' },
            {internal: '32GB 2GB RAM, 32GB 3GB RAM, 64GB 3GB RAM, 64GB 4GB RAM, 128GB 4GB RAM'},
            {card: 'microSDXC (dedicated slot)'},
            {mainCamera: 'Triple-LED flash, panorama, HDR'},
            {selfieCamera: '8 MP, (wide)'},
            {sensors: 'Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass'},
            {batteryType: 'Li-Po 5000 mAh, non-removable'},
            {others: 'WLAN, Bluetooth, GPS, Radio, USB'},
            {technology: 'GSM, HSPA, LTE' },
        ],
      },
      {
        id: '3',
        name: 'Infinix Hot 10',
        category: 'Infinix',
        price: 55000,
        type: 'New and fairly-used',
        image: 'https://fdn2.gsmarena.com/vv/pics/infinix/infinix-hot10-3.jpg',
        mainSpec: [
            { os: 'Android 10, XOS 6.0' },
            {sim: 'Dual SIM (Nano-SIM, dual stand-by)' },
            {internal: '64GB 3GB RAM, 64GB 4GB RAM, 128GB 4GB RAM, 128GB 6GB RAM'},
            {card: 'microSDXC (dedicated slot)'},
            {mainCamera: 'T16 MP, (wide), PDAF, Quad-LED flash, HDR, panorama'},
            {selfieCamera: '8 MP, (wide)'},
            {sensors: 'Fingerprint (rear-mounted), accelerometer, gyro, proximity, compass'},
            {batteryType: 'Li-Po 5200 mAh, non-removable'},
            {others: 'WLAN, Bluetooth, GPS, Radio, USB'},
            {technology: 'GSM, HSPA, LTE' },
        ],
      },
    ]
  }
}

const phoneReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PHONES:
      return {
        ...state,
        phones: action.payload,
      };
    default:
      return state;
  };
};

export default phoneReducer;